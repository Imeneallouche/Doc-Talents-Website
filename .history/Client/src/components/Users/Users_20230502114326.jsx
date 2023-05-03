import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Users = () => {
    const [DPGR, setDPGR] = useState([]);
    const history = useHistory();

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/DPGR";

  useEffect(() => {
    const fetchDPGR = async () => {
      const response = await axios.get(RUNNING_URL + ENDPOINT);
      console.log(response);
      setDPGR(response.data);
    };

    fetchDPGR();
  }, []);
  return (
    <div>Users</div>
  )
}

export default Users