
export const HeaderProduct = (props) => {

    return (
        <div className="HeaderProduct">
            <div >
                <h1 className="HeaderProduct-title">{props.title}</h1>
                <span className="HeaderProduct-weight">{props.weight}</span>
            </div>
            <div className="HeaderProduct-prices">
                <span className="HeaderProduct-prices__last">R${props.lastPrice} </span>
                <span className="HeaderProduct-prices__current">&nbsp;R${props.currentPrice}</span>
            </div>
            <div>
                <span className="HeaderProduct-howManyTimes">{props.howManyTimes}</span>
            </div>
        </div>
    );
}