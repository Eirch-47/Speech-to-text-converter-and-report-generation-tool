import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './App3.css';

function App3() {
  const [text, setText] = useState('');
  const [pdf, setPdf] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleConvertToPdf = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    const pdfBlob = doc.output('blob');
    setPdf(pdfBlob);
  };

  const handleDownloadPdf = () => {
    const url = URL.createObjectURL(pdf);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text-to-pdf.pdf';
    a.click();
  };

  return (
    <div className="App">
      <h1>Text to PDF Converter</h1>
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={handleConvertToPdf}>Convert to PDF</button>
      {pdf && (
        <button onClick={handleDownloadPdf}>Download PDF</button>
      )}
      {pdf && (
        <embed src={URL.createObjectURL(pdf)} type="application/pdf" width="100%" height="500px" />
      )}
    </div>
  );
}

export default App3;