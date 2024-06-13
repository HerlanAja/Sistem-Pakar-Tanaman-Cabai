import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import HomePage from './components/Home/HomePage';
import DiagnosisForm from './components/Diagnosis/DiagnosisForm';
import DiagnosisResult from './components/Diagnosis/DiagnosisResult';
import DiseaseList from './components/DiseaseInfo/DiseaseList';
import DiseaseDetail from './components/DiseaseInfo/DiseaseDetail';
import { DiagnosisProvider } from './context/DiagnosisContext';
import './index.css';

const App = () => {
  const [result, setResult] = useState(null);

  const rules = [
    {
      disease: 'Penyakit Layu Bakteri',
      symptoms: ['G001', 'G002', 'G003'],
      solution: 'Menggunakan bakterisida untuk mengendalikan perkembangan bakteri, serta membakar tanaman yang terinfeksi untuk mencegah penyebaran lebih lanjut.'
    },
    {
      disease: 'Penyakit Bercak Daun',
      symptoms: ['G004', 'G005'],
      solution: 'Menyemprotkan fungisida atau bakterisida yang sesuai untuk mengendalikan pertumbuhan patogen, serta membakar tanaman yang terinfeksi untuk mencegah penyebaran lebih lanjut.'
    },
    {
      disease: 'Penyakit Busuk Buah',
      symptoms: ['G006', 'G007', 'G008'],
      solution: 'Memangkas bagian tanaman yang terinfeksi untuk menghentikan penyebaran penyakit lebih lanjut. Selain itu, memperbaiki praktik sanitasi dan mengurangi kelembaban di sekitar tanaman dapat membantu mencegah penyakit ini.'
    },
    {
      disease: 'Penyakit Layu Fusarium',
      symptoms: ['G001', 'G009', 'G010', 'G011'],
      solution: 'Menggunakan fungisida yang efektif untuk mengendalikan infeksi jamur Fusarium, serta membakar tanaman yang terinfeksi untuk mencegah penyebaran lebih lanjut.'
    },
  ];

  const handleResult = (disease, solution) => {
    setResult({ disease, solution });
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <Router>
      <DiagnosisProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            <Switch>
              <Route path="/home" exact component={HomePage} />
              <Route path="/diagnosis">
                {!result ? (
                  <DiagnosisForm onResult={handleResult} rules={rules} />
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
