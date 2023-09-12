import React, { useState } from 'react'

export default function TextForms(props) {
    const handleUpclick = ()=> {
        setText(text.toUpperCase())
    }
    const handleLoclick = ()=> {
        setText(text.toLowerCase())
    }
    const handleClearclick = ()=> {
        setText("")
    }
    const handleExSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","success");
    }
    const handleOnchange = (event)=> {
        // Here we are adding an event which will change the provided text by adding the new changes in it
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter Text here');
    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Welcome to WithText</h1>
            <div className="mb-3">
                <textarea name="" id="myBox" rows="8" value={text} style={{backgroundColor : props.mode==='dark'?'#343a40':'white', color : props.mode==='dark'?'white':'black'}} onChange={handleOnchange} className="form-control"></textarea>
            </div>
            <button type="submit" disabled={text.length===0} onClick={handleUpclick} className="btn btn-primary mx-2 my-2">Convert-to-Uppercase</button>
            <button type="submit" disabled={text.length===0} onClick={handleLoclick} className="btn btn-primary mx-2 my-2">Convert-to-Lowercase</button>
            <button type="submit" disabled={text.length===0} onClick={handleClearclick} className="btn btn-primary mx-2 my-2">Clear Text</button>
            <button type="submit" disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-2">Copy Text</button>
            <button type="submit" disabled={text.length===0} onClick={handleExSpace} className="btn btn-primary mx-2 my-2">Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} characters and {text.length} characters</p>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} minutes are required to read Your text</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to Preview!'}</p>
        </div>
        </>
    )
}
