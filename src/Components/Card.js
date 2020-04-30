import * as React from "react";
import './Card.css';


class Card extends React.Component {
    list;

    constructor(props) {
        super(props);
        this.state = {
            flipped: true,
            list: this.props.list,
            front: this.props.list[0],
            number: 0,
            roman: "I",
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

    trimTitle = (title) => {
        return title.toString().replace("-", " ")
    };

    randomNumber = () => {
        let min = 0;
        let max = Math.floor(this.props.list.length - 1);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    componentDidMount() {
        console.log(this.state.list);
        this.setState({
            number: this.randomNumber(this.state.list.length),
            roman: this.romanize(this.state.number),
            front: this.state.list[this.state.number]
        })
    }

    flip = () => {

        this.setState({
            number: this.randomNumber(this.state.list.length),
            flipped: !this.state.flipped,
            front:
                this.state.flipped ? this.state.list[this.state.number] : this.state.front,
            roman: this.state.flipped ? this.romanize(this.state.number) : this.state.roman

        });
    };

    render() {
        return (


            <div onClick={this.flip} className={"card" + (this.state.flipped ? " flipped" : "")}>
                <div className="back">

                </div>
                <div className="front">
                    <div className={"item"}><p>{this.state.roman}</p></div>
                    <div className={"icon " + this.state.front.toLowerCase()}/>
                    <div className={"item"}><p>{this.trimTitle(this.state.front)}</p></div>
                </div>
            </div>

        )
    }
}

export default Card;
