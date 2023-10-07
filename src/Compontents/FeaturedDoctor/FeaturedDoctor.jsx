import React, { useState } from "react";
import Tab from "./Tab/Tab";
import Doctors from "./Doctors/Doctors";

export default function FeaturedDoctor() {
  const [search, setSearch] = useState("general");
  return (
    <div>
      <Tab search={search} setSearch={setSearch} />
      <Doctors />
    </div>
  );
}
