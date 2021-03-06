import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "π±π": " Cat Eyes",
  "ππΈπ»": " Beauty Queen",
  "π­ππ»ββοΈ": " Cry me a river",
  "ππ»ββοΈπ": " Effortless Waves",
  "ππ»ββοΈβπ»": " Talk To The Hand",
  "π©π": " Screw You",
  "π°βοΈ": " That was cold",
  "ππ»ββοΈβ": " Not my Cup of Tea",
  "ππ»ββοΈπ©": " You are deep in Sh!t",
  "πππ": "I'm not listening",
  "π£ππ": " Bombshell Waves",
  "πΈπ»ππ΄": " Beauty Sleep",
  "π©π»π­π·": " Face mask selfie",
  "πππ»ββοΈπ·": " Woke up like this selfie",
  "βππ»ββοΈβοΈ": " Your Head's in the Clouds",
  "π«ππ·ππ»ββοΈ": " No Makeup Selfie",
  "π¨π»βπ¦±ππΌππΌπ£": " You're a catch",
  "βπππ»π": " Don't bite the hand that feeds you"
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
        <span id="meaning">Meaning β© </span>
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
        <p>Made with β€οΈ by Apurva</p>
      </footer>
    </div>
  );
}
