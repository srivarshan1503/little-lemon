import img from '../assets/restaurant.jpg';

function CallToAction() {
    return (
        <div className="cta_block">
            <div className="cta_content">
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Book a table with us today!</p>
                <button>Reserve a table</button>
            </div>
            <div className='image'>
                 <img src={img} alt='table_image'/>
            </div>
        </div>
    );
}

export default CallToAction;