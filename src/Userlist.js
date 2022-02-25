import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pic from './imgs/patrick.png'
export default (props) => {

    const [users, setUsers] = useState([]);

    const getList = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
    }

    useEffect(() => {
        getList();
    }, []);
    const renderUser = (user, index) => {
        return (
            <div key={index} className="item">
                <div className="ui header"><img src={pic} class="ui circular image mini"/>{user.name}</div>
                <div><i class="envelope icon"></i>{user.email}</div>
                <div className="content"><i class="home icon"></i><strong>Adress: </strong>{user.address.city}, {user.address.street}, {user.address.suite} </div>
            </div>
        );
    }

    return (
        <div class="ui inverted segment">
        <div class="ui inverted small relaxed divided list">
            <h1>User list</h1>
            {users.length > 0 && users.map(renderUser)}
        </div>
        </div>
    )
}