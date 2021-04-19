const questionsService = require("../services/questions-service")

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        questionsService.findAllQuestions()
            .then(questions => res.send(questions))
    }

    const findQuestionsForQuiz = (req, res) => {
        questionsService.findQuestionsForQuiz(req.params['qid'])
            .then(questions => res.send(questions))
    }

    app.get("/api/questions", findAllQuestions)
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz)
}