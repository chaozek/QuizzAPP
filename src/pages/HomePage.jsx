import { Link, animateScroll as scroll } from "react-scroll";
import { getCategories } from "../redux/categoriesSlice";
import { getQuestions } from "../redux/questionsSlice";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import ParticlesBg from "particles-bg";
import React from "react";
import styled from "styled-components";
const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.categories.categories);
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    difficulty: "",
    category: "",
    type: "",
    count: 1,
  });
  const defaultDifficulty = [
    { id: 1, difficulty: "easy" },
    { id: 2, difficulty: "medium" },
    { id: 3, difficulty: "hard" },
  ];
  const defaultTypes = [
    { id: 1, type: "Multi Choice", value: "multiple" },
    { id: 2, type: "True / False", value: "boolean" },
  ];
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const handleSubmit = () => {
    if (
      values.difficulty.length <= 0 ||
      values.category.length <= 0 ||
      values.type.length <= 0
    ) {
      setError("All fields must have be filled");
    } else if (values.count <= 1) {
      setError("Question count must be higher than 1");
    } else {
      dispatch(getQuestions(values));
      history.push("/questions");
    }
  };
  return (
    <Section>
      <Container>
        <H1>Options</H1>
        <Form>
          <Select onChange={(e) => handleChange(e)} name="difficulty" required>
            <Option value="">Select difficulty </Option>
            {defaultDifficulty.map((difficulty) => (
              <Option key={difficulty.id} value={difficulty.difficulty}>
                {difficulty.difficulty}
              </Option>
            ))}
          </Select>
          <Select name="category" onChange={(e) => handleChange(e)} required>
            <Option value="">Select Category </Option>
            {categories?.map((category) => (
              <Option key={category.id} value={category.id}>
                {category.name}
              </Option>
            ))}
          </Select>
          <Select name="type" onChange={(e) => handleChange(e)} required>
            <Option>Select Type</Option>
            {defaultTypes.map((type) => (
              <Option key={type.id} value={type.value}>
                {type.type}
              </Option>
            ))}
          </Select>
          <Inputs>
            <Input
              required
              onChange={(e) => handleChange(e)}
              type="number"
              value={values.count}
              placeholder="Select"
              name="count"
              min={1}
              max={50}
            />
          </Inputs>
          {error && <Error> {error}</Error>}
        </Form>
        <Button onClick={handleSubmit}>Submit</Button>
      </Container>
    </Section>
  );
};

export default HomePage;

const H1 = styled.h1`
  font-size: 70px;
  margin: 0;
  color: #3bb6d7;
  font-weight: black;
  ${mobile({ fontSize: "30px" })}
`;
const H2 = styled.h2`
  margin: 0;
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 5rem;
`;
const Form = styled.form`
  width: 100%;
`;
const Error = styled.div`
  margin-bottom: 1rem;
  background-color: #f2bab9;
  color: #da3534;
  border: 1px solid #da3534;
  padding: 1rem;
  font-weight: bold;
  border-radius: 10px;
`;
const Input = styled.input`
  width: 100%;
  border: gray solid 1px;
  padding: 10px;
  margin-bottom: 1.5rem;
  background-color: white;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  color: black;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
`;
const Select = styled.select`
  width: 100%;
  border: gray solid 1px;
  padding: 10px;
  margin-bottom: 1.5rem;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  color: black;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
`;
const Option = styled.option`
  border: none;
  padding: 20px;
  font-size: 16px;

  color: black;
`;
const Inputs = styled.div`
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  width: 30%;
  color: black;
  padding: 30px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
  margin: 0px 20px;
`;
const P = styled.p`
  max-width: 800px;
  color: black;
  font-size: 25px;
`;
const Logo = styled.img`
  width: 250px;
  opacity: 90%;
`;
const Button = styled.button`
  background-color: #3bb6d7;
  border: none;
  padding: 15px 20px;
  width: 200px;
  color: #e8f9f2;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
`;
