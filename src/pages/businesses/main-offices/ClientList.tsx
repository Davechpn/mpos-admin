import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button } from "@mui/material"
import { Link, useNavigate  } from "react-router-dom";

function createData(
    name: string,
    branches: number,
    cell: string,
    address: number,
    city: number,
) {
    return { name, branches, cell, address, city };
}



const rows = [
    createData('BidenInv', 159, '0778498099', 24, 4.0),
    createData('Colagc', 237, '0772347904', 37, 4.3),
    createData('Munetsi', 262, '0784445033', 24, 6.0),
    createData('Finch', 305, '0779549994', 67, 4.3),
    createData('Pamugoti', 356, '086506600', 49, 3.9)
];

const ClientList = () => {
    const navigate = useNavigate();

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log('You clicked submit.');
        navigate("/client/d", { replace: true });
    }

    
    return (
        <>
            <Typography variant="h3" style={{ margin: '6px' }} >
                Clients
            </Typography>

            <Link to="/client/new"><Button>New Client</Button> </Link>



            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">No of Branches</TableCell>
                            <TableCell align="right">Cell</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                onClick={handleSubmit}
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.branches}</TableCell>
                                <TableCell align="right">{row.cell}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>)
}

export default ClientList