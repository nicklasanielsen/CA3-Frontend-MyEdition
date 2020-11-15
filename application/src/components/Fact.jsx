import { useEffect, useState } from "react";
import facade from "../facade";
import { Alert } from "react-bootstrap";

export default function Fact() {
  const [getFact, setFact] = useState("Loading..");
  const [error, setError] = useState(null);

  useEffect(() => {
    facade
      .getFact()
      .then((fact) => {
        setFact(<li>{fact.fact}</li>);
      })
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => setError(e.message));
        }

        setError("An error occurred while processing your request.");
      });
  }, [setFact]);

  return (
    <>
      <h2>Fact!</h2>
      {error ? (
        <>{error && <Alert variant="danger">{error}</Alert>}</>
      ) : (
        <>
          <ul>{getFact}</ul>
        </>
      )}
    </>
  );
}
