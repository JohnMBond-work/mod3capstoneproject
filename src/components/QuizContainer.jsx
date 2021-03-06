// this container handles the rendering of the trivia question/answers components, or the actual quiz.

import React from "react";
import Score from "./Score";
import Card from "./Card";

export default function QuizContainer(props) {
  // props.quizType from HomeScreen.jsx via Link tag, passed to Card.jsx
  return (
    <div style={{ margin: "100px auto" }}>
      <h1 className="title">{props.quizType} Quiz</h1>
      <Score />
      <Card quizType={props.quizType} />
    </div>
  );
}
