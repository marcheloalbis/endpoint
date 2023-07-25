const express = require('express');
const app = express();
const port = 5000;

const listaFuncionarios = [
    {
      ci: 6196343,
      nombreCompleto: "Marcelo Albis",
      cargo: "profesional"
    },
    {
      ci: 1234567,
      nombreCompleto: "Laura Gómez",
      cargo: "asistente"
    },
    {
      ci: 9876543,
      nombreCompleto: "Juan Pérez",
      cargo: "técnico"
    },
    {
      ci: 5647382,
      nombreCompleto: "Ana Rodríguez",
      cargo: "profesional"
    },
    {
      ci: 8765432,
      nombreCompleto: "Carlos Martínez",
      cargo: "gerente"
    },
    {
      ci: 4567890,
      nombreCompleto: "Sofía Rojas",
      cargo: "técnico"
    },
    {
      ci: 2468135,
      nombreCompleto: "Diego López",
      cargo: "asistente"
    },
    {
      ci: 1357924,
      nombreCompleto: "Elena Torres",
      cargo: "profesional"
    },
    {
      ci: 9876543,
      nombreCompleto: "Roberto Gutiérrez",
      cargo: "gerente"
    },
    {
      ci: 1010101,
      nombreCompleto: "Laura Salgado",
      cargo: "asistente"
    }
  ];

app.get('/funcionarios', (req, res) => {
  const response = {
    transaccion: true,
    mensajes: [
      {
        codigo: 200,
        mensaje: "success"
      }
    ],
    respuesta: {
      listaFuncionarios
    }
  };

  res.json(response);
});

app.get('/funcionarios/:carnet', (req, res) => {
  const carnetBuscado = parseInt(req.params.carnet);
  const funcionario = listaFuncionarios.find(funcionario => funcionario.ci === carnetBuscado);

  if (funcionario) {
    const response = {
      transaccion: true,
      mensajes: [
        {
          codigo: 200,
          mensaje: "success"
        }
      ],
      respuesta: funcionario
    };

    res.json(response);
  } else {
    const response = {
      transaccion: false,
      mensajes: [
        {
          codigo: 404,
          mensaje: "Funcionario no encontrado"
        }
      ],
      respuesta: null
    };

    res.status(404).json(response);
  }
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
