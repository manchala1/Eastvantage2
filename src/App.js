//import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { getUrl } from "./apicall/apicall";
import { setItem } from "./localstorage/local_storage";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataApi();
  }, []);

  const fetchDataApi = async () => {
    //Fetching the Data from Url
    const url = "https://randomuser.me/api";
    try {
      const getData = await getUrl(url);
      console.log(getData?.data?.results);
      setData(getData?.data?.results);
      setItem("result", getData?.data?.results);
    } catch (err) {
      console.log("err::", err);
    }
  };
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="App">
      {" "}
      {/*Displaying the Data from Url*/}
      <h1>S30 ReactJS Test 2022.Q2</h1>
      {data &&
        data.map((display, i) => (
          <div key={i}>
            <div className="card">
              <img src={display.picture.large} alt="Avatar" className="image" />
              <p className="maintext">
                {" "}
                Full name :
                <spam className="namedisplay">
                  {" "}
                  {display.name.title} {display.name.first} {display.name.last}
                </spam>{" "}
              </p>
              <p className="maintext">
                {" "}
                Email Address :{" "}
                <spam className="namedisplay">{display.email} </spam>
              </p>
            </div>
          </div>
        ))}
      {/*Refresh Button to reload the page*/}
      <button onClick={refreshPage} className="refresh_butt">
        Refresh
      </button>
    </div>
  );
}

export default App;
