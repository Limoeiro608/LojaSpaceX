
export const Categories = () => {

    return (
        <aside className="Categories">
            <details className="Categories-box" open>
                <summary className="Categories-box__title">Categorias</summary>
                <span><a href="http://localhost:3000/PLP">Macacões</a></span>
                <span><a href="http://localhost:3000/PLP">Botas</a></span>
                <span><a href="http://localhost:3000/PLP">Alimento</a></span>
                <span><a href="http://localhost:3000/PLP">Bebidas</a></span>
            </details>
            <details className="Categories-box">
                <summary className="Categories-box__title">Marcas</summary>
                <span><a href="http://localhost:3000/PLP">WeberMax</a></span>
                <span><a href="http://localhost:3000/PLP">Mr.Weber</a></span>
            </details>
        </aside>
    );
}
