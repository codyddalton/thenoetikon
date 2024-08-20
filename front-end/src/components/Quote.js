
const Quote = (props) => {

    let quoteTxt = '"' + props.quoteTxt + '"';
    let quoteAtt = props.quoteAtt;

    return(
        <div className="Quote-display">
            <p className="Quote-txt" id="Quote-display-txt">
                {quoteTxt}
            </p>
            <p className="Quote-attribution" id="Attribution-display-txt">
                {quoteAtt}
            </p>
        </div>
    )
}
export default Quote;