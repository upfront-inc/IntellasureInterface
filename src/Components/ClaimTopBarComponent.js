import React from 'react'
import '../Css/Content.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

const ClaimTopBarComponent = (props) => {
  const {claimsTab, setClaimsTab, activeFilter, 
    setActivateFilter, selectedTab, 
    toggleViewedResults, previousPage, nextPage,
    currentRecords, recordsPerPage, currentPage} = props

  const { theme } = useTheme()
  const { toggleShowAddIntakeRecord } = useApp()

  return (
    <div className={`top-bar-claims-${theme}`}>
      {/* <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('all')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>ALL</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('paid')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>PAID</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('rejected')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>REJECTED AT INSURANCE</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('denied')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>DENIED AT INSURANCE</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('sent')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>SEND TO INSURANCE</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('atInsurance')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>CLAIM AT INSURANCE</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('pending')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>PENDING INSURANCE AUTH</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('writeoff')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>WRITEOFF</p>
      </div>
      <div style={{
          marginRight: '12px',
          padding: '4px',
          paddingLeft: '6px',
          paddingRight: '6px',
          backgroundColor: '#0b8ec4',
          borderRadius: '6px',
          lineHeight: 0
        }} onClick={() => {toggleViewedResults('balance')}}>
        <p style={{fontWeight: 'bold', color: 'white'}}>BALANCE DUE PATIENT</p>
      </div> */}
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {
          claimsTab === 'collab'
            ? <>
                <div style={{
                  height: '50px',
                  paddingLeft: '12px',
                  paddingRight: '12px', 
                  color: '#0b8ec4'
                }}>
                  <p style={{fontWeight: 'bold'}}>Collab Md.</p>
                </div>
                <div onClick={() => {setClaimsTab('avaiya')}} style={{
                  height: '50px',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                }}>
                  <p style={{fontWeight: 'bold'}}>Avaiya</p>
                </div>
              </>
            : <>
                <div onClick={() => {setClaimsTab('collab')}} style={{
                  height: '50px',
                  paddingLeft: '12px',
                  paddingRight: '12px', 
                }}>
                  <p style={{fontWeight: 'bold'}}>Collab Md.</p>
                </div>
                <div style={{
                  height: '50px',
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  color: '#0b8ec4'
                }}>
                  <p style={{fontWeight: 'bold'}}>Avaiya</p>
                </div>
              </>
        }
      </div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div style={{marginRight: '16px',display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesomeIcon onClick={currentPage > 1 ? previousPage : null} icon={faChevronLeft} height={28} width={28} color='black'/>
          {
            currentPage > 1
              ? <p>{currentPage - 1}</p>
              : null
          }
          <p style={{fontWeight: 'bold', fontSize: '20px', marginRight: '8px', marginLeft: '8px'}}>{currentPage}</p>
          {
            currentPage < 33
              ? <p>{currentPage + 1}</p>
              : null
          }
          <FontAwesomeIcon onClick={currentPage < 33 ? nextPage : null} icon={faChevronRight} height={28} width={28} color='black'/>
        </div>
        {
          activeFilter
            ? <div style={{color: '#0b8ec4'}}  onClick={() => {setActivateFilter(false)}}>
                <p style={{fontWeight: 'bold'}}>Filter</p>
              </div>
            : <div onClick={() => {setActivateFilter(true)}}>
                <p style={{fontWeight: 'bold'}}>Filter</p>
              </div>
        }
      </div>
      {
        activeFilter
          ? <div style={{
              position: 'absolute',
              right: 18,
              top: 76,
              backgroundColor: 'lightgrey',
              zIndex: 3,
              padding: '16px',
              borderRadius: '8px'
            }}>
              {
                selectedTab === 'all'
                  ? <div style={{marginRight: '12px'}}>
                      <p style={{fontWeight: 'bold', color: '#0b8ec4'}}>ALL</p>
                    </div>
                  : <div style={{marginRight: '12px'}} onClick={() => {toggleViewedResults('all')}}>
                      <p style={{fontWeight: 'bold', color: 'black'}}>ALL</p>
                    </div>
              }
              {
                selectedTab === 'paid'
                  ? <div style={{marginRight: '12px'}}>
                      <p style={{fontWeight: 'bold', color: '#0b8ec4'}}>PAID</p>
                    </div>
                  : <div style={{marginRight: '12px'}} onClick={() => {toggleViewedResults('paid')}}>
                      <p style={{fontWeight: 'bold', color: 'black'}}>PAID</p>
                    </div>
              }
              {
                selectedTab === 'rejected'
                  ? <div style={{marginRight: '12px'}}>
                      <p style={{fontWeight: 'bold', color: '#0b8ec4'}}>REJECTED AT INSURANCE</p>
                    </div>
                  : <div style={{marginRight: '12px'}} onClick={() => {toggleViewedResults('rejected')}}>
                      <p style={{fontWeight: 'bold', color: 'black'}}>REJECTED AT INSURANCE</p>
                    </div>
              }
              {
                selectedTab === 'denied'
                  ? <div style={{marginRight: '12px'}}>
                      <p style={{fontWeight: 'bold', color: '#0b8ec4'}}>DENIED AT INSURANCE</p>
                    </div>
                  : <div style={{marginRight: '12px'}} onClick={() => {toggleViewedResults('denied')}}>
                      <p style={{fontWeight: 'bold', color: 'black'}}>DENIED AT INSURANCE</p>
                    </div>
              }
              {
                selectedTab === 'sent'
                  ? <div style={{marginRight: '12px'}}>
                      <p style={{fontWeight: 'bold', color: '#0b8ec4'}}>SEND TO INSURANCE</p>
                    </div>
                  : <div style={{marginRight: '12px'}} onClick={() => {toggleViewedResults('sent')}}>
                      <p style={{fontWeight: 'bold', color: 'black'}}>SEND TO INSURANCE</p>
                    </div>
              }
              {
                selectedTab === 'atInsurance'
                  ? <div style={{marginRight: '12px'}}>
                      <p style={{fontWeight: 'bold', color: '#0b8ec4'}}>CLAIM AT INSURANCE</p>
                    </div>
                  : <div style={{marginRight: '12px'}} onClick={() => {toggleViewedResults('atInsurance')}}>
                      <p style={{fontWeight: 'bold', color: 'black'}}>CLAIM AT INSURANCE</p>
                    </div>
              }
              {
                selectedTab === 'pending'
                  ? <div style={{marginRight: '12px'}}>
                      <p style={{fontWeight: 'bold', color: '#0b8ec4'}}>PENDING INSURANCE AUTH</p>
                    </div>
                  : <div style={{marginRight: '12px'}} onClick={() => {toggleViewedResults('pending')}}>
                      <p style={{fontWeight: 'bold', color: 'black'}}>PENDING INSURANCE AUTH</p>
                    </div>
              }
              {
                selectedTab === 'writeoff'
                  ? <div style={{marginRight: '12px'}}>
                      <p style={{fontWeight: 'bold', color: '#0b8ec4'}}>WRITEOFF</p>
                    </div>
                  : <div style={{marginRight: '12px'}} onClick={() => {toggleViewedResults('writeoff')}}>
                      <p style={{fontWeight: 'bold', color: 'black'}}>WRITEOFF</p>
                    </div>
              }
              {
                selectedTab === 'balance'
                  ? <div style={{marginRight: '12px'}}>
                      <p style={{fontWeight: 'bold', color: '#0b8ec4'}}>BALANCE DUE PATIENT</p>
                    </div>
                  : <div style={{marginRight: '12px'}} onClick={() => {toggleViewedResults('balance')}}>
                      <p style={{fontWeight: 'bold', color: 'black'}}>BALANCE DUE PATIENT</p>
                    </div>
              }
            </div>
          : null
      }
    </div>
  )
}

export default ClaimTopBarComponent
