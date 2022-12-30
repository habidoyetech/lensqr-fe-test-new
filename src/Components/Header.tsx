import React from 'react';
import LogoWord from '../Images/lendsqr.svg'
import LogoSign from '../Images/Union.svg'

const Header: React.FC = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <img src={LogoSign} alt="lendsqr-logo-sign" />
            <img src={LogoWord} alt="lendsqr-logo-name" />
          </div>
          <div>
            <div>
              <input type="text" placeholder='Search for anything'/>
            </div>
            <div>
              <span>Search</span>
            </div>
          </div>
          <div>
            <span>Docs</span>
            <div>Bell</div>
            <div>
              <img src="" alt="" />
              <h3>Adedeji</h3>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header