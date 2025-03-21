import React from "react";

const WinGrid = ({ where }) => {
  const pos_class =
    where[where.length - 1] === "0"
      ? "top"
      : where[where.length - 1] === "1"
      ? "middle"
      : "bottom";

  const direction = where.slice(0, 3);

  const animate = async () => {
    let id;
    if (where === "leading" || where === "non_leading")
      id = `win_line_${where}`;
    else id = `win_line_${direction}`;
    document.querySelector(".win_line").setAttribute("id", id);
  };

  setTimeout(animate, 10); // this in timeout so that the element gets rendered first and then the function gets called.

  return (
    <div className={`win_grid ${pos_class}`}>
      {(direction === "row" || direction === "col") && (
        <div id={`win_line_parent_${direction}`}>
          <div className="win_line"></div>
        </div>
      )}

      {where === "leading" && (
        <div id="win_line_parent_leading">
          <div className="win_line"></div>
        </div>
      )}

      {where === "non_leading" && (
        <div id="win_line_parent_non_leading">
          <div className="win_line"></div>
        </div>
      )}
    </div>
  );
};

export default WinGrid;
