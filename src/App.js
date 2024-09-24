import React, { useState } from 'react';

import './App.css'

function App() {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  
  // Function to handle textarea input
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Count unique words
  const getUniqueWordCount = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const uniqueWords = [...new Set(words)];
    return uniqueWords.length;
  };

  // Count characters excluding spaces and punctuation
  const getCharacterCount = () => {
    const characters = text.replace(/[^\w]/g, '');
    return characters.length;
  };

  // Handle string replacement
  const handleReplace = () => {
    const updatedText = text.split(searchText).join(replaceText);
    setText(updatedText);
  };

  return (
    <div className="App">
      <h1>Real-Time Text Analysis and String Replacement</h1>
      
      <textarea
        value={text}
        onChange={handleTextChange}
        rows="10"
        cols="50"
        placeholder="Type your text here..."
      />
      
      <div className="stats">
        <p>Unique Words: {getUniqueWordCount()}</p>
        <p>Characters (excluding spaces & punctuation): {getCharacterCount()}</p>
      </div>
      
      <div className="replace-section">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search string"
        />
        <input
          type="text"
          value={replaceText}
          onChange={(e) => setReplaceText(e.target.value)}
          placeholder="Replace with"
        />
        <button onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
}

export default App;
