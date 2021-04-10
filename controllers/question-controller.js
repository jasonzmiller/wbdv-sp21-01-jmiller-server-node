const questionService = require("../services/questions-service")
module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        const questions = questionService.findQuestionsForQuiz(quizId)
        res.send(questions)
    }
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz)
}