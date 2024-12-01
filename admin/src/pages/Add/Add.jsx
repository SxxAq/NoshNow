import { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import "./Add.css";

const Add = () => {
  const url = "https://noshnow-backend.onrender.com";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error adding food item.");
    }
  };

  return (
    <div className="add">
      <h3 className="add-title">Add New Food Item</h3>
      <form onSubmit={onSubmitHandler} className="add-form">
        <div className="add-image-upload">
          <p>Upload Image</p>
          <label htmlFor="image" className="image-upload-label">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload area"
              className="upload-preview"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-form-fields">
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              id="name"
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              id="description"
              rows="4"
              placeholder="Enter product description"
              required
            ></textarea>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Product Category</label>
              <select
                onChange={onChangeHandler}
                value={data.category}
                name="category"
                id="category"
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Product Price</label>
              <input
                onChange={onChangeHandler}
                value={data.price}
                type="number"
                name="price"
                id="price"
                placeholder="Enter price"
                required
              />
            </div>
          </div>
        </div>
        <button className="add-btn" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Add;
