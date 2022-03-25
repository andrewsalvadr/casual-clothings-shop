import ShopMen from './asset/shopmen.png'
import ShopWomen from './asset/shopwomen.png'
import ShopKids from './asset/shopkids.png'

const Category = () => {
    return (
        <div className="App">
        <div className="clothing-category">
      <div className="image-category">
        <a href="#men"><img src={ShopMen} alt="Shop for men" className="shop-category"></img></a>
        <a href="#women"><img src={ShopWomen} alt="Shop for men"  className="shop-category"></img></a>
        <a href="#kids"><img src={ShopKids} alt="Shop for men"  className="shop-category"></img></a>
      </div>
        </div>
        </div>
    )
}

export default Category;