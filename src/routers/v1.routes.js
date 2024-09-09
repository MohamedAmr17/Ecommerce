import { Router } from 'express'

import categoriesRouter from '../modules/product/routers/category.routes.js'
import subcategoriesRouter from '../modules/product/routers/subcategories.routes.js'

const router = Router()

router.use('/categories', categoriesRouter)
router.use('/subcategories', subcategoriesRouter)

export default router
