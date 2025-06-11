import {Link,NavLink} from "react-router-dom";

const Projectone =()=>{


    return(
        <>
<div className="project-one">
         <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <NavLink className="navbar-brand" to="/">Day17</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projectone" className="nav-link">Project1</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projecttwo" className="nav-link">Project2</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-link">Project3</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/movie" className="nav-link">Project4</NavLink>
          </li>
        </ul>
      </div>
    </nav>
<div className="user-profile">
    <h2>Click here to see User Profile Details</h2>
     <ul>
          <li>
            <Link to="/userprofile">Users Profile</Link>
          </li>

        </ul>

</div>


</div>

    </>
)
}

export default Projectone;

