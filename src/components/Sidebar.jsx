import React from "react";
import Categories from "./Categories";

const Sidebar = () => {
  return (
    <aside className="sticky top-8 flex flex-col items-center">
      <Categories />
    </aside>
  );
};

export default Sidebar;
