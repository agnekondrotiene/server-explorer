import { useFormik } from "formik";
import useTokenQuery from "../hooks/useTokenQuery";
import { TokenResponse } from "../types";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();

  const onLoginSuccess = (data: TokenResponse) => {
    console.log(data);
    localStorage.setItem("token", data.token);
    history.push("/servers");
    //  redirectas (react router)
  };

  const { mutate } = useTokenQuery(onLoginSuccess);

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
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center  w-1/2"
      >
        <label htmlFor="username">Username</label>
        <input
          className="border-b-2 mb-4 p-2 outline-none"
          value={formik.values.username}
          id="username"
          name="username"
          onChange={formik.handleChange}
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;