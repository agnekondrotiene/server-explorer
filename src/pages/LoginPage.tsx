import { useHistory } from "react-router";
import LoginForm from "../components/LoginForm";
import useAuth from "../core/auth/useAuth";

const LoginPage = () => {
  const history = useHistory();

  const { token } = useAuth();

  if (token) {
    history.push("/servers");
  }

  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-col justify-center align-middle h-full w-1/2">
        <h1 className="text-center text-3xl">Log in</h1>
        <LoginForm />
      </div>
      <div className="h-full w-1/2 bg-mountain bg-cover bg-no-repeat opacity-80"></div>
    </div>
  );
};

export default LoginPage;
