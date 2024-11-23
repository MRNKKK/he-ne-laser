import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from '../../providers/LanguageContext';
import "./TestingPart.css";

const initialQuestions = [
  {
    id: 1,
    question: {
      ua: "Переходи атомів речовини з вищих енергетичних рівнів на нижчі супроводжуються...",
      en: "The transitions of atoms from higher energy levels to lower ones are accompanied by..."
    },
    options: [
      { value: "1", text: { ua: "збудженням атомів", en: "excitation of atoms" } },
      { value: "2", text: { ua: "випромінюванням квантів", en: "emission of quanta" } },
      { value: "3", text: { ua: "поглинанням енергії", en: "absorption of energy" } },
      { value: "4", text: { ua: "незмінним станом атомів", en: "unchanged state of atoms" } },
    ],
    correctAnswer: "2",
  },
  {
    id: 2,
    question: {
      ua: "Спонтанне випромінювання відбувається під впливом...",
      en: "Spontaneous emission occurs under the influence of..."
    },
    options: [
      { value: "1", text: { ua: "зовнішніх факторів", en: "external factors" } },
      { value: "2", text: { ua: "внутрішніх факторів", en: "internal factors" } },
      { value: "3", text: { ua: "фотонів", en: "photons" } },
      { value: "4", text: { ua: "електронів", en: "electrons" } },
    ],
    correctAnswer: "2",
  },
  {
    id: 3,
    question: {
      ua: "Спонтанне випромінювання має...",
      en: "Spontaneous emission has..."
    },
    options: [
      { value: "1", text: { ua: "випадковий характер", en: "random nature" } },
      { value: "2", text: { ua: "вимушений характер", en: "forced nature" } },
      { value: "3", text: { ua: "запрограмований характер", en: "programmed nature" } },
      { value: "4", text: { ua: "не має правильної відповіді", en: "no correct answer" } },
    ],
    correctAnswer: "1",
  },
  {
    id: 4,
    question: {
      ua: "Індуковане випромінювання відбувається під впливом...",
      en: "Induced emission occurs under the influence of..."
    },
    options: [
      { value: "1", text: { ua: "зовнішніх факторів", en: "external factors" } },
      { value: "2", text: { ua: "внутрішніх факторів", en: "internal factors" } },
      { value: "3", text: { ua: "незалежних факторів", en: "independent factors" } },
      { value: "4", text: { ua: "не має правильних відповідей", en: "no correct answers" } },
    ],
    correctAnswer: "1",
  },
  {
    id: 5,
    question: {
      ua: "Індуковане випромінювання відбувається під впливом...",
      en: "Induced emission occurs under the influence of..."
    },
    options: [
      { value: "1", text: { ua: "електронів", en: "electrons" } },
      { value: "2", text: { ua: "внутрішніх факторів", en: "internal factors" } },
      { value: "3", text: { ua: "незалежних факторів", en: "independent factors" } },
      { value: "4", text: { ua: "фотонів", en: "photons" } },
    ],
    correctAnswer: "4",
  },
  {
    id: 6,
    question: {
      ua: "Фотон індуктованого випромінювання співпадає з фотоном, який викликав дане випромінювання...",
      en: "The photon of induced emission coincides with the photon that caused the emission..."
    },
    options: [
      { value: "1", text: { ua: "тільки по частоті", en: "only in frequency" } },
      { value: "2", text: { ua: "тільки по фазі", en: "only in phase" } },
      { value: "3", text: { ua: "тільки по напрямку руху", en: "only in direction of motion" } },
      { value: "4", text: { ua: "по частоті, фазі і напрямку руху", en: "in frequency, phase, and direction of motion" } },
    ],
    correctAnswer: "4",
  },
  {
    id: 7,
    question: {
      ua: "Когерентне випромінювання передбачає, що фотон індуктованого випромінювання співпадає з фотоном, який викликав дане випромінювання...",
      en: "Coherent emission implies that the photon of induced emission coincides with the photon that caused the emission..."
    },
    options: [
      { value: "1", text: { ua: "тільки по частоті", en: "only in frequency" } },
      { value: "2", text: { ua: "тільки по фазі", en: "only in phase" } },
      { value: "3", text: { ua: "тільки по напрямку руху", en: "only in direction of motion" } },
      { value: "4", text: { ua: "по частоті, фазі і напрямку руху", en: "in frequency, phase, and direction of motion" } },
    ],
    correctAnswer: "4",
  },
  {
    id: 8,
    question: {
      ua: "Гелій-неоновий лазер відноситься до...",
      en: "The helium-neon laser belongs to..."
    },
    options: [
      { value: "1", text: { ua: "газових лазерів", en: "gas lasers" } },
      { value: "2", text: { ua: "кристалічних лазерів", en: "crystal lasers" } },
      { value: "3", text: { ua: "рідинних лазерів", en: "liquid lasers" } },
      { value: "4", text: { ua: "напівпровідникових лазерів", en: "semiconductor lasers" } },
    ],
    correctAnswer: "1",
  },
  {
    id: 9,
    question: {
      ua: "Активним елементом у гелій-неоновому лазері є...",
      en: "The active element in the helium-neon laser is..."
    },
    options: [
      { value: "1", text: { ua: "гелій і неон", en: "helium and neon" } },
      { value: "2", text: { ua: "гелій", en: "helium" } },
      { value: "3", text: { ua: "неон", en: "neon" } },
      { value: "4", text: { ua: "кисень", en: "oxygen" } },
    ],
    correctAnswer: "1",
  },
  {
    id: 10,
    question: {
      ua: "Монохроматичність випромінювання означає генерування хвилі певної...",
      en: "Monochromaticity of emission means generating a wave of a specific..."
    },
    options: [
      { value: "1", text: { ua: "амплітуди", en: "amplitude" } },
      { value: "2", text: { ua: "довжини", en: "wavelength" } },
      { value: "3", text: { ua: "фази", en: "phase" } },
      { value: "4", text: { ua: "швидкості", en: "speed" } },
    ],
    correctAnswer: "2",
  },
  {
    id: 11,
    question: {
      ua: "Монохроматичність випромінювання означає генерування хвилі певної...",
      en: "Monochromaticity of emission means generating a wave of a specific..."
    },
    options: [
      { value: "1", text: { ua: "амплітуди", en: "amplitude" } },
      { value: "2", text: { ua: "частоти", en: "frequency" } },
      { value: "3", text: { ua: "фази", en: "phase" } },
      { value: "4", text: { ua: "швидкості", en: "speed" } },
    ],
    correctAnswer: "2",
  },
  {
    id: 12,
    question: {
      ua: "При освітленні дифракційної решітки лазерним променем на екрані спостерігається дифракційна картина у вигляді...",
      en: "When a diffraction grating is illuminated by a laser beam, the diffraction pattern observed on the screen is..."
    },
    options: [
      { value: "1", text: { ua: "темних областей", en: "dark regions" } },
      { value: "2", text: { ua: "темних і світлих областей", en: "dark and light regions" } },
      { value: "3", text: { ua: "світлих областей", en: "light regions" } },
      { value: "4", text: { ua: "сірої області", en: "gray region" } },
    ],
    correctAnswer: "2",
  },
  {
    id: 13,
    question: {
      ua: "Період дифракційної решітки дорівнює ширині...",
      en: "The period of a diffraction grating equals the width of..."
    },
    options: [
      { value: "1", text: { ua: "штриха", en: "stripe" } },
      { value: "2", text: { ua: "щілини", en: "slit" } },
      { value: "3", text: { ua: "дифракційної решітки", en: "diffraction grating" } },
      { value: "4", text: { ua: "штриха і щілини", en: "stripe and slit" } },
    ],
    correctAnswer: "4",
  },
  {
    id: 14,
    question: {
      ua: "Світлі області дифракційної картини відповідають дифракційним...",
      en: "The light regions of the diffraction pattern correspond to the diffraction..."
    },
    options: [
      { value: "1", text: { ua: "максимумам", en: "maxima" } },
      { value: "2", text: { ua: "мінімумам", en: "minima" } },
      { value: "3", text: { ua: "нулям", en: "zeros" } },
      { value: "4", text: { ua: "одиницям", en: "ones" } },
    ],
    correctAnswer: "1",
  },
  {
    id: 15,
    question: {
      ua: "Темні області дифракційної картини відповідають дифракційним...",
      en: "The dark regions of the diffraction pattern correspond to the diffraction..."
    },
    options: [
      { value: "1", text: { ua: "максимумам", en: "maxima" } },
      { value: "2", text: { ua: "мінімумам", en: "minima" } },
      { value: "3", text: { ua: "нулям", en: "zeros" } },
      { value: "4", text: { ua: "одиницям", en: "ones" } },
    ],
    correctAnswer: "2",
  },
];

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

