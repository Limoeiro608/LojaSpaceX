import ImgLogo from '../../assets/img/space-logo-footer.png'
import { MenuFooter } from './MenuFooter';
import { PaymentsMetods } from './PaymentsMetods';
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
                            <MenuFooter/>  
                        </div>
                    </div>
                    <div className='FooterPayments'>
                        <div className='row'>
                            <div className='col'>
                                <div className='text-end'>
                                    <h3 className='FooterPayments-title '>Formas de Pagamento</h3>
                                </div>
                                <div className='FooterPayments-ul'>
                                    <ul className=' d-flex justify-content-end'>
                                        <PaymentsMetods href='#' alt='boleto' src={Boleto} />
                                        <PaymentsMetods href='#' alt='bitcoin' src={Bitcoin} />
                                        <PaymentsMetods href='#' alt='master card' src={MasterCard} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Baseboard />
        </>
    );
}
