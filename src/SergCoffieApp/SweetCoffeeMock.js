/**
 * Doel van dit object is het bieden van een interface naar de koffiezetmachine, er is gedrag geimplementeerd
 * echter voel je vrij om dit naar behoefte aan te passen. Zolang de interface van het mock object identiek blijft.
 *
 *
 */

var _cbError = {}
var _cbReady = {}


class SweetCoffeeMachine {


    constructor() {
        this.errorState = 0;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeAmericano(sugar, milk) {

        return true;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeCappuccino(sugar, milk) {
        return true;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeWienerMelange(sugar, milk) {
        return true;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeChoco(sugar, milk) {
        return true;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeBlackTea(sugar, milk) {
        return true;
    }

    /*
     * Sends a command to the coffee machine to start making a drink.
     * sugar and milk are values between [0,1]
     */
    makeEarlGray(sugar, milk) {
        return true;
    }

    /**
     * Callback for retrieving error messages, takes callback function as parameter. Setting the callback
     * tiggers a response in a minute
     */
    errorCallback(callback) {
        _cbError = callback;

        setTimeout(function () {
            // _cbError(Math.round(Math.random() * 4));
            _cbError(0);
        }, Math.random() * 2000);
    }

    /**
     * Callback for retrieving ready messages, takes callback function as parameter.  Setting the callback
     * tiggers a response in a minute
     */
    readyCallback(callback) {
        _cbReady = callback;

        setTimeout(function () {
            _cbReady();
        }, 7000);
    }
}

export default SweetCoffeeMachine