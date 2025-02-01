import {createProduct, getAllProducts , getProductById , readProductsFile} from '../repository/product.repository.js'
import { ServerError } from '../utils/error.util.js'
export const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProducts()
        console.log(products)
        res.send({
            ok: true,
            status: 200, 
            products})
    } catch (error) {
        console.log('error en el registro', error)
        return res.send({
            ok: false,
            message: error.message,
            status: 500
        })
    }
}

export const getProductByIdController = async (req, res) => {
    try {
        const {product_id} = req.params
        const product = await getProductById(product_id)
        console.log(product)
        res.send({
            ok: true,
            status: 200, 
            payload: {product}})
    } catch (error) {
        console.log('error en el registro', error)
        return res.send({
            ok: false,
            message: error.message,
            status: 500
        })
    }
}

export const createProductController = async (req, res) => {
    try {
        const {title , description , price , stock} = req.body
        const product = await createProduct({title , description , price , stock})
        return res.send({
            ok: true,
            status: 200, 
            payload: product})
    } catch (error) {
        console.log('error en el registro', error)
        return res.send({
            ok: false,
            message: error.message,
            status: 500
        })
    }
}