import sortLogo from "../assets/sort.png";
import styles from "./ServerListTableHeaderCell.module.css";

type Props = {
  onClick: (newSortBy: string) => void;
  sortBy: string;
  sortByDirection: string;
  cellName: string;
};

const ServerListTableHeaderCell = ({
  onClick,
  sortBy,
  sortByDirection,
  cellName,
}: Props) => {
  return (
    <th
      onClick={() => onClick(cellName)}
      className="border border-red-100 hover:bg-red-100 hover:outline-none"
    >
      <span className="inline-flex items-center">
        <span> {cellName}</span>
        <span>
          <img
            className={`${
              sortBy === cellName && sortByDirection === "desc"
                ? styles.imgRotate
                : ""
            } ${
              sortBy === cellName ? "opacity-100 animate-pulse" : "opacity-40"
            } ml-2 animate-pulse`}
            src={sortLogo}
            alt="Sort icon"
            width="15"
            height="15"
          />
        </span>
      </span>
    </th>
  );
};

export default ServerListTableHeaderCell;
