const quizService = require('../services/quiz-service')

module.exports = (app) => {

    const findAllQuizzes = (req, res) => {
        res.send(quizService.findAllQuizzes())
    }

    const findQuizById = (req, res) => {
        res.send(quizService.findQuizById(req.params['qid']))
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qid', findQuizById)
}