import { faLightbulb, faMoon, faPlus, faSun, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../Css/Intake.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import axios from 'axios'
import { useUser } from '../Contexts/UserContext'

const UpdateIntakeNotesComponent = (props) => {
  const {selectedIntakeId, setShowIntakeRecordsNotes} = props

  const { theme } = useTheme();
  const { toggleUpdateIntakeRecord, updatingRecord } = useApp()
  const { userProfile } = useUser()

  const [records, setRecords] = useState([])

  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    grabAllNotes(selectedIntakeId)
  }, [])

  const grabAllNotes = (intakeId) => {
    console.log(intakeId)
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://intellasurebackend-docker.onrender.com/intake/get_intake_note/${intakeId}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios.request(config)
      .then((response) => {
        setRecords(response.data)
      })
      .catch((error) => {
        console.log('error getting notes: ',error);
      });
  }

  const createNewNote = () => {
    let intakeData = {
      "intake_id": selectedIntakeId,  
      "date": convertDateToMMDDYYYY(new Date()),
      "notes": newNote
    }

    console.log('intake data: ', intakeData)
    const url = `https://intellasurebackend-docker.onrender.com/intake/update_intake_note`
    
    axios.post(url, intakeData)
    .then((response) => {
      setNewNote('')
      grabAllNotes(selectedIntakeId)
    })
    .catch((error) => {
      console.log('error adding new note: ', error);
    });
  }

  function convertDateToMMDDYYYY(dateString) {
    const date = new Date(dateString);
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0'); // UTC months from 1-12
    const dd = String(date.getUTCDate()).padStart(2, '0'); // UTC day of the month
    const yyyy = date.getUTCFullYear(); // UTC full year
  
    return `${yyyy}-${mm}-${dd}`;
  }

  return (
    <div className={`intake-container-${theme}`}>
      <div className='header'>
        <p className={`page-title text-${theme}`}>Intake Record Notes</p>
        <div onClick={() => {setShowIntakeRecordsNotes(false)}}>
          <FontAwesomeIcon icon={faX} height={24} width={24} color='#e94f4e' />
        </div>
      </div>
      <div>
        <div>
          {
            records.length > 0 
              ? records.map((record) => {
                return(
                  <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} className='row'>
                    <p className={`text-${theme}`}>{record.notes}</p>
                    <p>{convertDateToMMDDYYYY(record.date)}</p>
                  </div>
                )
              })
              : <div><p>No Notes Found</p></div>
          }
        </div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <input 
            style={{
              flex: 1,
              width: '80%',
              fontSize: '18px',
              border: 0,
              borderBottom: '2px solid black',
            }}
            placeholder='enter new note...'
            value={newNote}
            onChange={(e) => {setNewNote(e.target.value)}}
          />
          <div onClick={() => {createNewNote()}}>
            <p style={{
              marginLeft: '8px',
              backgroundColor: '#0b8ec4',
              paddingLeft: '8px',
              paddingRight: '8px',
              paddingTop: '16px',
              paddingBottom: '16px',
              borderRadius: 8,
              color: 'white',
              fontWeight: 'bold'
            }}>Add New Note</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateIntakeNotesComponent
