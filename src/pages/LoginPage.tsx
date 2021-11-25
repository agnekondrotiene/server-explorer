import LoginForm from "../components/LoginForm";

const LoginPage = () => {
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
