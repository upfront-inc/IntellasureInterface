import { faLightbulb, faMoon, faSun, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../Css/profile.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext'
import { useSidebar } from '../Contexts/SidebarContext'
import { useUser } from '../Contexts/UserContext'

const ProfileComponent = () => {

  const { theme, toggleTheme } = useTheme();
  const { toggleProfile } = useSidebar()
  const { userProfile } = useUser()

  const [isResetPassword, setIsResetPassword] = useState(false)

  return (
    <div className={`container-${theme}`}>
      <div>
        <div className='headerTop'>
          <span className='userName'>{userProfile.name}</span>
          <FontAwesomeIcon onClick={toggleProfile} icon={faX} height={22} width={22} color='#e94f4e'/>
        </div>
        <div className='headerRow'>
          <span className='userInfo'>{userProfile.email}</span>
        </div>
        <div className='headerRow'>
          <span className='userInfo'>{userProfile.privileges}</span>
        </div>
      </div>
      <div className='subContent'>
        <div className='view-mode'>
          {
            theme === 'dark'
              ? <div className='view-container' onClick={() => {toggleTheme()}}>
                  <span>View in Light Mode</span>
                  <FontAwesomeIcon icon={faLightbulb} height={30} width={30} color='white'/>
                </div>
              : <div className='view-container' onClick={() => {toggleTheme()}}>
                  <span>View in Dark Mode</span>
                  <FontAwesomeIcon icon={faMoon} height={30} width={30} color='black'/>
                </div>
          }
        </div>
        {/* <div className='resetContainer'>
          <div className='reset-text'>
            <span className='text'>Change Password</span>
            <span className='text' onClick={() => {setIsResetPassword(!isResetPassword)}}>Reset Password</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ProfileComponent
