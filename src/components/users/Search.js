import React, { useState } from 'react';

const Search = ({ showClear, searchUsers, clearUsers, setAlert }) => {
  const [text, setText] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    if (text === '') {
      setAlert('Please enter name, surname or nickname', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };
  const onChange = event => setText(event.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="Search..." value={text} onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Search;
