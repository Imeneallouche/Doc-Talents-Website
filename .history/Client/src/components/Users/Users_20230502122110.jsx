import React, { useState, useEffect } from "react";

const Users = () => {
    const [DPGR, setDPGR] = useState([]);
  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/DPGR";

  useEffect(() => {
    const fetchDPGR = async () => {
      const response = await axios.get(RUNNING_URL + ENDPOINT);
      console.log(response.data);
      setDPGR(response.data);
    };

    fetchDPGR();
  }, []);

  return (
    <div className={`bg-white-bluish w-full flex flex-col`}>
      <ul
        className={`mx-2 grow overflow-y-auto`}
        style={{ height: "calc(100vh - 14rem)" }}
      >{DPGR.map((DPGRmember,index) => {

      })
          
          }
      </ul>
    </div>
  );
}

export default Users