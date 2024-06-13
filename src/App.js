import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar'; // Gunakan Navbar yang baru dibuat
import HomePage from './components/Home/HomePage';
import DiagnosisForm from './components/Diagnosis/DiagnosisForm';
import DiagnosisResult from './components/Diagnosis/DiagnosisResult';
import DiseaseList from './components/DiseaseInfo/DiseaseList';
import DiseaseDetail from './components/DiseaseInfo/DiseaseDetail';
import { DiagnosisProvider } from './context/DiagnosisContext';
import DiagnosisService from './services/DiagnosisService';
import './index.css';

const App = () => {
  const [result, setResult] = useState(null);

  const handleResult = (symptoms) => {
    const diagnosedDisease = DiagnosisService.diagnose(symptoms);
    if (diagnosedDisease) {
      setResult({ disease: diagnosedDisease.name, solution: diagnosedDisease.solution });
    } else {
      setResult(null);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <Router>
      <DiagnosisProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar /> {/* Gunakan Navbar di sini */}
          <main className="flex-grow container mx-auto p-4">
            <Switch>
              <Route path="/home" exact component={HomePage} />
              <Route path="/diagnosis">
                {!result ? (
                  <DiagnosisForm onResult={handleResult} />
                ) : (
                  <DiagnosisResult disease={result.disease} solution={result.solution} onReset={handleReset} />
                )}
              </Route>
              <Route path="/disease-info" exact component={DiseaseList} />
              <Route path="/disease-info/:code" component={DiseaseDetail} />
            </Switch>
          </main>
          <Footer />
        </div>
      </DiagnosisProvider>
    </Router>
  );
};

export default App;
