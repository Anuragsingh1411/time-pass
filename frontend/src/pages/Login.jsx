// import React , { useState , useContext }from 'react'
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const { login } = React.useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
//             login(response.data);
//             navigate('/');
//         } catch (error) {
//             console.error('Login failed:', error);
//             alert('Login failed. Please check your credentials.');
//         }
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Login</h2>

//             <input type="email" placeholder='Email' value={email} 
//             onChange={(e) => setEmail(e.target.value)} required />

//             <input type="password" placeholder='Password' value={password} 
//             onChange={(e) => setPassword(e.target.value)} required />

//             <button type='submit'> Login </button>
//         </form>
//     );
// }

// export default Login;
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password
            });

            if (response.data) {
                console.log('Login successful:', response.data);
                login(response.data);
                navigate('/');
            }
        } catch (error) {
            console.error('Login error:', error.response?.data);
            setError(error.response?.data?.message || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                
                {error && (
                    <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
                        {error}
                    </div>
                )}

                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                    />
                </div>

                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;