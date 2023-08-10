import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handlelcclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowecase","success");
    }
    const handleucclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handletrim = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra space has been removed","success");
    }
    const handlereverse = () => {
        function reverseString(str) {
            var newString = "";
            for (var i = str.length - 1; i >= 0; i--) {
                newString += str[i];
            }
            props.showAlert("Converted to reverse","success");
            return newString;
        }
        setText(reverseString(text));
    }
    const reset = () => {
        setText("");
        props.showAlert("Textarea is reseted ","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className={`container text-${props.mode === "light" ? "dark":"light"}`}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                        style={{backgroundColor:props.mode === "light" ? "#212529":"#f8f9fa",
                                color:props.mode === "light" ? "#f8f9fa" : "#212529"}}
                    ></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "dark":"light"} my-3 mx-1`} onClick={handlelcclick}>Convert to lowercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "dark":"light"} my-3 mx-1`} onClick={handleucclick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "dark":"light"} my-3 mx-1`} onClick={handletrim}>Remove Extra space</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "dark":"light"} my-3 mx-1`} onClick={handlereverse}>Reverse the String</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "dark":"light"} my-3 mx-1`} onClick={reset}>Reset</button>
            </div>
            <div className={`container text-${props.mode === "light" ? "dark":"light"}`}>
                <h1>Here is the word and character counter</h1>
                <p>your string have {text.split(/s\+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charcters</p>
                <p>require {0.008 * text.split(/s\+/).filter((element)=>{return element.length!==0}).length} minutes to read above text</p>
                <h3>Preview of what you write in the textarea</h3>
                <p>{text}</p>
            </div>

        </>

    );
}
