import Quote from "../components/Quote";
import QuoteInfo from "../components/QuoteInfo";
import React, {useEffect} from "react";

const QuoteView = () => {
    useEffect(() => {
        let quotes = JSON.parse(localStorage.getItem("quotes"));
        let index = Math.floor(Math.random() * (quotes.length - 0) + 0);
        localStorage.setItem("quote", quotes[index].quote);
        document.getElementById("Era-txt").innerText = quotes[index].era;
        document.getElementById("Title-txt").innerText = quotes[index].title;
        document.getElementById("Source-txt").innerText = quotes[index].source;
        document.getElementById("Author-txt").innerText = quotes[index].author;
        document.getElementById("Attribution-txt").innerText = quotes[index].attribution;
        document.getElementById("Attribution-display-txt").innerText = quotes[index].attribution;
        document.getElementById("Tags-txt").innerText = quotes[index].tags;
        document.getElementById("Quote-txt").innerText = quotes[index].quote;
        document.getElementById("Quote-display-txt").innerText = '"'+quotes[index].quote+'"';
        document.getElementById("Save-butn").value = quotes[index]._id; 
    }, []);

    return(
        <div className="Quote-view">
            <Quote />
            <QuoteInfo />
        </div>
    )
}
export default QuoteView;