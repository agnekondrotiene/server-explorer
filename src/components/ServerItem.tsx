import React from "react";
import server from "../assets/server.png";

type Server = {
  name: string;
  distance: number;
};

const ServerItem = ({ name, distance }: Server) => {
  return (
    <div className="flex w-30 h-10 mb-2 border-2 rounded-lg border-gray-100 p-2">
      <img src={server} alt="Server icon" />
      <li className="list-none font-mono xs pl-3">{`name: ${name} distance: ${distance}`}</li>
    </div>
  );
};

export default ServerItem;
