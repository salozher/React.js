import React from "react"
import drinksData from '../DataSource/drinkButtonData'
import drinkSliderData from '../DataSource/drinkSliderData'
import DrinkItem from './DrinkItem'
import supplementPresenceSwitch from '../DataSource/supplementPresenceSwitch'
import SweetCoffeeMock from './SweetCoffeeMock'
import StatusBar from './StatusBar'
import ErrorAlert from "./ErrorAlert";
import ComponentSelectMenu from "./ComponentSelectMenu";
import errorMessageData from '../DataSource/errorMessageData'


class DrinkSelectMenu extends React.Component {
    constructor(props) {
        super(props)
        this.MyCoffieApparat = new SweetCoffeeMock()
        this.MyCoffieApparat.readyCallback(this.drinkIsPreparing)

        this.state = {
            drinks: drinksData,
            supplements: supplementPresenceSwitch,
            currentErrorState: this.MyCoffieApparat.errorState,
            errorAlert: errorMessageData,
            mycomponents: drinkSliderData,
            drinkIsSelected: false,
            selectedDrink: "",
            drinkPreparationInProcess: false,
        }

        this.state.supplements.map(supplement => {
            if (supplement.supplementName === "Sugar") {
                this.state.mycomponents.map(sliderComponent => {
                    if (sliderComponent.id === "1") {
                        sliderComponent.grayedOut = !supplement.isAvailable
                    }
                })
            }
        })

        this.state.supplements.map(supplement => {
            if (supplement.supplementName === "Milk") {
                this.state.mycomponents.map(sliderComponent => {
                    if (sliderComponent.id === "2") {
                        sliderComponent.grayedOut = !supplement.isAvailable
                    }
                })
            }
        })

        this.state.mycomponents.map(component => {
            if (component.text === "Sugar") {
                console.log(component.amount)
                this.setState({
                    sugar: component.amount
                })
            }
        })

        this.readyCheckOut = this.readyCheckOut.bind(this)
        this.optOutFinish = this.optOutFinish.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updateErrorState = this.updateErrorState.bind(this)
        this.updateDrinkPreparationInProcess = this.updateDrinkPreparationInProcess.bind(this)
        this.readyCheckOut()
    }

    readyCheckOut() {
        this.state.drinks.map(drink => {
            if (drink.id === "1") {
                this.state.supplements.map(supplement => {
                    if (supplement.id === "1") {
                        drink.component1Available = supplement.isAvailable
                    }
                    if (supplement.id === "2") {
                        drink.component2Available = supplement.isAvailable
                    }
                    if (supplement.id === "3") {
                        drink.component3Available = supplement.isAvailable
                    }
                })
                if (drink.component3Available) {
                    drink.grayedOut = false
                } else {
                    drink.grayedOut = true
                }
            }
            if (drink.id === "2") {
                this.state.supplements.map(supplement => {
                    if (supplement.id === "1") {
                        drink.component1Available = supplement.isAvailable
                    }
                    if (supplement.id === "2") {
                        drink.component2Available = supplement.isAvailable
                    }
                    if (supplement.id === "3") {
                        drink.component3Available = supplement.isAvailable
                    }
                })
                if (drink.component1Available && drink.component2Available && drink.component3Available) {
                    drink.grayedOut = false
                } else {
                    drink.grayedOut = true
                }
            }
            if (drink.id === "3") {
                this.state.supplements.map(supplement => {
                    if (supplement.id === "1") {
                        drink.component1Available = supplement.isAvailable
                    }
                    if (supplement.id === "2") {
                        drink.component2Available = supplement.isAvailable
                    }
                    if (supplement.id === "3") {
                        drink.component3Available = supplement.isAvailable
                    }
                    if (supplement.id === "4") {
                        drink.component4Available = supplement.isAvailable
                    }
                })
                if (drink.component3Available && drink.component4Available) {
                    drink.grayedOut = false
                } else {
                    drink.grayedOut = true
                }
            }
            if (drink.id === "4") {
                this.state.supplements.map(supplement => {
                    if (supplement.id === "1") {
                        drink.component1Available = supplement.isAvailable
                    }
                    if (supplement.id === "2") {
                        drink.component2Available = supplement.isAvailable
                    }
                    if (supplement.id === "4") {
                        drink.component3Available = supplement.isAvailable
                    }
                })
                if (drink.component3Available) {
                    drink.grayedOut = false
                } else {
                    drink.grayedOut = true
                }
            }
            if (drink.id === "5") {
                this.state.supplements.map(supplement => {
                    if (supplement.id === "1") {
                        drink.component1Available = supplement.isAvailable
                    }
                    if (supplement.id === "2") {
                        drink.component2Available = supplement.isAvailable
                    }
                    if (supplement.id === "5") {
                        drink.component3Available = supplement.isAvailable
                    }
                })
                if (drink.component3Available) {
                    drink.grayedOut = false
                } else {
                    drink.grayedOut = true
                }
            }
            if (drink.id === "6") {
                this.state.supplements.map(supplement => {
                    if (supplement.id === "1") {
                        drink.component1Available = supplement.isAvailable
                    }
                    if (supplement.id === "2") {
                        drink.component2Available = supplement.isAvailable
                    }
                    if (supplement.id === "6") {
                        drink.component3Available = supplement.isAvailable
                    }
                })
                if (drink.component3Available) {
                    drink.grayedOut = false
                } else {
                    drink.grayedOut = true
                }
            }
        })
    }

