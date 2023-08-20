


function Cart({ itemData, items, subtotal }) {
    function renderCartItem(item) {
        if (item.quantity > 0) {
            return (
                <div className='d-flex justify-content-between p-2' key={item.name}>
                    <p className='m-3 '>{item.name}: <span className='text-secondary m-5' > {item.quantity}</span></p>
                    <p className='m-3'>price: <span className='text-secondary m-1' >{item.price}</span></p>
                </div>
            );
        }
        return null;
    }

    const cartItems = itemData.map(renderCartItem);

    return (
        <div className='bg-dark text-white d-flex flex-column ' >
            <h3 className="text-warning">Your Cart <span className="text-secondary">{items}</span></h3>
            <p className="text-warning">items:</p>
            {cartItems}
            <div className='d-flex justify-content-between p-2' >
                <div></div>
            <p className="text-warning m-3">subtotal: <span className="text-secondary">{subtotal}</span></p>
            </div>
        </div>
    );
};

export default Cart;