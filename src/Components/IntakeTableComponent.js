import React, {useState} from 'react'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import AddIntakeRecord from './AddIntakeRecord'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

const IntakeTableComponent = () => {

  const { theme } = useTheme()
  const { showAddIntakeRecord } = useApp()

  const [sort, setSort] = useState('asc')
  const [sortColumn, setSortColumn] = useState('prefix')

  const updateSortWithColumn = (sort, column) => {
    setSort(sort)
    setSortColumn(column)
  }

  const updateRecord = () => {
    
  }

  return (
    <div className='table-parent'>
      <table className='table-section'>
        <thead className={`table-header-${theme}`}>
          <tr>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'client'){
                  updateSortWithColumn('dec', 'client')
                } else {
                  updateSortWithColumn('asc', 'client')
                }
              }} className='table-header-text'>
              Client <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'client' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'prefix'){
                  updateSortWithColumn('dec', 'prefix')
                } else {
                  updateSortWithColumn('asc', 'prefix')
                }
              }} className='table-header-text'>
              Prefix <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'prefix' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'insurance'){
                  updateSortWithColumn('dec', 'insurance')
                } else {
                  updateSortWithColumn('asc', 'insurance')
                }
              }} className='table-header-text'>
              Insurance <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'insurance' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'source'){
                  updateSortWithColumn('dec', 'source')
                } else {
                  updateSortWithColumn('asc', 'source')
                }
              }} className='table-header-text'>
              Source <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'source' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'coordinator'){
                  updateSortWithColumn('dec', 'coordinator')
                } else {
                  updateSortWithColumn('asc', 'coordinator')
                }
              }} className='table-header-text'>
              Coordinator <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'coordinator' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'summaryOut'){
                  updateSortWithColumn('dec', 'summaryOut')
                } else {
                  updateSortWithColumn('asc', 'summaryOut')
                }
              }} className='table-header-text'>
              Summary Out <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'summaryOut' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th className='table-header-text'>
              Details
            </th>
            <th className='table-header-text'>
              Notes
            </th>
            <th onClick={() => {
                if(sort === 'asc' && sortColumn === 'date'){
                  updateSortWithColumn('dec', 'date')
                } else {
                  updateSortWithColumn('asc', 'date')
                }
              }} className='table-header-text'>
              Date <FontAwesomeIcon height={20} width={20} color='black' icon={sort === 'asc' && sortColumn === 'date' ? faAngleDoubleDown : faAngleDoubleUp} />
            </th>
            <th style={{minWidth: '0px'}} className='table-header-text update-column'>
              Update
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
        <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td style={{minWidth: '0px'}}>XYZ</td>
            <td>BCBS</td>
            <td style={{minWidth: '0px'}}>ACE3</td>
            <td>Rebekah</td>
            <td>GOOD VOB</td>
            <td>2000 DED 5000 OOP 80%</td>
            <td>(925) 964-6980</td>
            <td>12/30/0202</td>
            <td style={{minWidth: '0px'}} className='update-column'><FontAwesomeIcon icon={faEdit}/></td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td style={{minWidth: '0px'}}>XYZ</td>
            <td>BCBS</td>
            <td style={{minWidth: '0px'}}>ACE3</td>
            <td>Rebekah</td>
            <td>GOOD VOB</td>
            <td>2000 DED 5000 OOP 80%</td>
            <td>(925) 964-6980</td>
            <td>12/30/0202</td>
            <td style={{minWidth: '0px'}} className='update-column'><FontAwesomeIcon icon={faEdit}/></td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td style={{minWidth: '0px'}}>XYZ</td>
            <td>BCBS</td>
            <td style={{minWidth: '0px'}}>ACE3</td>
            <td>Rebekah</td>
            <td>GOOD VOB</td>
            <td>2000 DED 5000 OOP 80%</td>
            <td>(925) 964-6980</td>
            <td>12/30/0202</td>
            <td style={{minWidth: '0px'}} className='update-column'><FontAwesomeIcon icon={faEdit}/></td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td style={{minWidth: '0px'}}>XYZ</td>
            <td>BCBS</td>
            <td style={{minWidth: '0px'}}>ACE3</td>
            <td>Rebekah</td>
            <td>GOOD VOB</td>
            <td>2000 DED 5000 OOP 80%</td>
            <td>(925) 964-6980</td>
            <td>12/30/0202</td>
            <td style={{minWidth: '0px'}} className='update-column'><FontAwesomeIcon icon={faEdit}/></td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td style={{minWidth: '0px'}}>XYZ</td>
            <td>BCBS</td>
            <td style={{minWidth: '0px'}}>ACE3</td>
            <td>Rebekah</td>
            <td>GOOD VOB</td>
            <td>2000 DED 5000 OOP 80%</td>
            <td>(925) 964-6980</td>
            <td>12/30/0202</td>
            <td style={{minWidth: '0px'}} className='update-column'><FontAwesomeIcon icon={faEdit}/></td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td style={{minWidth: '0px'}}>XYZ</td>
            <td>BCBS</td>
            <td style={{minWidth: '0px'}}>ACE3</td>
            <td>Rebekah</td>
            <td>GOOD VOB</td>
            <td>2000 DED 5000 OOP 80%</td>
            <td>(925) 964-6980</td>
            <td>12/30/0202</td>
            <td style={{minWidth: '0px'}} className='update-column'><FontAwesomeIcon icon={faEdit}/></td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td style={{minWidth: '0px'}}>XYZ</td>
            <td>BCBS</td>
            <td style={{minWidth: '0px'}}>ACE3</td>
            <td>Rebekah</td>
            <td>GOOD VOB</td>
            <td>2000 DED 5000 OOP 80%</td>
            <td>(925) 964-6980</td>
            <td>12/30/0202</td>
            <td style={{minWidth: '0px'}} className='update-column'><FontAwesomeIcon icon={faEdit}/></td>
          </tr>
          <tr className={`table-content-row-${theme}`} style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>BRAVETTE LEMON</td>
            <td style={{minWidth: '0px'}}>XYZ</td>
            <td>BCBS</td>
            <td style={{minWidth: '0px'}}>ACE3</td>
            <td>Rebekah</td>
            <td>GOOD VOB</td>
            <td>2000 DED 5000 OOP 80%</td>
            <td>(925) 964-6980</td>
            <td>12/30/0202</td>
            <td style={{minWidth: '0px'}} className='update-column'><FontAwesomeIcon icon={faEdit}/></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default IntakeTableComponent
