
export const HeaderProduct = (props) => {

    return (
        <div className="HeaderProduct">
            <div>
                <h1 className="HeaderProduct-title">{props.title}</h1>
            </div>
            <div >
                <p className="HeaderProduct-weight">Embalagem de {props.weight}g </p>
            </div>
            <div className="HeaderProduct-prices">
                <div>
                   <p className="HeaderProduct-prices__last">R${props.lastPrice} </p> 
                </div>
                <div >
                    <p className="HeaderProduct-prices__current">&nbsp;R${props.currentPrice}</p>
                </div>
            </div>
            <div >
                <p className="HeaderProduct-howManyTimes">{props.howManyTimes} x R$ {props.howMuch} s/ juros no cartão </p>
            </div>
        </div>

    );
}