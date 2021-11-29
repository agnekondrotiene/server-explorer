import { useFormik } from "formik";
import useTokenMutation from "../hooks/useTokenMutation";
import { TokenResponse } from "../types";
import { useHistory } from "react-router-dom";
import LoginError from "./LoginError";

const LoginForm = () => {
  const history = useHistory();

  const onLoginSuccess = (data: TokenResponse) => {
    localStorage.setItem("token", data.token);
    history.push("/servers");
  };

  const { mutate, error } = useTokenMutation(onLoginSuccess);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center  rounded-lg  h-1/2 ">
      {error && <LoginError />}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center  w-1/2"
      >
        <label htmlFor="username">Username</label>
        <input
          className="border-b-2 mb-4 p-2 outline-none "
          value={formik.values.username}
          id="username"
          name="username"
          onChange={formik.handleChange}
          autoFocus
        ></input>
        <label htmlFor="password">Password</label>
        <input
          className="border-b-2 mb-8 p-2 outline-none"
          type="password"
          value={formik.values.password}
          id="password"
          name="password"
          onChange={formik.handleChange}
        ></input>

        <button
          type="submit"
          className="mt-8 p-2 border-2 rounded-lg border-current hover:bg-red-100 hover:outline-none"
          style={{ outline: "none" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
