import EmptySection from "./components/EmptySection";
import ViewCartItem from "./components/ViewCartItem";
import Products from "./container/Products";
import ViewCart from "./container/ViewCart";

const Container = {
    ProductSection: Products,
    ViewCartSection: ViewCart
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