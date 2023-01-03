import React from 'react';

const tableHead: string[] =[
  'ORGNIZATION', 
  'USERNAME',
  'EMAIL',
  'PHONE NUMBER',
  'DATE JOINED',
  'STATUS'
]

const Table: React.FC = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHead.map((head, index) => {
              return (
                <th key={index}>{head}</th>
              )
            })} 
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </>
  )
}

export default Table