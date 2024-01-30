import React from "react";
import './style.css';
import memeData from "./memeData";

function Meme(){
        // const [memeImage, setMemeImage] = React.useState("")
        const[memeImage, setMeme] = React.useState({
            topText:"",
            bottomText: "",
            randomImage: "https://i.imgflip.com/1boj.jpg"
        });

        // const memeArray = memeData.data.memes;

        const[allMemeImages, setAllMemes] = React.useState([])
        
        React.useEffect(()=> {
            fetch("https://api.imgflip.com/get_memes")
            .then(res=> res.json())
            .then(data=> setAllMemes(data.data.memes))
        }, [])
        // console.log(allMemes)
        
    function getMemeImage() {
         const memeArray = memeData;
        if (memeArray.length > 0) {
        //     const randomNumber = Math.floor(Math.random() * memeArray.length);
        //     // Handle the case when the array is empty
        //     console.error("Meme array is empty!");
        //     return;
        // }
    
        // const randomNumber = Math.floor(Math.random() * memeArray.length);
        // setMeme(memeArray[randomNumber].url)
        // setMeme(prevMeme => ({
        //     ...prevMeme, 
        //     randomImage:memeArray[randomNumber]. url
        // }))
        //  url = memeArray[randomNumber].url
        // console.log(url)
        // console.log(randomNumber)
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        if (randomNumber >= 0 && randomNumber < memeArray.length) {
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: memeArray[randomNumber].url
            }));
        } else {
            console.error("Invalid random number:", randomNumber);
        } }
        else {
            console.error("Meme array is empty!");
        }
    }
        function handleChange(event){
            const {name, value} = event.target
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
        }

    
    return(
     <main>
        <div className="form">
            {/* <p>{url}</p> */}
            <input type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={Meme.topText}
            onChange={handleChange}
             />
                <input text="text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomText" 
                value={Meme.bottomText}
                onChange={handleChange}
                />
            <button className="form--button"
            onClick={getMemeImage}
            >Get a new meme image</button>
        </div>
        <div className="meme">
        <img src= {memeImage.randomImage} className="meme--image"/>
        <h2 className="meme--text top">{Meme.topText}</h2>
        <h2 className="meme--text bottom">{Meme.bottomText}</h2>
        </div>
     </main>  
    );
}

export default Meme;