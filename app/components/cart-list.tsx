import { ICartStore } from '~/entities/store.entity';
import CartItem from './cart-item';
import { uniqueId } from '~/utils/helpers.utils';

const CartList = ({ cart }: { cart: ICartStore[] }) => {
    const isValidArray = (array: ICartStore[]) => array && array.length > 0;
    return (
        <>
            {
                isValidArray(cart) ? cart.map(
                    item => (
                        <CartItem key={uniqueId()} cart={item} />
                    )
                ) : '0 items in cart shop'
            }
        </>
    );
}

export default CartList;
