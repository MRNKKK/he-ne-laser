import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LanguageProvider } from './providers/LanguageContext';
import { DistanceProvider } from './providers/DistanceContext';
import { TurnedProvider } from './providers/TurnedContext';
import React, { useContext } from 'react';

import Header from './components/Header/Header';
import LanguageButton from './components/LanguageButton/LanguageButton';
import MainPart from './components/MainPart/MainPart';
import TheoreticalPart from './components/TheoreticalPart/TheoreticalPart';
import TestingPart from './components/TestingPart/TestingPart';
import LanguageContext from './providers/LanguageContext';

import './App.css';

function HomePage() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="home-page">
      <div className="info-container">
        <div className="info-block">
          <h2><b>{isEnglish ? 'Purpose of the Work' : 'Мета роботи'}</b></h2>
          <p>
            {isEnglish ? '1. Study the structure and principle of operation of an optical quantum generator - a gas laser' : '1. Вивчити будову і принцип дії оптичного квантового генератора - газового лазера'}
          </p>
          <p>
            {isEnglish ? '2. Learn how to use a gas laser, determine the wavelength and energy of a laser quantum using a diffraction grating' : '2. Навчитися користуватися газовим лазером, визначити довжину хвилі та енергію кванта лазерного випромінювання за допомогою дифракційної решітки'}
          </p>
          <h2><b>{isEnglish ? 'Equipment and Materials' : 'Обладнання і матеріали'}</b></h2>
          <p>
            {isEnglish ? '1. Gas helium-neon laser type LG-209 with power supply unit' : '1. Газовий гелій-неоновий лазер типу ЛГ-209 з блоком живлення'}
          </p>
          <p>
            {isEnglish ? '2. Diffraction grating' : '2. Дифракційна решітка'}
          </p>
          <p>
            {isEnglish ? '3. Optical bench with measuring ruler' : '3. Оптична лава з вимірювальною лінійкою'}
          </p>
          <p>
            {isEnglish ? '4. Screen with a millimeter scale' : '4. Екран з міліметровою шкалою'}
          </p>
        </div>
      </div>

      <div className="buttons">
        <Link to="/theory">
          <button className="home-page-button">{isEnglish ? 'Theoretical information' : 'Теоретичні відомості'}</button>
        </Link>
        <Link to="/testing">
          <button className="home-page-button">{isEnglish ? 'Testing' : 'Тестування'}</button>
        </Link>
        <Link to="/practice">
          <button className="home-page-button">{isEnglish ? 'Practical Part' : 'Практична Частина'}</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <TurnedProvider>
        <DistanceProvider>
          <Router>
            <div className="App">
              <Header />
              <LanguageButton />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/theory" element={<TheoreticalPart />} />
                <Route path="/testing" element={<TestingPart />} />
                <Route path="/practice" element={<MainPart />} />
              </Routes>
            </div>
          </Router>
        </DistanceProvider>
      </TurnedProvider>
    </LanguageProvider>
  );
}

export default App;