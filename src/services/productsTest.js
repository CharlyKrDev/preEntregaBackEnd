import { ProductManager } from "./productManager.js";


const productManager = new ProductManager();

const deleteProduct = async(ID)=>{


    productManager.deleteProduct(ID)

}
deleteProduct(5)