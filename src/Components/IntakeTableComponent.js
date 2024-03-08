import React, {useState} from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import AddIntakeRecord from './AddIntakeRecord'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { useUser } from '../Contexts/UserContext'

const IntakeTableComponent = (props) => {

  const {results} = props

  const { theme } = useTheme()
  const { toggleUpdateIntakeRecord, setUpdatingRecord } = useApp()
  const { userProfile } = useUser()

  const [sort, setSort] = useState('asc')
  const [sortColumn, setSortColumn] = useState('prefix')

  const updateSortWithColumn = (sort, column) => {
    setSort(sort)
    setSortColumn(column)
  }

  const updateRecord = (record) => {
    toggleUpdateIntakeRecord()
    setUpdatingRecord(record)
  }

  function convertDateToCustomFormat(dateStr) {
    const date = new Date(dateStr);
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0'); // UTC months from 1-12
    const dd = String(date.getUTCDate()).padStart(2, '0'); // UTC day of the month
    const yyyy = date.getUTCFullYear(); // UTC full year

    return `${mm}/${dd}/${yyyy}`;
  }

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th className='table-header-text column'>
              Client
            </th>
            <th className='table-header-text column'>
              Prefix 
            </th>
            <th className='table-header-text column'>
              Policy 
            </th>
            <th className='table-header-text column'>
              Insurance 
            </th>
            <th className='table-header-text column'>
              Active 
            </th>
            <th className='table-header-text column'>
              Source 
            </th>
            <th className='table-header-text column'>
              Coordinator 
            </th>
            <th className='table-header-text column'>
              Summary Out 
            </th>
            <th className='table-header-text column'>
              Booked
            </th>
            {/* <th className='table-header-text column'>
              Checked In
            </th> */}
            <th className='table-header-text column'>
              In-Network Details
            </th>
            <th className='table-header-text column'>
              Out-Network Details
            </th>
            <th className='table-header-text column'>
              Notes
            </th>
            <th className='table-header-text column'>
              Date 
            </th>
            <th style={{minWidth: '0px'}} className='table-header-text update-column'>
              Update
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {
            results.map((item) => {
              return(
                <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px', minWidth: '350px'}}>
                  <td>{item.name}</td>
                  <td style={{minWidth: '0px'}}>{item.prefix === 'na' ? '--' : item.prefix}</td>
                  <td>{item.policy_id === 'na' ? '--' : item.policy_id}</td>
                  <td>{item.insurance}</td>
                  <td>{item.active ? 'Yes' : 'No'}</td>
                  <td style={{minWidth: '0px'}}>{item.source}</td>
                  <td>{item.coordinator}</td>
                  <td>{item.summary_out}</td>
                  <td>{item.booked ? 'Yes' : 'No'}</td>
                  {/* <td>{item.checked_in ? 'Yes' : 'No'}</td> */}
                  <td>{item.in_network_details}</td>
                  <td>{item.out_network_details}</td>
                  <td>{item.notes}</td>
                  <td>{convertDateToCustomFormat(item.date)}</td>
                  <td onClick={() => {updateRecord(item)}} style={{minWidth: '0px'}} className='update-column'><FontAwesomeIcon icon={faEdit}/></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default IntakeTableComponent
