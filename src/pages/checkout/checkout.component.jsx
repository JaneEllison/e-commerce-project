import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/chekout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = () => {
  const totalPrice = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);

  const renderedCheckoutItemsList = cartItems.map((cartItem) => (
    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {renderedCheckoutItemsList}
      <div className='total'>
        <span>TOTAL: ${totalPrice}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice}/>
    </div>
  );
};

export default CheckoutPage;
