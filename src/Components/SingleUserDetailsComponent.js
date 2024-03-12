import React, { useEffect, useState } from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import '../Css/usertable.css'
import CareTableComponent from './CareTableComponent'
import FinancialTableComponent from './FinancialTableComponent'
import axios from 'axios'

const SingleUserDetailsComponent = (props) => {
  const {selectedPolicy} = props

  const { theme } = useTheme()
  const [loading, setLoading] = useState(true)
  const [patientInfo, setPatientInfo] = useState(null)
  const [careInfo, setCareInfo] = useState([])
  const [financialInfo, setFinancialInfo] = useState([])

  useEffect(() => {
    grabUserInfo()
  }, [])

  const grabUserInfo = () => {
    let url = `https://intellasurebackend-docker.onrender.com/level1/${selectedPolicy}`
    axios.get(url)
    .then((response) => {
      let newPatientInfo = {
        name: response.data.patient_info[0].name,
        insurance: response.data.patient_info[0].insurance_company,
        policy: response.data.patient_info[0].policy_id,
        prefix: response.data.patient_info[0].prefix,
        network: response.data.patient_info[0].facility,
      }
      setPatientInfo(newPatientInfo)
      setFinancialInfo(response.data.billing)
      setCareInfo(response.data.patient_info)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className={`user-parent-${theme}`}>
      <div className='user-row'>
        <div className='user-header'>
          <p className={`user-name-${theme}`}>{loading ? '' : patientInfo.name}</p>
        </div>
      </div>
      {
        loading
          ? null
          : <><div className={`user-row-${theme}`}>
              <div className='user-info'>
                <p className={`user-info-text-${theme}`}>{loading ? '' : patientInfo.insurance}</p>
                <p style={{marginLeft: '8px', marginRight: '8px'}}>|</p>
                <p className={`user-info-text-${theme}`}>{loading ? '' : patientInfo.prefix}</p>
                <p style={{marginLeft: '8px', marginRight: '8px'}}>|</p>
                <p className={`user-info-text-${theme}`}>{loading ? '' : patientInfo.policy}</p>
                {/* <p style={{marginLeft: '8px', marginRight: '8px'}}>|</p>
                <p className='user-info-text'>In Network</p> */}
              </div>
            </div>
            <div className='user-row-tables'>
              <div className={`user-table-${theme} margins`}>
                <div>
                  <CareTableComponent careInfo={careInfo}/>
                </div>
              </div>
              <div className={`user-table-${theme}`}>
                <FinancialTableComponent financialInfo={financialInfo}/>
              </div>
            </div></>
      }
    </div>
  )
}

export default SingleUserDetailsComponent
