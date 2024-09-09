import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			minLength: 3,
			maxLength: 200,
			required: true,
			trim: true,
			unique: true,
		},
		slug: {
			type: String,
			minLength: 3,
			maxLength: 200,
			required: true,
			trim: true,
			unique: true,
		},
		description: {
			type: String,
			minLength: 3,
			maxLength: 10000,
			required: true,
			trim: true,
		},
		stock: {
			type: Number,
			min: 0,
			required: true,
		},
		price: {
			type: Number,
			min: 0.01,
			required: true,
		},
		discounted_price: {
			type: Number,
			min: 0.01,
			required: true,
			validate: {
				validator: function (value) {
					return value <= this.price
				},
				message:
					'The discounted price must not exceed the initial price',
			},
		},
		cover_image: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'image',
		},
		features: [
			{
				key: String,
				value: String,
			},
		],
	},
	{ timestamps: true }
)

const productModel = mongoose.model('product', productSchema)

export default productModel
