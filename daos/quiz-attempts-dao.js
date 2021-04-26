const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    console.log(questions)

    let numberOfCorrectQuestions = 0

    questions.forEach(question => question.answer === question.correct ?
        numberOfCorrectQuestions++ : numberOfCorrectQuestions)
    

    return 100 * numberOfCorrectQuestions / questions.length
}

const generateId = () => {
    console.log(Date.now())
    return Date.now()
}

const findAttemptsForQuiz = (quizId) =>
    quizAttemptsModel
    .find({
        quiz: quizId
    })
    .populate('quiz', 'title _id')

const createAttempt = (quizId, attempt) =>
    quizAttemptsModel
    .create({
        quiz: quizId,
        _id: generateId(),
        score: scoreQuiz(attempt)
    })

module.exports = {
    findAttemptsForQuiz,
    createAttempt
}