import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Grid, LinearProgress, Paper, Container} from '@material-ui/core';

import Template from '../Template/template';

// Create styles
import useStyles from './styles';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = ({blocks, setBlocks}) => {
    const classes = useStyles();
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
    return (
  <Document>
    <Page size="A4" style={styles.page}>
        <div style={{height: "800px", paddingTop: "10px", position: 'relative', top: 20}}>
            {!blocks.length? <LinearProgress /> : (
                <View className={classes.container} container alignItems='stretch' spacing={3}>
                    <View container item xs={12} sm={6}>
                {blocks.map((block)=> (
                    <Template key={block.id} block={block} handleUpdateBlocks={handleUpdateBlocks}/>
                    ))}
                    </View>
                </View>
            )}
        </div>
    </Page>
  </Document>
    );
};

export default MyDocument;