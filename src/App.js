import React, { useState, useEffect } from "react";
var strings = [
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
  "The room in which I found myself was very large and lofty. The windows were long, narrow, and pointed, and at so vast a distance from the black oaken floor as to be altogether inaccessible from within. Feeble gleams of encrimsoned light made their way through the trellised panes, and served to render sufficiently distinct the more prominent objects around; the eye, however, struggled in vain to reach the remoter angles of the chamber, or the recesses of the vaulted and fretted ceiling. Dark draperies hung upon the walls. The general furniture was profuse, comfortless, antique, and tattered. Many books and musical instruments lay scattered about, but failed to give any vitality to the scene. I felt that I breathed an atmosphere of sorrow. An air of stern, deep, and irredeemable gloom hung over and pervaded all.",
  "When students have completed the assignment, they simply click the Mark As Done button to let the teacher know they have finished. Note: The teacher does NOT receive an alert or email notification when work has been turned in, or marked as done. If a student is turning in late work, it is recommended that they leave a private comment to notify the teacher of late work or special circumstances.",
  "During the next five years, I started a company named NeXT, another company named Pixar, and fell in love with an amazing woman who would become my wife. Pixar went on to create the world's first computer-animated feature film, Toy Story, and is now the most successful animation studio in the world. In a remarkable turn of events, Apple bought NeXT, I returned to Apple, and the technology we developed at NeXT is at the heart of Apple's current renaissance. And Laurene and I have a wonderful family together.",
  "If you choose to use your status and influence to raise your voice on behalf of those who have no voice; if you choose to identify not only with the powerful, but with the powerless; if you retain the ability to imagine yourself into the lives of those who do not have your advantages, then it will not only be your proud families who celebrate your existence, but thousands and millions of people whose reality you have helped change. We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.",
  "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, when the sun does set.",
  "Here is the perfect system for cleaning your room. First, move all of the items that do not have a proper place to the center of the room. Get rid of at least five things that you have not used within the last year. Take out all of the trash, and place all of the dirty dishes in the kitchen sink. Now find a location for each of the items you had placed in the center of the room. For any remaining items, see if you can squeeze them in under your bed or stuff them into the back of your closet. See, that was easy!",
  "Oceans and lakes have much in common, but they are also quite different. Both are bodies of water, but oceans are very large bodies of salt water, while lakes are much smaller bodies of fresh water. Lakes are usually surrounded by land, while oceans are what surround continents. Both have plants and animals living in them. The ocean is home to the largest animals on the planet, whereas lakes support much smaller forms of life. When it is time for a vacation, both will make a great place to visit and enjoy.",
  "The Blue Whales just played their first baseball game of the new season; I believe there is much to be excited about. Although they lost, it was against an excellent team that had won the championship last year. The Blue Whales fell behind early but showed excellent teamwork and came back to tie the game. The team had 15 hits and scored 8 runs. That’s excellent! Unfortunately, they had 5 fielding errors, which kept the other team in the lead the entire game. The game ended with the umpire making a bad call, and if the call had gone the other way, the Blue Whales might have actually won the game. It wasn’t a victory, but I say the Blue Whales look like they have a shot at the championship, especially if they continue to improve.",
];
function App() {
  const [data, setData] = useState(strings[Math.floor(Math.random() * 10)]);
  const [input, setInput] = useState("");
  const [wpm, setWpm] = useState(0);
  const [time, setTime] = useState(40);
  var interval;
  useEffect(() => {
    interval = setTimeout(tick, 1000);
    if (time === 0) {
      //clearTimeout(interval);
      handleSubmit();
    }
  });
  function tick() {
    setTime(time - 1);
    //console.log(time);
  }
  var handleInput = (str) => {
    setInput(str);
  };
  var handleSubmit = () => {
    clearTimeout(interval);
    let s1 = data.split(" ");
    let s2 = input.split(" ");
    console.log(s2.length);
    let i = 0;
    while (s1[i] === s2[i] && i < s1.length && i < s2.length) {
      i++;
    }
    let wps = i / (20 - time);
    setWpm(wps * 60);

    setTime(0);
  };
  function handleRestart() {
    clearTimeout(interval);
    setData(strings[Math.floor(Math.random() * 10)]);
    setInput("");
    setWpm(0);
    setTime(40);
  }
  return (
    <React.Fragment>
      <Heading />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3>
              <Timer time={time} />
            </h3>
          </div>
          <div className="col-sm-6 ">
            <button
              className="btn btn-primary float-right"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        </div>
        {time === 0 ? <Result wpm={wpm} /> : null}
        <Content data={data} />
        <TypeBox
          input={input}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          time={time}
        />
      </div>
    </React.Fragment>
  );
}
function Result(props) {
  return (
    <div className="jumbotron rounded " style={{ backgroundColor: "#cfe6ff" }}>
      <b>
        <p>Your speed is : {props.wpm} words per minute.</p>
      </b>
    </div>
  );
}
function Heading(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Typing Speed Calcuator</span>
    </nav>
  );
}

function Content(props) {
  return (
    <div className="jumbotron rounded ">
      <p className="lead">
        <b>Type this as fast as you can!</b>
      </p>
      <hr></hr>
      <p>
        <b>{props.data}</b>
      </p>
    </div>
  );
}
function TypeBox(props) {
  return (
    <div className="jumbotron rounded ">
      <div className="form-group">
        <label>Type Here:</label>
        <textarea
          className="form-control"
          value={props.input}
          onChange={(e) => {
            props.handleInput(e.target.value);
          }}
        ></textarea>
        <hr></hr>
        <button
          className="btn btn-success"
          disabled={props.time === 0 ? true : false}
          onClick={props.handleSubmit}
        >
          Done!
        </button>
      </div>
    </div>
  );
}
function Timer(props) {
  return (
    <span className="badge badge-light">
      {Math.floor(props.time / 60)} : {props.time % 60}
    </span>
  );
}
export default App;
