import React , { useState, useEffect} from 'react'
// import './App.css';
import Datatable from './datatable'

 function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  console.log(query)


  let dataToDisplay = data

  if(query !== ""){
    const q = query.toLowerCase()
     dataToDisplay = data.filter((item)=>{
      let fName = item.name.first.toLowerCase()
      let lName = item.name.last.toLowerCase()
      if(fName.includes(q) ||lName.includes(q) ){
        return true
      }else{
        return false
      }

  
    })

  }


  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(response => response.json())
    .then(json => setData(json.results))
  },[])
  return (
    <div>


    <div>
      <input type='text' value={query} onChange={(e)=> setQuery(e.target.value)}/>
      </div>



    <div>
    <Datatable data={dataToDisplay}/>
    </div>

    
    </div>

  );
}

export default App;