import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import InsurancePrefixRecordComponent from './InsurancePrefixRecordComponent'
import { useUser } from '../Contexts/UserContext'
import axios from 'axios'

const InsurancePrefixRecordsTableComponent = (props) => {
  const {setViewingTab, selectedPrefix, setSelectedPolicy, selectedNetwor} = props

  const { theme } = useTheme()
  const { userProfile } = useUser()

  const [records, setRecords] = useState([])

  useEffect(() => {
    grabInsuranceRecords()
  }, [])

  const grabInsuranceRecords = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://intellasurebackend-docker.onrender.com/level2/${selectedPrefix}_${selectedNetwor}`,
      headers: { }
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
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            {
              userProfile.privileges === 'staff' || userProfile.privileges === 'manager'
                ? null
                : <th className='table-header-text'>
                    Name 
                  </th>
            }
            <th className='table-header-text'>
              Prefix 
            </th>
            {
              userProfile.privileges === 'staff' || userProfile.privileges === 'manager'
                ? null
                : <th className='table-header-text'>
                    Policy 
                  </th>
            }
            <th className='table-header-text'>
              Insurance 
            </th>
            <th className='table-header-text'>
              Network 
            </th>
            <th className='table-header-text'>
              Facility 
            </th>
            {
              userProfile.privileges === 'staff' || userProfile.privileges === 'manager'
                ? null
                : <><th className='table-header-text'>
                    Res. Days
                  </th>
                  <th className='table-header-text'>
                    Detox Days
                  </th></>
            }
            {
              userProfile.privileges === 'staff' || userProfile.privileges === 'manager' 
                ? null
                : <>
                    <th className='table-header-text'>
                      Avg. Charges 
                    </th>
                    <th className='table-header-text'>
                      Avg. Paid 
                    </th>
                    <th className='table-header-text'>
                      Payout % 
                    </th>
                  </>
            }
            <th className='table-header-text'>
              Admission 
            </th>
            {
              userProfile.privileges === 'admin' || userProfile.privileges === 'dev' || userProfile.privileges === 'owner'
                ? <th className='table-header-text'>
                    Admission % 
                  </th>
                : null
            }
            <th className='table-header-text'>
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          {
            records.length > 0
              ? <>
                  {
                    records.map((record) => {
                      console.log(record)
                      return(
                        <InsurancePrefixRecordComponent setSelectedPolicy={setSelectedPolicy} setViewingTab={setViewingTab} record={record}/>
                      )
                    })
                  }
                </>
              : null
          }
        </tbody>
      </table>
    </div>
  )
}

export default InsurancePrefixRecordsTableComponent
