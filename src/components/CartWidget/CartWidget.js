import './style.css'
import cart from '../../Media/unnamed.png'

const CartWidget = () => {
    return(
        <div className="container">
            <img width={'80px'} height={'50px'} src={cart} alt="cart_img" />
        </div>
    )
};

export default CartWidget;