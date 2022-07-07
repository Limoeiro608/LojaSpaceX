import { Button } from '../../atoms/Button/Button'
import { Link } from 'react-router-dom'

export const CartTotal = () => {
    return (
        <section className="CartTotal">
            <h3 className="CartTotal-title">Totais</h3>
            <div>
                <div className="CartTotal-content">
                    <p>Subtotal</p>
                    <span>R$ 328,00</span>
                </div>
                <div className="CartTotal-content">
                    <p>Frete</p>
                    <span>R$ 52,00</span>
                </div>
                <div className="CartTotal-content CartTotal-content--total">
                    <p>Total</p>
                    <span>R$ 380,00</span>
                </div>
            </div>
            <div>
                <Button className={'Button Button--green Button--fontExo'}>Finalizar compra</Button>
                <Link to='plp'><Button className={'Button Button--fontInter'}>Continuar comprando</Button></Link>
            </div>
        </section>
    )
}