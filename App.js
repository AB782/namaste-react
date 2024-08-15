/*-
    <div id = "parent">
        <div id = "child">
            <h1> I'm a h1 tag </h1>
        </div>
    </div>  
-*/
import React from "react";
import ReactDOM from "react-dom/client";

// JSX - 'HTML-like'/'XML-like' syntax
// JSX - transpiled before it reaches the JS - PARCEL - Babel(library)
// Babel converts the code to React.createElement - now it renders

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX🚀
  </h1>
);

// React Component
// Class-Based Component - OLD
// Functional-Component - NEW
// Component Composition - composing one React Component into another

// 3 different ways
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