function TestingPart() {

  const { isEnglish } = useContext(LanguageContext);

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem("timeLeft");
    return savedTime ? parseInt(savedTime, 10) : 420;
  });

  const [attempts, setAttempts] = useState(() => {
    const savedAttempts = localStorage.getItem("attempts");
    return savedAttempts ? parseInt(savedAttempts, 10) : 1;
  });

  useEffect(() => {
    const randomQuestions = shuffleArray(initialQuestions)
      .slice(0, 10) 
      .map((question) => ({
        ...question,
        options: shuffleArray(question.options),
      }));
    setQuestions(randomQuestions);
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          localStorage.setItem("timeLeft", newTime);
          if (newTime <= 0) {
            clearInterval(timer);
            setIsFinished(true);
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, isFinished]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 10);
    }
  
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: {
        selectedAnswer,
        isCorrect: selectedAnswer === currentQuestion.correctAnswer,
      },
    });
  
    setAnsweredQuestions((prevAnswered) => prevAnswered + 1);
  
    if (currentQuestionIndex === questions.length - 1) {
      const totalScore = score + (selectedAnswer === currentQuestion.correctAnswer ? 10 : 0);
  
      const penalty = Math.max(0, attempts - 1);
      const finalScore = totalScore - penalty;
  
      const correctedFinalScore = Math.max(finalScore, 0);
      setScore(correctedFinalScore);
      setIsFinished(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const handleTestAgain = () => {
    const randomQuestions = shuffleArray(initialQuestions)
      .slice(0, 10) 
      .map((question) => ({
        ...question,
        options: shuffleArray(question.options),
      }));
    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setAnsweredQuestions(0);
    setIsFinished(false);
    setTimeLeft(420);
    localStorage.setItem("timeLeft", 420);

    const newAttempts = attempts >= 10 ? 1 : attempts + 1;
    setAttempts(newAttempts);
    localStorage.setItem("attempts", newAttempts);

    setScore(0);
  };

  if (questions.length === 0) {
    return <div>{isEnglish ? 'Load...' : 'Завантаження...'}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="testing-part">
      <h2 className="title">{isEnglish ? 'Testing' : 'Тестування'}</h2>
      <p className="timer">{isEnglish ? 'Time is running out:' : 'Залишилось часу:'} {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")} {isEnglish ? 'min' : 'хв'}</p>
      <p className="attempts">{isEnglish ? 'Number of attempts:' : 'Кількість спроб:'} {attempts}</p>
      {!isFinished ? (
        <div className="question-container">
          <p className="question-text">{currentQuestion.question[isEnglish ? 'en' : 'ua']}</p>
          <div className="options-container">
            {currentQuestion.options.map((option) => (
              <label key={option.value} className="option">
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option.value}
                  onChange={(e) => handleAnswer(e.target.value)}
                  checked={selectedAnswer === option.value}
                  className="radio-input"
                />
                {option.text[isEnglish ? 'en' : 'ua']}
              </label>
            ))}
          </div>

          <div className="button-container">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className="next-button"
            >
              {isEnglish ? 'Next question' : 'Наступне запитання'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <h3>{isEnglish ? 'Test completed!' : 'Тест завершено!'}</h3>
          <p>{isEnglish ? 'Your result is:' : 'Ваш результат:'} {score} {isEnglish ? 'percent' : '%'}</p>

          {score >= 60 ? (
            <div>
              <p>{isEnglish ? 'Congratulations, you have scored enough points. Take a screenshot of your results and proceed to the practice section or try to improve your score!' : 'Вітаю, ви набрали достатю кількість балів. Зробіть знімок екрану результатів та переходьте до практичної частини або спробуйте підвищити бал!'}</p>
              <Link to="/practice">
                <button className="next-button">{isEnglish ? 'Go to the practical part' : 'Перейти до практичної частини'}</button>
              </Link>
              <button onClick={handleTestAgain} className="next-button"> {isEnglish ? 'Try again' : 'Спробувати ще раз'}</button>
            </div>
          ) : (
            <div>
              <p>{isEnglish ? 'You scored too low. Read more about the theory and try again.' : 'Ви набрали малу кількість відповідей. Детальніше ознайомтесь з теоретичними відомостями та спробуйте знову.'}</p>
              <Link to="/theory">
                <button onClick={handleTestAgain} className="next-button">{isEnglish ? 'Go to theoretical information' : 'Перейти до теоретичних відомостей'}</button>
              </Link>
              <button onClick={handleTestAgain} className="next-button"> {isEnglish ? 'Try again' : 'Спробувати ще раз'}</button>
            </div>
          )}
                  <div className="button-container">
            <Link to="/">
              <button onClick={handleTestAgain} className="next-button">{isEnglish ? 'Go to the main page' : 'На головну'}</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestingPart;