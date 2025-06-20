import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";


function Login() {

    const { handleLogin } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLoginUser = () => {
        handleLogin( email, password);
        console.log( email, password)
    }

  return (
    <div>
        <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            type="password" 
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => handleLoginUser()}>Criar conta</button>

    </div>
  )
}

export default Login;