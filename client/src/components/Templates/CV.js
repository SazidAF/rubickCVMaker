import React, {useState} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Template from './template';

import useStyles from './styles';
const Posts = () => {
    const [blocks, setBlocks] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
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
        !blocks.length? <CircularProgress /> : (
            <section className={classes.cvContainer}>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {blocks.map((block)=> (
                <Grid key={block.id} item xs={12} sm={6}>
                <Template block={block} handleUpdateBlocks={handleUpdateBlocks}/>
                </Grid>
            ))}
            </Grid>
            </section>
        )
    )
}

export default Posts;
