
export const ContentProduct = (props) => {

    return (
        <div className="ContentProduct">
            <div >
                <h1 className="ContentProduct-title">{props.title}</h1>
                <span className="ContentProduct-weight">{props.weight}</span>
            </div>
            <div className="ContentProduct-prices">
                <span className="ContentProduct-prices__last">R${props.lastPrice} </span>
                <span className="ContentProduct-prices__current">&nbsp;R${props.currentPrice}</span>
            </div>
            <div>
                <span className="ContentProduct-howManyTimes">{props.howManyTimes}</span>
            </div>
        </div>
    );
}