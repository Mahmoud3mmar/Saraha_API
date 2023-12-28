import { Router } from "express";
import { authenticate, authorize } from "../../Auth/middlewares/auth.middleware.js";
import { addQuestion,getQuestions } from "../controllers/question.controller.js";

const router=Router()



router.post('/:id',addQuestion)
router.get('/',authenticate,authorize('USER'),getQuestions)
export default router