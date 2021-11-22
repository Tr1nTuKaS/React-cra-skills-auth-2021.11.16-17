import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function CountDown() {
  const history = useHistory();
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const counterTime = setInterval(() => {
      setTimer((prevStyate) => {
        return prevStyate > 0 ? prevStyate - 1 : prevStyate;
      });
    }, 1000);
    return () => clearInterval(counterTime);
  }, []);

  useEffect(() => {
    timer === 0 && history.push("/");
  }, [timer, history]);

  return <div>Redirecting in {timer}</div>;
}

export default CountDown;
