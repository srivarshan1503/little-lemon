import img1 from '../assets/ma1.jpg';
import img2 from '../assets/ma2.jpg';

function Chicago() {
    return (
        <div className="about-content">
            <div className="about-text">
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>Little Lemon is a cherished family-owned and operated restaurant, founded by two friends, Adrian and Mario. They share a deep passion for Mediterranean cuisine, combining traditional recipes with a modern culinary approach.<br/>
                    Our mission is simple: to offer a warm, welcoming dining experience where every dish tells a story of heritage and passion.</p>
            </div>
            <div className="about-images">
                <img src={img1} alt='mario and adrin' className='about-img1'/>
                <img src={img2} alt='mario and adrin' className='about-img2'/>
            </div>
        </div>
    )
}

export default Chicago;