import { mobile } from "../responsive";
import { setScore } from "../redux/questionsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import React from "react";
import loading from "../imgs/loading.gif";
import parse from "html-react-parser";
import styled from "styled-components";
const Questions = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.categories.categories);
  const questions = useSelector((state) => state.questions);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [clearAnswers, setClearAnswers] = useState([]);
  let clearArrAnswers = [];
  useEffect(() => {
    const correctAnswer = String(
      questions?.questions[questionNumber]?.correct_answer
    );
    const answers = questions?.questions[questionNumber]?.incorrect_answers;
    clearArrAnswers = Object.assign([], answers);
    const randomPositionInArrayForCorrectAnswer =
      Math.floor(Math.random() * (clearArrAnswers.length - 0 + 1)) + 0;
    clearArrAnswers?.splice(
      randomPositionInArrayForCorrectAnswer,
      0,
      correctAnswer
    );
    setClearAnswers(clearArrAnswers);
  }, [questionNumber, questions]);

  useEffect(() => {
    if (questions.status === null && questions?.questions?.length <= 0) {
      history.push("/");
    }
  }, []);

  const handleClick = (e) => {
    if (e.target.value === questions.questions[questionNumber].correct_answer) {
      dispatch(setScore());
    }

    if (questionNumber < questions.questions?.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      history.push("/final");
    }
  };

  return (
    <Section>
      <Container>
        {questions.status === "loading" ? (
          <Center>
            <img src={loading} style={{ width: "100%" }} />
          </Center>
        ) : (
          <Center>
            <P>
              Question {questionNumber + 1} out of{" "}
              {questions?.questions?.length}
            </P>
            <H4>
              {questions?.questions[questionNumber]?.question.length > 0 &&
                parse(questions?.questions[questionNumber]?.question)}
            </H4>
            {clearAnswers?.map((answer, i) => (
              <Button key={i} onClick={(e) => handleClick(e)} value={answer}>
                {answer.length > 0 && parse(answer)}
              </Button>
            ))}

            <Score>Score: {questions.score}</Score>
          </Center>
        )}
      </Container>
    </Section>
  );
};

export default Questions;
const H4 = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #3bb6d7;
  font-weight: black;
  ${mobile({ fontSize: "30px" })}
  margin-bottom: 2rem;
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
  margin: 10px 2%;
  background-color: none;
  width: 46%;
  transition: all 100ms ease-in;
  color: #3bb6d7;
  :hover {
    box-shadow: #3bb6d7 0px 2px 8px 0px;
  }
`;
