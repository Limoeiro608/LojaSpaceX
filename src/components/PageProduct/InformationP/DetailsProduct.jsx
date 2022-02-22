
export const DetailsProduct = ({subtitle, children}) => {

    return (
        <div className="DetailsProduct"> 
            <div className="DetailsProduct-container">
            <h3 className="DetailsProduct-subtitle">{subtitle}</h3>
                {children}
            </div>
        </div>
    );
}