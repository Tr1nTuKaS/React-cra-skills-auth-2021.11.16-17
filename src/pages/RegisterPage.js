import styled from "styled-components";
import RegisterForm from "../components/RegisterForm";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
`;

function RegisterPage() {
  return (
    <main>
      <Title>Register</Title>
      <RegisterForm />
    </main>
  );
}

export default RegisterPage;
