import CreateUser from "../components/methods/CreateUser";
import DeleteUser from "../components/methods/DeleteUser";
import UpdateUser from "../components/methods/UpdateUser";
import UserList from "../components/methods/UserList";


const UsersPage = () => {
  return (
   <>
   <CreateUser/><hr/>
   <UpdateUser/><hr/>
   <DeleteUser/><hr/>
   <UserList/>
   
   
   </>
  )
}

export default UsersPage;
