import mediaJs from '../../../../socialMedia';

export const SocialMedia = () =>{
    return(
        <>
            {mediaJs.map((media) => 
                <li className='SocialMedia' key={media.id}>
                    <a href={media.href} >
                        <img src={media.img} alt={media.alt} />
                    </a>
                </li>
            )}     
        </>
    )
}