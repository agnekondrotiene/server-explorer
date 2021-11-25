import React from "react";
import ServerItem from "../components/ServerItem";
import ServerListError from "../components/ServerListError";
import { useServersQuery } from "../hooks/useServersQuery";

type Server = {
  name: string;
  distance: number;
};

const ServersPage = () => {
  const { servers } = useServersQuery();
  console.log(servers);

  return (
    <div>
      <h1 className="text-center text-3xl p-4">Servers list</h1>
      <div className="w-1/2 h-1/2">
        {servers ? (
          servers.map((server: Server) => {
            return <ServerItem name={server.name} distance={server.distance} />;
          })
        ) : (
          <ServerListError />
        )}
      </div>
    </div>
  );
};

export default ServersPage;
