import React from "react"
import ReactDOM from "react-dom"

export default function Nav (props){
    const [menuDrop, setMenuDrop] =  React.useState(false)

function handleClick(){
    setMenuDrop(!menuDrop)
    
}
 

   
    return (
        <nav>
            <div className="nav__container">
                <figure className="logo__container"><img src={props.logo} alt=" Cake Delights's logo"/></figure>
             
          <ul className="nav__list">
            <li><a href="#" className="nav_link">Home</a></li>
            <li><a href="#" className="nav_link">Contact</a></li>
            <li><a href="#feature" className="nav_link nav__link--primary">Cakes</a></li>
            </ul> 
            {menuDrop?<div className="menu__drop">
            <button className="btn__menu btn__menu--close" onClick={handleClick}>
            <i class="fa-solid fa-x"></i>
            </button>
            <ul className="menu__links">
            <li className="menu_list"><a href="#" className="menu_link" onClick={handleClick}>Home</a></li>
            <li className="menu_list"><a href="#features" className="menu_link" onClick={handleClick}>Cakes</a></li>
            <li className="menu_list" ><a href="#" className="menu_link no-cursor" onClick={handleClick}>Contact</a></li>
            </ul> 

          </div> :
          <button className="btn__menu" onClick={handleClick}>
          <i class="fa-solid fa-bars"></i>
          </button>
          }
            </div>
           
          
          

        </nav>
    )

    }
