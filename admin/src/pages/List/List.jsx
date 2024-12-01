import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./List.css";

const List = () => {
  const url = "https://noshnow-backend.onrender.com";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error loading list.");
    }
  };

  const itemRemoveHandler = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: foodId,
      });

      if (response.data.success) {
        await fetchList();
        toast.success(response.data.message);
      } else {
        toast.error("Error removing food.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error removing food.");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add">
      <h3 className="list-title">All Foods List</h3>
      <div className="list-table">
        <div className="list-table-header">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Action</span>
        </div>
        {list.map((item, index) => (
          <div key={index} className="list-table-row">
            <img
              src={`${url}/images/` + item.image}
              alt={item.name}
              className="food-image"
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <button
              onClick={() => itemRemoveHandler(item._id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
