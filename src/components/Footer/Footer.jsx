import ImgLogo from '../../assets/img/space-logo-footer.png'
import { Link } from '../Link/Link'
import { PaymentsMetods } from '../PaymentsMetods/PaymentsMetods';
import Boleto from '../../assets/img/boleto.png'
import Bitcoin from '../../assets/img/bitcoin.png'
import MasterCard from '../../assets/img/master-card.png'





export const Footer = () => {

    return (
        <>
            <div className="Footer">
                <div className='Footer--flex'>
                    <div>
                        <img className='Footer__logo' src={ImgLogo} alt='logo' />
                    </div>
                    <div>
                        <h3 className='Footer__subtatile'> Institucional</h3>
                        <Link href='#' nome='Termos de uso' />
                        <Link href='#' nome='Politica de Privacidade' />
                        <Link href='#' nome='Formas de Pagamento' />
                        <Link href='#' nome='Trocas e Devoluções' />
                    </div>
                </div>
                <div className='Footer__payments-metods'>
                    <h3 className='Footer__payments-metods__title'>Formas de Pagamento</h3>
                    <ul className='Footer__payments-metods__ul'>
                        <PaymentsMetods href='#' alt='boleto' src={Boleto}/>
                        <PaymentsMetods href='#' alt='bitcoin' src={Bitcoin}/>
                        <PaymentsMetods href='#' alt='master card' src={MasterCard}/>
                    </ul>
                </div>
                <div className='Footer__content'>
                    <p>©2021 – Todos os direitos reservados</p>
                </div>
            </div>
        </>
    );
}
