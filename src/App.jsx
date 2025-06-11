import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./assets/components/Home";
import UserProfiletwo from "./assets/components/UserProfiletwo";
import UserMultiPara from "./assets/components/UserMultiPara";
import OptionalPara from "./assets/components/OptionalPara";
import UserProfilenavigate from "./assets/components/UserProfilenavigate";
import UserProfileDefault from "./assets/components/UserProfileDefault";
import ParameterValidation from "./assets/components/ParameterValidation";
import NestedRoutePara from "./assets/components/NestedRouteProfile";
import UserPosts from "./assets/components/NestedRouteposts";
import FilterUserDetails from "./assets/components/FilterUserDetails";
import FilterUserList from "./assets/components/FilterUserList";
import CleanupUserDetails from "./assets/components/CleanupUserDetails";
import Navbar from "./assets/components/Navbar";
import UserListMiniProject from "./assets/UserProfile/UserListMiniProject";
import UserProfileMiniProject from "./assets/UserProfile/UserProfileMiniProject";
import Projectone from "./assets/UserProfile/Project1";
import Projecttwo from "./assets/ProductList/Project2";
import ProductList from "./assets/ProductList/ProductListPage";
import ProductDetails from "./assets/ProductList/ProductDetails";
import Projectthree from "./assets/Blog/Project3";
import BlogList from "./assets/Blog/BlogList";
import PostDetails from "./assets/Blog/PostDetails";
import Projectfour from "./assets/Movies/Project4";
import MovieList from "./assets/Movies/MovieList";
import MovieDetails from "./assets/Movies/MovieDetails";

function App() {

  return (
    <>
    
<BrowserRouter>

 
<Routes>
 <Route path="/" element = {<Home/>}/>
 <Route path="/user/:id" element = {<UserProfiletwo/>}/>
 <Route path="/user/:id/:name" element = {<UserMultiPara/>}/>
   <Route path="/user" element={<OptionalPara />} />
   <Route path="/user/:id/:name" element={<UserProfilenavigate/>}/>

   <Route path="/user/:id/:name" element={<UserProfileDefault/>}/>
   <Route path="/users" element={<UserProfileDefault/>}/>

   <Route path="/user" element={<ParameterValidation/>} />
  <Route path="/user/:id/:name" element={<ParameterValidation/>} />

  <Route path="/userss/:id" element={<NestedRoutePara/>} />
  <Route path="/userss/:id/posts" element={<UserPosts />} />

    <Route path="/userlist" element={<FilterUserList/>} />
        <Route path="/userlist/:id" element={<FilterUserDetails/>} />

         <Route path="/userlist" element={<FilterUserList/>} />
        <Route path="/userlist/:id" element={<CleanupUserDetails/>} />



        <Route path="/projectone" element = {<Projectone/>}/>
        <Route path="/userprofile" element={<UserListMiniProject />} />
        <Route path="/userprofile/:id" element={<UserProfileMiniProject />} />

        <Route path="/projecttwo" element = {<Projecttwo/>}/>
        <Route path="/product" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />

           <Route path="/projectthree" element = {<Projectthree/>}/>
        <Route path="/blog" element={<BlogList/>} />
        <Route path="/blogpost/:id" element={<PostDetails/>} />

                   <Route path="/projectfour" element = {<Projectfour/>}/>
        <Route path="/movie" element={<MovieList/>} />
        <Route path="/movie/:id" element={<MovieDetails/>} />
 

</Routes>

</BrowserRouter>



    </>
  )
}

export default App
