/* eslint-disable no-unused-vars */
 import { BrowserRouter } from "react-router-dom";
 
 import {About, Contact, Experience, Feedbacks, Hero, 
  Navbar,Tech, Works, StarsCanvas} from './components';

   
 const App= ()=>{

   return (
      //WRAP EVERYTHING IN A BROWSER ROUTER COMPONENT
      <BrowserRouter>
   
           <div className="relative z-0 bg-primary">
           
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
               <Navbar />
               <Hero />
            </div>
          </div> 
   
      </BrowserRouter>
   
   )
}

export default App


 