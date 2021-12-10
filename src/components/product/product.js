import "./product.css"

const Product = ({img,link}) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                
            </div>
            <a target="_blank" href={link}>
                    <img src={img}  className="p-img"/>
                </a>
        </div>
    )
}


export default Product

