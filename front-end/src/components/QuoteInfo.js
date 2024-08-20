import { useEffect, useState } from "react";

const QuoteInfo = () => {

    useEffect(() => {
        document.getElementById("Save-butn").disabled = true;
    }, []);

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const API_BASE = "http://localhost:8888/api/v1";

    const cancelEdit = () => {
        window.location.reload();
    };

    const updateQuote = async () => {
        let id = document.getElementById("Save-butn").value;
        try {
            await fetch(`${API_BASE}/quotes/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    era: document.getElementById("Era-txt2").value,
                    title: document.getElementById("Title-txt2").value,
                    source: document.getElementById("Source-txt2").value,
                    author: document.getElementById("Author-txt2").value,
                    attribution: document.getElementById("Attribution-txt2").value,
                    tags: document.getElementById("Tags-txt2").value,
                    quote: document.getElementById("Quote-txt2").value
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log({data})
                })

        } catch (error) {
            setError(error.message || "Unexpected Error")
            document.getElementById("Save-conf-div").style = "margin-right:1%";
            document.getElementById("Save-confirmation").style = "margin-top:-1%; margin-bottom:0; color:red;";
            document.getElementById("Save-butn").style = "margin-top:-5%";
            document.getElementById("Save-confirmation").innerText = "ERROR"
            document.getElementById("Save-confirmation").style.display = "flex";
            console.error(error);
        } finally {
            setLoading(false)
            document.getElementById("Save-conf-div").style = "margin-right:2%; margin-top:-1.5%;"
            document.getElementById("Save-confirmation").style = "margin-top:-1%; margin-bottom:0; color:green;";
            document.getElementById("Save-butn").style = "margin-top:-5%; margin-right:0%";
            document.getElementById("Save-confirmation").innerText = "SUCCESS"
            document.getElementById("Save-confirmation").style.display = "flex";
            setTimeout(() => {
                window.location.reload();
            }, 1500)
        }
    }


    const editQuote = () => {
        document.getElementById("Save-butn").disabled = false;
        document.getElementById("Default-butn-row").style.display = "none";
        document.getElementById("Edit-butn-row").style.display = "flex";
        let fields = ["Era-txt", "Title-txt", "Source-txt", "Author-txt", "Attribution-txt", "Tags-txt"];
        fields.forEach((field) => {
            let newElement = document.createElement('input');
            newElement.type = "text";
            newElement.id = field + "2"
            newElement.className="Contents-txt";
            newElement.style = "background:none; border:none; width:100%; text-align:center; height:100%; margin-top:0; color:white;";
            newElement.value = document.getElementById(field).innerText;
            document.getElementById(field).replaceWith(newElement);
        });
        let newQuoteElement = document.createElement('textarea');
        newQuoteElement.className="Contents-txt";
        newQuoteElement.id = "Quote-txt2"
        newQuoteElement.style = "background:none; border:none; width:100%; text-align:center; height:100%; margin-top:0; color:white;";
        newQuoteElement.value = document.getElementById("Quote-txt").innerText;
        document.getElementById("Quote-txt").replaceWith(newQuoteElement);
    };

    const deletePrompt = () => {
        document.getElementById("Prompt-popup").style.display = "flex";
    }

    const deleteQuote = async () => {
        let id = document.getElementById("Save-butn").value;
        try {
            await fetch(`${API_BASE}/quotes/${id}`, {
                method: 'DELETE'
            })
            .then(res => console.log(res.json()))
            .then(document.getElementById("Prompt-popup").style.display = "none");
        }
        catch (error) {
            setError(error.message || "Unexpected error")
            document.getElementById("Delete-warning").innerText = "FAILED";
            document.getElementById("Delete-message").innerText = "There has been an error in the deletion process. Please try again later or contact the dev for troubleshooting.";
            document.getElementById("Delete-choices").style.display = "none";
            document.getElementById("Prompt-popup").style.display = "flex";
            setTimeout(() => {
                document.getElementById("Prompt-popup").style.display = "none";
            }, 1500)
        } 
        finally {
            setTimeout(() => {
            document.getElementById("Delete-warning").innerText = "SUCCESS";
            document.getElementById("Delete-message").style = "padding:30px;"
            document.getElementById("Delete-message").innerText = "Quote successfully deleted.";
            document.getElementById("Delete-choices").style.display = "none";
            document.getElementById("Prompt-popup").style = "display:flex;"
            }, 1000);
            setTimeout(() => {
                window.location.reload();
            }, 1500)
        }
    }

    return(
        <div className="Quote-info">
            <div className="Info-row">
                <div className="Quote-item" style={{marginRight:"2%"}}>
                    <label className="Quote-item-label" for="Era-contents">ERA</label>
                    <div className="Item-contents" id="Era-contents">
                        <p className="Contents-txt" id="Era-txt">
                            
                        </p>
                    </div>
                </div>
                <div className="Quote-item" style={{marginRight:"2%"}}>
                    <label className="Quote-item-label" for="Title-contents">TITLE</label>
                    <div className="Item-contents" id="Title-contents">
                        <p className="Contents-txt" id="Title-txt">
                            
                        </p>
                    </div>
                </div>
                <div className="Prompt-popup" id="Prompt-popup">
                    <p className="Delete-warning" id="Delete-warning">WARNING</p>
                    <p className="Delete-message" id="Delete-message">You are preparing to delete the quote: <br></br><br></br> <i id="Deleted-quote"></i> <br></br><br></br> Are you sure you want to delete this quote from the database?</p>
                    <div className="Delete-choices" id="Delete-choices">
                        <button className="Delete-choice-butn" id="Ok-delete" onClick={deleteQuote}>OK</button>
                        <button className="Delete-choice-butn" id="Cancel-delete" onClick={(() => {
                            document.getElementById("Prompt-popup").style.display = "none"
                        })}>Cancel</button>
                    </div>
                </div>
                <div className="Quote-item">
                    <label className="Quote-item-label" for="Source-contents">SOURCE</label>
                    <div className="Item-contents" id="Source-contents">
                        <p className="Contents-txt" id="Source-txt">
                            
                        </p>
                    </div>
                </div>
            </div>
            <div className="Info-row">
                <div className="Quote-item" style={{marginRight:"2%"}}>
                    <label className="Quote-item-label" for="Attribution-contents">ATTRIBUTION</label>
                    <div className="Item-contents" id="Attribution-contents">
                        <p className="Contents-txt" id="Attribution-txt">
                            
                        </p>
                    </div>
                </div>
                <div className="Quote-item" style={{marginRight:"2%"}}>
                    <label className="Quote-item-label" for="Tags-contents">TAGS</label>
                    <div className="Item-contents" id="Tags-contents">
                        <p className="Contents-txt" id="Tags-txt">
                            
                        </p>
                    </div>
                </div>
                <div className="Quote-item">
                    <label className="Quote-item-label" for="Author-contents">AUTHOR</label>
                    <div className="Item-contents" id="Author-contents">
                        <p className="Contents-txt" id="Author-txt">
                            
                        </p>
                    </div>
                </div>
            </div>
            <div className="Info-row" style={{flexDirection:"column", alignItems:"center", marginLeft:"0.5%" }}>
                <label className="Quote-item-label" for="Quote-contents">QUOTE</label>
                <div className="Item-contents" id="Quote-contents" >
                    <p className="Contents-txt" id="Quote-txt" style={{width:"80%", marginLeft:"10%", marginRight:"10%", marginTop:"1%", marginBottom:"1%"}}>
                        
                    </p>
                </div>
            </div>
            <div className="Quote-butn-row" id="Default-butn-row">
                <button className="Quote-butn" id="Edit-butn" onClick={editQuote}>EDIT</button>
                <button className="Quote-butn" id="Save-butn" value="">SAVE</button>
                <button className="Quote-butn" id="Delete-butn" onClick={deletePrompt}>DELETE</button>
            </div>
            <div className="Quote-butn-row" id="Edit-butn-row" style={{display:'none'}}>
                <div id="Save-conf-div" className="Save-conf-div">
                    <p id="Save-confirmation" className="Save-msg">UNDETERMINED</p>
                    <button className="Quote-butn" id="Save-butn" onClick={updateQuote} style={{marginRight:'0'}}>SAVE</button>
                </div>
                
                <button className="Quote-butn" id="Cancel-butn" onClick={cancelEdit}>CANCEL</button>
            </div>
        </div>
    )
}
export default QuoteInfo;