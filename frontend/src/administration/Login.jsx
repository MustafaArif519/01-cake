import { useState } from 'react';

function Login ({token, recievedToken, onPage}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log('login prop loaded');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/dj-rest-auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Save the token to local storage
        recievedToken(data.key);
        
        // TODO: Use the token for authenticated requests
        console.log('Login successful. Token:', data.key);
      } else {
        // Login failed, handle the error
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      { !token && <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form> }
    </>
  );
}

export default Login;
