// Simulando dados
    const agendamentosAdmin = [
      { id: 1, usuario: 'João', data: '10/07/2025', hora: '09:00', servico: 'Consulta', status: 'Pendente' },
      { id: 2, usuario: 'Maria', data: '12/07/2025', hora: '14:00', servico: 'Reunião', status: 'Confirmado' }
    ];

    const lista = document.getElementById('listaAgendamentosAdmin');

    agendamentosAdmin.forEach(ag => {
      const div = document.createElement('div');
      div.className = 'card-agendamento';
      div.innerHTML = `
        <h4>${ag.data} às ${ag.hora}</h4>
        <p><strong>Usuário:</strong> ${ag.usuario}</p>
        <p><strong>Serviço:</strong> ${ag.servico}</p>
        <p><strong>Status:</strong> ${ag.status}</p>
        <button onclick="confirmar(${ag.id})">Confirmar</button>
        <button onclick="excluir(${ag.id})">Excluir</button>
      `;
      lista.appendChild(div);
    });

    function confirmar(id) {
      Swal.fire('Confirmado!', `Agendamento ID ${id} confirmado com sucesso.`, 'success');
    }

    function excluir(id) {
      Swal.fire({
        title: 'Tem certeza?',
        text: `Excluir agendamento ID ${id}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, excluir',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Excluído!', `Agendamento ID ${id} foi removido.`, 'success');
        }
      });
    }