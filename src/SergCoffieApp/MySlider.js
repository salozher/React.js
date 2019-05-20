import React from "react"
import stopSign from '../Pictures/stop.png'
import '../CSS/MySlider.css'

class MySlider extends React.Component {

    constructor(props) {
        super(props)
        this.labelMessage = this.labelMessage.bind(this)
    }

    labelMessage() {
        return (this.props.sliderProps.grayedOut ? "out" : this.props.sliderProps.amount)
    }

    labelImage() {
        return (this.props.sliderProps.grayedOut ? stopSign : null)
    }


    render() {

        let disabledSliderValue = this.props.sliderProps.grayedOut ? 0 : this.props.sliderProps.amount
        let sliderStatus = this.props.sliderProps.grayedOut ? "Disabled-slider" : "Enabled-slider"
        let sliderStatusText = this.props.sliderProps.grayedOut ? "Slider-passive-text" : "Slider-active-text"

        return (
            <div>
                <input
                    className={sliderStatus}
                    id="slider"
                    type="range"
                    min="0" max="100"
                    value={disabledSliderValue}
                    onChange={(event) => this.props.sliderHandleChange(this.props.sliderProps.id, event.target.value)}
                    disabled={this.props.sliderProps.grayedOut}
                    step="1"/>
                <label className={sliderStatusText}>
                    <img className="Stop-image-slider" src={this.labelImage()} alt=""/>
                    {this.props.sliderProps.text} {this.labelMessage()}</label>
            </div>
        );
    }
}

export default MySlider