import * as React from "react";
import './Card.css';


class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            position: this.props.position,
            flipped: true,
            front: this.props.front,
            number: this.props.number,
            roman: "I"
        };
        this.flip = this.flip.bind(this);
    }

    romanize = (num) => {
        let zeroRemoved = num + 1;
        var lookup = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        }, roman = '', i;
        for (i in lookup) {
            while (zeroRemoved >= lookup[i]) {
                roman += i;
                zeroRemoved -= lookup[i];
            }
        }
        return roman;
    };

    componentDidMount() {
        this.setState({
            roman: this.romanize(this.state.number),
        })
    }

    flip = () => {
        debugger
        console.log("got to flip");
        let cardDetails = this.props.getCardDetails(this.props.position);
        console.log(cardDetails);
        this.setState({
            flipped: !this.state.flipped,
            front: this.state.flipped ? cardDetails[1] : this.state.front,
            number: cardDetails[0],
            roman: this.state.flipped ? this.romanize(cardDetails[0]) : this.state.roman

        });

    };

    trimTitle = (title) => {
        return title.toString().replace("-", " ")
    };

    render() {
        return (


            <div onClick={this.flip} className={"card" + (this.state.flipped ? " flipped" : "")}>
                <div className="back">

                </div>
                <div className="front">
                    <div className={"item"}><p>{this.state.roman}</p></div>
                    <div className={"icon " + this.state.front.toLowerCase()}/>
                    <div className={"item"}><p>{this.trimTitle(this.state.front).toUpperCase()}</p></div>
                </div>
            </div>

        )
    }
}

export default Card;
