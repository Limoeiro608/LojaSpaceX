export const SocialMedia = (props) =>{
    return(
        <li><a className='FooterRow-list__item SocialMedia' href={props.href} ><img src={props.img} alt={props.alt} /></a></li>
    )
}