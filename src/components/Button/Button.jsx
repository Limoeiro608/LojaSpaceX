export const Button = (props) =>{
    return <button className={props.className} onClick={props.click}>{props.label}</button>
}