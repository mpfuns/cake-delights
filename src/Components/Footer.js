export default function Footer (props){
    return (
        <footer>
<div className="container">
    <div className="big-row row_column">
    <a href="#" className="footer__logo"><img  className="footer__logo--img" src={props.logo}/></a>
    <div className="footer__list">
            <a href="" className="footer__link no-cursor">Home</a>
            <a href="" className="footer__link no-cursor">About</a>
            <a href="" className="footer__link no-cursor">Cakes</a>
            <a href="" className="footer__link no-cursor">Contact</a>
        
    </div>
    <div className="footer__copyright"> Copyright &copy; 2023 Cake Delights</div>
    </div>
    </div>


        </footer>
    )

    }        
