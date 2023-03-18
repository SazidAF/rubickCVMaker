import mongoose from 'mongoose';

const cvSchema = mongoose.Schema({
    creator: {type: String, required: true},
    dimensions: [{
        text: String,
        clientx: Number,
        clienty: Number,
        layerx: Number,
        layery: Number,
    }]

})

const CV = mongoose.model("CV", cvSchema);

export default CV;