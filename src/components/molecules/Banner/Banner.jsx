import ImgBanner1 from '../../../../src/assets/img/banner-img-1.png'
import ImgBanner2 from '../../../../src/assets/img/banner-img-2.png'
import ImgBanner3 from '../../../../src/assets/img/banner-img-3.png'

export const Banner = () => {

    function reconheceCat(cat) {

        if (cat === 'animal') {
            console.log(cat, ' | imagine dragons')
        }
        if (cat === 'tech') {
            console.log(cat)
        }
        if (cat === 'nature') {
            console.log(cat)
        }
    }

    return (
        <div className="Banner">
            <div className="Banner-Container">
                <img className="Banner-Container__picture" alt='animal' onClick={reconheceCat.bind('1', 'animal')} src={ImgBanner1} />
            </div>
            <div className="Banner-Container">
                <img className="Banner-Container__picture" alt='tech' onClick={reconheceCat.bind('1', 'tech')} src={ImgBanner2} />
            </div>
            <div className="Banner-Container">
                <img className="Banner-Container__picture" alt='nature' onClick={reconheceCat.bind('1', 'nature')} src={ImgBanner3} />
            </div>
        </div>
    );
}
