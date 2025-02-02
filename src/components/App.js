import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
function App() {
  return (
    <div>
      <NavBar />
      <Home name = {user.name} city = {user.city} color ={user.color}/>
      <About linkedIn = {user.links.linkedin} gitHub = { user.links.github}/>
      <About 
        linkedIn = {user.links.linkedin} 
        gitHub = { user.links.github}
        bio = {user.bio}
      />
    </div>
  );
}
export default App;