import React, {useState} from 'react';
import './dashboard.scss'
import Header from '../../Components/Header';
import SideBar from '../../Components/SideBar';
import UserCard from '../../Components/UserCard';
import {HiUserGroup} from 'react-icons/hi'

const Dashboard: React.FC = () => {

  const [sideBarIsShowing, setSideBarIsShowing] = useState<boolean>(false)

  return (
    <div>
      <Header setSideBarIsShowing={setSideBarIsShowing} sideBarIsShowing={sideBarIsShowing}/>
      <main>
        <SideBar sideBarIsShowing={sideBarIsShowing}/>
        <div>
          <UserCard users={{
            head: 'Active Users',
            cardLogo: <HiUserGroup />,
            userNum: 2345

          }}/>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
