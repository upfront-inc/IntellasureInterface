import React, { useEffect, useState } from 'react'
import '../Css/Content.css'
import '../Css/Table.css'
import { useTheme } from '../Contexts/ThemeContext'
import { useApp } from '../Contexts/AppContext';
import TopBarComponent from '../Components/TopBarComponent';
import FilterComponent from '../Components/FilterComponent';
import MissingTableComponent from '../Components/MissingTableComponent';
import IntakeTableComponent from '../Components/IntakeTableComponent';
import TopBarAddComponent from '../Components/TopBarAddComponent';
import axios from 'axios';

const IntakeScreen = () => {

  const { theme } = useTheme()
  const { tableFilter } = useApp()

  const [results, setResults] = useState([])

  useEffect(() => {
    let data = JSON.stringify({
      "status": "success",
      "method": "GET"
    });
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://intellasurebackend-docker.onrender.com/get_all_intake/',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.data));
      setResults(response.data.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  return (
    <div className={`content-container-${theme}`}>
      <TopBarAddComponent />
      <div className='table-container'>
        <IntakeTableComponent results={results}/>
      </div>
    </div>
  )
}

export default IntakeScreen
