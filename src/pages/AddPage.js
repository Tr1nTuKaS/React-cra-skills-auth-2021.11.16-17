import styled from "styled-components";
import AddForm from "../components/AddForm";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
`;

function AddPage() {
  return (
    <main>
      <Title>Add</Title>
      <AddForm />
    </main>
  );
}

export default AddPage;
