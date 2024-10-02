
import Routes from "./components/Routes/Routes";
import { GrSearch } from "react-icons/gr";
import './Style.css';
import Search from "./Search";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function App() {

  const [showSearch, setShowSearch] = useState(false);

  let search_btn = (e) => {
    e.preventDefault();
    setShowSearch(true);
  }
  
  let cross_btn = (e) => {
    e.preventDefault();
    setShowSearch(false);
  }



  
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

             {
              Routes.map((route, index) => {
                if(route.submenu){
                  return (
                    <li key={index} className="nav-item dropdown">
                       <a href="#" role="button" data-bs-toggle="dropdown"  className="nav-link">{ route.title } <span>{<route.icon />}</span> </a>
                      

                       <ul class="dropdown-menu">
                         {
                          route.submenu.map((submenu, subindex) => {
                            return (
                              <li key={subindex}><a class="dropdown-item" href="#">{ submenu.title }</a></li>
                            )
                          })
                         }
                       </ul>
                    </li>
                  )
                }else{
                  return (
                    <li key={index} className="nav-item">
                       <a href="" className="nav-link">{ route.title }</a>
                    </li>
                  )
                }
              })
             }




            </ul>


            <ul>
              <li onClick={search_btn}> <GrSearch /></li>
              <li onClick={cross_btn}><RxCross2 /></li>
            </ul>
          </div>
        </div>
      </nav>


      <Search open={showSearch} />
    </>
  )
}

export default App
