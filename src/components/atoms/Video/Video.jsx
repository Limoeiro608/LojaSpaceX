export const Video = (props) => {
    return(
        <video className='Video' src={props.src} width={props.width} height={props.height} autoPlay muted loop poster={props.poster}></video>
    )
}