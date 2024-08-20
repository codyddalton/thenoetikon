import Noetikon from "./images/Noetikon.png";
import Share from "./images/share-icon.png";
import Refresh from "./images/refresh-icon.png";
import Add from "./images/add-icon.png";
import Search from "./images/search-icon.png";
import axios from "axios";
import React, {useState} from "react";

const Header = () => {

    
    const randomQuote = async () => {
            const API_BASE = "http://localhost:8888/api/v1";
            let quoteArr = await axios.get(`${API_BASE}/quotes`);
            let quotes = quoteArr.data;
            localStorage.setItem("quotes", quotes);
            let index = Math.floor(Math.random() * (quotes.length - 0) + 0);
            document.getElementById("Era-txt").innerText = quotes[index].era;
            document.getElementById("Title-txt").innerText = quotes[index].title;
            document.getElementById("Source-txt").innerText = quotes[index].source;
            document.getElementById("Author-txt").innerText = quotes[index].author;
            document.getElementById("Attribution-txt").innerText = quotes[index].attribution;
            document.getElementById("Attribution-display-txt").innerText = quotes[index].attribution;
            document.getElementById("Tags-txt").innerText = quotes[index].tags;
            document.getElementById("Deleted-quote").innerText = quotes[index].quote;
            document.getElementById("Quote-txt").innerText = quotes[index].quote;
            document.getElementById("Quote-display-txt").innerText = '"'+quotes[index].quote+'"';
        
    };

    return(
        <div className="Header">
            <div className="Noetikon-title-interface">
                <img src={Noetikon} alt="NOETIKON" className="Noetikon-title" />
            </div>
            <div className="Ui-butn-div">
                <div className="Left-ui-butns">
                    <button className="Ui-butn"><img src={Share} alt="SHARE" className="Ui-butn-img" /></button>
                    <button className="Ui-butn"><img src={Refresh} alt="REFRESH" className="Ui-butn-img" style={{width:"24px"}} onClick={randomQuote} /></button>
                </div>
                <div className="Left-ui-butns">
                    <button className="Ui-butn"><img src={Add} alt="ADD" className="Ui-butn-img" style={{width:"18px"}} onClick={(() => {
                        localStorage.setItem("current", "Add");
                        window.location.reload();
                    })}/></button>
                    <button className="Ui-butn"><img src={Search} alt="SEARCH" className="Ui-butn-img" style={{width:"18px"}} /></button>
                </div>
            </div>
        </div>
    )
}
export default Header;