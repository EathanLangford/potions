import React from 'react';
import './App.css';
// import Card from "./Components/Card";
import Deck from "./Components/Deck";

function App() {


    return (<>

            <div className="noisy">
                <div className="frame">
                    <div className="piece output">

                        <div className={"cards-container"}>
                            <div className={"logo"}/>

                            <div className={"text"}>
                                <h2>Tap a card to flip it, flip it again to reroll.</h2>
                            </div>
                            <Deck/>
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
