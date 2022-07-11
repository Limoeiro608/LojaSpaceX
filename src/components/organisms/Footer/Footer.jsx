import ImgLogo from '../../../assets/img/space-logo-footer.png';
import { MenuItem } from './MenuItem/MenuItem';
import { PaymentMethods } from './PaymentMethods/PaymentMethods';
import { Baseboard } from './Baseboard/Baseboard';
import { SocialMedia } from './SocialMedia/SocialMedia';

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
                                <h2 className='MenuFooter-subtatile'>INSTITUCIONAL</h2>
                                <ul className='MenuFooter-list'>
                                    <MenuItem a='Termos de uso' />
                                    <MenuItem a='Política de Privacidade' />
                                    <MenuItem a='Formas de Pagamento' />
                                    <MenuItem  a='Trocas e Devoluções' />
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-5 col-lg-6 text-md-start'>
                            <div className='MenuFooter'>
                                <h2 className='MenuFooter-subtatile'>MINHA CONTA</h2>
                                <ul className='MenuFooter-list'>
                                    <MenuItem a='Meu perfil' />
                                    <MenuItem a='Meus pedidos' />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='FooterRow'>
                        <div className='row'>
                            <div className='col'>
                                <div>
                                    <h3 className='FooterRow-title'>Formas de Pagamento</h3>
                                </div>
                                <div className='FooterRow-list'>
                                    <ul className='d-flex'>
                                        <PaymentMethods/>
                                    </ul>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='text-end'>
                                    <h3 className='FooterRow-title'>Mídias sociais</h3>
                                </div>
                                <div className='FooterRow-list'>
                                    <ul className='d-flex justify-content-end'>
                                        <SocialMedia/>
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
