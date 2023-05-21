import Loading from "./components/Loading";
import Login from "./container/Login";
import Register from "./container/Register";

const Container = {
    LoginContainer: Login,
    RegisterContainer: Register
}

const Component = {
    LoadingComponent:Loading
}

const User = {
    Container: Container,
    Component: Component
}

export default User
