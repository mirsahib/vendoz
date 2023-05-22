import Loading from "./components/Loading";
import Login from "./container/Login";
import Profile from "./container/Profile";
import Register from "./container/Register";

const Container = {
    Profile: Profile,
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
