import { ProductTr } from "../ProductTr/ProductTr"
import products from '../../../../data'

export const ProductsList = () => {
    return (
        <div className="container">
            <table className="ProductList">
                <caption className="ProductList-title">Meu Carrinho</caption>
                <thead className="ProductList-head">
                    <th className="ProductList-head__product">Produto</th>
                    <th className="d-none d-md-block">Quantidade</th>
                    <th>Unitário</th>
                    <th>Total</th>
                </thead>
                <tbody className="ProductList-content">
                    {products.map((product) =>
                        <ProductTr key={product.id}
                            img={product.img}
                            title={product.title}
                            oldPrice={product.oldPrice}
                            price={product.price}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}