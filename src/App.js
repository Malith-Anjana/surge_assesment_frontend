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


  return (
    <Routes>
			{user && 
         user.accountType === 'admin'
         && <Route path="/" exact element={<AdminMain/>}
      />}
      {user && 
         user.accountType === 'student'
         && <Route path="/" exact element={user.status?<StudentMain/>:<Register/>}
      />}
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
  );
}

export default App;
