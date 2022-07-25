import { Route, Routes, Navigate } from "react-router-dom";
import AdminMain from "./pages/AdminMain";
import Login from './pages/Login';
import StudentMain from "./pages/StudentMain";

function App() {
  const user = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  return (
    <Routes>
			{user && 
         userRole === 'admin'
         && <Route path="/" exact element={<AdminMain/>}
      />}
      {user && 
         userRole === 'student'
         && <Route path="/" exact element={<StudentMain/>}
      />}
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
  );
}

export default App;
