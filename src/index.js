import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating maxRating={10} color="white" onSetRating={setMovieRating} />
//       <p>This Moves Has Been Rated {movieRating} Star.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Disgusting", "Bad", "Average", "Good", "Excellent"]}
    />
    <StarRating
      size={36}
      color="yellow"
      className="customFont"
      defaultRating={1}
    />
    <Test /> */}
    <App />
  </React.StrictMode>
);
