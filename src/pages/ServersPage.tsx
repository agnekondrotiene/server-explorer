import { useHistory } from "react-router";
import ServerListTable from "../components/ServerListTable";
import useAuth from "../core/auth/useAuth";
import { useServersQuery } from "../hooks/useServersQuery";

const ServersPage = () => {
  const history = useHistory();
  const { setToken } = useAuth();
  const { servers, isLoading } = useServersQuery();

  const onClick = () => {
    localStorage.removeItem("token");
    setToken(null);
    history.push("/");
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <div className="w-3/5 h-full flex flex-col items-center">
        <button
          onClick={onClick}
          className="self-end w-1/5 mt-8 p-2 border-2 rounded-lg border-current hover:bg-red-100 hover:outline-none"
          style={{ outline: "none" }}
        >
          Log out
        </button>
        <h1 className="text-center text-3xl p-4">Servers list</h1>
        {!isLoading && servers && Boolean(servers.length) ? (
          <ServerListTable servers={servers} />
        ) : (
          <p>Sorry, no info available!</p>
        )}
      </div>
    </div>
  );
};

export default ServersPage;
