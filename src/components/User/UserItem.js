import React from 'react';
import '../../App.css'
import {useDispatch} from "react-redux";
import {ADD_CHOSEN_USER} from "../../Redux/action-types";
import {Link} from "react-router-dom";

export default function UserItem({user}) {
    const dispatch = useDispatch();
    return (
        <ul className='mt-4'>
            <li className='d-flex justify-content-between'>{user.name}
                <Link to='/users/info'>
                    <button type="button" className="btn btn-danger"
                            onClick={() => dispatch({type: ADD_CHOSEN_USER, payload: user})}>Info
                    </button>
                </Link>
            </li>
        </ul>
    );
}
