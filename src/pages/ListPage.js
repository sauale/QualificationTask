import { useCallback, useEffect, useState } from "react";
import { Table, Button, Nav } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
const ListPage = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      setData(data);
    } catch (e) {
      console.log(e);
    }
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onClickHandler = (item) => {
    console.log(item.title);
    navigate("/DetailsPage", {
      state: {
        title: item.title,
        id: item.id,
        body: item.body,
      },
    });
  };

  return (
    <div>
      <h1>Qualification task Saulius Alekna</h1>

      <Button className="float-right btn-dark" href="/NewRecordPage">
        Prideti
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr onClick={() => onClickHandler(item)}>
                <th>{item.id}</th>
                <th>{item.title}</th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListPage;
