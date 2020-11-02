export default {
  getQuestionsOrHighscores(arr) {
    return fetch(`http://localhost:8000/${arr}`).then((data) =>
      data.json()
    );
  },
  getQuestionAnswers(questionId) {
    return fetch(
      `http://localhost:8000/answers?question=${questionId}`
    ).then((data) => data.json());
  },
  postHighscore(obj) {
    return fetch(`http://localhost:8000/highscores/${obj}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  },
};
