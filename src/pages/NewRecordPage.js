import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const NewRecordPage = () => {
  const [title, setTitle] = useState();
  const [userId, setUserId] = useState();
  const [body, setBody] = useState();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const userIdChangeHandler = (event) => {
    setUserId(event.target.value);
  };
  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = {
      userId: userId,
      title: title,
      body: body,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <h1>NewRecordPage</h1>

      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div>
          <label>userId</label>
          <input
            type="number"
            value={userId}
            onChange={userIdChangeHandler}
          ></input>
        </div>
        <div>
          <label>body</label>
          <input type="text" value={body} onChange={bodyChangeHandler}></input>
        </div>

        <Button type="submit">Prideti</Button>
      </form>
      <Link to="/ListPage">Back to Table</Link>
    </div>
  );
};

export default NewRecordPage;
