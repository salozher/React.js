import React from "react"

class StatusBar extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        let myMessage = <div>Ready. Please order your drink.</div>

        return (
            <div className={"Statusbar-frame"}>
                <p className={"Status-bar"}>
                    {this.props.currentState.drinkIsSelected ?
                        <div>You have ordered {this.props.currentState.selectedDrink}</div> :
                        this.props.currentState.drinkPreparationInProcess ?
                            <div>Please wait. Your {this.props.currentState.selectedDrink} is almost ready!</div> :
                            myMessage
                    }
                </p>
            </div>
        )
    }
}

export default StatusBar