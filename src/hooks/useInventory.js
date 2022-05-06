import { useEffect, useState } from "react";
import axios from "axios";

const useInventory = () => {
  const [inventoris, setInventoris] = useState([]);
  // Load all data
  useEffect(() => {
    const getItems = async () => {
      const url = `https://serene-plains-94148.herokuapp.com/inventory`;
      const { data } = await axios.get(url);
      setInventoris(data);
    };
    getItems();
  }, [inventoris]);
  return [inventoris, setInventoris];
};

export default useInventory;
