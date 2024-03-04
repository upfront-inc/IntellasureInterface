import React from 'react'
import '../Css/sidebar.css'
import { useSidebar } from '../Contexts/SidebarContext';
import { useTheme } from '../Contexts/ThemeContext';
import { useApp } from '../Contexts/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight, faArrowAltCircleRight, faCode, faFlag, faGear, faInbox, faInfoCircle, faList, faMoneyBill, faQuestion, faRightFromBracket, faSheetPlastic, faShield, faShieldAlt, faTicket, faUser, faUsers, faWandSparkles, faX } from '@fortawesome/free-solid-svg-icons';
import { useUser } from '../Contexts/UserContext';

const SideBarComponent = () => {

  const { sidebarPosition } = useSidebar();
  const { theme } = useTheme();
  const { selectedTab, toggleSelectedTab } = useApp();
  const { toggleSidebar, showProfile, toggleProfile } = useSidebar();
  const { signOutUser } = useUser()

  const isSelected = (tabName) => selectedTab === tabName;

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
        <div onClick={() => {toggleSelectedTab('AI')}} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('AI') ? `menu-bar-item-selected-${theme}` : ''}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faWandSparkles} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>IntellaChat AI</p>
                  : null
              }
            </div>
          </div>
          <div onClick={() => {toggleSelectedTab('billingDetails')}} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('billingDetails') ? `menu-bar-item-selected-${theme}` : ''}`}>
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
          {/* <div onClick={() => {toggleSelectedTab('dailyRates')}} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('dailyRates') ? `menu-bar-item-selected-${theme}` : ''}`}>
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
          <div onClick={() => {toggleSelectedTab('flagged')}} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('flagged') ? `menu-bar-item-selected-${theme}` : ''}`}>
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
          <div onClick={() => {toggleSelectedTab('missing')}} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('missing') ? `menu-bar-item-selected-${theme}` : ''}`}>
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
          <div onClick={() => {toggleSelectedTab('intake')}} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('intake') ? `menu-bar-item-selected-${theme}` : ''}`}>
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
          </div> */}
        </div>
        <div>
          <div onClick={() => {toggleSelectedTab('accounts')}} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('accounts') ? `menu-bar-item-selected-${theme}` : ''}`}>
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
          {/* <div onClick={() => {toggleSelectedTab('backend')}} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('backend') ? `menu-bar-item-selected-${theme}` : ''}`}>
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
          <div onClick={() => {toggleSelectedTab('helpTickets')}} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('helpTickets') ? `menu-bar-item-selected-${theme}` : ''}`}>
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
          <div onClick={() => {toggleSelectedTab('help')}} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('help') ? `menu-bar-item-selected-${theme}` : ''}`}>
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
          </div> */}
          <div onClick={toggleProfile} className={`hover-text menu-bar-item-${sidebarPosition}-${theme} ${isSelected('settings') ? `menu-bar-item-selected-${theme}` : ''}`}>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faGear} className="icon-menu"/>
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Settings</p>
                  : null
              }
            </div>
          </div>
          <div  onClick={toggleSidebar} className={`hover-text menu-bar-item-${sidebarPosition}-${theme}`}>
            <div className='icon-container'>
              {
                sidebarPosition === 'open'
                  ? <FontAwesomeIcon icon={faAngleDoubleLeft} className="icon-menu"/>
                  : <FontAwesomeIcon icon={faAngleDoubleRight} className="icon-menu"/>
              }
            </div>
            <div>
              {
                sidebarPosition === 'open'
                  ? <p className={`label-${theme}`}>Hide Sidebar</p>
                  : null
              }
            </div>
          </div>
          <div onClick={() => {signOutUser()}} className={`menu-bar-item-${sidebarPosition}-${theme}`}>
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
