import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.collection';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector} from 'reselect';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            { cartItems.length > 0 
            ?
            cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />))
            :
            <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>Go To CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    itemCount : selectCartItemsCount
})
export default withRouter(connect(mapStateToProps)(CartDropDown));