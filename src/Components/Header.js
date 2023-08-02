export default function Header (props){
    return (
        <header >
            <div className="header__container">
                <div className="header__description">
                    <h1>Welcome to <span className="neon-blue">Cake Delights</span>, the ultimate destination for all your cake cravings in the USA.</h1>
                    <h2>Our handcrafted cakes are the perfect addition to any celebration, and we take pride in being the best online cake shop.</h2>
                    <button className="btn">Browse Cakes</button>
                </div>
                <figure className="header__img--wrapper">
                    <img src={props.headerPic}/>
                </figure>
            </div>
        </header>
    )

    }        
