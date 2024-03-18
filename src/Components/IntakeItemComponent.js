import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

const IntakeItemComponent = (props) => {
  const {item, setSelectedIntakeId, setShowIntakeRecordsNotes} = props

  const { theme } = useTheme()
  const { toggleUpdateIntakeRecord, setUpdatingRecord } = useApp()

  const [coordinator, setCoordinator] = useState('')

  useEffect(() => {
    grabUserByUserid(item.coordinator)
  }, [])

  const updateRecord = (record) => {
    toggleUpdateIntakeRecord()
    setUpdatingRecord(record)
  }

  const grabUserByUserid = (userid) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://intellasurebackend-docker.onrender.com/users/${userid}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    axios.request(config)
      .then((response) => {
        setCoordinator(response.data.data.name)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function convertDateToCustomFormat(dateStr) {
    const date = new Date(dateStr);
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0'); // UTC months from 1-12
    const dd = String(date.getUTCDate()).padStart(2, '0'); // UTC day of the month
    const yyyy = date.getUTCFullYear(); // UTC full year

    return `${mm}/${dd}/${yyyy}`;
  }

  function floatToDollarAmount(number) {
    const numberWithCommas = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return "$" + numberWithCommas;
  }

  const UpdateViewingNotes = (intakeId) => {
    setSelectedIntakeId(intakeId)
    setShowIntakeRecordsNotes(true)
  }


  return (
    <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px', minWidth: '350px'}}>
      <td>{item.name}</td>
      <td style={{minWidth: '0px'}}>{item.prefix === 'na' ? '--' : item.prefix}</td>
      <td>{item.policy_id === 'na' ? '--' : item.policy_id}</td>
      <td>{item.insurance}</td>
      <td>{item.active === "YES" ? 'Yes' : 'No'}</td>
      <td style={{minWidth: '0px'}}>{item.source}</td>
      <td>{coordinator}</td>
      <td>{item.summary_out}</td>
      <td>{item.booked ? 'Yes' : 'No'}</td>
      {/* <td>{item.checked_in ? 'Yes' : 'No'}</td> */}
      <td>{item.inn_deductible === null ? '$0' : floatToDollarAmount(item.inn_deductible)}</td>
      <td>{item.in_network_oop === null ? '$0' : floatToDollarAmount(item.in_network_oop)}</td>
      <td>{item.onn_deductible === null ? '$0' : floatToDollarAmount(item.onn_deductible)}</td>
      <td>{item.out_network_oop === null ? '$0' : floatToDollarAmount(item.out_network_oop)}</td>
      <td onClick={() => {UpdateViewingNotes(item.intake_id)}}><span style={{color: 'blue'}}>View Notes</span></td>
      <td>{convertDateToCustomFormat(item.date)}</td>
      <td onClick={() => {updateRecord(item)}} style={{minWidth: '0px'}} className='update-column'><FontAwesomeIcon icon={faEdit}/></td>
    </tr>
  )
}

export default IntakeItemComponent
