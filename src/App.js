import { useEffect, useState } from 'react';
import './App.css';
import dataContexts from './Contexts/Contexts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ROOT from './Router/Index.routes';
import axios from 'axios';
function App() {
  useEffect(() => {
    axios.get("https://backend-be9w.onrender.com/products/")
      .then(res => {
        setLoading(false);
        setData(res.data);
        setOriginal(res.data);

      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);
  const root=createBrowserRouter(ROOT)
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState("")
  const [original,setOriginal]=useState([])

const values={
data,
setData,
loading,
setLoading,
original,
error,
setError
}
  return (
    <div className="App">
    <dataContexts.Provider value={values}>
<RouterProvider router={root}/>
    </dataContexts.Provider>
    </div>
  );
}

export default App;
