'use client'

import { Box, Button } from "@mui/material";
import User from "../user/User";
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../contexts/UsersContext";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Users() {

    const [openModal, setOpenModal] = React.useState(false);
    const handleCloseModal = () => setOpenModal(false);

    let { users, deleteUser, showSnackbar, closeSnackbar } = useContext(UsersContext);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #73BFB8',
        boxShadow: 24,
        p: 4,
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        closeSnackbar();
    };

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Modal</Button>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                {users.length > 0 ?
                    <Box style={{ display: 'flex', width: '80vw', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {
                            users.map(user => <User key={user.id} id={user.id} name={user.name} lastname={user.lastname} email={user.email} age={user.age} deleteUser={deleteUser} />)
                        }
                    </Box> :
                    <Box>
                        <h3>Empty</h3>
                    </Box>
                }
                {openModal &&
                    <Modal
                        open={open}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography variant="h6" color="#494949" marginBottom='20px'>
                                Create user!
                            </Typography>
                            <Box component="form" minHeight='300px' display='flex' flexDirection='column' justifyContent='space-around'>
                                <TextField id="outlined-basic" type="text" label="Name" variant="outlined" />
                                <TextField id="outlined-basic" type="text" label="Last name" variant="outlined" />
                                <TextField id="outlined-basic" type="email" label="Email" variant="outlined" />
                                <TextField id="outlined-basic" type="number" label="Age" variant="outlined" />
                            </Box>
                            <Box display='flex' justifyContent='flex-end' marginTop='20px'>
                                <Button variant="contained" color="success">Create</Button>
                                <Button variant="outlined" color="error" sx={{marginLeft: '10px'}} onClick={handleCloseModal}>Cancel</Button>
                            </Box>
                        </Box>
                    </Modal>
                }
                <Snackbar open={showSnackbar} autoHideDuration={2000} onClose={handleClose}>
                    <Alert severity="error" sx={{ width: '100%' }}>
                        User deleted
                    </Alert>
                </Snackbar>
            </Box>
        </>
    )
}

export default Users;