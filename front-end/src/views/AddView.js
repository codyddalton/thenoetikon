import React, {useEffect, useState} from "react";

const AddView = () => {

    useEffect(() => {
        if(document.getElementById("Add-era") !== null){
            let quotes = JSON.parse(localStorage.getItem("quotes"));
            let quoteEras = quotes.map((q) => q.era);
            let eras = [...new Set(quoteEras)];
            eras.forEach((era) => {
                let option = document.createElement('option');
                option.className="Era-option";
                option.innerText = era;
                let first = document.getElementById("Era-placeholder");
                first.insertAdjacentElement('afterend', option);
            })
        }
    }, [])

    const [values, setValues] = useState({
        era: '',
        title: '',
        source: '',
        author: '',
        quote: '',
        attribution: '',
        tags: ''
    });

    const API_BASE = "http://localhost:8888/api/v1";

    const addQuote = async () => {
        try{
            await fetch(`${API_BASE}/quotes`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })
                .then(() => {
                    alert("Quote added");
                })
      
        } catch (error) {
            alert("Could not add quote");
        }

    const addNewEra = () => {
        let newEra = document.createElement('input');
        newEra.className="Add-input";
        newEra.required = true;
        newEra.name = "era";
        newEra.onChange = "handleInputChange()";
        document.getElementById("Add-era").replaceWith(newEra);
    };

    const handleInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value
    
        }))
    }

    return(
        <div className="AddQuote">
            <div className="Add-row" style={{marginTop:"1%"}}>
                <div className="Add-item-div">
                    <label for="Add-era" className="Add-input-label">ERA</label>
                    <select className="Era-option-dropdown" id="Add-era" name="era" onChange={(() => {
                        if(document.getElementById("Add-era").value === "ADD NEW"){
                            addNewEra();
                        }
                        else {
                            handleInputChange();
                        }
                    })}>
                        <option selected disabled hidden className="Era-option-placeholder" id="Era-placeholder">CHOOSE AN ERA</option>
                        <option className="Era-option" id="New-era">ADD NEW</option>
                    </select>
                </div>
                <div className="Add-item-div">
                    <label for="Add-title" className="Add-input-label" >TITLE</label>
                    <input type="string" className="Add-input" name="title" id="Add-title" required placeholder="A TITLE TO REMEMBER"/>
                </div>
                <div className="Add-item-div">
                    <label for="Add-source" className="Add-input-label">SOURCE</label>
                    <input type="string" className="Add-input" name="source" id="Add-source" required placeholder="QUOTE SOURCE" />
                </div>
            </div>
            <div className="Add-row" style={{marginTop:"1%"}}>
                <div className="Add-item-div">
                    <label for="Add-attribution" className="Add-input-label">ATTRIBUTION</label>
                    <input type="string" className="Add-input" name="attribution" id="Add-attribution" required placeholder="QUOTE SPOKEN BY" />
                </div>
                <div className="Add-item-div">
                    <label for="Add-tags" className="Add-input-label">TAGS</label>
                    <input type="string" className="Add-input" name="tags" id="Add-tags" required placeholder="SUBJECTS, THEMES"/>
                </div>
                <div className="Add-item-div">
                    <label for="Add-author" className="Add-input-label">AUTHOR</label>
                    <input type="string" className="Add-input" name="author" id="Add-author" required placeholder="QUOTE WRITER" />
                </div>
            </div>
            <div className="Add-row" style={{marginTop:"1%"}}>
                <div className="Add-item-div">
                    <label for="Add-quote" className="Add-input-label">QUOTE</label>
                    <textarea className="Add-textarea" name="quote" id="Add-quote" required placeholder="      A QUOTE FROM STAR WARS, BY A CHARACTER, OF ANY LENGTH, AND WRITTEN WITHOUT QUOTATION MARKS." />
                </div>
            </div>
            <div className="Add-quote-button-row">
                <button className="Add-quote-butn" onClick={addQuote}>ADD</button>
                <button className="Add-quote-butn">CANCEL</button>
            </div>
        </div>
    )
}
}

export default AddView;