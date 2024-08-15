/*-
    <div id = "parent">
        <div id = "child">
            <h1> I'm a h1 tag </h1>
        </div>
    </div>  
-*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"I'm a h1 tag"),
        React.createElement("h2",{},"I'm a H2 tag"),
    ]),
    React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"I'm a h1 tag"),
        React.createElement("h2",{},"I'm a H2 tag"),
    ])
]);
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World From React!"
//);
    console.log(parent); // object
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent); // this will turn the above thing into HTML tag and insert it into HTML code

