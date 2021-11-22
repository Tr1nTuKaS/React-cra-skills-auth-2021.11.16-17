import { useRef, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useAuthCtx } from "../store/AuthContext";
import { loginUser } from "../utils/Fetch";
import { useQuery } from "../utils/hooks";

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
`;

export const Form = styled.form`
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 5px;
  display: inline-block;
`;
export const Input = styled.input`
  font-size: 1rem;
  padding: 0.3rem 1rem;
  display: block;
  margin-bottom: 1rem;
`;
export const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  font-size: 1rem;
`;

function LoginPage() {
  const registeredUser = useQuery("registeredUser");

  const { login } = useAuthCtx();
  const emailRef = useRef("");
  const passRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(" emailRef:", emailRef.current.value);
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if (!email || !password) return;
    const dataBackFromServer = await loginUser(email, password);
    if (dataBackFromServer.err) {
      toast.error(dataBackFromServer.err);
      setLoading(false);
      return;
    }
    if (dataBackFromServer.msg) {
      login(dataBackFromServer.token);
    }
    setLoading(false);
  };

  return (
    <main>
      <Title> {loading ? "Loading ..." : "Login"}</Title>
      <Form onSubmit={handleLogin}>
        <Input
          defaultValue={registeredUser ? registeredUser : "a@b.com"}
          ref={emailRef}
          type="text"
          placeholder="Enter your login"
        />
        <Input
          defaultValue="123456"
          ref={passRef}
          type="password"
          placeholder="Enter your pass"
        />
        <Button disable={loading}>Login</Button>
      </Form>
    </main>
  );
}

export default LoginPage;
