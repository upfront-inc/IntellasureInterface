import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import '../Css/usertable.css'
import ClaimTableRecordComponent from './ClaimTableRecordComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import ClaimDetailsRocordComponent from './ClaimDetailsRocordComponent'

const FollowupDetailsTableComponent = (props) => {
  const {claimId} = props

  const { theme } = useTheme()

  const [results, setResults] = useState([])

  useEffect(() => {
    grabClaimDetails()
  }, [])
  
  const grabClaimDetails = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://intellasurebackend-docker.onrender.com/claims/get_claimid_details/${claimId}`,
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data)
      setResults(response.data)
      // console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className='user-table-parent'>
      <table className='user-section'>
        <thead className={`user-table-header-${theme}`}>
          <tr>
            {/* <th style={{minWidth: '150px'}} className='table-header-text'>
              Check Box
            </th> */}
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Claim Id
            </th>
            {/* <th style={{minWidth: '200px'}} className='table-header-text'>
              Name
            </th> */}
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Facility
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Network
            </th>
            <th style={{minWidth: '350px'}} className='table-header-text'>
              Status
            </th>
            {/* <th style={{minWidth: '150px'}} className='table-header-text'>
              Notes
            </th> */}
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Charged Total
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Paid Total
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Balance Total
            </th>
            <th style={{minWidth: '150px'}} className='table-header-text'>
              Start Date
            </th>
            {/* <th style={{minWidth: '150px'}} className='table-header-text'>
              End Date
            </th> */}
          </tr>
        </thead>
        <tbody className={`user-table-body-${theme}`}>
          {
            results.length >= 1
              ? <>
                  {
                    results.map((item) => {
                      return(
                        <ClaimDetailsRocordComponent item={item}/>
                      )
                    })
                  }
                </>
              : <tr className={`user-table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
                  <td></td>
                  <td></td>
                  <td></td>
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

export default FollowupDetailsTableComponent
