import React, { useState, useEffect } from 'react';

const SearchBox = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filterSuggestions = (value) => {
    const filteredSuggestions = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterSuggestions(value);
  };

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div style={{ position: 'relative' , left:'20%' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      {showSuggestions && (
        <select
          style={{ position: 'absolute', top: '100%', left: 0, width: '100%' }}
          size={suggestions.length}
        >
          {suggestions.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SearchBox;
