import React from 'react';
import { SideBarCategoryObject } from '../models';
import {FaToolbox} from 'react-icons/fa';
import SideBarCategory from './SideBarCategory';
import {TiGroup} from 'react-icons/ti';


let categories: SideBarCategoryObject[] = [
  {
    id: 1,
    name: 'CUSTOMERS',
    link: [
      {
        id: 1.1,
        logo: <FaToolbox/>,
        linkName: 'Users',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Guarantors',
        arrow: false
      },
      {
        id: 1.3,
        logo: <TiGroup/>,
        linkName: 'Loans',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Decision Models',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Savings',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Loan Requests',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Whitelists',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Karma',
        arrow: false
      }
    ]

  },
  {
    id: 2,
    name: 'BUSINESSES',
    link: [
      {
        id: 1.1,
        logo: <FaToolbox/>,
        linkName: 'Users',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Guarantors',
        arrow: false
      },
      {
        id: 1.3,
        logo: <TiGroup/>,
        linkName: 'Loans',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Decision Models',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Savings',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Loan Requests',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Whitelists',
        arrow: false
      },
      {
        id: 1.2,
        logo: <TiGroup/>,
        linkName: 'Karma',
        arrow: false
      }
    ]

  }
]

const SideBarCategoryList = () => {
  return (
    <>
      <nav className='sidebarcategorylist-container'>
        {categories.map((category) => {
          return (
            <SideBarCategory key={category.id} category={category}/>
          )
        }) }
      </nav>

    </>
  )
}

export default SideBarCategoryList