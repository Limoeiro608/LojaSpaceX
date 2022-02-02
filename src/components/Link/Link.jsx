export const Link = (props) =>{
    return <h3 className="Footer-link"><a className="Footer-link__a"  href={props.href}>{props.nome}</a></h3>
}