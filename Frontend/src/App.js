import React, {useState, useEffect} from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
// import logoCadastro from '.assets/cadastro.png';

function App() {
  const baseUrl = "https://localhost:44373/api/alunos";

  const [data, setData] = useState([]);

  const pedidoGet = async() =>{
    await axios.get(baseUrl)
    .then(response =>{
      setData(response.data);
    }).catch(error =>{
      console.log(error);
    })
  }

  useEffect(() =>
   {pedidoGet();
  })

  return (
    <div className="App">
      <br />
      <h3>Cadastro de Alunos</h3>
      <header>
        {/* <img src={logoCadastro} alt="Cadastro" /> */}
        <button className="btn btn-success">Incluir Novo Aluno</button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>
          {data.map(aluno =>(
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <button className="btn btn-primary">Editar</button> {" "}
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;