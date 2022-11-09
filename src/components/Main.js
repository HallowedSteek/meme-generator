import React from "react";
import data from "../data";

export default function Main() {
  const memeData = data.data.memes.map((item) => item);

  // eslint-disable-next-line no-unused-vars
  const [allMemeImages, setAllMemeImages] = React.useState(data);

  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    meme: "https://i.imgflip.com/1bij.jpg",
    bottomText: "",
  });

  function randomImage() {
    // let top = document.getElementById("topText").value.toUpperCase();
    // let bot = document.getElementById("bottomText").value.toUpperCase();

    let rand = Math.floor(Math.random() * memeData.length);

    setMemeImage(
      (prevItem) =>
        (prevItem = {
          ...prevItem,
          meme: memeData[rand].url,
        })
    );

  }

  function changeHandler(event){

    const {name, value } = event.target

    setMemeImage(prevMeme=>({
      ...prevMeme,
      [name]: value.toUpperCase()
    }))
  }

  return (
    <div className="main">
      <div className="form">
        <input id="topText" type="text" placeholder="Top text" name="topText" value={memeImage.topText} onChange={changeHandler} ></input>
        <input id="bottomText" type="text" placeholder="Bottom text"  name="bottomText" value={memeImage.bottomText} onChange={changeHandler}></input>
        <button onClick={randomImage} className="button">
          Get new meme image
        </button>
      </div>

      <div className="memeBox">
        <h1 className="top">{memeImage.topText}</h1>

        {/*eslint-disable-next-line jsx-a11y/alt-text */}
        <img className="memeImage" src={memeImage.meme}></img>

        <h1 className="bottom">{memeImage.bottomText}</h1>
      </div>
    </div>
  );
}
