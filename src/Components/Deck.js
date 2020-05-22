import * as React from "react";
import './Card.css';
import Card from "./Card";


class Deck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flipped: true,
            threeNumbers: [0, 1, 2],
            list: ["Skin-Rip",
                "Chrome",
                "Cross",
                "Biomech",
                "Yin-Yang",
                "Dagger",
                "Panther",
                "Skull",
                "Eagle",
                "Fire",
                "Flower",
                "Think-Weird",
                "Barbed-Wire",
                "Snake",
                "Devil",
                "Eye",
                "Heart",
                "Tribal",
                "Butterfly",
                "Girl-Head",
                "Water",
                "Tiger",
                "Spider-Web"]
        };
    }

    getRandomInt = (max) => {

        return Math.floor(Math.random() * Math.floor(max));
    };

    getUniqueRandomNumber = () => {
        let randomNumber = this.getRandomInt(this.state.list.length-1);
        let a = this.state.threeNumbers[0];
        let b = this.state.threeNumbers[1];
        let c = this.state.threeNumbers[2];
        while (randomNumber === a || randomNumber === b || randomNumber === c) {
            randomNumber = this.getRandomInt(this.state.list.length-1);
        }
        return randomNumber
    };

    getCardDetails = (position) => {
        let newNumber = this.getUniqueRandomNumber();
        this.setUniqueRandomNumber(position, newNumber);
        let newCardFront = this.state.list[newNumber];
        return [newNumber, newCardFront]
    };

    setUniqueRandomNumber = (position, number) => {
        let updatedArray = this.state.threeNumbers;
        updatedArray[position] = number;
        this.setState({ threeNumbers: updatedArray})
    };

    render() {
        let card1 = 0;
        let card2 = 1;
        let card3 = 2;
        return (


            <div className={"cards"}>
                <Card className={"card1"} position={0} front={this.state.list[card1]} number={card1} getCardDetails={this.getCardDetails}/>
                <Card className={"card2"} position={1} front={this.state.list[card2]} number={card2} getCardDetails={this.getCardDetails}/>
                <Card className={"card3"} position={2} front={this.state.list[card3]} number={card3} getCardDetails={this.getCardDetails}/>

            </div>

        )
    }
}

export default Deck;
