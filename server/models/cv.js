import mongoose from 'mongoose';

const cvSchema = mongoose.Schema({
    creator: {type: String, required: true},
    blocks: [{
        id: Number,
        text: String,
        x: Number,
        y: Number,
    }]

})

const CV = mongoose.model("CV", cvSchema);

export default CV;