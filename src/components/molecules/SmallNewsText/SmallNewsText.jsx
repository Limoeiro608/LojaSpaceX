import {Button} from '../../atoms/Button/Button'

export const SmallNewsText = (props) => {

    return (
        <div className='SmallNewsText'>
            <h2 className='SmallNewsText-title'>{props.newsText}</h2>
            <p className='SmallNewsText-paragraphs'>{props.newsParagraphs}</p>
            <div className='SmallNewsText-btnBox'>
               <Button className={'Button Button--fontInter'}>Saiba mais</Button> 
            </div>  
        </div>
    )
}