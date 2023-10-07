import React, { useState } from "react";
import Tab from "./Tab/Tab";

export default function FeaturedDoctor() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Tab search={search} setSearch={setSearch} />
    </div>
  );
}
