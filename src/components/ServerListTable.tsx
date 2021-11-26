import React from "react";
import { Server } from "../types";

type Props = {
  servers: Server[];
};

const ServerListTable = ({ servers }: Props) => {
  return (
    <table className="w-full table-auto border-separate border border-gray-400">
      <tr>
        <th className="border border-red-100">Server name</th>
        <th className="border border-red-100">Distance</th>
      </tr>
      {servers.map((server) => {
        return (
          <tr>
            <td className="border border-gray-300 p-2">{server.name}</td>
            <td className="border border-gray-300 text-center">
              {server.distance}
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default ServerListTable;
