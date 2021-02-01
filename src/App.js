import {Link, Route, Switch} from "react-router-dom";
import UserList from "./components/User/UserList";
import FullUser from "./components/User/FullUser";
import Edit from "./components/User/Edit";
import CreateUser from "./components/User/CreateUser";


export default function App() {


    return (
        <div className="d-flex col-12 mt-5">

            <Link to="/users">
                <button type="button" className="btn btn-secondary w-100">USERS</button>
            </Link>

            <Switch>
                <Route exact path="/users" component={UserList}/>
                <Route path="/users/info">
                    <UserList/>
                    <FullUser/>
                    <Route path='/users/info/edit' component={Edit}/>
                </Route>
                <Route path='/users/create' >
                    <UserList/>
                    <CreateUser/>
                </Route>
            </Switch>
        </div>
    );
}
