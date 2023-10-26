import React, { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('https://registration.ghh.news:8888/real-estate/serviceController/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: username,
        password: password
      })
    });

    if (response.status === 200) {
      console.log('Login successful!');
    } else {
      console.error('Login failed.');
    }
  };
  
    //console.log('Submitted Data:', formData);
    //Add your authentication logic here
  

  return (
    <div className="login-page">
      
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='title'>Prestige Homes International</h3>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className='input'
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className='input'
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className='submit'>Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
