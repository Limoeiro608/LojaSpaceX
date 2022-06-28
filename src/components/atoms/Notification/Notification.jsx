import { Alert } from "reactstrap"

export const Notification = (props) => {
    return (
        <Alert color={props.color}>
            This is a {props.color} alert—check it out!
        </Alert>
    )
}