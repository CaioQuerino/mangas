
function display(idSection) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var selectedSection = document.getElementById(idSection);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

function registrar(nome, email, senha) {
    localStorage.setItem('Nome', nome)
    localStorage.setItem('Email', email);
    localStorage.setItem('Senha', senha);
}

function validar() {

    document.getElementById('Registro').innerHTML = '';

    var nome = document.getElementById('idNome').value;
    var email = document.getElementById('idEmail').value;
    var senha = document.getElementById('idSenha').value;
    var c_senha = document.getElementById('conf_senha').value;
    var checkBox = document.getElementById('idCheckBox');

    var isValid = true;

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

    if (email === "") {
        document.getElementById('erroEmail').innerHTML = 'E-mail inválido';
        isValid = false;
    } else {
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
        document.getElementById('idCheckBox');
        document.getElementById('Registro').innerHTML = 'Registrado com sucesso!';
    }

    return isValid;
}
