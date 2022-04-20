import mediaJs from '../../../../socialMedia';

export const SocialMedia = () =>{
    return(
        <>
            {mediaJs.map((media) => 
                <li>
                    <a className='FooterRow-list__item SocialMedia' href={media.href} >
                        <img src={media.img} alt={media.alt} />
                    </a>
                </li>
            )}
            
        </>
    )
}