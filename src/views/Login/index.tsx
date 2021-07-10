import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import { toast } from 'react-toastify'

import { Container } from './style';
import { api } from '../../services/api'

interface IData{
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [ data, setData ] = useState<IData>({} as IData)
  const history = useHistory()

  const handleAuth = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api.post('session', data).then(
        res => {
          localStorage.setItem('@GamaAcademy', res.data.token)
          toast.success('Login realizado com sucesso!', {
            onClose: () => history.push('/dash')
          })
          history.push('/dash')
        }
      )
    }, [data, history]
  )

  return (
    <Container>
      <div>
        <h1>Login</h1>
        <div className="card">
          <form onSubmit={handleAuth}>
            <input
              type="text"
              placeholder="e-email"
              onChange={ e => setData({...data, email: e.target.value})}
            />
            <input 
              type="password" 
              placeholder="password"
              onChange={ e => setData({...data, password: e.target.value})}
            />
            <input type="submit" value="Logar" />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Login;