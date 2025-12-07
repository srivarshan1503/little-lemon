function CustomerCard(props) {
    return (
        <div className="Customercard" >
            <h4>{props.rating}</h4>
            <img src={`https://placehold.co/60x60/495E57/FFF?text=${props.name[0]}`} alt={props.name} />
            <h4>{props.name}</h4>
            <p>{props.review}</p>
        </div>
    );
}

export default CustomerCard;