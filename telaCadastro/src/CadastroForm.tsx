import React, { useState } from 'react';
// Importa o arquivo CSS dedicado
import './CadastroForm.css'; 

// Interfaces para tipar o estado do formulário (TypeScript)
interface CadastroData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

const CadastroForm: React.FC = () => {
  const [formData, setFormData] = useState<CadastroData>({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });
  
  const [erro, setErro] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (erro) setErro('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      setErro('As senhas não coincidem!');
      return;
    }

    if (!formData.senha || !formData.confirmarSenha || !formData.email || !formData.nome) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }
    
    setErro('');
    console.log('Dados para Cadastro:', {
      nome: formData.nome,
      email: formData.email,
      senha: formData.senha 
    });
    
    alert('Cadastro simulado realizado com sucesso!');
  };

  return (
    // Usa nomes de classes que correspondem ao nosso CSS
    <div className="cadastro-page-wrapper">
        
      <div className="cadastro-form-container">
        <div className="cadastro-header">
          <span className="header-line"></span> 
          <h1 className="cadastro-title">Cadastre-se no EntrenovaFlix</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="cadastro-form">
          <input
            type="text"
            name="nome"
            placeholder="Seu Nome Completo"
            value={formData.nome}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Seu Melhor E-mail"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirme a Senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            className="form-input"
          />
          
          {erro && <p className="error-text">{erro}</p>}

          <button type="submit" className="button-primary">
            Cadastrar
          </button>

          <p className="login-link">
            Já tem conta? <a href="#" className="link-secondary">Faça Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;