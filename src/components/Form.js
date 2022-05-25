import React, {useState}from 'react'

export default function Form(props) {
  
    const handleUpClick = () => {
        //console.log("upper case clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = () => {
        //console.log("upper case clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
      //console.log("upper case clicked");
      let newText = '';
      setText(newText);
  }
    const handleOnChange = (e) => {
       // console.log("handle on change clicked");
        setText(e.target.value);
    }
    const [text , setText] =  useState('');
  return (
    <div style = { {color :props.mode === 'dark'? 'white' : 'black'}}>
    <div className="container my-3 " >
        <h1>{props.heading}</h1>
        <textarea className="form-control" style = {{backgroundColor :props.mode === 'dark'?'grey' : 'white' , color : props.mode === 'dark'? 'white' : 'black'}} onChange={handleOnChange} value = {text} rows = "8" id="my-form"></textarea>
        <div className="mb-3"></div>
        <btn className="btn  btn btn-outline-success mx-2 my-3" onClick={handleUpClick}>Click to upper</btn>
        <btn className="btn  btn btn-outline-primary  mx-2 my-3" onClick={handleDownClick}>Click to lower</btn>
        <btn className="btn  btn btn-outline-warning mx-2 my-3" onClick={handleClearClick}>Clear text</btn>
    </div>

    <div className="container">
      <h2>Your Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{(0.008)*(text.split(" ").length)} minutes to read</p>
      <h2 id = "preview">Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in  above to Preview here !"}</p>
    </div>
    </div>
  )
}
