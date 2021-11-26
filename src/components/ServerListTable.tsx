import React, { useState } from "react";
import { Server } from "../types";
import sortLogo from "../assets/sort.png";
import sortByFn from "lodash/sortBy";

type Props = {
  servers: Server[];
};

const ServerListTable = ({ servers }: Props) => {
  const [sortBy, setSortBy] = useState("name");
  const [sortByDirection, setSortByDirection] = useState("asc");

  const handleSortBy = (name: string) => {
    setSortBy(name);
    setSortByDirection((current) => {
      if (current === "asc") {
        return "desc";
      } else {
        return "asc";
      }
    });
  };

  const sortedList: Server[] = sortByFn(servers, sortBy);
  let imgPosition: string = "";

  if (sortByDirection === "desc") {
    imgPosition = "transform rotate-180";
    sortedList.reverse();
  }

  return (
    <table className="w-full table-auto border-separate border border-gray-400">
      <thead>
        <tr>
          <th
            onClick={() => handleSortBy("name")}
            className="border border-red-100 hover:bg-red-50 hover:outline-none"
          >
            <span className="inline-flex items-center">
              <span> Server name</span>
              <span>
                <img
                  className={`${imgPosition} ml-2`}
                  src={sortLogo}
                  alt="Sort icon"
                  width="15"
                  height="15"
                />
              </span>
            </span>
          </th>
          <th
            onClick={() => handleSortBy("distance")}
            className="border border-red-100 hover:bg-red-50 hover:outline-none"
          >
            <span className="inline-flex items-center">
              <span> Distance</span>
              <span>
                <img
                  className={`${imgPosition} ml-2`}
                  src={sortLogo}
                  alt="Sort icon"
                  width="15"
                  height="15"
                />
              </span>
            </span>
          </th>
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
