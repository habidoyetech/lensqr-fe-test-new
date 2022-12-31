import React from 'react';
import LogoWord from '../Images/lendsqr.svg';
import LogoSign from '../Images/Union.svg';
import './header.scss'

const Header: React.FC = () => {
  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <div className='lendsqr-logo-container'>
            <img className='lensqr-logo-sign' src={LogoSign} alt="lendsqr-logo-sign" />
            <img className='lendsqr-logo-sign' src={LogoWord} alt="lendsqr-logo-name" />
          </div>
          <div className='search-container'>
            <div className='search-input-container'>
              <input className='search-input' type="text" placeholder='Search for anything'/>
            </div>
            <div className='search-icon-container'>
              <span className='search-icon'>Search</span>
            </div>
          </div>
          <div>
            <span className='docs'>Docs</span>
            <div className='bells'>Bell</div>
            <div className='user-container'>
              <img className='user-photo' src="" alt="" />
              <h3 className='username'>Adedeji</h3>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header