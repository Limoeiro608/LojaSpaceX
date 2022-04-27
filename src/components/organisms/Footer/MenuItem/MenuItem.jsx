
export const MenuItem = (props) => {

    return(
        <li className="MenuItem" href={props.href}>
            <a className="MenuItem-way">{props.a}</a>
        </li>
    );
       
}
