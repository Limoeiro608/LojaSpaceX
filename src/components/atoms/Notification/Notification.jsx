import { UncontrolledAlert } from 'reactstrap'

export const Notification = (props) => {
    return (
        <UncontrolledAlert color={props.color}>
            This is a {props.color} alert—check it out!
        </UncontrolledAlert>
    )
}