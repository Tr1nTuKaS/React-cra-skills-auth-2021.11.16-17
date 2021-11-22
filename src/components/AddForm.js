import { useState } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "../pages/LoginPage";
import { addSkill } from "../utils/Fetch";
import { toast } from "react-hot-toast";
import CountDown from "./CountDown";

const TextInput = styled.textarea`
  display: block;
`;

function AddForm() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const { title, description } = inputs;
    e.preventDefault();
    // const jsBack = await addSkill(title, description);
    const jsBack = await addSkill({ ...inputs });
    console.log("AddForm.js: jsBack ===", jsBack);
    if (jsBack.msg) {
      toast.success(`${title} skill added`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="title"
        onChange={handleInputs}
        value={inputs.title}
        type="text"
        placeholder="Title"
      />
      <TextInput
        name="description"
        cols="30"
        rows="10"
        onChange={handleInputs}
        value={inputs.description}
        placeholder="Description"
      ></TextInput>
      <Button type="submit"> create</Button>
      <CountDown />
    </Form>
  );
}

export default AddForm;
