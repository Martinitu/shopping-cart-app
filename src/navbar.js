import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function NavBar() {
    return(
        <nav class="navbar navbar-default">
        
             <div class="container-fluid">
                <div class="navbar-header">
                <a class="navbar-brand text-secondary px-2" href='/'>Babylon Fall Sound System</a> 
                </div>
                <ul class="nav navbar-nav px-2">
              
                <li className='d-flex flex-row'>
                <a class="nav navbar-nav px-2 link-secondary link-opacity-50-hover  text-decoration-none" href='/'>home</a>
                <a class="nav navbar-nav px-2 link-secondary link-opacity-50-hover text-decoration-none" href='/shopPage'>shop</a>
                <a class="nav navbar-nav px-2 link-secondary  link-opacity-50-hover text-decoration-none" href='/shopPage'>check out</a>
                </li>
                </ul>
             </div>
        </nav>
    )
}
export default NavBar