
export const Categories = () => {

    return (
        <aside className="Categories">
            <details className="Categories-box" open>
                <summary className="Categories-box__title">Categorias</summary>
                <span><a href="#">Macacões</a></span>
                <span><a href="#">Botas</a></span>
                <span><a href="#">Alimento</a></span>
                <span><a href="#">Bebidas</a></span>
            </details>
            <details className="Categories-box">
                <summary className="Categories-box__title">Marcas</summary>
                <span><a href="#">WeberMax</a></span>
                <span><a href="#">Mr.Weber</a></span>
            </details>
        </aside>
    );
}
