import Login from "../../../components/auth/Login";
import Nav from "../../../components/Nav/Nav";

const LoginPage = () => {
  return (
    <main style={{ backgroundColor: "#fffae6" }}>
      <Nav color='olive' barColor='oliveBar' />
      <Login />
    </main>
  );
};
export default LoginPage;
