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
        console.log("called get randomInt");

        return Math.floor(Math.random() * Math.floor(max));
    };

    getUniqueRandomNumber = () => {
        debugger;
        console.log("called get UniqueRandomNumber");
        let randomNumber = this.getRandomInt(this.state.list.length-1);
        console.log("random number is = "+randomNumber);
        let a = this.state.threeNumbers[0];
        let b = this.state.threeNumbers[1];
        let c = this.state.threeNumbers[2];
        while (randomNumber === a || randomNumber === b || randomNumber === c) {
            console.log("inside loop");
            randomNumber = this.getRandomInt(this.state.list.length-1);
            console.log("new random number is = "+randomNumber);
        }
        console.log("returning randomNumber = "+randomNumber);
        return randomNumber
    };

    getCardDetails = (position) => {
        debugger;
        console.log("called getCardDetails");
        let newNumber = this.getUniqueRandomNumber();
        console.log("three numbers before setting ["+this.state.threeNumbers+"]");
        this.setUniqueRandomNumber(position, newNumber);
        console.log("three numbers after setting ["+this.state.threeNumbers+"]");
        let newCardFront = this.state.list[newNumber];
        return [newNumber, newCardFront]
    };

    setUniqueRandomNumber = (position, number) => {
        let updatedArray = this.state.threeNumbers;
        updatedArray[position] = number;
        this.setState({ threeNumbers: updatedArray})
    };

    render() {
        debugger;
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