    drinkIsPreparing() {
        return true
    }

    sugarAmount() {
        var value = ""
        this.state.mycomponents.map(component => {
            if (component.text === "Sugar") {
                value = component.amount
            }
        })
        return value
    }

    milkAmount() {
        var value = ""
        this.state.mycomponents.map(component => {
            if (component.text === "Milk") {
                value = component.amount
            }
        })
        return value
    }

    disableButtons() {
        this.state.drinks.map(drink => {
            drink.grayedOut = true
        })
    }

    handleChange(id) {

        this.state.drinks.map(drink => {
            if (drink.id === id) {
                if (drink.text === "Americano") {
                    this.disableButtons();
                    let makeAmericano = this.MyCoffieApparat.makeAmericano(this.sugarAmount(), this.milkAmount())
                    makeAmericano ?
                    this.setState({
                        selectedDrink: drink.text,
                        drinkIsSelected: true,
                    }) : console.log("WAF!")
                    this.optOut()
                }
                if (drink.text === "Cappuccino") {
                    this.disableButtons();
                    let makeCappuccino = this.MyCoffieApparat.makeCappuccino(this.sugarAmount(), this.milkAmount())
                    makeCappuccino ?
                    this.setState({
                        selectedDrink: drink.text,
                        drinkIsSelected: true,
                    }) : console.log("WAF!")
                    this.optOut()
                }
                if (drink.text === "Wiener Melange") {
                    this.disableButtons();
                    let makeWienerMelange = this.MyCoffieApparat.makeWienerMelange(this.sugarAmount(), this.milkAmount())
                    makeWienerMelange ?
                    this.setState({
                        selectedDrink: drink.text,
                        drinkIsSelected: true,
                    }) : console.log("WAF!")
                    this.optOut()
                }
                if (drink.text === "Choco") {
                    this.disableButtons();
                    let makeChoco = this.MyCoffieApparat.makeChoco(this.sugarAmount(), this.milkAmount())
                    makeChoco ?
                    this.setState({
                        selectedDrink: drink.text,
                        drinkIsSelected: true,
                    }) : console.log("WAF!")
                    this.optOut()
                }
                if (drink.text === "Black Tea") {
                    this.disableButtons();
                    let makeBlackTea = this.MyCoffieApparat.makeBlackTea(this.sugarAmount(), this.milkAmount())
                    makeBlackTea ?
                    this.setState({
                        selectedDrink: drink.text,
                        drinkIsSelected: true,
                    }) : console.log("WAF!")
                    this.optOut()
                }
                if (drink.text === "Earl Grey") {
                    this.disableButtons();
                    let makeEarlGrey = this.MyCoffieApparat.makeEarlGray(this.sugarAmount(), this.milkAmount())
                    makeEarlGrey ?
                    this.setState({
                        selectedDrink: drink.text,
                        drinkIsSelected: true,
                    }) : console.log("WAF!")
                    this.optOut()
                }

                // console.log(drink.text, "clicked!", "Sugar Amount:", this.sugarAmount(), ", Milk amount:", this.milkAmount())
            }
        })
    }

    optOut() {
        setTimeout(() => {
            this.setState({
                drinkPreparationInProcess: true,
                drinkIsSelected: false,
            })
            this.optOutFinish()
        }, 2000)
    }


    optOutFinish() {
        this.MyCoffieApparat.readyCallback(this.updateDrinkPreparationInProcess)
        this.readyCheckOut()
    }


    updateErrorState(int) {
        this.setState({
            currentErrorState: int
        })
    }


    updateDrinkPreparationInProcess() {
        this.setState({
            drinkPreparationInProcess: false
        })
        this.MyCoffieApparat.errorCallback(this.updateErrorState)
    }


    renderErrorAlert() {
        return (this.state.currentErrorState > 0 ? <ErrorAlert errorText={this.state.errorAlert}
                                                               errorState={this.state.currentErrorState}/> :
            null)
    }

    statusBarAlert() {
        return <StatusBar currentState={this.state}/>
    }


    render() {
        const drinkButton = this.state.drinks.map(buttonItem => <DrinkItem buttonKey={buttonItem.id}
                                                                           buttonItem={buttonItem}
                                                                           buttonHandleChange={this.handleChange}/>)

        return (
            <div>
                <div className={"BtnBackground-frame"}>
                    {drinkButton}
                </div>
                <ComponentSelectMenu mycomponents={this.state.mycomponents}
                                     supplements={this.state.supplements}/>
                {this.statusBarAlert()}
                {this.renderErrorAlert()}
            </div>
        )
    }
}


export default DrinkSelectMenu