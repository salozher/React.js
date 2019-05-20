import React from "react"
import '../CSS/ErrorAlert.css'


class ErrorAlert extends React.Component {
    constructor(props) {
        super(props)
        this.myErrorState = props.errorState
        this.errorText = this.errorText.bind(this)
    }

    errorText() {
        if (this.props.errorState === 1) {
            return "No water pressure."
        }
        if (this.props.errorState === 2 || this.props.errorState === 3) {
            return "The Coffee Machine is broken."
        }

    }


    render() {
        return (
            <div className={"ErrorFrame"}>
                <label className={"Label"}>
                    <h1>Unfortunately there is a technical problem:
                        <br/> {this.errorText()}
                        <br/> Making any drinks is not possible.</h1>
                </label>
            </div>
        )
    }
}

export default ErrorAlert