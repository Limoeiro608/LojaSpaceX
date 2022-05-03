import {Video} from '../../atoms/Video/Video'
import {SmallNewsText} from '../../../components/molecules/SmallNewsText/SmallNewsText'

export const NewsBanner = (props) => {
let inverse = ['d-lg-flex']
    if(props.inverse === true){
        inverse.push(' flex-row-reverse')
    }
    
    return (
        <div className={inverse.join('')}>
            <Video src={props.src} width={'100%'} height={'100%'} poster={props.poster}/>
            <SmallNewsText newsText={props.newsText}
                newsParagraphs={props.newsParagraphs}
            />  
        </div>
    )
}