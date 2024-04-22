import { Router } from "express";
import {ProductManager} from '../services/productManager.js'

const productsRouter = Router()

const productManager = new ProductManager();


productsRouter.get("/products", async (req, res)=>{
    const limit = parseInt(req.query.limit);

    try {

        const products = await productManager.getProducts()

        if(!isNaN(limit)){

            res.status(201).json(products.slice(0, limit))
        } else {
            
            res.status(201).json(products)

        } 
  
    
    } catch (error) {

        console.error("Error al obtener productos:", error);
        res.status(500).send(`Error al obtener productos`, error);
        
        
    }

 productsRouter.get('/products/:pid', async (req, res)=>{

    const id = parseInt(req.params.pid);
    try {
        const product = await productManager.getProductId(id)
        if (!product) return res.status(404).send(`El id: ${id} no pertenece a ningún producto`);
        res.status(201).json(product)
        
    } catch (error) {

        console.error(`Error al obtener el producto`, error);
        res.status(500).send(`Error al obtener el producto por ID`, error);
        
    }



 })



})

export default productsRouter