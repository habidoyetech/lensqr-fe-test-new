import React from 'react';
import { SideBarLinkObject } from '../models';


interface Props {
  sideBarLink: SideBarLinkObject
}


const SideBarLink: React.FC<Props> = ({sideBarLink}) => {
  return (
    <div>
      <div>
        <div>
          {sideBarLink.logo}
        </div>
        <div>{sideBarLink.linkName}</div>
        <div></div>
      </div>
    </div>
  )
}

export default SideBarLink