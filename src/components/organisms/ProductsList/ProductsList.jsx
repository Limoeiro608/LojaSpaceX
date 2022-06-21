import { Container } from "reactstrap"
import { ProductTr } from "../../molecules/ProductTr/ProductTr"
import products from '../../../data'

export const ProductsList = () => {
    return (
        <Container>
            <h1 className="ProductList-title">Meu Carrinho</h1>
            <table className="ProductList">
                <thead className="ProductList-head">
                    <th className="ProductList-head__product">Produto</th>
                    <th>Quantidade</th>
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
        </Container>
    )
}