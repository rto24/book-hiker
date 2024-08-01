import React, {useState, useEffect} from "react";
import User from "./components/Users";

const ExploreUsers = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/users", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  if (loading) return <p></p>; 
  if (bookData.length === 0) return <p>No data available</p>;

  return (
    <>
    <h1 className="connect-header">Connect with other users on BookHiker</h1>
    <div className="connect-container">
      {userData.map((obj, index) => {
        const keys = Object.keys(obj);
        const id = obj[keys[0]];
        const firstName = obj[keys[1]];
        const lastName = obj[keys[2]];
        const userName = obj[keys[3]];

        return <User id={id} firstName={firstName} lastName={lastName} userName={userName}/>
      })}
    </div>
    </>
  )
}

export default ExploreUsers;