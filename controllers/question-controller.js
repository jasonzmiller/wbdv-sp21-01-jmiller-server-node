const questionsService = require("../services/questions-service")

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        questionsService.findAllQuestions()
            .then(questions => res.send(questions))
    }

    const findQuestionsById = (req, res) => {
        questionsService.findQuestionsById(req.params['questionId'])
            .then(question => res.send(question))
    }

    const findQuestionsForQuiz = (req, res) => {
        questionsService.findQuestionsForQuiz(req.params['quizId'])
            .then(questions => res.send(questions))
    }

    app.get('/api/questions', findAllQuestions)
    app.get('/api/questions/:questionId', findQuestionsById)
    app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz)
}