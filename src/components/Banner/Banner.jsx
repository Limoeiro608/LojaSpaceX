

export const Banner = () =>{


    function reconheceCat(cat){
    
        if (cat === 'animal'){
            console.log(cat,' | imagine dragons')
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
            <div className="Banner-Container">
                <img className="Banner-Container__picture" alt='animal' onClick={reconheceCat.bind('1','animal')} src="https://placeimg.com/400/240/animals"/>
            </div>
            <div className="Banner-Container">
                <img className="Banner-Container__picture" alt='tech' onClick={reconheceCat.bind('1','tech')} src="https://placeimg.com/400/240/tech"/>
            </div>
            <div className="Banner-Container">
                <img className="Banner-Container__picture" alt='nature' onClick={reconheceCat.bind('1','nature')} src="https://placeimg.com/400/240/nature"/>
            </div>
        </div>
    );
}
