export const Navbar = (props) =>{
    return (
        <li><a className="Header-nav__a"  href={props.href}>{props.nome}</a></li>
    );
}