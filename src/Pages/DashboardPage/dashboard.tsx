import React, {useState} from 'react';
import './dashboard.scss'
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import UserCard from '../../Components/UserCard';
import {HiUserGroup} from 'react-icons/hi'
import Table from '../../Components/Table';

const Dashboard: React.FC = () => {

  const [sideBarIsShowing, setSideBarIsShowing] = useState<boolean>(false)

  return (
    <div className='dashboard-container'>
      <Header setSideBarIsShowing={setSideBarIsShowing} sideBarIsShowing={sideBarIsShowing}/>
      <main>
        <SideBar sideBarIsShowing={sideBarIsShowing}/>
        <aside className='users-data-container'>
          <div className='user-cards-container'>
            <UserCard users={{
              head: 'Active Users',
              cardLogo: <HiUserGroup />,
              userNum: 2345

            }}/>
            <UserCard users={{
              head: 'Active Users',
              cardLogo: <HiUserGroup />,
              userNum: 2345

            }}/>
            <UserCard users={{
              head: 'Active Users',
              cardLogo: <HiUserGroup />,
              userNum: 2345

            }}/>
            <UserCard users={{
              head: 'Active Users',
              cardLogo: <HiUserGroup />,
              userNum: 2345

            }}/>
          </div>
          <div>
            <Table />
          </div>
        </aside>
        
      </main>
    </div>
  )
}

export default Dashboard
