import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Hi i am from function created directly in main.jsx file</h1>
    </div>
  );
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
    {" "}
    Visit google
  </a>
); // this will get converted into object tree model by react ad then it will render - to make this render remove all other render and keep only this
const anotherUser = "chai and react of another user" // how does the variable of js get inject in React



const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click me to visit google",
  anotherUser // after the tree model created the variable gets injected as it is 
);



ReactDOM.createRoot(document.getElementById("root")).render(
  // no variable named root is created like react
  //<React.StrictMode>
  //anotherElement
   reactElement
  // <>
  //   <App />
  //   <MyApp />
  // </>

  //</React.StrictMode>
);
