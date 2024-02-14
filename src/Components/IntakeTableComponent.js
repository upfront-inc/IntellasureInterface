import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import AddIntakeRecord from './AddIntakeRecord'

const IntakeTableComponent = () => {

  const { theme } = useTheme()
  const { showAddIntakeRecord } = useApp()

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th className='table-header-text'>
              Client
            </th>
            <th className='table-header-text'>
              Insurance
            </th>
            <th className='table-header-text'>
              Source
            </th>
            <th className='table-header-text'>
              Coordinator
            </th>
            <th className='table-header-text'>
              Summary In
            </th>
            <th className='table-header-text'>
              Summary Out
            </th>
            <th className='table-header-text'>
              Date
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td>BCBS</td>
            <td>ACE3</td>
            <td>Rebekah</td>
            <td>BAD VOB</td>
            <td>GOOD VOB</td>
            <td>12/30/0202</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default IntakeTableComponent
