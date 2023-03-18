import React, {useState} from 'react';
import { Grid, LinearProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';

import Template from './template';

import useStyles from './styles';
const Posts = () => {
    const [blocks, setBlocks] = useState([
    { id: 1, text: 'Item 1', clientx: 1000, clienty: 100, layerx: 130, layery: 100},
    { id: 2, text: 'Item 2' , clientx: 1000, clienty: 200, layerx: 130, layery: 200},
    { id: 3, text: 'Item 3', clientx: 1000, clienty: 300, layerx: 130, layery: 300},
    { id: 4, text: 'Item 4' , clientx: 1000, clienty: 400, layerx: 130, layery: 400},
  ]);

    const handleUpdateBlocks = (id, newName) => {
    const updatedText = blocks.map(item => {
      if (item.id === id) {
        return { ...item, text: newName };
      }
      return item;
    });
    setBlocks(updatedText);
  };
    const classes = useStyles();
    return (
        !blocks.length? <LinearProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                <Grid  container item xs={12} sm={6}>
            {blocks.map((block)=> (
                <Template key={block.id} block={block} handleUpdateBlocks={handleUpdateBlocks}/>
            ))}
                </Grid>
            </Grid>
        )
    )
}

export default Posts;
