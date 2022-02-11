export const Link = ({href, children}) =>{
    return <li className="MenuFooter-link"><a className="MenuFooter-link__a" href={href}>{children}</a></li>
}