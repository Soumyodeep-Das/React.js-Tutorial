import "./App.css";
import { getPosts } from "./api/index";
import { useEffect, useState } from "react";
import DataCards from "./components/DataCards"

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
  return (
    <div className="App" style={{marginTop: '20px'}}>
      {data ? data.map((e) => <ul><DataCards post={e}/></ul>) : <p>No Data</p>}
      
    </div>
  );
}

export default App;
