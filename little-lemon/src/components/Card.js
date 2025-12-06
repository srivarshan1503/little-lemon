function Card(props) {
    return (
        <div className="card" >
            <img src={props.url} alt={props.name}/>
            <div>
                <div className="name_price">
                <h4>{props.name}</h4>
                <h5>{props.price}</h5>
                </div>
                <p>{props.description}</p>
                <br/>
                <p >Order delivery 🛵</p>
            </div>
        </div>
    );
}

export default Card;