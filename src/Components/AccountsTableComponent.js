import React from 'react'
import { useTheme } from '../Contexts/ThemeContext'

const AccountsTableComponent = () => {

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
              Status
            </th>
            <th className='table-header-text'>
              Priviledges
            </th>
            <th className='table-header-text'>
              Action
            </th>
            <th className='table-header-text'>
              Account
            </th>
          </tr>
        </thead>
        <tbody className={`table-body-${theme}`}>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
          <tr className='table-content-row' style={{textAlign: 'center', marginTop: '6px', marginBottom: '6px'}}>
            <td>John Doe</td>
            <td>john@doe.com</td>
            <td>active</td>
            <td>staff</td>
            <td>Make Admin</td>
            <td>Remove</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AccountsTableComponent
