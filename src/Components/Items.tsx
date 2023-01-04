import React from 'react';
import {format} from 'date-fns';
import  parsePhoneNumber  from 'libphonenumber-js';

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

interface CurrentUser {
  user: User[];
}


const Items: React.FC<Props> = ({data}) => {
  return (
    <>
      {data?.map((user: User) => {
            return (
              <tr>
                <td>{user.orgName.split('-')[0]}</td>
                <td>{user.userName}</td>
                <td>{user.email.toLocaleLowerCase()}</td>
                <td>{parsePhoneNumber(user.phoneNumber, 'NG')?.formatNational().split('ext')[0]}</td>
                <td>{format(new Date(user.createdAt), "E d, yyyy hh:mm aaaaa'm'")}</td>
              </tr>
            )
            
          })}
      
    </>
  )
}

export default Items
