import { useEffect, useState } from 'react'
import { Table, TableHead, TableRow, TableBody, TableCell, styled, Button } from '@mui/material'
import { getUsers, deleteUser } from '../service/api'

import { Link } from 'react-router-dom'

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
& > th {
    font-size: 20px;
    background: #000000;
    color: #FFFFFF;
}
`

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUser = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        let response = await getUsers();
        setUsers(response.data)

    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUser();
    }
    // console.log(users);
    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>
                        Edit
                    </TableCell>
                    <TableCell>
                        Delete
                    </TableCell>

                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user._id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        </TableCell>
                        <TableCell>
                            <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)} >Delete</Button>
                        </TableCell>
                    </TRow>
                ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser