// Função para validar o nome
function isValidName(name) {
    return name.length > 0;
}

// Função para validar o telefone
function isValidPhone(phone) {
    const phonePattern = /^\(\d{2}\)\d{5}-\d{4}$/; // Verifica o padrão (00)00000-0000
    if (!phonePattern.test(phone)) return false;

    const digits = phone.replace(/\D/g, ''); // Remove caracteres não numéricos
    return digits !== '00000000000'; // Não permite telefone com "00"
}

// Aplica máscara de telefone no campo
document.getElementById('phone').addEventListener('input', function(event) {
    let phone = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    phone = phone.replace(/^(\d{2})(\d)/, '($1)$2'); // Adiciona os parênteses
    phone = phone.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço
    event.target.value = phone;
});

// Evento de envio do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validações
    if (!isValidName(name)) {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (!isValidPhone(phone)) {
        alert('Por favor, insira um telefone válido no formato (00)00000-0000.');
        return;
    }

    // Adiciona à tabela
    const tableBody = document.querySelector('#contactTable tbody');
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const phoneCell = document.createElement('td');
    phoneCell.textContent = phone;

    row.appendChild(nameCell);
    row.appendChild(phoneCell);
    tableBody.appendChild(row);

    // Limpa o formulário
    document.getElementById('contactForm').reset();
});
