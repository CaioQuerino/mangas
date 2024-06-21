function display(idSection) {
    let sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    let selectedSection = document.getElementById(idSection);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

function registrar(nome, email, senha, c_senha) {
    localStorage.setItem('Nome', nome)
    localStorage.setItem('Email', email);
    localStorage.setItem('Senha', senha);
    localStorage.setItem('c_senha', c_senha);
}

function validar() {

    document.getElementById('Registro').innerHTML = '';

    let nome = document.getElementById('idNome').value;
    let email = document.getElementById('idEmail').value;
    let senha = document.getElementById('idSenha').value;
    let c_senha = document.getElementById('conf_senha').value;
    let checkBox = document.getElementById('idCheckBox');

    let isValid = true;

    if (!checkBox.checked) {
        document.getElementById('erroCheckBox').innerHTML = 'Você deve aceitar os termos de serviço';
        isValid = false;
    } else {
        document.getElementById('erroCheckBox').innerHTML = '';
    }

    if (c_senha !== senha) {
        document.getElementById('erroSenha').innerHTML = 'As senhas não são iguais';
        isValid = false;
    } else {
        document.getElementById('erroSenha').innerHTML = '';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('erroEmail').innerHTML = 'Email invalido';
      }
      else{
        document.getElementById('erroEmail').innerHTML = '';

      }

    if (nome === "") {
        document.getElementById('erroNome').innerHTML = 'Nome obrigatório';
        isValid = false;
    } else {
        document.getElementById('erroNome').innerHTML = '';
    }

    if (isValid) {
        registrar(nome, email, senha);
        document.getElementById('idNome').value = '';
        document.getElementById('idEmail').value = '';
        document.getElementById('idSenha').value = '';
        document.getElementById('conf_senha').value = '';
        document.getElementById('idCheckBox').value = '';
        document.getElementById('Registro').innerHTML = 'Registrado com sucesso!';
    }

    return isValid;
}

function login(email, senha, c_senha){
    let emailArm = localStorage.setItem('email');
    let senhaArm = localStorage.setItem('senha');
    let c_SenhaArm = localStorage.setItem('c_senha');

    if(emailArm == email && senhaArm == c_SenhaArm){

    }

}

const validateEmail = (event) => {
    let input = event.target;
    let email = input.value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  };