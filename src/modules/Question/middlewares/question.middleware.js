import { AppError, catchAsyncError } from "../../../utils/error.handler.js"
import UserModel from "../../User/user.model.js"


export const assertIdExist = catchAsyncError(async (req, res, next) => {
	const { id } = req.params
	const user = await UserModel.findById(id)
	if (!user) throw new AppError("This user doesn't exist", 400)
	next()
})
