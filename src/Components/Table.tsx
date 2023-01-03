import React from 'react';
import './table.scss';
import vector3 from '../Images/vector3.png';
import {format} from 'date-fns'

interface Props {
  data: any | undefined;
}

interface User {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}
const tableHead: string[] =[
  'ORGNIZATION', 
  'USERNAME',
  'EMAIL',
  'PHONE NUMBER',
  'DATE JOINED',
  'STATUS'
]

const tew = new Date()

const Table: React.FC<Props> = ({data}) => {

  console.log(data)

  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHead.map((head, index) => {
              return (
                <th key={index}>
                  <div className='table-data-head-container'>
                    <span className='table-data-head'>{head}</span> 
                    <span className='table-data-img-container'><img src={vector3} alt="drop" /></span> 
                  </div>
                </th>
              )
            })} 
          </tr>
        </thead>
        <tbody>
          {data?.data.map((user: User) => {
            return (
              <tr>
                <td>{user.orgName.split('-')[0]}</td>
                <td>{user.userName}</td>
                <td>{user.email.toLocaleLowerCase()}</td>
                <td>{user.phoneNumber}</td>
                <td>{format(new Date(user.createdAt), "E d, yyyy hh:mm aaaaa'm'")}</td>
              </tr>
            )
            
          })}

        </tbody>
      </table>
    </>
  )
}

export default Table