export default function Nav (props){
    return (
        <nav>
            <div className="nav__container">
                <figure className="logo__container"><img src={props.logo} alt=" Cake Delights's logo"/></figure>
             
          <ul className="nav__list">
            <li><a href="#" className="nav_link">Home</a></li>
            <li><a href="#" className="nav_link">Contact</a></li>
            <li><a href="#" className="nav_link nav__link--primary">Cakes</a></li>
            </ul> 

            </div>
          

        </nav>
    )

    }
