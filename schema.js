import mongoose, { Schema, model } from "mongoose";


//ProductCategory Schema
// We don't need to include id in mongodb as it is automatically inserted by _id.
const ProductCategorySchema = new Schema({
    name: {
        type:String,
        required:[true, "Category is required"]
    },
    desc: String,
    created_at:{
        type: Date,
        default: Date.now
    },
    modified_at:Date,
    deleted_at:Date
})
const ProductCategory = model('Product', ProductCategorySchema);


//ProductInventory Schema
// We don't need to include id in mongodb as it is automatically inserted by _id.
const ProductInventorySchema = new Schema({
    quantity: Number,
    created_at:{
        type: Date,
        default: Date.now
    },
    modified_at:Date,
    deleted_at:Date
})
const ProductInventory = model('ProductInventory', ProductInventorySchema);


//Discount Schema
// We don't need to include id in mongodb as it is automatically inserted by _id.
const DiscountSchema = new Schema({
    name:{
        type:String,
        required:[true, "Discount name is required"]
    },
    desc: String,
    discount_percent: Number,
    active: Boolean,
    created_at:{
        type: Date,
        default: Date.now
    },
    modified_at:Date,
    deleted_at:Date
})
const Discount = model('Discount', DiscountSchema);


//Product Schema
// We don't need to include id in mongodb as it is automatically inserted by _id.
const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    desc: {
        type:String
    },
    SKU:{
        type:String,
    },
    category_id:{
        type: mongoose.Types.ObjectId,
        ref: ProductCategory,
        required:[true, "Product Category is required"]
    },
    inventory_id:{
        type: mongoose.Types.ObjectId,
        ref: ProductInventory,
        required:[true, "Product Inventory is required"]
    },
    price: Number,
    discount_id:{
        type: mongoose.Types.ObjectId,
        ref: Discount,
    },
    created_at:{
        type:Date,
        default: Date.now
    },
    modified_at: Date,
    deleted_at: Date
})

const Product = model('Product', ProductSchema);
