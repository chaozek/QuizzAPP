import { Link, animateScroll as scroll } from "react-scroll";
import { getCategories } from "../redux/categoriesSlice";
import { getQuestions, setDefaultValues } from "../redux/questionsSlice";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import ParticlesBg from "particles-bg";
import React from "react";
import styled from "styled-components";
const Final = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.categories.categories);
  const questions = useSelector((state) => state.questions);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [clearAnswers, setClearAnswers] = useState([]);

  let percentage = (
    (parseFloat(questions?.score) / parseFloat(questions?.questions?.length)) *
    100
  ).toFixed(2);

  const handleClick = () => {
    dispatch(setDefaultValues());
    history.push("/");
  };
  useEffect(() => {
    if (questions.status === null && questions?.questions?.length <= 0) {
      history.push("/");
    }
  }, []);
  return (
    <Section>
      <Container>
        {questions?.status === "loading" ? (
          <Center>
            <img src={loading} style={{ width: "100%" }} />
          </Center>
        ) : (
          <Center>
            <H4>FINAL:</H4>
            <P>
              Score: {questions?.score} out of {questions?.questions?.length}
            </P>
            <P>Percentage: {percentage} %</P>
            <Button onClick={handleClick}>RESET</Button>
          </Center>
        )}
      </Container>
    </Section>
  );
};

export default Final;
const H4 = styled.h1`
  font-size: 40px;
  margin: 0;
  color: #3bb6d7;
  font-weight: black;
  ${mobile({ fontSize: "30px" })}
`;
const Center = styled.div``;
const Score = styled.div`
  color: #3bb6d7;
  font-weight: bold;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  width: 30%;
  color: black;
  padding: 30px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  min-height: 20vh;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

const P = styled.p`
  color: #3bb6d7;
  margin: 0;
  font-size: 25px;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  color: #e8f9f2;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin: 10px 0%;
  background-color: none;
  width: 46%;
  transition: all 100ms ease-in;
  color: #3bb6d7;
  :hover {
    box-shadow: #3bb6d7 0px 2px 8px 0px;
  }
`;
