import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Groups from "./pages/Groups";

export function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/groups" element={<Groups />} />
    </Routes>
  )
}