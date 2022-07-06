import { Button } from '../../atoms/Button/Button'

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
                <Button className={'Button Button--fontInter'}>Continuar comprando</Button>
            </div>
        </section>
    )
}