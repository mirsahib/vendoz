import EmptySection from "./components/EmptySection";
import ViewCartItem from "./components/CartItem";
import Products from "./container/ProductSection";
import ViewCart from "./container/ViewCart";
import SingleProd from "./container/SingleProd";

const Container = {
    ProductSection: Products,
    ViewCartSection: ViewCart,
    SingleProductSection:SingleProd
}

const Component = {
    ViewCartItem:ViewCartItem,
    EmptySection:EmptySection
}

const Product ={
    Container,
    Component
}

export default Product