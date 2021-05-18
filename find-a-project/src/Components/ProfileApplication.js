import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, intro, supervisor, major, status) {
  return { name, intro, supervisor, major, status };
}

const rows = [
  createData('N/A', 'N/A', 'N/A', 'N/A', 'N/A')
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <Card>
    <CardContent>
    <Typography variant="h5" component="h2">
      Application
    </Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="left">Introduction</TableCell>
            <TableCell align="right">Supervisor</TableCell>
            <TableCell align="right">Major</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.intro}</TableCell>
              <TableCell align="right">{row.supervisor}</TableCell>
              <TableCell align="right">{row.major}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardContent>
  </Card>
    
  );
}