document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('cadastroForm');
  const resultado = document.getElementById('resultado');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede recarregamento

    // Coleta dos dados
    const nomeCliente = document.getElementById('nomeCliente').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;

    const nomePet = document.getElementById('nomePet').value;
    const especie = document.getElementById('especie').value;
    const raca = document.getElementById('raca').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value;

    const tipoServico = document.getElementById('tipoServico').value;
    const observacao = document.getElementById('observacao').value;

    // Exibe no console também
    console.log('📋 Dados do Cadastro:');
    console.log({
      cliente: { nomeCliente, cpf, telefone, endereco, email },
      pet: { nomePet, especie, raca, idade, sexo },
      servico: { tipoServico, observacao }
    });

    // Monta a exibição na página
    resultado.innerHTML = `
      <br><h2>📋 Dados Enviados Com Sucesso!</h2></br>
      <div style="background: #d0e8f2; padding: 1rem; border-radius: 10px;">
        <h3>👤 Cliente</h3>
        <p><strong>Nome:</strong> ${nomeCliente}</p>
        <p><strong>CPF:</strong> ${cpf}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>E-mail:</strong> ${email}</p>

        <h3>🐶 Pet</h3>
        <p><strong>Nome:</strong> ${nomePet}</p>
        <p><strong>Espécie:</strong> ${especie}</p>
        <p><strong>Raça:</strong> ${raca}</p>
        <p><strong>Idade:</strong> ${idade} ano(s)</p>
        <p><strong>Sexo:</strong> ${sexo}</p>

        <h3>🛠️ Serviço</h3>
        <p><strong>Tipo:</strong> ${tipoServico}</p>
        <p><strong>Observação:</strong> ${observacao || 'Nenhuma'}</p>
      </div>
    `;

    // Rola a página até a div de resultado
    resultado.scrollIntoView({ behavior: "smooth" });
  });
});