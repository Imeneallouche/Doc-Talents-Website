import React from 'react'

const Users = () => {
    const [DPGR, setDPGR] = useState([]);
    const history = useHistory();

  const RUNNING_URL = "http://localhost:5000";
  const ENDPOINT = "/Doctorant";

  useEffect(() => {
    const fetchDoctorants = async () => {
      const response = await axios.get(RUNNING_URL + ENDPOINT);
      console.log(response);
      setDoctorants(response.data);
    };

    fetchDoctorants();
  }, []);
  return (
    <div>Users</div>
  )
}

export default Users