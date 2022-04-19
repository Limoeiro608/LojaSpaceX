import MediaQuery from 'react-responsive'
import ImgThumb1 from '../../../assets/img/thumb-mail-1.png'
import ImgThumb2 from '../../../assets/img/thumb-mail-2.png'
import VideoRocket from '../../../assets/video/rocket.mp4'
import {Video} from '../../atoms/Video/Video'
import {SmallNewsText} from '../../../components/molecules/SmallNewsText/SmallNewsText'

export const NewsBanner = () => {
    return (
        <>
            <div className='Region col-12 container d-lg-flex mt-5 mb-5'>
                <Video src={VideoRocket} width={'100%'} height={'100%'} poster={ImgThumb1} />
                <SmallNewsText newsText='Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit .'
                    newsParagraphs='Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit .'
                />
            </div>
            <div className='Region col-12 container d-lg-flex mt-5 mb-5'>
                <MediaQuery maxWidth={990}>
                    <Video src={VideoRocket} width={'100%'} height={'100%'} poster={ImgThumb2} />
                    <SmallNewsText newsText='Dragão Retorna à Terra'
                        newsParagraphs='Dragon completa a primeira missão civil em órbita'
                    />
                </MediaQuery>
                <MediaQuery minWidth={991}>
                    <SmallNewsText newsText='Dragão Retorna à Terra'
                        newsParagraphs='Dragon completa a primeira missão civil em órbita'
                    />
                    <Video src={VideoRocket} width={'100%'} height={'100%'} poster={ImgThumb2} />
                </MediaQuery>
            </div>
        </>
    )
}