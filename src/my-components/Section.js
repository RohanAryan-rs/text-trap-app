import React, { useState } from 'react'


export default function Section(props) {
  
  const handleCopyClick = () => {
    var text = document.getElementById("box1");
    navigator.clipboard.writeText(text);
  }
 
  const handleClick = () => {
    setText(text.toLocaleLowerCase());

  }
  const handleUpClick = () => {
    setText(text.toUpperCase());
  }
  const handleClearClick = () => {
    setText((""));
  }
  const handleRemoveClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) => {
    setText(event.target.value);

  }

  const [text, setText] = useState("")

  return (
    <div className="container">
      <h1 className='my-5'>{props.heading}</h1>
      <div className="mb-3 my-4">
        <textarea className="form-control" id="box1" rows="4" value={text} placeholder='Write here...' onChange={handleOnChange}></textarea>
      </div>
      <button disabled={text.length === 0} type='button' className='btn btn-info mx-3 my-2' onClick={handleUpClick}>Upper Case</button>
      <button disabled={text.length === 0} type='button' className='btn btn-danger my-2' onClick={handleClick}>Lower Case</button>
      <button disabled={text.length === 0} type='button' className='btn btn-success mx-3 my-2' onClick={handleRemoveClick}>Remove Extra Space</button>
      <button disabled={text.length === 0} type='button' className='btn btn-primary mx-3 my-2' onClick={handleCopyClick} >Copy Text</button>
      <button disabled={text.length === 0} type='button' className='btn btn-secondary mx-3 my-2' onClick={handleClearClick} >Clear Text</button>
      
      <p className='my-3'>Words {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} | Character {text.length}</p>
    </div>


  )
}
