import React from "react"
import MySlider from "./MySlider";

class DrinkSelectMenu extends React.Component {
    constructor(props) {
        super(props)
        this.sliderHandleChange = this.sliderHandleChange.bind(this)
    }

    sliderHandleChange(id, newAmount) {
        this.setState(prevState => {
            const updatedSlider = this.props.mycomponents.map(item => {
                if (item.id === id) {
                    item.amount = newAmount
                    console.log(item.text, "amount is", newAmount)
                    // alert(item.text + " amount is " + newAmount)
                }
                return item
            })
            return {
                mycomponents: updatedSlider
            }
        })
    }

    render() {
        const drinkSlider = this.props.mycomponents.map(sliderItem => <MySlider sliderKey={sliderItem.id}
                                                                                sliderProps={sliderItem}
                                                                                sliderHandleChange={this.sliderHandleChange}/>)
        return (
            <div className={"SliderBackground-frame"}>
                {drinkSlider}
            </div>
        )
    }
}

export default DrinkSelectMenu