import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./List.css";
const List = () => {
  const url = "http://localhost:4000";
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
        toast.success("Item removed.");
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
  }, [itemRemoveHandler]);
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => itemRemoveHandler(item._id)} className="cross">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;