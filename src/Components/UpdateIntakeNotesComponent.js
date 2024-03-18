import { faLightbulb, faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../Css/Intake.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import axios from 'axios'
import { useUser } from '../Contexts/UserContext'

const UpdateIntakeNotesComponent = (props) => {
  const {selectedIntakeId} = props

  const { theme } = useTheme();
  const { toggleUpdateIntakeRecord, updatingRecord } = useApp()
  const { userProfile } = useUser()

  const [records, setRecords] = useState([])

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
        console.log(error);
      });
  }

  return (
    <div className={`intake-container-${theme}`}>
      <div className='header'>
        <p className={`page-title text-${theme}`}>Intake Record Notes</p>
        <FontAwesomeIcon icon={faX} height={24} width={24} color='#e94f4e' />
      </div>
      {
        records.length > 0 
          ? records.map((record) => {
            return(
              <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} className='row'>
                <p className={`text-${theme}`}>{record.notes}</p>
                <p>{record.date}</p>
              </div>
            )
          })
          : <div><p>No Notes Found</p></div>
      }
      {/* <div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} className='row'>
          <p className={`text-${theme}`} title='figure out how to integrate'>{</p>
          <p>{updatingRecord.name}</p>
        </div>
      </div> */}
    </div>
  )
}

export default UpdateIntakeNotesComponent
