export default function Features (props){
   
const cakes = props.data.map((cake)=>{

    return(
        <div className="cake">
            <figure>
                <img className="" />
            </figure>
        </div>
    )
})



    return (
        <section id='features'>
<div className="container">
    <div className="big-row">
    <h2>Features <span className="neon-blue">Cakes</span></h2>
    <div className="cakes-container">

    </div>
    </div>
</div>
    </section>
    )

    }