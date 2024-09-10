import React, { useState } from 'react';
import './PDFAnalysis.css';

export default function PDFAnalysisComponent() {
  const [query, setQuery] = useState('');
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('query', query);
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:8002/post/', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to fetch');

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      setError('An error occurred while processing your request.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>PDF Analysis</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query"
          required
        />
        <div className="file-upload">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept=".pdf"
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Analyze'}
          </button>
        </div>
      </form>

      {error && (
        <div className="error-alert">
          <strong>Error:</strong> {error}
        </div>
      )}

      {response && (
        <div className="result-card">
          <h2>Analysis Results</h2>
          <textarea
            value={response}
            readOnly
            className="result-textarea"
          />
        </div>
      )}
    </div>
  );
}