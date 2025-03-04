import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Home from './Home';
import Detail from './Detail';
import './loader.css';

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const getApi = () => {
    setLoader(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({data}) =>{
      setLoader(false) 
      setData(data)
    } )
    .catch((error) => console.log(error));
  }

  useEffect (() => {
    getApi();
  }, [] );

  if(loader){
    return <div class="loader"></div>
  }

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home data={data}/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
