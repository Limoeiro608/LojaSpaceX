import { Link } from './Link'

export const MenuFooter = () => {

    return (
        <>
            <div className='MenuFooter'>
                <h2 className='MenuFooter-subtatile'> Institucional</h2>
                <ul className='MenuFooter-ul'>
                    <Link href='#'>Termos de uso</Link>
                    <Link href='#'>Politica de Privacidade</Link>
                    <Link href='#'>Formas de Pagamento</Link>
                    <Link href='#'>Trocas e Devoluções</Link>
                </ul>
            </div>
        </>
    );
}