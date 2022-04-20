import './App.css';
import Form from './components/Form';
import CV from './components/CV';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState({})

  const inputChange = (field, value) => {
    setData({...data, [field]:value})
  }

  return (
    <div className="App">
      <div className='title'>
        <h1>CVeasy</h1>
      </div>
      <Form inputChangeHandler={inputChange}/>
      <CV data={data}/>
    </div>
  );
}

export default App;
