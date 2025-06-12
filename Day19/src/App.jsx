import { useState,useEffect } from 'react'
import './App.css'
import ComponentRender from './components/ComponentRender'
import DataDisplay from './components/DataDisplay'
import GreetingCard from './components/GreetingCard'
import UserDashboard from './components/UserDashboard'
import UserGreeting from './components/UserGreeting'
import UserGreetingCard from './components/UserGreetingCard'
import UserProfile from './components/UserProfile'
import UserList from './components/UserList'
import HoverDisplay from './components/HoverDisplay'
import BrokenComponent from './components/BrokenComponent'
import HigherOrderComponents from './components/HigherOrderComponents'
import EnhancedDashboard from './components/Dashboard'
import SecretPage from './pages/SecretPage'
import PostsList from './pages/PostsList'
import ClickStats from './pages/ClickStats'
import ContentBox from './pages/ContentBox'


function App() {
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
    const [showProfile, setShowProfile] = useState(true);
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Hello from API!' });
      setLoading(false);
    }, 5000); 
  }, []);

  return (

    <>
     <h2>1. Introduction to HOCs: Write a brief explanation of what Higher-Order 
Components are and their benefits. </h2>
<p>A Higher-Order Component (HOC) is a function that takes a component as 
input and returns a new component with additional functionality. 
Definition: 
A Higher-Order Component is a pattern in React that allows component 
reusability and logic sharing by wrapping a component with another component. <br/>

 -It allows reusing component logic (like authentication, logging, or API calls). <br/>

 -HOCs follow the pattern of functional programming where functions modify 
other functions. </p>

<h2>2. Basic HOC Structure: Create a simple HOC that logs "Component 
Rendered" whenever a wrapped component renders. </h2>
<ComponentRender/><hr/>

<h2>3. Props Forwarding in HOCs: Pass props from HOC to the wrapped 
component and display them. </h2>

<UserGreetingCard message="Welcome back!" user="Reetha Meganathan" />;
<hr/>

<h2>4. Style Wrapper HOC: Create an HOC that adds custom CSS styles to the 
wrapped component. </h2>
<GreetingCard message="Styled Hello!" user="Reetha" />;
<hr/>
<h2>5. Conditional Rendering HOC: Implement an HOC that conditionally renders 
a component based on a boolean prop. </h2>

<div>
      
      <UserGreeting message="Hello!" user="Nisha" shouldRender={true} />
      
    
      <UserGreeting message="You won't see me!" user="Ghost" shouldRender={false} />
    </div>

    <hr/>

    <h2>6. Authentication HOC: Create an HOC that renders a component only if the 
isAuthenticated prop is true. </h2>
 <div>
    
      <UserDashboard isAuthenticated={false} user="Anonymous" />
    </div>
    <hr/>

<h2>7. Loading Spinner HOC: Show a loading spinner until the data is loaded. </h2>
<DataDisplay loading={loading} data={data} />;
 <hr/>
<h2>8. Logging HOC: Log component lifecycle events (mounted/unmounted) using 
the HOC. </h2>
 <div>
      <button onClick={() => setShowProfile((prev) => !prev)}>
        Toggle Profile
      </button>
      {showProfile && <UserProfile user="Reetha Meganathan" />}
    </div>
    <hr/>

    <h2>9. Data Fetching HOC: Fetch data from an API inside an HOC and pass it to the 
wrapped component. </h2>
<UserList/>
<hr/>
<h2>10. Mouse Hover Tracker HOC: Track mouse hover events and display the 
coordinates. </h2>

<HoverDisplay/>
<hr/>
<h2>11. Error Boundary HOC: Catch and display errors from wrapped components. </h2>
<BrokenComponent/>
<hr/>
<h2>12. Title Update HOC: Update the document title with the component name 
whenever it renders. </h2>
<HigherOrderComponents/>
<hr/>
<h2>13. Reuse Multiple HOCs: Combine two or more HOCs into one component. </h2>

<EnhancedDashboard/>
<hr/>
 <div>
      <h2>Mini Project 1: Authentication Protected Page </h2>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>

      <SecretPage isAuthenticated={isAuthenticated} />
    </div>
<hr/>
<h2>Mini Project 2: Loading and Error Handler </h2>
<div>
      <PostsList />
    </div>
    <hr/>
    <h2> Mini Project 3: Click Tracker  </h2>
<ClickStats/>
<hr/>

<h2>Mini Project 4: Themed Components</h2>
<div style={{ padding: '20px' }}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme (Current: {theme})
      </button>

      <ContentBox theme={theme} message="This is a themed content box!" />
    </div>



    </>
  )
}

export default App
