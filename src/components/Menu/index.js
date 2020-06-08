import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ()=>{
    return(
        <nav className="navbar navbar-light" style={{background:'#e3f2fd'}}>
        <a className="navbar-brand ml-5 mt-2 mb-2" href="/"><img src='https://www.climba.com.br/wp-content/uploads/2019/06/logo_climba_blog2.png' alt='logo'/></a>
            <div className='navbar col-3'>
              <h4 className='nav-item'> <Link className='nav-link' to='/'>Home</Link></h4>
               <h4 className='nav-item'><Link className='nav-link'to='/cadastro'>Cadastrar</Link></h4>
            
            </div>
        </nav>
    )
}
export default Menu