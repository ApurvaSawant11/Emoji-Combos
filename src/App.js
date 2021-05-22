import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐱👀": " Cat Eyes",
  "💄👸🏻": " Beauty Queen",
  "😭🏊🏻‍♀️": " Cry me a river",
  "🙆🏻‍♀️🌊": " Effortless Waves",
  "💁🏻‍♀️✋🏻": " Talk To The Hand",
  "🔩😒": " Screw You",
  "😰❄️": " That was cold",
  "🙅🏻‍♀️☕": " Not my Cup of Tea",
  "🏊🏻‍♀️💩": " You are deep in Sh!t",
  "👉🙄👈": "I'm not listening",
  "💣🐚🌊": " Bombshell Waves",
  "👸🏻💄😴": " Beauty Sleep",
  "👩🏻🎭📷": " Face mask selfie",
  "🌅🙆🏻‍♀️📷": " Woke up like this selfie",
  "☁🙆🏻‍♀️☁️": " Your Head's in the Clouds",
  "🚫💄📷💁🏻‍♀️": " No Makeup Selfie",
  "👨🏻‍🦱👉🏼👉🏼🎣": " You're a catch",
  "❌😁👋🏻🍝": " Don't bite the hand that feeds you"
};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("You're a catch");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have the emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <header>
        <h1>EMOJI COMBOS</h1>
        <p id="about">
          Simple sentences become fun puzzles when they turn into emoji
          combinations. If you are puzzled or wanna puzzle your friends with
          some cute emoji combos, then you have came to the right place!
        </p>
      </header>

      <div className="des">
        <p>Type or Paste your emoji here to find the meaning.</p>
      </div>

      <input onChange={emojiInputHandler}></input>
      <div id="meaning-div">
        <span id="meaning">Meaning ➩ </span>
        {meaning}
      </div>

      <h3>COMBOS WE KNOW</h3>
      <div className="grid-container">
        {emojiArray.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              className="list-emoji"
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <p>More combos comming soon...</p>
      <footer>
        <p>Made with ❤️ by Apurva</p>
      </footer>
    </div>
  );
}
