import React,{useContext} from 'react'
import es from './../img/spain.png';
import en from './../img/united-kingdom.png';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import { langContext } from "./../context/langContext";



function Header() {
    const idioma=useContext(langContext);
    console.log(idioma)

    return (
        <div className="header">
            <div className="navbar">
                <nav className="nav">
                    
                    <Link to="/">
                        <FormattedMessage
                        id="menu.home"
                        defaultMessage="Home"
                        />
                    </Link>
                     <Link to="/explore">
                         <FormattedMessage
                        id="menu.explore"
                        defaultMessage="Explore"
                        />
                     </Link>
                      <Link to="/profile">
                          <FormattedMessage
                        id="menu.profile"
                        defaultMessage="Profile"
                        />
                      </Link>
                </nav>
                <div className="banderas">
                    <button onClick={()=>idioma.establecerlenguaje('es-ES')}><img  src={es} alt=""/></button>
                    <button onClick={()=>idioma.establecerlenguaje('es-US')}><img  src={en} alt=""/></button>
                    
                    {/* llegue hasta el minuto 45 */}

                </div>

            </div>
            
        </div>
    )
}

export default Header
