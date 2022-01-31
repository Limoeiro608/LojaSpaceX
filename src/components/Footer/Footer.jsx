import ImgLogo from '../../assets/img/space-logo-footer.png'
import { Link } from '../Link/Link'
import { PaymentsMetods } from '../PaymentsMetods/PaymentsMetods';
import Boleto from '../../assets/img/boleto.png'
import Bitcoin from '../../assets/img/bitcoin.png'
import MasterCard from '../../assets/img/master-card.png'
import { Baseboard } from '../Baseboard/Baseboard';


export const Footer = () => {

    return (
        <>
            <div className='Footer'>
                <div className="container">
                    <div className='row text-center'>
                        <div className='col-md-4'>
                            <img className='Footer-logo' src={ImgLogo} alt='logo' />
                        </div>
                        <div className='col-md-8 text-md-start'>
                            <h3 className='Footer-subtatile'> Institucional</h3>
                            <Link href='#' nome='Termos de uso' />
                            <Link href='#' nome='Politica de Privacidade' />
                            <Link href='#' nome='Formas de Pagamento' />
                            <Link href='#' nome='Trocas e Devoluções' />
                        </div>
                    </div>
                    <div className='Footer-payments'>
                        <div className='row'>
                            <div className='col'>
                                <h3 className='Footer-payments__title text-end'>Formas de Pagamento</h3>
                                <ul className='Footer-payments__ul d-flex justify-content-end'>
                                    <PaymentsMetods href='#' alt='boleto' src={Boleto} />
                                    <PaymentsMetods href='#' alt='bitcoin' src={Bitcoin} />
                                    <PaymentsMetods href='#' alt='master card' src={MasterCard} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Baseboard/>
        </>
    );
}
