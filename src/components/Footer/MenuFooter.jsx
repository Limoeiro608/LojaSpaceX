import { Link } from '../Link/Link'

export const MenuFooter = () => {

    return (
        <ul>
            <li className='MenuFooter-subtatile'> Institucional</li>
            <Link href='#'>Termos de uso</Link>
            <Link href='#'>Politica de Privacidade</Link>
            <Link href='#'>Formas de Pagamento</Link>
            <Link href='#'>Trocas e Devoluções</Link>
        </ul>
    );
}