import filesystem, { read } from 'fs';


export const readProductsFile = async () => {
    const products = JSON.parse(await filesystem.promises.readFile('./database/products.json', 'utf-8'));
    return products
}

export const getAllProducts = async () => {
    const products = await readProductsFile()
    return products
}

export const getProductById = async (id) => {
    const products = await readProductsFile()
    const product = products.find( product => product.id == id)
    return product
}

export const createProduct = async ({title,description,price,stock}) => {
    const products = await readProductsFile()
    products.push({title,description,price,stock,id:products.length+1})
    await filesystem.promises.writeFile('./database/products.json', JSON.stringify(products), {encoding: 'utf-8'})
    return {title,description,price,stock,id:products.length+1}
}