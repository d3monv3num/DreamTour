import ImageGen from "./components/ImageGenerator/ImageGenerator";
import QuoteGen from "./components/QuoteGenerator/QuoteGenerator";
import React from "react";

const App=()=>{
  return(
    <div>
      <div><QuoteGen/></div>
      <div><ImageGen/></div>
    </div>
  );
}

export default App;