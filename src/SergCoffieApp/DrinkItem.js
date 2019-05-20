import React from "react"
import stopSign from '../Pictures/stop.png'


class DrinkItem extends React.Component {
    constructor(props) {
        super(props);
        this.picturePath = this.picturePath.bind(this);
    }

    picturePath() {
        return (this.props.buttonItem.grayedOut ? stopSign : null)
    }

    render() {
        let buttonStatus = this.props.buttonItem.grayedOut ? "My-passive-button" : "My-active-button";
        return (
            <div>
                <button className={buttonStatus}
                        onClick={() => this.props.buttonHandleChange(this.props.buttonItem.id)}
                        disabled={this.props.buttonItem.grayedOut}>
                    {this.props.buttonItem.text}
                    <img className={"Stop-image"}
                         src={this.picturePath()}
                         alt=""/>
                </button>
            </div>
        )
    }
}

export default DrinkItem