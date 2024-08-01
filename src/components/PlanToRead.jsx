import React, {useState, useEffect } from "react";
import FetchBooks from "./FetchedBooks";
import PlanToReadBooks from "./PlanToReadBooks";

const PlanToReadList = () => {
  const [ planToReadData, setPlanToReadData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/explore", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (response.ok) {
          const data = await response.json();
          setPlanToReadData(data);
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    fetchData();
  }, []);

  if (loading) return <p></p>; 
  if (planToReadData.length === 0) return <p>No data available</p>;

  return (
    <>
    <h1 className="ptr-main-header">Next on the list</h1>
    <div className="plan-to-read-container">
      {planToReadData.map((obj, index) => {
        const keys = Object.keys(obj);
        const id = obj[keys[0]];
        const title = obj[keys[1]];
        const img = obj[keys[2]];

        return <PlanToReadBooks id={id} title={title} bookImg={img} key={index}/> //may need to make a new component, fetch books still has the button attached
      })}
    </div>
    </>
  )
}

export default PlanToReadList;