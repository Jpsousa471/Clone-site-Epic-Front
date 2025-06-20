import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";


function Cadastro() {

    const { createUser } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleCreateUser = () => {
        createUser(name, email, password);
        console.log(name, email, password)
    }

  return (
    <div>
        <input 
            type="text" 
            placeholder="Seu Nome" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
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

        <button onClick={() => handleCreateUser()}>Criar conta</button>

    </div>
  )
}

export default Cadastro;