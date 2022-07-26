import { Route, Routes, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import AdminMain from "./pages/AdminMain";
import Login from './pages/Login';
import StudentMain from "./pages/StudentMain";
import Register from "./pages/Register";

function App() {
  const token = localStorage.getItem("token");
  let user='';
   token ? user = jwt_decode(token):user=null;

   const userRole = () =>{
    let role = "";
    if(user && user.accountType === 'admin') role = "admin"
    
    if(user && user.accountType === 'student') role = "student"

    return role;
  }


  return (
    <Routes>
		 {userRole() === "admin" &&
      <Route path="/" exact element={<AdminMain/>}/>}
      
      {userRole() === "student" &&
       <Route path="/" exact element={user.status?<StudentMain/>:<Register/>}
      />}
			<Route path="/login" exact element={user ? <Navigate replace to="/"/>:<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
  );
}

export default App;
