import Header from "./components/Header";
import QuoteView from "./views/QuoteView";
import AddView from "./views/AddView";
import axios from 'axios';
import Page from "./components/Page";
import React, {useState, useEffect} from "react";
import './App.css';

function App() {

  useEffect(() => {
    const API_BASE = "http://localhost:8888/api/v1";
    async function getQuotes() {
        let quoteArr = await axios.get(`${API_BASE}/quotes`);
        let quotes = quoteArr.data;
        localStorage.setItem("quotes", JSON.stringify(quotes));
    }
    getQuotes();
  }, [])

  const [view, setView] = useState(<AddView />)

  // window.onload = () => {
  //   if(localStorage.getItem("current") === "Add"){
  //     setView(<AddView />)
  //   }
  // }

  return (
    <div className="App" id="App" value="">
      <Header />
      <Page 
        page={view} 
      />
    </div>
  );
}

export default App;
