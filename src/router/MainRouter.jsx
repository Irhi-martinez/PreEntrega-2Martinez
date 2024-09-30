import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import {Home, ItemDetail} from "../Pages";
import { NavBar } from "../components";

export const MainRouter = () => {
  return (
   <Router>
      <NavBar />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/item/:id" element={<ItemDetail />} />
    <Route path="/Categoty:id" element={<Category />} />
    </Routes>
    </Router>
  );
};
