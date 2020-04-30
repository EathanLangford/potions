import React from 'react';
import './App.css';
import Card from "./Components/Card";

function App() {
    let list = ["Skin-Rip",
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
        "Spider-Web"];


    return (<>

            <div className="noisy">
                <div className="frame">
                    <div className="piece output">

                        <div className={"cards-container"}>
                            <div className={"logo"}/>

                            <div className={"text"}>
                                <h2>Tap a card to flip it, flip it again to reroll.</h2>
                            </div>
                            <div className={"cards"}>
                                {/*<Card id={"trad"}  list={["Dagger", "Panther", "Skull", "Eagle", "Fire", "Flower",]}/>*/}
                                <Card id={"trad"}  list={list}/>
                                <Card id={"trad"}  list={list}/>
                                <Card id={"trad"}  list={list}/>
                                {/*<Card id={"love"}  list={["Get Weird", "Barbed-Wire", "Snake", "Devil", "Eye", "Heart"]}/>*/}
                                {/*<Card id={"90s"}  list={["Tribal", "Butterfly", "Girl Head", "Water", "Tiger", "Spider Web"]}/>*/}
                                {/*<Card id={"80s"}  list={["Chrome", "Blood", "Cross", "BioMech", "Skin Rip", "Yin-Yang"]}/>*/}
                                {/*<Card id={"nerd"}  list={["Stardust", "Dragon", "Wing", "Wolf", "Wizard", "Tribal"]}/>*/}
                                {/*<Card id={"games"}  list={["Stardust", "Dragon", "Wing", "Wolf", "Wizard", "Tribal"]}/>*/}
                            </div>
                        </div>
                    </div>
                    <div className="piece scanlines noclick">
                    </div>
                    <div className="piece glow noclick">
                    </div>
                    <div id={"borderDemo"}/>
                    <div className={"cloud1"}/>
                    <div className={"cloud2"}/>
                    <div className={"cloud3"}/>
                    <div className={"cloud4"}/>
                    <div className={"cloud5"}/>
                    <div className={"background"}/>
                </div>
            </div>
        </>
    )
}


export default App;
