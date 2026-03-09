import { useEffect, useState } from "react";

const ProductManagement = ()=>{

    const [products,setProducts] = useState(()=>{
        const allProducts = localStorage.getItem('products');
        return allProducts ? JSON.parse(allProducts):[];
    });

    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [image,setImage] = useState("");

    // const [form,setForm] = useState([]);

    // const handleChange = (e)=>{
    //     setForm({...form,[e.target.name]:e.target.value});
    // }


    useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(products));
    },[products])

    const handleSubmit = (e)=>{
        e.preventDefault();

        let updatedProducts;

        updatedProducts = {
            id:Date.now(),
            name:name,
            description:description,
            price:price,
            image:image
        }

        setProducts([...products,updatedProducts]);
        alert("Product Added Successfully.!");

        setName("");
        setDescription("");
        setPrice("");
        setImage("");
        
    }

    return(
        <>
            <h1>Product Management</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product name" />
                <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter product description" />
                
                <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter product price" />
                <input type="text" name="image" value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Enter product image" />
                <button>Add Product</button>
            </form>     
        </>
    )
}

export default ProductManagement;