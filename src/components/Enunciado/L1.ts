interface Exercicio {
  ex: string
  enunciado: string | string[]
  resposta: string | string[]
}

interface Grupo {
  id: string
  exercicios: Exercicio[]
}

interface QuestoesType {
  [licao: string]: {
    [grupo: string]: Grupo
  }
}

export const Questoes: QuestoesType = {
  L1: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L1-G1-EX-1.jpg',
          resposta: ['L1-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: 'L1-G1-EX-2.jpg',
          resposta: 'L1-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L1-G1-EX-3.jpg',
          resposta: 'L1-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L1-G1-EX-4.jpg',
          resposta: 'L1-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L1-G1-EX-5.jpg',
          resposta: 'L1-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L1-G1-EX-6.jpg',
          resposta: 'L1-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: './L1-G2-EX-1.jpg',
          resposta: 'L1-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L1-G2-EX-2.jpg',
          resposta: 'L1-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L1-G2-EX-3.jpg',
          resposta: 'L1-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L1-G2-EX-4.jpg',
          resposta: 'L1-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L1-G2-EX-5.jpg',
          resposta: 'L1-G2-RES-5.jpg'
        }
      ]
    }
  },
  L2: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L2-G1-EX-1.jpg',
          resposta: 'L2-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: ['L2-G1-EX-2.jpg'],
          resposta: 'L2-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L2-G1-EX-3.jpg',
          resposta: 'L2-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L2-G1-EX-4.jpg',
          resposta: 'L2-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L2-G1-EX-5.jpg',
          resposta: 'L2-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L2-G1-EX-6.jpg',
          resposta: 'L2-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L2-G1-EX-7.jpg',
          resposta: 'L2-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L2-G2-EX-1.jpg',
          resposta: 'L2-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L2-G2-EX-2.jpg',
          resposta: 'L2-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: ['L2-G2-EX-3.jpg'],
          resposta: 'L2-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L2-G2-EX-4.jpg',
          resposta: 'L2-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L2-G2-EX-5.jpg',
          resposta: 'L2-G2-RES-5.jpg'
        }
      ]
    }
  },
  L3: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L3-G1-EX-1.jpg',
          resposta: 'L3-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L3-G1-EX-2.jpg',
          resposta: 'L3-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L3-G1-EX-3.jpg',
          resposta: 'L3-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L3-G1-EX-4.jpg',
          resposta: 'L3-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L3-G1-EX-5.jpg',
          resposta: 'L3-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L3-G2-EX-1.jpg',
          resposta: 'L3-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L3-G2-EX-2.jpg',
          resposta: 'L3-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L3-G2-EX-3.jpg',
          resposta: 'L3-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L3-G2-EX-4.jpg',
          resposta: 'L3-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L3-G2-EX-5.jpg',
          resposta: 'L3-G2-RES-5.jpg'
        }
      ]
    }
  },
  L4: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L4-G1-EX-1.jpg',
          resposta: 'L4-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L4-G1-EX-2.jpg',
          resposta: 'L4-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L4-G1-EX-3.jpg',
          resposta: 'L4-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L4-G1-EX-4.jpg',
          resposta: ['L4-G1-RES-4.jpg', 'L4-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L4-G1-EX-5.jpg',
          resposta: 'L4-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L4-G1-EX-6.jpg',
          resposta: 'L4-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L4-G2-EX-1.jpg',
          resposta: 'L4-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L4-G2-EX-2.jpg',
          resposta: 'L4-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L4-G2-EX-3.jpg',
          resposta: 'L4-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L4-G2-EX-4.jpg',
          resposta: 'L4-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L4-G2-EX-5.jpg',
          resposta: 'L4-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L4-G2-EX-6.jpg',
          resposta: 'L4-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L4-G2-EX-7.jpg',
          resposta: 'L4-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L4-G2-EX-8.jpg',
          resposta: 'L4-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L4-G2-EX-9.jpg',
          resposta: 'L4-G2-RES-9.jpg'
        }
      ]
    }
  },
  L5: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L5-G1-EX-1.jpg',
          resposta: 'L5-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L5-G1-EX-2.jpg',
          resposta: 'L5-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L5-G1-EX-3.jpg',
          resposta: 'L5-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L5-G1-EX-4.jpg',
          resposta: ['L5-G1-RES-4.jpg', 'L5-G1-RES-4-parte-2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L5-G1-EX-5.jpg',
          resposta: ['L5-G1-RES-5.jpg', 'L5-G1-RES-5-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L5-G2-EX-1.jpg',
          resposta: 'L5-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L5-G2-EX-2.jpg',
          resposta: 'L5-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L5-G2-EX-3.jpg',
          resposta: 'L5-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L5-G2-EX-4.jpg',
          resposta: 'L5-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L5-G2-EX-5.jpg',
          resposta: 'L5-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L5-G2-EX-6.jpg',
          resposta: 'L5-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L5-G2-EX-7.jpg',
          resposta: 'L5-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L5-G2-EX-8.jpg',
          resposta: 'L5-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L5-G2-EX-9.jpg',
          resposta: 'L5-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L5-G2-EX-10.jpg',
          resposta: 'L5-G2-RES-10.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L5-G3-EX-1.jpg',
          resposta: 'L5-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L5-G3-EX-2.jpg',
          resposta: 'L5-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L5-G3-EX-3.jpg',
          resposta: ['L5-G3-RES-3.jpg', 'L5-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L5-G3-EX-4.jpg',
          resposta: ['L5-G3-RES-4.jpg', 'L5-G3-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L5-G3-EX-5.jpg',
          resposta: 'L5-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L5-G3-EX-6.jpg',
          resposta: 'L5-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L5-G3-EX-7.jpg',
          resposta: 'L5-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L5-G3-EX-8.jpg',
          resposta: 'L5-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L5-G3-EX-9.jpg',
          resposta: 'L5-G3-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L5-G3-EX-10.jpg',
          resposta: 'L5-G3-RES-10.jpg'
        }
      ]
    }
  },
  L6: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L6-G1-EX-1.jpg',
          resposta: 'L6-G1-RES-1.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L6-G2-EX-1.jpg',
          resposta: 'L6-G2-RES-1.jpg'
        }
      ]
    }
  },
  L7: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L7-G1-EX-1.jpg',
          resposta: 'L7-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L7-G1-EX-2.jpg',
          resposta: 'L7-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L7-G1-EX-3.jpg',
          resposta: 'L7-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L7-G1-EX-4.jpg',
          resposta: 'L7-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L7-G1-EX-5.jpg',
          resposta: 'L7-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L7-G1-EX-6.jpg',
          resposta: 'L7-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L7-G1-EX-7.jpg',
          resposta: 'L7-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L7-G2-EX-1.jpg',
          resposta: 'L7-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L7-G2-EX-2.jpg',
          resposta: 'L7-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L7-G2-EX-3.jpg',
          resposta: 'L7-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L7-G2-EX-4.jpg',
          resposta: ['L7-G2-RES-4.jpg', 'L7-G2-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L7-G2-EX-5.jpg',
          resposta: ['L7-G2-RES-5.jpg', 'L7-G2-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L7-G2-EX-6.jpg',
          resposta: 'L7-G2-RES-6.jpg'
        }
      ]
    }
  },
  L8: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L8-G1-EX-1.jpg',
          resposta: 'L8-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L8-G1-EX-2.jpg',
          resposta: ['L8-G1-RES-2.jpg', 'L8-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L8-G1-EX-3.jpg',
          resposta: 'L8-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L8-G1-EX-4.jpg',
          resposta: 'L8-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L8-G1-EX-5.jpg',
          resposta: 'L8-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L8-G1-EX-6.jpg',
          resposta: 'L8-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L8-G2-EX-1.jpg',
          resposta: 'L8-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L8-G2-EX-2.jpg',
          resposta: 'L8-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L8-G2-EX-3.jpg',
          resposta: 'L8-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L8-G2-EX-4.jpg',
          resposta: 'L8-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L8-G2-EX-5.jpg',
          resposta: 'L8-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L8-G2-EX-6.jpg',
          resposta: 'L8-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L8-G2-EX-7.jpg',
          resposta: ['L8-G2-RES-7.jpg', 'L8-G2-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L8-G2-EX-8.jpg',
          resposta: 'L8-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L8-G2-EX-9.jpg',
          resposta: 'L8-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L8-G2-EX-10.jpg',
          resposta: 'L8-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L8-G2-EX-11.jpg',
          resposta: ['L8-G2-RES-11.jpg', 'L8-G2-RES-11-parte2.jpg']
        },
        {
          ex: '12',
          enunciado: 'L8-G2-EX-12.jpg',
          resposta: [
            'L8-G2-RES-12.jpg',
            'L8-G2-RES-12-parte2.jpg',
            'L8-G2-RES-12-parte3.jpg'
          ]
        },
        {
          ex: '13',
          enunciado: 'L8-G2-EX-13.jpg',
          resposta: ['L8-G2-RES-13.jpg', 'L8-G2-RES-13-parte2.jpg']
        }
      ]
    }
  },
  L9: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L9-G1-EX-1.jpg',
          resposta: 'L9-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L9-G1-EX-2.jpg',
          resposta: 'L9-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L9-G1-EX-3.jpg',
          resposta: 'L9-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L9-G1-EX-4.jpg',
          resposta: 'L9-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L9-G1-EX-5.jpg',
          resposta: 'L9-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L9-G1-EX-6.jpg',
          resposta: 'L9-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L9-G1-EX-7.jpg',
          resposta: 'L9-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L9-G1-EX-8.jpg',
          resposta: 'L9-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L9-G1-EX-9.jpg',
          resposta: 'L9-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L9-G1-EX-10.jpg',
          resposta: 'L9-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L9-G1-EX-11.jpg',
          resposta: 'L9-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L9-G1-EX-12.jpg',
          resposta: 'L9-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L9-G1-EX-13.jpg',
          resposta: ['L9-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: 'L9-G1-EX-14.jpg',
          resposta: 'L9-G1-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: ['L9-G1-EX-15.jpg', 'L9-G1-EX-15-parte2.jpg'],
          resposta: 'L9-G1-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L9-G1-EX-16.jpg',
          resposta: 'L9-G1-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: ['L9-G1-EX-17.jpg', 'L9-G1-EX-17-parte2.jpg'],
          resposta: 'L9-G1-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L9-G1-EX-18.jpg',
          resposta: 'L9-G1-RES-18.jpg'
        },
        {
          ex: '19',
          enunciado: 'L9-G1-EX-19.jpg',
          resposta: 'L9-G1-RES-19.jpg'
        },
        {
          ex: '20',
          enunciado: 'L9-G1-EX-20.jpg',
          resposta: 'L9-G1-RES-20.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L9-G2-EX-1.jpg',
          resposta: 'L9-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L9-G2-EX-2.jpg',
          resposta: 'L9-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L9-G2-EX-3.jpg',
          resposta: 'L9-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L9-G2-EX-4.jpg',
          resposta: 'L9-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L9-G2-EX-5.jpg',
          resposta: 'L9-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L9-G2-EX-6.jpg',
          resposta: 'L9-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L9-G2-EX-7.jpg',
          resposta: 'L9-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L9-G2-EX-8.jpg',
          resposta: 'L9-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L9-G2-EX-9.jpg',
          resposta: 'L9-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L9-G2-EX-10.jpg',
          resposta: 'L9-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L9-G2-EX-11.jpg',
          resposta: 'L9-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L9-G2-EX-12.jpg',
          resposta: 'L9-G2-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L9-G2-EX-13.jpg',
          resposta: 'L9-G2-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L9-G2-EX-14.jpg',
          resposta: 'L9-G2-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L9-G2-EX-15.jpg',
          resposta: 'L9-G2-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L9-G2-EX-16.jpg',
          resposta: 'L9-G2-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L9-G2-EX-17.jpg',
          resposta: 'L9-G2-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L9-G2-EX-18.jpg',
          resposta: 'L9-G2-RES-18.jpg'
        },
        {
          ex: '19',
          enunciado: 'L9-G2-EX-19.jpg',
          resposta: 'L9-G2-RES-19.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L9-G3-EX-1.jpg',
          resposta: 'L9-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L9-G3-EX-2.jpg',
          resposta: 'L9-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L9-G3-EX-3.jpg',
          resposta: 'L9-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L9-G3-EX-4.jpg',
          resposta: [
            'L9-G3-RES-4.jpg',
            'L9-G3-RES-4-parte2.jpg',
            'L9-G3-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: 'L9-G3-EX-5.jpg',
          resposta: 'L9-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L9-G3-EX-6.jpg',
          resposta: ['L9-G3-RES-6.jpg', 'L9-G3-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L9-G3-EX-7.jpg',
          resposta: 'L9-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L9-G3-EX-8.jpg',
          resposta: 'L9-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L9-G3-EX-9.jpg',
          resposta: ['L9-G3-RES-9.jpg', 'L9-G3-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L9-G3-EX-10.jpg',
          resposta: 'L9-G3-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L9-G3-EX-11.jpg',
          resposta: 'L9-G3-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L9-G3-EX-12.jpg',
          resposta: 'L9-G3-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L9-G3-EX-13.jpg',
          resposta: 'L9-G3-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L9-G3-EX-14.jpg',
          resposta: 'L9-G3-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L9-G3-EX-15.jpg',
          resposta: 'L9-G3-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L9-G3-EX-16.jpg',
          resposta: 'L9-G3-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L9-G3-EX-17.jpg',
          resposta: 'L9-G3-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L9-G3-EX-18.jpg',
          resposta: 'L9-G3-RES-18.jpg'
        },
        {
          ex: '19',
          enunciado: 'L9-G3-EX-19.jpg',
          resposta: 'L9-G3-RES-19.jpg'
        },
        {
          ex: '20',
          enunciado: 'L9-G3-EX-20.jpg',
          resposta: 'L9-G3-RES-20.jpg'
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L9-G4-EX-1.jpg',
          resposta: 'L9-G4-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L9-G4-EX-2.jpg',
          resposta: 'L9-G4-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L9-G4-EX-3.jpg',
          resposta: 'L9-G4-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L9-G4-EX-4.jpg',
          resposta: 'L9-G4-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L9-G4-EX-5.jpg',
          resposta: 'L9-G4-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L9-G4-EX-6.jpg',
          resposta: 'L9-G4-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L9-G4-EX-7.jpg',
          resposta: 'L9-G4-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L9-G4-EX-8.jpg',
          resposta: 'L9-G4-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L9-G4-EX-9.jpg',
          resposta: ['L9-G4-RES-9.jpg', 'L9-G4-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L9-G4-EX-10.jpg',
          resposta: 'L9-G4-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L9-G4-EX-11.jpg',
          resposta: 'L9-G4-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L9-G4-EX-12.jpg',
          resposta: 'L9-G4-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L9-G4-EX-13.jpg',
          resposta: 'L9-G4-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L9-G4-EX-14.jpg',
          resposta: 'L9-G4-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L9-G4-EX-15.jpg',
          resposta: 'L9-G4-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L9-G4-EX-16.jpg',
          resposta: 'L9-G4-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L9-G4-EX-17.jpg',
          resposta: 'L9-G4-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L9-G4-EX-18.jpg',
          resposta: 'L9-G4-RES-18.jpg'
        },
        {
          ex: '19',
          enunciado: 'L9-G4-EX-19.jpg',
          resposta: ['L9-G4-RES-19.jpg', 'L9-G4-RES-19-parte2.jpg']
        },
        {
          ex: '20',
          enunciado: 'L9-G4-EX-20.jpg',
          resposta: ['L9-G4-RES-20.jpg', 'L9-G4-RES-20-parte2.jpg']
        }
      ]
    },
    grupo5: {
      id: '5',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L9-G5-EX-1.jpg',
          resposta: ['L9-G5-RES-1.jpg', 'L9-G5-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L9-G5-EX-2.jpg',
          resposta: 'L9-G5-RES-2.jpg'
        }
      ]
    }
  },
  L10: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L10-G1-EX-1.jpg',
          resposta: 'L10-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L10-G1-EX-2.jpg',
          resposta: ['L10-G1-RES-2.jpg', 'L10-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L10-G1-EX-3.jpg',
          resposta: 'L10-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L10-G1-EX-4.jpg',
          resposta: 'L10-G1-RES-4.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L10-G2-EX-1.jpg',
          resposta: 'L10-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L10-G2-EX-2.jpg',
          resposta: 'L10-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L10-G2-EX-3.jpg',
          resposta: 'L10-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L10-G2-EX-4.jpg',
          resposta: 'L10-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L10-G2-EX-5.jpg',
          resposta: 'L10-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L10-G2-EX-6.jpg',
          resposta: 'L10-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L10-G2-EX-7.jpg',
          resposta: 'L10-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L10-G2-EX-8.jpg',
          resposta: 'L10-G2-RES-8.jpg'
        }
      ]
    }
  },
  L11: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L11-G1-EX-1.jpg',
          resposta: 'L11-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L11-G1-EX-2.jpg',
          resposta: 'L11-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L11-G1-EX-3.jpg',
          resposta: 'L11-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L11-G1-EX-4.jpg',
          resposta: 'L11-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L11-G1-EX-5.jpg',
          resposta: 'L11-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L11-G1-EX-6.jpg',
          resposta: 'L11-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L11-G2-EX-1.jpg',
          resposta: ['L11-G2-RES-1.jpg', 'L11-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L11-G2-EX-2.jpg',
          resposta: 'L11-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L11-G2-EX-3.jpg',
          resposta: 'L11-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L11-G2-EX-4.jpg',
          resposta: 'L11-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L11-G2-EX-5.jpg',
          resposta: 'L11-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L11-G2-EX-6.jpg',
          resposta: 'L11-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L11-G2-EX-7.jpg',
          resposta: 'L11-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L11-G2-EX-8.jpg',
          resposta: 'L11-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L11-G2-EX-9.jpg',
          resposta: 'L11-G2-RES-9.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L11-G3-EX-1.jpg',
          resposta: 'L11-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L11-G3-EX-2.jpg',
          resposta: 'L11-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L11-G3-EX-3.jpg',
          resposta: 'L11-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L11-G3-EX-4.jpg',
          resposta: 'L11-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L11-G3-EX-5.jpg',
          resposta: 'L11-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L11-G3-EX-6.jpg',
          resposta: 'L11-G3-RES-6.jpg'
        }
      ]
    }
  },
  L12: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L12-G1-EX-1.jpg',
          resposta: 'L12-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L12-G1-EX-2.jpg',
          resposta: ['L12-G1-RES-2.jpg', 'L12-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L12-G1-EX-3.jpg',
          resposta: ['L12-G1-RES-3.jpg', 'L12-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L12-G1-EX-4.jpg',
          resposta: 'L12-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L12-G1-EX-5.jpg',
          resposta: 'L12-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L12-G1-EX-6.jpg',
          resposta: 'L12-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L12-G2-EX-1.jpg',
          resposta: 'L12-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L12-G2-EX-2.jpg',
          resposta: 'L12-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L12-G2-EX-3.jpg',
          resposta: 'L12-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L12-G2-EX-4.jpg',
          resposta: 'L12-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L12-G2-EX-5.jpg',
          resposta: ['L12-G2-RES-5.jpg', 'L12-G2-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L12-G2-EX-6.jpg',
          resposta: 'L12-G2-RES-6.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L12-G3-EX-1.jpg',
          resposta: 'L12-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L12-G3-EX-2.jpg',
          resposta: 'L12-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L12-G3-EX-3.jpg',
          resposta: 'L12-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L12-G3-EX-4.jpg',
          resposta: 'L12-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L12-G3-EX-5.jpg',
          resposta: 'L12-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L12-G3-EX-6.jpg',
          resposta: 'L12-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L12-G3-EX-7.jpg',
          resposta: 'L12-G3-RES-7.jpg'
        }
      ]
    }
  },
  L13: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L13-G1-EX-1.jpg',
          resposta: 'L13-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L13-G1-EX-2.jpg',
          resposta: 'L13-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L13-G1-EX-3.jpg',
          resposta: ['L13-G1-RES-3.jpg', 'L13-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L13-G1-EX-4.jpg',
          resposta: ['L13-G1-RES-4.jpg', 'L13-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L13-G1-EX-5.jpg',
          resposta: ['L13-G1-RES-5.jpg', 'L13-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L13-G1-EX-6.jpg',
          resposta: [
            'L13-G1-RES-6.jpg',
            'L13-G1-RES-6-parte2.jpg',
            'L13-G1-RES-6-parte3.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: 'L13-G1-EX-7.jpg',
          resposta: 'L13-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L13-G2-EX-1.jpg',
          resposta: 'L13-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L13-G2-EX-2.jpg',
          resposta: ['L13-G2-RES-2.jpg', 'L13-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L13-G2-EX-3.jpg',
          resposta: 'L13-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L13-G2-EX-4.jpg',
          resposta: 'L13-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L13-G2-EX-5.jpg',
          resposta: ['L13-G2-RES-5.jpg', 'L13-G2-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L13-G2-EX-6.jpg',
          resposta: [
            'L13-G2-RES-6.jpg',
            'L13-G2-RES-6-parte2.jpg',
            'L13-G2-RES-6-parte3.jpg',
            'L13-G2-RES-6-parte4.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: 'L13-G2-EX-7.jpg',
          resposta: 'L13-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L13-G2-EX-8.jpg',
          resposta: 'L13-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L13-G2-EX-9.jpg',
          resposta: 'L13-G2-RES-9.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L13-G3-EX-1.jpg',
          resposta: 'L13-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L13-G3-EX-2.jpg',
          resposta: ['L13-G3-RES-2.jpg', 'L13-G3-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L13-G3-EX-3.jpg',
          resposta: ['L13-G3-RES-3.jpg', 'L13-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L13-G3-EX-4.jpg',
          resposta: ['L13-G3-RES-4.jpg', 'L13-G3-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L13-G3-EX-5.jpg',
          resposta: ['L13-G3-RES-5.jpg', 'L13-G3-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L13-G3-EX-6.jpg',
          resposta: ['L13-G3-RES-6.jpg', 'L13-G3-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L13-G3-EX-7.jpg',
          resposta: [
            'L13-G3-RES-7.jpg',
            'L13-G3-RES-7-parte2.jpg',
            'L13-G3-RES-7-parte3.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: 'L13-G3-EX-8.jpg',
          resposta: [
            'L13-G3-RES-8.jpg',
            'L13-G3-RES-8-parte2.jpg',
            'L13-G3-RES-8-parte3.jpg',
            'L13-G3-RES-8-parte4.jpg'
          ]
        }
      ]
    }
  },
  L14: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L14-G1-EX-1.jpg',
          resposta: 'L14-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L14-G1-EX-2.jpg',
          resposta: 'L14-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L14-G1-EX-3.jpg',
          resposta: 'L14-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L14-G1-EX-4.jpg',
          resposta: 'L14-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L14-G1-EX-5.jpg',
          resposta: 'L14-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L14-G1-EX-6.jpg',
          resposta: 'L14-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L14-G1-EX-7.jpg',
          resposta: 'L14-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L14-G2-EX-1.jpg',
          resposta: 'L14-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L14-G2-EX-2.jpg',
          resposta: 'L14-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L14-G2-EX-3.jpg',
          resposta: ['L14-G2-RES-3.jpg', 'L14-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L14-G2-EX-4.jpg',
          resposta: ['L14-G2-RES-4.jpg', 'L14-G2-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L14-G2-EX-5.jpg',
          resposta: 'L14-G2-RES-5.jpg'
        }
      ]
    }
  },
  L15: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L15-G1-EX-1.jpg',
          resposta: 'L15-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L15-G1-EX-2.jpg',
          resposta: 'L15-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L15-G1-EX-3.jpg',
          resposta: 'L15-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L15-G1-EX-4.jpg',
          resposta: 'L15-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L15-G1-EX-5.jpg',
          resposta: 'L15-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L15-G1-EX-6.jpg',
          resposta: ['L15-G1-RES-6.jpg', 'L15-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L15-G1-EX-7.jpg',
          resposta: 'L15-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L15-G2-EX-1.jpg',
          resposta: 'L15-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L15-G2-EX-2.jpg',
          resposta: 'L15-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L15-G2-EX-3.jpg',
          resposta: ['L15-G2-RES-3.jpg', 'L15-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L15-G2-EX-4.jpg',
          resposta: 'L15-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L15-G2-EX-5.jpg',
          resposta: 'L15-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L15-G2-EX-6.jpg',
          resposta: 'L15-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L15-G2-EX-7.jpg',
          resposta: 'L15-G2-RES-7.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L15-G3-EX-1.jpg',
          resposta: ['L15-G3-RES-1.jpg', 'L15-G3-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L15-G3-EX-2.jpg',
          resposta: 'L15-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L15-G3-EX-3.jpg',
          resposta: ['L15-G3-RES-3.jpg', 'L15-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L15-G3-EX-4.jpg',
          resposta: ['L15-G3-RES-4.jpg', 'L15-G3-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L15-G3-EX-5.jpg',
          resposta: 'L15-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L15-G3-EX-6.jpg',
          resposta: [
            'L15-G3-RES-6.jpg',
            'L15-G3-RES-6-parte2.jpg',
            'L15-G3-RES-6-parte3.jpg'
          ]
        }
      ]
    }
  },
  L16: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L16-G1-EX-1.jpg',
          resposta: 'L16-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L16-G1-EX-2.jpg',
          resposta: 'L16-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L16-G1-EX-3.jpg',
          resposta: 'L16-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L16-G1-EX-4.jpg',
          resposta: 'L16-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L16-G1-EX-5.jpg',
          resposta: 'L16-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L16-G2-EX-1.jpg',
          resposta: ['L16-G2-RES-1.jpg', 'L16-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L16-G2-EX-2.jpg',
          resposta: ['L16-G2-RES-2.jpg', 'L16-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L16-G2-EX-3.jpg',
          resposta: ['L16-G2-RES-3.jpg', 'L16-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L16-G2-EX-4.jpg',
          resposta: ['L16-G2-RES-4.jpg', 'L16-G2-RES-4-parte2.jpg']
        }
      ]
    }
  },
  L17: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L17-G1-EX-1.jpg',
          resposta: ['L17-G1-RES-1.jpg', 'L17-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L17-G1-EX-2.jpg',
          resposta: [
            'L17-G1-RES-2.jpg',
            'L17-G1-RES-2-parte2.jpg',
            'L17-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: 'L17-G1-EX-3.jpg',
          resposta: [
            'L17-G1-RES-3.jpg',
            'L17-G1-RES-3-parte2.jpg',
            'L17-G1-RES-3-parte3.jpg',
            'L17-G1-RES-3-parte4.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: 'L17-G1-EX-4.jpg',
          resposta: [
            'L17-G1-RES-4.jpg',
            'L17-G1-RES-4-parte2.jpg',
            'L17-G1-RES-4-parte3.jpg',
            'L17-G1-RES-4-parte4.jpg',
            'L17-G1-RES-4-parte5.jpg'
          ]
        }
      ]
    }
  },
  L18: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L18-G1-EX-1.jpg',
          resposta: 'L18-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L18-G1-EX-2.jpg',
          resposta: 'L18-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L18-G1-EX-3.jpg',
          resposta: 'L18-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L18-G1-EX-4.jpg',
          resposta: 'L18-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L18-G1-EX-5.jpg',
          resposta: 'L18-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L18-G1-EX-6.jpg',
          resposta: 'L18-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L18-G1-EX-7.jpg',
          resposta: 'L18-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L18-G1-EX-8.jpg',
          resposta: 'L18-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L18-G2-EX-1.jpg',
          resposta: 'L18-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L18-G2-EX-2.jpg',
          resposta: 'L18-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L18-G2-EX-3.jpg',
          resposta: 'L18-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L18-G2-EX-4.jpg',
          resposta: 'L18-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L18-G2-EX-5.jpg',
          resposta: 'L18-G2-RES-5.jpg'
        }
      ]
    }
  },
  L19: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L19-G1-EX-1.jpg',
          resposta: 'L19-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L19-G1-EX-2.jpg',
          resposta: 'L19-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L19-G1-EX-3.jpg',
          resposta: 'L19-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L19-G1-EX-4.jpg',
          resposta: 'L19-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L19-G1-EX-5.jpg',
          resposta: 'L19-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L19-G1-EX-6.jpg',
          resposta: 'L19-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L19-G1-EX-7.jpg',
          resposta: 'L19-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L19-G1-EX-8.jpg',
          resposta: 'L19-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L19-G2-EX-1.jpg',
          resposta: 'L19-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L19-G2-EX-2.jpg',
          resposta: 'L19-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L19-G2-EX-3.jpg',
          resposta: 'L19-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L19-G2-EX-4.jpg',
          resposta: 'L19-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L19-G2-EX-5.jpg',
          resposta: 'L19-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L19-G2-EX-6.jpg',
          resposta: 'L19-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L19-G2-EX-7.jpg',
          resposta: 'L19-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L19-G2-EX-8.jpg',
          resposta: 'L19-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L19-G2-EX-9.jpg',
          resposta: 'L19-G2-RES-9.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L19-G3-EX-1.jpg',
          resposta: 'L19-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L19-G3-EX-2.jpg',
          resposta: 'L19-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L19-G3-EX-3.jpg',
          resposta: 'L19-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L19-G3-EX-4.jpg',
          resposta: 'L19-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L19-G3-EX-5.jpg',
          resposta: 'L19-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L19-G3-EX-6.jpg',
          resposta: 'L19-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L19-G3-EX-7.jpg',
          resposta: 'L19-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L19-G3-EX-8.jpg',
          resposta: 'L19-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L19-G3-EX-9.jpg',
          resposta: ['L19-G3-RES-9.jpg', 'L19-G3-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L19-G3-EX-10.jpg',
          resposta: 'L19-G3-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: ['L19-G3-EX-11.jpg', 'L19-G3-EX-11-parte2.jpg'],
          resposta: 'L19-G3-RES-11.jpg'
        }
      ]
    }
  },
  L20: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L20-G1-EX-1.jpg',
          resposta: 'L20-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L20-G1-EX-2.jpg',
          resposta: 'L20-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L20-G1-EX-3.jpg',
          resposta: 'L20-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L20-G1-EX-4.jpg',
          resposta: 'L20-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L20-G1-EX-5.jpg',
          resposta: 'L20-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L20-G1-EX-6.jpg',
          resposta: 'L20-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L20-G1-EX-7.jpg',
          resposta: 'L20-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L20-G2-EX-1.jpg',
          resposta: 'L20-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L20-G2-EX-2.jpg',
          resposta: 'L20-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L20-G2-EX-3.jpg',
          resposta: 'L20-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L20-G2-EX-4.jpg',
          resposta: 'L20-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L20-G2-EX-5.jpg',
          resposta: 'L20-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L20-G2-EX-6.jpg',
          resposta: 'L20-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L20-G2-EX-7.jpg',
          resposta: 'L20-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L20-G2-EX-8.jpg',
          resposta: 'L20-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L20-G2-EX-9.jpg',
          resposta: 'L20-G2-RES-9.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L20-G3-EX-1.jpg',
          resposta: 'L20-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L20-G3-EX-2.jpg',
          resposta: 'L20-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L20-G3-EX-3.jpg',
          resposta: 'L20-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L20-G3-EX-4.jpg',
          resposta: 'L20-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L20-G3-EX-5.jpg',
          resposta: 'L20-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L20-G3-EX-6.jpg',
          resposta: 'L20-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L20-G3-EX-7.jpg',
          resposta: 'L20-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L20-G3-EX-8.jpg',
          resposta: 'L20-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L20-G3-EX-9.jpg',
          resposta: 'L20-G3-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L20-G3-EX-10.jpg',
          resposta: 'L20-G3-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L20-G3-EX-11.jpg',
          resposta: 'L20-G3-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L20-G3-EX-12.jpg',
          resposta: 'L20-G3-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L20-G3-EX-13.jpg',
          resposta: 'L20-G3-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L20-G3-EX-14.jpg',
          resposta: 'L20-G3-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L20-G3-EX-15.jpg',
          resposta: 'L20-G3-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L20-G3-EX-16.jpg',
          resposta: 'L20-G3-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L20-G3-EX-17.jpg',
          resposta: 'L20-G3-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L20-G3-EX-18.jpg',
          resposta: ['L20-G3-RES-18.jpg', 'L20-G3-RES-18-parte2.jpg']
        }
      ]
    }
  },
  L21: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L21-G1-EX-1.jpg',
          resposta: 'L21-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L21-G1-EX-2.jpg',
          resposta: 'L21-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L21-G1-EX-3.jpg',
          resposta: 'L21-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L21-G1-EX-4.jpg',
          resposta: 'L21-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L21-G1-EX-5.jpg',
          resposta: 'L21-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L21-G1-EX-6.jpg',
          resposta: 'L21-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L21-G2-EX-1.jpg',
          resposta: 'L21-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L21-G2-EX-2.jpg',
          resposta: 'L21-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L21-G2-EX-3.jpg',
          resposta: 'L21-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L21-G2-EX-4.jpg',
          resposta: 'L21-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L21-G2-EX-5.jpg',
          resposta: 'L21-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L21-G2-EX-6.jpg',
          resposta: 'L21-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L21-G2-EX-7.jpg',
          resposta: 'L21-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L21-G2-EX-8.jpg',
          resposta: 'L21-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L21-G2-EX-9.jpg',
          resposta: ['L21-G2-RES-9.jpg', 'L21-G2-RES-9-parte2.jpg']
        }
      ]
    }
  },
  L22: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L22-G1-EX-1.jpg',
          resposta: 'L22-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L22-G1-EX-2.jpg',
          resposta: 'L22-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L22-G1-EX-3.jpg',
          resposta: 'L22-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L22-G1-EX-4.jpg',
          resposta: ['L22-G1-RES-4.jpg', 'L22-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L22-G1-EX-5.jpg',
          resposta: 'L22-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L22-G1-EX-6.jpg',
          resposta: 'L22-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L22-G2-EX-1.jpg',
          resposta: 'L22-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L22-G2-EX-2.jpg',
          resposta: 'L22-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L22-G2-EX-3.jpg',
          resposta: 'L22-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L22-G2-EX-4.jpg',
          resposta: 'L22-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L22-G2-EX-5.jpg',
          resposta: ['L22-G2-RES-5.jpg', 'L22-G2-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L22-G2-EX-6.jpg',
          resposta: 'L22-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L22-G2-EX-7.jpg',
          resposta: ['L22-G2-RES-7.jpg', 'L22-G2-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L22-G2-EX-8.jpg',
          resposta: 'L22-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L22-G2-EX-9.jpg',
          resposta: 'L22-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L22-G2-EX-10.jpg',
          resposta: 'L22-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L22-G2-EX-11.jpg',
          resposta: 'L22-G2-RES-11.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L22-G3-EX-1.jpg',
          resposta: 'L22-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L22-G3-EX-2.jpg',
          resposta: 'L22-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L22-G3-EX-3.jpg',
          resposta: 'L22-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L22-G3-EX-4.jpg',
          resposta: ['L22-G3-RES-4.jpg', 'L22-G3-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L22-G3-EX-5.jpg',
          resposta: [
            'L22-G3-RES-5.jpg',
            'L22-G3-RES-5-parte2.jpg',
            'L22-G3-RES-5-parte3.jpg'
          ]
        }
      ]
    }
  },
  L23: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L23-G1-EX-1.jpg',
          resposta: 'L23-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L23-G1-EX-2.jpg',
          resposta: 'L23-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L23-G1-EX-3.jpg',
          resposta: 'L23-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L23-G1-EX-4.jpg',
          resposta: 'L23-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L23-G1-EX-5.jpg',
          resposta: 'L23-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L23-G1-EX-6.jpg',
          resposta: 'L23-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L23-G1-EX-7.jpg',
          resposta: 'L23-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L23-G2-EX-1.jpg',
          resposta: 'L23-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L23-G2-EX-2.jpg',
          resposta: 'L23-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L23-G2-EX-3.jpg',
          resposta: 'L23-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L23-G2-EX-4.jpg',
          resposta: 'L23-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L23-G2-EX-5.jpg',
          resposta: 'L23-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L23-G2-EX-6.jpg',
          resposta: 'L23-G2-RES-6.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L23-G3-EX-1.jpg',
          resposta: 'L23-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L23-G3-EX-2.jpg',
          resposta: 'L23-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L23-G3-EX-3.jpg',
          resposta: 'L23-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L23-G3-EX-4.jpg',
          resposta: 'L23-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L23-G3-EX-5.jpg',
          resposta: 'L23-G3-RES-5.jpg'
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L23-G4-EX-1.jpg',
          resposta: 'L23-G4-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L23-G4-EX-2.jpg',
          resposta: ['L23-G4-RES-2.jpg', 'L23-G4-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L23-G4-EX-3.jpg',
          resposta: 'L23-G4-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L23-G4-EX-4.jpg',
          resposta: ['L23-G4-RES-4.jpg', 'L23-G4-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L23-G4-EX-5.jpg',
          resposta: [
            'L23-G4-RES-5.jpg',
            'L23-G4-RES-5-parte2.jpg',
            'L23-G4-RES-5-parte3.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: 'L23-G4-EX-6.jpg',
          resposta: 'L23-G4-RES-6.jpg'
        }
      ]
    }
  },
  L24: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L24-G1-EX-1.jpg',
          resposta: 'L24-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L24-G1-EX-2.jpg',
          resposta: 'L24-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L24-G1-EX-3.jpg',
          resposta: 'L24-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L24-G1-EX-4.jpg',
          resposta: 'L24-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L24-G1-EX-5.jpg',
          resposta: 'L24-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L24-G1-EX-6.jpg',
          resposta: 'L24-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L24-G1-EX-7.jpg',
          resposta: 'L24-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L24-G1-EX-8.jpg',
          resposta: 'L24-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L24-G2-EX-1.jpg',
          resposta: 'L24-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L24-G2-EX-2.jpg',
          resposta: 'L24-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L24-G2-EX-3.jpg',
          resposta: 'L24-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L24-G2-EX-4.jpg',
          resposta: 'L24-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L24-G2-EX-5.jpg',
          resposta: 'L24-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L24-G2-EX-6.jpg',
          resposta: 'L24-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L24-G2-EX-7.jpg',
          resposta: 'L24-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L24-G2-EX-8.jpg',
          resposta: 'L24-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L24-G2-EX-9.jpg',
          resposta: 'L24-G2-RES-9.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L24-G3-EX-1.jpg',
          resposta: 'L24-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L24-G3-EX-2.jpg',
          resposta: 'L24-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L24-G3-EX-3.jpg',
          resposta: 'L24-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L24-G3-EX-4.jpg',
          resposta: 'L24-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L24-G3-EX-5.jpg',
          resposta: 'L24-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L24-G3-EX-6.jpg',
          resposta: 'L24-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L24-G3-EX-7.jpg',
          resposta: 'L24-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L24-G3-EX-8.jpg',
          resposta: 'L24-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L24-G3-EX-9.jpg',
          resposta: 'L24-G3-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L24-G3-EX-10.jpg',
          resposta: 'L24-G3-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L24-G3-EX-11.jpg',
          resposta: 'L24-G3-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L24-G3-EX-12.jpg',
          resposta: ['L24-G3-RES-12.jpg', 'L24-G3-RES-12-parte2.jpg']
        }
      ]
    }
  },
  L25: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L25-G1-EX-1.jpg',
          resposta: 'L25-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L25-G1-EX-2.jpg',
          resposta: 'L25-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L25-G1-EX-3.jpg',
          resposta: 'L25-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L25-G1-EX-4.jpg',
          resposta: 'L25-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L25-G1-EX-5.jpg',
          resposta: 'L25-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L25-G1-EX-6.jpg',
          resposta: 'L25-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L25-G2-EX-1.jpg',
          resposta: 'L25-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L25-G2-EX-2.jpg',
          resposta: 'L25-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L25-G2-EX-3.jpg',
          resposta: 'L25-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L25-G2-EX-4.jpg',
          resposta: 'L25-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L25-G2-EX-5.jpg',
          resposta: 'L25-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L25-G2-EX-6.jpg',
          resposta: 'L25-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L25-G2-EX-7.jpg',
          resposta: 'L25-G2-RES-7.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L25-G3-EX-1.jpg',
          resposta: 'L25-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L25-G3-EX-2.jpg',
          resposta: 'L25-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L25-G3-EX-3.jpg',
          resposta: ['L25-G3-RES-3.jpg', 'L25-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L25-G3-EX-4.jpg',
          resposta: 'L25-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L25-G3-EX-5.jpg',
          resposta: 'L25-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L25-G3-EX-6.jpg',
          resposta: 'L25-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L25-G3-EX-7.jpg',
          resposta: ['L25-G3-RES-7.jpg', 'L25-G3-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L25-G3-EX-8.jpg',
          resposta: [
            'L25-G3-RES-8.jpg',
            'L25-G3-RES-8-parte2.jpg',
            'L25-G3-RES-8-parte3.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: 'L25-G3-EX-9.jpg',
          resposta: ['L25-G3-RES-9.jpg', 'L25-G3-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L25-G3-EX-10.jpg',
          resposta: [
            'L25-G3-RES-10.jpg',
            'L25-G3-RES-10-parte2.jpg',
            'L25-G3-RES-10-parte3.jpg',
            'L25-G3-RES-10-parte4.jpg'
          ]
        }
      ]
    }
  },
  L26: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L26-G1-EX-1.jpg',
          resposta: 'L26-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L26-G1-EX-2.jpg',
          resposta: 'L26-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L26-G1-EX-3.jpg',
          resposta: 'L26-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L26-G1-EX-4.jpg',
          resposta: 'L26-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L26-G1-EX-5.jpg',
          resposta: 'L26-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L26-G1-EX-6.jpg',
          resposta: 'L26-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L26-G1-EX-7.jpg',
          resposta: 'L26-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L26-G1-EX-8.jpg',
          resposta: 'L26-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L26-G1-EX-9.jpg',
          resposta: 'L26-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L26-G1-EX-10.jpg',
          resposta: 'L26-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L26-G1-EX-11.jpg',
          resposta: 'L26-G1-RES-11.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L26-G2-EX-1.jpg',
          resposta: ['L26-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: 'L26-G2-EX-2.jpg',
          resposta: 'L26-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L26-G2-EX-3.jpg',
          resposta: 'L26-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L26-G2-EX-4.jpg',
          resposta: 'L26-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L26-G2-EX-5.jpg',
          resposta: ['L26-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: 'L26-G2-EX-6.jpg',
          resposta: 'L26-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L26-G2-EX-7.jpg',
          resposta: 'L26-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L26-G2-EX-8.jpg',
          resposta: 'L26-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L26-G2-EX-9.jpg',
          resposta: [
            'L26-G2-RES-9.jpg',
            'L26-G2-RES-9-parte2.jpg',
            'L26-G2-RES-9-parte3.jpg',
            'L26-G2-RES-9-parte4.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: 'L26-G2-EX-10.jpg',
          resposta: [
            'L26-G2-RES-10.jpg',
            'L26-G2-RES-10-parte2.jpg',
            'L26-G2-RES-10-parte3.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: 'L26-G2-EX-11.jpg',
          resposta: [
            'L26-G2-RES-11.jpg',
            'L26-G2-RES-11-parte2.jpg',
            'L26-G2-RES-11-parte3.jpg'
          ]
        }
      ]
    }
  },
  L27: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L27-G1-EX-1.jpg',
          resposta: 'L27-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L27-G1-EX-2.jpg',
          resposta: 'L27-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L27-G1-EX-3.jpg',
          resposta: 'L27-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L27-G1-EX-4.jpg',
          resposta: 'L27-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L27-G1-EX-5.jpg',
          resposta: 'L27-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L27-G1-EX-6.jpg',
          resposta: 'L27-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L27-G1-EX-7.jpg',
          resposta: 'L27-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L27-G2-EX-1.jpg',
          resposta: 'L27-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L27-G2-EX-2.jpg',
          resposta: 'L27-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L27-G2-EX-3.jpg',
          resposta: 'L27-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L27-G2-EX-4.jpg',
          resposta: 'L27-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L27-G2-EX-5.jpg',
          resposta: 'L27-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L27-G2-EX-6.jpg',
          resposta: 'L27-G2-RES-6.jpg'
        }
      ]
    }
  },
  L28: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L28-G1-EX-1.jpg',
          resposta: 'L28-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L28-G1-EX-2.jpg',
          resposta: 'L28-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L28-G1-EX-3.jpg',
          resposta: 'L28-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L28-G1-EX-4.jpg',
          resposta: 'L28-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L28-G1-EX-5.jpg',
          resposta: 'L28-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L28-G1-EX-6.jpg',
          resposta: 'L28-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L28-G1-EX-7.jpg',
          resposta: 'L28-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L28-G2-EX-1.jpg',
          resposta: 'L28-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L28-G2-EX-2.jpg',
          resposta: 'L28-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L28-G2-EX-3.jpg',
          resposta: 'L28-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L28-G2-EX-4.jpg',
          resposta: 'L28-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L28-G2-EX-5.jpg',
          resposta: 'L28-G2-RES-5.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L28-G3-EX-1.jpg',
          resposta: 'L28-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L28-G3-EX-2.jpg',
          resposta: ['L28-G3-RES-2.jpg', 'L28-G3-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L28-G3-EX-3.jpg',
          resposta: ['L28-G3-RES-3.jpg', 'L28-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L28-G3-EX-4.jpg',
          resposta: 'L28-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L28-G3-EX-5.jpg',
          resposta: [
            'L28-G3-RES-5.jpg',
            'L28-G3-RES-5-parte2.jpg',
            'L28-G3-RES-5-parte3.jpg',
            'L28-G3-RES-5-parte4.jpg',
            'L28-G3-RES-5-parte5.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: 'L28-G3-EX-6.jpg',
          resposta: 'L28-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L28-G3-EX-7.jpg',
          resposta: 'L28-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L28-G3-EX-8.jpg',
          resposta: 'L28-G3-RES-8.jpg'
        }
      ]
    }
  },
  L29: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L29-G1-EX-1.jpg',
          resposta: 'L29-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L29-G1-EX-2.jpg',
          resposta: 'L29-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L29-G1-EX-3.jpg',
          resposta: 'L29-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L29-G1-EX-4.jpg',
          resposta: ['L29-G1-RES-4.jpg', 'L29-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L29-G1-EX-5.jpg',
          resposta: 'L29-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L29-G1-EX-6.jpg',
          resposta: 'L29-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L29-G1-EX-7.jpg',
          resposta: 'L29-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L29-G2-EX-1.jpg',
          resposta: ['L29-G2-RES-1.jpg', 'L29-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L29-G2-EX-2.jpg',
          resposta: ['L29-G2-RES-2.jpg', 'L29-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L29-G2-EX-3.jpg',
          resposta: ['L29-G2-RES-3.jpg', 'L29-G2-RES-3-parte2.jpg']
        }
      ]
    }
  },
  L30: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L30-G1-EX-1.jpg',
          resposta: ['L30-G1-RES-1.jpg', 'L30-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L30-G1-EX-2.jpg',
          resposta: 'L30-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L30-G1-EX-3.jpg',
          resposta: [
            'L30-G1-RES-3.jpg',
            'L30-G1-RES-3-parte2.jpg',
            'L30-G1-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: 'L30-G1-EX-4.jpg',
          resposta: 'L30-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L30-G1-EX-5.jpg',
          resposta: 'L30-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L30-G1-EX-6.jpg',
          resposta: 'L30-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L30-G2-EX-1.jpg',
          resposta: 'L30-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L30-G2-EX-2.jpg',
          resposta: ['L30-G2-RES-2.jpg', 'L30-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L30-G2-EX-3.jpg',
          resposta: ['L30-G2-RES-3.jpg', 'L30-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L30-G2-EX-4.jpg',
          resposta: ['L30-G2-RES-4.jpg', 'L30-G2-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L30-G2-EX-5.jpg',
          resposta: 'L30-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L30-G2-EX-6.jpg',
          resposta: ['L30-G2-RES-6.jpg', 'L30-G2-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L30-G2-EX-7.jpg',
          resposta: 'L30-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L30-G2-EX-8.jpg',
          resposta: [
            'L30-G2-RES-8.jpg',
            'L30-G2-RES-8-parte2.jpg',
            'L30-G2-RES-8-parte3.jpg',
            'L30-G2-RES-8-parte4.jpg',
            'L30-G2-RES-8-parte5.jpg',
            'L30-G2-RES-8-parte6.jpg',
            'L30-G2-RES-8-parte7.jpg',
            'L30-G2-RES-8-parte8.jpg',
            'L30-G2-RES-8-parte9.jpg',
            'L30-G2-RES-8-parte10.jpg',
            'L30-G2-RES-8-parte11.jpg'
          ]
        }
      ]
    }
  },
  L31: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L31-G1-EX-1.jpg',
          resposta: 'L31-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L31-G1-EX-2.jpg',
          resposta: ['L31-G1-RES-2.jpg', 'L31-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L31-G1-EX-3.jpg',
          resposta: 'L31-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L31-G1-EX-4.jpg',
          resposta: 'L31-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L31-G1-EX-5.jpg',
          resposta: 'L31-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L31-G1-EX-6.jpg',
          resposta: ['L31-G1-RES-6.jpg', 'L31-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L31-G1-EX-7.jpg',
          resposta: ['L31-G1-RES-7.jpg', 'L31-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L31-G1-EX-8.jpg',
          resposta: [
            'L31-G1-RES-8.jpg',
            'L31-G1-RES-8-parte2.jpg',
            'L31-G1-RES-8-parte3.jpg',
            'L31-G1-RES-8-parte4.jpg',
            'L31-G1-RES-8-parte5.jpg'
          ]
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L31-G2-EX-1.jpg',
          resposta: ['L31-G2-RES-1.jpg', 'L31-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L31-G2-EX-2.jpg',
          resposta: ['L31-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L31-G2-EX-3.jpg',
          resposta: ['L31-G2-RES-3.jpg', 'L31-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L31-G2-EX-4.jpg',
          resposta: 'L31-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L31-G2-EX-5.jpg',
          resposta: [
            'L31-G2-RES-5.jpg',
            'L31-G2-RES-5-parte2.jpg',
            'L31-G2-RES-5-parte3.jpg',
            'L31-G2-RES-5-parte4.jpg',
            'L31-G2-RES-5-parte5.jpg',
            'L31-G2-RES-5-parte6.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: [
            'L31-G2-EX-6.jpg',
            'L31-G2-EX-6-parte2.jpg',
            'L31-G2-EX-6-parte3.jpg'
          ],
          resposta: 'L31-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L31-G2-EX-7.jpg',
          resposta: ['L31-G2-RES-7.jpg', 'L31-G2-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L31-G2-EX-8.jpg',
          resposta: ['L31-G2-RES-8.jpg', 'L31-G2-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: 'L31-G2-EX-9.jpg',
          resposta: ['L31-G2-RES-9.jpg', 'L31-G2-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L31-G2-EX-10.jpg',
          resposta: ['L31-G2-RES-10.jpg', 'L31-G2-RES-10-parte2.jpg']
        }
      ]
    }
  },
  L32: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L32-G1-EX-1.jpg',
          resposta: 'L32-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L32-G1-EX-2.jpg',
          resposta: 'L32-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L32-G1-EX-3.jpg',
          resposta: 'L32-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L32-G1-EX-4.jpg',
          resposta: 'L32-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L32-G1-EX-5.jpg',
          resposta: 'L32-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L32-G2-EX-1.jpg',
          resposta: 'L32-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L32-G2-EX-2.jpg',
          resposta: 'L32-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L32-G2-EX-3.jpg',
          resposta: 'L32-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L32-G2-EX-4.jpg',
          resposta: 'L32-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L32-G2-EX-5.jpg',
          resposta: 'L32-G2-RES-5.jpg'
        }
      ]
    }
  },
  L33: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L33-G1-EX-1.jpg',
          resposta: 'L33-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L33-G1-EX-2.jpg',
          resposta: 'L33-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L33-G1-EX-3.jpg',
          resposta: 'L33-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L33-G1-EX-4.jpg',
          resposta: 'L33-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L33-G1-EX-5.jpg',
          resposta: 'L33-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L33-G1-EX-6.jpg',
          resposta: 'L33-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L33-G1-EX-7.jpg',
          resposta: 'L33-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L33-G2-EX-1.jpg',
          resposta: 'L33-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L33-G2-EX-2.jpg',
          resposta: 'L33-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L33-G2-EX-3.jpg',
          resposta: 'L33-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L33-G2-EX-4.jpg',
          resposta: 'L33-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L33-G2-EX-5.jpg',
          resposta: 'L33-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L33-G2-EX-6.jpg',
          resposta: 'L33-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L33-G2-EX-7.jpg',
          resposta: 'L33-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L33-G2-EX-8.jpg',
          resposta: 'L33-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L33-G2-EX-9.jpg',
          resposta: 'L33-G2-RES-9.jpg'
        }
      ]
    }
  },
  L34: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L34-G1-EX-1.jpg',
          resposta: 'L34-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L34-G1-EX-2.jpg',
          resposta: ['L34-G1-RES-2.jpg', 'L34-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L34-G1-EX-3.jpg',
          resposta: 'L34-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L34-G1-EX-4.jpg',
          resposta: 'L34-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L34-G1-EX-5.jpg',
          resposta: 'L34-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L34-G1-EX-6.jpg',
          resposta: 'L34-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L34-G1-EX-7.jpg',
          resposta: 'L34-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L34-G1-EX-8.jpg',
          resposta: 'L34-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L34-G1-EX-9.jpg',
          resposta: 'L34-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L34-G1-EX-10.jpg',
          resposta: 'L34-G1-RES-10.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L34-G2-EX-1.jpg',
          resposta: 'L34-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L34-G2-EX-2.jpg',
          resposta: 'L34-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L34-G2-EX-3.jpg',
          resposta: 'L34-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L34-G2-EX-4.jpg',
          resposta: 'L34-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L34-G2-EX-5.jpg',
          resposta: 'L34-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L34-G2-EX-6.jpg',
          resposta: 'L34-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L34-G2-EX-7.jpg',
          resposta: ['L34-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: 'L34-G2-EX-8.jpg',
          resposta: 'L34-G2-RES-8.jpg'
        }
      ]
    }
  },
  L35: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L35-G1-EX-1.jpg',
          resposta: 'L35-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L35-G1-EX-2.jpg',
          resposta: 'L35-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L35-G1-EX-3.jpg',
          resposta: 'L35-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L35-G1-EX-4.jpg',
          resposta: 'L35-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L35-G1-EX-5.jpg',
          resposta: ['L35-G1-RES-5.jpg', 'L35-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L35-G1-EX-6.jpg',
          resposta: 'L35-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L35-G2-EX-1.jpg',
          resposta: 'L35-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L35-G2-EX-2.jpg',
          resposta: 'L35-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L35-G2-EX-3.jpg',
          resposta: 'L35-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L35-G2-EX-4.jpg',
          resposta: 'L35-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L35-G2-EX-5.jpg',
          resposta: ['L35-G2-RES-5.jpg', 'L35-G2-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L35-G2-EX-6.jpg',
          resposta: 'L35-G2-RES-6.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L35-G3-EX-1.jpg',
          resposta: ['L35-G3-RES-1.jpg', 'L35-G3-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L35-G3-EX-2.jpg',
          resposta: 'L35-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L35-G3-EX-3.jpg',
          resposta: 'L35-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L35-G3-EX-4.jpg',
          resposta: ['L35-G3-RES-4.jpg', 'L35-G3-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L35-G3-EX-5.jpg',
          resposta: ['L35-G3-RES-5.jpg', 'L35-G3-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L35-G3-EX-6.jpg',
          resposta: ['L35-G3-RES-6.jpg', 'L35-G3-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L35-G3-EX-7.jpg',
          resposta: ['L35-G3-RES-7.jpg', 'L35-G3-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L35-G3-EX-8.jpg',
          resposta: ['L35-G3-RES-8.jpg', 'L35-G3-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: 'L35-G3-EX-9.jpg',
          resposta: ['L35-G3-RES-9.jpg', 'L35-G3-RES-9-parte2.jpg']
        }
      ]
    }
  },
  L36: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L36-G1-EX-1.jpg',
          resposta: ['L36-G1-RES-1.jpg', 'L36-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L36-G1-EX-2.jpg',
          resposta: 'L36-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L36-G1-EX-3.jpg',
          resposta: 'L36-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L36-G1-EX-4.jpg',
          resposta: ['L36-G1-RES-4.jpg', 'L36-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L36-G1-EX-5.jpg',
          resposta: ['L36-G1-RES-5.jpg', 'L36-G1-RES-5-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L36-G2-EX-1.jpg',
          resposta: 'L36-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L36-G2-EX-2.jpg',
          resposta: 'L36-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L36-G2-EX-3.jpg',
          resposta: 'L36-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L36-G2-EX-4.jpg',
          resposta: 'L36-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L36-G2-EX-5.jpg',
          resposta: 'L36-G2-RES-5.jpg'
        }
      ]
    }
  },
  L37: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L37-G1-EX-1.jpg',
          resposta: 'L37-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L37-G1-EX-2.jpg',
          resposta: 'L37-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L37-G1-EX-3.jpg',
          resposta: 'L37-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L37-G1-EX-4.jpg',
          resposta: 'L37-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L37-G1-EX-5.jpg',
          resposta: ['L37-G1-RES-5.jpg', 'L37-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L37-G1-EX-6.jpg',
          resposta: 'L37-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L37-G1-EX-7.jpg',
          resposta: 'L37-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L37-G1-EX-8.jpg',
          resposta: 'L37-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L37-G1-EX-9.jpg',
          resposta: 'L37-G1-RES-9.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L37-G2-EX-1.jpg',
          resposta: 'L37-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L37-G2-EX-2.jpg',
          resposta: 'L37-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L37-G2-EX-3.jpg',
          resposta: ['L37-G2-RES-3.jpg', 'L37-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L37-G2-EX-4.jpg',
          resposta: 'L37-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L37-G2-EX-5.jpg',
          resposta: 'L37-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L37-G2-EX-6.jpg',
          resposta: 'L37-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L37-G2-EX-7.jpg',
          resposta: 'L37-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L37-G2-EX-8.jpg',
          resposta: 'L37-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L37-G2-EX-9.jpg',
          resposta: 'L37-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L37-G2-EX-10.jpg',
          resposta: 'L37-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L37-G2-EX-11.jpg',
          resposta: 'L37-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L37-G2-EX-12.jpg',
          resposta: 'L37-G2-RES-12.jpg'
        }
      ]
    }
  },
  L38: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L38-G1-EX-1.jpg',
          resposta: ['L38-G1-RES-1.jpg', 'L38-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L38-G1-EX-2.jpg',
          resposta: [
            'L38-G1-RES-2.jpg',
            'L38-G1-RES-2-parte2.jpg',
            'L38-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: 'L38-G1-EX-3.jpg',
          resposta: ['L38-G1-RES-3.jpg', 'L38-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L38-G1-EX-4.jpg',
          resposta: [
            'L38-G1-RES-4.jpg',
            'L38-G1-RES-4-parte2.jpg',
            'L38-G1-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: 'L38-G1-EX-5.jpg',
          resposta: ['L38-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: 'L38-G1-EX-6.jpg',
          resposta: ['L38-G1-RES-6.jpg', 'L38-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L38-G1-EX-7.jpg',
          resposta: [
            'L38-G1-RES-7.jpg',
            'L38-G1-RES-7-parte2.jpg',
            'L38-G1-RES-7-parte3.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: 'L38-G1-EX-8.jpg',
          resposta: ['L38-G1-RES-8.jpg', 'L38-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: 'L38-G1-EX-9.jpg',
          resposta: ['L38-G1-RES-9.jpg', 'L38-G1-RES-9-parte2.jpg']
        }
      ]
    }
  },
  L39: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L39-G1-EX-1.jpg',
          resposta: 'L39-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L39-G1-EX-2.jpg',
          resposta: 'L39-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L39-G1-EX-3.jpg',
          resposta: 'L39-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L39-G1-EX-4.jpg',
          resposta: 'L39-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L39-G1-EX-5.jpg',
          resposta: 'L39-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L39-G1-EX-6.jpg',
          resposta: 'L39-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L39-G1-EX-7.jpg',
          resposta: 'L39-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L39-G2-EX-1.jpg',
          resposta: 'L39-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L39-G2-EX-2.jpg',
          resposta: 'L39-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L39-G2-EX-3.jpg',
          resposta: ['L39-G2-RES-3.jpg', 'L39-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L39-G2-EX-4.jpg',
          resposta: 'L39-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L39-G2-EX-5.jpg',
          resposta: [
            'L39-G2-RES-5.jpg',
            'L39-G2-RES-5-parte2.jpg',
            'L39-G2-RES-5-parte3.jpg',
            'L39-G2-RES-5-parte4.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: 'L39-G2-EX-6.jpg',
          resposta: ['L39-G2-RES-6.jpg', 'L39-G2-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L39-G2-EX-7.jpg',
          resposta: 'L39-G2-RES-7.jpg'
        }
      ]
    }
  },
  L40: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L40-G1-EX-1.jpg',
          resposta: ['L40-G1-RES-1.jpg', 'L40-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L40-G1-EX-2.jpg',
          resposta: ['L40-G1-RES-2.jpg', 'L40-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L40-G1-EX-3.jpg',
          resposta: ['L40-G1-RES-3.jpg', 'L40-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L40-G1-EX-4.jpg',
          resposta: [
            'L40-G1-RES-4.jpg',
            'L40-G1-RES-4-parte2.jpg',
            'L40-G1-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L40-G1-EX-5.jpg', 'L40-G1-EX-5-parte2.jpg'],
          resposta: ['L40-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: 'L40-G1-EX-6.jpg',
          resposta: 'L40-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L40-G1-EX-7.jpg',
          resposta: ['L40-G1-RES-7.jpg', 'L40-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L40-G1-EX-8.jpg',
          resposta: ['L40-G1-RES-8.jpg', 'L40-G1-RES-8-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L40-G2-EX-1.jpg', 'L40-G2-EX-1-parte2.jpg'],
          resposta: [
            'L40-G2-RES-1.jpg',
            'L40-G2-RES-1-parte2.jpg',
            'L40-G2-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: 'L40-G2-EX-2.jpg',
          resposta: [
            'L40-G2-RES-2.jpg',
            'L40-G2-RES-2-parte2.jpg',
            'L40-G2-RES-2-parte3.jpg',
            'L40-G2-RES-2-parte4.jpg',
            'L40-G2-RES-2-parte5.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: 'L40-G2-EX-3.jpg',
          resposta: [
            'L40-G2-RES-3.jpg',
            'L40-G2-RES-3-parte2.jpg',
            'L40-G2-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: 'L40-G2-EX-4.jpg',
          resposta: 'L40-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L40-G2-EX-5.jpg',
          resposta: 'L40-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L40-G2-EX-6.jpg',
          resposta: ['L40-G2-RES-6.jpg', 'L40-G2-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L40-G2-EX-7.jpg',
          resposta: ['L40-G2-RES-7.jpg', 'L40-G2-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L40-G2-EX-8.jpg',
          resposta: [
            'L40-G2-RES-8.jpg',
            'L40-G2-RES-8-parte2.jpg',
            'L40-G2-RES-8-parte3.jpg'
          ]
        }
      ]
    }
  },
  L41: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L41-G1-EX-1.jpg',
          resposta: 'L41-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L41-G1-EX-2.jpg',
          resposta: 'L41-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L41-G1-EX-3.jpg',
          resposta: 'L41-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L41-G1-EX-4.jpg',
          resposta: 'L41-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L41-G1-EX-5.jpg',
          resposta: 'L41-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L41-G1-EX-6.jpg',
          resposta: 'L41-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L41-G1-EX-7.jpg',
          resposta: [
            'L41-G1-RES-7.jpg',
            'L41-G1-RES-7-parte2.jpg',
            'L41-G1-RES-7-parte3.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: 'L41-G1-EX-8.jpg',
          resposta: ['L41-G1-RES-8.jpg', 'L41-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: 'L41-G1-EX-9.jpg',
          resposta: ['L41-G1-RES-9.jpg', 'L41-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L41-G1-EX-10.jpg',
          resposta: 'L41-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L41-G1-EX-11.jpg',
          resposta: 'L41-G1-RES-11.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L41-G2-EX-1.jpg',
          resposta: [
            'L41-G2-RES-1.jpg',
            'L41-G2-RES-1-parte2.jpg',
            'L41-G2-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: 'L41-G2-EX-2.jpg',
          resposta: ['L41-G2-RES-2.jpg', 'L41-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L41-G2-EX-3.jpg',
          resposta: ['L41-G2-RES-3.jpg', 'L41-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L41-G2-EX-4.jpg',
          resposta: 'L41-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L41-G2-EX-5.jpg',
          resposta: ['L41-G2-RES-5.jpg', 'L41-G2-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L41-G2-EX-6.jpg',
          resposta: [
            'L41-G2-RES-6.jpg',
            'L41-G2-RES-6-parte2.jpg',
            'L41-G2-RES-6-parte3.jpg',
            'L41-G2-RES-6-parte4.jpg'
          ]
        }
      ]
    }
  },
  L42: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L42-G1-EX-1.jpg',
          resposta: 'L42-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L42-G1-EX-2.jpg',
          resposta: 'L42-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L42-G1-EX-3.jpg',
          resposta: ['L42-G1-RES-3.jpg', 'L42-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L42-G1-EX-4.jpg',
          resposta: 'L42-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L42-G1-EX-5.jpg',
          resposta: 'L42-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L42-G1-EX-6.jpg',
          resposta: 'L42-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L42-G1-EX-7.jpg',
          resposta: ['L42-G1-RES-7.jpg', 'L42-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L42-G1-EX-8.jpg',
          resposta: 'L42-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L42-G1-EX-9.jpg',
          resposta: ['L42-G1-RES-9.jpg', 'L42-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L42-G1-EX-10.jpg',
          resposta: ['L42-G1-RES-10.jpg', 'L42-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: 'L42-G1-EX-11.jpg',
          resposta: ['L42-G1-RES-11.jpg', 'L42-G1-RES-11-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L42-G2-EX-1.jpg',
          resposta: ['L42-G2-RES-1.jpg', 'L42-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L42-G2-EX-2.jpg',
          resposta: ['L42-G2-RES-2.jpg', 'L42-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L42-G2-EX-3.jpg',
          resposta: ['L42-G2-RES-3.jpg', 'L42-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L42-G2-EX-4.jpg',
          resposta: [
            'L42-G2-RES-4.jpg',
            'L42-G2-RES-4-parte2.jpg',
            'L42-G2-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: 'L42-G2-EX-5.jpg',
          resposta: 'L42-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L42-G2-EX-6.jpg',
          resposta: ['L42-G2-RES-6.jpg', 'L42-G2-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L42-G2-EX-7.jpg',
          resposta: 'L42-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L42-G2-EX-8.jpg',
          resposta: [
            'L42-G2-RES-8.jpg',
            'L42-G2-RES-8-parte2.jpg',
            'L42-G2-RES-8-parte3.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: 'L42-G2-EX-9.jpg',
          resposta: ['L42-G2-RES-9.jpg', 'L42-G2-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L42-G2-EX-10.jpg', 'L42-G2-EX-10-parte2.jpg'],
          resposta: 'L42-G2-RES-10.jpg'
        }
      ]
    }
  },
  L43: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L43-G1-EX-1.jpg',
          resposta: 'L43-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L43-G1-EX-2.jpg',
          resposta: 'L43-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L43-G1-EX-3.jpg',
          resposta: 'L43-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L43-G1-EX-4.jpg',
          resposta: 'L43-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L43-G1-EX-5.jpg',
          resposta: 'L43-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L43-G1-EX-6.jpg',
          resposta: 'L43-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L43-G1-EX-7.jpg',
          resposta: 'L43-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L43-G1-EX-8.jpg',
          resposta: 'L43-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L43-G1-EX-9.jpg',
          resposta: 'L43-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L43-G1-EX-10.jpg',
          resposta: 'L43-G1-RES-10.jpg'
        }
      ]
    }
  },
  L44: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L44-G1-EX-1.jpg',
          resposta: 'L44-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L44-G1-EX-2.jpg',
          resposta: 'L44-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L44-G1-EX-3.jpg',
          resposta: 'L44-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L44-G1-EX-4.jpg',
          resposta: 'L44-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L44-G1-EX-5.jpg',
          resposta: 'L44-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L44-G1-EX-6.jpg',
          resposta: 'L44-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L44-G1-EX-7.jpg',
          resposta: 'L44-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L44-G1-EX-8.jpg',
          resposta: 'L44-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L44-G1-EX-9.jpg',
          resposta: 'L44-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L44-G1-EX-10.jpg',
          resposta: 'L44-G1-RES-10.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L44-G2-EX-1.jpg',
          resposta: ['L44-G2-RES-1.jpg', 'L44-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L44-G2-EX-2.jpg',
          resposta: 'L44-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L44-G2-EX-3.jpg',
          resposta: 'L44-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L44-G2-EX-4.jpg',
          resposta: 'L44-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L44-G2-EX-5.jpg',
          resposta: 'L44-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: ['L44-G2-EX-6.jpg', 'L44-G2-EX-6-parte2.jpg'],
          resposta: ['L44-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: 'L44-G2-EX-7.jpg',
          resposta: 'L44-G2-RES-7.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L44-G3-EX-1.jpg',
          resposta: 'L44-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L44-G3-EX-2.jpg',
          resposta: 'L44-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L44-G3-EX-3.jpg',
          resposta: 'L44-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L44-G3-EX-4.jpg',
          resposta: 'L44-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L44-G3-EX-5.jpg',
          resposta: 'L44-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L44-G3-EX-6.jpg',
          resposta: 'L44-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L44-G3-EX-7.jpg',
          resposta: 'L44-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L44-G3-EX-8.jpg',
          resposta: [
            'L44-G3-RES-8.jpg',
            'L44-G3-RES-8-parte2.jpg',
            'L44-G3-RES-8-parte3.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: 'L44-G3-EX-9.jpg',
          resposta: ['L44-G3-RES-9.jpg', 'L44-G3-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L44-G3-EX-10.jpg', 'L44-G3-EX-10-parte2.jpg'],
          resposta: 'L44-G3-RES-10.jpg'
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L44-G4-EX-1.jpg',
          resposta: ['L44-G4-RES-1.jpg', 'L44-G4-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L44-G4-EX-2.jpg',
          resposta: ['L44-G4-RES-2.jpg', 'L44-G4-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L44-G4-EX-3.jpg',
          resposta: 'L44-G4-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L44-G4-EX-4.jpg',
          resposta: 'L44-G4-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L44-G4-EX-5.jpg',
          resposta: ['L44-G4-RES-5.jpg', 'L44-G4-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L44-G4-EX-6.jpg',
          resposta: [
            'L44-G4-RES-6.jpg',
            'L44-G4-RES-6-parte2.jpg',
            'L44-G4-RES-6-parte3.jpg'
          ]
        }
      ]
    }
  },
  L45: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L45-G1-EX-1.jpg',
          resposta: 'L45-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L45-G1-EX-2.jpg',
          resposta: 'L45-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L45-G1-EX-3.jpg',
          resposta: 'L45-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L45-G1-EX-4.jpg',
          resposta: 'L45-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L45-G1-EX-5.jpg',
          resposta: 'L45-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L45-G1-EX-6.jpg',
          resposta: 'L45-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L45-G1-EX-7.jpg',
          resposta: 'L45-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L45-G1-EX-8.jpg',
          resposta: 'L45-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L45-G2-EX-1.jpg',
          resposta: 'L45-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L45-G2-EX-2.jpg',
          resposta: 'L45-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L45-G2-EX-3.jpg',
          resposta: ['L45-G2-RES-3.jpg', 'L45-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L45-G2-EX-4.jpg',
          resposta: 'L45-G2-RES-4.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L45-G3-EX-1.jpg',
          resposta: 'L45-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L45-G3-EX-2.jpg',
          resposta: ['L45-G3-RES-2.jpg', 'L45-G3-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L45-G3-EX-3.jpg',
          resposta: ['L45-G3-RES-3.jpg', 'L45-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L45-G3-EX-4.jpg',
          resposta: ['L45-G3-RES-4.jpg', 'L45-G3-RES-4-parte2.jpg']
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L45-G4-EX-1.jpg',
          resposta: 'L45-G4-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L45-G4-EX-2.jpg',
          resposta: 'L45-G4-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L45-G4-EX-3.jpg',
          resposta: 'L45-G4-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L45-G4-EX-4.jpg',
          resposta: 'L45-G4-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L45-G4-EX-5.jpg',
          resposta: 'L45-G4-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L45-G4-EX-6.jpg',
          resposta: 'L45-G4-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L45-G4-EX-7.jpg',
          resposta: 'L45-G4-RES-7.jpg'
        }
      ]
    },
    grupo5: {
      id: '5',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L45-G5-EX-1.jpg',
          resposta: ['L45-G5-RES-1.jpg', 'L45-G5-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L45-G5-EX-2.jpg',
          resposta: 'L45-G5-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L45-G5-EX-3.jpg',
          resposta: ['L45-G5-RES-3.jpg', 'L45-G5-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L45-G5-EX-4.jpg',
          resposta: 'L45-G5-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L45-G5-EX-5.jpg',
          resposta: 'L45-G5-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L45-G5-EX-6.jpg',
          resposta: 'L45-G5-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L45-G5-EX-7.jpg',
          resposta: ['L45-G5-RES-7.jpg', 'L45-G5-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L45-G5-EX-8.jpg',
          resposta: [
            'L45-G5-RES-8.jpg',
            'L45-G5-RES-8-parte2.jpg',
            'L45-G5-RES-8-parte3.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: 'L45-G5-EX-9.jpg',
          resposta: [
            'L45-G5-RES-9.jpg',
            'L45-G5-RES-9-parte2.jpg',
            'L45-G5-RES-9-parte3.jpg',
            'L45-G5-RES-9-parte4.jpg'
          ]
        }
      ]
    }
  },
  L46: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L46-G1-EX-1.jpg',
          resposta: 'L46-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L46-G1-EX-2.jpg',
          resposta: 'L46-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L46-G1-EX-3.jpg',
          resposta: 'L46-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L46-G1-EX-4.jpg',
          resposta: 'L46-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L46-G1-EX-5.jpg',
          resposta: 'L46-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L46-G1-EX-6.jpg',
          resposta: 'L46-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L46-G2-EX-1.jpg',
          resposta: 'L46-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L46-G2-EX-2.jpg',
          resposta: 'L46-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L46-G2-EX-3.jpg',
          resposta: 'L46-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L46-G2-EX-4.jpg',
          resposta: ['L46-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: 'L46-G2-EX-5.jpg',
          resposta: 'L46-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L46-G2-EX-6.jpg',
          resposta: 'L46-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L46-G2-EX-7.jpg',
          resposta: 'L46-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L46-G2-EX-8.jpg',
          resposta: 'L46-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L46-G2-EX-9.jpg',
          resposta: 'L46-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L46-G2-EX-10.jpg',
          resposta: ['L46-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: 'L46-G2-EX-11.jpg',
          resposta: 'L46-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L46-G2-EX-12.jpg',
          resposta: [
            'L46-G2-RES-12.jpg',
            'L46-G2-RES-12-parte2.jpg',
            'L46-G2-RES-12-parte3.jpg'
          ]
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L46-G3-EX-1.jpg',
          resposta: ['L46-G3-RES-1.jpg', 'L46-G3-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L46-G3-EX-2.jpg',
          resposta: 'L46-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L46-G3-EX-3.jpg',
          resposta: ['L46-G3-RES-3.jpg', 'L46-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L46-G3-EX-4.jpg',
          resposta: 'L46-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L46-G3-EX-5.jpg',
          resposta: 'L46-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L46-G3-EX-6.jpg',
          resposta: [
            'L46-G3-RES-6.jpg',
            'L46-G3-RES-6-parte2.jpg',
            'L46-G3-RES-6-parte3.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: 'L46-G3-EX-7.jpg',
          resposta: ['L46-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: 'L46-G3-EX-8.jpg',
          resposta: ['L46-G3-RES-8.jpg', 'L46-G3-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: 'L46-G3-EX-9.jpg',
          resposta: ['L46-G3-RES-9.jpg', 'L46-G3-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L46-G3-EX-10.jpg',
          resposta: 'L46-G3-RES-10.jpg'
        }
      ]
    }
  },
  L47: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L47-G1-EX-1.jpg',
          resposta: ['L47-G1-RES-1.jpg', 'L47-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L47-G1-EX-2.jpg',
          resposta: 'L47-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L47-G1-EX-3.jpg',
          resposta: ['L47-G1-RES-3.jpg', 'L47-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L47-G1-EX-4.jpg',
          resposta: [
            'L47-G1-RES-4.jpg',
            'L47-G1-RES-4-parte2.jpg',
            'L47-G1-RES-4-parte3.jpg',
            'L47-G1-RES-4-parte4.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: 'L47-G1-EX-5.jpg',
          resposta: 'L47-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L47-G1-EX-6.jpg',
          resposta: ['L47-G1-RES-6.jpg', 'L47-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L47-G1-EX-7.jpg',
          resposta: 'L47-G1-RES-7.jpg'
        }
      ]
    }
  },
  L48: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L48-G1-EX-1.jpg', 'L48-G1-EX-1-parte2.jpg'],
          resposta: [
            'L48-G1-RES-1.jpg',
            'L48-G1-RES-1-parte2.jpg',
            'L48-G1-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: 'L48-G1-EX-2.jpg',
          resposta: 'L48-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L48-G1-EX-3.jpg',
          resposta: 'L48-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L48-G1-EX-4.jpg',
          resposta: 'L48-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L48-G1-EX-5.jpg',
          resposta: 'L48-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L48-G1-EX-6.jpg',
          resposta: 'L48-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L48-G2-EX-1.jpg',
          resposta: 'L48-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L48-G2-EX-2.jpg',
          resposta: 'L48-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L48-G2-EX-3.jpg',
          resposta: 'L48-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L48-G2-EX-4.jpg',
          resposta: 'L48-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: ['L48-G2-EX-5.jpg', 'L48-G2-EX-5-parte2.jpg'],
          resposta: 'L48-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: ['L48-G2-EX-6.jpg', 'L48-G2-EX-6-parte2.jpg'],
          resposta: ['L48-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: 'L48-G2-EX-7.jpg',
          resposta: 'L48-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L48-G2-EX-8.jpg',
          resposta: 'L48-G2-RES-8.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L48-G3-EX-1.jpg',
          resposta: ['L48-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: 'L48-G3-EX-2.jpg',
          resposta: 'L48-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: ['L48-G3-EX-3.jpg'],
          resposta: 'L48-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L48-G3-EX-4.jpg',
          resposta: ['L48-G3-RES-4.jpg', 'L48-G3-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L48-G3-EX-5.jpg',
          resposta: 'L48-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L48-G3-EX-6.jpg',
          resposta: 'L48-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L48-G3-EX-7.jpg',
          resposta: 'L48-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L48-G3-EX-8.jpg',
          resposta: 'L48-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L48-G3-EX-9.jpg',
          resposta: ['L48-G3-RES-9.jpg', 'L48-G3-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L48-G3-EX-10.jpg',
          resposta: 'L48-G3-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L48-G3-EX-11.jpg',
          resposta: 'L48-G3-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L48-G3-EX-12.jpg',
          resposta: 'L48-G3-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L48-G3-EX-13.jpg',
          resposta: 'L48-G3-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L48-G3-EX-14.jpg',
          resposta: [
            'L48-G3-RES-14.jpg',
            'L48-G3-RES-14-parte2.jpg',
            'L48-G3-RES-14-parte3.jpg'
          ]
        },
        {
          ex: '15',
          enunciado: 'L48-G3-EX-15.jpg',
          resposta: 'L48-G3-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L48-G3-EX-16.jpg',
          resposta: 'L48-G3-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L48-G3-EX-17.jpg',
          resposta: 'L48-G3-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L48-G3-EX-18.jpg',
          resposta: 'L48-G3-RES-18.jpg'
        },
        {
          ex: '19',
          enunciado: 'L48-G3-EX-19.jpg',
          resposta: ['L48-G3-RES-19.jpg', 'L48-G3-RES-19-parte2.jpg']
        },
        {
          ex: '20',
          enunciado: 'L48-G3-EX-20.jpg',
          resposta: ['L48-G3-RES-20.jpg', 'L48-G3-RES-20-parte2.jpg']
        }
      ]
    }
  },
  L49: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L49-G1-EX-1.jpg',
          resposta: 'L49-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L49-G1-EX-2.jpg',
          resposta: 'L49-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L49-G1-EX-3.jpg',
          resposta: 'L49-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L49-G1-EX-4.jpg',
          resposta: ['L49-G1-RES-4.jpg', 'L49-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L49-G1-EX-5.jpg',
          resposta: ['L49-G1-RES-5.jpg', 'L49-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L49-G1-EX-6.jpg',
          resposta: 'L49-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L49-G2-EX-1.jpg',
          resposta: ['L49-G2-RES-1.jpg', 'L49-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L49-G2-EX-2.jpg',
          resposta: ['L49-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L49-G2-EX-3.jpg',
          resposta: [
            'L49-G2-RES-3.jpg',
            'L49-G2-RES-3-parte2.jpg',
            'L49-G2-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: 'L49-G2-EX-4.jpg',
          resposta: ['L49-G2-RES-4.jpg', 'L49-G2-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L49-G2-EX-5.jpg',
          resposta: [
            'L49-G2-RES-5.jpg',
            'L49-G2-RES-5-parte2.jpg',
            'L49-G2-RES-5-parte3.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: 'L49-G2-EX-6.jpg',
          resposta: ['L49-G2-RES-6.jpg', 'L49-G2-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L49-G2-EX-7.jpg',
          resposta: ['L49-G2-RES-7.jpg', 'L49-G2-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L49-G2-EX-8.jpg', 'L49-G2-EX-8-parte2.jpg'],
          resposta: [
            'L49-G2-RES-8.jpg',
            'L49-G2-RES-8-parte2.jpg',
            'L49-G2-RES-8-parte3.jpg',
            'L49-G2-RES-8-parte4.jpg',
            'L49-G2-RES-8-parte5.jpg',
            'L49-G2-RES-8-parte6.jpg',
            'L49-G2-RES-8-parte7.jpg',
            'L49-G2-RES-8-parte8.jpg',
            'L49-G2-RES-8-parte9.jpg'
          ]
        }
      ]
    }
  },
  L50: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L50-G1-EX-1.jpg',
          resposta: 'L50-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L50-G1-EX-2.jpg',
          resposta: 'L50-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L50-G1-EX-3.jpg',
          resposta: 'L50-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: ['L50-G1-EX-4.jpg', 'L50-G1-EX-4-parte2.jpg'],
          resposta: ['L50-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: 'L50-G1-EX-5.jpg',
          resposta: 'L50-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L50-G1-EX-6.jpg',
          resposta: 'L50-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L50-G2-EX-1.jpg',
          resposta: 'L50-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L50-G2-EX-2.jpg',
          resposta: ['L50-G2-RES-2.jpg', 'L50-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L50-G2-EX-3.jpg',
          resposta: 'L50-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L50-G2-EX-4.jpg',
          resposta: [
            'L50-G2-RES-4.jpg',
            'L50-G2-RES-4-parte2.jpg',
            'L50-G2-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: 'L50-G2-EX-5.jpg',
          resposta: ['L50-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: 'L50-G2-EX-6.jpg',
          resposta: 'L50-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L50-G2-EX-7.jpg',
          resposta: 'L50-G2-RES-7.jpg'
        }
      ]
    }
  },
  L51: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L51-G1-EX-1.jpg',
          resposta: 'L51-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L51-G1-EX-2.jpg',
          resposta: 'L51-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L51-G1-EX-3.jpg',
          resposta: 'L51-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L51-G1-EX-4.jpg',
          resposta: 'L51-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L51-G1-EX-5.jpg',
          resposta: 'L51-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L51-G1-EX-6.jpg',
          resposta: 'L51-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L51-G2-EX-1.jpg',
          resposta: 'L51-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L51-G2-EX-2.jpg',
          resposta: 'L51-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L51-G2-EX-3.jpg',
          resposta: 'L51-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L51-G2-EX-4.jpg',
          resposta: 'L51-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L51-G2-EX-5.jpg',
          resposta: 'L51-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L51-G2-EX-6.jpg',
          resposta: 'L51-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L51-G2-EX-7.jpg',
          resposta: ['L51-G2-RES-7.jpg', 'L51-G2-RES-7-parte2.jpg']
        }
      ]
    }
  },
  L52: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L52-G1-EX-1.jpg',
          resposta: 'L52-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L52-G1-EX-2.jpg',
          resposta: ['L52-G1-RES-2.jpg', 'L52-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L52-G1-EX-3.jpg',
          resposta: ['L52-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: 'L52-G1-EX-4.jpg',
          resposta: 'L52-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L52-G1-EX-5.jpg',
          resposta: ['L52-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: 'L52-G1-EX-6.jpg',
          resposta: 'L52-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L52-G1-EX-7.jpg',
          resposta: 'L52-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: ['L52-G1-EX-8.jpg'],
          resposta: 'L52-G1-RES-8.jpg'
        }
      ]
    }
  },
  L53: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L53-G1-EX-1.jpg',
          resposta: 'L53-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L53-G1-EX-2.jpg',
          resposta: 'L53-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L53-G1-EX-3.jpg',
          resposta: 'L53-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L53-G1-EX-4.jpg',
          resposta: 'L53-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L53-G1-EX-5.jpg',
          resposta: 'L53-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L53-G2-EX-1.jpg',
          resposta: 'L53-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L53-G2-EX-2.jpg',
          resposta: 'L53-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L53-G2-EX-3.jpg',
          resposta: 'L53-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L53-G2-EX-4.jpg',
          resposta: 'L53-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L53-G2-EX-5.jpg',
          resposta: 'L53-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L53-G2-EX-6.jpg',
          resposta: 'L53-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L53-G2-EX-7.jpg',
          resposta: 'L53-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L53-G2-EX-8.jpg',
          resposta: 'L53-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L53-G2-EX-9.jpg',
          resposta: [
            'L53-G2-RES-9.jpg',
            'L53-G2-RES-9-parte2.jpg',
            'L53-G2-RES-9-parte3.jpg',
            'L53-G2-RES-9-parte4.jpg',
            'L53-G2-RES-9-parte5.jpg',
            'L53-G2-RES-9-parte6.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: 'L53-G2-EX-10.jpg',
          resposta: [
            'L53-G2-RES-10.jpg',
            'L53-G2-RES-10-parte2.jpg',
            'L53-G2-RES-10-parte3.jpg'
          ]
        }
      ]
    }
  },
  L54: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L54-G1-EX-1.jpg',
          resposta: ['L54-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: 'L54-G1-EX-2.jpg',
          resposta: 'L54-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L54-G1-EX-3.jpg',
          resposta: 'L54-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L54-G1-EX-4.jpg',
          resposta: ['L54-G1-RES-4.jpg', 'L54-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L54-G1-EX-5.jpg',
          resposta: 'L54-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L54-G1-EX-6.jpg',
          resposta: ['L54-G1-RES-6.jpg', 'L54-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L54-G1-EX-7.jpg',
          resposta: 'L54-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L54-G1-EX-8.jpg',
          resposta: 'L54-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L54-G2-EX-1.jpg',
          resposta: 'L54-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L54-G2-EX-2.jpg',
          resposta: ['L54-G2-RES-2.jpg', 'L54-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L54-G2-EX-3.jpg',
          resposta: ['L54-G2-RES-3.jpg', 'L54-G2-RES-3-parte2.jpg']
        }
      ]
    }
  },
  L55: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L55-G1-EX-1.jpg',
          resposta: [
            'L55-G1-RES-1.jpg',
            'L55-G1-RES-1-parte2.jpg',
            'L55-G1-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: 'L55-G1-EX-2.jpg',
          resposta: ['L55-G1-RES-2.jpg', 'L55-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L55-G1-EX-3.jpg',
          resposta: ['L55-G1-RES-3.jpg', 'L55-G1-RES-3-parte2.jpg']
        }
      ]
    }
  },
  L56: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L56-G1-EX-1.jpg',
          resposta: ['L56-G1-RES-1.jpg', 'L56-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L56-G1-EX-2.jpg',
          resposta: 'L56-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L56-G1-EX-3.jpg',
          resposta: 'L56-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L56-G1-EX-4.jpg',
          resposta: 'L56-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L56-G1-EX-5.jpg',
          resposta: 'L56-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L56-G1-EX-6.jpg',
          resposta: 'L56-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L56-G1-EX-7.jpg',
          resposta: ['L56-G1-RES-7.jpg', 'L56-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L56-G1-EX-8.jpg',
          resposta: ['L56-G1-RES-8.jpg', 'L56-G1-RES-8-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L56-G2-EX-1.jpg',
          resposta: 'L56-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L56-G2-EX-2.jpg',
          resposta: 'L56-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L56-G2-EX-3.jpg',
          resposta: 'L56-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L56-G2-EX-4.jpg',
          resposta: 'L56-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L56-G2-EX-5.jpg',
          resposta: 'L56-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L56-G2-EX-6.jpg',
          resposta: 'L56-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L56-G2-EX-7.jpg',
          resposta: 'L56-G2-RES-7.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L56-G3-EX-1.jpg',
          resposta: 'L56-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L56-G3-EX-2.jpg',
          resposta: 'L56-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L56-G3-EX-3.jpg',
          resposta: 'L56-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L56-G3-EX-4.jpg',
          resposta: 'L56-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L56-G3-EX-5.jpg',
          resposta: 'L56-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L56-G3-EX-6.jpg',
          resposta: 'L56-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L56-G3-EX-7.jpg',
          resposta: 'L56-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L56-G3-EX-8.jpg',
          resposta: ['L56-G3-RES-8.jpg', 'L56-G3-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: 'L56-G3-EX-9.jpg',
          resposta: ['L56-G3-RES-9.jpg', 'L56-G3-RES-9-parte2.jpg']
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L56-G4-EX-1.jpg',
          resposta: 'L56-G4-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L56-G4-EX-2.jpg',
          resposta: 'L56-G4-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L56-G4-EX-3.jpg',
          resposta: ['L56-G4-RES-3.jpg', 'L56-G4-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L56-G4-EX-4.jpg', 'L56-G4-EX-4-parte2.jpg'],
          resposta: ['L56-G4-RES-4.jpg', 'L56-G4-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L56-G4-EX-5.jpg',
          resposta: 'L56-G4-RES-5.jpg'
        }
      ]
    }
  },
  L57: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L57-G1-EX-1.jpg',
          resposta: 'L57-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L57-G1-EX-2.jpg',
          resposta: 'L57-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L57-G1-EX-3.jpg',
          resposta: 'L57-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L57-G1-EX-4.jpg',
          resposta: 'L57-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L57-G1-EX-5.jpg',
          resposta: 'L57-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L57-G2-EX-1.jpg',
          resposta: 'L57-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L57-G2-EX-2.jpg',
          resposta: 'L57-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L57-G2-EX-3.jpg',
          resposta: 'L57-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L57-G2-EX-4.jpg',
          resposta: 'L57-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L57-G2-EX-5.jpg',
          resposta: 'L57-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L57-G2-EX-6.jpg',
          resposta: 'L57-G2-RES-6.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L57-G3-EX-1.jpg',
          resposta: 'L57-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L57-G3-EX-2.jpg',
          resposta: 'L57-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L57-G3-EX-3.jpg',
          resposta: 'L57-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L57-G3-EX-4.jpg',
          resposta: 'L57-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L57-G3-EX-5.jpg',
          resposta: 'L57-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L57-G3-EX-6.jpg',
          resposta: 'L57-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L57-G3-EX-7.jpg',
          resposta: [
            'L57-G3-RES-7.jpg',
            'L57-G3-RES-7-parte2.jpg',
            'L57-G3-RES-7-parte3.jpg'
          ]
        }
      ]
    }
  },
  L58: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L58-G1-EX-1.jpg',
          resposta: 'L58-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L58-G1-EX-2.jpg',
          resposta: 'L58-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L58-G1-EX-3.jpg',
          resposta: 'L58-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L58-G1-EX-4.jpg',
          resposta: ['L58-G1-RES-4.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L58-G2-EX-1.jpg',
          resposta: 'L58-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L58-G2-EX-2.jpg',
          resposta: 'L58-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L58-G2-EX-3.jpg',
          resposta: 'L58-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: ['L58-G2-EX-4.jpg'],
          resposta: 'L58-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L58-G2-EX-5.jpg',
          resposta: 'L58-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L58-G2-EX-6.jpg',
          resposta: 'L58-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: ['L58-G2-EX-7.jpg', 'L58-G2-EX-7-parte2.jpg'],
          resposta: [
            'L58-G2-RES-7.jpg',
            'L58-G2-RES-7-parte2.jpg',
            'L58-G2-RES-7-parte3.jpg',
            'L58-G2-RES-7-parte4.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: 'L58-G2-EX-8.jpg',
          resposta: 'L58-G2-RES-8.jpg'
        }
      ]
    }
  },
  L59: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L59-G1-EX-1.jpg',
          resposta: 'L59-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L59-G1-EX-2.jpg',
          resposta: 'L59-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L59-G1-EX-3.jpg',
          resposta: 'L59-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L59-G1-EX-4.jpg',
          resposta: 'L59-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L59-G1-EX-5.jpg',
          resposta: 'L59-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L59-G1-EX-6.jpg',
          resposta: ['L59-G1-RES-6.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L59-G2-EX-1.jpg',
          resposta: 'L59-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L59-G2-EX-2.jpg',
          resposta: ['L59-G2-RES-2.jpg', 'L59-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L59-G2-EX-3.jpg',
          resposta: 'L59-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L59-G2-EX-4.jpg',
          resposta: 'L59-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L59-G2-EX-5.jpg',
          resposta: 'L59-G2-RES-5.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L59-G3-EX-1.jpg',
          resposta: ['L59-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: 'L59-G3-EX-2.jpg',
          resposta: 'L59-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L59-G3-EX-3.jpg',
          resposta: 'L59-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L59-G3-EX-4.jpg',
          resposta: ['L59-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L59-G3-EX-5.jpg'],
          resposta: ['L59-G3-RES-5.jpg']
        }
      ]
    }
  },
  L60: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L60-G1-EX-1.jpg',
          resposta: 'L60-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L60-G1-EX-2.jpg',
          resposta: 'L60-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L60-G1-EX-3.jpg',
          resposta: 'L60-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L60-G1-EX-4.jpg',
          resposta: 'L60-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L60-G1-EX-5.jpg',
          resposta: 'L60-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L60-G1-EX-6.jpg',
          resposta: 'L60-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L60-G1-EX-7.jpg',
          resposta: 'L60-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L60-G1-EX-8.jpg',
          resposta: 'L60-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L60-G1-EX-9.jpg',
          resposta: 'L60-G1-RES-9.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L60-G2-EX-1.jpg',
          resposta: 'L60-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L60-G2-EX-2.jpg',
          resposta: 'L60-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L60-G2-EX-3.jpg',
          resposta: 'L60-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L60-G2-EX-4.jpg',
          resposta: 'L60-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L60-G2-EX-5.jpg',
          resposta: 'L60-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L60-G2-EX-6.jpg',
          resposta: 'L60-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L60-G2-EX-7.jpg',
          resposta: 'L60-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L60-G2-EX-8.jpg',
          resposta: 'L60-G2-RES-8.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L60-G3-EX-1.jpg',
          resposta: 'L60-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L60-G3-EX-2.jpg',
          resposta: 'L60-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L60-G3-EX-3.jpg',
          resposta: 'L60-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L60-G3-EX-4.jpg',
          resposta: 'L60-G3-RES-4.jpg'
        }
      ]
    }
  },
  L61: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L61-G1-EX-1.jpg',
          resposta: 'L61-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L61-G1-EX-2.jpg',
          resposta: 'L61-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L61-G1-EX-3.jpg',
          resposta: 'L61-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L61-G1-EX-4.jpg',
          resposta: 'L61-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L61-G1-EX-5.jpg',
          resposta: 'L61-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L61-G1-EX-6.jpg',
          resposta: 'L61-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L61-G1-EX-7.jpg',
          resposta: 'L61-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L61-G1-EX-8.jpg',
          resposta: 'L61-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L61-G2-EX-1.jpg',
          resposta: 'L61-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L61-G2-EX-2.jpg',
          resposta: 'L61-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L61-G2-EX-3.jpg',
          resposta: [
            'L61-G2-RES-3.jpg',
            'L61-G2-RES-3-parte2.jpg',
            'L61-G2-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: 'L61-G2-EX-4.jpg',
          resposta: 'L61-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L61-G2-EX-5.jpg',
          resposta: ['L61-G2-RES-5.jpg', 'L61-G2-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L61-G2-EX-6.jpg',
          resposta: 'L61-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L61-G2-EX-7.jpg',
          resposta: 'L61-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L61-G2-EX-8.jpg',
          resposta: 'L61-G2-RES-8.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L61-G3-EX-1.jpg',
          resposta: ['L61-G3-RES-1.jpg', 'L61-G3-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L61-G3-EX-2.jpg',
          resposta: ['L61-G3-RES-2.jpg', 'L61-G3-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L61-G3-EX-3.jpg',
          resposta: 'L61-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L61-G3-EX-4.jpg',
          resposta: [
            'L61-G3-RES-4.jpg',
            'L61-G3-RES-4-parte2.jpg',
            'L61-G3-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: 'L61-G3-EX-5.jpg',
          resposta: 'L61-G3-RES-5.jpg'
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L61-G4-EX-1.jpg',
          resposta: 'L61-G4-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L61-G4-EX-2.jpg',
          resposta: 'L61-G4-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L61-G4-EX-3.jpg',
          resposta: 'L61-G4-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L61-G4-EX-4.jpg',
          resposta: ['L61-G4-RES-4.jpg']
        }
      ]
    }
  },
  L62: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L62-G1-EX-1.jpg',
          resposta: 'L62-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L62-G1-EX-2.jpg',
          resposta: 'L62-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L62-G1-EX-3.jpg',
          resposta: 'L62-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L62-G1-EX-4.jpg',
          resposta: 'L62-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L62-G1-EX-5.jpg',
          resposta: 'L62-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L62-G1-EX-6.jpg',
          resposta: 'L62-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L62-G1-EX-7.jpg',
          resposta: ['L62-G1-RES-7.jpg', 'L62-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L62-G1-EX-8.jpg',
          resposta: ['L62-G1-RES-8.jpg', 'L62-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: 'L62-G1-EX-9.jpg',
          resposta: ['L62-G1-RES-9.jpg', 'L62-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L62-G1-EX-10.jpg',
          resposta: ['L62-G1-RES-10.jpg', 'L62-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: 'L62-G1-EX-11.jpg',
          resposta: 'L62-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: ['L62-G1-EX-12.jpg', 'L62-G1-EX-12-parte2.jpg'],
          resposta: ['L62-G1-RES-12.jpg', 'L62-G1-RES-12-parte2.jpg']
        },
        {
          ex: '13',
          enunciado: ['L62-G1-EX-13.jpg', 'L62-G1-EX-13-parte2.jpg'],
          resposta: 'L62-G1-RES-13.jpg'
        }
      ]
    }
  },
  L63: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L63-G1-EX-1.jpg',
          resposta: 'L63-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L63-G1-EX-2.jpg',
          resposta: 'L63-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L63-G1-EX-3.jpg',
          resposta: 'L63-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L63-G1-EX-4.jpg',
          resposta: 'L63-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L63-G1-EX-5.jpg',
          resposta: 'L63-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L63-G1-EX-6.jpg',
          resposta: 'L63-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L63-G1-EX-7.jpg',
          resposta: 'L63-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L63-G2-EX-1.jpg',
          resposta: 'L63-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L63-G2-EX-2.jpg',
          resposta: 'L63-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L63-G2-EX-3.jpg',
          resposta: 'L63-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L63-G2-EX-4.jpg',
          resposta: 'L63-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L63-G2-EX-5.jpg',
          resposta: 'L63-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L63-G2-EX-6.jpg',
          resposta: 'L63-G2-RES-6.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L63-G3-EX-1.jpg',
          resposta: 'L63-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L63-G3-EX-2.jpg',
          resposta: 'L63-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L63-G3-EX-3.jpg',
          resposta: 'L63-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L63-G3-EX-4.jpg',
          resposta: ['L63-G3-RES-4.jpg', 'L63-G3-RES-4-parte2.jpg']
        }
      ]
    }
  },
  L64: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L64-G1-EX-1.jpg',
          resposta: 'L64-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L64-G1-EX-2.jpg',
          resposta: 'L64-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L64-G1-EX-3.jpg',
          resposta: 'L64-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L64-G1-EX-4.jpg',
          resposta: 'L64-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L64-G1-EX-5.jpg',
          resposta: 'L64-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L64-G1-EX-6.jpg',
          resposta: 'L64-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L64-G2-EX-1.jpg',
          resposta: 'L64-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L64-G2-EX-2.jpg',
          resposta: 'L64-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L64-G2-EX-3.jpg',
          resposta: 'L64-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L64-G2-EX-4.jpg',
          resposta: 'L64-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L64-G2-EX-5.jpg',
          resposta: 'L64-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L64-G2-EX-6.jpg',
          resposta: ['L64-G2-RES-6.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L64-G3-EX-1.jpg',
          resposta: 'L64-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L64-G3-EX-2.jpg',
          resposta: ['L64-G3-RES-2.jpg', 'L64-G3-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L64-G3-EX-3.jpg',
          resposta: 'L64-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L64-G3-EX-4.jpg',
          resposta: 'L64-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L64-G3-EX-5.jpg',
          resposta: 'L64-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L64-G3-EX-6.jpg',
          resposta: 'L64-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L64-G3-EX-7.jpg',
          resposta: ['L64-G3-RES-7.jpg', 'L64-G3-RES-7-parte2.jpg']
        }
      ]
    }
  },
  L65: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L65-G1-EX-1.jpg',
          resposta: 'L65-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: ['L65-G1-EX-2.jpg', 'L65-G1-EX-2-parte2.jpg'],
          resposta: 'L65-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L65-G1-EX-3.jpg',
          resposta: 'L65-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L65-G1-EX-4.jpg',
          resposta: 'L65-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L65-G1-EX-5.jpg',
          resposta: 'L65-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L65-G1-EX-6.jpg',
          resposta: 'L65-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L65-G1-EX-7.jpg',
          resposta: 'L65-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L65-G1-EX-8.jpg',
          resposta: 'L65-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L65-G1-EX-9.jpg',
          resposta: 'L65-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L65-G1-EX-10.jpg',
          resposta: 'L65-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L65-G1-EX-11.jpg',
          resposta: 'L65-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L65-G1-EX-12.jpg',
          resposta: 'L65-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L65-G1-EX-13.jpg',
          resposta: 'L65-G1-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L65-G1-EX-14.jpg',
          resposta: 'L65-G1-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L65-G1-EX-15.jpg',
          resposta: 'L65-G1-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L65-G1-EX-16.jpg',
          resposta: ['L65-G1-RES-16.jpg', 'L65-G1-RES-16-parte2.jpg']
        },
        {
          ex: '17',
          enunciado: 'L65-G1-EX-17.jpg',
          resposta: 'L65-G1-RES-17.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L65-G2-EX-1.jpg',
          resposta: 'L65-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L65-G2-EX-2.jpg',
          resposta: 'L65-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L65-G2-EX-3.jpg',
          resposta: 'L65-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L65-G2-EX-4.jpg',
          resposta: 'L65-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L65-G2-EX-5.jpg',
          resposta: 'L65-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L65-G2-EX-6.jpg',
          resposta: 'L65-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L65-G2-EX-7.jpg',
          resposta: 'L65-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L65-G2-EX-8.jpg',
          resposta: 'L65-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L65-G2-EX-9.jpg',
          resposta: 'L65-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L65-G2-EX-10.jpg',
          resposta: 'L65-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L65-G2-EX-11.jpg',
          resposta: 'L65-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L65-G2-EX-12.jpg',
          resposta: 'L65-G2-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L65-G2-EX-13.jpg',
          resposta: 'L65-G2-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L65-G2-EX-14.jpg',
          resposta: 'L65-G2-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L65-G2-EX-15.jpg',
          resposta: 'L65-G2-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L65-G2-EX-16.jpg',
          resposta: 'L65-G2-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L65-G2-EX-17.jpg',
          resposta: 'L65-G2-RES-17.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L65-G3-EX-1.jpg',
          resposta: 'L65-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L65-G3-EX-2.jpg',
          resposta: 'L65-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L65-G3-EX-3.jpg',
          resposta: 'L65-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L65-G3-EX-4.jpg',
          resposta: 'L65-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L65-G3-EX-5.jpg',
          resposta: 'L65-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L65-G3-EX-6.jpg',
          resposta: 'L65-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L65-G3-EX-7.jpg',
          resposta: 'L65-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L65-G3-EX-8.jpg',
          resposta: 'L65-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L65-G3-EX-9.jpg',
          resposta: 'L65-G3-RES-9.jpg'
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L65-G4-EX-1.jpg',
          resposta: 'L65-G4-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L65-G4-EX-2.jpg',
          resposta: 'L65-G4-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L65-G4-EX-3.jpg',
          resposta: 'L65-G4-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L65-G4-EX-4.jpg',
          resposta: 'L65-G4-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L65-G4-EX-5.jpg',
          resposta: 'L65-G4-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L65-G4-EX-6.jpg',
          resposta: 'L65-G4-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L65-G4-EX-7.jpg',
          resposta: 'L65-G4-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L65-G4-EX-8.jpg',
          resposta: 'L65-G4-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L65-G4-EX-9.jpg',
          resposta: 'L65-G4-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L65-G4-EX-10.jpg',
          resposta: 'L65-G4-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L65-G4-EX-11.jpg',
          resposta: 'L65-G4-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L65-G4-EX-12.jpg',
          resposta: ['L65-G4-RES-12.jpg', 'L65-G4-RES-12-parte2.jpg']
        },
        {
          ex: '13',
          enunciado: 'L65-G4-EX-13.jpg',
          resposta: 'L65-G4-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L65-G4-EX-14.jpg',
          resposta: 'L65-G4-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L65-G4-EX-15.jpg',
          resposta: [
            'L65-G4-RES-15.jpg',
            'L65-G4-RES-15-parte2.jpg',
            'L65-G4-RES-15-parte3.jpg'
          ]
        },
        {
          ex: '16',
          enunciado: 'L65-G4-EX-16.jpg',
          resposta: ['L65-G4-RES-16.jpg', 'L65-G4-RES-16-parte2.jpg']
        },
        {
          ex: '17',
          enunciado: 'L65-G4-EX-17.jpg',
          resposta: 'L65-G4-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L65-G4-EX-18.jpg',
          resposta: 'L65-G4-RES-18.jpg'
        },
        {
          ex: '19',
          enunciado: 'L65-G4-EX-19.jpg',
          resposta: 'L65-G4-RES-19.jpg'
        },
        {
          ex: '20',
          enunciado: 'L65-G4-EX-20.jpg',
          resposta: [
            'L65-G4-RES-20.jpg',
            'L65-G4-RES-20-parte2.jpg',
            'L65-G4-RES-20-parte3.jpg'
          ]
        }
      ]
    }
  },
  L66: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L66-G1-EX-1.jpg',
          resposta: 'L66-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L66-G1-EX-2.jpg',
          resposta: 'L66-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L66-G1-EX-3.jpg',
          resposta: 'L66-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L66-G1-EX-4.jpg',
          resposta: 'L66-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L66-G1-EX-5.jpg',
          resposta: 'L66-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L66-G1-EX-6.jpg',
          resposta: 'L66-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L66-G1-EX-7.jpg',
          resposta: ['L66-G1-RES-7.jpg', 'L66-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L66-G1-EX-8.jpg',
          resposta: 'L66-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L66-G1-EX-9.jpg',
          resposta: 'L66-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L66-G1-EX-10.jpg',
          resposta: 'L66-G1-RES-10.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L66-G2-EX-1.jpg',
          resposta: 'L66-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L66-G2-EX-2.jpg',
          resposta: 'L66-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L66-G2-EX-3.jpg',
          resposta: 'L66-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L66-G2-EX-4.jpg',
          resposta: 'L66-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L66-G2-EX-5.jpg',
          resposta: 'L66-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L66-G2-EX-6.jpg',
          resposta: 'L66-G2-RES-6.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L66-G3-EX-1.jpg',
          resposta: 'L66-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L66-G3-EX-2.jpg',
          resposta: 'L66-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L66-G3-EX-3.jpg',
          resposta: 'L66-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L66-G3-EX-4.jpg',
          resposta: 'L66-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L66-G3-EX-5.jpg',
          resposta: 'L66-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L66-G3-EX-6.jpg',
          resposta: ['L66-G3-RES-6.jpg', 'L66-G3-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L66-G3-EX-7.jpg',
          resposta: 'L66-G3-RES-7.jpg'
        }
      ]
    }
  },
  L67: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L67-G1-EX-1.jpg',
          resposta: 'L67-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L67-G1-EX-2.jpg',
          resposta: [
            'L67-G1-RES-2.jpg',
            'L67-G1-RES-2-parte2.jpg',
            'L67-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: 'L67-G1-EX-3.jpg',
          resposta: 'L67-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L67-G1-EX-4.jpg',
          resposta: 'L67-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L67-G1-EX-5.jpg',
          resposta: 'L67-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L67-G2-EX-1.jpg',
          resposta: 'L67-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L67-G2-EX-2.jpg',
          resposta: 'L67-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L67-G2-EX-3.jpg',
          resposta: 'L67-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L67-G2-EX-4.jpg',
          resposta: 'L67-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L67-G2-EX-5.jpg',
          resposta: 'L67-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L67-G2-EX-6.jpg',
          resposta: 'L67-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L67-G2-EX-7.jpg',
          resposta: ['L67-G2-RES-7.jpg', 'L67-G2-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L67-G2-EX-8.jpg',
          resposta: 'L67-G2-RES-8.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L67-G3-EX-1.jpg',
          resposta: 'L67-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: ['L67-G3-EX-2.jpg'],
          resposta: 'L67-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: ['L67-G3-EX-3.jpg', 'L67-G3-EX-3-parte2.jpg'],
          resposta: ['L67-G3-RES-3.jpg', 'L67-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L67-G3-EX-4.jpg',
          resposta: 'L67-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L67-G3-EX-5.jpg',
          resposta: 'L67-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L67-G3-EX-6.jpg',
          resposta: ['L67-G3-RES-6.jpg', 'L67-G3-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L67-G3-EX-7.jpg', 'L67-G3-EX-7-parte2.jpg'],
          resposta: ['L67-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: 'L67-G3-EX-8.jpg',
          resposta: 'L67-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L67-G3-EX-9.jpg',
          resposta: ['L67-G3-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: 'L67-G3-EX-10.jpg',
          resposta: ['L67-G3-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: 'L67-G3-EX-11.jpg',
          resposta: 'L67-G3-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L67-G3-EX-12.jpg',
          resposta: [
            'L67-G3-RES-12.jpg',
            'L67-G3-RES-12-parte2.jpg',
            'L67-G3-RES-12-parte3.jpg'
          ]
        }
      ]
    }
  },
  L68: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L68-G1-EX-1.jpg',
          resposta: 'L68-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L68-G1-EX-2.jpg',
          resposta: 'L68-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L68-G1-EX-3.jpg',
          resposta: 'L68-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L68-G1-EX-4.jpg',
          resposta: 'L68-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L68-G1-EX-5.jpg',
          resposta: ['L68-G1-RES-5.jpg', 'L68-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L68-G1-EX-6.jpg',
          resposta: 'L68-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L68-G2-EX-1.jpg',
          resposta: 'L68-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L68-G2-EX-2.jpg',
          resposta: 'L68-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L68-G2-EX-3.jpg',
          resposta: 'L68-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L68-G2-EX-4.jpg',
          resposta: 'L68-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L68-G2-EX-5.jpg',
          resposta: ['L68-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: 'L68-G2-EX-6.jpg',
          resposta: 'L68-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L68-G2-EX-7.jpg',
          resposta: 'L68-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L68-G2-EX-8.jpg',
          resposta: 'L68-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L68-G2-EX-9.jpg',
          resposta: 'L68-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L68-G2-EX-10.jpg',
          resposta: ['L68-G2-RES-10.jpg', 'L68-G2-RES-10-parte2.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L68-G3-EX-1.jpg',
          resposta: 'L68-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L68-G3-EX-2.jpg',
          resposta: 'L68-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L68-G3-EX-3.jpg',
          resposta: 'L68-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L68-G3-EX-4.jpg',
          resposta: ['L68-G3-RES-4.jpg', 'L68-G3-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L68-G3-EX-5.jpg',
          resposta: ['L68-G3-RES-5.jpg', 'L68-G3-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L68-G3-EX-6.jpg',
          resposta: ['L68-G3-RES-6.jpg', 'L68-G3-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L68-G3-EX-7.jpg',
          resposta: 'L68-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: ['L68-G3-EX-8.jpg'],
          resposta: [
            'L68-G3-RES-8.jpg',
            'L68-G3-RES-8-parte2.jpg',
            'L68-G3-RES-8-parte3.jpg',
            'L68-G3-RES-8-parte4.jpg',
            'L68-G3-RES-8-parte5.jpg'
          ]
        }
      ]
    }
  },
  L69: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L69-G1-EX-1.jpg',
          resposta: 'L69-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L69-G1-EX-2.jpg',
          resposta: 'L69-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L69-G1-EX-3.jpg',
          resposta: 'L69-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L69-G1-EX-4.jpg',
          resposta: 'L69-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L69-G1-EX-5.jpg',
          resposta: 'L69-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L69-G1-EX-6.jpg',
          resposta: 'L69-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L69-G2-EX-1.jpg',
          resposta: 'L69-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L69-G2-EX-2.jpg',
          resposta: 'L69-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L69-G2-EX-3.jpg',
          resposta: 'L69-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L69-G2-EX-4.jpg',
          resposta: 'L69-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L69-G2-EX-5.jpg',
          resposta: 'L69-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L69-G2-EX-6.jpg',
          resposta: 'L69-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L69-G2-EX-7.jpg',
          resposta: ['L69-G2-RES-7.jpg', 'L69-G2-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L69-G2-EX-8.jpg',
          resposta: [
            'L69-G2-RES-8.jpg',
            'L69-G2-RES-8-parte2.jpg',
            'L69-G2-RES-8-parte3.jpg'
          ]
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L69-G3-EX-1.jpg',
          resposta: 'L69-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L69-G3-EX-2.jpg',
          resposta: ['L69-G3-RES-2.jpg', 'L69-G3-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L69-G3-EX-3.jpg',
          resposta: ['L69-G3-RES-3.jpg', 'L69-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L69-G3-EX-4.jpg',
          resposta: 'L69-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L69-G3-EX-5.jpg',
          resposta: ['L69-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: 'L69-G3-EX-6.jpg',
          resposta: ['L69-G3-RES-6.jpg', 'L69-G3-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L69-G3-EX-7.jpg', 'L69-G3-EX-7-parte2.jpg'],
          resposta: ['L69-G3-RES-7.jpg', 'L69-G3-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L69-G3-EX-8.jpg',
          resposta: ['L69-G3-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: 'L69-G3-EX-9.jpg',
          resposta: 'L69-G3-RES-9.jpg'
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L69-G4-EX-1.jpg',
          resposta: 'L69-G4-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L69-G4-EX-2.jpg',
          resposta: ['L69-G4-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L69-G4-EX-3.jpg',
          resposta: 'L69-G4-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L69-G4-EX-4.jpg',
          resposta: ['L69-G4-RES-4.jpg', 'L69-G4-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L69-G4-EX-5.jpg',
          resposta: 'L69-G4-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L69-G4-EX-6.jpg',
          resposta: [
            'L69-G4-RES-6.jpg',
            'L69-G4-RES-6-parte2.jpg',
            'L69-G4-RES-6-parte3.jpg',
            'L69-G4-RES-6-parte4.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: 'L69-G4-EX-7.jpg',
          resposta: [
            'L69-G4-RES-7.jpg',
            'L69-G4-RES-7-parte2.jpg',
            'L69-G4-RES-7-parte3.jpg'
          ]
        }
      ]
    }
  },
  L70: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L70-G1-EX-1.jpg',
          resposta: 'L70-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L70-G1-EX-2.jpg',
          resposta: 'L70-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L70-G1-EX-3.jpg',
          resposta: ['L70-G1-RES-3.jpg', 'L70-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L70-G1-EX-4.jpg',
          resposta: 'L70-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L70-G1-EX-5.jpg',
          resposta: ['L70-G1-RES-5.jpg', 'L70-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L70-G1-EX-6.jpg',
          resposta: 'L70-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L70-G1-EX-7.jpg',
          resposta: 'L70-G1-RES-7.jpg'
        }
      ]
    }
  },
  L71: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L71-G1-EX-1.jpg',
          resposta: 'L71-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L71-G1-EX-2.jpg',
          resposta: 'L71-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L71-G1-EX-3.jpg',
          resposta: [
            'L71-G1-RES-3.jpg',
            'L71-G1-RES-3-parte2.jpg',
            'L71-G1-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: 'L71-G1-EX-4.jpg',
          resposta: ['L71-G1-RES-4.jpg', 'L71-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L71-G1-EX-5.jpg',
          resposta: 'L71-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L71-G1-EX-6.jpg',
          resposta: ['L71-G1-RES-6.jpg', 'L71-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: 'L71-G1-EX-7.jpg',
          resposta: ['L71-G1-RES-7.jpg', 'L71-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L71-G1-EX-8.jpg',
          resposta: 'L71-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L71-G1-EX-9.jpg',
          resposta: ['L71-G1-RES-9.jpg', 'L71-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L71-G1-EX-10.jpg',
          resposta: ['L71-G1-RES-10.jpg', 'L71-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: 'L71-G1-EX-11.jpg',
          resposta: ['L71-G1-RES-11.jpg', 'L71-G1-RES-11-parte2.jpg']
        }
      ]
    }
  },
  L205: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L205-G1-EX-1.jpg',
          resposta: 'L205-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L205-G1-EX-2.jpg',
          resposta: 'L205-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L205-G1-EX-3.jpg',
          resposta: ['L205-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: 'L205-G1-EX-4.jpg',
          resposta: ['L205-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: 'L205-G1-EX-5.jpg',
          resposta: 'L205-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L205-G1-EX-6.jpg',
          resposta: ['L205-G1-RES-6.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L205-G2-EX-1.jpg',
          resposta: 'L205-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L205-G2-EX-2.jpg',
          resposta: 'L205-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L205-G2-EX-3.jpg',
          resposta: ['L205-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: 'L205-G2-EX-4.jpg',
          resposta: ['L205-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: 'L205-G2-EX-5.jpg',
          resposta: 'L205-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L205-G2-EX-6.jpg',
          resposta: ['L205-G2-RES-6.jpg', 'L205-G2-RES-6-parte2.jpg']
        }
      ]
    }
  },
  L72: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L72-G1-EX-1.jpg',
          resposta: ['L72-G1-RES-1.jpg', 'L72-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L72-G1-EX-2.jpg',
          resposta: ['L72-G1-RES-2.jpg', 'L72-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L72-G1-EX-3.jpg',
          resposta: ['L72-G1-RES-3.jpg', 'L72-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L72-G1-EX-4.jpg',
          resposta: ['L72-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: 'L72-G1-EX-5.jpg',
          resposta: ['L72-G1-RES-5.jpg', 'L72-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L72-G1-EX-6.jpg',
          resposta: ['L72-G1-RES-6.jpg', 'L72-G1-RES-6-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L72-G2-EX-1.jpg',
          resposta: 'L72-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L72-G2-EX-2.jpg',
          resposta: 'L72-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L72-G2-EX-3.jpg',
          resposta: 'L72-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L72-G2-EX-4.jpg',
          resposta: 'L72-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L72-G2-EX-5.jpg',
          resposta: 'L72-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L72-G2-EX-6.jpg',
          resposta: ['L72-G2-RES-6.jpg', 'L72-G2-RES-6-parte2.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L72-G3-EX-1.jpg',
          resposta: ['L72-G3-RES-1.jpg', 'L72-G3-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L72-G3-EX-2.jpg',
          resposta: ['L72-G3-RES-2.jpg', 'L72-G3-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: 'L72-G3-EX-3.jpg',
          resposta: ['L72-G3-RES-3.jpg', 'L72-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L72-G3-EX-4.jpg',
          resposta: [
            'L72-G3-RES-4.jpg',
            'L72-G3-RES-4-parte2.jpg',
            'L72-G3-RES-4-parte3.jpg',
            'L72-G3-RES-4-parte4.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: 'L72-G3-EX-5.jpg',
          resposta: 'L72-G3-RES-5.jpg'
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L72-G4-EX-1.jpg',
          resposta: [
            'L72-G4-RES-1.jpg',
            'L72-G4-RES-1-parte2.jpg',
            'L72-G4-RES-1-parte3.jpg',
            'L72-G4-RES-1-parte4.jpg',
            'L72-G4-RES-1-parte5.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: 'L72-G4-EX-2.jpg',
          resposta: [
            'L72-G4-RES-2.jpg',
            'L72-G4-RES-2-parte2.jpg',
            'L72-G4-RES-2-parte3.jpg'
          ]
        }
      ]
    }
  },
  L73: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L73-G1-EX-1.jpg',
          resposta: 'L73-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L73-G1-EX-2.jpg',
          resposta: 'L73-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L73-G1-EX-3.jpg',
          resposta: 'L73-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L73-G1-EX-4.jpg',
          resposta: 'L73-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L73-G1-EX-5.jpg',
          resposta: 'L73-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L73-G1-EX-6.jpg',
          resposta: 'L73-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L73-G1-EX-7.jpg',
          resposta: 'L73-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L73-G1-EX-8.jpg',
          resposta: ['L73-G1-RES-8.jpg', 'L73-G1-RES-8-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L73-G2-EX-1.jpg',
          resposta: 'L73-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L73-G2-EX-2.jpg',
          resposta: 'L73-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L73-G2-EX-3.jpg',
          resposta: 'L73-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L73-G2-EX-4.jpg',
          resposta: 'L73-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L73-G2-EX-5.jpg',
          resposta: 'L73-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L73-G2-EX-6.jpg',
          resposta: 'L73-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L73-G2-EX-7.jpg',
          resposta: ['L73-G2-RES-7.jpg', 'L73-G2-RES-7-parte2.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L73-G3-EX-1.jpg',
          resposta: 'L73-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: ['L73-G3-EX-2.jpg', 'L73-G3-EX-2-parte2.jpg'],
          resposta: 'L73-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L73-G3-EX-3.jpg',
          resposta: 'L73-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L73-G3-EX-4.jpg',
          resposta: 'L73-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L73-G3-EX-5.jpg',
          resposta: 'L73-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L73-G3-EX-6.jpg',
          resposta: 'L73-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L73-G3-EX-7.jpg',
          resposta: 'L73-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L73-G3-EX-8.jpg',
          resposta: 'L73-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: ['L73-G3-EX-9.jpg', 'L73-G3-EX-9-parte2.jpg'],
          resposta: [
            'L73-G3-RES-9.jpg',
            'L73-G3-RES-9-parte2.jpg',
            'L73-G3-RES-9-parte3.jpg'
          ]
        }
      ]
    }
  },
  L74: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L74-G1-EX-1.jpg',
          resposta: 'L74-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L74-G1-EX-2.jpg',
          resposta: 'L74-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L74-G1-EX-3.jpg',
          resposta: 'L74-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L74-G1-EX-4.jpg',
          resposta: 'L74-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L74-G1-EX-5.jpg',
          resposta: 'L74-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L74-G1-EX-6.jpg',
          resposta: 'L74-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L74-G1-EX-7.jpg',
          resposta: 'L74-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L74-G1-EX-8.jpg',
          resposta: 'L74-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: ['L74-G1-EX-9.jpg'],
          resposta: 'L74-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L74-G1-EX-10.jpg',
          resposta: 'L74-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L74-G1-EX-11.jpg',
          resposta: 'L74-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L74-G1-EX-12.jpg',
          resposta: 'L74-G1-RES-12.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L74-G2-EX-1.jpg',
          resposta: 'L74-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L74-G2-EX-2.jpg',
          resposta: 'L74-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L74-G2-EX-3.jpg',
          resposta: 'L74-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L74-G2-EX-4.jpg',
          resposta: 'L74-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: [
            'L74-G2-EX-5.jpg',
            'L74-G2-EX-5-parte2.jpg',
            'L74-G2-EX-5-parte3.jpg'
          ],
          resposta: 'L74-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L74-G2-EX-6.jpg',
          resposta: 'L74-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: ['L74-G2-EX-7.jpg'],
          resposta: 'L74-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L74-G2-EX-8.jpg',
          resposta: 'L74-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: ['L74-G2-EX-9.jpg', 'L74-G2-EX-9-parte2.jpg'],
          resposta: ['L74-G2-RES-9.jpg', 'L74-G2-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L74-G2-EX-10.jpg',
          resposta: ['L74-G2-RES-10.jpg', 'L74-G2-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: 'L74-G2-EX-11.jpg',
          resposta: 'L74-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L74-G2-EX-12.jpg',
          resposta: 'L74-G2-RES-12.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L74-G3-EX-1.jpg',
          resposta: 'L74-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L74-G3-EX-2.jpg',
          resposta: 'L74-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L74-G3-EX-3.jpg',
          resposta: 'L74-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L74-G3-EX-4.jpg',
          resposta: 'L74-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L74-G3-EX-5.jpg',
          resposta: 'L74-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L74-G3-EX-6.jpg',
          resposta: 'L74-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: ['L74-G3-EX-7.jpg', 'L74-G3-EX-7-parte2.jpg'],
          resposta: 'L74-G3-RES-7.jpg'
        }
      ]
    }
  },
  L75: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L75-G1-EX-1.jpg'],
          resposta: ['L75-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L75-G1-EX-2.jpg'],
          resposta: ['L75-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L75-G1-EX-3.jpg'],
          resposta: ['L75-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L75-G1-EX-4.jpg'],
          resposta: ['L75-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L75-G1-EX-5.jpg'],
          resposta: ['L75-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L75-G1-EX-6.jpg'],
          resposta: ['L75-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L75-G1-EX-7.jpg'],
          resposta: ['L75-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L75-G1-EX-8.jpg'],
          resposta: [
            'L75-G1-RES-8.jpg',
            'L75-G1-RES-8-parte2.jpg',
            'L75-G1-RES-8-parte3.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L75-G1-EX-9.jpg'],
          resposta: ['L75-G1-RES-9.jpg', 'L75-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L75-G1-EX-10.jpg'],
          resposta: ['L75-G1-RES-10.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L75-G2-EX-1.jpg'],
          resposta: ['L75-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L75-G2-EX-2.jpg'],
          resposta: ['L75-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L75-G2-EX-3.jpg'],
          resposta: ['L75-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L75-G2-EX-4.jpg'],
          resposta: ['L75-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L75-G2-EX-5.jpg'],
          resposta: ['L75-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L75-G2-EX-6.jpg'],
          resposta: ['L75-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L75-G2-EX-7.jpg'],
          resposta: ['L75-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L75-G2-EX-8.jpg'],
          resposta: ['L75-G2-RES-8.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L75-G3-EX-1.jpg'],
          resposta: ['L75-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L75-G3-EX-2.jpg'],
          resposta: ['L75-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L75-G3-EX-3.jpg'],
          resposta: ['L75-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L75-G3-EX-4.jpg'],
          resposta: ['L75-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L75-G3-EX-5.jpg'],
          resposta: ['L75-G3-RES-5.jpg', 'L75-G3-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L75-G3-EX-6.jpg'],
          resposta: [
            'L75-G3-RES-6.jpg',
            'L75-G3-RES-6-parte2.jpg',
            'L75-G3-RES-6-parte3.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L75-G3-EX-7.jpg'],
          resposta: ['L75-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L75-G3-EX-8.jpg'],
          resposta: ['L75-G3-RES-8.jpg']
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L75-G4-EX-1.jpg'],
          resposta: ['L75-G4-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L75-G4-EX-2.jpg'],
          resposta: [
            'L75-G4-RES-2.jpg',
            'L75-G4-RES-2-parte2.jpg',
            'L75-G4-RES-2-parte3.jpg',
            'L75-G4-RES-2-parte4.jpg',
            'L75-G4-RES-2-parte5.jpg',
            'L75-G4-RES-2-parte6.jpg'
          ]
        }
      ]
    }
  },
  L76: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L76-G1-EX-1.jpg'],
          resposta: ['L76-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L76-G1-EX-2.jpg'],
          resposta: ['L76-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L76-G1-EX-3.jpg'],
          resposta: ['L76-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L76-G1-EX-4.jpg'],
          resposta: ['L76-G1-RES-4.jpg', 'L76-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L76-G1-EX-5.jpg', 'L76-G1-EX-5-parte2.jpg'],
          resposta: ['L76-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L76-G1-EX-6.jpg'],
          resposta: ['L76-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L76-G1-EX-7.jpg'],
          resposta: [
            'L76-G1-RES-7.jpg',
            'L76-G1-RES-7-parte2.jpg',
            'L76-G1-RES-7-parte3.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: ['L76-G1-EX-8.jpg'],
          resposta: ['L76-G1-RES-8.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L76-G2-EX-1.jpg'],
          resposta: ['L76-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L76-G2-EX-2.jpg'],
          resposta: [
            'L76-G2-RES-2.jpg',
            'L76-G2-RES-2-parte2.jpg',
            'L76-G2-RES-2-parte3.jpg',
            'L76-G2-RES-2-parte4.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L76-G2-EX-3.jpg'],
          resposta: ['L76-G2-RES-3.jpg', 'L76-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L76-G2-EX-4.jpg', 'L76-G2-EX-4-parte2.jpg'],
          resposta: [
            'L76-G2-RES-4.jpg',
            'L76-G2-RES-4-parte2.jpg',
            'L76-G2-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L76-G2-EX-5.jpg'],
          resposta: ['L76-G2-RES-5.jpg', 'L76-G2-RES-5-parte2.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L76-G3-EX-1.jpg'],
          resposta: ['L76-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L76-G3-EX-2.jpg'],
          resposta: ['L76-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L76-G3-EX-3.jpg', 'L76-G3-EX-3-parte2.jpg'],
          resposta: ['L76-G3-RES-3.jpg', 'L76-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L76-G3-EX-4.jpg', 'L76-G3-EX-4-parte2.jpg'],
          resposta: ['L76-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L76-G3-EX-5.jpg', 'L76-G3-EX-5-parte2.jpg'],
          resposta: ['L76-G3-RES-5.jpg']
        }
      ]
    }
  },
  L77: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L77-G1-EX-1.jpg'],
          resposta: ['L77-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L77-G1-EX-2.jpg'],
          resposta: ['L77-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L77-G1-EX-3.jpg'],
          resposta: ['L77-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L77-G1-EX-4.jpg'],
          resposta: ['L77-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L77-G1-EX-5.jpg'],
          resposta: ['L77-G1-RES-5.jpg', 'L77-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L77-G1-EX-6.jpg'],
          resposta: ['L77-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L77-G1-EX-7.jpg'],
          resposta: ['L77-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L77-G1-EX-8.jpg'],
          resposta: ['L77-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L77-G1-EX-9.jpg'],
          resposta: ['L77-G1-RES-9.jpg', 'L77-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L77-G1-EX-10.jpg'],
          resposta: ['L77-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L77-G1-EX-11.jpg'],
          resposta: ['L77-G1-RES-11.jpg', 'L77-G1-RES-11-parte2.jpg']
        },
        {
          ex: '12',
          enunciado: ['L77-G1-EX-12.jpg'],
          resposta: ['L77-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L77-G1-EX-13.jpg'],
          resposta: ['L77-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L77-G1-EX-14.jpg'],
          resposta: ['L77-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L77-G1-EX-15.jpg'],
          resposta: ['L77-G1-RES-15.jpg']
        },
        {
          ex: '16',
          enunciado: ['L77-G1-EX-16.jpg'],
          resposta: ['L77-G1-RES-16.jpg']
        },
        {
          ex: '17',
          enunciado: ['L77-G1-EX-17.jpg'],
          resposta: ['L77-G1-RES-17.jpg', 'L77-G1-RES-17-parte2.jpg']
        },
        {
          ex: '18',
          enunciado: ['L77-G1-EX-18.jpg'],
          resposta: ['L77-G1-RES-18.jpg']
        },
        {
          ex: '19',
          enunciado: ['L77-G1-EX-19.jpg'],
          resposta: ['L77-G1-RES-19.jpg', 'L77-G1-RES-19-parte2.jpg']
        },
        {
          ex: '20',
          enunciado: ['L77-G1-EX-20.jpg'],
          resposta: ['L77-G1-RES-20.jpg']
        },
        {
          ex: '21',
          enunciado: ['L77-G1-EX-21.jpg'],
          resposta: ['L77-G1-RES-21.jpg']
        },
        {
          ex: '22',
          enunciado: ['L77-G1-EX-22.jpg'],
          resposta: ['L77-G1-RES-22.jpg', 'L77-G1-RES-22-parte2.jpg']
        },
        {
          ex: '23',
          enunciado: ['L77-G1-EX-23.jpg'],
          resposta: ['L77-G1-RES-23.jpg', 'L77-G1-RES-23-parte2.jpg']
        },
        {
          ex: '24',
          enunciado: ['L77-G1-EX-24.jpg'],
          resposta: ['L77-G1-RES-24.jpg', 'L77-G1-RES-24-parte2.jpg']
        },
        {
          ex: '25',
          enunciado: ['L77-G1-EX-25.jpg'],
          resposta: ['L77-G1-RES-25.jpg', 'L77-G1-RES-25-parte2.jpg']
        },
        {
          ex: '26',
          enunciado: ['L77-G1-EX-26.jpg', 'L77-G1-EX-26-parte2.jpg'],
          resposta: ['L77-G1-RES-26.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L77-G2-EX-1.jpg'],
          resposta: ['L77-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L77-G2-EX-2.jpg'],
          resposta: ['L77-G2-RES-2.jpg', 'L77-G2-RES-2-parte2.jpg']
        }
      ]
    }
  },
  L78: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L78-G1-EX-1.jpg'],
          resposta: ['L78-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L78-G1-EX-2.jpg'],
          resposta: ['L78-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L78-G1-EX-3.jpg'],
          resposta: ['L78-G1-RES-3.jpg', 'L78-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L78-G1-EX-4.jpg'],
          resposta: ['L78-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L78-G1-EX-5.jpg'],
          resposta: ['L78-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L78-G1-EX-6.jpg'],
          resposta: ['L78-G1-RES-6.jpg', 'L78-G1-RES-6-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L78-G2-EX-1.jpg'],
          resposta: ['L78-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L78-G2-EX-2.jpg'],
          resposta: ['L78-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L78-G2-EX-3.jpg'],
          resposta: ['L78-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L78-G2-EX-4.jpg'],
          resposta: ['L78-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L78-G2-EX-5.jpg', 'L78-G2-EX-5-parte2.jpg'],
          resposta: ['L78-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L78-G2-EX-6.jpg'],
          resposta: ['L78-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L78-G2-EX-7.jpg'],
          resposta: ['L78-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L78-G2-EX-8.jpg'],
          resposta: ['L78-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L78-G2-EX-9.jpg'],
          resposta: ['L78-G2-RES-9.jpg', 'L78-G2-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L78-G2-EX-10.jpg'],
          resposta: ['L78-G2-RES-10.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L78-G3-EX-1.jpg'],
          resposta: ['L78-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L78-G3-EX-2.jpg'],
          resposta: ['L78-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L78-G3-EX-3.jpg'],
          resposta: ['L78-G3-RES-3.jpg', 'L78-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L78-G3-EX-4.jpg'],
          resposta: [
            'L78-G3-RES-4.jpg',
            'L78-G3-RES-4-parte2.jpg',
            'L78-G3-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L78-G3-EX-5.jpg'],
          resposta: ['L78-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L78-G3-EX-6.jpg'],
          resposta: ['L78-G3-RES-6.jpg', 'L78-G3-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L78-G3-EX-7.jpg'],
          resposta: ['L78-G3-RES-7.jpg', 'L78-G3-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L78-G3-EX-8.jpg'],
          resposta: ['L78-G3-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L78-G3-EX-9.jpg'],
          resposta: ['L78-G3-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L78-G3-EX-10.jpg', 'L78-G3-EX-10-parte2.jpg'],
          resposta: [
            'L78-G3-RES-10.jpg',
            'L78-G3-RES-10-parte2.jpg',
            'L78-G3-RES-10-parte3.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L78-G3-EX-11.jpg'],
          resposta: ['L78-G3-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L78-G3-EX-12.jpg', 'L78-G3-EX-12-parte2.jpg'],
          resposta: ['L78-G3-RES-12.jpg', 'L78-G3-RES-12-parte2.jpg']
        }
      ]
    }
  },
  L79: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L79-G1-EX-1.jpg'],
          resposta: ['L79-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L79-G1-EX-2.jpg'],
          resposta: ['L79-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L79-G1-EX-3.jpg'],
          resposta: ['L79-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L79-G1-EX-4.jpg'],
          resposta: ['L79-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L79-G1-EX-5.jpg'],
          resposta: ['L79-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L79-G1-EX-6.jpg'],
          resposta: ['L79-G1-RES-6.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L79-G2-EX-1.jpg'],
          resposta: ['L79-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L79-G2-EX-2.jpg'],
          resposta: ['L79-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L79-G2-EX-3.jpg'],
          resposta: ['L79-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L79-G2-EX-4.jpg'],
          resposta: ['L79-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L79-G2-EX-5.jpg'],
          resposta: ['L79-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L79-G2-EX-6.jpg'],
          resposta: ['L79-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L79-G2-EX-7.jpg'],
          resposta: ['L79-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L79-G2-EX-8.jpg'],
          resposta: ['L79-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L79-G2-EX-9.jpg'],
          resposta: ['L79-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L79-G2-EX-10.jpg'],
          resposta: ['L79-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L79-G2-EX-11.jpg'],
          resposta: ['L79-G2-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L79-G2-EX-12.jpg'],
          resposta: ['L79-G2-RES-12.jpg']
        }
      ]
    }
  },
  L80: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L80-G1-EX-1.jpg'],
          resposta: ['L80-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L80-G1-EX-2.jpg'],
          resposta: ['L80-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L80-G1-EX-3.jpg', 'L80-G1-EX-3-parte2.jpg'],
          resposta: ['L80-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L80-G1-EX-4.jpg', 'L80-G1-EX-4-parte2.jpg'],
          resposta: ['L80-G1-RES-4.jpg', 'L80-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L80-G1-EX-5.jpg'],
          resposta: ['L80-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L80-G1-EX-6.jpg'],
          resposta: ['L80-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L80-G1-EX-7.jpg'],
          resposta: ['L80-G1-RES-7.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L80-G2-EX-1.jpg'],
          resposta: ['L80-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L80-G2-EX-2.jpg'],
          resposta: ['L80-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L80-G2-EX-3.jpg'],
          resposta: ['L80-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L80-G2-EX-4.jpg'],
          resposta: ['L80-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L80-G2-EX-5.jpg'],
          resposta: ['L80-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L80-G2-EX-6.jpg'],
          resposta: ['L80-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L80-G2-EX-7.jpg'],
          resposta: ['L80-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L80-G2-EX-8.jpg'],
          resposta: ['L80-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L80-G2-EX-9.jpg'],
          resposta: ['L80-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L80-G2-EX-10.jpg'],
          resposta: ['L80-G2-RES-10.jpg']
        }
      ]
    }
  },
  L81: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L81-G1-EX-1.jpg'],
          resposta: ['L81-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L81-G1-EX-2.jpg'],
          resposta: ['L81-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L81-G1-EX-3.jpg'],
          resposta: ['L81-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L81-G1-EX-4.jpg'],
          resposta: ['L81-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L81-G1-EX-5.jpg'],
          resposta: ['L81-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L81-G1-EX-6.jpg'],
          resposta: ['L81-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L81-G1-EX-7.jpg'],
          resposta: ['L81-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L81-G1-EX-8.jpg'],
          resposta: ['L81-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L81-G1-EX-9.jpg'],
          resposta: ['L81-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L81-G1-EX-10.jpg'],
          resposta: ['L81-G1-RES-10.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L81-G2-EX-1.jpg'],
          resposta: ['L81-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L81-G2-EX-2.jpg'],
          resposta: ['L81-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L81-G2-EX-3.jpg'],
          resposta: ['L81-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L81-G2-EX-4.jpg'],
          resposta: ['L81-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L81-G2-EX-5.jpg'],
          resposta: ['L81-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L81-G2-EX-6.jpg'],
          resposta: ['L81-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L81-G2-EX-7.jpg'],
          resposta: ['L81-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L81-G2-EX-8.jpg'],
          resposta: ['L81-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L81-G2-EX-9.jpg', 'L81-G2-EX-9-parte2.jpg'],
          resposta: ['L81-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L81-G2-EX-10.jpg'],
          resposta: ['L81-G2-RES-10.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L81-G3-EX-1.jpg'],
          resposta: ['L81-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L81-G3-EX-2.jpg'],
          resposta: ['L81-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L81-G3-EX-3.jpg'],
          resposta: ['L81-G3-RES-3.jpg', 'L81-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L81-G3-EX-4.jpg'],
          resposta: ['L81-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L81-G3-EX-5.jpg'],
          resposta: ['L81-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L81-G3-EX-6.jpg'],
          resposta: ['L81-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L81-G3-EX-7.jpg', 'L81-G3-EX-7-parte2.jpg'],
          resposta: [
            'L81-G3-RES-7.jpg',
            'L81-G3-RES-7-parte2.jpg',
            'L81-G3-RES-7-parte3.jpg'
          ]
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L81-G4-EX-1.jpg'],
          resposta: [
            'L81-G4-RES-1.jpg',
            'L81-G4-RES-1-parte2.jpg',
            'L81-G4-RES-1-parte3.jpg',
            'L81-G4-RES-1-parte4.jpg'
          ]
        }
      ]
    }
  },
  L82: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L82-G1-EX-1.jpg'],
          resposta: ['L82-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L82-G1-EX-2.jpg'],
          resposta: ['L82-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L82-G1-EX-3.jpg'],
          resposta: ['L82-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L82-G1-EX-4.jpg', 'L82-G1-EX-4-parte2.jpg'],
          resposta: ['L82-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L82-G1-EX-5.jpg'],
          resposta: ['L82-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L82-G1-EX-6.jpg'],
          resposta: ['L82-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L82-G1-EX-7.jpg'],
          resposta: ['L82-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L82-G1-EX-8.jpg'],
          resposta: ['L82-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L82-G1-EX-9.jpg'],
          resposta: ['L82-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L82-G1-EX-10.jpg'],
          resposta: ['L82-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L82-G1-EX-11.jpg'],
          resposta: ['L82-G1-RES-11.jpg', 'L82-G1-RES-11-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L82-G2-EX-1.jpg'],
          resposta: ['L82-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L82-G2-EX-2.jpg'],
          resposta: ['L82-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L82-G2-EX-3.jpg'],
          resposta: ['L82-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L82-G2-EX-4.jpg', 'L82-G2-EX-4-parte2.jpg'],
          resposta: ['L82-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L82-G2-EX-5.jpg', 'L82-G2-EX-5-parte2.jpg'],
          resposta: ['L82-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L82-G2-EX-6.jpg'],
          resposta: ['L82-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L82-G2-EX-7.jpg'],
          resposta: ['L82-G2-RES-7.jpg', 'L82-G2-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L82-G2-EX-8.jpg'],
          resposta: ['L82-G2-RES-8.jpg', 'L82-G2-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L82-G2-EX-9.jpg'],
          resposta: ['L82-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L82-G2-EX-10.jpg'],
          resposta: ['L82-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L82-G2-EX-11.jpg'],
          resposta: ['L82-G2-RES-11.jpg']
        }
      ]
    }
  },
  L83: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L83-G1-EX-1.jpg'],
          resposta: ['L83-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L83-G1-EX-2.jpg'],
          resposta: [
            'L83-G1-RES-2.jpg',
            'L83-G1-RES-2-parte2.jpg',
            'L83-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L83-G1-EX-3.jpg'],
          resposta: ['L83-G1-RES-3.jpg', 'L83-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L83-G1-EX-4.jpg'],
          resposta: ['L83-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L83-G1-EX-5.jpg'],
          resposta: ['L83-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L83-G1-EX-6.jpg'],
          resposta: ['L83-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L83-G1-EX-7.jpg'],
          resposta: ['L83-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L83-G1-EX-8.jpg'],
          resposta: ['L83-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L83-G1-EX-9.jpg'],
          resposta: ['L83-G1-RES-9.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L83-G2-EX-1.jpg'],
          resposta: ['L83-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L83-G2-EX-2.jpg'],
          resposta: ['L83-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L83-G2-EX-3.jpg'],
          resposta: ['L83-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L83-G2-EX-4.jpg'],
          resposta: ['L83-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L83-G2-EX-5.jpg'],
          resposta: ['L83-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L83-G2-EX-6.jpg'],
          resposta: ['L83-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L83-G2-EX-7.jpg'],
          resposta: ['L83-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L83-G2-EX-8.jpg'],
          resposta: ['L83-G2-RES-8.jpg', 'L83-G2-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L83-G2-EX-9.jpg'],
          resposta: [
            'L83-G2-RES-9.jpg',
            'L83-G2-RES-9-parte2.jpg',
            'L83-G2-RES-9-parte3.jpg'
          ]
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L83-G3-EX-1.jpg'],
          resposta: [
            'L83-G3-RES-1.jpg',
            'L83-G3-RES-1-parte2.jpg',
            'L83-G3-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L83-G3-EX-2.jpg'],
          resposta: ['L83-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L83-G3-EX-3.jpg'],
          resposta: ['L83-G3-RES-3.jpg', 'L83-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: [
            'L83-G3-EX-4.jpg',
            'L83-G3-EX-4-parte2.jpg',
            'L83-G3-EX-4-parte3.jpg'
          ],
          resposta: [
            'L83-G3-RES-4.jpg',
            'L83-G3-RES-4-parte2.jpg',
            'L83-G3-RES-4-parte3.jpg',
            'L83-G3-RES-4-parte4.jpg',
            'L83-G3-RES-4-parte5.jpg',
            'L83-G3-RES-4-parte6.jpg',
            'L83-G3-RES-4-parte7.jpg'
          ]
        }
      ]
    }
  },
  L84: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L84-G1-EX-1.jpg',
          resposta: 'L84-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L84-G1-EX-2.jpg',
          resposta: 'L84-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L84-G1-EX-3.jpg',
          resposta: 'L84-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L84-G1-EX-4.jpg',
          resposta: 'L84-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L84-G1-EX-5.jpg',
          resposta: 'L84-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L84-G1-EX-6.jpg',
          resposta: 'L84-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L84-G1-EX-7.jpg',
          resposta: 'L84-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L84-G1-EX-8.jpg',
          resposta: 'L84-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L84-G1-EX-9.jpg',
          resposta: 'L84-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L84-G1-EX-10.jpg',
          resposta: 'L84-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L84-G1-EX-11.jpg',
          resposta: 'L84-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L84-G1-EX-12.jpg',
          resposta: 'L84-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L84-G1-EX-13.jpg',
          resposta: 'L84-G1-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L84-G1-EX-14.jpg',
          resposta: 'L84-G1-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L84-G1-EX-15.jpg',
          resposta: 'L84-G1-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L84-G1-EX-16.jpg',
          resposta: 'L84-G1-RES-16.jpg'
        }
      ]
    }
  },
  L85: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L85-G1-EX-1.jpg',
          resposta: 'L85-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L85-G1-EX-2.jpg',
          resposta: 'L85-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L85-G1-EX-3.jpg',
          resposta: 'L85-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L85-G1-EX-4.jpg',
          resposta: 'L85-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L85-G1-EX-5.jpg',
          resposta: 'L85-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L85-G1-EX-6.jpg',
          resposta: 'L85-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L85-G1-EX-7.jpg',
          resposta: 'L85-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L85-G1-EX-8.jpg',
          resposta: 'L85-G1-RES-8.jpg'
        }
      ]
    }
  },
  L86: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L86-G1-EX-1.jpg',
          resposta: 'L86-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L86-G1-EX-2.jpg',
          resposta: 'L86-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L86-G1-EX-3.jpg',
          resposta: 'L86-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L86-G1-EX-4.jpg',
          resposta: 'L86-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L86-G1-EX-5.jpg',
          resposta: 'L86-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L86-G1-EX-6.jpg',
          resposta: 'L86-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L86-G1-EX-7.jpg',
          resposta: 'L86-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L86-G1-EX-8.jpg',
          resposta: 'L86-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L86-G2-EX-1.jpg',
          resposta: 'L86-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L86-G2-EX-2.jpg',
          resposta: 'L86-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L86-G2-EX-3.jpg',
          resposta: 'L86-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L86-G2-EX-4.jpg',
          resposta: 'L86-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L86-G2-EX-5.jpg',
          resposta: 'L86-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L86-G2-EX-6.jpg',
          resposta: 'L86-G2-RES-6.jpg'
        }
      ]
    }
  },
  L87: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L87-G1-EX-1.jpg',
          resposta: 'L87-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L87-G1-EX-2.jpg',
          resposta: 'L87-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L87-G1-EX-3.jpg',
          resposta: 'L87-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L87-G1-EX-4.jpg',
          resposta: 'L87-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L87-G1-EX-5.jpg',
          resposta: 'L87-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L87-G1-EX-6.jpg',
          resposta: 'L87-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L87-G1-EX-7.jpg',
          resposta: 'L87-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L87-G1-EX-8.jpg',
          resposta: 'L87-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L87-G1-EX-9.jpg',
          resposta: 'L87-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L87-G1-EX-10.jpg',
          resposta: 'L87-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L87-G1-EX-11.jpg',
          resposta: 'L87-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L87-G1-EX-12.jpg',
          resposta: 'L87-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L87-G1-EX-13.jpg',
          resposta: 'L87-G1-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L87-G1-EX-14.jpg',
          resposta: 'L87-G1-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L87-G1-EX-15.jpg',
          resposta: 'L87-G1-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L87-G1-EX-16.jpg',
          resposta: 'L87-G1-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L87-G1-EX-17.jpg',
          resposta: 'L87-G1-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L87-G1-EX-18.jpg',
          resposta: 'L87-G1-RES-18.jpg'
        },
        {
          ex: '19',
          enunciado: 'L87-G1-EX-19.jpg',
          resposta: 'L87-G1-RES-19.jpg'
        }
      ]
    }
  },
  L89: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L89-G1-EX-1.jpg',
          resposta: 'L89-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L89-G1-EX-2.jpg',
          resposta: 'L89-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L89-G1-EX-3.jpg',
          resposta: 'L89-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L89-G1-EX-4.jpg',
          resposta: 'L89-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L89-G1-EX-5.jpg',
          resposta: 'L89-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L89-G1-EX-6.jpg',
          resposta: 'L89-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L89-G1-EX-7.jpg',
          resposta: 'L89-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L89-G1-EX-8.jpg',
          resposta: 'L89-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L89-G1-EX-9.jpg',
          resposta: 'L89-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L89-G1-EX-10.jpg',
          resposta: 'L89-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L89-G1-EX-11.jpg',
          resposta: 'L89-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L89-G1-EX-12.jpg',
          resposta: 'L89-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L89-G1-EX-13.jpg',
          resposta: 'L89-G1-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L89-G1-EX-14.jpg',
          resposta: 'L89-G1-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L89-G1-EX-15.jpg',
          resposta: 'L89-G1-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L89-G1-EX-16.jpg',
          resposta: 'L89-G1-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L89-G1-EX-17.jpg',
          resposta: 'L89-G1-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L89-G1-EX-18.jpg',
          resposta: 'L89-G1-RES-18.jpg'
        },
        {
          ex: '19',
          enunciado: 'L89-G1-EX-19.jpg',
          resposta: 'L89-G1-RES-19.jpg'
        },
        {
          ex: '20',
          enunciado: 'L89-G1-EX-20.jpg',
          resposta: 'L89-G1-RES-20.jpg'
        },
        {
          ex: '21',
          enunciado: 'L89-G1-EX-21.jpg',
          resposta: 'L89-G1-RES-21.jpg'
        }
      ]
    }
  },
  L90: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L90-G1-EX-1.jpg',
          resposta: 'L90-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L90-G1-EX-2.jpg',
          resposta: 'L90-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L90-G1-EX-3.jpg',
          resposta: 'L90-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L90-G1-EX-4.jpg',
          resposta: 'L90-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L90-G1-EX-5.jpg',
          resposta: 'L90-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L90-G1-EX-6.jpg',
          resposta: 'L90-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L90-G1-EX-7.jpg',
          resposta: 'L90-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L90-G2-EX-1.jpg',
          resposta: 'L90-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L90-G2-EX-2.jpg',
          resposta: 'L90-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L90-G2-EX-3.jpg',
          resposta: 'L90-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L90-G2-EX-4.jpg',
          resposta: 'L90-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L90-G2-EX-5.jpg',
          resposta: 'L90-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L90-G2-EX-6.jpg',
          resposta: 'L90-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L90-G2-EX-7.jpg',
          resposta: 'L90-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L90-G2-EX-8.jpg',
          resposta: 'L90-G2-RES-8.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L90-G3-EX-1.jpg',
          resposta: 'L90-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L90-G3-EX-2.jpg',
          resposta: 'L90-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L90-G3-EX-3.jpg',
          resposta: 'L90-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L90-G3-EX-4.jpg',
          resposta: 'L90-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L90-G3-EX-5.jpg',
          resposta: 'L90-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L90-G3-EX-6.jpg',
          resposta: 'L90-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L90-G3-EX-7.jpg',
          resposta: 'L90-G3-RES-7.jpg'
        }
      ]
    }
  },
  L91: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L91-G1-EX-1.jpg',
          resposta: 'L91-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L91-G1-EX-2.jpg',
          resposta: 'L91-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L91-G1-EX-3.jpg',
          resposta: 'L91-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L91-G1-EX-4.jpg',
          resposta: 'L91-G1-RES-4.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L91-G2-EX-1.jpg',
          resposta: 'L91-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L91-G2-EX-2.jpg',
          resposta: 'L91-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L91-G2-EX-3.jpg',
          resposta: 'L91-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L91-G2-EX-4.jpg',
          resposta: 'L91-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L91-G2-EX-5.jpg',
          resposta: 'L91-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L91-G2-EX-6.jpg',
          resposta: 'L91-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L91-G2-EX-7.jpg',
          resposta: 'L91-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L91-G2-EX-8.jpg',
          resposta: 'L91-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L91-G2-EX-9.jpg',
          resposta: 'L91-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L91-G2-EX-10.jpg',
          resposta: 'L91-G2-RES-10.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L91-G3-EX-1.jpg',
          resposta: 'L91-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L91-G3-EX-2.jpg',
          resposta: 'L91-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L91-G3-EX-3.jpg',
          resposta: 'L91-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L91-G3-EX-4.jpg',
          resposta: 'L91-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L91-G3-EX-5.jpg',
          resposta: 'L91-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L91-G3-EX-6.jpg',
          resposta: 'L91-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L91-G3-EX-7.jpg',
          resposta: 'L91-G3-RES-7.jpg'
        }
      ]
    }
  },
  L92: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L92-G1-EX-1.jpg',
          resposta: 'L92-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L92-G1-EX-2.jpg',
          resposta: 'L92-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L92-G1-EX-3.jpg',
          resposta: 'L92-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L92-G1-EX-4.jpg',
          resposta: 'L92-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L92-G1-EX-5.jpg',
          resposta: 'L92-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L92-G1-EX-6.jpg',
          resposta: 'L92-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L92-G1-EX-7.jpg',
          resposta: 'L92-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L92-G2-EX-1.jpg',
          resposta: 'L92-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L92-G2-EX-2.jpg',
          resposta: 'L92-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L92-G2-EX-3.jpg',
          resposta: 'L92-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L92-G2-EX-4.jpg',
          resposta: 'L92-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L92-G2-EX-5.jpg',
          resposta: 'L92-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L92-G2-EX-6.jpg',
          resposta: 'L92-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L92-G2-EX-7.jpg',
          resposta: 'L92-G2-RES-7.jpg'
        }
      ]
    }
  },
  L93: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L93-G1-EX-1.jpg',
          resposta: 'L93-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L93-G1-EX-2.jpg',
          resposta: 'L93-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L93-G1-EX-3.jpg',
          resposta: 'L93-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L93-G1-EX-4.jpg',
          resposta: 'L93-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L93-G1-EX-5.jpg',
          resposta: 'L93-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L93-G1-EX-6.jpg',
          resposta: 'L93-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L93-G1-EX-7.jpg',
          resposta: 'L93-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L93-G1-EX-8.jpg',
          resposta: 'L93-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L93-G2-EX-1.jpg',
          resposta: 'L93-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L93-G2-EX-2.jpg',
          resposta: 'L93-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L93-G2-EX-3.jpg',
          resposta: 'L93-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L93-G2-EX-4.jpg',
          resposta: 'L93-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L93-G2-EX-5.jpg',
          resposta: 'L93-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L93-G2-EX-6.jpg',
          resposta: 'L93-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L93-G2-EX-7.jpg',
          resposta: 'L93-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L93-G2-EX-8.jpg',
          resposta: 'L93-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L93-G2-EX-9.jpg',
          resposta: 'L93-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L93-G2-EX-10.jpg',
          resposta: 'L93-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L93-G2-EX-11.jpg',
          resposta: 'L93-G2-RES-11.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L93-G3-EX-1.jpg',
          resposta: 'L93-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L93-G3-EX-2.jpg',
          resposta: 'L93-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L93-G3-EX-3.jpg',
          resposta: 'L93-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L93-G3-EX-4.jpg',
          resposta: 'L93-G3-RES-4.jpg'
        }
      ]
    }
  },
  L94: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L94-G1-EX-1.jpg',
          resposta: 'L94-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L94-G1-EX-2.jpg',
          resposta: 'L94-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L94-G1-EX-3.jpg',
          resposta: 'L94-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L94-G1-EX-4.jpg',
          resposta: 'L94-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L94-G1-EX-5.jpg',
          resposta: 'L94-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L94-G1-EX-6.jpg',
          resposta: 'L94-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L94-G1-EX-7.jpg',
          resposta: 'L94-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L94-G1-EX-8.jpg',
          resposta: 'L94-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L94-G1-EX-9.jpg',
          resposta: 'L94-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L94-G1-EX-10.jpg',
          resposta: 'L94-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L94-G1-EX-11.jpg',
          resposta: 'L94-G1-RES-11.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L94-G2-EX-1.jpg',
          resposta: 'L94-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L94-G2-EX-2.jpg',
          resposta: 'L94-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L94-G2-EX-3.jpg',
          resposta: 'L94-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L94-G2-EX-4.jpg',
          resposta: 'L94-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L94-G2-EX-5.jpg',
          resposta: 'L94-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L94-G2-EX-6.jpg',
          resposta: 'L94-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L94-G2-EX-7.jpg',
          resposta: 'L94-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L94-G2-EX-8.jpg',
          resposta: 'L94-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L94-G2-EX-9.jpg',
          resposta: 'L94-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L94-G2-EX-10.jpg',
          resposta: 'L94-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L94-G2-EX-11.jpg',
          resposta: 'L94-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L94-G2-EX-12.jpg',
          resposta: 'L94-G2-RES-12.jpg'
        }
      ]
    }
  },
  L95: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L95-G1-EX-1.jpg',
          resposta: 'L95-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L95-G1-EX-2.jpg',
          resposta: 'L95-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L95-G1-EX-3.jpg',
          resposta: 'L95-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L95-G1-EX-4.jpg',
          resposta: 'L95-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L95-G1-EX-5.jpg',
          resposta: 'L95-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L95-G2-EX-1.jpg',
          resposta: 'L95-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L95-G2-EX-2.jpg',
          resposta: 'L95-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L95-G2-EX-3.jpg',
          resposta: 'L95-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L95-G2-EX-4.jpg',
          resposta: 'L95-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L95-G2-EX-5.jpg',
          resposta: 'L95-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L95-G2-EX-6.jpg',
          resposta: 'L95-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L95-G2-EX-7.jpg',
          resposta: 'L95-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L95-G2-EX-8.jpg',
          resposta: 'L95-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L95-G2-EX-9.jpg',
          resposta: 'L95-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L95-G2-EX-10.jpg',
          resposta: 'L95-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L95-G2-EX-11.jpg',
          resposta: 'L95-G2-RES-11.jpg'
        }
      ]
    }
  },
  L96: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L96-G1-EX-1.jpg',
          resposta: 'L96-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L96-G1-EX-2.jpg',
          resposta: 'L96-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L96-G1-EX-3.jpg',
          resposta: 'L96-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L96-G1-EX-4.jpg',
          resposta: 'L96-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L96-G1-EX-5.jpg',
          resposta: 'L96-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L96-G1-EX-6.jpg',
          resposta: 'L96-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L96-G1-EX-7.jpg',
          resposta: 'L96-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L96-G1-EX-8.jpg',
          resposta: 'L96-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L96-G1-EX-9.jpg',
          resposta: 'L96-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L96-G1-EX-10.jpg',
          resposta: 'L96-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L96-G1-EX-11.jpg',
          resposta: 'L96-G1-RES-11.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L96-G2-EX-1.jpg',
          resposta: 'L96-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L96-G2-EX-2.jpg',
          resposta: 'L96-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L96-G2-EX-3.jpg',
          resposta: 'L96-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L96-G2-EX-4.jpg',
          resposta: 'L96-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L96-G2-EX-5.jpg',
          resposta: 'L96-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L96-G2-EX-6.jpg',
          resposta: 'L96-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L96-G2-EX-7.jpg',
          resposta: 'L96-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L96-G2-EX-8.jpg',
          resposta: 'L96-G2-RES-8.jpg'
        }
      ]
    }
  },
  L97: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L97-G1-EX-1.jpg',
          resposta: 'L97-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L97-G1-EX-2.jpg',
          resposta: 'L97-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L97-G1-EX-3.jpg',
          resposta: 'L97-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L97-G1-EX-4.jpg',
          resposta: 'L97-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L97-G1-EX-5.jpg',
          resposta: 'L97-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L97-G2-EX-1.jpg',
          resposta: 'L97-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L97-G2-EX-2.jpg',
          resposta: 'L97-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L97-G2-EX-3.jpg',
          resposta: 'L97-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L97-G2-EX-4.jpg',
          resposta: 'L97-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L97-G2-EX-5.jpg',
          resposta: 'L97-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L97-G2-EX-6.jpg',
          resposta: 'L97-G2-RES-6.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L97-G3-EX-1.jpg',
          resposta: 'L97-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L97-G3-EX-2.jpg',
          resposta: 'L97-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L97-G3-EX-3.jpg',
          resposta: 'L97-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L97-G3-EX-4.jpg',
          resposta: 'L97-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L97-G3-EX-5.jpg',
          resposta: 'L97-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L97-G3-EX-6.jpg',
          resposta: 'L97-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L97-G3-EX-7.jpg',
          resposta: 'L97-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L97-G3-EX-8.jpg',
          resposta: 'L97-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L97-G3-EX-9.jpg',
          resposta: 'L97-G3-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L97-G3-EX-10.jpg',
          resposta: 'L97-G3-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L97-G3-EX-11.jpg',
          resposta: 'L97-G3-RES-11.jpg'
        }
      ]
    }
  },
  L98: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L98-G1-EX-1.jpg',
          resposta: 'L98-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L98-G1-EX-2.jpg',
          resposta: 'L98-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L98-G1-EX-3.jpg',
          resposta: 'L98-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L98-G1-EX-4.jpg',
          resposta: 'L98-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L98-G1-EX-5.jpg',
          resposta: 'L98-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L98-G1-EX-6.jpg',
          resposta: 'L98-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L98-G1-EX-7.jpg',
          resposta: 'L98-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L98-G1-EX-8.jpg',
          resposta: 'L98-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L98-G1-EX-9.jpg',
          resposta: 'L98-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L98-G1-EX-10.jpg',
          resposta: 'L98-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L98-G1-EX-11.jpg',
          resposta: 'L98-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L98-G1-EX-12.jpg',
          resposta: 'L98-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L98-G1-EX-13.jpg',
          resposta: 'L98-G1-RES-13.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L98-G2-EX-1.jpg',
          resposta: 'L98-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L98-G2-EX-2.jpg',
          resposta: 'L98-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L98-G2-EX-3.jpg',
          resposta: 'L98-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L98-G2-EX-4.jpg',
          resposta: 'L98-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L98-G2-EX-5.jpg',
          resposta: 'L98-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L98-G2-EX-6.jpg',
          resposta: 'L98-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L98-G2-EX-7.jpg',
          resposta: 'L98-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L98-G2-EX-8.jpg',
          resposta: 'L98-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L98-G2-EX-9.jpg',
          resposta: 'L98-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L98-G2-EX-10.jpg',
          resposta: 'L98-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L98-G2-EX-11.jpg',
          resposta: 'L98-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L98-G2-EX-12.jpg',
          resposta: 'L98-G2-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L98-G2-EX-13.jpg',
          resposta: 'L98-G2-RES-13.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L98-G3-EX-1.jpg',
          resposta: 'L98-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L98-G3-EX-2.jpg',
          resposta: 'L98-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L98-G3-EX-3.jpg',
          resposta: 'L98-G3-RES-3.jpg'
        }
      ]
    }
  },
  L99: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L99-G1-EX-1.jpg',
          resposta: 'L99-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L99-G1-EX-2.jpg',
          resposta: 'L99-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L99-G1-EX-3.jpg',
          resposta: 'L99-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L99-G1-EX-4.jpg',
          resposta: 'L99-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L99-G1-EX-5.jpg',
          resposta: 'L99-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L99-G2-EX-1.jpg',
          resposta: 'L99-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L99-G2-EX-2.jpg',
          resposta: 'L99-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L99-G2-EX-3.jpg',
          resposta: 'L99-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L99-G2-EX-4.jpg',
          resposta: 'L99-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L99-G2-EX-5.jpg',
          resposta: 'L99-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L99-G2-EX-6.jpg',
          resposta: 'L99-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L99-G2-EX-7.jpg',
          resposta: 'L99-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L99-G2-EX-8.jpg',
          resposta: 'L99-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L99-G2-EX-9.jpg',
          resposta: 'L99-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L99-G2-EX-10.jpg',
          resposta: 'L99-G2-RES-10.jpg'
        }
      ]
    }
  },
  L100: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L100-G1-EX-1.jpg',
          resposta: 'L100-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L100-G1-EX-2.jpg',
          resposta: 'L100-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L100-G1-EX-3.jpg',
          resposta: 'L100-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L100-G1-EX-4.jpg',
          resposta: 'L100-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L100-G1-EX-5.jpg',
          resposta: 'L100-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L100-G2-EX-1.jpg',
          resposta: 'L100-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L100-G2-EX-2.jpg',
          resposta: 'L100-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L100-G2-EX-3.jpg',
          resposta: 'L100-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L100-G2-EX-4.jpg',
          resposta: 'L100-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L100-G2-EX-5.jpg',
          resposta: 'L100-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L100-G2-EX-6.jpg',
          resposta: 'L100-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L100-G2-EX-7.jpg',
          resposta: 'L100-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L100-G2-EX-8.jpg',
          resposta: 'L100-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L100-G2-EX-9.jpg',
          resposta: 'L100-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L100-G2-EX-10.jpg',
          resposta: 'L100-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L100-G2-EX-11.jpg',
          resposta: 'L100-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L100-G2-EX-12.jpg',
          resposta: 'L100-G2-RES-12.jpg'
        }
      ]
    }
  },
  L101: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L101-G1-EX-1.jpg',
          resposta: 'L101-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L101-G1-EX-2.jpg',
          resposta: 'L101-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L101-G1-EX-3.jpg',
          resposta: 'L101-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L101-G1-EX-4.jpg',
          resposta: 'L101-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L101-G1-EX-5.jpg',
          resposta: 'L101-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L101-G1-EX-6.jpg',
          resposta: 'L101-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L101-G1-EX-7.jpg',
          resposta: 'L101-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L101-G1-EX-8.jpg',
          resposta: 'L101-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L101-G2-EX-1.jpg',
          resposta: 'L101-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L101-G2-EX-2.jpg',
          resposta: 'L101-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L101-G2-EX-3.jpg',
          resposta: 'L101-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L101-G2-EX-4.jpg',
          resposta: 'L101-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L101-G2-EX-5.jpg',
          resposta: 'L101-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L101-G2-EX-6.jpg',
          resposta: 'L101-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L101-G2-EX-7.jpg',
          resposta: 'L101-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L101-G2-EX-8.jpg',
          resposta: 'L101-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L101-G2-EX-9.jpg',
          resposta: 'L101-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L101-G2-EX-10.jpg',
          resposta: 'L101-G2-RES-10.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L101-G3-EX-1.jpg',
          resposta: 'L101-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L101-G3-EX-2.jpg',
          resposta: 'L101-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L101-G3-EX-3.jpg',
          resposta: 'L101-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L101-G3-EX-4.jpg',
          resposta: 'L101-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L101-G3-EX-5.jpg',
          resposta: 'L101-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L101-G3-EX-6.jpg',
          resposta: 'L101-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L101-G3-EX-7.jpg',
          resposta: 'L101-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L101-G3-EX-8.jpg',
          resposta: 'L101-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L101-G3-EX-9.jpg',
          resposta: 'L101-G3-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L101-G3-EX-10.jpg',
          resposta: 'L101-G3-RES-10.jpg'
        }
      ]
    }
  },
  L102: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L102-G1-EX-1.jpg',
          resposta: 'L102-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L102-G1-EX-2.jpg',
          resposta: 'L102-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L102-G1-EX-3.jpg',
          resposta: 'L102-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L102-G1-EX-4.jpg',
          resposta: 'L102-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L102-G1-EX-5.jpg',
          resposta: 'L102-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L102-G1-EX-6.jpg',
          resposta: 'L102-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L102-G1-EX-7.jpg',
          resposta: 'L102-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L102-G1-EX-8.jpg',
          resposta: 'L102-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L102-G2-EX-1.jpg',
          resposta: 'L102-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L102-G2-EX-2.jpg',
          resposta: 'L102-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L102-G2-EX-3.jpg',
          resposta: 'L102-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L102-G2-EX-4.jpg',
          resposta: 'L102-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L102-G2-EX-5.jpg',
          resposta: 'L102-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L102-G2-EX-6.jpg',
          resposta: 'L102-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L102-G2-EX-7.jpg',
          resposta: 'L102-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L102-G2-EX-8.jpg',
          resposta: 'L102-G2-RES-8.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L102-G3-EX-1.jpg',
          resposta: 'L102-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L102-G3-EX-2.jpg',
          resposta: 'L102-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L102-G3-EX-3.jpg',
          resposta: 'L102-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L102-G3-EX-4.jpg',
          resposta: 'L102-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L102-G3-EX-5.jpg',
          resposta: 'L102-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L102-G3-EX-6.jpg',
          resposta: 'L102-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L102-G3-EX-7.jpg',
          resposta: 'L102-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L102-G3-EX-8.jpg',
          resposta: 'L102-G3-RES-8.jpg'
        }
      ]
    }
  },
  L103: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L103-G1-EX-1.jpg',
          resposta: 'L103-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L103-G1-EX-2.jpg',
          resposta: 'L103-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L103-G1-EX-3.jpg',
          resposta: 'L103-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L103-G1-EX-4.jpg',
          resposta: 'L103-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L103-G1-EX-5.jpg',
          resposta: 'L103-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L103-G2-EX-1.jpg',
          resposta: 'L103-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L103-G2-EX-2.jpg',
          resposta: 'L103-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L103-G2-EX-3.jpg',
          resposta: ['L103-G2-RES-3.jpg', 'L103-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L103-G2-EX-4.jpg',
          resposta: ['L103-G2-RES-4.jpg', 'L103-G2-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: 'L103-G2-EX-5.jpg',
          resposta: ['L103-G2-RES-5.jpg', 'L103-G2-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: 'L103-G2-EX-6.jpg',
          resposta: 'L103-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L103-G2-EX-7.jpg',
          resposta: 'L103-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L103-G2-EX-8.jpg',
          resposta: 'L103-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L103-G2-EX-9.jpg',
          resposta: 'L103-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: ['L103-G2-EX-10.jpg', 'L103-G2-EX-10-parte2.jpg'],
          resposta: [
            'L103-G2-RES-10.jpg',
            'L103-G2-RES-10-parte2.jpg',
            'L103-G2-RES-10-parte3.jpg'
          ]
        }
      ]
    }
  },
  L104: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L104-G1-EX-1.jpg',
          resposta: 'L104-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L104-G1-EX-2.jpg',
          resposta: 'L104-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L104-G1-EX-3.jpg',
          resposta: 'L104-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L104-G1-EX-4.jpg',
          resposta: 'L104-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L104-G1-EX-5.jpg',
          resposta: 'L104-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L104-G1-EX-6.jpg',
          resposta: 'L104-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L104-G1-EX-7.jpg',
          resposta: 'L104-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L104-G2-EX-1.jpg',
          resposta: 'L104-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L104-G2-EX-2.jpg',
          resposta: 'L104-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L104-G2-EX-3.jpg',
          resposta: 'L104-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L104-G2-EX-4.jpg',
          resposta: 'L104-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L104-G2-EX-5.jpg',
          resposta: 'L104-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L104-G2-EX-6.jpg',
          resposta: 'L104-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L104-G2-EX-7.jpg',
          resposta: 'L104-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L104-G2-EX-8.jpg',
          resposta: 'L104-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L104-G2-EX-9.jpg',
          resposta: 'L104-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L104-G2-EX-10.jpg',
          resposta: 'L104-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L104-G2-EX-11.jpg',
          resposta: 'L104-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L104-G2-EX-12.jpg',
          resposta: 'L104-G2-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L104-G2-EX-13.jpg',
          resposta: 'L104-G2-RES-13.jpg'
        }
      ]
    }
  },
  L105: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L105-G1-EX-1.jpg',
          resposta: 'L105-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L105-G1-EX-2.jpg',
          resposta: 'L105-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L105-G1-EX-3.jpg',
          resposta: 'L105-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L105-G1-EX-4.jpg',
          resposta: 'L105-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L105-G1-EX-5.jpg',
          resposta: 'L105-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L105-G1-EX-6.jpg',
          resposta: 'L105-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L105-G1-EX-7.jpg',
          resposta: 'L105-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L105-G1-EX-8.jpg',
          resposta: 'L105-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L105-G1-EX-9.jpg',
          resposta: 'L105-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L105-G1-EX-10.jpg',
          resposta: 'L105-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L105-G1-EX-11.jpg',
          resposta: 'L105-G1-RES-11.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L105-G2-EX-1.jpg',
          resposta: 'L105-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L105-G2-EX-2.jpg',
          resposta: 'L105-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L105-G2-EX-3.jpg',
          resposta: 'L105-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L105-G2-EX-4.jpg',
          resposta: 'L105-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L105-G2-EX-5.jpg',
          resposta: 'L105-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L105-G2-EX-6.jpg',
          resposta: 'L105-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L105-G2-EX-7.jpg',
          resposta: 'L105-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L105-G2-EX-8.jpg',
          resposta: 'L105-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L105-G2-EX-9.jpg',
          resposta: 'L105-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L105-G2-EX-10.jpg',
          resposta: 'L105-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L105-G2-EX-11.jpg',
          resposta: 'L105-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L105-G2-EX-12.jpg',
          resposta: 'L105-G2-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L105-G2-EX-13.jpg',
          resposta: 'L105-G2-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L105-G2-EX-14.jpg',
          resposta: 'L105-G2-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L105-G2-EX-15.jpg',
          resposta: 'L105-G2-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L105-G2-EX-16.jpg',
          resposta: 'L105-G2-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L105-G2-EX-17.jpg',
          resposta: 'L105-G2-RES-17.jpg'
        }
      ]
    }
  },
  L106: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L106-G1-EX-1.jpg',
          resposta: 'L106-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L106-G1-EX-2.jpg',
          resposta: 'L106-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L106-G1-EX-3.jpg',
          resposta: 'L106-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L106-G1-EX-4.jpg',
          resposta: 'L106-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L106-G1-EX-5.jpg',
          resposta: 'L106-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L106-G1-EX-6.jpg',
          resposta: 'L106-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L106-G1-EX-7.jpg',
          resposta: 'L106-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L106-G1-EX-8.jpg',
          resposta: 'L106-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L106-G1-EX-9.jpg',
          resposta: 'L106-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L106-G1-EX-10.jpg',
          resposta: 'L106-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L106-G1-EX-11.jpg',
          resposta: 'L106-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L106-G1-EX-12.jpg',
          resposta: 'L106-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L106-G1-EX-13.jpg',
          resposta: 'L106-G1-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L106-G1-EX-14.jpg',
          resposta: 'L106-G1-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L106-G1-EX-15.jpg',
          resposta: 'L106-G1-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L106-G1-EX-16.jpg',
          resposta: 'L106-G1-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L106-G1-EX-17.jpg',
          resposta: 'L106-G1-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L106-G1-EX-18.jpg',
          resposta: 'L106-G1-RES-18.jpg'
        },
        {
          ex: '19',
          enunciado: 'L106-G1-EX-19.jpg',
          resposta: 'L106-G1-RES-19.jpg'
        },
        {
          ex: '20',
          enunciado: 'L106-G1-EX-20.jpg',
          resposta: 'L106-G1-RES-20.jpg'
        },
        {
          ex: '21',
          enunciado: 'L106-G1-EX-21.jpg',
          resposta: 'L106-G1-RES-21.jpg'
        },
        {
          ex: '22',
          enunciado: 'L106-G1-EX-22.jpg',
          resposta: 'L106-G1-RES-22.jpg'
        },
        {
          ex: '23',
          enunciado: 'L106-G1-EX-23.jpg',
          resposta: 'L106-G1-RES-23.jpg'
        },
        {
          ex: '24',
          enunciado: 'L106-G1-EX-24.jpg',
          resposta: 'L106-G1-RES-24.jpg'
        },
        {
          ex: '25',
          enunciado: 'L106-G1-EX-25.jpg',
          resposta: 'L106-G1-RES-25.jpg'
        },
        {
          ex: '26',
          enunciado: 'L106-G1-EX-26.jpg',
          resposta: 'L106-G1-RES-26.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L106-G2-EX-1.jpg',
          resposta: 'L106-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L106-G2-EX-2.jpg',
          resposta: 'L106-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L106-G2-EX-3.jpg',
          resposta: 'L106-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L106-G2-EX-4.jpg',
          resposta: 'L106-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L106-G2-EX-5.jpg',
          resposta: 'L106-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L106-G2-EX-6.jpg',
          resposta: 'L106-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L106-G2-EX-7.jpg',
          resposta: 'L106-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L106-G2-EX-8.jpg',
          resposta: 'L106-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L106-G2-EX-9.jpg',
          resposta: 'L106-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L106-G2-EX-10.jpg',
          resposta: 'L106-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L106-G2-EX-11.jpg',
          resposta: 'L106-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L106-G2-EX-12.jpg',
          resposta: 'L106-G2-RES-12.jpg'
        }
      ]
    }
  },
  L107: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L107-G1-EX-1.jpg',
          resposta: 'L107-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L107-G1-EX-2.jpg',
          resposta: 'L107-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L107-G1-EX-3.jpg',
          resposta: 'L107-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L107-G1-EX-4.jpg',
          resposta: 'L107-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L107-G1-EX-5.jpg',
          resposta: 'L107-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L107-G1-EX-6.jpg',
          resposta: 'L107-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L107-G1-EX-7.jpg',
          resposta: 'L107-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L107-G1-EX-8.jpg',
          resposta: 'L107-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L107-G1-EX-9.jpg',
          resposta: 'L107-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L107-G1-EX-10.jpg',
          resposta: 'L107-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L107-G1-EX-11.jpg',
          resposta: 'L107-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L107-G1-EX-12.jpg',
          resposta: 'L107-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L107-G1-EX-13.jpg',
          resposta: 'L107-G1-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L107-G1-EX-14.jpg',
          resposta: 'L107-G1-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L107-G1-EX-15.jpg',
          resposta: 'L107-G1-RES-15.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L107-G2-EX-1.jpg',
          resposta: 'L107-G2-RES-1.jpg'
        }
      ]
    }
  },
  L108: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L108-G1-EX-1.jpg',
          resposta: 'L108-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L108-G1-EX-2.jpg',
          resposta: 'L108-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L108-G1-EX-3.jpg',
          resposta: 'L108-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L108-G1-EX-4.jpg',
          resposta: 'L108-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L108-G1-EX-5.jpg',
          resposta: 'L108-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L108-G1-EX-6.jpg',
          resposta: 'L108-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L108-G1-EX-7.jpg',
          resposta: 'L108-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L108-G1-EX-8.jpg',
          resposta: 'L108-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L108-G1-EX-9.jpg',
          resposta: 'L108-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L108-G1-EX-10.jpg',
          resposta: 'L108-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L108-G1-EX-11.jpg',
          resposta: 'L108-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L108-G1-EX-12.jpg',
          resposta: 'L108-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L108-G1-EX-13.jpg',
          resposta: 'L108-G1-RES-13.jpg'
        }
      ]
    }
  },
  L109: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L109-G1-EX-1.jpg',
          resposta: 'L109-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L109-G1-EX-2.jpg',
          resposta: 'L109-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L109-G1-EX-3.jpg',
          resposta: 'L109-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L109-G1-EX-4.jpg',
          resposta: 'L109-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L109-G1-EX-5.jpg',
          resposta: 'L109-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L109-G1-EX-6.jpg',
          resposta: 'L109-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L109-G1-EX-7.jpg',
          resposta: 'L109-G1-RES-7.jpg'
        }
      ]
    }
  },
  L110: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L110-G1-EX-1.jpg',
          resposta: 'L110-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L110-G1-EX-2.jpg',
          resposta: 'L110-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L110-G1-EX-3.jpg',
          resposta: 'L110-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L110-G1-EX-4.jpg',
          resposta: 'L110-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L110-G1-EX-5.jpg',
          resposta: 'L110-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L110-G1-EX-6.jpg',
          resposta: 'L110-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L110-G1-EX-7.jpg',
          resposta: 'L110-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L110-G1-EX-8.jpg',
          resposta: 'L110-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L110-G1-EX-9.jpg',
          resposta: 'L110-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L110-G1-EX-10.jpg',
          resposta: 'L110-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L110-G1-EX-11.jpg',
          resposta: 'L110-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L110-G1-EX-12.jpg',
          resposta: 'L110-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L110-G1-EX-13.jpg',
          resposta: 'L110-G1-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L110-G1-EX-14.jpg',
          resposta: 'L110-G1-RES-14.jpg'
        }
      ]
    }
  },
  L111: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L111-G1-EX-1.jpg',
          resposta: 'L111-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L111-G1-EX-2.jpg',
          resposta: 'L111-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L111-G1-EX-3.jpg',
          resposta: 'L111-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L111-G1-EX-4.jpg',
          resposta: 'L111-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L111-G1-EX-5.jpg',
          resposta: 'L111-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L111-G1-EX-6.jpg',
          resposta: 'L111-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L111-G2-EX-1.jpg',
          resposta: 'L111-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L111-G2-EX-2.jpg',
          resposta: 'L111-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L111-G2-EX-3.jpg',
          resposta: 'L111-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L111-G2-EX-4.jpg',
          resposta: 'L111-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L111-G2-EX-5.jpg',
          resposta: 'L111-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L111-G2-EX-6.jpg',
          resposta: 'L111-G2-RES-6.jpg'
        }
      ]
    }
  },
  L112: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L112-G1-EX-1.jpg',
          resposta: 'L112-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L112-G1-EX-2.jpg',
          resposta: 'L112-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L112-G1-EX-3.jpg',
          resposta: 'L112-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L112-G1-EX-4.jpg',
          resposta: 'L112-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L112-G1-EX-5.jpg',
          resposta: 'L112-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L112-G1-EX-6.jpg',
          resposta: 'L112-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L112-G1-EX-7.jpg',
          resposta: 'L112-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L112-G1-EX-8.jpg',
          resposta: 'L112-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L112-G1-EX-9.jpg',
          resposta: 'L112-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L112-G1-EX-10.jpg',
          resposta: 'L112-G1-RES-10.jpg'
        }
      ]
    }
  },
  L113: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L113-G1-EX-1.jpg',
          resposta: 'L113-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L113-G1-EX-2.jpg',
          resposta: 'L113-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L113-G1-EX-3.jpg',
          resposta: 'L113-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L113-G1-EX-4.jpg',
          resposta: 'L113-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L113-G1-EX-5.jpg',
          resposta: 'L113-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L113-G1-EX-6.jpg',
          resposta: 'L113-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L113-G1-EX-7.jpg',
          resposta: 'L113-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L113-G1-EX-8.jpg',
          resposta: 'L113-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L113-G1-EX-9.jpg',
          resposta: 'L113-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L113-G1-EX-10.jpg',
          resposta: 'L113-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L113-G1-EX-11.jpg',
          resposta: 'L113-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L113-G1-EX-12.jpg',
          resposta: 'L113-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L113-G1-EX-13.jpg',
          resposta: 'L113-G1-RES-13.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L113-G2-EX-1.jpg',
          resposta: 'L113-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L113-G2-EX-2.jpg',
          resposta: 'L113-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L113-G2-EX-3.jpg',
          resposta: 'L113-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L113-G2-EX-4.jpg',
          resposta: 'L113-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L113-G2-EX-5.jpg',
          resposta: 'L113-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L113-G2-EX-6.jpg',
          resposta: 'L113-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L113-G2-EX-7.jpg',
          resposta: 'L113-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L113-G2-EX-8.jpg',
          resposta: 'L113-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L113-G2-EX-9.jpg',
          resposta: 'L113-G2-RES-9.jpg'
        }
      ]
    }
  },
  L114: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L114-G1-EX-1.jpg',
          resposta: 'L114-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L114-G1-EX-2.jpg',
          resposta: 'L114-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L114-G1-EX-3.jpg',
          resposta: 'L114-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L114-G1-EX-4.jpg',
          resposta: 'L114-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L114-G1-EX-5.jpg',
          resposta: 'L114-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L114-G1-EX-6.jpg',
          resposta: 'L114-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L114-G1-EX-7.jpg',
          resposta: 'L114-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L114-G1-EX-8.jpg',
          resposta: 'L114-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L114-G1-EX-9.jpg',
          resposta: 'L114-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L114-G1-EX-10.jpg',
          resposta: 'L114-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L114-G1-EX-11.jpg',
          resposta: 'L114-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L114-G1-EX-12.jpg',
          resposta: 'L114-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L114-G1-EX-13.jpg',
          resposta: 'L114-G1-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L114-G1-EX-14.jpg',
          resposta: 'L114-G1-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L114-G1-EX-15.jpg',
          resposta: 'L114-G1-RES-15.jpg'
        }
      ]
    }
  },
  L115: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L115-G1-EX-1.jpg',
          resposta: 'L115-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L115-G1-EX-2.jpg',
          resposta: 'L115-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L115-G1-EX-3.jpg',
          resposta: 'L115-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L115-G1-EX-4.jpg',
          resposta: 'L115-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L115-G1-EX-5.jpg',
          resposta: 'L115-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L115-G1-EX-6.jpg',
          resposta: 'L115-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L115-G1-EX-7.jpg',
          resposta: 'L115-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L115-G1-EX-8.jpg',
          resposta: 'L115-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L115-G1-EX-9.jpg',
          resposta: 'L115-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L115-G1-EX-10.jpg',
          resposta: 'L115-G1-RES-10.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L115-G2-EX-1.jpg',
          resposta: 'L115-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L115-G2-EX-2.jpg',
          resposta: 'L115-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L115-G2-EX-3.jpg',
          resposta: 'L115-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L115-G2-EX-4.jpg',
          resposta: 'L115-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L115-G2-EX-5.jpg',
          resposta: 'L115-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L115-G2-EX-6.jpg',
          resposta: 'L115-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L115-G2-EX-7.jpg',
          resposta: 'L115-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L115-G2-EX-8.jpg',
          resposta: 'L115-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L115-G2-EX-9.jpg',
          resposta: 'L115-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L115-G2-EX-10.jpg',
          resposta: 'L115-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L115-G2-EX-11.jpg',
          resposta: 'L115-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L115-G2-EX-12.jpg',
          resposta: 'L115-G2-RES-12.jpg'
        }
      ]
    }
  },
  L116: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L116-G1-EX-1.jpg',
          resposta: 'L116-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L116-G1-EX-2.jpg',
          resposta: 'L116-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L116-G1-EX-3.jpg',
          resposta: 'L116-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L116-G1-EX-4.jpg',
          resposta: 'L116-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L116-G1-EX-5.jpg',
          resposta: 'L116-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L116-G1-EX-6.jpg',
          resposta: 'L116-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L116-G1-EX-7.jpg',
          resposta: 'L116-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L116-G1-EX-8.jpg',
          resposta: 'L116-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L116-G1-EX-9.jpg',
          resposta: 'L116-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L116-G1-EX-10.jpg',
          resposta: 'L116-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L116-G1-EX-11.jpg',
          resposta: 'L116-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L116-G1-EX-12.jpg',
          resposta: 'L116-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L116-G1-EX-13.jpg',
          resposta: 'L116-G1-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L116-G1-EX-14.jpg',
          resposta: 'L116-G1-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L116-G1-EX-15.jpg',
          resposta: 'L116-G1-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L116-G1-EX-16.jpg',
          resposta: 'L116-G1-RES-16.jpg'
        }
      ]
    }
  },
  L117: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L117-G1-EX-1.jpg',
          resposta: 'L117-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L117-G1-EX-2.jpg',
          resposta: 'L117-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L117-G1-EX-3.jpg',
          resposta: 'L117-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L117-G1-EX-4.jpg',
          resposta: 'L117-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L117-G1-EX-5.jpg',
          resposta: 'L117-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L117-G1-EX-6.jpg',
          resposta: 'L117-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L117-G1-EX-7.jpg',
          resposta: 'L117-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L117-G1-EX-8.jpg',
          resposta: 'L117-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L117-G1-EX-9.jpg',
          resposta: 'L117-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L117-G1-EX-10.jpg',
          resposta: 'L117-G1-RES-10.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L117-G2-EX-1.jpg',
          resposta: 'L117-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L117-G2-EX-2.jpg',
          resposta: 'L117-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L117-G2-EX-3.jpg',
          resposta: 'L117-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L117-G2-EX-4.jpg',
          resposta: 'L117-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L117-G2-EX-5.jpg',
          resposta: 'L117-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L117-G2-EX-6.jpg',
          resposta: 'L117-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L117-G2-EX-7.jpg',
          resposta: 'L117-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L117-G2-EX-8.jpg',
          resposta: 'L117-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L117-G2-EX-9.jpg',
          resposta: 'L117-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L117-G2-EX-10.jpg',
          resposta: 'L117-G2-RES-10.jpg'
        }
      ]
    }
  },
  'L117-B': {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L117-B-G1-EX-1.jpg',
          resposta: 'L117-B-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L117-B-G1-EX-2.jpg',
          resposta: 'L117-B-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L117-B-G1-EX-3.jpg',
          resposta: 'L117-B-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L117-B-G1-EX-4.jpg',
          resposta: 'L117-B-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L117-B-G1-EX-5.jpg',
          resposta: 'L117-B-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L117-B-G1-EX-6.jpg',
          resposta: 'L117-B-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L117-B-G1-EX-7.jpg',
          resposta: 'L117-B-G1-RES-7.jpg'
        }
      ]
    }
  },
  L118: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L118-G1-EX-1.jpg',
          resposta: 'L118-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L118-G1-EX-2.jpg',
          resposta: 'L118-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L118-G1-EX-3.jpg',
          resposta: 'L118-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L118-G1-EX-4.jpg',
          resposta: 'L118-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L118-G1-EX-5.jpg',
          resposta: 'L118-G1-RES-5.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L118-G2-EX-1.jpg',
          resposta: 'L118-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L118-G2-EX-2.jpg',
          resposta: 'L118-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L118-G2-EX-3.jpg',
          resposta: 'L118-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L118-G2-EX-4.jpg',
          resposta: 'L118-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L118-G2-EX-5.jpg',
          resposta: 'L118-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L118-G2-EX-6.jpg',
          resposta: 'L118-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L118-G2-EX-7.jpg',
          resposta: 'L118-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L118-G2-EX-8.jpg',
          resposta: 'L118-G2-RES-8.jpg'
        }
      ]
    }
  },
  L119: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L119-G1-EX-1.jpg',
          resposta: 'L119-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L119-G1-EX-2.jpg',
          resposta: 'L119-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L119-G1-EX-3.jpg',
          resposta: 'L119-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L119-G1-EX-4.jpg',
          resposta: 'L119-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L119-G1-EX-5.jpg',
          resposta: 'L119-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L119-G1-EX-6.jpg',
          resposta: 'L119-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L119-G1-EX-7.jpg',
          resposta: 'L119-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L119-G1-EX-8.jpg',
          resposta: 'L119-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L119-G1-EX-9.jpg',
          resposta: 'L119-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L119-G1-EX-10.jpg',
          resposta: 'L119-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L119-G1-EX-11.jpg',
          resposta: 'L119-G1-RES-11.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L119-G2-EX-1.jpg',
          resposta: 'L119-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L119-G2-EX-2.jpg',
          resposta: 'L119-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L119-G2-EX-3.jpg',
          resposta: 'L119-G2-RES-3.jpg'
        }
      ]
    }
  },
  L120: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L120-G1-EX-1.jpg',
          resposta: 'L120-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L120-G1-EX-2.jpg',
          resposta: 'L120-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L120-G1-EX-3.jpg',
          resposta: 'L120-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L120-G1-EX-4.jpg',
          resposta: 'L120-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L120-G1-EX-5.jpg',
          resposta: 'L120-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L120-G1-EX-6.jpg',
          resposta: 'L120-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L120-G1-EX-7.jpg',
          resposta: 'L120-G1-RES-7.jpg'
        }
      ]
    }
  },
  L121: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L121-G1-EX-1.jpg'],
          resposta: ['L121-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L121-G1-EX-2.jpg'],
          resposta: ['L121-G1-RES-2.jpg', 'L121-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L121-G1-EX-3.jpg'],
          resposta: ['L121-G1-RES-3.jpg', 'L121-G1-RES-3-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L121-G2-EX-1.jpg'],
          resposta: ['L121-G2-RES-1.jpg', 'L121-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L121-G2-EX-2.jpg'],
          resposta: ['L121-G2-RES-2.jpg', 'L121-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L121-G2-EX-3.jpg'],
          resposta: ['L121-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L121-G2-EX-4.jpg'],
          resposta: ['L121-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L121-G2-EX-5.jpg'],
          resposta: ['L121-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L121-G2-EX-6.jpg'],
          resposta: ['L121-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L121-G2-EX-7.jpg'],
          resposta: ['L121-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L121-G2-EX-8.jpg'],
          resposta: ['L121-G2-RES-8.jpg', 'L121-G2-RES-8-parte2.jpg']
        }
      ]
    }
  },
  L122: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L122-G1-EX-1.jpg'],
          resposta: ['L122-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L122-G1-EX-2.jpg'],
          resposta: ['L122-G1-RES-2.jpg', 'L122-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L122-G1-EX-3.jpg'],
          resposta: ['L122-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L122-G1-EX-4.jpg'],
          resposta: ['L122-G1-RES-4.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L122-G2-EX-1.jpg'],
          resposta: ['L122-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L122-G2-EX-2.jpg'],
          resposta: ['L122-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L122-G2-EX-3.jpg'],
          resposta: ['L122-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L122-G2-EX-4.jpg'],
          resposta: ['L122-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L122-G2-EX-5.jpg'],
          resposta: ['L122-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L122-G2-EX-6.jpg'],
          resposta: ['L122-G2-RES-6.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L122-G3-EX-1.jpg'],
          resposta: ['L122-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L122-G3-EX-2.jpg'],
          resposta: ['L122-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L122-G3-EX-3.jpg'],
          resposta: ['L122-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L122-G3-EX-4.jpg'],
          resposta: ['L122-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L122-G3-EX-5.jpg'],
          resposta: ['L122-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L122-G3-EX-6.jpg'],
          resposta: ['L122-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L122-G3-EX-7.jpg'],
          resposta: ['L122-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L122-G3-EX-8.jpg'],
          resposta: [
            'L122-G3-RES-8.jpg',
            'L122-G3-RES-8-parte2.jpg',
            'L122-G3-RES-8-parte3.jpg'
          ]
        }
      ]
    }
  },
  L123: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L123-G1-EX-1.jpg'],
          resposta: ['L123-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L123-G1-EX-2.jpg'],
          resposta: ['L123-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L123-G1-EX-3.jpg'],
          resposta: ['L123-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L123-G1-EX-4.jpg'],
          resposta: ['L123-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L123-G1-EX-5.jpg'],
          resposta: ['L123-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L123-G1-EX-6.jpg'],
          resposta: ['L123-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L123-G1-EX-7.jpg'],
          resposta: ['L123-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L123-G1-EX-8.jpg'],
          resposta: ['L123-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L123-G1-EX-9.jpg'],
          resposta: ['L123-G1-RES-9.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L123-G2-EX-1.jpg'],
          resposta: ['L123-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L123-G2-EX-2.jpg'],
          resposta: ['L123-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L123-G2-EX-3.jpg'],
          resposta: ['L123-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L123-G2-EX-4.jpg'],
          resposta: ['L123-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L123-G2-EX-5.jpg'],
          resposta: ['L123-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L123-G2-EX-6.jpg'],
          resposta: ['L123-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L123-G2-EX-7.jpg'],
          resposta: ['L123-G2-RES-7.jpg', 'L123-G2-RES-7-parte2.jpg']
        }
      ]
    }
  },
  L124: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L124-G1-EX-1.jpg'],
          resposta: ['L124-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L124-G1-EX-2.jpg'],
          resposta: ['L124-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L124-G1-EX-3.jpg'],
          resposta: ['L124-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L124-G1-EX-4.jpg'],
          resposta: ['L124-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L124-G1-EX-5.jpg'],
          resposta: [
            'L124-G1-RES-5.jpg',
            'L124-G1-RES-5-parte2.jpg',
            'L124-G1-RES-5-parte3.jpg',
            'L124-G1-RES-5-parte4.jpg',
            'L124-G1-RES-5-parte5.jpg'
          ]
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L124-G2-EX-1.jpg'],
          resposta: ['L124-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L124-G2-EX-2.jpg'],
          resposta: ['L124-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L124-G2-EX-3.jpg'],
          resposta: ['L124-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L124-G2-EX-4.jpg'],
          resposta: ['L124-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L124-G2-EX-5.jpg'],
          resposta: ['L124-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L124-G2-EX-6.jpg'],
          resposta: ['L124-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L124-G2-EX-7.jpg'],
          resposta: ['L124-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L124-G2-EX-8.jpg'],
          resposta: ['L124-G2-RES-8.jpg', 'L124-G2-RES-8-parte2.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L124-G3-EX-1.jpg'],
          resposta: ['L124-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L124-G3-EX-2.jpg'],
          resposta: ['L124-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L124-G3-EX-3.jpg'],
          resposta: ['L124-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L124-G3-EX-4.jpg'],
          resposta: ['L124-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L124-G3-EX-5.jpg'],
          resposta: ['L124-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L124-G3-EX-6.jpg'],
          resposta: ['L124-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L124-G3-EX-7.jpg'],
          resposta: ['L124-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L124-G3-EX-8.jpg'],
          resposta: ['L124-G3-RES-8.jpg']
        }
      ]
    }
  },
  L125: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L125-G1-EX-1.jpg'],
          resposta: ['L125-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L125-G1-EX-2.jpg'],
          resposta: ['L125-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L125-G1-EX-3.jpg'],
          resposta: ['L125-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L125-G1-EX-4.jpg'],
          resposta: ['L125-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L125-G1-EX-5.jpg'],
          resposta: ['L125-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L125-G1-EX-6.jpg'],
          resposta: ['L125-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L125-G1-EX-7.jpg'],
          resposta: ['L125-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L125-G1-EX-8.jpg'],
          resposta: [
            'L125-G1-RES-8.jpg',
            'L125-G1-RES-8-parte2.jpg',
            'L125-G1-RES-8-parte3.jpg',
            'L125-G1-RES-8-parte4.jpg',
            'L125-G1-RES-8-parte5.jpg',
            'L125-G1-RES-8-parte6.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L125-G1-EX-9.jpg'],
          resposta: ['L125-G1-RES-9.jpg', 'L125-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L125-G1-EX-10.jpg'],
          resposta: ['L125-G1-RES-10.jpg', 'L125-G1-RES-10-parte2.jpg']
        }
      ]
    }
  },
  L126: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L126-G1-EX-1.jpg'],
          resposta: ['L126-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L126-G1-EX-2.jpg'],
          resposta: ['L126-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L126-G1-EX-3.jpg'],
          resposta: ['L126-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L126-G1-EX-4.jpg'],
          resposta: ['L126-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L126-G1-EX-5.jpg'],
          resposta: ['L126-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L126-G1-EX-6.jpg'],
          resposta: ['L126-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L126-G1-EX-7.jpg'],
          resposta: ['L126-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L126-G1-EX-8.jpg'],
          resposta: ['L126-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L126-G1-EX-9.jpg'],
          resposta: ['L126-G1-RES-9.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L126-G2-EX-1.jpg'],
          resposta: ['L126-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L126-G2-EX-2.jpg'],
          resposta: ['L126-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L126-G2-EX-3.jpg'],
          resposta: ['L126-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L126-G2-EX-4.jpg'],
          resposta: ['L126-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L126-G2-EX-5.jpg'],
          resposta: ['L126-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L126-G2-EX-6.jpg'],
          resposta: ['L126-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L126-G2-EX-7.jpg'],
          resposta: ['L126-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L126-G2-EX-8.jpg'],
          resposta: ['L126-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L126-G2-EX-9.jpg'],
          resposta: ['L126-G2-RES-9.jpg']
        }
      ]
    }
  },
  L127: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L127-G1-EX-1.jpg'],
          resposta: ['L127-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L127-G1-EX-2.jpg'],
          resposta: ['L127-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L127-G1-EX-3.jpg'],
          resposta: ['L127-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L127-G1-EX-4.jpg'],
          resposta: ['L127-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L127-G1-EX-5.jpg'],
          resposta: ['L127-G1-RES-5.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L127-G2-EX-1.jpg'],
          resposta: ['L127-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L127-G2-EX-2.jpg'],
          resposta: ['L127-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L127-G2-EX-3.jpg'],
          resposta: ['L127-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L127-G2-EX-4.jpg'],
          resposta: ['L127-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L127-G2-EX-5.jpg'],
          resposta: ['L127-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L127-G2-EX-6.jpg'],
          resposta: ['L127-G2-RES-6.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L127-G3-EX-1.jpg'],
          resposta: ['L127-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L127-G3-EX-2.jpg'],
          resposta: ['L127-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L127-G3-EX-3.jpg'],
          resposta: ['L127-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L127-G3-EX-4.jpg'],
          resposta: ['L127-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L127-G3-EX-5.jpg'],
          resposta: ['L127-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L127-G3-EX-6.jpg'],
          resposta: ['L127-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L127-G3-EX-7.jpg'],
          resposta: ['L127-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L127-G3-EX-8.jpg'],
          resposta: ['L127-G3-RES-8.jpg']
        }
      ]
    }
  },
  L128: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L128-G1-EX-1.jpg'],
          resposta: ['L128-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L128-G1-EX-2.jpg'],
          resposta: ['L128-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L128-G1-EX-3.jpg'],
          resposta: ['L128-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L128-G1-EX-4.jpg'],
          resposta: ['L128-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L128-G1-EX-5.jpg'],
          resposta: ['L128-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L128-G1-EX-6.jpg'],
          resposta: ['L128-G1-RES-6.jpg', 'L128-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L128-G1-EX-7.jpg'],
          resposta: ['L128-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L128-G1-EX-8.jpg'],
          resposta: [
            'L128-G1-RES-8.jpg',
            'L128-G1-RES-8-parte2.jpg',
            'L128-G1-RES-8-parte3.jpg'
          ]
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L128-G2-EX-1.jpg'],
          resposta: ['L128-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L128-G2-EX-2.jpg'],
          resposta: ['L128-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L128-G2-EX-3.jpg'],
          resposta: ['L128-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L128-G2-EX-4.jpg'],
          resposta: ['L128-G2-RES-4.jpg', 'L128-G2-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L128-G2-EX-5.jpg'],
          resposta: ['L128-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L128-G2-EX-6.jpg'],
          resposta: ['L128-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L128-G2-EX-7.jpg'],
          resposta: ['L128-G2-RES-7.jpg']
        }
      ]
    }
  },
  L129: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L129-G1-EX-1.jpg'],
          resposta: ['L129-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L129-G1-EX-2.jpg'],
          resposta: ['L129-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L129-G1-EX-3.jpg'],
          resposta: ['L129-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L129-G1-EX-4.jpg'],
          resposta: ['L129-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L129-G1-EX-5.jpg'],
          resposta: ['L129-G1-RES-5.jpg', 'L129-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L129-G1-EX-6.jpg'],
          resposta: [
            'L129-G1-RES-6.jpg',
            'L129-G1-RES-6-parte2.jpg',
            'L129-G1-RES-6-parte3.jpg'
          ]
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L129-G2-EX-1.jpg'],
          resposta: ['L129-G2-RES-1.jpg', 'L129-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L129-G2-EX-2.jpg'],
          resposta: ['L129-G2-RES-2.jpg', 'L129-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L129-G2-EX-3.jpg'],
          resposta: ['L129-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L129-G2-EX-4.jpg'],
          resposta: ['L129-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L129-G2-EX-5.jpg', 'L129-G2-EX-5-parte2.jpg'],
          resposta: [
            'L129-G2-RES-5.jpg',
            'L129-G2-RES-5-parte2.jpg',
            'L129-G2-RES-5-parte3.jpg',
            'L129-G2-RES-5-parte4.jpg',
            'L129-G2-RES-5-parte5.jpg'
          ]
        }
      ]
    }
  },
  L130: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L130-G1-EX-1.jpg'],
          resposta: ['L130-G1-RES-1.jpg', 'L130-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L130-G1-EX-2.jpg'],
          resposta: ['L130-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L130-G1-EX-3.jpg'],
          resposta: ['L130-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L130-G1-EX-4.jpg'],
          resposta: ['L130-G1-RES-4.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L130-G2-EX-1.jpg'],
          resposta: ['L130-G2-RES-1.jpg', 'L130-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L130-G2-EX-2.jpg'],
          resposta: [
            'L130-G2-RES-2.jpg',
            'L130-G2-RES-2-parte2.jpg',
            'L130-G2-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L130-G2-EX-3.jpg'],
          resposta: ['L130-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L130-G2-EX-4.jpg'],
          resposta: ['L130-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L130-G2-EX-5.jpg'],
          resposta: ['L130-G2-RES-5.jpg']
        }
      ]
    }
  },
  L131: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L131-G1-EX-1.jpg'],
          resposta: ['L131-G1-RES-1.jpg', 'L131-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L131-G1-EX-2.jpg'],
          resposta: ['L131-G1-RES-2.jpg', 'L131-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L131-G1-EX-3.jpg'],
          resposta: ['L131-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L131-G1-EX-4.jpg'],
          resposta: ['L131-G1-RES-4.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L131-G2-EX-1.jpg'],
          resposta: ['L131-G2-RES-1.jpg', 'L131-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L131-G2-EX-2.jpg'],
          resposta: ['L131-G2-RES-2.jpg', 'L131-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L131-G2-EX-3.jpg'],
          resposta: ['L131-G2-RES-3.jpg', 'L131-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L131-G2-EX-4.jpg'],
          resposta: ['L131-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L131-G2-EX-5.jpg'],
          resposta: ['L131-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L131-G2-EX-6.jpg'],
          resposta: [
            'L131-G2-RES-6.jpg',
            'L131-G2-RES-6-parte2.jpg',
            'L131-G2-RES-6-parte3.jpg'
          ]
        }
      ]
    }
  },
  L132: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L132-G1-EX-1.jpg'],
          resposta: ['L132-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L132-G1-EX-2.jpg'],
          resposta: ['L132-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L132-G1-EX-3.jpg'],
          resposta: ['L132-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L132-G1-EX-4.jpg'],
          resposta: ['L132-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L132-G1-EX-5.jpg'],
          resposta: ['L132-G1-RES-5.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L132-G2-EX-1.jpg'],
          resposta: ['L132-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L132-G2-EX-2.jpg'],
          resposta: ['L132-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L132-G2-EX-3.jpg'],
          resposta: [
            'L132-G2-RES-3.jpg',
            'L132-G2-RES-3-parte2.jpg',
            'L132-G2-RES-3-parte3.jpg',
            'L132-G2-RES-3-parte4.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L132-G2-EX-4.jpg'],
          resposta: ['L132-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L132-G2-EX-5.jpg'],
          resposta: ['L132-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L132-G2-EX-6.jpg'],
          resposta: ['L132-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L132-G2-EX-7.jpg'],
          resposta: ['L132-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L132-G2-EX-8.jpg'],
          resposta: [
            'L132-G2-RES-8.jpg',
            'L132-G2-RES-8-parte2.jpg',
            'L132-G2-RES-8-parte3.jpg',
            'L132-G2-RES-8-parte4.jpg',
            'L132-G2-RES-8-parte5.jpg'
          ]
        }
      ]
    }
  },
  L133: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L133-G1-EX-1.jpg'],
          resposta: ['L133-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L133-G1-EX-2.jpg'],
          resposta: ['L133-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L133-G1-EX-3.jpg'],
          resposta: ['L133-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L133-G1-EX-4.jpg'],
          resposta: ['L133-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L133-G1-EX-5.jpg'],
          resposta: ['L133-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L133-G1-EX-6.jpg'],
          resposta: ['L133-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L133-G1-EX-7.jpg'],
          resposta: ['L133-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L133-G1-EX-8.jpg'],
          resposta: ['L133-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L133-G1-EX-9.jpg'],
          resposta: ['L133-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L133-G1-EX-10.jpg'],
          resposta: ['L133-G1-RES-10.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L133-G2-EX-1.jpg'],
          resposta: ['L133-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L133-G2-EX-2.jpg'],
          resposta: ['L133-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L133-G2-EX-3.jpg'],
          resposta: ['L133-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L133-G2-EX-4.jpg'],
          resposta: ['L133-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L133-G2-EX-5.jpg'],
          resposta: ['L133-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L133-G2-EX-6.jpg'],
          resposta: ['L133-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L133-G2-EX-7.jpg'],
          resposta: ['L133-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L133-G2-EX-8.jpg'],
          resposta: ['L133-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L133-G2-EX-9.jpg', 'L133-G2-EX-9-parte2.jpg'],
          resposta: [
            'L133-G2-RES-9.jpg',
            'L133-G2-RES-9-parte2.jpg',
            'L133-G2-RES-9-parte3.jpg',
            'L133-G2-RES-9-parte4.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L133-G2-EX-10.jpg'],
          resposta: ['L133-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L133-G2-EX-11.jpg'],
          resposta: ['L133-G2-RES-11.jpg', 'L133-G2-RES-11-parte2.jpg']
        }
      ]
    }
  },
  L134: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L134-G1-EX-1.jpg'],
          resposta: ['L134-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L134-G1-EX-2.jpg'],
          resposta: ['L134-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L134-G1-EX-3.jpg'],
          resposta: ['L134-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L134-G1-EX-4.jpg'],
          resposta: ['L134-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L134-G1-EX-5.jpg'],
          resposta: ['L134-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L134-G1-EX-6.jpg'],
          resposta: ['L134-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L134-G1-EX-7.jpg'],
          resposta: ['L134-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L134-G1-EX-8.jpg'],
          resposta: ['L134-G1-RES-8.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L134-G2-EX-1.jpg'],
          resposta: ['L134-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L134-G2-EX-2.jpg'],
          resposta: ['L134-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L134-G2-EX-3.jpg'],
          resposta: ['L134-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L134-G2-EX-4.jpg'],
          resposta: ['L134-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L134-G2-EX-5.jpg'],
          resposta: ['L134-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L134-G2-EX-6.jpg'],
          resposta: ['L134-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L134-G2-EX-7.jpg'],
          resposta: ['L134-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L134-G2-EX-8.jpg'],
          resposta: ['L134-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L134-G2-EX-9.jpg'],
          resposta: ['L134-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L134-G2-EX-10.jpg'],
          resposta: ['L134-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L134-G2-EX-11.jpg'],
          resposta: ['L134-G2-RES-11.jpg']
        }
      ]
    }
  },
  L135: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L135-G1-EX-1.jpg'],
          resposta: ['L135-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L135-G1-EX-2.jpg'],
          resposta: ['L135-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L135-G1-EX-3.jpg'],
          resposta: ['L135-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L135-G1-EX-4.jpg'],
          resposta: ['L135-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L135-G1-EX-5.jpg'],
          resposta: ['L135-G1-RES-5.jpg', 'L135-G1-RES-5-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L135-G2-EX-1.jpg'],
          resposta: ['L135-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L135-G2-EX-2.jpg'],
          resposta: ['L135-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L135-G2-EX-3.jpg'],
          resposta: ['L135-G2-RES-3.jpg', 'L135-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L135-G2-EX-4.jpg'],
          resposta: ['L135-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L135-G2-EX-5.jpg'],
          resposta: ['L135-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L135-G2-EX-6.jpg'],
          resposta: ['L135-G2-RES-6.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L135-G3-EX-1.jpg'],
          resposta: ['L135-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L135-G3-EX-2.jpg'],
          resposta: ['L135-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L135-G3-EX-3.jpg'],
          resposta: ['L135-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L135-G3-EX-4.jpg'],
          resposta: ['L135-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L135-G3-EX-5.jpg'],
          resposta: ['L135-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L135-G3-EX-6.jpg'],
          resposta: ['L135-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L135-G3-EX-7.jpg'],
          resposta: ['L135-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L135-G3-EX-8.jpg'],
          resposta: ['L135-G3-RES-8.jpg', 'L135-G3-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L135-G3-EX-9.jpg'],
          resposta: ['L135-G3-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L135-G3-EX-10.jpg'],
          resposta: [
            'L135-G3-RES-10.jpg',
            'L135-G3-RES-10-parte2.jpg',
            'L135-G3-RES-10-parte3.jpg'
          ]
        }
      ]
    }
  },
  L136: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L136-G1-EX-1.jpg'],
          resposta: ['L136-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L136-G1-EX-2.jpg'],
          resposta: ['L136-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L136-G1-EX-3.jpg'],
          resposta: ['L136-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L136-G1-EX-4.jpg'],
          resposta: ['L136-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L136-G1-EX-5.jpg'],
          resposta: ['L136-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L136-G1-EX-6.jpg'],
          resposta: ['L136-G1-RES-6.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L136-G2-EX-1.jpg'],
          resposta: ['L136-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L136-G2-EX-2.jpg'],
          resposta: ['L136-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L136-G2-EX-3.jpg'],
          resposta: ['L136-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L136-G2-EX-4.jpg'],
          resposta: ['L136-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L136-G2-EX-5.jpg'],
          resposta: ['L136-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L136-G2-EX-6.jpg'],
          resposta: ['L136-G2-RES-6.jpg', 'L136-G2-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L136-G2-EX-7.jpg'],
          resposta: ['L136-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L136-G2-EX-8.jpg'],
          resposta: ['L136-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L136-G2-EX-9.jpg'],
          resposta: ['L136-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L136-G2-EX-10.jpg'],
          resposta: ['L136-G2-RES-10.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L136-G3-EX-1.jpg'],
          resposta: ['L136-G3-RES-1.jpg', 'L136-G3-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L136-G3-EX-2.jpg'],
          resposta: ['L136-G3-RES-2.jpg', 'L136-G3-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L136-G3-EX-3.jpg'],
          resposta: ['L136-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L136-G3-EX-4.jpg'],
          resposta: ['L136-G3-RES-4.jpg', 'L136-G3-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L136-G3-EX-5.jpg'],
          resposta: ['L136-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L136-G3-EX-6.jpg'],
          resposta: ['L136-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L136-G3-EX-7.jpg'],
          resposta: ['L136-G3-RES-7.jpg', 'L136-G3-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L136-G3-EX-8.jpg'],
          resposta: ['L136-G3-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L136-G3-EX-9.jpg'],
          resposta: ['L136-G3-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L136-G3-EX-10.jpg'],
          resposta: ['L136-G3-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L136-G3-EX-11.jpg'],
          resposta: ['L136-G3-RES-11.jpg', 'L136-G3-RES-11-parte2.jpg']
        }
      ]
    }
  },
  L137: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L137-G1-EX-1.jpg'],
          resposta: ['L137-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L137-G1-EX-2.jpg'],
          resposta: ['L137-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L137-G1-EX-3.jpg'],
          resposta: [
            'L137-G1-RES-3.jpg',
            'L137-G1-RES-3-parte2.jpg',
            'L137-G1-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L137-G1-EX-4.jpg'],
          resposta: ['L137-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L137-G1-EX-5.jpg'],
          resposta: ['L137-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L137-G1-EX-6.jpg'],
          resposta: ['L137-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L137-G1-EX-7.jpg'],
          resposta: ['L137-G1-RES-7.jpg', 'L137-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L137-G1-EX-8.jpg'],
          resposta: ['L137-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L137-G1-EX-9.jpg'],
          resposta: ['L137-G1-RES-9.jpg', 'L137-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L137-G1-EX-10.jpg'],
          resposta: ['L137-G1-RES-10.jpg', 'L137-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: ['L137-G1-EX-11.jpg'],
          resposta: ['L137-G1-RES-11.jpg', 'L137-G1-RES-11-parte2.jpg']
        },
        {
          ex: '12',
          enunciado: ['L137-G1-EX-12.jpg'],
          resposta: [
            'L137-G1-RES-12.jpg',
            'L137-G1-RES-12-parte2.jpg',
            'L137-G1-RES-12-parte3.jpg',
            'L137-G1-RES-12-parte4.jpg'
          ]
        }
      ]
    }
  },
  L138: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L138-G1-EX-1.jpg'],
          resposta: ['L138-G1-RES-1.jpg', 'L138-G1-RES-1-parte2.jpg']
        }
      ]
    }
  },
  L139: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L139-G1-EX-1.jpg'],
          resposta: ['L139-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L139-G1-EX-2.jpg'],
          resposta: ['L139-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L139-G1-EX-3.jpg'],
          resposta: ['L139-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L139-G1-EX-4.jpg'],
          resposta: ['L139-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L139-G1-EX-5.jpg'],
          resposta: ['L139-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L139-G1-EX-6.jpg'],
          resposta: ['L139-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L139-G1-EX-7.jpg'],
          resposta: ['L139-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L139-G1-EX-8.jpg'],
          resposta: ['L139-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L139-G1-EX-9.jpg'],
          resposta: ['L139-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L139-G1-EX-10.jpg'],
          resposta: ['L139-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L139-G1-EX-11.jpg'],
          resposta: ['L139-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L139-G1-EX-12.jpg'],
          resposta: ['L139-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L139-G1-EX-13.jpg'],
          resposta: ['L139-G1-RES-13.jpg']
        }
      ]
    }
  },
  L140: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L140-G1-EX-1.jpg'],
          resposta: ['L140-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L140-G1-EX-2.jpg'],
          resposta: ['L140-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L140-G1-EX-3.jpg'],
          resposta: ['L140-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L140-G1-EX-4.jpg'],
          resposta: ['L140-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L140-G1-EX-5.jpg'],
          resposta: ['L140-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L140-G1-EX-6.jpg'],
          resposta: ['L140-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L140-G1-EX-7.jpg'],
          resposta: ['L140-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L140-G1-EX-8.jpg'],
          resposta: ['L140-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L140-G1-EX-9.jpg'],
          resposta: ['L140-G1-RES-9.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L140-G2-EX-1.jpg'],
          resposta: ['L140-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L140-G2-EX-2.jpg'],
          resposta: ['L140-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L140-G2-EX-3.jpg'],
          resposta: ['L140-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L140-G2-EX-4.jpg'],
          resposta: ['L140-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L140-G2-EX-5.jpg'],
          resposta: ['L140-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L140-G2-EX-6.jpg'],
          resposta: ['L140-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L140-G2-EX-7.jpg'],
          resposta: ['L140-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L140-G2-EX-8.jpg'],
          resposta: ['L140-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L140-G2-EX-9.jpg'],
          resposta: ['L140-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L140-G2-EX-10.jpg'],
          resposta: ['L140-G2-RES-10.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L140-G3-EX-1.jpg'],
          resposta: ['L140-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L140-G3-EX-2.jpg'],
          resposta: ['L140-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L140-G3-EX-3.jpg'],
          resposta: ['L140-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L140-G3-EX-4.jpg'],
          resposta: ['L140-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L140-G3-EX-5.jpg'],
          resposta: ['L140-G3-RES-5.jpg', 'L140-G3-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L140-G3-EX-6.jpg'],
          resposta: ['L140-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L140-G3-EX-7.jpg'],
          resposta: ['L140-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L140-G3-EX-8.jpg'],
          resposta: ['L140-G3-RES-8.jpg']
        }
      ]
    }
  },
  L141: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L141-G1-EX-1.jpg'],
          resposta: ['L141-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L141-G1-EX-2.jpg'],
          resposta: ['L141-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L141-G1-EX-3.jpg'],
          resposta: ['L141-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L141-G1-EX-4.jpg'],
          resposta: ['L141-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L141-G1-EX-5.jpg'],
          resposta: ['L141-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L141-G1-EX-6.jpg'],
          resposta: ['L141-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L141-G1-EX-7.jpg'],
          resposta: ['L141-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L141-G1-EX-8.jpg'],
          resposta: ['L141-G1-RES-8.jpg']
        },
        {
          ex: '8',
          enunciado: ['L141-G1-EX-9.jpg'],
          resposta: ['L141-G1-RES-9.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L141-G2-EX-1.jpg'],
          resposta: ['L141-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L141-G2-EX-2.jpg'],
          resposta: ['L141-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L141-G2-EX-3.jpg'],
          resposta: ['L141-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L141-G2-EX-4.jpg'],
          resposta: ['L141-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L141-G2-EX-5.jpg'],
          resposta: ['L141-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L141-G2-EX-6.jpg'],
          resposta: ['L141-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L141-G2-EX-7.jpg'],
          resposta: ['L141-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L141-G2-EX-8.jpg'],
          resposta: ['L141-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L141-G2-EX-9.jpg'],
          resposta: ['L141-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L141-G2-EX-10.jpg'],
          resposta: ['L141-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L141-G2-EX-11.jpg'],
          resposta: ['L141-G2-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L141-G2-EX-12.jpg'],
          resposta: ['L141-G2-RES-12.jpg']
        }
      ]
    }
  },
  L142: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L142-G1-EX-1.jpg'],
          resposta: ['L142-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L142-G1-EX-2.jpg'],
          resposta: ['L142-G1-RES-2.jpg', 'L142-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L142-G1-EX-3.jpg'],
          resposta: ['L142-G1-RES-3.jpg', 'L142-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L142-G1-EX-4.jpg'],
          resposta: ['L142-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L142-G1-EX-5.jpg'],
          resposta: ['L142-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L142-G1-EX-6.jpg'],
          resposta: ['L142-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L142-G1-EX-7.jpg'],
          resposta: ['L142-G1-RES-7.jpg', 'L142-G1-RES-7-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L142-G2-EX-1.jpg'],
          resposta: ['L142-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L142-G2-EX-2.jpg'],
          resposta: ['L142-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L142-G2-EX-3.jpg'],
          resposta: ['L142-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L142-G2-EX-4.jpg'],
          resposta: ['L142-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L142-G2-EX-5.jpg'],
          resposta: ['L142-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L142-G2-EX-6.jpg'],
          resposta: ['L142-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L142-G2-EX-7.jpg'],
          resposta: ['L142-G2-RES-7.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L142-G3-EX-1.jpg'],
          resposta: ['L142-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L142-G3-EX-2.jpg'],
          resposta: ['L142-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L142-G3-EX-3.jpg'],
          resposta: ['L142-G3-RES-3.jpg', 'L142-G3-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L142-G3-EX-4.jpg'],
          resposta: ['L142-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L142-G3-EX-5.jpg'],
          resposta: ['L142-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L142-G3-EX-6.jpg'],
          resposta: ['L142-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L142-G3-EX-7.jpg'],
          resposta: ['L142-G3-RES-7.jpg', 'L142-G3-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L142-G3-EX-8.jpg'],
          resposta: [
            'L142-G3-RES-8.jpg',
            'L142-G3-RES-8-parte2.jpg',
            'L142-G3-RES-8-parte3.jpg'
          ]
        }
      ]
    }
  },
  L143: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L143-G1-EX-1.jpg'],
          resposta: ['L143-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L143-G1-EX-2.jpg'],
          resposta: ['L143-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L143-G1-EX-3.jpg'],
          resposta: ['L143-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L143-G1-EX-4.jpg'],
          resposta: ['L143-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L143-G1-EX-5.jpg'],
          resposta: ['L143-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L143-G1-EX-6.jpg'],
          resposta: ['L143-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L143-G1-EX-7.jpg'],
          resposta: ['L143-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L143-G1-EX-8.jpg'],
          resposta: ['L143-G1-RES-8.jpg']
        }
      ]
    }
  },
  L144: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L144-G1-EX-1.jpg'],
          resposta: ['L144-G1-RES-1.jpg', 'L144-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L144-G1-EX-2.jpg'],
          resposta: ['L144-G1-RES-2.jpg', 'L144-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L144-G1-EX-3.jpg'],
          resposta: ['L144-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L144-G1-EX-4.jpg'],
          resposta: ['L144-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L144-G1-EX-5.jpg'],
          resposta: ['L144-G1-RES-5.jpg', 'L144-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L144-G1-EX-6.jpg'],
          resposta: ['L144-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L144-G1-EX-7.jpg'],
          resposta: ['L144-G1-RES-7.jpg', 'L144-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L144-G1-EX-8.jpg'],
          resposta: ['L144-G1-RES-8.jpg', 'L144-G1-RES-8-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L144-G2-EX-1.jpg'],
          resposta: ['L144-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L144-G2-EX-2.jpg'],
          resposta: ['L144-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L144-G2-EX-3.jpg'],
          resposta: ['L144-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L144-G2-EX-4.jpg'],
          resposta: ['L144-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L144-G2-EX-5.jpg'],
          resposta: ['L144-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L144-G2-EX-6.jpg'],
          resposta: ['L144-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L144-G2-EX-7.jpg'],
          resposta: ['L144-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L144-G2-EX-8.jpg'],
          resposta: ['L144-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L144-G2-EX-9.jpg'],
          resposta: ['L144-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L144-G2-EX-10.jpg'],
          resposta: ['L144-G2-RES-10.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L144-G3-EX-1.jpg'],
          resposta: ['L144-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L144-G3-EX-2.jpg'],
          resposta: ['L144-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L144-G3-EX-3.jpg'],
          resposta: ['L144-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L144-G3-EX-4.jpg'],
          resposta: ['L144-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L144-G3-EX-5.jpg'],
          resposta: ['L144-G3-RES-5.jpg', 'L144-G3-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L144-G3-EX-6.jpg'],
          resposta: ['L144-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L144-G3-EX-7.jpg'],
          resposta: ['L144-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L144-G3-EX-8.jpg'],
          resposta: ['L144-G3-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L144-G3-EX-9.jpg'],
          resposta: [
            'L144-G3-RES-9.jpg',
            'L144-G3-RES-9-parte2.jpg',
            'L144-G3-RES-9-parte3.jpg',
            'L144-G3-RES-9-parte4.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L144-G3-EX-10.jpg'],
          resposta: [
            'L144-G3-RES-10.jpg',
            'L144-G3-RES-10-parte2.jpg',
            'L144-G3-RES-10-parte3.jpg',
            'L144-G3-RES-10-parte4.jpg',
            'L144-G3-RES-10-parte5.jpg'
          ]
        }
      ]
    }
  },
  L145: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L145-G1-EX-1.jpg'],
          resposta: ['L145-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L145-G1-EX-2.jpg'],
          resposta: ['L145-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L145-G1-EX-3.jpg'],
          resposta: ['L145-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L145-G1-EX-4.jpg'],
          resposta: ['L145-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L145-G1-EX-5.jpg'],
          resposta: ['L145-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L145-G1-EX-6.jpg'],
          resposta: ['L145-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L145-G1-EX-7.jpg'],
          resposta: ['L145-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L145-G1-EX-8.jpg'],
          resposta: ['L145-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L145-G1-EX-9.jpg'],
          resposta: ['L145-G1-RES-9.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L145-G2-EX-1.jpg'],
          resposta: ['L145-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L145-G2-EX-2.jpg'],
          resposta: ['L145-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L145-G2-EX-3.jpg'],
          resposta: ['L145-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L145-G2-EX-4.jpg'],
          resposta: ['L145-G2-RES-4.jpg', 'L145-G2-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L145-G2-EX-5.jpg'],
          resposta: ['L145-G2-RES-5.jpg']
        }
      ]
    }
  },
  L146: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L146-G1-EX-1.jpg'],
          resposta: ['L146-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L146-G1-EX-2.jpg'],
          resposta: ['L146-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L146-G1-EX-3.jpg'],
          resposta: ['L146-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L146-G1-EX-4.jpg'],
          resposta: ['L146-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L146-G1-EX-5.jpg'],
          resposta: ['L146-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L146-G1-EX-6.jpg'],
          resposta: ['L146-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L146-G1-EX-7.jpg'],
          resposta: ['L146-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L146-G1-EX-8.jpg'],
          resposta: ['L146-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L146-G1-EX-9.jpg'],
          resposta: ['L146-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L146-G1-EX-10.jpg'],
          resposta: ['L146-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L146-G1-EX-11.jpg'],
          resposta: ['L146-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L146-G1-EX-12.jpg'],
          resposta: ['L146-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L146-G1-EX-13.jpg', 'L146-G1-EX-13-parte2.jpg'],
          resposta: ['L146-G1-RES-13.jpg']
        }
      ]
    }
  },
  L147: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L147-G1-EX-1.jpg'],
          resposta: ['L147-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L147-G1-EX-2.jpg'],
          resposta: ['L147-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L147-G1-EX-3.jpg'],
          resposta: ['L147-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L147-G1-EX-4.jpg'],
          resposta: ['L147-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L147-G1-EX-5.jpg'],
          resposta: ['L147-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L147-G1-EX-6.jpg'],
          resposta: ['L147-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L147-G1-EX-7.jpg'],
          resposta: ['L147-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L147-G1-EX-8.jpg'],
          resposta: ['L147-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L147-G1-EX-9.jpg'],
          resposta: ['L147-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L147-G1-EX-10.jpg'],
          resposta: ['L147-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L147-G1-EX-11.jpg'],
          resposta: ['L147-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L147-G1-EX-12.jpg'],
          resposta: ['L147-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L147-G1-EX-13.jpg'],
          resposta: ['L147-G1-RES-13.jpg']
        }
      ]
    }
  },
  L148: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L148-G1-EX-1.jpg'],
          resposta: ['L148-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L148-G1-EX-2.jpg'],
          resposta: ['L148-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L148-G1-EX-3.jpg'],
          resposta: ['L148-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L148-G1-EX-4.jpg'],
          resposta: ['L148-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L148-G1-EX-5.jpg'],
          resposta: ['L148-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L148-G1-EX-6.jpg'],
          resposta: ['L148-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L148-G1-EX-7.jpg'],
          resposta: ['L148-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L148-G1-EX-8.jpg'],
          resposta: ['L148-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L148-G1-EX-9.jpg'],
          resposta: [
            'L148-G1-RES-9.jpg',
            'L148-G1-RES-9-parte2.jpg',
            'L148-G1-RES-9-parte3.jpg',
            'L148-G1-RES-9-parte4.jpg'
          ]
        }
      ]
    }
  },
  L149: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G1-EX-1.jpg'],
          resposta: ['L149-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G1-EX-2.jpg'],
          resposta: ['L149-G1-RES-2.jpg', 'L149-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G1-EX-3.jpg'],
          resposta: ['L149-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G1-EX-4.jpg'],
          resposta: ['L149-G1-RES-4.jpg', 'L149-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G1-EX-5.jpg'],
          resposta: ['L149-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G1-EX-6.jpg'],
          resposta: ['L149-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G1-EX-7.jpg'],
          resposta: ['L149-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G1-EX-8.jpg'],
          resposta: ['L149-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G1-EX-9.jpg'],
          resposta: ['L149-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G1-EX-10.jpg'],
          resposta: ['L149-G1-RES-10.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G2-EX-1.jpg'],
          resposta: ['L149-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G2-EX-2.jpg'],
          resposta: ['L149-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G2-EX-3.jpg'],
          resposta: ['L149-G2-RES-3.jpg', 'L149-G2-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G2-EX-4.jpg'],
          resposta: ['L149-G2-RES-4.jpg', 'L149-G2-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G2-EX-5.jpg'],
          resposta: ['L149-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G2-EX-6.jpg'],
          resposta: [
            'L149-G2-RES-6.jpg',
            'L149-G2-RES-6-parte2.jpg',
            'L149-G2-RES-6-parte3.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G2-EX-7.jpg'],
          resposta: ['L149-G2-RES-7.jpg', 'L149-G2-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G2-EX-8.jpg'],
          resposta: ['L149-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L149-G1-EX-FORMULAS.jpg', 'L149-G2-EX-9.jpg'],
          resposta: ['L149-G2-RES-9.jpg', 'L149-G2-RES-9-parte2.jpg']
        }
      ]
    }
  },
  L150: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L150-G1-EX-1.jpg'],
          resposta: ['L150-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L150-G1-EX-2.jpg'],
          resposta: ['L150-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L150-G1-EX-3.jpg'],
          resposta: ['L150-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L150-G1-EX-4.jpg'],
          resposta: ['L150-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L150-G1-EX-5.jpg'],
          resposta: ['L150-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L150-G1-EX-6.jpg'],
          resposta: ['L150-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L150-G1-EX-7.jpg'],
          resposta: ['L150-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L150-G1-EX-8.jpg'],
          resposta: ['L150-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L150-G1-EX-9.jpg'],
          resposta: ['L150-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L150-G1-EX-10.jpg'],
          resposta: ['L150-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L150-G1-EX-11.jpg'],
          resposta: ['L150-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L150-G1-EX-12.jpg'],
          resposta: ['L150-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L150-G1-EX-13.jpg'],
          resposta: ['L150-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L150-G1-EX-14.jpg'],
          resposta: ['L150-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L150-G1-EX-15.jpg'],
          resposta: [
            'L150-G1-RES-15.jpg',
            'L150-G1-RES-15-parte2.jpg',
            'L150-G1-RES-15-parte3.jpg'
          ]
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L150-G2-EX-1.jpg'],
          resposta: ['L150-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L150-G2-EX-2.jpg'],
          resposta: ['L150-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L150-G2-EX-3.jpg'],
          resposta: ['L150-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L150-G2-EX-4.jpg'],
          resposta: ['L150-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L150-G2-EX-5.jpg'],
          resposta: ['L150-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L150-G2-EX-6.jpg'],
          resposta: ['L150-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L150-G2-EX-7.jpg'],
          resposta: ['L150-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L150-G2-EX-8.jpg', 'L150-G2-EX-8-parte2.jpg'],
          resposta: ['L150-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L150-G2-EX-8.jpg', 'L150-G2-EX-9.jpg'],
          resposta: ['L150-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L150-G2-EX-10.jpg'],
          resposta: ['L150-G2-RES-10.jpg']
        }
      ]
    }
  },
  L151: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L151-G1-EX-1.jpg'],
          resposta: ['L151-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L151-G1-EX-2.jpg'],
          resposta: ['L151-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L151-G1-EX-3.jpg'],
          resposta: ['L151-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L151-G1-EX-4.jpg'],
          resposta: ['L151-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L151-G1-EX-5.jpg'],
          resposta: ['L151-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L151-G1-EX-6.jpg'],
          resposta: [
            'L151-G1-RES-6.jpg',
            'L151-G1-RES-6-parte2.jpg',
            'L151-G1-RES-6-parte3.jpg',
            'L151-G1-RES-6-parte4.jpg',
            'L151-G1-RES-6-parte5.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L151-G1-EX-7.jpg'],
          resposta: ['L151-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L151-G1-EX-8.jpg', 'L151-G1-EX-8-parte2.jpg'],
          resposta: ['L151-G1-RES-8.jpg', 'L151-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L151-G1-EX-9.jpg'],
          resposta: ['L151-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L151-G1-EX-10.jpg'],
          resposta: ['L151-G1-RES-10.jpg', 'L151-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: ['L151-G1-EX-11.jpg'],
          resposta: ['L151-G1-RES-11.jpg']
        }
      ]
    }
  },
  L152: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L152-G1-EX-1.jpg'],
          resposta: ['L152-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L152-G1-EX-2.jpg'],
          resposta: ['L152-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L152-G1-EX-3.jpg'],
          resposta: ['L152-G1-RES-3.jpg', 'L152-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L152-G1-EX-4.jpg'],
          resposta: ['L152-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L152-G1-EX-5.jpg'],
          resposta: ['L152-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L152-G1-EX-6.jpg'],
          resposta: ['L152-G1-RES-6.jpg', 'L152-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L152-G1-EX-7.jpg'],
          resposta: ['L152-G1-RES-7.jpg', 'L152-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L152-G1-EX-8.jpg'],
          resposta: ['L152-G1-RES-8.jpg', 'L152-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L152-G1-EX-9.jpg'],
          resposta: ['L152-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L152-G1-EX-10.jpg'],
          resposta: ['L152-G1-RES-10.jpg', 'L152-G1-RES-10-parte2.jpg']
        }
      ]
    }
  },
  L153: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L153-G1-EX-1.jpg'],
          resposta: ['L153-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L153-G1-EX-2.jpg'],
          resposta: ['L153-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L153-G1-EX-3.jpg'],
          resposta: ['L153-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L153-G1-EX-4.jpg'],
          resposta: ['L153-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L153-G1-EX-5.jpg'],
          resposta: ['L153-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L153-G1-EX-6.jpg'],
          resposta: ['L153-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L153-G1-EX-7.jpg'],
          resposta: ['L153-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L153-G1-EX-8.jpg'],
          resposta: ['L153-G1-RES-8.jpg']
        }
      ]
    }
  },
  L154: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L154-G1-EX-1.jpg'],
          resposta: ['L154-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L154-G1-EX-2.jpg'],
          resposta: ['L154-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L154-G1-EX-3.jpg'],
          resposta: ['L154-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L154-G1-EX-4.jpg'],
          resposta: ['L154-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L154-G1-EX-5.jpg'],
          resposta: ['L154-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L154-G1-EX-6.jpg'],
          resposta: ['L154-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L154-G1-EX-7.jpg'],
          resposta: ['L154-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L154-G1-EX-8.jpg', 'L154-G1-EX-8-parte2.jpg'],
          resposta: ['L154-G1-RES-8.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L154-G2-EX-1.jpg'],
          resposta: ['L154-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L154-G2-EX-2.jpg'],
          resposta: ['L154-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L154-G2-EX-3.jpg'],
          resposta: ['L154-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L154-G2-EX-4.jpg'],
          resposta: ['L154-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L154-G2-EX-5.jpg'],
          resposta: ['L154-G2-RES-5.jpg']
        }
      ]
    }
  },
  L155: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L155-G1-EX-1.jpg'],
          resposta: ['L155-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L155-G1-EX-2.jpg'],
          resposta: ['L155-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L155-G1-EX-3.jpg'],
          resposta: ['L155-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L155-G1-EX-4.jpg'],
          resposta: ['L155-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L155-G1-EX-5.jpg'],
          resposta: ['L155-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L155-G1-EX-6.jpg'],
          resposta: ['L155-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L155-G1-EX-7.jpg'],
          resposta: ['L155-G1-RES-7.jpg', 'L155-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L155-G1-EX-8.jpg'],
          resposta: ['L155-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L155-G1-EX-9.jpg'],
          resposta: ['L155-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L155-G1-EX-10.jpg'],
          resposta: ['L155-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L155-G1-EX-11.jpg'],
          resposta: ['L155-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L155-G1-EX-12.jpg'],
          resposta: ['L155-G1-RES-12.jpg']
        }
      ]
    }
  },
  L156: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L156-G1-EX-1.jpg'],
          resposta: ['L156-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L156-G1-EX-2.jpg'],
          resposta: ['L156-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L156-G1-EX-3.jpg'],
          resposta: ['L156-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L156-G1-EX-4.jpg'],
          resposta: ['L156-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L156-G1-EX-5.jpg'],
          resposta: ['L156-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L156-G1-EX-6.jpg'],
          resposta: ['L156-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L156-G1-EX-7.jpg'],
          resposta: ['L156-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L156-G1-EX-8.jpg'],
          resposta: ['L156-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L156-G1-EX-9.jpg'],
          resposta: ['L156-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L156-G1-EX-10.jpg'],
          resposta: ['L156-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L156-G1-EX-11.jpg'],
          resposta: ['L156-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L156-G1-EX-12.jpg'],
          resposta: ['L156-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L156-G1-EX-13.jpg'],
          resposta: ['L156-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L156-G1-EX-14.jpg'],
          resposta: ['L156-G1-RES-14.jpg']
        }
      ]
    }
  },
  L157: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L157-G1-EX-1.jpg'],
          resposta: ['L157-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L157-G1-EX-2.jpg'],
          resposta: ['L157-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L157-G1-EX-3.jpg'],
          resposta: ['L157-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L157-G1-EX-4.jpg'],
          resposta: ['L157-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L157-G1-EX-5.jpg'],
          resposta: ['L157-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L157-G1-EX-6.jpg'],
          resposta: ['L157-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L157-G1-EX-7.jpg'],
          resposta: ['L157-G1-RES-7.jpg', 'L157-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L157-G1-EX-8.jpg'],
          resposta: ['L157-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L157-G1-EX-9.jpg'],
          resposta: ['L157-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L157-G1-EX-10.jpg'],
          resposta: ['L157-G1-RES-10.jpg']
        }
      ]
    }
  },
  L158: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L158-G1-EX-1.jpg'],
          resposta: ['L158-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L158-G1-EX-2.jpg'],
          resposta: [
            'L158-G1-RES-2.jpg',
            'L158-G1-RES-2-parte2.jpg',
            'L158-G1-RES-2-parte3.jpg',
            'L158-G1-RES-2-parte4.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L158-G1-EX-3.jpg'],
          resposta: ['L158-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L158-G1-EX-4.jpg'],
          resposta: ['L158-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L158-G1-EX-5.jpg'],
          resposta: ['L158-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L158-G1-EX-6.jpg'],
          resposta: ['L158-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L158-G1-EX-7.jpg'],
          resposta: ['L158-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L158-G1-EX-8.jpg'],
          resposta: ['L158-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L158-G1-EX-9.jpg'],
          resposta: ['L158-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L158-G1-EX-10.jpg'],
          resposta: ['L158-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L158-G1-EX-11.jpg'],
          resposta: ['L158-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L158-G1-EX-12.jpg'],
          resposta: ['L158-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L158-G1-EX-13.jpg'],
          resposta: ['L158-G1-RES-13.jpg']
        }
      ]
    }
  },
  L159: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L159-G1-EX-1.jpg'],
          resposta: ['L159-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L159-G1-EX-2.jpg'],
          resposta: ['L159-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L159-G1-EX-3.jpg'],
          resposta: ['L159-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L159-G1-EX-4.jpg'],
          resposta: ['L159-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L159-G1-EX-5.jpg'],
          resposta: ['L159-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L159-G1-EX-6.jpg'],
          resposta: ['L159-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L159-G1-EX-7.jpg'],
          resposta: ['L159-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L159-G1-EX-8.jpg'],
          resposta: ['L159-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L159-G1-EX-9.jpg'],
          resposta: ['L159-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L159-G1-EX-10.jpg'],
          resposta: ['L159-G1-RES-10.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L159-G2-EX-1.jpg'],
          resposta: ['L159-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L159-G2-EX-2.jpg'],
          resposta: ['L159-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L159-G2-EX-3.jpg'],
          resposta: ['L159-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L159-G2-EX-4.jpg'],
          resposta: ['L159-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L159-G2-EX-5.jpg'],
          resposta: ['L159-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L159-G2-EX-6.jpg'],
          resposta: ['L159-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L159-G2-EX-7.jpg'],
          resposta: ['L159-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L159-G2-EX-8.jpg'],
          resposta: ['L159-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L159-G2-EX-9.jpg'],
          resposta: ['L159-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L159-G2-EX-10.jpg'],
          resposta: ['L159-G2-RES-10.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L159-G3-EX-1.jpg'],
          resposta: ['L159-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L159-G3-EX-2.jpg'],
          resposta: ['L159-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L159-G3-EX-3.jpg'],
          resposta: ['L159-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L159-G3-EX-4.jpg'],
          resposta: ['L159-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L159-G3-EX-5.jpg'],
          resposta: ['L159-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L159-G3-EX-6.jpg'],
          resposta: ['L159-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L159-G3-EX-7.jpg'],
          resposta: ['L159-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L159-G3-EX-8.jpg'],
          resposta: ['L159-G3-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L159-G3-EX-9.jpg'],
          resposta: ['L159-G3-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L159-G3-EX-10.jpg'],
          resposta: ['L159-G3-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L159-G3-EX-11.jpg'],
          resposta: ['L159-G3-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L159-G3-EX-12.jpg'],
          resposta: ['L159-G3-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L159-G3-EX-13.jpg'],
          resposta: ['L159-G3-RES-13.jpg']
        }
      ]
    }
  },
  L160: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L160-G1-EX-1.jpg'],
          resposta: ['L160-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L160-G1-EX-2.jpg'],
          resposta: ['L160-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L160-G1-EX-3.jpg'],
          resposta: ['L160-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L160-G1-EX-4.jpg'],
          resposta: ['L160-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L160-G1-EX-5.jpg'],
          resposta: ['L160-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L160-G1-EX-6.jpg'],
          resposta: ['L160-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L160-G1-EX-7.jpg'],
          resposta: ['L160-G1-RES-7.jpg', 'L160-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L160-G1-EX-8.jpg'],
          resposta: ['L160-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L160-G1-EX-9.jpg'],
          resposta: ['L160-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L160-G1-EX-10.jpg'],
          resposta: ['L160-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L160-G1-EX-11.jpg'],
          resposta: ['L160-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L160-G1-EX-12.jpg'],
          resposta: ['L160-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L160-G1-EX-13.jpg'],
          resposta: ['L160-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L160-G1-EX-14.jpg'],
          resposta: ['L160-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L160-G1-EX-15.jpg'],
          resposta: ['L160-G1-RES-15.jpg']
        }
      ]
    }
  },
  L161: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L161-G1-EX-1.jpg'],
          resposta: ['L161-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L161-G1-EX-2.jpg'],
          resposta: ['L161-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L161-G1-EX-3.jpg'],
          resposta: ['L161-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L161-G1-EX-4.jpg'],
          resposta: ['L161-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L161-G1-EX-5.jpg'],
          resposta: ['L161-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L161-G1-EX-6.jpg'],
          resposta: ['L161-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L161-G1-EX-7.jpg'],
          resposta: ['L161-G1-RES-7.jpg']
        }
      ]
    }
  },
  L162: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L162-G1-EX-1.jpg'],
          resposta: ['L162-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L162-G1-EX-2.jpg'],
          resposta: ['L162-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L162-G1-EX-3.jpg'],
          resposta: ['L162-G1-RES-3.jpg', 'L162-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L162-G1-EX-4.jpg'],
          resposta: ['L162-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L162-G1-EX-5.jpg'],
          resposta: ['L162-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L162-G1-EX-6.jpg'],
          resposta: ['L162-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L162-G1-EX-7.jpg'],
          resposta: ['L162-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L162-G1-EX-8.jpg', 'L162-G1-EX-8-parte2.jpg'],
          resposta: ['L162-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L162-G1-EX-9.jpg'],
          resposta: ['L162-G1-RES-9.jpg', 'L162-G1-RES-9-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L162-G2-EX-1.jpg'],
          resposta: ['L162-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L162-G2-EX-2.jpg'],
          resposta: ['L162-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L162-G2-EX-3.jpg'],
          resposta: ['L162-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L162-G2-EX-4.jpg'],
          resposta: ['L162-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L162-G2-EX-5.jpg'],
          resposta: ['L162-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L162-G2-EX-6.jpg'],
          resposta: ['L162-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L162-G2-EX-7.jpg'],
          resposta: ['L162-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L162-G2-EX-8.jpg'],
          resposta: ['L162-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L162-G2-EX-9.jpg'],
          resposta: ['L162-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L162-G2-EX-10.jpg'],
          resposta: ['L162-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L162-G2-EX-11.jpg'],
          resposta: ['L162-G2-RES-11.jpg']
        }
      ]
    }
  },
  L163: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L163-G1-EX-1.jpg'],
          resposta: [
            'L163-G1-RES-1.jpg',
            'L163-G1-RES-1-parte2.jpg',
            'L163-G1-RES-1-parte3.jpg',
            'L163-G1-RES-1-parte4.jpg',
            'L163-G1-RES-1-parte5.jpg',
            'L163-G1-RES-1-parte6.jpg',
            'L163-G1-RES-1-parte7.jpg'
          ]
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L163-G2-EX-1.jpg'],
          resposta: ['L163-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L163-G2-EX-2.jpg'],
          resposta: ['L163-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L163-G2-EX-3.jpg'],
          resposta: ['L163-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L163-G2-EX-4.jpg'],
          resposta: ['L163-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L163-G2-EX-5.jpg'],
          resposta: ['L163-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L163-G2-EX-6.jpg'],
          resposta: ['L163-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L163-G2-EX-7.jpg'],
          resposta: ['L163-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L163-G2-EX-8.jpg'],
          resposta: ['L163-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L163-G2-EX-9.jpg'],
          resposta: ['L163-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L163-G2-EX-10.jpg'],
          resposta: ['L163-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L163-G2-EX-11.jpg'],
          resposta: ['L163-G2-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L163-G2-EX-12.jpg'],
          resposta: ['L163-G2-RES-12.jpg']
        }
      ]
    }
  },
  L164: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L164-G1-EX-1.jpg'],
          resposta: ['L164-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L164-G1-EX-2.jpg'],
          resposta: ['L164-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L164-G1-EX-3.jpg'],
          resposta: ['L164-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L164-G1-EX-4.jpg'],
          resposta: ['L164-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L164-G1-EX-5.jpg'],
          resposta: ['L164-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L164-G1-EX-6.jpg'],
          resposta: ['L164-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L164-G1-EX-7.jpg'],
          resposta: ['L164-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L164-G1-EX-8.jpg'],
          resposta: ['L164-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L164-G1-EX-9.jpg'],
          resposta: ['L164-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L164-G1-EX-10.jpg'],
          resposta: ['L164-G1-RES-10.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L164-G2-EX-1.jpg'],
          resposta: ['L164-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L164-G2-EX-2.jpg'],
          resposta: ['L164-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L164-G2-EX-3.jpg'],
          resposta: ['L164-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L164-G2-EX-4.jpg'],
          resposta: ['L164-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L164-G2-EX-5.jpg'],
          resposta: ['L164-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L164-G2-EX-6.jpg'],
          resposta: ['L164-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L164-G2-EX-7.jpg'],
          resposta: ['L164-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L164-G2-EX-8.jpg'],
          resposta: ['L164-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L164-G2-EX-9.jpg'],
          resposta: ['L164-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L164-G2-EX-10.jpg'],
          resposta: ['L164-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L164-G2-EX-11.jpg'],
          resposta: ['L164-G2-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L164-G2-EX-12.jpg'],
          resposta: ['L164-G2-RES-12.jpg', 'L164-G2-RES-12-parte2.jpg']
        }
      ]
    }
  },
  L165: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L165-G1-EX-1.jpg'],
          resposta: ['L165-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L165-G1-EX-2.jpg'],
          resposta: ['L165-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L165-G1-EX-3.jpg'],
          resposta: ['L165-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L165-G1-EX-4.jpg'],
          resposta: ['L165-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L165-G1-EX-5.jpg'],
          resposta: ['L165-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L165-G1-EX-6.jpg'],
          resposta: ['L165-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L165-G1-EX-7.jpg'],
          resposta: ['L165-G1-RES-7.jpg']
        }
      ]
    }
  },
  L166: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L166-G1-EX-1.jpg'],
          resposta: ['L166-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L166-G1-EX-2.jpg'],
          resposta: ['L166-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L166-G1-EX-3.jpg'],
          resposta: ['L166-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L166-G1-EX-4.jpg'],
          resposta: ['L166-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L166-G1-EX-5.jpg'],
          resposta: ['L166-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L166-G1-EX-6.jpg'],
          resposta: ['L166-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L166-G1-EX-7.jpg'],
          resposta: ['L166-G1-RES-7.jpg', 'L166-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L166-G1-EX-8.jpg'],
          resposta: ['L166-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L166-G1-EX-9.jpg'],
          resposta: ['L166-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L166-G1-EX-10.jpg'],
          resposta: ['L166-G1-RES-10.jpg']
        }
      ]
    }
  },
  L167: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L167-G1-EX-1.jpg'],
          resposta: ['L167-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L167-G1-EX-2.jpg'],
          resposta: ['L167-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L167-G1-EX-3.jpg'],
          resposta: ['L167-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L167-G1-EX-4.jpg'],
          resposta: ['L167-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L167-G1-EX-5.jpg'],
          resposta: ['L167-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L167-G1-EX-6.jpg'],
          resposta: ['L167-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L167-G1-EX-7.jpg'],
          resposta: ['L167-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L167-G1-EX-8.jpg'],
          resposta: ['L167-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L167-G1-EX-9.jpg'],
          resposta: ['L167-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L167-G1-EX-10.jpg'],
          resposta: ['L167-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L167-G1-EX-11.jpg'],
          resposta: ['L167-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L167-G1-EX-12.jpg'],
          resposta: ['L167-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L167-G1-EX-13.jpg'],
          resposta: ['L167-G1-RES-13.jpg']
        }
      ]
    }
  },
  L168: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L168-G1-EX-1.jpg'],
          resposta: ['L168-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L168-G1-EX-2.jpg'],
          resposta: ['L168-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L168-G1-EX-3.jpg'],
          resposta: ['L168-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L168-G1-EX-4.jpg'],
          resposta: ['L168-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L168-G1-EX-5.jpg'],
          resposta: ['L168-G1-RES-5.jpg', 'L168-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L168-G1-EX-6.jpg'],
          resposta: ['L168-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L168-G1-EX-7.jpg'],
          resposta: ['L168-G1-RES-7.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L168-G2-EX-1.jpg'],
          resposta: ['L168-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L168-G2-EX-2.jpg'],
          resposta: ['L168-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L168-G2-EX-3.jpg'],
          resposta: ['L168-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L168-G2-EX-4.jpg'],
          resposta: ['L168-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L168-G2-EX-5.jpg'],
          resposta: ['L168-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L168-G2-EX-6.jpg'],
          resposta: ['L168-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L168-G2-EX-7.jpg'],
          resposta: ['L168-G2-RES-7.jpg', 'L168-G2-RES-7-parte2.jpg']
        }
      ]
    }
  },
  L169: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L169-G1-EX-1.jpg'],
          resposta: ['L169-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L169-G1-EX-2.jpg'],
          resposta: ['L169-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L169-G1-EX-3.jpg'],
          resposta: ['L169-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L169-G1-EX-4.jpg'],
          resposta: ['L169-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L169-G1-EX-5.jpg'],
          resposta: ['L169-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L169-G1-EX-6.jpg'],
          resposta: ['L169-G1-RES-6.jpg', 'L169-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L169-G1-EX-7.jpg'],
          resposta: ['L169-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L169-G1-EX-8.jpg'],
          resposta: ['L169-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L169-G1-EX-9.jpg'],
          resposta: ['L169-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L169-G1-EX-10.jpg'],
          resposta: ['L169-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L169-G1-EX-11.jpg'],
          resposta: ['L169-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L169-G1-EX-12.jpg'],
          resposta: ['L169-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L169-G1-EX-13.jpg'],
          resposta: ['L169-G1-RES-13.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L169-G2-EX-1.jpg'],
          resposta: ['L169-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L169-G2-EX-2.jpg'],
          resposta: ['L169-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L169-G2-EX-3.jpg'],
          resposta: ['L169-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L169-G2-EX-4.jpg'],
          resposta: ['L169-G2-RES-4.jpg', 'L169-G2-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L169-G2-EX-5.jpg'],
          resposta: ['L169-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L169-G2-EX-6.jpg'],
          resposta: ['L169-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L169-G2-EX-7.jpg'],
          resposta: ['L169-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L169-G2-EX-8.jpg'],
          resposta: ['L169-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L169-G2-EX-9.jpg'],
          resposta: ['L169-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L169-G2-EX-10.jpg'],
          resposta: ['L169-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L169-G2-EX-11.jpg'],
          resposta: ['L169-G2-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L169-G2-EX-12.jpg'],
          resposta: ['L169-G2-RES-12.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L169-G3-EX-1.jpg'],
          resposta: ['L169-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L169-G3-EX-2.jpg'],
          resposta: ['L169-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L169-G3-EX-3.jpg', 'L169-G3-EX-3-parte2.jpg'],
          resposta: ['L169-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L169-G3-EX-4.jpg'],
          resposta: ['L169-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L169-G3-EX-5.jpg'],
          resposta: ['L169-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L169-G3-EX-6.jpg'],
          resposta: ['L169-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L169-G3-EX-7.jpg', 'L169-G3-EX-7-parte2.jpg'],
          resposta: ['L169-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L169-G3-EX-8.jpg'],
          resposta: ['L169-G3-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L169-G3-EX-9.jpg'],
          resposta: ['L169-G3-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L169-G3-EX-10.jpg'],
          resposta: ['L169-G3-RES-10.jpg']
        }
      ]
    }
  },
  L170: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L170-G1-EX-1.jpg'],
          resposta: ['L170-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L170-G1-EX-2.jpg'],
          resposta: ['L170-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L170-G1-EX-3.jpg'],
          resposta: ['L170-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L170-G1-EX-4.jpg'],
          resposta: ['L170-G1-RES-4.jpg', 'L170-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L170-G1-EX-5.jpg'],
          resposta: ['L170-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L170-G1-EX-6.jpg'],
          resposta: ['L170-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L170-G1-EX-7.jpg'],
          resposta: ['L170-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L170-G1-EX-8.jpg'],
          resposta: ['L170-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L170-G1-EX-9.jpg'],
          resposta: ['L170-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L170-G1-EX-10.jpg'],
          resposta: [
            'L170-G1-RES-10.jpg',
            'L170-G1-RES-10-parte2.jpg',
            'L170-G1-RES-10-parte3.jpg'
          ]
        }
      ]
    }
  },
  L171: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L171-G1-EX-1.jpg'],
          resposta: ['L171-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L171-G1-EX-2.jpg'],
          resposta: ['L171-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L171-G1-EX-3.jpg'],
          resposta: ['L171-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L171-G1-EX-4.jpg'],
          resposta: ['L171-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L171-G1-EX-5.jpg'],
          resposta: ['L171-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L171-G1-EX-6.jpg'],
          resposta: ['L171-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L171-G1-EX-7.jpg'],
          resposta: ['L171-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L171-G1-EX-8.jpg'],
          resposta: ['L171-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L171-G1-EX-9.jpg'],
          resposta: ['L171-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L171-G1-EX-10.jpg'],
          resposta: ['L171-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L171-G1-EX-11.jpg'],
          resposta: ['L171-G1-RES-11.jpg']
        }
      ]
    }
  },
  L172: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L172-G1-EX-1.jpg'],
          resposta: ['L172-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L172-G1-EX-2.jpg'],
          resposta: ['L172-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L172-G1-EX-3.jpg'],
          resposta: ['L172-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L172-G1-EX-4.jpg'],
          resposta: ['L172-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L172-G1-EX-5.jpg'],
          resposta: ['L172-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L172-G1-EX-6.jpg'],
          resposta: ['L172-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L172-G1-EX-7.jpg'],
          resposta: ['L172-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L172-G1-EX-8.jpg'],
          resposta: ['L172-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L172-G1-EX-9.jpg'],
          resposta: ['L172-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L172-G1-EX-10.jpg'],
          resposta: ['L172-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L172-G1-EX-11.jpg'],
          resposta: ['L172-G1-RES-11.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L172-G2-EX-1.jpg'],
          resposta: ['L172-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L172-G2-EX-2.jpg'],
          resposta: ['L172-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L172-G2-EX-3.jpg'],
          resposta: ['L172-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L172-G2-EX-4.jpg', 'L172-G2-EX-4-parte2.jpg'],
          resposta: ['L172-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L172-G2-EX-5.jpg'],
          resposta: ['L172-G2-RES-5.jpg']
        }
      ]
    }
  },
  L173: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L173-G1-EX-1.jpg'],
          resposta: ['L173-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L173-G1-EX-2.jpg'],
          resposta: ['L173-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L173-G1-EX-3.jpg'],
          resposta: ['L173-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L173-G1-EX-4.jpg'],
          resposta: ['L173-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L173-G1-EX-5.jpg'],
          resposta: ['L173-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L173-G1-EX-6.jpg'],
          resposta: ['L173-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L173-G1-EX-7.jpg'],
          resposta: ['L173-G1-RES-7.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L173-G2-EX-1.jpg'],
          resposta: ['L173-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L173-G2-EX-2.jpg'],
          resposta: ['L173-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L173-G2-EX-3.jpg'],
          resposta: ['L173-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L173-G2-EX-4.jpg'],
          resposta: ['L173-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L173-G2-EX-5.jpg'],
          resposta: ['L173-G2-RES-5.jpg', 'L173-G2-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L173-G2-EX-6.jpg'],
          resposta: ['L173-G2-RES-6.jpg']
        }
      ]
    }
  },
  L174: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L174-G1-EX-1.jpg'],
          resposta: ['L174-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L174-G1-EX-2.jpg'],
          resposta: ['L174-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L174-G1-EX-3.jpg'],
          resposta: ['L174-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L174-G1-EX-4.jpg'],
          resposta: ['L174-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L174-G1-EX-5.jpg', 'L174-G1-EX-5-parte2.jpg'],
          resposta: ['L174-G1-RES-5.jpg']
        }
      ]
    }
  },
  L175: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L175-G1-EX-1.jpg'],
          resposta: ['L175-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L175-G1-EX-2.jpg'],
          resposta: ['L175-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L175-G1-EX-3.jpg'],
          resposta: ['L175-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L175-G1-EX-4.jpg'],
          resposta: ['L175-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L175-G1-EX-5.jpg'],
          resposta: ['L175-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L175-G1-EX-6.jpg'],
          resposta: ['L175-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L175-G1-EX-7.jpg'],
          resposta: ['L175-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L175-G1-EX-8.jpg'],
          resposta: ['L175-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L175-G1-EX-9.jpg'],
          resposta: ['L175-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L175-G1-EX-10.jpg'],
          resposta: ['L175-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L175-G1-EX-11.jpg'],
          resposta: ['L175-G1-RES-11.jpg']
        }
      ]
    }
  },
  L176: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L176-G1-EX-1.jpg'],
          resposta: ['L176-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L176-G1-EX-2.jpg'],
          resposta: ['L176-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L176-G1-EX-3.jpg'],
          resposta: ['L176-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L176-G1-EX-4.jpg'],
          resposta: ['L176-G1-RES-4.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L176-G2-EX-1.jpg'],
          resposta: ['L176-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L176-G2-EX-2.jpg'],
          resposta: ['L176-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L176-G2-EX-3.jpg'],
          resposta: ['L176-G2-RES-3.jpg']
        }
      ]
    }
  },
  L177: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L177-G1-EX-1.jpg'],
          resposta: ['L177-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L177-G1-EX-2.jpg'],
          resposta: ['L177-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L177-G1-EX-3.jpg'],
          resposta: ['L177-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L177-G1-EX-4.jpg'],
          resposta: ['L177-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L177-G1-EX-5.jpg'],
          resposta: ['L177-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L177-G1-EX-6.jpg'],
          resposta: ['L177-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L177-G1-EX-7.jpg', 'L177-G1-EX-7-parte2.jpg'],
          resposta: ['L177-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L177-G1-EX-8.jpg'],
          resposta: ['L177-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L177-G1-EX-9.jpg'],
          resposta: ['L177-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L177-G1-EX-10.jpg'],
          resposta: ['L177-G1-RES-10.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L177-G2-EX-1.jpg'],
          resposta: ['L177-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L177-G2-EX-2.jpg'],
          resposta: ['L177-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L177-G2-EX-3.jpg'],
          resposta: ['L177-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L177-G2-EX-4.jpg'],
          resposta: ['L177-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L177-G2-EX-5.jpg'],
          resposta: ['L177-G2-RES-5.jpg', 'L177-G2-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L177-G2-EX-6.jpg'],
          resposta: ['L177-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L177-G2-EX-7.jpg'],
          resposta: ['L177-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L177-G2-EX-8.jpg'],
          resposta: ['L177-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L177-G2-EX-9.jpg'],
          resposta: ['L177-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L177-G2-EX-10.jpg', 'L177-G2-EX-10-parte2.jpg'],
          resposta: ['L177-G2-RES-10.jpg']
        }
      ]
    }
  },
  L178: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L178-G1-EX-1.jpg'],
          resposta: ['L178-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L178-G1-EX-2.jpg'],
          resposta: ['L178-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L178-G1-EX-3.jpg'],
          resposta: ['L178-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L178-G1-EX-4.jpg'],
          resposta: ['L178-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L178-G1-EX-5.jpg'],
          resposta: ['L178-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L178-G1-EX-6.jpg'],
          resposta: ['L178-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L178-G1-EX-7.jpg'],
          resposta: ['L178-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L178-G1-EX-8.jpg', 'L178-G1-EX-8-parte2.jpg'],
          resposta: ['L178-G1-RES-8.jpg', 'L178-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L178-G1-EX-9.jpg'],
          resposta: ['L178-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L178-G1-EX-10.jpg'],
          resposta: ['L178-G1-RES-10.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L178-G2-EX-1.jpg'],
          resposta: ['L178-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L178-G2-EX-2.jpg'],
          resposta: ['L178-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L178-G2-EX-3.jpg'],
          resposta: ['L178-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L178-G2-EX-4.jpg'],
          resposta: ['L178-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L178-G2-EX-5.jpg'],
          resposta: ['L178-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L178-G2-EX-6.jpg'],
          resposta: ['L178-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L178-G2-EX-7.jpg'],
          resposta: ['L178-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L178-G2-EX-8.jpg'],
          resposta: ['L178-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L178-G2-EX-9.jpg'],
          resposta: ['L178-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L178-G2-EX-10.jpg'],
          resposta: ['L178-G2-RES-10.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L178-G3-EX-1.jpg'],
          resposta: ['L178-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L178-G3-EX-2.jpg'],
          resposta: ['L178-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L178-G3-EX-3.jpg'],
          resposta: ['L178-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L178-G3-EX-4.jpg'],
          resposta: ['L178-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L178-G3-EX-5.jpg'],
          resposta: ['L178-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L178-G3-EX-6.jpg'],
          resposta: ['L178-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L178-G3-EX-7.jpg'],
          resposta: ['L178-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L178-G3-EX-8.jpg'],
          resposta: ['L178-G3-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L178-G3-EX-9.jpg'],
          resposta: ['L178-G3-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L178-G3-EX-10.jpg'],
          resposta: ['L178-G3-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L178-G3-EX-11.jpg'],
          resposta: ['L178-G3-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L178-G3-EX-12.jpg'],
          resposta: ['L178-G3-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L178-G3-EX-13.jpg'],
          resposta: ['L178-G3-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L178-G3-EX-14.jpg'],
          resposta: ['L178-G3-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L178-G3-EX-15.jpg'],
          resposta: ['L178-G3-RES-15.jpg']
        },
        {
          ex: '16',
          enunciado: ['L178-G3-EX-16.jpg'],
          resposta: ['L178-G3-RES-16.jpg']
        }
      ]
    }
  },
  L179: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L179-G1-EX-1.jpg'],
          resposta: ['L179-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L179-G1-EX-2.jpg'],
          resposta: ['L179-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L179-G1-EX-3.jpg'],
          resposta: ['L179-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L179-G1-EX-4.jpg'],
          resposta: ['L179-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L179-G1-EX-5.jpg'],
          resposta: ['L179-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L179-G1-EX-6.jpg'],
          resposta: ['L179-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L179-G1-EX-7.jpg'],
          resposta: ['L179-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L179-G1-EX-8.jpg'],
          resposta: ['L179-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L179-G1-EX-9.jpg'],
          resposta: ['L179-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L179-G1-EX-10.jpg'],
          resposta: ['L179-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L179-G1-EX-11.jpg'],
          resposta: ['L179-G1-RES-11.jpg']
        }
      ]
    }
  },
  L180: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L180-G1-EX-1.jpg'],
          resposta: ['L180-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L180-G1-EX-2.jpg'],
          resposta: ['L180-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L180-G1-EX-3.jpg'],
          resposta: ['L180-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L180-G1-EX-4.jpg'],
          resposta: ['L180-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L180-G1-EX-5.jpg'],
          resposta: ['L180-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L180-G1-EX-6.jpg'],
          resposta: ['L180-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L180-G1-EX-7.jpg'],
          resposta: ['L180-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L180-G1-EX-8.jpg'],
          resposta: ['L180-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L180-G1-EX-9.jpg'],
          resposta: ['L180-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L180-G1-EX-10.jpg'],
          resposta: ['L180-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L180-G1-EX-11.jpg'],
          resposta: ['L180-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L180-G1-EX-12.jpg'],
          resposta: ['L180-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L180-G1-EX-13.jpg'],
          resposta: ['L180-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L180-G1-EX-14.jpg'],
          resposta: ['L180-G1-RES-14.jpg']
        }
      ]
    }
  },
  L181: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L181-G1-EX-1.jpg'],
          resposta: ['L181-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L181-G1-EX-2.jpg'],
          resposta: ['L181-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L181-G1-EX-3.jpg'],
          resposta: ['L181-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L181-G1-EX-4.jpg'],
          resposta: ['L181-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L181-G1-EX-5.jpg'],
          resposta: ['L181-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L181-G1-EX-6.jpg'],
          resposta: ['L181-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L181-G1-EX-7.jpg'],
          resposta: ['L181-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L181-G1-EX-8.jpg'],
          resposta: ['L181-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L181-G1-EX-9.jpg'],
          resposta: ['L181-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L181-G1-EX-10.jpg'],
          resposta: ['L181-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L181-G1-EX-11.jpg'],
          resposta: ['L181-G1-RES-11.jpg']
        }
      ]
    }
  },
  L182: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L182-G1-EX-1.jpg'],
          resposta: ['L182-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L182-G1-EX-2.jpg'],
          resposta: ['L182-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L182-G1-EX-3.jpg'],
          resposta: ['L182-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L182-G1-EX-4.jpg'],
          resposta: ['L182-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L182-G1-EX-5.jpg'],
          resposta: ['L182-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L182-G1-EX-6.jpg'],
          resposta: ['L182-G1-RES-6.jpg']
        }
      ]
    }
  },
  L183: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L183-G1-EX-1.jpg'],
          resposta: ['L183-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L183-G1-EX-2.jpg', 'L183-G1-EX-2-parte2.jpg'],
          resposta: ['L183-G1-RES-2.jpg', 'L183-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L183-G1-EX-3.jpg'],
          resposta: ['L183-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L183-G1-EX-4.jpg'],
          resposta: ['L183-G1-RES-4.jpg']
        }
      ]
    }
  },
  L184: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L184-G1-EX-1.jpg'],
          resposta: ['L184-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L184-G1-EX-2.jpg'],
          resposta: ['L184-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L184-G1-EX-3.jpg'],
          resposta: ['L184-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L184-G1-EX-4.jpg'],
          resposta: ['L184-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L184-G1-EX-5.jpg'],
          resposta: ['L184-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L184-G1-EX-6.jpg'],
          resposta: ['L184-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L184-G1-EX-7.jpg'],
          resposta: ['L184-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L184-G1-EX-8.jpg'],
          resposta: ['L184-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L184-G1-EX-9.jpg'],
          resposta: ['L184-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L184-G1-EX-10.jpg'],
          resposta: ['L184-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L184-G1-EX-11.jpg'],
          resposta: ['L184-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L184-G1-EX-12.jpg'],
          resposta: ['L184-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L184-G1-EX-13.jpg'],
          resposta: ['L184-G1-RES-13.jpg']
        }
      ]
    }
  },
  L185: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L185-G1-EX-1.jpg'],
          resposta: ['L185-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L185-G1-EX-2.jpg'],
          resposta: ['L185-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L185-G1-EX-3.jpg'],
          resposta: ['L185-G1-RES-3.jpg', 'L185-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L185-G1-EX-4.jpg'],
          resposta: ['L185-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L185-G1-EX-5.jpg'],
          resposta: ['L185-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L185-G1-EX-6.jpg'],
          resposta: ['L185-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L185-G1-EX-7.jpg'],
          resposta: ['L185-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L185-G1-EX-8.jpg'],
          resposta: ['L185-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L185-G1-EX-9.jpg'],
          resposta: ['L185-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L185-G1-EX-10.jpg'],
          resposta: ['L185-G1-RES-10.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L185-G2-EX-1.jpg'],
          resposta: ['L185-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L185-G2-EX-2.jpg'],
          resposta: ['L185-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L185-G2-EX-3.jpg'],
          resposta: ['L185-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L185-G2-EX-4.jpg'],
          resposta: ['L185-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L185-G2-EX-5.jpg'],
          resposta: ['L185-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L185-G2-EX-6.jpg'],
          resposta: ['L185-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L185-G2-EX-7.jpg'],
          resposta: ['L185-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L185-G2-EX-8.jpg'],
          resposta: ['L185-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L185-G2-EX-9.jpg'],
          resposta: ['L185-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L185-G2-EX-10.jpg'],
          resposta: ['L185-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L185-G2-EX-11.jpg'],
          resposta: ['L185-G2-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L185-G2-EX-12.jpg'],
          resposta: ['L185-G2-RES-12.jpg']
        }
      ]
    }
  },
  L186: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L186-G1-EX-1.jpg'],
          resposta: ['L186-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L186-G1-EX-2.jpg'],
          resposta: ['L186-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L186-G1-EX-3.jpg'],
          resposta: ['L186-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L186-G1-EX-4.jpg'],
          resposta: ['L186-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L186-G1-EX-5.jpg'],
          resposta: ['L186-G1-RES-5.jpg', 'L186-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L186-G1-EX-6.jpg'],
          resposta: ['L186-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L186-G1-EX-7.jpg'],
          resposta: ['L186-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L186-G1-EX-8.jpg'],
          resposta: ['L186-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L186-G1-EX-9.jpg'],
          resposta: ['L186-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L186-G1-EX-10.jpg'],
          resposta: ['L186-G1-RES-10.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L186-G2-EX-1.jpg'],
          resposta: ['L186-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L186-G2-EX-2.jpg'],
          resposta: ['L186-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L186-G2-EX-3.jpg'],
          resposta: ['L186-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L186-G2-EX-4.jpg'],
          resposta: ['L186-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L186-G2-EX-5.jpg'],
          resposta: ['L186-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L186-G2-EX-6.jpg'],
          resposta: ['L186-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L186-G2-EX-7.jpg'],
          resposta: ['L186-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L186-G2-EX-8.jpg'],
          resposta: ['L186-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L186-G2-EX-9.jpg'],
          resposta: ['L186-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L186-G2-EX-10.jpg'],
          resposta: ['L186-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L186-G2-EX-11.jpg'],
          resposta: ['L186-G2-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L186-G2-EX-12.jpg'],
          resposta: ['L186-G2-RES-12.jpg']
        }
      ]
    }
  },
  L187: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L187-G1-EX-1.jpg'],
          resposta: ['L187-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L187-G1-EX-2.jpg'],
          resposta: ['L187-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L187-G1-EX-3.jpg'],
          resposta: ['L187-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L187-G1-EX-4.jpg'],
          resposta: ['L187-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L187-G1-EX-5.jpg'],
          resposta: ['L187-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L187-G1-EX-6.jpg'],
          resposta: ['L187-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L187-G1-EX-7.jpg'],
          resposta: ['L187-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L187-G1-EX-8.jpg'],
          resposta: ['L187-G1-RES-8.jpg']
        }
      ]
    }
  },
  L188: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L188-G1-EX-1.jpg'],
          resposta: ['L188-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L188-G1-EX-2.jpg'],
          resposta: ['L188-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L188-G1-EX-3.jpg'],
          resposta: ['L188-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L188-G1-EX-4.jpg'],
          resposta: ['L188-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L188-G1-EX-5.jpg'],
          resposta: ['L188-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L188-G1-EX-6.jpg'],
          resposta: ['L188-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L188-G1-EX-7.jpg'],
          resposta: ['L188-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L188-G1-EX-8.jpg'],
          resposta: ['L188-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L188-G1-EX-9.jpg'],
          resposta: ['L188-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L188-G1-EX-10.jpg'],
          resposta: ['L188-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L188-G1-EX-11.jpg'],
          resposta: ['L188-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L188-G1-EX-12.jpg'],
          resposta: ['L188-G1-RES-12.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L188-G2-EX-1.jpg'],
          resposta: ['L188-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L188-G2-EX-2.jpg'],
          resposta: ['L188-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L188-G2-EX-3.jpg'],
          resposta: ['L188-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L188-G2-EX-4.jpg'],
          resposta: ['L188-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L188-G2-EX-5.jpg'],
          resposta: ['L188-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L188-G2-EX-6.jpg'],
          resposta: ['L188-G2-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L188-G2-EX-7.jpg'],
          resposta: ['L188-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L188-G2-EX-8.jpg'],
          resposta: ['L188-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L188-G2-EX-9.jpg'],
          resposta: ['L188-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L188-G2-EX-10.jpg'],
          resposta: ['L188-G2-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L188-G2-EX-11.jpg'],
          resposta: ['L188-G2-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L188-G2-EX-12.jpg'],
          resposta: ['L188-G2-RES-12.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L188-G3-EX-1.jpg'],
          resposta: ['L188-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L188-G3-EX-2.jpg'],
          resposta: ['L188-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L188-G3-EX-3.jpg'],
          resposta: ['L188-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L188-G3-EX-4.jpg'],
          resposta: ['L188-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L188-G3-EX-5.jpg'],
          resposta: ['L188-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L188-G3-EX-6.jpg'],
          resposta: ['L188-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L188-G3-EX-7.jpg'],
          resposta: ['L188-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L188-G3-EX-8.jpg'],
          resposta: ['L188-G3-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L188-G3-EX-9.jpg'],
          resposta: ['L188-G3-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L188-G3-EX-10.jpg'],
          resposta: ['L188-G3-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L188-G3-EX-11.jpg'],
          resposta: ['L188-G3-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L188-G3-EX-12.jpg'],
          resposta: ['L188-G3-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L188-G3-EX-13.jpg'],
          resposta: ['L188-G3-RES-13.jpg']
        }
      ]
    }
  },
  L189: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L189-G1-EX-1.jpg'],
          resposta: ['L189-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L189-G1-EX-2.jpg'],
          resposta: ['L189-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L189-G1-EX-3.jpg'],
          resposta: ['L189-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L189-G1-EX-4.jpg', 'L189-G1-EX-4-parte2.jpg'],
          resposta: ['L189-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L189-G1-EX-5.jpg'],
          resposta: ['L189-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L189-G1-EX-6.jpg'],
          resposta: ['L189-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L189-G1-EX-7.jpg'],
          resposta: ['L189-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L189-G1-EX-8.jpg'],
          resposta: ['L189-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L189-G1-EX-9.jpg', 'L189-G1-EX-9-parte2.jpg'],
          resposta: ['L189-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L189-G1-EX-10.jpg'],
          resposta: ['L189-G1-RES-10.jpg']
        }
      ]
    }
  },
  L190: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L190-G1-EX-1.jpg'],
          resposta: ['L190-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L190-G1-EX-2.jpg'],
          resposta: ['L190-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L190-G1-EX-3.jpg'],
          resposta: ['L190-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L190-G1-EX-4.jpg'],
          resposta: ['L190-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L190-G1-EX-5.jpg'],
          resposta: ['L190-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L190-G1-EX-6.jpg'],
          resposta: ['L190-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L190-G1-EX-7.jpg'],
          resposta: ['L190-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L190-G1-EX-8.jpg'],
          resposta: ['L190-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L190-G1-EX-9.jpg'],
          resposta: ['L190-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L190-G1-EX-10.jpg'],
          resposta: ['L190-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L190-G1-EX-11.jpg'],
          resposta: ['L190-G1-RES-11.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L190-G2-EX-1.jpg'],
          resposta: [
            'L190-G2-RES-1.jpg',
            'L190-G2-RES-1-parte2.jpg',
            'L190-G2-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L190-G2-EX-2.jpg'],
          resposta: ['L190-G2-RES-2.jpg', 'L190-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L190-G2-EX-3.jpg'],
          resposta: ['L190-G2-RES-3.jpg']
        }
      ]
    }
  },
  L191: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L191-G1-EX-1.jpg'],
          resposta: ['L191-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L191-G1-EX-2.jpg'],
          resposta: ['L191-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L191-G1-EX-3.jpg'],
          resposta: ['L191-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L191-G1-EX-4.jpg'],
          resposta: ['L191-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L191-G1-EX-5.jpg'],
          resposta: ['L191-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L191-G1-EX-6.jpg'],
          resposta: ['L191-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L191-G1-EX-7.jpg'],
          resposta: ['L191-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L191-G1-EX-8.jpg'],
          resposta: ['L191-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L191-G1-EX-9.jpg'],
          resposta: ['L191-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L191-G1-EX-10.jpg'],
          resposta: ['L191-G1-RES-10.jpg']
        }
      ]
    }
  },
  L192: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L192-G1-EX-1.jpg'],
          resposta: ['L192-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L192-G1-EX-2.jpg'],
          resposta: ['L192-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L192-G1-EX-3.jpg'],
          resposta: ['L192-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L192-G1-EX-4.jpg'],
          resposta: ['L192-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L192-G1-EX-5.jpg'],
          resposta: ['L192-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L192-G1-EX-6.jpg'],
          resposta: ['L192-G1-RES-6.jpg']
        }
      ]
    }
  },
  L193: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L193-G1-EX-1.jpg'],
          resposta: ['L193-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L193-G1-EX-2.jpg'],
          resposta: ['L193-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L193-G1-EX-3.jpg'],
          resposta: ['L193-G1-RES-3.jpg', 'L193-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L193-G1-EX-4.jpg'],
          resposta: ['L193-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L193-G1-EX-5.jpg'],
          resposta: ['L193-G1-RES-5.jpg', 'L193-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L193-G1-EX-6.jpg'],
          resposta: ['L193-G1-RES-6.jpg', 'L193-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L193-G1-EX-7.jpg'],
          resposta: ['L193-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L193-G1-EX-8.jpg'],
          resposta: ['L193-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L193-G1-EX-9.jpg'],
          resposta: ['L193-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L193-G1-EX-10.jpg'],
          resposta: ['L193-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L193-G1-EX-11.jpg'],
          resposta: ['L193-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L193-G1-EX-12.jpg'],
          resposta: ['L193-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L193-G1-EX-13.jpg'],
          resposta: ['L193-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L193-G1-EX-14.jpg'],
          resposta: ['L193-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L193-G1-EX-15.jpg'],
          resposta: ['L193-G1-RES-15.jpg']
        },
        {
          ex: '16',
          enunciado: ['L193-G1-EX-16.jpg'],
          resposta: ['L193-G1-RES-16.jpg']
        },
        {
          ex: '17',
          enunciado: ['L193-G1-EX-17.jpg'],
          resposta: ['L193-G1-RES-17.jpg', 'L193-G1-RES-17-parte2.jpg']
        },
        {
          ex: '18',
          enunciado: ['L193-G1-EX-18.jpg'],
          resposta: ['L193-G1-RES-18.jpg']
        },
        {
          ex: '19',
          enunciado: ['L193-G1-EX-19.jpg'],
          resposta: ['L193-G1-RES-19.jpg']
        }
      ]
    }
  },
  L194: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L194-G1-EX-1.jpg'],
          resposta: ['L194-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L194-G1-EX-2.jpg'],
          resposta: ['L194-G1-RES-2.jpg', 'L194-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L194-G1-EX-3.jpg'],
          resposta: ['L194-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L194-G1-EX-4.jpg'],
          resposta: ['L194-G1-RES-4.jpg', 'L194-G1-RES-4-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L194-G2-EX-1.jpg'],
          resposta: ['L194-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L194-G2-EX-2.jpg'],
          resposta: ['L194-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L194-G2-EX-3.jpg'],
          resposta: ['L194-G2-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L194-G2-EX-4.jpg'],
          resposta: ['L194-G2-RES-4.jpg', 'L194-G2-RES-4-parte2.jpg']
        }
      ]
    }
  },
  L195: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L195-G1-EX-1.jpg'],
          resposta: ['L195-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L195-G1-EX-2.jpg'],
          resposta: ['L195-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L195-G1-EX-3.jpg'],
          resposta: ['L195-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L195-G1-EX-4.jpg'],
          resposta: ['L195-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L195-G1-EX-5.jpg'],
          resposta: ['L195-G1-RES-5.jpg', 'L195-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L195-G1-EX-6.jpg'],
          resposta: ['L195-G1-RES-6.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L195-G2-EX-1.jpg'],
          resposta: ['L195-G2-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L195-G2-EX-2.jpg'],
          resposta: ['L195-G2-RES-2.jpg', 'L195-G2-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L195-G2-EX-3.jpg'],
          resposta: [
            'L195-G2-RES-3.jpg',
            'L195-G2-RES-3-parte2.jpg',
            'L195-G2-RES-3-parte3.jpg',
            'L195-G2-RES-3-parte4.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L195-G2-EX-4.jpg'],
          resposta: ['L195-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L195-G2-EX-5.jpg', 'L195-G2-EX-5-parte2.jpg'],
          resposta: [
            'L195-G2-RES-5.jpg',
            'L195-G2-RES-5-parte2.jpg',
            'L195-G2-RES-5-parte3.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L195-G2-EX-6.jpg'],
          resposta: ['L195-G2-RES-6.jpg', 'L195-G2-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L195-G2-EX-7.jpg'],
          resposta: ['L195-G2-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L195-G2-EX-8.jpg'],
          resposta: ['L195-G2-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L195-G2-EX-9.jpg'],
          resposta: ['L195-G2-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L195-G2-EX-10.jpg'],
          resposta: ['L195-G2-RES-10.jpg']
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L195-G3-EX-1.jpg'],
          resposta: ['L195-G3-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L195-G3-EX-2.jpg'],
          resposta: ['L195-G3-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L195-G3-EX-3.jpg'],
          resposta: ['L195-G3-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L195-G3-EX-4.jpg'],
          resposta: ['L195-G3-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L195-G3-EX-5.jpg'],
          resposta: ['L195-G3-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L195-G3-EX-6.jpg'],
          resposta: ['L195-G3-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L195-G3-EX-7.jpg'],
          resposta: ['L195-G3-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L195-G3-EX-8.jpg'],
          resposta: ['L195-G3-RES-8.jpg']
        }
      ]
    }
  },
  L201: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L201-G1-EX-1.jpg'],
          resposta: ['L201-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L201-G1-EX-2.jpg'],
          resposta: ['L201-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L201-G1-EX-3.jpg'],
          resposta: ['L201-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L201-G1-EX-4.jpg'],
          resposta: ['L201-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L201-G1-EX-5.jpg'],
          resposta: ['L201-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L201-G1-EX-6.jpg'],
          resposta: ['L201-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L201-G1-EX-7.jpg'],
          resposta: ['L201-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L201-G1-EX-8.jpg'],
          resposta: ['L201-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L201-G1-EX-9.jpg'],
          resposta: ['L201-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L201-G1-EX-10.jpg'],
          resposta: ['L201-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L201-G1-EX-11.jpg'],
          resposta: ['L201-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L201-G1-EX-12.jpg'],
          resposta: ['L201-G1-RES-12.jpg']
        }
      ]
    }
  },
  L202: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L202-G1-EX-1.jpg'],
          resposta: ['L202-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L202-G1-EX-2.jpg'],
          resposta: ['L202-G1-RES-2.jpg']
        }
      ]
    }
  },
  L203: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L203-G1-EX-1.jpg'],
          resposta: ['L203-G1-RES-1.jpg', 'L203-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L203-G1-EX-2.jpg'],
          resposta: ['L203-G1-RES-2.jpg', 'L203-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L203-G1-EX-3.jpg'],
          resposta: ['L203-G1-RES-3.jpg', 'L203-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L203-G1-EX-4.jpg'],
          resposta: [
            'L203-G1-RES-4.jpg',
            'L203-G1-RES-4-parte2.jpg',
            'L203-G1-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L203-G1-EX-5.jpg'],
          resposta: ['L203-G1-RES-5.jpg', 'L203-G1-RES-5-parte2.jpg']
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L203-G2-EX-1.jpg'],
          resposta: ['L203-G2-RES-1.jpg', 'L203-G2-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L203-G2-EX-2.jpg'],
          resposta: ['L203-G2-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L203-G2-EX-3.jpg'],
          resposta: [
            'L203-G2-RES-3.jpg',
            'L203-G2-RES-3-parte2.jpg',
            'L203-G2-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L203-G2-EX-4.jpg'],
          resposta: ['L203-G2-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L203-G2-EX-5.jpg'],
          resposta: ['L203-G2-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L203-G2-EX-6.jpg'],
          resposta: ['L203-G2-RES-6.jpg']
        }
      ]
    }
  },
  L204: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L204-G1-EX-1.jpg'],
          resposta: ['L204-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L204-G1-EX-2.jpg'],
          resposta: ['L204-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L204-G1-EX-3.jpg'],
          resposta: ['L204-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L204-G1-EX-4.jpg'],
          resposta: ['L204-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L204-G1-EX-5.jpg', 'L204-G1-EX-5-parte2.jpg'],
          resposta: ['L204-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L204-G1-EX-6.jpg'],
          resposta: ['L204-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L204-G1-EX-7.jpg'],
          resposta: ['L204-G1-RES-7.jpg', 'L204-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L204-G1-EX-8.jpg'],
          resposta: ['L204-G1-RES-8.jpg']
        }
      ]
    }
  },
  L501: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L501-G1-EX-1.jpg'],
          resposta: [
            'L501-G1-RES-1.jpg',
            'L501-G1-RES-1-parte2.jpg',
            'L501-G1-RES-1-parte3.jpg',
            'L501-G1-RES-1-parte4.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L501-G1-EX-2.jpg'],
          resposta: ['L501-G1-RES-2.jpg', 'L501-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L501-G1-EX-3.jpg'],
          resposta: [
            'L501-G1-RES-3.jpg',
            'L501-G1-RES-3-parte2.jpg',
            'L501-G1-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L501-G1-EX-4.jpg'],
          resposta: ['L501-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L501-G1-EX-5.jpg'],
          resposta: ['L501-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L501-G1-EX-6.jpg'],
          resposta: [
            'L501-G1-RES-6.jpg',
            'L501-G1-RES-6-parte2.jpg',
            'L501-G1-RES-6-parte3.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L501-G1-EX-7.jpg'],
          resposta: ['L501-G1-RES-7.jpg', 'L501-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L501-G1-EX-8.jpg'],
          resposta: ['L501-G1-RES-8.jpg', 'L501-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L501-G1-EX-9.jpg'],
          resposta: ['L501-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L501-G1-EX-10.jpg'],
          resposta: [
            'L501-G1-RES-10.jpg',
            'L501-G1-RES-10-parte2.jpg',
            'L501-G1-RES-10-parte3.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L501-G1-EX-11.jpg'],
          resposta: ['L501-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L501-G1-EX-12.jpg'],
          resposta: ['L501-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L501-G1-EX-13.jpg'],
          resposta: ['L501-G1-RES-13.jpg', 'L501-G1-RES-13-parte2.jpg']
        },
        {
          ex: '14',
          enunciado: ['L501-G1-EX-14.jpg'],
          resposta: ['L501-G1-RES-14.jpg', 'L501-G1-RES-14-parte2.jpg']
        },
        {
          ex: '15',
          enunciado: ['L501-G1-EX-15.jpg'],
          resposta: ['L501-G1-RES-15.jpg']
        },
        {
          ex: '16',
          enunciado: ['L501-G1-EX-16.jpg'],
          resposta: ['L501-G1-RES-16.jpg']
        },
        {
          ex: '17',
          enunciado: ['L501-G1-EX-17.jpg'],
          resposta: ['L501-G1-RES-17.jpg']
        }
      ]
    }
  },
  L502: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L502-G1-EX-1.jpg'],
          resposta: ['L502-G1-RES-1.jpg', 'L502-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L502-G1-EX-2.jpg'],
          resposta: ['L502-G1-RES-2.jpg', 'L502-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L502-G1-EX-3.jpg'],
          resposta: ['L502-G1-RES-3.jpg', 'L502-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L502-G1-EX-4.jpg'],
          resposta: ['L502-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L502-G1-EX-5.jpg'],
          resposta: ['L502-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L502-G1-EX-6.jpg'],
          resposta: [
            'L502-G1-RES-6.jpg',
            'L502-G1-RES-6-parte2.jpg',
            'L502-G1-RES-6-parte3.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L502-G1-EX-7.jpg'],
          resposta: ['L502-G1-RES-7.jpg', 'L502-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L502-G1-EX-8.jpg'],
          resposta: ['L502-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L502-G1-EX-9.jpg'],
          resposta: ['L502-G1-RES-9.jpg', 'L502-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L502-G1-EX-10.jpg'],
          resposta: ['L502-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L502-G1-EX-11.jpg'],
          resposta: [
            'L502-G1-RES-11.jpg',
            'L502-G1-RES-11-parte2.jpg',
            'L502-G1-RES-11-parte3.jpg',
            'L502-G1-RES-11-parte4.jpg'
          ]
        },
        {
          ex: '12',
          enunciado: ['L502-G1-EX-12.jpg'],
          resposta: ['L502-G1-RES-12.jpg', 'L502-G1-RES-12-parte2.jpg']
        },
        {
          ex: '13',
          enunciado: ['L502-G1-EX-13.jpg'],
          resposta: ['L502-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L502-G1-EX-14.jpg'],
          resposta: ['L502-G1-RES-14.jpg', 'L502-G1-RES-14-parte2.jpg']
        }
      ]
    }
  },
  L503: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L503-G1-EX-1.jpg'],
          resposta: ['L503-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L503-G1-EX-2.jpg'],
          resposta: ['L503-G1-RES-2.jpg', 'L503-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L503-G1-EX-3.jpg'],
          resposta: ['L503-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L503-G1-EX-4.jpg'],
          resposta: ['L503-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L503-G1-EX-5.jpg'],
          resposta: ['L503-G1-RES-5.jpg', 'L503-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L503-G1-EX-6.jpg'],
          resposta: [
            'L503-G1-RES-6.jpg',
            'L503-G1-RES-6-parte2.jpg',
            'L503-G1-RES-6-parte3.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L503-G1-EX-7.jpg'],
          resposta: ['L503-G1-RES-7.jpg', 'L503-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L503-G1-EX-8.jpg'],
          resposta: ['L503-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L503-G1-EX-9.jpg'],
          resposta: ['L503-G1-RES-9.jpg', 'L503-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L503-G1-EX-10.jpg'],
          resposta: ['L503-G1-RES-10.jpg']
        }
      ]
    }
  },
  L504: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L504-G1-EX-1.jpg'],
          resposta: ['L504-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L504-G1-EX-2.jpg'],
          resposta: ['L504-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L504-G1-EX-3.jpg'],
          resposta: ['L504-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L504-G1-EX-4.jpg'],
          resposta: ['L504-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L504-G1-EX-5.jpg'],
          resposta: ['L504-G1-RES-5.jpg', 'L504-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L504-G1-EX-6.jpg'],
          resposta: ['L504-G1-RES-6.jpg', 'L504-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L504-G1-EX-7.jpg'],
          resposta: ['L504-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L504-G1-EX-8.jpg'],
          resposta: ['L504-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L504-G1-EX-9.jpg'],
          resposta: ['L504-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L504-G1-EX-10.jpg'],
          resposta: [
            'L504-G1-RES-10.jpg',
            'L504-G1-RES-10-parte2.jpg',
            'L504-G1-RES-10-parte3.jpg',
            'L504-G1-RES-10-parte4.jpg',
            'L504-G1-RES-10-parte5.jpg',
            'L504-G1-RES-10-parte6.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L504-G1-EX-11.jpg'],
          resposta: [
            'L504-G1-RES-11.jpg',
            'L504-G1-RES-11-parte2.jpg',
            'L504-G1-RES-11-parte3.jpg',
            'L504-G1-RES-11-parte4.jpg'
          ]
        },
        {
          ex: '12',
          enunciado: ['L504-G1-EX-12.jpg'],
          resposta: [
            'L504-G1-RES-12.jpg',
            'L504-G1-RES-12-parte2.jpg',
            'L504-G1-RES-12-parte3.jpg'
          ]
        },
        {
          ex: '13',
          enunciado: ['L504-G1-EX-13.jpg'],
          resposta: ['L504-G1-RES-13.jpg', 'L504-G1-RES-13-parte2.jpg']
        },
        {
          ex: '14',
          enunciado: ['L504-G1-EX-14.jpg'],
          resposta: ['L504-G1-RES-14.jpg', 'L504-G1-RES-14-parte2.jpg']
        },
        {
          ex: '15',
          enunciado: ['L504-G1-EX-15.jpg'],
          resposta: ['L504-G1-RES-15.jpg']
        },
        {
          ex: '16',
          enunciado: ['L504-G1-EX-16.jpg'],
          resposta: ['L504-G1-RES-16.jpg', 'L504-G1-RES-16-parte2.jpg']
        },
        {
          ex: '17',
          enunciado: ['L504-G1-EX-17.jpg'],
          resposta: ['L504-G1-RES-17.jpg', 'L504-G1-RES-17-parte2.jpg']
        },
        {
          ex: '18',
          enunciado: ['L504-G1-EX-18.jpg'],
          resposta: ['L504-G1-RES-18.jpg', 'L504-G1-RES-18-parte2.jpg']
        },
        {
          ex: '19',
          enunciado: ['L504-G1-EX-19.jpg'],
          resposta: ['L504-G1-RES-19.jpg']
        },
        {
          ex: '20',
          enunciado: ['L504-G1-EX-20.jpg'],
          resposta: ['L504-G1-RES-20.jpg', 'L504-G1-RES-20-parte2.jpg']
        },
        {
          ex: '21',
          enunciado: ['L504-G1-EX-21.jpg'],
          resposta: ['L504-G1-RES-21.jpg', 'L504-G1-RES-21-parte2.jpg']
        },
        {
          ex: '22',
          enunciado: ['L504-G1-EX-22.jpg'],
          resposta: [
            'L504-G1-RES-22.jpg',
            'L504-G1-RES-22-parte2.jpg',
            'L504-G1-RES-22-parte3.jpg'
          ]
        }
      ]
    }
  },
  L505: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L505-G1-EX-1.jpg'],
          resposta: ['L505-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L505-G1-EX-2.jpg'],
          resposta: ['L505-G1-RES-2.jpg', 'L505-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L505-G1-EX-3.jpg'],
          resposta: ['L505-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L505-G1-EX-4.jpg'],
          resposta: ['L505-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L505-G1-EX-5.jpg'],
          resposta: ['L505-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L505-G1-EX-6.jpg'],
          resposta: ['L505-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L505-G1-EX-7.jpg'],
          resposta: ['L505-G1-RES-7.jpg', 'L505-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L505-G1-EX-8.jpg'],
          resposta: ['L505-G1-RES-8.jpg', 'L505-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L505-G1-EX-9.jpg'],
          resposta: ['L505-G1-RES-9.jpg', 'L505-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L505-G1-EX-10.jpg'],
          resposta: ['L505-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L505-G1-EX-11.jpg'],
          resposta: ['L505-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L505-G1-EX-12.jpg'],
          resposta: ['L505-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L505-G1-EX-13.jpg'],
          resposta: ['L505-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L505-G1-EX-14.jpg'],
          resposta: ['L505-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L505-G1-EX-15.jpg'],
          resposta: ['L505-G1-RES-15.jpg', 'L505-G1-RES-15-parte2.jpg']
        },
        {
          ex: '16',
          enunciado: ['L505-G1-EX-16.jpg'],
          resposta: ['L505-G1-RES-16.jpg', 'L505-G1-RES-16-parte2.jpg']
        },
        {
          ex: '17',
          enunciado: ['L505-G1-EX-17.jpg'],
          resposta: ['L505-G1-RES-17.jpg']
        },
        {
          ex: '18',
          enunciado: ['L505-G1-EX-18.jpg'],
          resposta: ['L505-G1-RES-18.jpg', 'L505-G1-RES-18-parte2.jpg']
        },
        {
          ex: '19',
          enunciado: ['L505-G1-EX-19.jpg'],
          resposta: ['L505-G1-RES-19.jpg']
        },
        {
          ex: '20',
          enunciado: ['L505-G1-EX-20.jpg'],
          resposta: [
            'L505-G1-RES-20.jpg',
            'L505-G1-RES-20-parte2.jpg',
            'L505-G1-RES-20-parte3.jpg'
          ]
        },
        {
          ex: '21',
          enunciado: ['L505-G1-EX-21.jpg'],
          resposta: ['L505-G1-RES-21.jpg', 'L505-G1-RES-21-parte2.jpg']
        },
        {
          ex: '22',
          enunciado: ['L505-G1-EX-22.jpg'],
          resposta: ['L505-G1-RES-22.jpg', 'L505-G1-RES-22-parte2.jpg']
        },
        {
          ex: '23',
          enunciado: ['L505-G1-EX-23.jpg', 'L505-G1-EX-23-parte2.jpg'],
          resposta: [
            'L505-G1-RES-23.jpg',
            'L505-G1-RES-23-parte2.jpg',
            'L505-G1-RES-23-parte3.jpg',
            'L505-G1-RES-23-parte4.jpg',
            'L505-G1-RES-23-parte5.jpg',
            'L505-G1-RES-23-parte6.jpg',
            'L505-G1-RES-23-parte7.jpg',
            'L505-G1-RES-23-parte8.jpg',
            'L505-G1-RES-23-parte9.jpg'
          ]
        },
        {
          ex: '24',
          enunciado: ['L505-G1-EX-24.jpg', 'L505-G1-EX-24-parte2.jpg'],
          resposta: ['L505-G1-RES-24.jpg']
        }
      ]
    }
  },
  L506: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L506-G1-EX-1.jpg'],
          resposta: ['L506-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L506-G1-EX-2.jpg'],
          resposta: ['L506-G1-RES-2.jpg', 'L506-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L506-G1-EX-3.jpg'],
          resposta: [
            'L506-G1-RES-3.jpg',
            'L506-G1-RES-3-parte2.jpg',
            'L506-G1-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L506-G1-EX-4.jpg'],
          resposta: ['L506-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L506-G1-EX-5.jpg'],
          resposta: ['L506-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L506-G1-EX-6.jpg'],
          resposta: ['L506-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L506-G1-EX-7.jpg'],
          resposta: ['L506-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L506-G1-EX-8.jpg'],
          resposta: ['L506-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L506-G1-EX-9.jpg'],
          resposta: ['L506-G1-RES-9.jpg', 'L506-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L506-G1-EX-10.jpg'],
          resposta: ['L506-G1-RES-10.jpg', 'L506-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: ['L506-G1-EX-11.jpg'],
          resposta: ['L506-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L506-G1-EX-12.jpg'],
          resposta: ['L506-G1-RES-12.jpg', 'L506-G1-RES-12-parte2.jpg']
        },
        {
          ex: '13',
          enunciado: ['L506-G1-EX-13.jpg'],
          resposta: ['L506-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L506-G1-EX-14.jpg'],
          resposta: ['L506-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L506-G1-EX-15.jpg'],
          resposta: ['L506-G1-RES-15.jpg', 'L506-G1-RES-15-parte2.jpg']
        },
        {
          ex: '16',
          enunciado: ['L506-G1-EX-16.jpg'],
          resposta: [
            'L506-G1-RES-16.jpg',
            'L506-G1-RES-16-parte2.jpg',
            'L506-G1-RES-16-parte3.jpg'
          ]
        },
        {
          ex: '17',
          enunciado: ['L506-G1-EX-17.jpg'],
          resposta: ['L506-G1-RES-17.jpg', 'L506-G1-RES-17-parte2.jpg']
        },
        {
          ex: '18',
          enunciado: ['L506-G1-EX-18.jpg'],
          resposta: ['L506-G1-RES-18.jpg']
        },
        {
          ex: '19',
          enunciado: ['L506-G1-EX-19.jpg', 'L506-G1-EX-19-parte2.jpg'],
          resposta: ['L506-G1-RES-19.jpg', 'L506-G1-RES-19-parte2.jpg']
        }
      ]
    }
  },
  L507: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L507-G1-EX-1.jpg'],
          resposta: ['L507-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L507-G1-EX-2.jpg'],
          resposta: ['L507-G1-RES-2.jpg', 'L507-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L507-G1-EX-3.jpg'],
          resposta: ['L507-G1-RES-3.jpg', 'L507-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L507-G1-EX-4.jpg'],
          resposta: ['L507-G1-RES-4.jpg', 'L507-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L507-G1-EX-5.jpg'],
          resposta: ['L507-G1-RES-5.jpg', 'L507-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L507-G1-EX-6.jpg'],
          resposta: ['L507-G1-RES-6.jpg', 'L507-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L507-G1-EX-7.jpg'],
          resposta: ['L507-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L507-G1-EX-8.jpg'],
          resposta: ['L507-G1-RES-8.jpg', 'L507-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L507-G1-EX-9.jpg'],
          resposta: ['L507-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L507-G1-EX-10.jpg'],
          resposta: [
            'L507-G1-RES-10.jpg',
            'L507-G1-RES-10-parte2.jpg',
            'L507-G1-RES-10-parte3.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L507-G1-EX-11.jpg'],
          resposta: ['L507-G1-RES-11.jpg', 'L507-G1-RES-11-parte2.jpg']
        },
        {
          ex: '12',
          enunciado: ['L507-G1-EX-12.jpg'],
          resposta: ['L507-G1-RES-12.jpg', 'L507-G1-RES-12-parte2.jpg']
        },
        {
          ex: '13',
          enunciado: ['L507-G1-EX-13.jpg'],
          resposta: [
            'L507-G1-RES-13.jpg',
            'L507-G1-RES-13-parte2.jpg',
            'L507-G1-RES-13-parte3.jpg'
          ]
        },
        {
          ex: '14',
          enunciado: ['L507-G1-EX-14.jpg'],
          resposta: ['L507-G1-RES-14.jpg', 'L507-G1-RES-14-parte2.jpg']
        }
      ]
    }
  },
  L508: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L508-G1-EX-1.jpg'],
          resposta: ['L508-G1-RES-1.jpg', 'L508-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L508-G1-EX-2.jpg'],
          resposta: ['L508-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L508-G1-EX-3.jpg'],
          resposta: [
            'L508-G1-RES-3.jpg',
            'L508-G1-RES-3-parte2.jpg',
            'L508-G1-RES-3-parte3.jpg',
            'L508-G1-RES-3-parte4.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L508-G1-EX-4.jpg'],
          resposta: [
            'L508-G1-RES-4.jpg',
            'L508-G1-RES-4-parte2.jpg',
            'L508-G1-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L508-G1-EX-5.jpg'],
          resposta: [
            'L508-G1-RES-5.jpg',
            'L508-G1-RES-5-parte2.jpg',
            'L508-G1-RES-5-parte3.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L508-G1-EX-6.jpg'],
          resposta: ['L508-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L508-G1-EX-7.jpg'],
          resposta: ['L508-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L508-G1-EX-8.jpg'],
          resposta: ['L508-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L508-G1-EX-9.jpg'],
          resposta: ['L508-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L508-G1-EX-10.jpg'],
          resposta: [
            'L508-G1-RES-10.jpg',
            'L508-G1-RES-10-parte2.jpg',
            'L508-G1-RES-10-parte3.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L508-G1-EX-11.jpg'],
          resposta: ['L508-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L508-G1-EX-12.jpg'],
          resposta: [
            'L508-G1-RES-12.jpg',
            'L508-G1-RES-12-parte2.jpg',
            'L508-G1-RES-12-parte3.jpg'
          ]
        },
        {
          ex: '13',
          enunciado: ['L508-G1-EX-13.jpg'],
          resposta: ['L508-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L508-G1-EX-14.jpg'],
          resposta: ['L508-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L508-G1-EX-15.jpg'],
          resposta: ['L508-G1-RES-15.jpg', 'L508-G1-RES-15-parte2.jpg']
        },
        {
          ex: '16',
          enunciado: ['L508-G1-EX-16.jpg'],
          resposta: ['L508-G1-RES-16.jpg', 'L508-G1-RES-16-parte2.jpg']
        },
        {
          ex: '17',
          enunciado: ['L508-G1-EX-17.jpg'],
          resposta: ['L508-G1-RES-17.jpg']
        },
        {
          ex: '18',
          enunciado: ['L508-G1-EX-18.jpg'],
          resposta: ['L508-G1-RES-18.jpg', 'L508-G1-RES-18-parte2.jpg']
        },
        {
          ex: '19',
          enunciado: ['L508-G1-EX-19.jpg'],
          resposta: [
            'L508-G1-RES-19.jpg',
            'L508-G1-RES-19-parte2.jpg',
            'L508-G1-RES-19-parte3.jpg'
          ]
        },
        {
          ex: '20',
          enunciado: ['L508-G1-EX-20.jpg'],
          resposta: [
            'L508-G1-RES-20.jpg',
            'L508-G1-RES-20-parte2.jpg',
            'L508-G1-RES-20-parte3.jpg'
          ]
        },
        {
          ex: '21',
          enunciado: ['L508-G1-EX-21.jpg'],
          resposta: [
            'L508-G1-RES-21.jpg',
            'L508-G1-RES-21-parte2.jpg',
            'L508-G1-RES-21-parte3.jpg'
          ]
        },
        {
          ex: '22',
          enunciado: ['L508-G1-EX-22.jpg'],
          resposta: [
            'L508-G1-RES-22.jpg',
            'L508-G1-RES-22-parte2.jpg',
            'L508-G1-RES-22-parte3.jpg'
          ]
        },
        {
          ex: '23',
          enunciado: ['L508-G1-EX-23.jpg'],
          resposta: ['L508-G1-RES-23.jpg', 'L508-G1-RES-23-parte2.jpg']
        },
        {
          ex: '24',
          enunciado: ['L508-G1-EX-24.jpg'],
          resposta: ['L508-G1-RES-24.jpg']
        }
      ]
    }
  },
  L509: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L509-G1-EX-1.jpg'],
          resposta: ['L509-G1-RES-1.jpg', 'L509-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L509-G1-EX-2.jpg'],
          resposta: [
            'L509-G1-RES-2.jpg',
            'L509-G1-RES-2-parte2.jpg',
            'L509-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L509-G1-EX-3.jpg'],
          resposta: ['L509-G1-RES-3.jpg', 'L509-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L509-G1-EX-4.jpg'],
          resposta: ['L509-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L509-G1-EX-5.jpg'],
          resposta: ['L509-G1-RES-5.jpg', 'L509-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L509-G1-EX-6.jpg'],
          resposta: ['L509-G1-RES-6.jpg', 'L509-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L509-G1-EX-7.jpg'],
          resposta: ['L509-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L509-G1-EX-8.jpg'],
          resposta: ['L509-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L509-G1-EX-9.jpg'],
          resposta: [
            'L509-G1-RES-9.jpg',
            'L509-G1-RES-9-parte2.jpg',
            'L509-G1-RES-9-parte3.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L509-G1-EX-10.jpg'],
          resposta: ['L509-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L509-G1-EX-11.jpg'],
          resposta: [
            'L509-G1-RES-11.jpg',
            'L509-G1-RES-11-parte2.jpg',
            'L509-G1-RES-11-parte3.jpg'
          ]
        },
        {
          ex: '12',
          enunciado: ['L509-G1-EX-12.jpg'],
          resposta: ['L509-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L509-G1-EX-13.jpg'],
          resposta: ['L509-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L509-G1-EX-14.jpg'],
          resposta: [
            'L509-G1-RES-14.jpg',
            'L509-G1-RES-14-parte2.jpg',
            'L509-G1-RES-14-parte3.jpg'
          ]
        },
        {
          ex: '15',
          enunciado: ['L509-G1-EX-15.jpg'],
          resposta: [
            'L509-G1-RES-15.jpg',
            'L509-G1-RES-15-parte2.jpg',
            'L509-G1-RES-15-parte3.jpg'
          ]
        }
      ]
    }
  },
  L510: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L510-G1-EX-1.jpg'],
          resposta: ['L510-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L510-G1-EX-2.jpg'],
          resposta: ['L510-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L510-G1-EX-3.jpg'],
          resposta: ['L510-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L510-G1-EX-4.jpg'],
          resposta: ['L510-G1-RES-4.jpg', 'L510-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L510-G1-EX-5.jpg'],
          resposta: ['L510-G1-RES-5.jpg', 'L510-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L510-G1-EX-6.jpg'],
          resposta: [
            'L510-G1-RES-6.jpg',
            'L510-G1-RES-6-parte2.jpg',
            'L510-G1-RES-6-parte3.jpg',
            'L510-G1-RES-6-parte4.jpg',
            'L510-G1-RES-6-parte5.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L510-G1-EX-7.jpg'],
          resposta: [
            'L510-G1-RES-7.jpg',
            'L510-G1-RES-7-parte2.jpg',
            'L510-G1-RES-7-parte3.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: ['L510-G1-EX-8.jpg'],
          resposta: ['L510-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L510-G1-EX-9.jpg'],
          resposta: [
            'L510-G1-RES-9.jpg',
            'L510-G1-RES-9-parte2.jpg',
            'L510-G1-RES-9-parte3.jpg',
            'L510-G1-RES-9-parte4.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L510-G1-EX-10.jpg'],
          resposta: [
            'L510-G1-RES-10.jpg',
            'L510-G1-RES-10-parte2.jpg',
            'L510-G1-RES-10-parte3.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L510-G1-EX-11.jpg', 'L510-G1-EX-11-parte2.jpg'],
          resposta: [
            'L510-G1-RES-11.jpg',
            'L510-G1-RES-11-parte2.jpg',
            'L510-G1-RES-11-parte3.jpg',
            'L510-G1-RES-11-parte4.jpg',
            'L510-G1-RES-11-parte5.jpg',
            'L510-G1-RES-11-parte6.jpg'
          ]
        }
      ]
    }
  },
  L511: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L511-G1-EX-1.jpg'],
          resposta: ['L511-G1-RES-1.jpg', 'L511-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L511-G1-EX-2.jpg'],
          resposta: ['L511-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L511-G1-EX-3.jpg'],
          resposta: [
            'L511-G1-RES-3.jpg',
            'L511-G1-RES-3-parte2.jpg',
            'L511-G1-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L511-G1-EX-4.jpg'],
          resposta: ['L511-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L511-G1-EX-5.jpg'],
          resposta: ['L511-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L511-G1-EX-6.jpg'],
          resposta: ['L511-G1-RES-6.jpg', 'L511-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L511-G1-EX-7.jpg'],
          resposta: ['L511-G1-RES-7.jpg', 'L511-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L511-G1-EX-8.jpg'],
          resposta: ['L511-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L511-G1-EX-9.jpg'],
          resposta: [
            'L511-G1-RES-9.jpg',
            'L511-G1-RES-9-parte2.jpg',
            'L511-G1-RES-9-parte3.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L511-G1-EX-10.jpg'],
          resposta: [
            'L511-G1-RES-10.jpg',
            'L511-G1-RES-10-parte2.jpg',
            'L511-G1-RES-10-parte3.jpg',
            'L511-G1-RES-10-parte4.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L511-G1-EX-11.jpg', 'L511-G1-EX-11-parte2.jpg'],
          resposta: ['L511-G1-RES-11.jpg', 'L511-G1-RES-11-parte2.jpg']
        },
        {
          ex: '12',
          enunciado: [
            'L511-G1-EX-12.jpg',
            'L511-G1-EX-12-parte2.jpg',
            'L511-G1-EX-12-parte3.jpg'
          ],
          resposta: [
            'L511-G1-RES-12.jpg',
            'L511-G1-RES-12-parte2.jpg',
            'L511-G1-RES-12-parte3.jpg',
            'L511-G1-RES-12-parte4.jpg'
          ]
        }
      ]
    }
  },
  L512: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L512-G1-EX-1.jpg'],
          resposta: ['L512-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L512-G1-EX-2.jpg'],
          resposta: ['L512-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L512-G1-EX-3.jpg'],
          resposta: ['L512-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L512-G1-EX-4.jpg', 'L512-G1-EX-4-parte2.jpg'],
          resposta: [
            'L512-G1-RES-4.jpg',
            'L512-G1-RES-4-parte2.jpg',
            'L512-G1-RES-4-parte3.jpg',
            'L512-G1-RES-4-parte4.jpg',
            'L512-G1-RES-4-parte5.jpg',
            'L512-G1-RES-4-parte6.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L512-G1-EX-5.jpg'],
          resposta: [
            'L512-G1-RES-5.jpg',
            'L512-G1-RES-5-parte2.jpg',
            'L512-G1-RES-5-parte3.jpg',
            'L512-G1-RES-5-parte4.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L512-G1-EX-6.jpg'],
          resposta: [
            'L512-G1-RES-6.jpg',
            'L512-G1-RES-6-parte2.jpg',
            'L512-G1-RES-6-parte3.jpg',
            'L512-G1-RES-6-parte4.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L512-G1-EX-7.jpg'],
          resposta: ['L512-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L512-G1-EX-8.jpg'],
          resposta: [
            'L512-G1-RES-8.jpg',
            'L512-G1-RES-8-parte2.jpg',
            'L512-G1-RES-8-parte3.jpg',
            'L512-G1-RES-8-parte4.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L512-G1-EX-9.jpg'],
          resposta: [
            'L512-G1-RES-9.jpg',
            'L512-G1-RES-9-parte2.jpg',
            'L512-G1-RES-9-parte3.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L512-G1-EX-10.jpg'],
          resposta: [
            'L512-G1-RES-10.jpg',
            'L512-G1-RES-10-parte2.jpg',
            'L512-G1-RES-10-parte3.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L512-G1-EX-11.jpg'],
          resposta: ['L512-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L512-G1-EX-12.jpg'],
          resposta: ['L512-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L512-G1-EX-13.jpg'],
          resposta: [
            'L512-G1-RES-13.jpg',
            'L512-G1-RES-13-parte2.jpg',
            'L512-G1-RES-13-parte3.jpg',
            'L512-G1-RES-13-parte4.jpg'
          ]
        },
        {
          ex: '14',
          enunciado: ['L512-G1-EX-14.jpg'],
          resposta: ['L512-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L512-G1-EX-15.jpg'],
          resposta: [
            'L512-G1-RES-15.jpg',
            'L512-G1-RES-15-parte2.jpg',
            'L512-G1-RES-15-parte3.jpg'
          ]
        }
      ]
    }
  },
  L513: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L513-G1-EX-1.jpg'],
          resposta: ['L513-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L513-G1-EX-2.jpg'],
          resposta: [
            'L513-G1-RES-2.jpg',
            'L513-G1-RES-2-parte2.jpg',
            'L513-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L513-G1-EX-3.jpg'],
          resposta: [
            'L513-G1-RES-3.jpg',
            'L513-G1-RES-3-parte2.jpg',
            'L513-G1-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L513-G1-EX-4.jpg'],
          resposta: ['L513-G1-RES-4.jpg', 'L513-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L513-G1-EX-5.jpg'],
          resposta: ['L513-G1-RES-5.jpg', 'L513-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L513-G1-EX-6.jpg'],
          resposta: ['L513-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L513-G1-EX-7.jpg'],
          resposta: ['L513-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L513-G1-EX-8.jpg'],
          resposta: ['L513-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L513-G1-EX-9.jpg'],
          resposta: ['L513-G1-RES-9.jpg', 'L513-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L513-G1-EX-10.jpg'],
          resposta: ['L513-G1-RES-10.jpg', 'L513-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: ['L513-G1-EX-11.jpg'],
          resposta: ['L513-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L513-G1-EX-12.jpg'],
          resposta: ['L513-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L513-G1-EX-13.jpg'],
          resposta: ['L513-G1-RES-13.jpg', 'L513-G1-RES-13-parte2.jpg']
        },
        {
          ex: '14',
          enunciado: ['L513-G1-EX-14.jpg'],
          resposta: ['L513-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L513-G1-EX-15.jpg'],
          resposta: [
            'L513-G1-RES-15.jpg',
            'L513-G1-RES-15-parte2.jpg',
            'L513-G1-RES-15-parte3.jpg',
            'L513-G1-RES-15-parte4.jpg',
            'L513-G1-RES-15-parte5.jpg',
            'L513-G1-RES-15-parte6.jpg',
            'L513-G1-RES-15-parte7.jpg',
            'L513-G1-RES-15-parte8.jpg',
            'L513-G1-RES-15-parte9.jpg',
            'L513-G1-RES-15-parte10.jpg',
            'L513-G1-RES-15-parte11.jpg',
            'L513-G1-RES-15-parte12.jpg',
            'L513-G1-RES-15-parte13.jpg',
            'L513-G1-RES-15-parte14.jpg',
            'L513-G1-RES-15-parte15.jpg',
            'L513-G1-RES-15-parte16.jpg',
            'L513-G1-RES-15-parte17.jpg',
            'L513-G1-RES-15-parte18.jpg',
            'L513-G1-RES-15-parte19.jpg',
            'L513-G1-RES-15-parte20.jpg',
            'L513-G1-RES-15-parte21.jpg'
          ]
        }
      ]
    }
  },
  L514: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L514-G1-EX-1.jpg'],
          resposta: [
            'L514-G1-RES-1.jpg',
            'L514-G1-RES-1-parte2.jpg',
            'L514-G1-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L514-G1-EX-2.jpg'],
          resposta: [
            'L514-G1-RES-2.jpg',
            'L514-G1-RES-2-parte2.jpg',
            'L514-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L514-G1-EX-3.jpg'],
          resposta: [
            'L514-G1-RES-3.jpg',
            'L514-G1-RES-3-parte2.jpg',
            'L514-G1-RES-3-parte3.jpg',
            'L514-G1-RES-3-parte4.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L514-G1-EX-4.jpg'],
          resposta: ['L514-G1-RES-4.jpg', 'L514-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L514-G1-EX-5.jpg'],
          resposta: ['L514-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L514-G1-EX-6.jpg'],
          resposta: ['L514-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L514-G1-EX-7.jpg'],
          resposta: ['L514-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L514-G1-EX-8.jpg'],
          resposta: [
            'L514-G1-RES-8.jpg',
            'L514-G1-RES-8-parte2.jpg',
            'L514-G1-RES-8-parte3.jpg',
            'L514-G1-RES-8-parte4.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L514-G1-EX-9.jpg'],
          resposta: [
            'L514-G1-RES-9.jpg',
            'L514-G1-RES-9-parte2.jpg',
            'L514-G1-RES-9-parte3.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L514-G1-EX-10.jpg'],
          resposta: ['L514-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L514-G1-EX-11.jpg'],
          resposta: ['L514-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L514-G1-EX-12.jpg'],
          resposta: ['L514-G1-RES-12.jpg']
        }
      ]
    }
  },
  L515: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L515-G1-EX-1.jpg'],
          resposta: ['L515-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L515-G1-EX-2.jpg'],
          resposta: ['L515-G1-RES-2.jpg', 'L515-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L515-G1-EX-3.jpg'],
          resposta: ['L515-G1-RES-3.jpg', 'L515-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L515-G1-EX-4.jpg'],
          resposta: ['L515-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L515-G1-EX-5.jpg'],
          resposta: [
            'L515-G1-RES-5.jpg',
            'L515-G1-RES-5-parte2.jpg',
            'L515-G1-RES-5-parte3.jpg',
            'L515-G1-RES-5-parte4.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L515-G1-EX-6.jpg'],
          resposta: ['L515-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L515-G1-EX-7.jpg'],
          resposta: ['L515-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L515-G1-EX-8.jpg'],
          resposta: [
            'L515-G1-RES-8.jpg',
            'L515-G1-RES-8-parte2.jpg',
            'L515-G1-RES-8-parte3.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L515-G1-EX-9.jpg'],
          resposta: ['L515-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L515-G1-EX-10.jpg'],
          resposta: ['L515-G1-RES-10.jpg', 'L515-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: ['L515-G1-EX-11.jpg', 'L515-G1-EX-11-parte2.jpg'],
          resposta: ['L515-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L515-G1-EX-12.jpg'],
          resposta: [
            'L515-G1-RES-12.jpg',
            'L515-G1-RES-12-parte2.jpg',
            'L515-G1-RES-12-parte3.jpg',
            'L515-G1-RES-12-parte4.jpg',
            'L515-G1-RES-12-parte5.jpg'
          ]
        },
        {
          ex: '13',
          enunciado: ['L515-G1-EX-13.jpg'],
          resposta: [
            'L515-G1-RES-13.jpg',
            'L515-G1-RES-13-parte2.jpg',
            'L515-G1-RES-13-parte3.jpg',
            'L515-G1-RES-13-parte4.jpg',
            'L515-G1-RES-13-parte5.jpg'
          ]
        }
      ]
    }
  },
  L516: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L516-G1-EX-1.jpg'],
          resposta: [
            'L516-G1-RES-1.jpg',
            'L516-G1-RES-1-parte2.jpg',
            'L516-G1-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L516-G1-EX-2.jpg'],
          resposta: [
            'L516-G1-RES-2.jpg',
            'L516-G1-RES-2-parte2.jpg',
            'L516-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L516-G1-EX-3.jpg'],
          resposta: [
            'L516-G1-RES-3.jpg',
            'L516-G1-RES-3-parte2.jpg',
            'L516-G1-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L516-G1-EX-4.jpg'],
          resposta: ['L516-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L516-G1-EX-5.jpg'],
          resposta: ['L516-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L516-G1-EX-6.jpg'],
          resposta: ['L516-G1-RES-6.jpg', 'L516-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L516-G1-EX-7.jpg'],
          resposta: ['L516-G1-RES-7.jpg', 'L516-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L516-G1-EX-8.jpg'],
          resposta: ['L516-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L516-G1-EX-9.jpg'],
          resposta: ['L516-G1-RES-9.jpg', 'L516-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L516-G1-EX-10.jpg'],
          resposta: ['L516-G1-RES-10.jpg', 'L516-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: ['L516-G1-EX-11.jpg'],
          resposta: [
            'L516-G1-RES-11.jpg',
            'L516-G1-RES-11-parte2.jpg',
            'L516-G1-RES-11-parte3.jpg',
            'L516-G1-RES-11-parte4.jpg'
          ]
        },
        {
          ex: '12',
          enunciado: ['L516-G1-EX-12.jpg'],
          resposta: ['L516-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L516-G1-EX-13.jpg'],
          resposta: ['L516-G1-RES-13.jpg']
        }
      ]
    }
  },
  L517: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L517-G1-EX-1.jpg'],
          resposta: ['L517-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L517-G1-EX-2.jpg'],
          resposta: ['L517-G1-RES-2.jpg', 'L517-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L517-G1-EX-3.jpg'],
          resposta: ['L517-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L517-G1-EX-4.jpg'],
          resposta: ['L517-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L517-G1-EX-5.jpg'],
          resposta: [
            'L517-G1-RES-5.jpg',
            'L517-G1-RES-5-parte2.jpg',
            'L517-G1-RES-5-parte3.jpg',
            'L517-G1-RES-5-parte4.jpg',
            'L517-G1-RES-5-parte5.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L517-G1-EX-6.jpg'],
          resposta: ['L517-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L517-G1-EX-7.jpg'],
          resposta: [
            'L517-G1-RES-7.jpg',
            'L517-G1-RES-7-parte2.jpg',
            'L517-G1-RES-7-parte3.jpg',
            'L517-G1-RES-7-parte4.jpg',
            'L517-G1-RES-7-parte5.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: ['L517-G1-EX-8.jpg'],
          resposta: [
            'L517-G1-RES-8.jpg',
            'L517-G1-RES-8-parte2.jpg',
            'L517-G1-RES-8-parte3.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L517-G1-EX-9.jpg'],
          resposta: ['L517-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L517-G1-EX-10.jpg'],
          resposta: ['L517-G1-RES-10.jpg']
        }
      ]
    }
  },
  L518: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L518-G1-EX-1.jpg'],
          resposta: ['L518-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L518-G1-EX-2.jpg'],
          resposta: ['L518-G1-RES-2.jpg', 'L518-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L518-G1-EX-3.jpg'],
          resposta: ['L518-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L518-G1-EX-4.jpg'],
          resposta: ['L518-G1-RES-4.jpg', 'L518-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L518-G1-EX-5.jpg'],
          resposta: ['L518-G1-RES-5.jpg', 'L518-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L518-G1-EX-6.jpg'],
          resposta: ['L518-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L518-G1-EX-7.jpg'],
          resposta: ['L518-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L518-G1-EX-8.jpg'],
          resposta: ['L518-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L518-G1-EX-9.jpg'],
          resposta: ['L518-G1-RES-9.jpg', 'L518-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L518-G1-EX-10.jpg'],
          resposta: ['L518-G1-RES-10.jpg', 'L518-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: ['L518-G1-EX-11.jpg'],
          resposta: [
            'L518-G1-RES-11.jpg',
            'L518-G1-RES-11-parte2.jpg',
            'L518-G1-RES-11-parte3.jpg',
            'L518-G1-RES-11-parte4.jpg'
          ]
        },
        {
          ex: '12',
          enunciado: ['L518-G1-EX-12.jpg'],
          resposta: [
            'L518-G1-RES-12.jpg',
            'L518-G1-RES-12-parte2.jpg',
            'L518-G1-RES-12-parte3.jpg',
            'L518-G1-RES-12-parte4.jpg',
            'L518-G1-RES-12-parte5.jpg',
            'L518-G1-RES-12-parte6.jpg',
            'L518-G1-RES-12-parte7.jpg'
          ]
        },
        {
          ex: '13',
          enunciado: ['L518-G1-EX-13.jpg'],
          resposta: ['L518-G1-RES-13.jpg']
        }
      ]
    }
  },
  L519: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L519-G1-EX-1.jpg'],
          resposta: [
            'L519-G1-RES-1.jpg',
            'L519-G1-RES-1-parte2.jpg',
            'L519-G1-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L519-G1-EX-2.jpg'],
          resposta: ['L519-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L519-G1-EX-3.jpg'],
          resposta: ['L519-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L519-G1-EX-4.jpg'],
          resposta: ['L519-G1-RES-4.jpg', 'L519-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L519-G1-EX-5.jpg'],
          resposta: ['L519-G1-RES-5.jpg', 'L519-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L519-G1-EX-6.jpg'],
          resposta: ['L519-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L519-G1-EX-7.jpg'],
          resposta: ['L519-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L519-G1-EX-8.jpg'],
          resposta: ['L519-G1-RES-8.jpg', 'L519-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L519-G1-EX-9.jpg'],
          resposta: ['L519-G1-RES-9.jpg', 'L519-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L519-G1-EX-10.jpg'],
          resposta: ['L519-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L519-G1-EX-11.jpg'],
          resposta: ['L519-G1-RES-11.jpg', 'L519-G1-RES-11-parte2.jpg']
        },
        {
          ex: '12',
          enunciado: ['L519-G1-EX-12.jpg'],
          resposta: ['L519-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L519-G1-EX-13.jpg'],
          resposta: ['L519-G1-RES-13.jpg', 'L519-G1-RES-13-parte2.jpg']
        },
        {
          ex: '14',
          enunciado: ['L519-G1-EX-14.jpg'],
          resposta: [
            'L519-G1-RES-14.jpg',
            'L519-G1-RES-14-parte2.jpg',
            'L519-G1-RES-14-parte3.jpg'
          ]
        },
        {
          ex: '15',
          enunciado: ['L519-G1-EX-15.jpg'],
          resposta: [
            'L519-G1-RES-15.jpg',
            'L519-G1-RES-15-parte2.jpg',
            'L519-G1-RES-15-parte3.jpg'
          ]
        },
        {
          ex: '16',
          enunciado: ['L519-G1-EX-16.jpg'],
          resposta: ['L519-G1-RES-16.jpg']
        },
        {
          ex: '17',
          enunciado: ['L519-G1-EX-17.jpg'],
          resposta: ['L519-G1-RES-17.jpg', 'L519-G1-RES-17-parte2.jpg']
        },
        {
          ex: '18',
          enunciado: ['L519-G1-EX-18.jpg'],
          resposta: ['L519-G1-RES-18.jpg', 'L519-G1-RES-18-parte2.jpg']
        },
        {
          ex: '19',
          enunciado: ['L519-G1-EX-19.jpg'],
          resposta: ['L519-G1-RES-19.jpg', 'L519-G1-RES-19-parte2.jpg']
        }
      ]
    }
  },
  L520: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L520-G1-EX-1.jpg'],
          resposta: ['L520-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L520-G1-EX-2.jpg'],
          resposta: ['L520-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L520-G1-EX-3.jpg'],
          resposta: ['L520-G1-RES-3.jpg', 'L520-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L520-G1-EX-4.jpg'],
          resposta: ['L520-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L520-G1-EX-5.jpg'],
          resposta: [
            'L520-G1-RES-5.jpg',
            'L520-G1-RES-5-parte2.jpg',
            'L520-G1-RES-5-parte3.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L520-G1-EX-6.jpg'],
          resposta: ['L520-G1-RES-6.jpg', 'L520-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L520-G1-EX-7.jpg'],
          resposta: ['L520-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L520-G1-EX-8.jpg'],
          resposta: ['L520-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L520-G1-EX-9.jpg'],
          resposta: ['L520-G1-RES-9.jpg', 'L520-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L520-G1-EX-10.jpg'],
          resposta: ['L520-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L520-G1-EX-11.jpg'],
          resposta: ['L520-G1-RES-11.jpg', 'L520-G1-RES-11-parte2.jpg']
        },
        {
          ex: '12',
          enunciado: ['L520-G1-EX-12.jpg'],
          resposta: ['L520-G1-RES-12.jpg', 'L520-G1-RES-12-parte2.jpg']
        },
        {
          ex: '13',
          enunciado: ['L520-G1-EX-13.jpg'],
          resposta: ['L520-G1-RES-13.jpg', 'L520-G1-RES-13-parte2.jpg']
        },
        {
          ex: '14',
          enunciado: ['L520-G1-EX-14.jpg'],
          resposta: ['L520-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L520-G1-EX-15.jpg'],
          resposta: ['L520-G1-RES-15.jpg', 'L520-G1-RES-15-parte2.jpg']
        },
        {
          ex: '16',
          enunciado: ['L520-G1-EX-16.jpg'],
          resposta: ['L520-G1-RES-16.jpg']
        }
      ]
    }
  },
  L521: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L521-G1-EX-1.jpg'],
          resposta: ['L521-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L521-G1-EX-2.jpg'],
          resposta: ['L521-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L521-G1-EX-3.jpg'],
          resposta: ['L521-G1-RES-3.jpg', 'L521-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L521-G1-EX-4.jpg'],
          resposta: ['L521-G1-RES-4.jpg', 'L521-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L521-G1-EX-5.jpg'],
          resposta: ['L521-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L521-G1-EX-6.jpg'],
          resposta: ['L521-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L521-G1-EX-7.jpg'],
          resposta: ['L521-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L521-G1-EX-8.jpg'],
          resposta: ['L521-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L521-G1-EX-9.jpg'],
          resposta: [
            'L521-G1-RES-9.jpg',
            'L521-G1-RES-9-parte2.jpg',
            'L521-G1-RES-9-parte3.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L521-G1-EX-10.jpg'],
          resposta: ['L521-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L521-G1-EX-11.jpg'],
          resposta: ['L521-G1-RES-11.jpg', 'L521-G1-RES-11-parte2.jpg']
        },
        {
          ex: '12',
          enunciado: ['L521-G1-EX-12.jpg'],
          resposta: ['L521-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L521-G1-EX-13.jpg'],
          resposta: ['L521-G1-RES-13.jpg', 'L521-G1-RES-13-parte2.jpg']
        }
      ]
    }
  },
  L522: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L522-G1-EX-1.jpg'],
          resposta: ['L522-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L522-G1-EX-2.jpg'],
          resposta: ['L522-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L522-G1-EX-3.jpg'],
          resposta: ['L522-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L522-G1-EX-4.jpg', 'L522-G1-EX-4-parte2.jpg'],
          resposta: ['L522-G1-RES-4.jpg', 'L522-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L522-G1-EX-5.jpg'],
          resposta: [
            'L522-G1-RES-5.jpg',
            'L522-G1-RES-5-parte2.jpg',
            'L522-G1-RES-5-parte3.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L522-G1-EX-6.jpg', 'L522-G1-EX-6-parte2.jpg'],
          resposta: ['L522-G1-RES-6.jpg', 'L522-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L522-G1-EX-7.jpg'],
          resposta: ['L522-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L522-G1-EX-8.jpg'],
          resposta: [
            'L522-G1-RES-8.jpg',
            'L522-G1-RES-8-parte2.jpg',
            'L522-G1-RES-8-parte3.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L522-G1-EX-9.jpg'],
          resposta: ['L522-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L522-G1-EX-10.jpg'],
          resposta: [
            'L522-G1-RES-10.jpg',
            'L522-G1-RES-10-parte2.jpg',
            'L522-G1-RES-10-parte3.jpg',
            'L522-G1-RES-10-parte4.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L522-G1-EX-11.jpg'],
          resposta: ['L522-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L522-G1-EX-12.jpg'],
          resposta: ['L522-G1-RES-12.jpg']
        },
        {
          ex: '13',
          enunciado: ['L522-G1-EX-13.jpg'],
          resposta: ['L522-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L522-G1-EX-14.jpg'],
          resposta: ['L522-G1-RES-14.jpg']
        },
        {
          ex: '15',
          enunciado: ['L522-G1-EX-15.jpg', 'L522-G1-EX-15-parte2.jpg'],
          resposta: ['L522-G1-RES-15.jpg', 'L522-G1-RES-15-parte2.jpg']
        }
      ]
    }
  },
  L601: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L601-G1-EX-1.jpg'],
          resposta: [
            'L601-G1-RES-1.jpg',
            'L601-G1-RES-1-parte2.jpg',
            'L601-G1-RES-1-parte3.jpg',
            'L601-G1-RES-1-parte4.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L601-G1-EX-2.jpg'],
          resposta: ['L601-G1-RES-2.jpg', 'L601-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L601-G1-EX-3.jpg'],
          resposta: ['L601-G1-RES-3.jpg', 'L601-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L601-G1-EX-4.jpg'],
          resposta: ['L601-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L601-G1-EX-5.jpg'],
          resposta: ['L601-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L601-G1-EX-6.jpg', 'L601-G1-EX-6-parte2.jpg'],
          resposta: [
            'L601-G1-RES-6.jpg',
            'L601-G1-RES-6-parte2.jpg',
            'L601-G1-RES-6-parte3.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L601-G1-EX-7.jpg'],
          resposta: [
            'L601-G1-RES-7.jpg',
            'L601-G1-RES-7-parte2.jpg',
            'L601-G1-RES-7-parte3.jpg',
            'L601-G1-RES-7-parte4.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: ['L601-G1-EX-8.jpg'],
          resposta: ['L601-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L601-G1-EX-9.jpg', 'L601-G1-EX-9-parte2.jpg'],
          resposta: [
            'L601-G1-RES-9.jpg',
            'L601-G1-RES-9-parte2.jpg',
            'L601-G1-RES-9-parte3.jpg',
            'L601-G1-RES-9-parte4.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L601-G1-EX-10.jpg', 'L601-G1-EX-10-parte2.jpg'],
          resposta: [
            'L601-G1-RES-10.jpg',
            'L601-G1-RES-10-parte2.jpg',
            'L601-G1-RES-10-parte3.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L601-G1-EX-11.jpg'],
          resposta: ['L601-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L601-G1-EX-12.jpg', 'L601-G1-EX-12-parte2.jpg'],
          resposta: [
            'L601-G1-RES-12.jpg',
            'L601-G1-RES-12-parte2.jpg',
            'L601-G1-RES-12-parte3.jpg',
            'L601-G1-RES-12-parte4.jpg'
          ]
        }
      ]
    }
  },
  L602: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L602-G1-EX-1.jpg', 'L602-G1-EX-1-parte2.jpg'],
          resposta: ['L602-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L602-G1-EX-2.jpg', 'L602-G1-EX-2-parte2.jpg'],
          resposta: ['L602-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L602-G1-EX-3.jpg'],
          resposta: ['L602-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L602-G1-EX-4.jpg'],
          resposta: ['L602-G1-RES-4.jpg', 'L602-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L602-G1-EX-5.jpg', 'L602-G1-EX-5-parte2.jpg'],
          resposta: ['L602-G1-RES-5.jpg', 'L602-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L602-G1-EX-6.jpg', 'L602-G1-EX-6-parte2.jpg'],
          resposta: [
            'L602-G1-RES-6.jpg',
            'L602-G1-RES-6-parte2.jpg',
            'L602-G1-RES-6-parte3.jpg',
            'L602-G1-RES-6-parte4.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L602-G1-EX-7.jpg', 'L602-G1-EX-7-parte2.jpg'],
          resposta: ['L602-G1-RES-7.jpg', 'L602-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L602-G1-EX-8.jpg'],
          resposta: ['L602-G1-RES-8.jpg', 'L602-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L602-G1-EX-9.jpg'],
          resposta: ['L602-G1-RES-9.jpg', 'L602-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L602-G1-EX-10.jpg'],
          resposta: ['L602-G1-RES-10.jpg']
        },
        {
          ex: '11',
          enunciado: ['L602-G1-EX-11.jpg', 'L602-G1-EX-11-parte2.jpg'],
          resposta: [
            'L602-G1-RES-11.jpg',
            'L602-G1-RES-11-parte2.jpg',
            'L602-G1-RES-11-parte3.jpg',
            'L602-G1-RES-11-parte4.jpg'
          ]
        },
        {
          ex: '12',
          enunciado: ['L602-G1-EX-12.jpg'],
          resposta: ['L602-G1-RES-12.jpg', 'L602-G1-RES-12-parte2.jpg']
        },
        {
          ex: '13',
          enunciado: ['L602-G1-EX-13.jpg'],
          resposta: ['L602-G1-RES-13.jpg']
        },
        {
          ex: '14',
          enunciado: ['L602-G1-EX-14.jpg', 'L602-G1-EX-14-parte2.jpg'],
          resposta: [
            'L602-G1-RES-14.jpg',
            'L602-G1-RES-14-parte2.jpg',
            'L602-G1-RES-14-parte3.jpg'
          ]
        },
        {
          ex: '15',
          enunciado: ['L602-G1-EX-15.jpg', 'L602-G1-EX-15-parte2.jpg'],
          resposta: ['L602-G1-RES-15.jpg']
        }
      ]
    }
  },
  L603: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L603-G1-EX-1.jpg'],
          resposta: [
            'L603-G1-RES-1.jpg',
            'L603-G1-RES-1-parte2.jpg',
            'L603-G1-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: [
            'L603-G1-EX-2.jpg',
            'L603-G1-EX-2-parte2.jpg',
            'L603-G1-EX-2-parte3.jpg',
            'L603-G1-EX-2-parte4.jpg'
          ],
          resposta: [
            'L603-G1-RES-2.jpg',
            'L603-G1-RES-2-parte2.jpg',
            'L603-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: [
            'L603-G1-EX-3.jpg',
            'L603-G1-EX-3-parte2.jpg',
            'L603-G1-EX-3-parte3.jpg'
          ],
          resposta: [
            'L603-G1-RES-3.jpg',
            'L603-G1-RES-3-parte2.jpg',
            'L603-G1-RES-3-parte3.jpg',
            'L603-G1-RES-3-parte4.jpg',
            'L603-G1-RES-3-parte5.jpg',
            'L603-G1-RES-3-parte6.jpg',
            'L603-G1-RES-3-parte7.jpg',
            'L603-G1-RES-3-parte8.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L603-G1-EX-4.jpg', 'L603-G1-EX-4-parte2.jpg'],
          resposta: [
            'L603-G1-RES-4.jpg',
            'L603-G1-RES-4-parte2.jpg',
            'L603-G1-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L603-G1-EX-5.jpg', 'L603-G1-EX-5-parte2.jpg'],
          resposta: [
            'L603-G1-RES-5.jpg',
            'L603-G1-RES-5-parte2.jpg',
            'L603-G1-RES-5-parte3.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L603-G1-EX-6.jpg', 'L603-G1-EX-6-parte2.jpg'],
          resposta: [
            'L603-G1-RES-6.jpg',
            'L603-G1-RES-6-parte2.jpg',
            'L603-G1-RES-6-parte3.jpg',
            'L603-G1-RES-6-parte4.jpg',
            'L603-G1-RES-6-parte5.jpg',
            'L603-G1-RES-6-parte6.jpg'
          ]
        }
      ]
    }
  },
  L604: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L604-G1-EX-1.jpg', 'L604-G1-EX-1-parte2.jpg'],
          resposta: [
            'L604-G1-RES-1.jpg',
            'L604-G1-RES-1-parte2.jpg',
            'L604-G1-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L604-G1-EX-2.jpg'],
          resposta: [
            'L604-G1-RES-2.jpg',
            'L604-G1-RES-2-parte2.jpg',
            'L604-G1-RES-2-parte3.jpg',
            'L604-G1-RES-2-parte4.jpg',
            'L604-G1-RES-2-parte5.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L604-G1-EX-3.jpg', 'L604-G1-EX-3-parte2.jpg'],
          resposta: ['L604-G1-RES-3.jpg', 'L604-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L604-G1-EX-4.jpg'],
          resposta: ['L604-G1-RES-4.jpg', 'L604-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L604-G1-EX-5.jpg'],
          resposta: [
            'L604-G1-RES-5.jpg',
            'L604-G1-RES-5-parte2.jpg',
            'L604-G1-RES-5-parte3.jpg',
            'L604-G1-RES-5-parte4.jpg',
            'L604-G1-RES-5-parte5.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L604-G1-EX-6.jpg', 'L604-G1-EX-6-parte2.jpg'],
          resposta: ['L604-G1-RES-6.jpg', 'L604-G1-RES-6-parte2.jpg']
        },
        {
          ex: '7',
          enunciado: ['L604-G1-EX-7.jpg'],
          resposta: [
            'L604-G1-RES-7.jpg',
            'L604-G1-RES-7-parte2.jpg',
            'L604-G1-RES-7-parte3.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: ['L604-G1-EX-8.jpg'],
          resposta: [
            'L604-G1-RES-8.jpg',
            'L604-G1-RES-8-parte2.jpg',
            'L604-G1-RES-8-parte3.jpg',
            'L604-G1-RES-8-parte4.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L604-G1-EX-9.jpg'],
          resposta: ['L604-G1-RES-9.jpg', 'L604-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L604-G1-EX-10.jpg', 'L604-G1-EX-10-parte2.jpg'],
          resposta: [
            'L604-G1-RES-10.jpg',
            'L604-G1-RES-10-parte2.jpg',
            'L604-G1-RES-10-parte3.jpg',
            'L604-G1-RES-10-parte4.jpg',
            'L604-G1-RES-10-parte5.jpg',
            'L604-G1-RES-10-parte6.jpg'
          ]
        }
      ]
    }
  },
  L605: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L605-G1-EX-1.jpg'],
          resposta: [
            'L605-G1-RES-1.jpg',
            'L605-G1-RES-1-parte2.jpg',
            'L605-G1-RES-1-parte3.jpg',
            'L605-G1-RES-1-parte4.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L605-G1-EX-2.jpg'],
          resposta: [
            'L605-G1-RES-2.jpg',
            'L605-G1-RES-2-parte2.jpg',
            'L605-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L605-G1-EX-3.jpg'],
          resposta: [
            'L605-G1-RES-3.jpg',
            'L605-G1-RES-3-parte2.jpg',
            'L605-G1-RES-3-parte3.jpg',
            'L605-G1-RES-3-parte4.jpg',
            'L605-G1-RES-3-parte5.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L605-G1-EX-4.jpg'],
          resposta: [
            'L605-G1-RES-4.jpg',
            'L605-G1-RES-4-parte2.jpg',
            'L605-G1-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L605-G1-EX-5.jpg'],
          resposta: [
            'L605-G1-RES-5.jpg',
            'L605-G1-RES-5-parte2.jpg',
            'L605-G1-RES-5-parte3.jpg',
            'L605-G1-RES-5-parte4.jpg',
            'L605-G1-RES-5-parte5.jpg',
            'L605-G1-RES-5-parte6.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L605-G1-EX-6.jpg'],
          resposta: [
            'L605-G1-RES-6.jpg',
            'L605-G1-RES-6-parte2.jpg',
            'L605-G1-RES-6-parte3.jpg',
            'L605-G1-RES-6-parte4.jpg',
            'L605-G1-RES-6-parte5.jpg',
            'L605-G1-RES-6-parte6.jpg',
            'L605-G1-RES-6-parte7.jpg',
            'L605-G1-RES-6-parte8.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: [
            'L605-G1-EX-7.jpg',
            'L605-G1-EX-7-parte2.jpg',
            'L605-G1-EX-7-parte3.jpg',
            'L605-G1-EX-7-parte4.jpg',
            'L605-G1-EX-7-parte5.jpg',
            'L605-G1-EX-7-parte6.jpg'
          ],
          resposta: ['L605-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L605-G1-EX-8.jpg'],
          resposta: [
            'L605-G1-RES-8.jpg',
            'L605-G1-RES-8-parte2.jpg',
            'L605-G1-RES-8-parte3.jpg',
            'L605-G1-RES-8-parte4.jpg',
            'L605-G1-RES-8-parte5.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L605-G1-EX-9.jpg'],
          resposta: [
            'L605-G1-RES-9.jpg',
            'L605-G1-RES-9-parte2.jpg',
            'L605-G1-RES-9-parte3.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L605-G1-EX-10.jpg'],
          resposta: [
            'L605-G1-RES-10.jpg',
            'L605-G1-RES-10-parte2.jpg',
            'L605-G1-RES-10-parte3.jpg'
          ]
        }
      ]
    }
  },
  L606: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L606-G1-EX-1.jpg'],
          resposta: [
            'L606-G1-RES-1.jpg',
            'L606-G1-RES-1-parte2.jpg',
            'L606-G1-RES-1-parte3.jpg',
            'L606-G1-RES-1-parte4.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L606-G1-EX-2.jpg'],
          resposta: ['L606-G1-RES-2.jpg', 'L606-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L606-G1-EX-3.jpg'],
          resposta: [
            'L606-G1-RES-3.jpg',
            'L606-G1-RES-3-parte2.jpg',
            'L606-G1-RES-3-parte3.jpg',
            'L606-G1-RES-3-parte4.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L606-G1-EX-4.jpg'],
          resposta: [
            'L606-G1-RES-4.jpg',
            'L606-G1-RES-4-parte2.jpg',
            'L606-G1-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L606-G1-EX-5.jpg'],
          resposta: ['L606-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L606-G1-EX-6.jpg'],
          resposta: [
            'L606-G1-RES-6.jpg',
            'L606-G1-RES-6-parte2.jpg',
            'L606-G1-RES-6-parte3.jpg',
            'L606-G1-RES-6-parte4.jpg',
            'L606-G1-RES-6-parte5.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L606-G1-EX-7.jpg'],
          resposta: [
            'L606-G1-RES-7.jpg',
            'L606-G1-RES-7-parte2.jpg',
            'L606-G1-RES-7-parte3.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: ['L606-G1-EX-8.jpg'],
          resposta: [
            'L606-G1-RES-8.jpg',
            'L606-G1-RES-8-parte2.jpg',
            'L606-G1-RES-8-parte3.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L606-G1-EX-9.jpg'],
          resposta: [
            'L606-G1-RES-9.jpg',
            'L606-G1-RES-9-parte2.jpg',
            'L606-G1-RES-9-parte3.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L606-G1-EX-10.jpg'],
          resposta: [
            'L606-G1-RES-10.jpg',
            'L606-G1-RES-10-parte2.jpg',
            'L606-G1-RES-10-parte3.jpg'
          ]
        },
        {
          ex: '11',
          enunciado: ['L606-G1-EX-11.jpg'],
          resposta: ['L606-G1-RES-11.jpg']
        },
        {
          ex: '12',
          enunciado: ['L606-G1-EX-12.jpg'],
          resposta: [
            'L606-G1-RES-12.jpg',
            'L606-G1-RES-12-parte2.jpg',
            'L606-G1-RES-12-parte3.jpg'
          ]
        }
      ]
    }
  },
  L607: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L607-G1-EX-1.jpg'],
          resposta: [
            'L607-G1-RES-1.jpg',
            'L607-G1-RES-1-parte2.jpg',
            'L607-G1-RES-1-parte3.jpg',
            'L607-G1-RES-1-parte4.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L607-G1-EX-2.jpg'],
          resposta: ['L607-G1-RES-2.jpg', 'L607-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L607-G1-EX-3.jpg', 'L607-G1-EX-3-parte2.jpg'],
          resposta: [
            'L607-G1-RES-3.jpg',
            'L607-G1-RES-3-parte2.jpg',
            'L607-G1-RES-3-parte3.jpg',
            'L607-G1-RES-3-parte4.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L607-G1-EX-4.jpg'],
          resposta: [
            'L607-G1-RES-4.jpg',
            'L607-G1-RES-4-parte2.jpg',
            'L607-G1-RES-4-parte3.jpg',
            'L607-G1-RES-4-parte4.jpg',
            'L607-G1-RES-4-parte5.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L607-G1-EX-5.jpg'],
          resposta: [
            'L607-G1-RES-5.jpg',
            'L607-G1-RES-5-parte2.jpg',
            'L607-G1-RES-5-parte3.jpg',
            'L607-G1-RES-5-parte4.jpg',
            'L607-G1-RES-5-parte5.jpg',
            'L607-G1-RES-5-parte6.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L607-G1-EX-6.jpg'],
          resposta: [
            'L607-G1-RES-6.jpg',
            'L607-G1-RES-6-parte2.jpg',
            'L607-G1-RES-6-parte3.jpg',
            'L607-G1-RES-6-parte4.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L607-G1-EX-7.jpg'],
          resposta: [
            'L607-G1-RES-7.jpg',
            'L607-G1-RES-7-parte2.jpg',
            'L607-G1-RES-7-parte3.jpg',
            'L607-G1-RES-7-parte4.jpg',
            'L607-G1-RES-7-parte5.jpg',
            'L607-G1-RES-7-parte6.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: ['L607-G1-EX-8.jpg'],
          resposta: ['L607-G1-RES-8.jpg', 'L607-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L607-G1-EX-9.jpg'],
          resposta: ['L607-G1-RES-9.jpg', 'L607-G1-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: ['L607-G1-EX-10.jpg'],
          resposta: ['L607-G1-RES-10.jpg', 'L607-G1-RES-10-parte2.jpg']
        }
      ]
    }
  },
  L608: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L608-G1-EX-1.jpg'],
          resposta: ['L608-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L608-G1-EX-2.jpg'],
          resposta: ['L608-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L608-G1-EX-3.jpg'],
          resposta: [
            'L608-G1-RES-3.jpg',
            'L608-G1-RES-3-parte2.jpg',
            'L608-G1-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L608-G1-EX-4.jpg'],
          resposta: ['L608-G1-RES-4.jpg', 'L608-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L608-G1-EX-5.jpg'],
          resposta: [
            'L608-G1-RES-5.jpg',
            'L608-G1-RES-5-parte2.jpg',
            'L608-G1-RES-5-parte3.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L608-G1-EX-6.jpg'],
          resposta: [
            'L608-G1-RES-6.jpg',
            'L608-G1-RES-6-parte2.jpg',
            'L608-G1-RES-6-parte3.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L608-G1-EX-7.jpg'],
          resposta: ['L608-G1-RES-7.jpg', 'L608-G1-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: ['L608-G1-EX-8.jpg'],
          resposta: ['L608-G1-RES-8.jpg', 'L608-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L608-G1-EX-9.jpg'],
          resposta: ['L608-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L608-G1-EX-10.jpg'],
          resposta: ['L608-G1-RES-10.jpg']
        }
      ]
    }
  },
  L609: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L609-G1-EX-1.jpg'],
          resposta: ['L609-G1-RES-1.jpg', 'L609-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L609-G1-EX-2.jpg'],
          resposta: ['L609-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L609-G1-EX-3.jpg'],
          resposta: ['L609-G1-RES-3.jpg', 'L609-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: ['L609-G1-EX-4.png'],
          resposta: [
            'L609-G1-RES-4.jpg',
            'L609-G1-RES-4-parte2.jpg',
            'L609-G1-RES-4-parte3.jpg',
            'L609-G1-RES-4-parte4.jpg',
            'L609-G1-RES-4-parte5.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L609-G1-EX-5.png'],
          resposta: ['L609-G1-RES-5.jpg', 'L609-G1-RES-5-parte2.jpg']
        },
        {
          ex: '6',
          enunciado: ['L609-G1-EX-6.png'],
          resposta: [
            'L609-G1-RES-6.jpg',
            'L609-G1-RES-6-parte2.jpg',
            'L609-G1-RES-6-parte3.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L609-G1-EX-7.png'],
          resposta: [
            'L609-G1-RES-7.jpg',
            'L609-G1-RES-7-parte2.jpg',
            'L609-G1-RES-7-parte3.jpg',
            'L609-G1-RES-7-parte4.jpg',
            'L609-G1-RES-7-parte5.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: ['L609-G1-EX-8.png'],
          resposta: [
            'L609-G1-RES-8.jpg',
            'L609-G1-RES-8-parte2.jpg',
            'L609-G1-RES-8-parte3.jpg',
            'L609-G1-RES-8-parte4.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L609-G1-EX-9.jpg'],
          resposta: [
            'L609-G1-RES-9.jpg',
            'L609-G1-RES-9-parte2.jpg',
            'L609-G1-RES-9-parte3.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L609-G1-EX-10.jpg'],
          resposta: [
            'L609-G1-RES-10.jpg',
            'L609-G1-RES-10-parte2.jpg',
            'L609-G1-RES-10-parte3.jpg',
            'L609-G1-RES-10-parte4.jpg',
            'L609-G1-RES-10-parte5.jpg',
            'L609-G1-RES-10-parte6.jpg',
            'L609-G1-RES-10-parte7.jpg',
            'L609-G1-RES-10-parte8.jpg'
          ]
        }
      ]
    }
  },
  L610: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L610-G1-EX-1.jpg'],
          resposta: ['L610-G1-RES-1.jpg', 'L610-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L610-G1-EX-2.jpg'],
          resposta: ['L610-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L610-G1-EX-3.jpg'],
          resposta: ['L610-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L610-G1-EX-4.jpg'],
          resposta: ['L610-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L610-G1-EX-5.jpg'],
          resposta: ['L610-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L610-G1-EX-6.jpg'],
          resposta: ['L610-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L610-G1-EX-7.jpg'],
          resposta: ['L610-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L610-G1-EX-8.jpg'],
          resposta: ['L610-G1-RES-8.jpg', 'L610-G1-RES-8-parte2.jpg']
        },
        {
          ex: '9',
          enunciado: ['L610-G1-EX-9.jpg'],
          resposta: ['L610-G1-RES-9.jpg']
        },
        {
          ex: '10',
          enunciado: ['L610-G1-EX-10.jpg'],
          resposta: ['L610-G1-RES-10.jpg', 'L610-G1-RES-10-parte2.jpg']
        },
        {
          ex: '11',
          enunciado: ['L610-G1-EX-11.jpg'],
          resposta: ['L610-G1-RES-11.jpg', 'L610-G1-RES-11-parte2.jpg']
        },
        {
          ex: '12',
          enunciado: ['L610-G1-EX-12.jpg'],
          resposta: ['L610-G1-RES-12.jpg']
        }
      ]
    }
  },
  L611: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L611-G1-EX-1.jpg'],
          resposta: [
            'L611-G1-RES-1.jpg',
            'L611-G1-RES-1-parte2.jpg',
            'L611-G1-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '2',
          enunciado: ['L611-G1-EX-2.jpg'],
          resposta: [
            'L611-G1-RES-2.jpg',
            'L611-G1-RES-2-parte2.jpg',
            'L611-G1-RES-2-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: ['L611-G1-EX-3.jpg'],
          resposta: [
            'L611-G1-RES-3.jpg',
            'L611-G1-RES-3-parte2.jpg',
            'L611-G1-RES-3-parte3.jpg',
            'L611-G1-RES-3-parte4.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L611-G1-EX-4.jpg'],
          resposta: [
            'L611-G1-RES-4.jpg',
            'L611-G1-RES-4-parte2.jpg',
            'L611-G1-RES-4-parte3.jpg'
          ]
        },
        {
          ex: '5',
          enunciado: ['L611-G1-EX-5.jpg'],
          resposta: [
            'L611-G1-RES-5.jpg',
            'L611-G1-RES-5-parte2.jpg',
            'L611-G1-RES-5-parte3.jpg',
            'L611-G1-RES-5-parte4.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L611-G1-EX-6.jpg'],
          resposta: [
            'L611-G1-RES-6.jpg',
            'L611-G1-RES-6-parte2.jpg',
            'L611-G1-RES-6-parte3.jpg',
            'L611-G1-RES-6-parte4.jpg',
            'L611-G1-RES-6-parte5.jpg'
          ]
        },
        {
          ex: '7',
          enunciado: ['L611-G1-EX-7.jpg'],
          resposta: [
            'L611-G1-RES-7.jpg',
            'L611-G1-RES-7-parte2.jpg',
            'L611-G1-RES-7-parte3.jpg',
            'L611-G1-RES-7-parte4.jpg',
            'L611-G1-RES-7-parte5.jpg',
            'L611-G1-RES-7-parte6.jpg',
            'L611-G1-RES-7-parte7.jpg',
            'L611-G1-RES-7-parte8.jpg'
          ]
        },
        {
          ex: '8',
          enunciado: ['L611-G1-EX-8.jpg'],
          resposta: [
            'L611-G1-RES-8.jpg',
            'L611-G1-RES-8-parte2.jpg',
            'L611-G1-RES-8-parte3.jpg',
            'L611-G1-RES-8-parte4.jpg',
            'L611-G1-RES-8-parte5.jpg'
          ]
        },
        {
          ex: '9',
          enunciado: ['L611-G1-EX-9.jpg'],
          resposta: [
            'L611-G1-RES-9.jpg',
            'L611-G1-RES-9-parte2.jpg',
            'L611-G1-RES-9-parte3.jpg',
            'L611-G1-RES-9-parte4.jpg',
            'L611-G1-RES-9-parte5.jpg',
            'L611-G1-RES-9-parte6.jpg',
            'L611-G1-RES-9-parte7.jpg',
            'L611-G1-RES-9-parte8.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L611-G1-EX-10.jpg'],
          resposta: [
            'L611-G1-RES-10.jpg',
            'L611-G1-RES-10-parte2.jpg',
            'L611-G1-RES-10-parte3.jpg',
            'L611-G1-RES-10-parte4.jpg'
          ]
        }
      ]
    }
  },
  L612: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L612-G1-EX-1.jpg'],
          resposta: ['L612-G1-RES-1.jpg']
        },
        {
          ex: '2',
          enunciado: ['L612-G1-EX-2.jpg'],
          resposta: ['L612-G1-RES-2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L612-G1-EX-3.jpg'],
          resposta: ['L612-G1-RES-3.jpg']
        },
        {
          ex: '4',
          enunciado: ['L612-G1-EX-4.jpg'],
          resposta: ['L612-G1-RES-4.jpg']
        },
        {
          ex: '5',
          enunciado: ['L612-G1-EX-5.jpg', 'L612-G1-EX-5-parte2.jpg'],
          resposta: ['L612-G1-RES-5.jpg']
        },
        {
          ex: '6',
          enunciado: ['L612-G1-EX-6.jpg'],
          resposta: ['L612-G1-RES-6.jpg']
        },
        {
          ex: '7',
          enunciado: ['L612-G1-EX-7.jpg'],
          resposta: ['L612-G1-RES-7.jpg']
        },
        {
          ex: '8',
          enunciado: ['L612-G1-EX-8.jpg'],
          resposta: ['L612-G1-RES-8.jpg']
        },
        {
          ex: '9',
          enunciado: ['L612-G1-EX-9.jpg'],
          resposta: [
            'L612-G1-RES-9.jpg',
            'L612-G1-RES-9-parte2.jpg',
            'L612-G1-RES-9-parte3.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: ['L612-G1-EX-10.jpg'],
          resposta: ['L612-G1-RES-10.jpg']
        }
      ]
    }
  },
  L613: {
    grupo1: {
      id: '1',
      exercicios: [
        {
          ex: '1',
          enunciado: ['L613-G1-EX-1.jpg'],
          resposta: ['L613-G1-RES-1.jpg', 'L613-G1-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: ['L613-G1-EX-2.jpg'],
          resposta: ['L613-G1-RES-2.jpg', 'L613-G1-RES-2-parte2.jpg']
        },
        {
          ex: '3',
          enunciado: ['L613-G1-EX-3.jpg'],
          resposta: [
            'L613-G1-RES-3.jpg',
            'L613-G1-RES-3-parte2.jpg',
            'L613-G1-RES-3-parte3.jpg'
          ]
        },
        {
          ex: '4',
          enunciado: ['L613-G1-EX-4.jpg'],
          resposta: ['L613-G1-RES-4.jpg', 'L613-G1-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L613-G1-EX-5.jpg'],
          resposta: ['L613-G1-RES-5.jpg', 'L613-G1-RES-5-parte2.jpg']
        },
        {
          ex: '',
          enunciado: ['L613-G1-EX-6.jpg'],
          resposta: ['L613-G1-RES-6.jpg', 'L613-G1-RES-6-parte2.jpg']
        }
      ]
    }
  }
}
