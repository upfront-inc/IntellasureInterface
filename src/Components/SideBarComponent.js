import React from 'react'
import '../Css/sidebar.css'
import { useSidebar } from '../Contexts/SidebarContext';
import { useTheme } from '../Contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faCode, faFlag, faInbox, faInfoCircle, faList, faMoneyBill, faQuestion, faRightFromBracket, faSheetPlastic, faShield, faShieldAlt, faTicket, faUser, faUsers, faX } from '@fortawesome/free-solid-svg-icons';

const SideBarComponent = () => {

  const { sidebarPosition } = useSidebar();
  const { theme } = useTheme();

  return (
    <div className={`sidebar-${sidebarPosition} sidebar-${theme}`}>
      <div className={`image-container-${sidebarPosition} section-${theme}`}>
        <div className='logo-container'>
          <img className='sidebar-logo' src={require('../Assets/IntellasuranceLogo.png')}/>
        </div>
        <div>
          {
            sidebarPosition === 'open'
              ? <p className={`logo-label-${theme}`}>Intellasure</p>
              : null
          }
        </div>
      </div>
      <div className='menu-bar'>
        <div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faShieldAlt} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Billing Details</p>
                  : null
              }
            </div>
          </div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faMoneyBill} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Daily Rates</p>
                  : null
              }
            </div>
          </div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faFlag} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Flagged</p>
                  : null
              }
            </div>
          </div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faX} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Missing</p>
                  : null
              }
            </div>
          </div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Intake</p>
                  : null
              }
            </div>
          </div>
        </div>
        <div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faUsers} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Accounts</p>
                  : null
              }
            </div>
          </div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faCode} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Backend</p>
                  : null
              }
            </div>
          </div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faTicket} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Help Tickets</p>
                  : null
              }
            </div>
          </div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faQuestion} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Help</p>
                  : null
              }
            </div>
          </div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faUser} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Profile</p>
                  : null
              }
            </div>
          </div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faInfoCircle} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>About</p>
                  : null
              }
            </div>
          </div>
          <div className={`menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faRightFromBracket} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p style={{color: 'red'}} className={`label-${theme}`}>Logout</p>
                  : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBarComponent
