import CustomerCard from './CustomerCard';

const customers = [
    { id: 1, rating: '★★★★★', user: 'Sarah K.', review: 'The best Mediterranean food I’ve had outside of Europe!' },
    { id: 2, rating: '★★★★★', user: 'John M.', review: 'The bruschetta is a must-try. Fast service and friendly staff.' },
    { id: 3, rating: '★★★★☆', user: 'Leo T.', review: 'Great atmosphere and excellent Greek Salad. Will be back soon.' },
    { id: 4, rating: '★★★★★', user: 'Maria V.', review: 'Highly recommend the Lemon Dessert!' },
]
function CustomerSays() {
    return (
        <>
            <h1>What our customer says ?</h1>
            <div className='Customers'>
                {
                customers.map(customer => (
                <CustomerCard id={customer.id} rating={customer.rating} name={customer.user} review={customer.review}/>
                ))
                }
            </div>
        </>
    );
}

export default CustomerSays;