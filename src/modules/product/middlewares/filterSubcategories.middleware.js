import { catchAsyncError } from '../../../utils/error.handler.js'
import categoryModel from '../models/category.model.js'

export const filterSubcategories = () =>
	catchAsyncError(async (req, res, next) => {
		const { categorySlug } = req.params
		const category = await categoryModel.findOne({ slug: categorySlug })
		req.query = req.query.where({ category_id: category._id })
		next()
	})
