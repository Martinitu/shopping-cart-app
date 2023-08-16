import {  Link } from "react-router-dom";
function NavBar() {
    return(
        <nav class="bg-dark navbar">
        
             <div class="container-fluid">
                <div class="navbar-header">
                <Link class="text-secondary navbar-brand link-secondary px-2 link-opacity-75-hover"  to='/'>Babylon Fall Sound System</Link> 
                </div>
                <ul class="nav navbar-nav px-2">
              
                <li className='d-flex flex-row'>
                <Link class="nav navbar-nav px-2 text-danger link-secondary link-opacity-75-hover  text-decoration-none" to='/'>home</Link>
                <Link class="nav navbar-nav px-2 text-warning link-secondary link-opacity-75-hover text-decoration-none" to='/shopPage'>shop</Link>
                <Link class="nav navbar-nav px-2 text-success link-secondary  link-opacity-75-hover text-decoration-none" to='/shopPage'>check out</Link>
                </li>
                </ul>
             </div>
        </nav>
    )
}
export default NavBar