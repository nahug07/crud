import { useState, useEffect } from "react";
import axios from 'axios';
import React from "react";

function useUsers() {

    const url = `https://${process.env.NEXT_PUBLIC_API_KEY}.mockapi.io/api/user`;

    const [userID, setUserID] = useState();
    const [users, setUsers] = useState([]);
    const [showSnackbar, setShowSnackbar] = React.useState(false);

    const closeSnackbar = () => {
        setShowSnackbar(false)
    }

    const getUsers = async () => {
        const res = await axios.get(url)
            return setUsers(res.data);
    };

    const deleteUser = async (id) => {
        const res = await axios.delete(url + `/${id}`)
            .then(res => {
                setShowSnackbar(true)
                getUsers();
            })
    };

    useEffect(() => {
        getUsers();
    }, [])

    return {
        users,
        deleteUser,
        showSnackbar,
        closeSnackbar 
    }
}

export default useUsers