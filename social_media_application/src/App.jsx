import Sidebar from "./Sidebar";
import Header from "./Header"
import Home from "./Home";
import "./App.css";
import { useReducer, useState } from "react";
import Create_post from "./Create_post";
import dummyPosts from "./dummyPosts";
import Reducer from "./Reducer"
import ThemeContext from "./ThemeContext";
const App = ()=>{

  const [page , SetPage] = useState("Home");
  const [theme ,SetTheme] = useState("light");
  const [posts , dispatch] = useReducer(Reducer , dummyPosts);
  return <>
  <ThemeContext.Provider value = {{theme , SetTheme}} >
    <div className={`app ${theme}-theme d-flex`}>

      <Sidebar SetPage = {SetPage} />

      <div className="main-content flex-grow-1">

        <Header />
        {page=== "Home" ? <Home posts = {posts} dispatch = {dispatch}/> : <Create_post dispatch = {dispatch}/>} 
        
      </div>

    </div>
  </ThemeContext.Provider>
   
  
  </>
    
  
}

export default App;
