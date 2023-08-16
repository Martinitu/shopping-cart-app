import falling from './imgs/falling.jpg';
import hatImg from './imgs/hat.jpg';
import React, { useState } from "react";
import ShopItem from './shopItem';
import Cart from './cart'

function ShopPage() {
    const [tshirt, setTshirt] = useState([0, 20]);
    const [hat, setHat] = useState([0, 15]);
    const [items, setItems] = useState(0);
    const [subtotal, setSubTotal] = useState(0);
    const itemData = [
        { name: 'T-shirt', quantity: tshirt[0], price: tshirt[1] },
        { name: 'Hat', quantity: hat[0], price: hat[1] },
        // Add more items here if needed
      ];   
    const addItemToCart = (quantity, price, name, setName) => {
        setSubTotal(subtotal + Number(quantity) * price);
        setItems(items + Number(quantity));
        setName([(name[0] + Number(quantity)), name[1]]);
      };

    return (
        <div className='row shoPage'>
           
            <div className='shopItemsDiv col-sm w-75'>
            
                <ShopItem
                imageSrc={falling}
                title="Babylon Fall T-shirt"
                addItem={(quantity) => addItemToCart(quantity, tshirt[1], tshirt, setTshirt)}
                />
                 <ShopItem
                imageSrc={hatImg}
                title="Babylon Fall Snapback hat"
                addItem={(quantity) => addItemToCart(quantity, hat[1], hat, setHat)}
                />
            </div>
            <div className='w-25 bg-dark cart '>
                <Cart itemData={itemData} items={items} subtotal={subtotal}  />
            </div>
        </div>
    )
}

export default ShopPage;