import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const DetailsPage = () => {
  const { state } = useLocation();

  const { title, id, body } = state;
  return (
    <div>
      <h1>Details Page</h1>
      <p style={{ textAlign: "left" }}>id : {id}</p>
      <p style={{ textAlign: "left" }}>Title : {title}</p>

      <p style={{ textAlign: "left" }}>Body : {body}</p>

      <Link to="/ListPage">Back to Table</Link>
    </div>
  );
};

export default DetailsPage;
