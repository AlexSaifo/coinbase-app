import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import price1 from "../assets/price1.png";
import price2 from "../assets/price2.png";
import price3 from "../assets/price3.png";
import price4 from "../assets/price4.png";
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import ggcoin from "../assets/ggcoin.png";
import classes from './DailyPrices.module.css';


const data = [
    {
        name: "Bitcoin",
        image: bitcoin,
        short: "BTC",
        price: "$33,592.99",
        change: "+4.3%",
        marketCap: "$635.14B",
        chart: price1,
    },
    {
        name: "Ethereum",
        image: ethereum,
        short: "ETH",
        price: "$2,273.19",
        change: "+2.1%",
        marketCap: "$267.12B",
        chart: price2,
    },
    {
        name: "GGCoin",
        image: ggcoin,
        short: "GGC",
        price: "$349.47",
        change: "-7.9%",
        marketCap: "$57.16B",
        chart: price3,
    },
    {
        name: "Bitcoin",
        image: bitcoin,
        short: "BTC",
        price: "$0.9434",
        change: "0.0%",
        marketCap: "$27.12B",
        chart: price4,
    },
];


const columns = [
    { id: 'num', label: '#', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'price', label: 'Price', minWidth: 100 },
    { id: 'change', label: 'Change', minWidth: 170, },
    { id: 'marketCap', label: 'Market Cap', minWidth: 170, },
    { id: 'chart', label: 'Chart', minWidth: 170, },
];

function createData(num, name, price, change, marketCap, chart) {

    return { num, name, price, change, marketCap, chart };
}

const rows = [];



data.map((item, idx) => {
    rows.push(createData(idx + 1, <div className='flex a-center gap-1'> <img src={item.image} /> {`${item.name}`} <p className='subdue'>{item.short}</p></div>, item.price, item.change, item.marketCap, <img src={item.chart} />));
});

export default function DailyPrices2() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <section className={classes.tabel}>
            <Paper sx={{ width: '100%', height:'auto' , overflow: 'hidden', backgroundColor: '#ffffff10', borderRadius: ' 1rem' }}>
                <TableContainer >
                    <Table stickyHeader aria-label={"sticky table "}>
                        <TableHead >
                            <TableRow sx={{ padding: '2rem' }} >
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth, backgroundColor: '#ffffff10', borderButtom: '1px solid #ffffff42', color: 'var(--primary)', opacity: '0.7' , padding:'2rem'}}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align} sx={{ border: 'none', color: 'var(--primary)',padding:'2rem' }}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </section>
    );
}
