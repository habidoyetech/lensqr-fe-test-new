import React from 'react';
import './sidebar.scss';
import SideBarCategoryList from './SideBarCategoryList';
import SideBarLink from './SideBarLink';
import {FaHome, FaToolbox} from 'react-icons/fa';





const SideBar: React.FC = () => {
  return (
    <aside className='sidebar-container'>
      <div className='sidebar'>
        <div className='sidebar-head'>
          <h2> <SideBarLink sideBarLink={{
              id: 5,
              logo: <FaToolbox/>,
              linkName: 'Switch Organization',
              arrow: true
            }}/>
          </h2>
            <SideBarLink sideBarLink={{
              id: 3,
              logo: <FaHome/>,
              linkName: 'Dashboard',
              arrow: false
            }}/>

        </div>
      
        <SideBarCategoryList/>
      </div>
    </aside>
  )
}

export default SideBar