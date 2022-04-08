export const Video = (props) => {
    return(
        <video src={props.src} width={props.width} height={props.height} controls autoPlay muted poster={props.poster}></video>
    )
}