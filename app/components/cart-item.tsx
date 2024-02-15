/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unsafe-optional-chaining */
import { useOutletContext } from '@remix-run/react';
import { ICartStore } from '~/entities/store.entity';
import { uniqueId } from '~/utils/helpers.utils';

const CartItem = ({ cart }:{ cart: ICartStore }) => {
    const get_id = uniqueId();
    const { addToCart, delteItemCart } = useOutletContext() as { addToCart: (item: ICartStore) => void, delteItemCart: (item: ICartStore) => void };
    const { image_url, guitar_name, p_uni, t_price, count } = cart;
    const handleOnchangeAmount = (ev: any): void => {
        ev.preventDefault();

        const { value } = ev?.target || null;
        const obj = {
            ...cart,
            count: value,
            t_price: p_uni * +value
        };
        addToCart(obj);
    }
    const handleOnClickDeleteGuitar = (ev: any): void => {
        ev.preventDefault();
        const yes = confirm(`Are you serius delte this item ${guitar_name} ?`);
        yes && delteItemCart(cart);
    }
    return (
        <div className='product'>
            <div className='img__guitar__container'>
                <img src={image_url} alt={`guitar: ${guitar_name}`} />
            </div>
            <div>
                <p className='guitar-name'>{guitar_name}</p>
                <label htmlFor={'amount'+ get_id}>amount:</label>
                <select title='select amount guitars' id={'amount'+ get_id} name='amount' value={count} onChange={handleOnchangeAmount}>
                    {
                        [1, 2, 3, 4, 5].map(v => (<option key={uniqueId()} value={v}>{ v }</option>))
                    }
                </select>
                <p className="price">$ <span>{ p_uni }</span></p>
                <p className="subtotal">Subtotal: $ <span>{ t_price }</span></p>
            </div>
            <button type='button' className='button-delete' title='delete guitar from cart'
             onClick={handleOnClickDeleteGuitar}>X</button>
        </div>
    );
}

export default CartItem;
