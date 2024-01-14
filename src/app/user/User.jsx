import { Card, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import styles from "./User.module.css";
import { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";


function User({ name, lastname, email, age, id }) {

    let { deleteUser } = useContext(UsersContext);


    return (
        <Card className={styles.card}>
            <div>
                <div style={{ marginBottom: '10px' }}>
                    <Typography variant="subtitle2">Name:</Typography>
                    <Typography variant="h5">{name}</Typography>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <Typography variant="subtitle2">Last name:</Typography>
                    <Typography variant="h5">{lastname}</Typography>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <Typography variant="subtitle2">Email:</Typography>
                    <Typography variant="h5">{email}</Typography>
                </div>
                <div style={{ marginBottom: '5px' }}>
                    <Typography variant="subtitle2">Age:</Typography>
                    <Typography variant="h5">{age}</Typography>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                <IconButton size="large" onClick={() => deleteUser(id)}>
                    <DeleteIcon fontSize="inherit" color="warning" />
                </IconButton>
                <IconButton size="large">
                    <CreateIcon color="primary" />
                </IconButton>
            </div>
        </Card>
    )
}

export default User;