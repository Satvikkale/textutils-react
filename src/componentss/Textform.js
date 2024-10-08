import React, { useState } from "react";

const Textform = (props) => {
    const [text, setText] = useState("");

    const handleupClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UPPERCASE CASE..!", "success");
    };

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lower case..!", "success");
    };

    const handleClearClick = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert("Text cleared..!", "success");
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);

        props.showAlert("Copied to Clipboard..!", "success");
    };

    const handleRemoveSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces Removed..!", "success");
    };

    const handleupChange = (event) => {
        setText(event.target.value);
    };

    return ( <
        >
        <
        div className = "container"
        style = {
            {
                color: props.mode === "dark" ? "white" : "#042743",
            }
        } >
        <
        h1 className = "mb-3" > { props.heading } < /h1> <
        div className = "mb-3" >
        <
        textarea placeholder = "Enter here..."
        className = "form-control"
        value = { text }
        id = "myBox"
        rows = "8"
        onChange = { handleupChange }
        style = {
            {
                backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
            }
        } >
        < /textarea> <
        /div> <
        button disabled = { text.length === 0 }
        className = "btn btn-primary mx-1 my-2"
        onClick = { handleupClick } >
        Convert to UPPERCASE <
        /button>

        <
        button disabled = { text.length === 0 }
        className = "btn btn-primary mx-1 my-2"
        onClick = { handleLoClick } >
        Convert to lowercase <
        /button>

        <
        button disabled = { text.length === 0 }
        className = "btn btn-primary mx-1 my-2"
        onClick = { handleClearClick } >
        Clear Text <
        /button>

        <
        button disabled = { text.length === 0 }
        className = "btn btn-primary mx-1 my-2"
        onClick = { handleCopy } >
        Copy Text <
        /button> <
        button disabled = { text.length === 0 }
        className = "btn btn-primary mx-1 my-2"
        onClick = { handleRemoveSpace } >
        Remove Extra Spaces <
        /button> <
        /div>

        <
        div className = "container my-3"
        style = {
            {
                color: props.mode === "dark" ? "white" : "#042743",
            }
        } >
        <
        h2 > Your Text Summary < /h2> <
        p > { " " } { text.split(/\s/).filter((element) => { return element.length !== 0 }).length }
        words and { text.length }
        character <
        /p> <
        p > { 0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length }
        minutes to read < /p> <
        h2 > Preview < /h2> <
        p > { text.length > 0 ? text : "Nothing to preview..." } < /p> <
        /div> <
        />
    );
}


export default Textform;