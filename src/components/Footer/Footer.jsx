import ImgLogo from '../../assets/img/space-logo-footer.png';
import { MenuFooterItem } from './MenuFooterItem/MenuFooterItem';
import { PaymentsMetods } from './PaymentsMetods/PaymentsMetods';
import Boleto from '../../assets/img/boleto.png';
import Bitcoin from '../../assets/img/bitcoin.png';
import MasterCard from '../../assets/img/master-card.png';
import { Baseboard } from './Baseboard/Baseboard';


export const Footer = () => {

    return (
        <>
            <div className='Footer'>
                <div className="container">
                    <div className='row text-center'>
                        <div className='col-md-4 col-lg-3'>
                            <img className='Footer-logo' src={ImgLogo} alt='logo' />
                        </div>
                        <div className=' col-md-3 col-lg-3 text-md-start'>
                            <div className='MenuFooter'>
                                <h2 className='MenuFooter-subtatile'>Institucional</h2>
                                <ul className='MenuFooter-list'>
                                    <MenuFooterItem href='#' a='Termos de uso' />
                                    <MenuFooterItem href='#' a='Política de Privacidade' />
                                    <MenuFooterItem href='#' a='Formas de Pagamento' />
                                    <MenuFooterItem href='#' a='Trocas e Devoluções' />
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-5 col-lg-6 text-md-start'>
                            <div className='MenuFooter'>
                                <h2 className='MenuFooter-subtatile'>Minha Conta</h2>
                                <ul className='MenuFooter-list'>
                                    <MenuFooterItem href='#' a='Meu perfil' />
                                    <MenuFooterItem href='#' a='Meus pedidos' />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='FooterPayments'>
                        <div className='row'>
                            <div className='col'>
                                <div className='text-end'>
                                    <h3 className='FooterPayments-title '>Formas de Pagamento</h3>
                                </div>
                                <div className='FooterPayments-list'>
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
