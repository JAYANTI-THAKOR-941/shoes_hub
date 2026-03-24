import { useEffect, useState } from "react";
import './admin.css';

const ProductManagement = () => {

    const [products, setProducts] = useState(() => {
        const allProducts = localStorage.getItem('foodProducts');
        return allProducts ? JSON.parse(allProducts) : [];
    });

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const [open, setOpen] = useState(false);

    const [editId, setEditId] = useState(null);


    useEffect(() => {
        localStorage.setItem('foodProducts', JSON.stringify(products));
    }, [products]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            const updated = products.map((p) => {
                if (p.id === editId) {
                    return { id: editId, name, description, longDescription, category, price, image }
                }
                return p;
            })

            setProducts(updated);
            setEditId(null);
            alert("Product Updated Successfully.!");
        }
        else {
            let newProduct;

            newProduct = {
                id: Date.now(),
                name: name,
                description: description,
                longDescription: longDescription,
                category: category,
                price: price,
                image: image
            }

            setProducts([...products, newProduct]);
            alert("Product Added Successfully.!");

        }

        setName("");
        setDescription("");
        setLongDescription("");
        setCategory("");
        setPrice("");
        setImage("");

    }

    const handleEdit = (p) => {
        setOpen(true);
        setName(p.name);
        setDescription(p.description);
        setLongDescription(p.longDescription);
        setCategory(p.category);
        setPrice(p.price);
        setImage(p.image);
        setEditId(p.id);
    }

    const handleDelete = (id) => {
        const filter = products.filter((p) => p.id !== id);
        setProducts(filter);
    }

    return (
        <>
            <h1 className="title">Product Management</h1>
            <button className="add-btn" onClick={() => setOpen(true)}>Add New Product</button>
            <table>
                <tr>
                    <th>Image</th>
                    <th style={{ width: "25%" }}>Name</th>
                    <th style={{ width: "30%" }}>Description</th>
                    <th style={{ width: "10%" }}>Price</th>
                    <th>Action</th>
                </tr>
                {
                    products.map((p) => (
                        <tr key={p.id}>
                            <td><img src={p.image} alt="" /></td>
                            <td>{p.name}</td>
                            <td>{p.description}</td>
                            <td>{p.price}</td>
                            <td><button onClick={() => handleEdit(p)}>Edit</button><button onClick={() => handleDelete(p.id)} style={{ backgroundColor: "red" }}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>

            {
                open && <form className="form-container" onSubmit={handleSubmit}>
                    {editId ? <h1>Update Product</h1> : <h1>Add New Product</h1>}
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name" />
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter product description" />

                    <input type="text" name="longDescription" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} placeholder="Enter product longDescription" />

                    <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter product category" />

                    <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter product price" />
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter product image" />
                    {editId ? <button>Update</button> : <button>Add Product</button>}
                    <button onClick={() => setOpen(false)} style={{ backgroundColor: "black" }}>Cancel</button>
                </form>
            }


        </>
    )
}

export default ProductManagement;