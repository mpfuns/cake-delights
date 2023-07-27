export default function Header (props){
    return (
        <header >
            <div className="header__container">
                <div className="header__description">
                    <h1>Welcome to <span className="neon-blue">Cake Delights</span>, the ultimate destination for all your cake cravings in the USA.</h1>
                    <h2>As the best online cake shop, we take pride in offering a delightful assortment of handcrafted cakes that are sure to sweeten every occasion and celebration.</h2>
                    <button className="btn">Browse Cakes</button>
                </div>
                <figure className="header__img--wrapper">
                    <img src={props.headerPic}/>
                </figure>
            </div>
        </header>
    )

    }        
