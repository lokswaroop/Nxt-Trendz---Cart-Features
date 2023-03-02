// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })

      return (
        <div className="cartSummaryContainer">
          <h1 className="orderTotalValue">
            <span className="span">Order Total:</span>Rs {total}
          </h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button" className="checkoutButton d-sm-none">
            Checkout
          </button>
          <button type="button" className="checkoutButton d-lg-none">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
