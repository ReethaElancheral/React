import "./App.css";
import UserListGet from "./components/BasicGet";
import ErrorHandling from "./components/Errorhandle";
import DataComponent from "./components/LoadingState";
import UsersPage from "./pages/UsersPage";
import "./api/Interceptor"
import CancelToken from "./components/CancelToken";
import UserListNew from "./assets/miniprojects/UserListMiniProject";
import ProductCRUD from "./assets/miniprojects/Product";
import Weather from "./assets/miniprojects/WeatherApp";
import Gallery from "./assets/miniprojects/Gallery";

function App() {
  return (
    <>
      <h2>
        1. Introduction to Axios: Write a short explanation of what Axios is and
        its advantages over fetch().{" "}
      </h2>
      <p>
        Axios is a popular HTTP client library used to make API requests in
        React applications. It provides an easy way to send HTTP requests,
        handle responses, and manage errors.
      </p>
      <h2>Advantages:</h2>
      <p>
        Promise-based API <br />
        Easy to use <br />
        Automatic JSON data transformation <br />
        Error handling <br />
        Request & Response Interceptors{" "}
      </p>

      <hr />
      <h2>
      3. Basic GET
        Request: Fetch dummy user data from an API (e.g., JSONPlaceholder) and
        display it.
      </h2>
  <UserListGet/>
<hr/>
<h2>4. Handle API Errors: Show an error message if the API request fails. </h2>
<ErrorHandling/>
<hr/>
<h2>5. Loading State: Display a loading message while fetching data. </h2>
<DataComponent/>

<UsersPage/>

<hr/>

<h2>11. Cancel API Requests: Cancel ongoing API requests using Axios Cancel 
Tokens. </h2>
<CancelToken/>

<hr/>
<h2 className="usermini">Mini Project 1: User List</h2>
<UserListNew/>
<hr/>
<ProductCRUD/>
<hr/>
<h2 className="usermini">Mini Project 3: Weather App</h2>
<Weather/>
<hr/>
<h2 className="usermini">Mini Project 4: Image Gallery</h2>
<Gallery/>

    </>
  );
}

export default App;
