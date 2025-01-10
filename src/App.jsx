import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  console.log('current todos', todos);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setTodos((old) => {
      console.log('old', old);
      return [...old, text];
    });

    setText('');
  }

  function handleDelete(i) {
    setTodos((oldTodos) => {
      let updated = [...oldTodos];

      updated.splice(i, 1);

      return updated;
    });
  }

  return (
    <div
      style={{
        background: '#d66406',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Welcome Message */}
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome to this webpage</h1>

      <input
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Enter text"
        style={{
          padding: '8px',
          marginBottom: '10px',
          width: '100%',
          borderRadius: '4px',
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: '8px 16px',
          background: '#4CAF50',
          border: 'none',
          color: 'white',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>
      <br />
      <br />

      {todos.map((e, i) => {
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ flex: 1 }}>{e}</span>
            <button
              onClick={() => handleDelete(i)}
              style={{
                padding: '4px 8px',
                background: '#ff5722',
                border: 'none',
                color: 'white',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
