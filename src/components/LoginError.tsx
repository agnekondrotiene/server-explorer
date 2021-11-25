import React from "react";

const LoginError = () => {
  return (
    <div className="w-10px h-10px bg-red-100 z-30 border-2 border-red-500 rounded-lg p-3 ">
      <p>The User Name or Password entered is incorrect. Please try again.</p>
    </div>
  );
};

export default LoginError;
