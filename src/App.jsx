import './App.css';
import { useState, useEffect, useRef } from 'react'

function App() {
  const [users, setUsers] = useState(null);
  const inputEl = useRef(null);

  const handleInput = () => {
    console.log(inputEl.current.value);
  }

  async function fetchUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await response.json());
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  if (!users) {
    return "loading...";
  }

  return (
    <div className="App">
      <div className='main'>
        <h2>Search App</h2>
        <input ref={inputEl} type="text" onChange={handleInput} />
        <div className='content'>
          {users ? users.map((user) =>
            <div className='box' key={user.id}>
              <h3>{user.name}</h3>
              <hr />
              <p>{user.email}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
