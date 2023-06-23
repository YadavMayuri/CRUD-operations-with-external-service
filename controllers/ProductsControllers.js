
import axios from "axios";
const fakestoreApiUrl = 'https://fakestoreapi.com/';

// Create a new product
export const addProduct = async(req, res) =>{
    try{
        const {title, price, description,image,category,id,pin} = req.body;
        if(!title) return res.send("Product title is required!")
        if(!price) return res.send("Price is required!")
        if(!description) return res.send("Description is required!")
        if(!image) return res.send("Image is required!")
        if(!category) return res.send("Category is required!")

        const response = await axios.post(`${fakestoreApiUrl}products`, {
            title,
            price,
            description,
            category,
            image,
        });
        res.json(response.data);

    }catch(error){
        return res.send(error)
    }
}


// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const response = await axios.get(`${fakestoreApiUrl}products`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};



// Get a product by ID
export const getProductById = async (req, res) => {
    const { id } = req.body;
    try {
        const response = await axios.get(`${fakestoreApiUrl}products/${id}`);
        console.log(response.data, "response here");
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ error: 'Product not found' });
    }
};




// Update a product
export const updateProduct = async (req, res) => {
    const { id } = req.body;
    const { title, price, description, category, image, userId ,pin} = req.body;
    try {
        const response = await axios.put(`${fakestoreApiUrl}products/${id}`, {
            title,
            price,
            description,
            category,
            image,
        });
        res.json(response.data);
        console.log(response.data);
    } catch (error) {
        res.status(404).json({ error: 'Product not found' });
    }
};


//delete product
export const deleteProduct = async (req, res) => {
    const { id } = req.body;
    try {
        await axios.delete(`${fakestoreApiUrl}products/${id}`);
        return res.send("Product deleted successfully!")

    } catch (error) {
        res.status(404).json({ error: 'Product not found' });
    }
};