import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_USERS_FROM_API} from "../../Redux/action-types";
import UserItem from "./UserItem";
import {userApi} from "../../api/userApi";
import '../../App.css'
import {Link} from "react-router-dom";

export default function UserList() {

    const [loading, setLoading] = useState(null);
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);

    useEffect(() => {
        try {
            setLoading(true)
            userApi().then(data => dispatch({
                type: ADD_USERS_FROM_API,
                payload: data
            }))
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }, [])

    return (
        <div className="col-3 bg-info ml-5">
            {
                loading || loading === null
                ? <p>Loading>>>>></p>
                : users.map((user, id) =>
                    <UserItem key={id} user={user}/>)
            }
            <Link to='/users/create'>
                <button type="button" className="btn btn-dark btn-lg btn-block create-btn">Create User</button>
            </Link>
        </div>
    );
}
