import React, {Component} from 'react';
import backgroundPicture from '../Pictures/espresso-lviv.jpg'
import '../CSS/App.css';
import MyHeader from './MyHeader'
import DrinkSelectMenu from './DrinkSelectMenu'


class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <MyHeader/>
                <DrinkSelectMenu/>
                <img src={backgroundPicture} alt="backgroundpicture"/>
            </div>
        );
    }
};
export default App;

