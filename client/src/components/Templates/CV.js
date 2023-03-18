import React, {useState, useEffect} from 'react';
import { Grid, LinearProgress, Paper, Container} from '@material-ui/core';
import ReactPDF, { Page, Document, StyleSheet, View} from '@react-pdf/renderer';
import { Rnd } from 'react-rnd';
import { useSelector } from 'react-redux';
import { PDFViewer } from '@react-pdf/renderer';

import MyDocument from './Document/Document';

import useStyles from './styles';

const CV = () => {
    const [blocks, setBlocks] = useState([
    { id: 1, text: 'Item 1', x: 30, y: 100},
    { id: 2, text: 'Item 2' , x: 30, y: 200},
    { id: 3, text: 'Item 3', x: 30, y: 300},
    { id: 4, text: 'Item 4' , x: 30, y: 400},
    { id: 5, text: 'Item 5' , x: 30, y: 500},
    { id: 6, text: 'Item 6' , x: 30, y: 600},
  ]);

    const classes = useStyles();
    return (
        <Container>
          <Grid className={classes.mainContainer} container justify-content="space-between" spacing={3}>
            <Grid item xs={12} sm={7}>
                  <MyDocument blocks={blocks} setBlocks={setBlocks}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <PDFViewer style={{height: "600px", width: "400px"}}>
                  <MyDocument blocks={blocks} setBlocks={setBlocks}/>
              </PDFViewer>
            </Grid>
          </Grid>
        </Container>
    )
}


export default CV;
