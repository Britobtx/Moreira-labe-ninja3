import React from "react";
import styled from "styled-components";

const OrganizarInput = styled.div`
margin-top: 50px;
display:flex;
flex-direction:column;
justify-content:center;
width: 300px;
margin-left:500px;
background-color:yellow;
}


h5{
  text-align:center;
}
h1{
  text-align:center;
}
div{
  display:flex;
  justify-content:center;
}

button{
  text-align:center;
  margin:10px;
  width: 150px;
 }
 input{
   margin: 5px;
 }
 select{
   margin:5px;
 }
 `


export default class CadastrarJob extends React.Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: "",
    inputPagamento: [],
    inputData: "",
  };

  OnChangeTitulo = (event) => {
    this.setState({ inputTitulo: this.target.value });
  };
  OnChangeDescricao = (event) => {
    this.setState({ inputDescricao: this.target.value });
  };
  OnChangePreco = (event) => {
    this.setState({ inputDescricao: this.target.value });
  };
  OnChangePagamento = (event) => {
    this.setState({ inputPagamento: this.target.value });
  };
  OnChangeData = (event) => {
    this.setState({ inputData: this.target.value });
  };

  render() {
    return (
      <OrganizarInput>
        <h1>Cadastrar Job</h1>
        <input
          value={this.inputTitulo}
          placeholder={"Titulo"}
          onChange={this.OnChangeTitulo}
        />
        <input
          value={this.inputDescricao}
          placeholder={"Descrição"}
          onChange={this.onChangeDescricao}
        />
        <input
          value={this.inputPreco}
          type="number"
          placeholder={"Preço"}
          onChange={this.OnChangePreco}
        />
        <h5>Forma de Pagamento</h5>
        <select value={this.inputPagamento} onChange={this.OnChangePagamento}>
          <option>Cartão de crédito</option>
          <option>Paypal</option>
          <option>Débito</option>
          <option>Boleto</option>
          <option>Pix</option>
        </select>
        <input
          value={this.state.inputData}
          type="date"
          onChange={this.OnChangeData}
        />
        <button>Cadastrar Serviço</button>
      </OrganizarInput>
    );
  }
}