import Card from './Card';
import greek_salad from '../assets/greek_salad.jpg';
import bruschetta from "../assets/bruchetta.svg";
import lemon_dessert from "../assets/lemon_dessert.jpg";
const dishes = [
    {
        name : "Greek salad",
        img : greek_salad,
        price : "$12.99",
        description : "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        name : "Bruschetta",
        img : bruschetta,
        price : "$5.99",
        description : "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Perfect starter."
    },
    {
        name : "Lemon Dessert",
        img : lemon_dessert,
        price : "$5.00",
        description : "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. Delightfully light.",
    }
];
function Specials() {
    return (
        <div className="specials">
            <div className="special_header">
                <h1>This week's specials!</h1>
            </div>
            <div className="dishes">
                {
                    dishes.map(dish =>
                        <Card name={dish.name} url={dish.img} price={dish.price} description={dish.description} />
                    )
                }
            </div>
        </div>
    );
}

export default Specials;