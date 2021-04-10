const questions = require('./questions.json')

findQuestionsForQuiz = (quizId) => {
    return questions.filter(question => question.quizId === quizId)
}

module.exports = {
    findQuestionsForQuiz
}
