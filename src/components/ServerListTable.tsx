import { useState } from "react";
import { Server } from "../types";
import sortByFn from "lodash/sortBy";
import ServerListTableHeaderCell from "./ServerListTableHeaderCell";

type Props = {
  servers: Server[];
};

const ServerListTable = ({ servers }: Props) => {
  const [sortBy, setSortBy] = useState("name");
  const [sortByDirection, setSortByDirection] = useState("asc");

  const handleSortBy = (newSortBy: string) => {
    setSortByDirection((current) => {
      if (current === "asc" && newSortBy === sortBy) {
        return "desc";
      } else {
        return "asc";
      }
    });
    setSortBy(newSortBy);
  };

  const sortedList: Server[] = sortByFn(servers, sortBy);

  if (sortByDirection === "desc") {
    sortedList.reverse();
  }

  return (
    <table className="w-full table-auto border-separate border border-gray-400">
      <thead>
        <tr>
          <ServerListTableHeaderCell
            onClick={handleSortBy}
            sortBy={sortBy}
            sortByDirection={sortByDirection}
            cellName="name"
          />
          <ServerListTableHeaderCell
            onClick={handleSortBy}
            sortBy={sortBy}
            sortByDirection={sortByDirection}
            cellName="distance"
          />
        </tr>
      </thead>
      <tbody>
        {sortedList.map((server) => {
          return (
            <tr key={server.name + server.distance}>
              <td className="border border-gray-300 p-2">{server.name}</td>
              <td className="border border-gray-300 text-center">
                {server.distance}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ServerListTable;
