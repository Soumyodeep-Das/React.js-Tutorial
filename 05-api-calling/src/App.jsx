import "./App.css";
import React from "react";
// import { getPosts } from "./api/index";
import { profileFetch } from "./api/profileFetch";
import { useEffect, useState } from "react";
// import DataCards from "./components/DataCards"
import ProfileCard from "./components/ProfileCard";

function App() {
  const [profileData, setProfileData] = useState(null);
  let [currentState, setCurrentState] = useState(false);

  function handleCurrentEvent() {
    currentState ? (setCurrentState(false)) : (setCurrentState(true));
  }
  useEffect(() => {
    profileFetch().then((profile) => setProfileData(profile.results[0]));
  }, [currentState]);
  // console.log(profileData)
  return (
    // <div className="App" style={{marginTop: '20px'}}>
    //   {data ? data.map((e) => <ul><DataCards post={e}/></ul>) : <p>No Data</p>}

    // </div>
    <div className="App">
      {profileData ? <ProfileCard data={profileData} btnFn={handleCurrentEvent}/> : <p> NO DATA FOUND</p>}
      
    </div>
  );
}

export default App;
