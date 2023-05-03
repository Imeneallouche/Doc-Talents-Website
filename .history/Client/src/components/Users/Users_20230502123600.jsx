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
      >
        {DPGR.map((DPGRmember,index) => (
        <li
            key={DPGRmember.email}
            className="bg-white text-purple rounded-lg p-4 m-2 flex justify-between items-center content-center hover:cursor-pointer hover:bg-white-bluish"
            onClick={() => handleOnClickUser(DPGRmember.nom + DPGRmember.prenom)}
            role="button"
          >
            <img
              className="w-12 mr-5"
              src={require(`../../assets/Avatars/${DPGRmember.sexe.toUpperCase()}${
                index % 5
              }.png`)}
              alt="profile"
            />
            <div className="mr-2 flex justify-start w-1/6">
              <span>
                {DPGRmember.nom} {DPGRmember.prenom}
              </span>
            </div>
            <div className="flex justify-start w-1/12">
              <span>{DPGRmember.Role}</span>
            </div>
            <div className="flex justify-start w-1/12">
              <span>{DPGRmember.sexe}</span>
            </div>
            <div className="mr-2 flex justify-start w-1/6">
              <span>{DPGRmember.email}</span>
            </div>
            <div className="flex justify-start w-1/12">
              <span>{DPGRmember.telephone}</span>
            </div>
          </li>
      ))
          
          
      </ul>
    </div>
  );
}

export default Users