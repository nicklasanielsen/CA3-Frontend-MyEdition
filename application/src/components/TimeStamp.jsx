import { useEffect, useState } from "react";
import facade from "../facade";
import { Alert } from "react-bootstrap";

export default function TimeStamp() {
  const [getTimeStamp, setTimeStamp] = useState("Loading..");
  const [error, setError] = useState(null);

  useEffect(() => {
    facade
      .getTimeStamp()
      .then((timestamp) => {
        setTimeStamp(<li>{timestamp.timeStamp}</li>);
      })
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => setError(e.message));
        }

        setError("An error occurred while processing your request.");
      });
  }, [setTimeStamp]);

  return (
    <>
      <h2>TimeStamp!</h2>
      {error ? (
        <>{error && <Alert variant="danger">{error}</Alert>}</>
      ) : (
        <>
          <ul>{getTimeStamp}</ul>
        </>
      )}
    </>
  );
}
