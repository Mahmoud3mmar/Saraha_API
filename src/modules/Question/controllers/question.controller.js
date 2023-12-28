import exp from "constants";
import { catchAsyncError } from "../../../utils/error.handler.js";
import QuestionModel from "../models/Question.model.js";



const addQuestion= catchAsyncError(async(req,res)=>{


    const {id}=req.params
    const{content}=req.body
    await QuestionModel.create({
        content,
        askedto:id
    })

    res.status(201).json({message:'Added successfully ..'})
})



const getQuestions= catchAsyncError(async(req,res)=>{


    
    const questions =await QuestionModel.find({
        askedto:req.user.id
    })

    res.status(201).json({message:'Added successfully ..',questions})
})



export{
    addQuestion,
    getQuestions
}