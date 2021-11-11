import axios from 'axios';
import { useEffect, useState } from 'react';

export default function GetCode() {
  const [code] = useState('bk888888');
  const [results, setResults] = useState([]);
  const [button, setButton] = useState(false);

  const reversButtonValue = () => {
    setButton(!button);
  };

  useEffect(() => {
    if (button === true) {
      axios
        .get('http://localhost:5050/code')
        .then(({ data }) => {
          setResults(data);
        })
        .catch();
    }
  }, [button]);

  return (
    <>
      <button type="button" value={button} onClick={reversButtonValue}>
        Getcode
      </button>
      <div>
        {button}
        {code}
        {results.map((result) => {
          return <div>{result.value}</div>;
        })}
      </div>
    </>
  );
}
