

export const Banner = () =>{

    console.log("Iniciando...")

    function reconheceCat(cat){
        //console.log(bind)
        //console.log(cat)
        if (cat === 'animal'){
            console.log('imagine dragons')
        }
        if (cat === 'tech'){
            console.log(cat)
        }
        if (cat === 'nature'){
            console.log(cat)
        }
    }

    return(
        <div className="Banner">
            <div className="Banner-Div">
                <img className="Banner-Div__img" alt='animal' onClick={reconheceCat.bind('1','animal')} src="https://placeimg.com/400/240/animals"/>
            </div>
            <div className="Banner-Div">
                <img className="Banner-Div__img" alt='tech' onClick={reconheceCat.bind('1','tech')} src="https://placeimg.com/400/240/tech"/>
            </div>
            <div className="Banner-Div">
                <img className="Banner-Div__img" alt='nature' onClick={reconheceCat.bind('1','nature')} src="https://placeimg.com/400/240/nature"/>
            </div>
        </div>
    );
}
