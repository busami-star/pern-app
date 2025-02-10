import {sql} from "../config/db.js";

export const getProducts = async (req, res) => {
    try{
        const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;
        console.log("fetched products")
        res.status(200).json({success:true, data:products});
    }
    catch (e) {
        console.log("error getting products", e);
        res.status(500).json({success:false, error: e});
    }
}

export const createProduct = async (req, res) => {
    const {name, price, image} = req.body;

    if(!name || !price || !image) {
        res.status(400).json({success:false, message:"All fields are required."});
    }
    try{
        const newProduct = await sql`
            INSERT INTO products (name, price, image);
            VALUES (${name},${price},${image})
            RETURNING *
        `
        console.log("new product added", newProduct)
        res.status(201).json({success:true, data:newProduct[0]});

    }
    catch (e) {
        console.log("error in creating a product", e)
        res.status(500).json({success:false, error: e});
    }
}
export const updateProduct = async (req, res) => {}
export const deleteProduct = async (req, res) => {}
export const getProduct = async (req, res) => {}
