// 
  

import React,{useEffect,} from 'react'
import EmojiData from './emoji.json'

const App = () => {
  const [search,setSearch] =React.useState('')
  const [data,setData]=React.useState([])

  useEffect(()=>{
    //console.log(search)
  const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()))
   setData(newData)
  },[search])
  return (
    <div>
    <center>
    <h1>Emoji Search</h1>
    <input type="text" name="search" value={search} onChange={(e) =>setSearch(e.target.value)}/>
    </center>
     {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copy")}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}
      
    </div>
  )
}

export default App
