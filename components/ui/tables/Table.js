import React from "react";
import { classnames } from "../../utils/helper";

export const TableHeader = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const Cell = ({ children, header, sort }) => {
  const cellType = header ? (
    <th className="cell-header">
      {children}
      {sort && <i className="sort"></i>}
    </th>
  ) : (
    <td className="cell">{children}</td>
  );

  return cellType;
};

function Table({ children, compact }) {
  return (
    <div className="table-wrapper">
      <table
        className={classnames({
          compact: compact
        })}
      >
        {children}
      </table>
    </div>
  );
}

export default Table;
