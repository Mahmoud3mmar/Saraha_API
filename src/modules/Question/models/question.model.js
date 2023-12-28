import mongoose from "mongoose";


const QuestionSchema = new mongoose.Schema({

    content:String,
    askedto:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

const QuestionModel= mongoose.model('question',QuestionSchema)


export default QuestionModel