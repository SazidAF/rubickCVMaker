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
    { id: 5, text: 'Item 5' , x: 0, y: 500},
    { id: 6, text: 'Item 6' , x: 0, y: 600},
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
            <div style={{height: "800px", paddingTop: "10px", position: 'relative', top: 20}}>
            {!blocks.length? <LinearProgress /> : (
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    <Grid  container item xs={12} sm={6}>
                {blocks.map((block)=> (
                    <Template key={block.id} block={block} handleUpdateBlocks={handleUpdateBlocks}/>
                    ))}
                    </Grid>
                </Grid>
            )}
            </div>
            </Paper>
            </Grid>
          </Grid>
        </Container>
    )
}

export default Posts;
