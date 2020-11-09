import React from 'react';
import Wrapper from '../components/Wrapper';
import Item from '../components/Item';
import CheckTotal from '../components/CheckTotal';
function CartPage() {
    return (
        <div>
         <Wrapper />
         
             <Item />
             <CheckTotal />
         </div>
      );

}
export default CartPage;