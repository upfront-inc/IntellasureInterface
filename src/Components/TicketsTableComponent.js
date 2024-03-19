import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import axios from 'axios'

const TicketsTableComponent = () => {

  const { theme } = useTheme()

  const [records, setRecords] = useState([])

  useEffect(() => {
    grabAllTickets()
  }, [])

  const grabAllTickets = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://intellasurebackend-docker.onrender.com/support/get_tickets',
      headers: { 
        'Content-Type': 'application/json'
      },
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.length));
      setRecords(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th className='table-header-text'>
              Name
            </th>
            <th className='table-header-text'>
              Email
            </th>
            <th className='table-header-text'>
              Ticket
            </th>
            <th className='table-header-text'>
              Subject
            </th>
            <th className='table-header-text'>
              Status
            </th>
            <th className='table-header-text'>
              Details
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {
            records.length > 0 
              ? records.map((record, index) => {
                  return(
                    <tr className={`table-content-row-${theme}`} key={index} style={{textAlign: 'center'}}>
                      <td>{record.name}</td>
                      <td>{record.email}</td>
                      <td>{record.ticket_id}</td>
                      <td>{record.subject}</td>
                      <td style={{minWidth: '450px'}}>{record.message}</td>
                      <td>{record.status ? 'Open' : 'Close'}</td>
                    </tr>
                  )
                })
              : <tr className={`table-content-row-${theme}`} style={{textAlign: 'center'}}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default TicketsTableComponent
