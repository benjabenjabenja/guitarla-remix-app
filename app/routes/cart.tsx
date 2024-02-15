import { useOutletContext } from '@remix-run/react';
import { useEffect, useState } from 'react';
import CartList from '~/components/cart-list';
import { ICartStore } from '~/entities/store.entity';
import styles from '~/styles/cart.css';

export function meta() {
    return [
        { title: 'Cart Shop - RemixRun App' },
        { name: "description", content: "Welcome to Remix!" }
    ];
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ];
}

const Cart = () => {
    // se puede usar como parametro dentro de otro outlet:
    // ej: <Outlet context={useContext()} />
    // de esta forma, si tuvieramos sub paginas o paginas hijas, 
    // podrian acceder a este context
    const [total, setTotal] = useState(0);
    const { cart } = useOutletContext<{ addToCart: (cart: ICartStore) => void, cart: ICartStore[] }>();

    useEffect(
        () => {
            const new_total = cart?.reduce((acc, cv) => acc + cv.t_price, 0);
            new_total && setTotal(new_total);
        }, [cart]
    );
    return (
        <main className="contenedor">
            <h1 className="heading">Cart shop</h1>
            <div className="contenido">
                <div className="cart">
                    <h2>Articles</h2>
                    <CartList cart={cart} />
                </div>

                <aside className="resumen">
                    <h3>Cart items</h3>
                    <p>Total to pay: $ { total }</p>
                </aside>
            </div>
        </main>
    )
};
export default Cart;
