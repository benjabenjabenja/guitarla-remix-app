import { ICartStore } from '~/entities/store.entity';
import CartItem from './cart-item';
import { uniqueId } from '~/utils/helpers.utils';

const CartList = ({ cart, setTotal, total }: { cart: ICartStore[], setTotal: (v:number) => void, total: number }) => {
    const isValidArray = (array: ICartStore[]) => array && array.length > 0;
    return (
        <>
            {
                isValidArray(cart) ? cart.map(
                    item => (
                        <CartItem key={uniqueId()} cart={item} setTotal={setTotal} total={total} />
                    )
                ) : '0 items in cart shop'
            }
        </>
    );
}

export default CartList;
