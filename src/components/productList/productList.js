
import { products } from "../../data/data"
import Product from "../product/product"
import "./productList.css"



const ProductList = () => {
    return (
        <div className="pl">
           <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Jtech</h1>
        <p className="pl-desc">
          Check out some of my past and ongoing projects.  
        </p>
      </div>
        <div className="pl-list">

          {products.map((item) => (
            <Product key={item.id}  img={item.img}  link={item.link}/>
          ))}

        </div>
        </div>
    )
}

export default ProductList
