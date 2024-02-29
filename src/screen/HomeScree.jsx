import Table from "../components/Table";
import { NavLink } from "react-router-dom";
function HomeScree() {
  return (
    <div>
      <div>
        <NavLink className="btn btn-success my-6 mx-5"
        to={'/create'}
        >CREATE</NavLink>
      </div>
      <Table />
    </div>
  );
}

export default HomeScree;
