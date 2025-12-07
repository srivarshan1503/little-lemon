import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomerSays from './CustomerSays';
import Chicago from './Chicago';

function Homepage() {
    return (
        <>
            <section id='reserve'>
                <CallToAction />
            </section>
            <section id='menu' >
                <Specials/>
            </section>
            <section id='review'>
                <CustomerSays/>
            </section>
            <section id='about'>
                <Chicago/>
            </section>    
        </>
    );
}

export default Homepage;