import React from 'react';
import './sidebar.scss';
import SideBarCategoryList from './SideBarCategoryList';




const SideBar: React.FC = () => {
  return (
    <aside>
      <div>
        <SideBarCategoryList/>
      </div>
    </aside>
  )
}

export default SideBar