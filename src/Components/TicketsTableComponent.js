import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'

const TicketsTableComponent = () => {

  const { theme } = useTheme()

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
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>15235123</td>
            <td>Issue Searching for number prefix</td>
            <td>closed</td>
            <td>Open</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TicketsTableComponent
