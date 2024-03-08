import React, { useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import '../Css/usertable.css'

const CareTableComponent = (props) => {
  const {careInfo} = props

  const { theme } = useTheme()

  const [sort, setSort] = useState('asc')
  const [sortColumn, setSortColumn] = useState('prefix')

  function convertDateToMMDDYYYY(dateString) {
    const date = new Date(dateString);
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0'); // UTC months from 1-12
    const dd = String(date.getUTCDate()).padStart(2, '0'); // UTC day of the month
    const yyyy = date.getUTCFullYear(); // UTC full year
  
    return `${mm}/${dd}/${yyyy}`;
  }

  function calculateDaysBetweenDates(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const diffInTime = end.getTime() - start.getTime();
    const diffInDays = Math.round(diffInTime / millisecondsPerDay);
    return diffInDays;
  }

  return (
    <div className='user-table-parent'>
      <table className='user-section'>
        <thead className={`user-table-header-${theme}`}>
          <tr>
            <th className='table-header-text'>
              Facility 
            </th>
            <th className='table-header-text'>
              Care
            </th>
            <th className='table-header-text'>
              Day In
            </th>
            <th className='table-header-text'>
              Day Out
            </th>
            <th className='table-header-text'>
              Days
            </th>
          </tr>
        </thead>
        <tbody className={`user-table-body-${theme}`}>
          {
            careInfo.length >= 1
              ? <>
                  {
                    careInfo.map((item) => {
                      return(
                        <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
                          <td>{item.facility}</td>
                          <td>{item.level_of_care}</td>
                          <td>{convertDateToMMDDYYYY(item.admission_date)}</td>
                          <td>{convertDateToMMDDYYYY(item.discharge_date)}</td>
                          <td>{calculateDaysBetweenDates(item.admission_date, item.discharge_date)} Days</td>
                        </tr>
                      )
                    })
                  }
                </>
              : <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px', width: '100%'}}>
                  <p>No Records</p>
                </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default CareTableComponent
