import React from 'react'
import '../styles/header.css'


function Header({navigateTo}) {
    return (
        <header className="header" >
     <div className="wrapper">
      <div className="headers">
        <div className='main'>
          <h1>Enterprise Resource Planning System </h1>
          <p className="header-total"> ERP System Dashboard !!!</p>
        </div>
        <div className='navi'>
          <span onClick={()=>{navigateTo('/product')}}>Products Page</span>
          <span onClick={()=>{navigateTo('/orders')}}>Orders Page</span>
        </div>
      </div>
     </div>
   </header>
    )
}

export default Header;