import React, { useState, useEffect } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  let request = {
    request: { type: "getCategoryList", devicetype: "I" },
    requestinfo: { pageNo: "1" },
  };
  useEffect(() => {
    setLoading(true);
    fetch("http://api.mifragroup.com/WebService/getResponse", {
      method: "post",
      crossDomain: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
      .then((res) => res.json())
      .then((result) => {
        setResponse(result.response.categoryList);
        setLoading(false);
      })
      .catch((ex) => {
        setLoading(false);
        setResponse([]);
      });
  }, []);
  let myStyle = {
    minHeight: "50vh",
    margin: "40px auto"
}
  return (
    <React.Fragment>
        <Container maxWidth="sm" style={myStyle}>
      <ul className="list-group list-group-horizontal">
        {loading !== true ? (
          response.length > 0 ? (
            response.map((obj) => (
              <li className="list-group-item" key={obj.categoryId}> <img className="d-block" src={obj.image} alt={obj.name} />
              </li>
            ))
          ) : (
            <Alert severity="error">This is an error message!</Alert>
          )
        ) : (
          <p>loading</p>
        )}
      </ul>
      </Container>
    </React.Fragment>
  );
};
export default Home;
