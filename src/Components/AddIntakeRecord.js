import { faLightbulb, faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import '../Css/Intake.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import axios from 'axios'
import { useUser } from '../Contexts/UserContext'

const AddIntakeRecord = () => {

  const { theme } = useTheme();
  const { toggleShowAddIntakeRecord } = useApp()
  const { userProfile } = useUser()

  const [client, setClient] = useState('')
  const [dob, setDob] = useState('')
  const [prefix, setPrefix] = useState('')
  const [insurance, setInsurance] = useState('')
  const [payer_id, setPayer_id] = useState('')
  const [source, setSource] = useState('')
  const [coordinator, setCoordinator] = useState('')
  const [summaryOut, setSummaryOut] = useState('Good Vob')
  const [details, setDetails] = useState('')
  const [outNetworkDetails, setOutNetworkDetails] = useState('')
  const [inNetworkDetails, setInNetworkDetails] = useState('')
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState('')
  const [acitvePolicy, setActivePolicy] = useState(false)
  const [booked, setBooked] = useState(false)
  const [checkedIn, setCheckedIn] = useState(false)

  const [insuranceOptions, setInsuranceOptions] = useState([])

  const handleClientNammeChnage = (e) => {
    setClient(e.target.value)
  }

  const handlePrefixChange = (e) => {
    setPrefix(e.target.value)
  }

  const handleDobChnage = (e) => {
    setDob(e.target.value)
  }

  const handleInsuranceChnage = (e) => {
    setInsurance(e.target.value)
  }

  const handleSourceChnage = (e) => {
    setSource(e.target.value)
  }

  const handleCoordinatorChnage = (e) => {
    setCoordinator(e.target.value)
  }

  const handleSummaryOutChnage = (text) => {
    setSummaryOut(text)
  }

  const handleInNetworkDetailsChange = (e) => {
    setInNetworkDetails(e.target.value)
  }

  const handleOutNetworkDetailsChange = (e) => {
    setOutNetworkDetails(e.target.value)
  }

  const handleNotesChange = (e) => {
    setNotes(e.target.value)
  }

  const handleDateChnage = (e) => {
    setDate(e.target.value)
  }

  const handleActivePolicy = () => {
    setActivePolicy(!acitvePolicy)
  }

  const handleBooked = () => {
    setBooked(!booked)
  }

  const handleCheckedIn = () => {
    setCheckedIn(!checkedIn)
  }

  useEffect(() => {
    grabInsuranceOptions()
  }, [])

  const grabInsuranceOptions = () => {
    const url = 'https://intellasurebackend-docker.onrender.com//verify_tx_payers'
    axios.get(url)
      .then((response) => {
        setInsuranceOptions(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const generateTenDigitNumber = () => {
    const min = 1000000000;
    const max = 9999999999;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number.toString()
  }

  function getCurrentDateFormatted() {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based in JS, add 1
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear().toString();
    return `${month}/${day}/${year}`;
  }

  const handleInsuranceChange = (e) => {
    setInsurance(e.target.value);
  };

  const sendDataToServer = () => {
    let intakeId = generateTenDigitNumber()
    let intakeData = { data: {
      "intake_id": intakeId,
      "name": client,
      "prefix": prefix.slice(0, 3),
      "policy_id": prefix,
      "insurance": insurance,
      "source": source,
      "coordinator":userProfile.priviledges === 'member' ? userProfile.name : coordinator,
      "summary_out": null,
      "booked": booked,
      "checked_in": checkedIn,
      "out_network_details": outNetworkDetails,
      "in_network_details": inNetworkDetails,
      "notes": notes,
      "date": getCurrentDateFormatted()
    }}

    console.log(JSON.stringify(intakeData))

    const url = 'https://intellasurebackend-docker.onrender.com/update_intake_table/'
    
    axios.post(url, intakeData)
    .then((response) => {
      toggleShowAddIntakeRecord()
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  const updatedSelectedInsurance = (payer_id, insurance) => {
    console.log(payer_id)
    console.log(insurance)
    setInsurance(insurance)
    setPayer_id(payer_id)
  }

  return (
    <div className={`intake-container-${theme}`}>
      <div className='header'>
        <p className={`page-title text-${theme}`}>Add New Intake Record</p>
        <FontAwesomeIcon onClick={() => {toggleShowAddIntakeRecord()}} icon={faX} height={24} width={24} color='#e94f4e' />
      </div>
      <div>
        <div className='row'>
          <p className={`text-${theme}`} title='figure out how to integrate'>Client</p>
          <input 
            className={`input-${theme}`}
            placeholder='client name...'
            value={client}
            onChange={(text) => {handleClientNammeChnage(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`} title='figure out how to integrate'>Date Of Birth</p>
          <input 
            className={`input-${theme}`}
            placeholder='dobgit status...'
            value={dob}
            onChange={(text) => {handleDobChnage(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Policy</p>
          <input 
            className={`input-${theme}`}
            placeholder='policy number...'
            value={prefix}
            onChange={(text) => {handlePrefixChange(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Insurance</p>
          <select
            value={insurance}
            onChange={(e) => updatedSelectedInsurance(e.target.value, e.target.options[e.target.selectedIndex].text)}
            className={`input-${theme}`}
          >
            <option value="">Select Insurance</option>
            {
              insuranceOptions.map((option) => {
                return(
                  <option key={option.payer_id} value={option.insurance}>
                    {option.insurance}
                  </option>
                )
              })
            }
          </select>
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Source</p>
          <input 
            className={`input-${theme}`}
            placeholder='source...'
            value={source}
            onChange={(text) => {handleSourceChnage(text)}}
          />
        </div>
        {
          userProfile.priviledges === 'member'
            ? null
            : <div className='row'>
                <p className={`text-${theme}`}>Coordinator</p>
                <input 
                  className={`input-${theme}`}
                  placeholder='coordinator name...'
                  value={coordinator}
                  onChange={(text) => {handleCoordinatorChnage(text)}}
                />
              </div>
        }
        {/* <div className='row'>
          <p className={`text-${theme}`}>Summary Out</p>
          <div>
            <label>
              <input 
                type="radio"
                name="summary"
                value="Good Vob"
                checked={summaryOut === 'Good Vob'}
                onChange={() => handleSummaryOutChnage('Good Vob')}
              /> Good Vob
            </label>
            <label>
              <input 
                type="radio"
                name="summary"
                value="Bad Vob"
                checked={summaryOut === 'Bad Vob'}
                onChange={() => handleSummaryOutChnage('Bad Vob')}
              /> Bad Vob
            </label>
          </div>
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Booked</p>
          <div>
            <label>
              <input 
                type="radio"
                name="booked"
                value="yes"
                checked={booked === true}
                onChange={() => handleBooked()}
              /> Yes
            </label>
            <label>
              <input 
                type="radio"
                name="booked"
                value="no"
                checked={booked === false}
                onChange={() => handleBooked()}
              /> No
            </label>
          </div>
        </div>
        <div className='row'>
          <p className={`text-${theme}`}>Checked In</p>
          <div>
            <label>
              <input 
                type="radio"
                name="checkedin"
                value="yes"
                checked={checkedIn === true}
                onChange={() => handleCheckedIn()}
              /> Yes
            </label>
            <label>
              <input 
                type="radio"
                name="checkedin"
                value="no"
                checked={checkedIn === false}
                onChange={() => handleCheckedIn()}
              /> No
            </label>
          </div>
        </div>
        <div className='row'>
          <p className={`text-${theme}`}> In-Network Details</p>
          <input 
            className={`input-${theme}`}
            placeholder='details...'
            value={inNetworkDetails}
            onChange={(text) => {handleInNetworkDetailsChange(text)}}
          />
        </div>
        <div className='row'>
          <p className={`text-${theme}`}> Out-Network Details</p>
          <input 
            className={`input-${theme}`}
            placeholder='details...'
            value={outNetworkDetails}
            onChange={(text) => {handleOutNetworkDetailsChange(text)}}
          />
        </div> */}
        <div className='row'>
          <p className={`text-${theme}`}>Notes</p>
          <input 
            className={`input-${theme}`}
            placeholder='notes...'
            value={notes}
            onChange={(text) => {handleNotesChange(text)}}
          />
        </div>
      </div>
      <div onClick={() => {sendDataToServer()}} className='button-container'>
        <p className='submit-button'>
          Submit Record
        </p>
      </div>
    </div>
  )
}

export default AddIntakeRecord
