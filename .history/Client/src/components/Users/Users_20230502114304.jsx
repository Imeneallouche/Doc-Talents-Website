import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Users = () => {
    const [DPGR, setDPGR] = useState([]);
    const history = useHistory();

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Doctorant";

  useEffect(() => {
    const fetchDPGR = async () => {
      const response = await axios.get(RUNNING_URL + ENDPOINT);
      console.log(response);
      setDPGR(response.data);
    };

    fetchDoctorants();
  }, []);
  return (
    <div>Users</div>
  )
}

export default Users