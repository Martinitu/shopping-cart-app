import React from "react";

function ShopItem ({imageSrc, title, addItem}){
    const [quantity, setQuantity] = React.useState(0);

    const handleAddToCart = () => {
        if (quantity > 0) {
            addItem(quantity);
            setQuantity(0); 
        }
    };

    return (
        <div className='item col-sm p-5'>
                    <img src={imageSrc} alt={title} />
                    <h4>{title}</h4>
                    
                        <input value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)}
                        className='w-25 m-2' 
                        type='number' 
                        min='1' 
                        placeholder='1'
                        />
                        <button onClick={handleAddToCart} className='btn btn-outline-secondary '>
                            add to cart
                        </button>
                    
                </div>
    );
}

export default ShopItem