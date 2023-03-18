import React, {useState} from 'react';
import { Grid, LinearProgress, Paper, Container} from '@material-ui/core';
import { Rnd } from 'react-rnd';
import { useSelector } from 'react-redux';

import Template from './Template/template';

import useStyles from './styles';
const Posts = () => {
    const [blocks, setBlocks] = useState([
    { id: 1, text: 'Item 1', x: 0, y: 100},
    { id: 2, text: 'Item 2' , x: 0, y: 200},
    { id: 3, text: 'Item 3', x: 0, y: 300},
    { id: 4, text: 'Item 4' , x: 0, y: 400},
  ]);

    const handleUpdateBlocks = (id, block) => {
    const updatedBlocks = blocks.map(item => {
      if (item.id === id) {
        return { ...item, ...block};
      }
      return item;
    });
    setBlocks(updatedBlocks);
    console.log(blocks[0]);
  };
    const classes = useStyles();
    return (
        <Container>
          <Grid className={classes.mainContainer} container justify-content="space-between" spacing={3}>
            <Grid item xs={12} sm={7}>

            </Grid>
            <Grid item xs={12} sm={4}>
            <Paper>
            {!blocks.length? <LinearProgress /> : (
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    <Grid  container item xs={12} sm={6}>
                {blocks.map((block)=> (
                    <Template key={block.id} block={block} handleUpdateBlocks={handleUpdateBlocks}/>
                    ))}
                    </Grid>
                </Grid>
            )}
            </Paper>
            </Grid>
          </Grid>
        </Container>
    )
}

export default Posts;
