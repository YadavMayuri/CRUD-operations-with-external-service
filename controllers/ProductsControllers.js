import Products from "../modals/ProductsModal.js"

export const addProduct = (req, res) =>{
    try{
        const {title, price, description,image,category,id,pin} = req.body;
        if(!title) return res.send("Product title is required!")
        if(!price) return res.send("Price is required!")
        if(!description) return res.send("Description is required!")
        if(!image) return res.send("Image is required!")
        if(!category) return res.send("Category is required!")


        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                   
                    title: title,
                    price:price,
                    description: description,
                    image: image,
                    category: category
                }
            )
        })
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                res.send(json)
            })

    }catch(error){
        return res.send(error)
    }
}