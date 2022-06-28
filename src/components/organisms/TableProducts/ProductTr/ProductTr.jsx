export const ProductTr = (props) =>{
    return(
        <tr className="ProductTr">
            <td className="ProductTr-product">
                <span><img className="ProductTr-product__picture" src={props.img} alt='img do produto' /></span>
                <span className="ProductTr-product__title">{props.title}</span>
            </td>
            <td className="d-none d-md-block"></td>
            <td className="ProductTr-boxPrices">
                <tr className="ProductTr-boxPrices__last">R${props.oldPrice}</tr>
                <tr className="ProductTr-boxPrices__current">R${props.price}</tr>
            </td>
            <td className="ProductTr-total">R$ {props.price}</td>
        </tr>
    )
}