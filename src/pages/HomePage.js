import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuthCtx } from "../store/AuthContext";
import Loader from "./../components/Loader";
import { getToken } from "../utils/Fetch";
import { toast } from "react-hot-toast";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
`;
const CardLi = styled.h1`
  display: flex;
  border: 1px solid black;
  padding: 1rem;
`;
const List = styled.h1`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

function HomePage() {
  const [skillsArr, setSkillsArr] = useState([]);
  const { isLoggedIn, token } = useAuthCtx();
  const weHaveSkills = skillsArr.length > 0;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let mounted = true;
    if (mounted) {
      (async () => {
        const databack = await getToken(token);
        console.log("file: HomePage.js variable:databack:", databack);
        if (databack.err) {
          toast.error(databack.err);
        }
        if (Array.isArray(databack)) {
          setSkillsArr(databack);
        }
        setLoading(false);
      })();
    }
    //return()=>(mounted =false)
  }, []);

  if (!isLoggedIn) return <h2>Please Login</h2>;

  return (
    <main>
      <Title>Home</Title>

      <Loader show={loading} />

      {!weHaveSkills && !loading && (
        <h3>You have no skills, please add some </h3>
      )}

      {weHaveSkills && (
        <section>
          <h2>My skills</h2>
          <List>
            {skillsArr.map(({ title, description, id }) => (
              <CardLi key={id}>
                <h4>{title}</h4>
                <p>{description}</p>
              </CardLi>
            ))}
          </List>
        </section>
      )}
    </main>
  );
}

export default HomePage;
