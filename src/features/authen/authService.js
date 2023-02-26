import axios from "axios";
// Register
const register = async (userData) => {
  const response = await axios.post(
    "https://authentication-01-6f287-default-rtdb.firebaseio.com/register.json",
    userData
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login
const login = async (userData) => {
  const response = await axios.post(
    "https://authentication-01-6f287-default-rtdb.firebaseio.com/login.json",
    userData
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
// Logout
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};
export default authService;
