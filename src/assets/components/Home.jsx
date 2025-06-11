
import {Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";




const Home =()=>{

    const navigate = useNavigate();

  const goToProfile = () => {
    const id = 555;
    const name = "Charlie";
    navigate(`/user/${id}/${name}`);
  };


    return(
        <>

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
            <NavLink to="/projectthree" className="nav-link">Project3</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projectfour" className="nav-link">Project4</NavLink>
          </li>
        </ul>
      </div>
    </nav>


        <div className="homepage">
            <div className="intro">

            
             <h2>1. Introduction to Dynamic Routing: Write a short explanation of dynamic 
routes and their use cases in React. </h2>
<p>Dynamic routing in React refers to the ability to create routes that can adapt based on parameters in the URL. This is commonly achieved using libraries like React Router, which allows you to define route paths with dynamic segments, such as /user/:id or /product/:slug. These parameters can then be accessed inside the component using React Router hooks like useParams().
<br/><br/>
<strong>Use Cases:</strong><br/><br/>

User Profiles: /user/123 to show the profile of user with ID 123.<br/>

Product Pages: /product/shoes-xyz to display details of a specific product.<br/>

Blog Posts: /blog/react-routing to show a blog post based on its slug.<br/>

Editing Items: /edit/:itemId for editing a specific item using its ID.<br/>

Dynamic routes make applications more flexible and scalable by allowing components to render content based on changing URL parameters.</p>
        </div>
        <hr/>
        <div className="userprofile">
<h2>2. Basic Dynamic Route Setup: Create a dynamic route like /user/:id using 
React Router.</h2>
        <h2>Home Page</h2>
        <p>Go to User Profile</p>
        <Link to="/user/101">View User </Link>
        </div>

<hr/>
<div className="multipara">
    <h2>5. Multiple Route Parameters: Create a route like /user/:id/:name and display 
both parameters. </h2>
        <h2>Welcome to the App</h2>
        <p>Click the link to view a user profile:</p>
        <Link to="/user/101/Alice">Go to Alice's Profile</Link>

        <hr />
        </div>

<div className="optionalpara">
    <h2>6. Optional Parameters: Set up a route with an optional parameter like 
/user/:id?. </h2>
 <Link to="/user">Go to User Profile(Optional para)</Link>
</div>
<hr/>

<div className="profilenavigate">
    <h2>7. Route Navigation with Parameters: Use the Link component to navigate to 
routes with parameters. </h2>
 <h2>User Directory</h2>

        <ul>
          <li>
            <Link to="/user/101/Alice">View Alice's Profile</Link>
          </li>
          <li>
            <Link to="/user/202/Bob">View Bob's Profile</Link>
          </li>
        </ul>

</div>
<hr/>

<div className="usenavigate">
    <h2>8. Programmatic Navigation with Parameters: Use useNavigate() to navigate 
to dynamic routes on button click. </h2>
<button onClick={goToProfile}>Go to Charlie's Profile</button>

</div>
<hr/>
<div className="defaultpara">
    <h2>9. Default Parameter Value: Provide a default value if the parameter is 
missing. </h2>
<ul>
        <li>
          <Link to="/users">Visit Default User</Link>
        </li>
        <li>
          <Link to="/user/123/Alice">Visit Alice's Profile</Link>
        </li>
        <li>
          <Link to="/user/456/Bob">Visit Bob's Profile</Link>
        </li>
      </ul>
</div>
<hr/>

<div className="parametervalidation">
    <h2>10. URL Parameter Validation: Display an error message if the parameter is not 
a valid number or string. </h2>
 <ul>
        <li><Link to="/user/123/Alice">Valid User</Link></li>
        <li><Link to="/user/abc/Alice">Invalid ID (not a number)</Link></li>
        <li><Link to="/user/456/">Missing Name</Link></li>
        <li><Link to="/users">Default User</Link></li>
      </ul>

</div>
<hr/>
<div className="nestedroutepara">

    <h2>11. Nested Route with Parameters: Create nested dynamic routes like 
/user/:id/posts. </h2>
<ul>
        <li><Link to="/userss/101">User 101 Profile</Link></li>
        
        <li><Link to="/userss/101/posts">User 101 Posts</Link></li>
      </ul>

</div>
<hr/>

<div className="filterdata">

    <h2>12. Filter Data Based on Route Parameter: Fetch user details based on the id 
parameter. </h2>

<ul>
        <li><Link to="/userlist">UserList</Link></li>
      </ul>
</div>
<hr/>
<div className="cleanup">
<h2>13. Cleanup with useEffect: Clean up fetched data when the route parameter 
changes. </h2>

<ul>
        <li><Link to="/userlist">UserList</Link></li>
      </ul>
</div>
</div>

        </>
    )
}

export default Home;