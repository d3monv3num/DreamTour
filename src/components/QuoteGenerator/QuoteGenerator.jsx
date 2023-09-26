import axios from "axios";
import React from "react";
import { useState } from "react";


const QuoteGen = () => {
    const [quote, setQuote] = useState('Demo Quotes');

    const handlQuote = async () => {
        const res = await axios.get('https://api.quotable.io/random');
        setQuote(res.data.content);
    }

    return (
        <div>
            <button onClick={handlQuote}>Click Me</button>
            <div>{quote}</div>
        </div>
    );
}


export default QuoteGen;