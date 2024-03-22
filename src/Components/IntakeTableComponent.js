import React, {useState} from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import AddIntakeRecord from './AddIntakeRecord'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { useUser } from '../Contexts/UserContext'
import IntakeItemComponent from './IntakeItemComponent'

const IntakeTableComponent = (props) => {

  const {results, setSelectedIntakeId, setShowIntakeRecordsNotes, getIntakeRecords} = props

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
              Date 
            </th>
            <th className='table-header-text column'>
              Checked In
            </th>
            <th className='table-header-text column'>
              Booked
            </th>
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
            {
              userProfile.privileges === 'staff'
                ? null 
                : <th className='table-header-text column'>
                    Coordinator 
                  </th>
            }
            <th className='table-header-text column'>
              Summary Out 
            </th>
            {
              userProfile.privileges === 'staff'
                ? null 
                : <th style={{minWidth: '200px'}} className='table-header-text column'>
                    (In) Admission %
                  </th>
            }
            <th className='table-header-text column'>
              (In) Admission
            </th>
            <th className='table-header-text column'>
              In-Network Ded.
            </th>
            <th className='table-header-text column'>
              In-Network OOP
            </th>
            {
              userProfile.privileges === 'staff'
                ? null 
                : <th style={{minWidth: '200px'}} className='table-header-text column'>
                    (Out) Admission %
                  </th>
            }
            <th className='table-header-text column'>
              (Out) Admission
            </th>
            <th style={{minWidth: '200px'}} className='table-header-text column'>
              Out-Network Ded.
            </th>
            <th style={{minWidth: '200px'}} className='table-header-text column'>
              Out-Network OOP
            </th>
            <th className='table-header-text column'>
              Source 
            </th>
            <th className='table-header-text column'>
              Notes
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {
            results.length > 0
              ? results.map((item) => {
                  // console.log('item: ', item)
                  return(
                    <>
                    <IntakeItemComponent getIntakeRecords={getIntakeRecords} setShowIntakeRecordsNotes={setShowIntakeRecordsNotes} setSelectedIntakeId={setSelectedIntakeId} item={item}/>
                    </>
                  )
                })
              : <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px', minWidth: '350px'}}>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* <td>{item.checked_in ? 'Yes' : 'No'}</td> */}
                  <td></td>
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

export default IntakeTableComponent
