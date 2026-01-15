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
          resposta: [
            'L5-G1-RES-4.jpg',
            'L5-G1-RES-4-parte-2.jpg',
            'L5-G1-RES-4-parte-3.jpg'
          ]
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
          enunciado: 'L8-G2-EX-12.jpg',
          resposta: ['L8-G2-RES-12.jpg', 'L8-G2-RES-12-parte2.jpg']
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
          resposta: ['L9-G1-RES-13.jpg', 'L9-G1-RES-13-parte2.jpg']
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
            'L17-G1-RES-2-parte2.jpg'
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
          resposta: 'L26-G2-RES-1.jpg'
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
          resposta: ['L26-G2-RES-5.jpg', 'L26-G2-RES-5-parte2.jpg']
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
          resposta: [
            'L30-G2-RES-6.jpg',
            'L30-G2-RES-6-parte2.jpg',
            'L30-G2-RES-6-parte3.jpg'
          ]
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
          resposta: ['L31-G2-RES-2.jpg', 'L31-G2-RES-2-parte2.jpg']
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
          resposta: [
            'L31-G2-RES-7.jpg',
            'L31-G2-RES-7-parte2.jpg',
            'L31-G2-RES-7-parte3.jpg'
          ]
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
          resposta: ['L34-G2-RES-7.jpg', 'L34-G2-RES-7-parte2.jpg']
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
          resposta: ['L36-G1-RES-2.jpg', 'L36-G1-RES-2-parte2.jpg']
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
            'L38-G1-RES-1.jpg',
            'L38-G1-RES-1-parte2.jpg',
            'L38-G1-RES-1-parte3.jpg'
          ]
        },
        {
          ex: '3',
          enunciado: 'L38-G1-EX-3.jpg',
          resposta: [
            'L38-G1-RES-3.jpg',
            'L38-G1-RES-3-parte2.jpg',
            'L38-G1-RES-3-parte3.jpg'
          ]
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
          resposta: [
            'L38-G1-RES-5.jpg',
            'L38-G1-RES-5-parte2.jpg',
            'L38-G1-RES-5-parte3.jpg'
          ]
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
          resposta: ['L40-G1-RES-5.jpg', 'L40-G1-RES-5-parte2.jpg']
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
            'L40-G2-RES-2.jpg',
            'L40-G2-RES-2-parte2.jpg',
            'L40-G2-RES-2-parte3.jpg'
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
          enunciado: [
            'L44-G2-EX-6.jpg',
            'L44-G2-EX-6-parte2.jpg',
            'L44-G2-EX-6-parte3.jpg'
          ],
          resposta: ['L44-G2-RES-6.jpg', 'L44-G2-RES-6-parte2.jpg']
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
          resposta: [
            'L45-G3-RES-2.jpg',
            'L45-G3-RES-2-parte2.jpg',
            'L45-G3-RES-2-parte3.jpg'
          ]
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
            'L45-G5-RES-8.jpg',
            'L45-G5-RES-8-parte2.jpg',
            'L45-G5-RES-8-parte3.jpg',
            'L45-G5-RES-8-parte4.jpg'
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
          resposta: ['L46-G2-RES-4.jpg', 'L46-G2-RES-4-parte2.jpg']
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
          resposta: ['L46-G2-RES-10.jpg', 'L46-G2-RES-10-parte2.jpg']
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
          resposta: ['L46-G3-RES-7.jpg', 'L46-G3-RES-7-parte2.jpg']
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
          resposta: ['L48-G2-RES-6.jpg', 'L48-G2-RES-6-parte2.jpg']
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
          resposta: ['L48-G3-RES-1.jpg', 'L48-G3-RES-1-parte2.jpg']
        },
        {
          ex: '2',
          enunciado: 'L48-G3-EX-2.jpg',
          resposta: 'L48-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: ['L48-G3-EX-3.jpg', 'L48-G3-EX-3-parte2.jpg'],
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
          resposta: ['L49-G2-RES-2.jpg', 'L49-G2-RES-2-parte2.jpg']
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
          resposta: [
            'L49-G2-RES-7.jpg',
            'L49-G2-RES-7-parte2.jpg',
            'L49-G2-RES-7-parte3.jpg',
            'L49-G2-RES-7-parte4.jpg'
          ]
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
          resposta: ['L50-G1-RES-4.jpg', 'L50-G1-RES-4-parte2.jpg']
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
          resposta: ['L50-G2-RES-5.jpg', 'L50-G2-RES-5-parte2.jpg']
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
          resposta: ['L52-G1-RES-3.jpg', 'L52-G1-RES-3-parte2.jpg']
        },
        {
          ex: '4',
          enunciado: 'L52-G1-EX-4.jpg',
          resposta: 'L52-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L52-G1-EX-5.jpg',
          resposta: ['L52-G1-RES-5.jpg', 'L52-G1-RES-5-parte2.jpg']
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
          enunciado: ['L52-G1-EX-8.jpg', 'L52-G1-EX-8-parte2.jpg'],
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
            'L52-G2-RES-9.jpg',
            'L52-G2-RES-9-parte2.jpg',
            'L52-G2-RES-9-parte3.jpg',
            'L52-G2-RES-9-parte4.jpg',
            'L52-G2-RES-9-parte5.jpg',
            'L52-G2-RES-9-parte6.jpg'
          ]
        },
        {
          ex: '10',
          enunciado: 'L53-G2-EX-10.jpg',
          resposta: [
            'L52-G2-RES-10.jpg',
            'L52-G2-RES-10-parte2.jpg',
            'L52-G2-RES-10-parte3.jpg'
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
          resposta: ['L54-G1-RES-1.jpg', 'L54-G1-RES-1-parte2.jpg']
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
          resposta: [
            'L56-G3-RES-8.jpg',
            'L56-G3-RES-8-parte2.jpg',
            'L56-G3-RES-8-parte3.jpg'
          ]
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
          resposta: ['L58-G1-RES-4.jpg', 'L58-G1-RES-4-parte2.jpg']
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
          enunciado: ['L58-G2-EX-4.jpg', 'L58-G2-EX-4-parte2.jpg'],
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
          resposta: ['L59-G1-RES-6.jpg', 'L59-G1-RES-6-parte2.jpg']
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
          resposta: ['L59-G3-RES-1.jpg', 'L59-G3-RES-1-parte2.jpg']
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
          resposta: ['L59-G3-RES-4.jpg', 'L59-G3-RES-4-parte2.jpg']
        },
        {
          ex: '5',
          enunciado: ['L59-G3-EX-5.jpg', 'L59-G3-EX-5-parte2.jpg'],
          resposta: [
            'L59-G3-RES-5.jpg',
            'L59-G3-RES-5-parte2.jpg',
            'L59-G3-RES-5-parte3.jpg'
          ]
        },
        {
          ex: '6',
          enunciado: ['L59-G3-EX-6.jpg', 'L59-G3-EX-6-parte2.jpg'],
          resposta: 'L59-G3-RES-6.jpg'
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
          resposta: [
            'L61-G4-RES-4.jpg',
            'L61-G4-RES-4-parte2.jpg',
            'L61-G4-RES-4-parte3.jpg'
          ]
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
          resposta: ['L64-G2-RES-6.jpg', 'L64-G2-RES-6-parte2.jpg']
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
          enunciado: ['L65-G1-EX-2.jpg', 'L65-G1-EX-2.-parte2jpg'],
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
        },
        {
          ex: '21',
          enunciado: 'L65-G4-EX-21.jpg',
          resposta: 'L65-G4-RES-21.jpg'
        },
        {
          ex: '22',
          enunciado: 'L65-G4-EX-22.jpg',
          resposta: [
            'L65-G4-RES-22.jpg',
            'L65-G4-RES-22-parte2.jpg',
            'L65-G4-RES-22-parte3.jpg'
          ]
        },
        {
          ex: '23',
          enunciado: 'L65-G4-EX-23.jpg',
          resposta: ['L65-G4-RES-23.jpg', 'L65-G4-RES-23-parte2.jpg']
        },
        {
          ex: '24',
          enunciado: ['L65-G4-EX-24.jpg', 'L65-G4-EX-24-parte2.jpg'],
          resposta: 'L65-G4-RES-24.jpg'
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
          enunciado: ['L67-G3-EX-2.jpg', 'L67-G3-EX-2-parte2.jpg'],
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
          resposta: ['L67-G3-RES-7.jpg', 'L67-G3-RES-7-parte2.jpg']
        },
        {
          ex: '8',
          enunciado: 'L67-G3-EX-8.jpg',
          resposta: 'L67-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L67-G3-EX-9.jpg',
          resposta: ['L67-G3-RES-9.jpg', 'L67-G3-RES-9-parte2.jpg']
        },
        {
          ex: '10',
          enunciado: 'L67-G3-EX-10.jpg',
          resposta: ['L67-G3-RES-10.jpg', 'L67-G3-RES-10-parte2.jpg']
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
        },
        {
          ex: '13',
          enunciado: 'L67-G3-EX-13.jpg',
          resposta: [
            'L67-G3-RES-13.jpg',
            'L67-G3-RES-13-parte2.jpg',
            'L67-G3-RES-13-parte3.jpg',
            'L67-G3-RES-13-parte4.jpg'
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
          resposta: ['L68-G2-RES-5.jpg', 'L68-G2-RES-5-parte2.jpg']
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
          enunciado: ['L68-G3-EX-8.jpg', 'L68-G3-EX-8-parte2.jpg'],
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
          resposta: ['L69-G3-RES-5.jpg', 'L69-G3-RES-5-parte2.jpg']
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
          resposta: ['L69-G3-RES-8.jpg', 'L69-G3-RES-8-parte2.jpg']
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
          resposta: ['L69-G4-RES-2.jpg', 'L69-G4-RES-2-parte2.jpg']
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
          resposta: 'L71-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L71-G1-EX-4.jpg',
          resposta: 'L71-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L71-G1-EX-5.jpg',
          resposta: 'L71-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L71-G1-EX-6.jpg',
          resposta: 'L71-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L71-G1-EX-7.jpg',
          resposta: 'L71-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L71-G1-EX-8.jpg',
          resposta: 'L71-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L71-G1-EX-9.jpg',
          resposta: 'L71-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L71-G1-EX-10.jpg',
          resposta: 'L71-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L71-G1-EX-11.jpg',
          resposta: 'L71-G1-RES-11.jpg'
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
          resposta: 'L72-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L72-G1-EX-2.jpg',
          resposta: 'L72-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L72-G1-EX-3.jpg',
          resposta: 'L72-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L72-G1-EX-4.jpg',
          resposta: 'L72-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L72-G1-EX-5.jpg',
          resposta: 'L72-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L72-G1-EX-6.jpg',
          resposta: 'L72-G1-RES-6.jpg'
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
          resposta: 'L72-G2-RES-6.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L72-G3-EX-1.jpg',
          resposta: 'L72-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L72-G3-EX-2.jpg',
          resposta: 'L72-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L72-G3-EX-3.jpg',
          resposta: 'L72-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L72-G3-EX-4.jpg',
          resposta: 'L72-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L72-G3-EX-5.jpg',
          resposta: 'L72-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L72-G3-EX-6.jpg',
          resposta: 'L72-G3-RES-6.jpg'
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L72-G4-EX-1.jpg',
          resposta: 'L72-G4-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L72-G4-EX-2.jpg',
          resposta: 'L72-G4-RES-2.jpg'
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
          resposta: 'L73-G1-RES-8.jpg'
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
          resposta: 'L73-G2-RES-7.jpg'
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
          enunciado: 'L73-G3-EX-2.jpg',
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
          enunciado: 'L73-G3-EX-9.jpg',
          resposta: 'L73-G3-RES-9.jpg'
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
          enunciado: 'L74-G1-EX-9.jpg',
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
          enunciado: 'L74-G2-EX-5.jpg',
          resposta: 'L74-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L74-G2-EX-6.jpg',
          resposta: 'L74-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L74-G2-EX-7.jpg',
          resposta: 'L74-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L74-G2-EX-8.jpg',
          resposta: 'L74-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L74-G2-EX-9.jpg',
          resposta: 'L74-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L74-G2-EX-10.jpg',
          resposta: 'L74-G2-RES-10.jpg'
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
          enunciado: 'L74-G3-EX-7.jpg',
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
          enunciado: 'L75-G1-EX-1.jpg',
          resposta: 'L75-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L75-G1-EX-2.jpg',
          resposta: 'L75-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L75-G1-EX-3.jpg',
          resposta: 'L75-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L75-G1-EX-4.jpg',
          resposta: 'L75-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L75-G1-EX-5.jpg',
          resposta: 'L75-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L75-G1-EX-6.jpg',
          resposta: 'L75-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L75-G1-EX-7.jpg',
          resposta: 'L75-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L75-G1-EX-8.jpg',
          resposta: 'L75-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L75-G1-EX-9.jpg',
          resposta: 'L75-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L75-G1-EX-10.jpg',
          resposta: 'L75-G1-RES-10.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L75-G2-EX-1.jpg',
          resposta: 'L75-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L75-G2-EX-2.jpg',
          resposta: 'L75-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L75-G2-EX-3.jpg',
          resposta: 'L75-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L75-G2-EX-4.jpg',
          resposta: 'L75-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L75-G2-EX-5.jpg',
          resposta: 'L75-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L75-G2-EX-6.jpg',
          resposta: 'L75-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L75-G2-EX-7.jpg',
          resposta: 'L75-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L75-G2-EX-8.jpg',
          resposta: 'L75-G2-RES-8.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L75-G3-EX-1.jpg',
          resposta: 'L75-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L75-G3-EX-2.jpg',
          resposta: 'L75-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L75-G3-EX-3.jpg',
          resposta: 'L75-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L75-G3-EX-4.jpg',
          resposta: 'L75-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L75-G3-EX-5.jpg',
          resposta: 'L75-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L75-G3-EX-6.jpg',
          resposta: 'L75-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L75-G3-EX-7.jpg',
          resposta: 'L75-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L75-G3-EX-8.jpg',
          resposta: 'L75-G3-RES-8.jpg'
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L75-G4-EX-1.jpg',
          resposta: 'L75-G4-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L75-G4-EX-2.jpg',
          resposta: 'L75-G4-RES-2.jpg'
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
          enunciado: 'L76-G1-EX-1.jpg',
          resposta: 'L76-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L76-G1-EX-2.jpg',
          resposta: 'L76-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L76-G1-EX-3.jpg',
          resposta: 'L76-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L76-G1-EX-4.jpg',
          resposta: 'L76-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L76-G1-EX-5.jpg',
          resposta: 'L76-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L76-G1-EX-6.jpg',
          resposta: 'L76-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L76-G1-EX-7.jpg',
          resposta: 'L76-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L76-G1-EX-8.jpg',
          resposta: 'L76-G1-RES-8.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L76-G2-EX-1.jpg',
          resposta: 'L76-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L76-G2-EX-2.jpg',
          resposta: 'L76-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L76-G2-EX-3.jpg',
          resposta: 'L76-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L76-G2-EX-4.jpg',
          resposta: 'L76-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L76-G2-EX-5.jpg',
          resposta: 'L76-G2-RES-5.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L76-G3-EX-1.jpg',
          resposta: 'L76-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L76-G3-EX-2.jpg',
          resposta: 'L76-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L76-G3-EX-3.jpg',
          resposta: 'L76-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L76-G3-EX-4.jpg',
          resposta: 'L76-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L76-G3-EX-5.jpg',
          resposta: 'L76-G3-RES-5.jpg'
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
          enunciado: 'L77-G1-EX-1.jpg',
          resposta: 'L77-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L77-G1-EX-2.jpg',
          resposta: 'L77-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L77-G1-EX-3.jpg',
          resposta: 'L77-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L77-G1-EX-4.jpg',
          resposta: 'L77-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L77-G1-EX-5.jpg',
          resposta: 'L77-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L77-G1-EX-6.jpg',
          resposta: 'L77-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L77-G1-EX-7.jpg',
          resposta: 'L77-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L77-G1-EX-8.jpg',
          resposta: 'L77-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L77-G1-EX-9.jpg',
          resposta: 'L77-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L77-G1-EX-10.jpg',
          resposta: 'L77-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L77-G1-EX-11.jpg',
          resposta: 'L77-G1-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L77-G1-EX-12.jpg',
          resposta: 'L77-G1-RES-12.jpg'
        },
        {
          ex: '13',
          enunciado: 'L77-G1-EX-13.jpg',
          resposta: 'L77-G1-RES-13.jpg'
        },
        {
          ex: '14',
          enunciado: 'L77-G1-EX-14.jpg',
          resposta: 'L77-G1-RES-14.jpg'
        },
        {
          ex: '15',
          enunciado: 'L77-G1-EX-15.jpg',
          resposta: 'L77-G1-RES-15.jpg'
        },
        {
          ex: '16',
          enunciado: 'L77-G1-EX-16.jpg',
          resposta: 'L77-G1-RES-16.jpg'
        },
        {
          ex: '17',
          enunciado: 'L77-G1-EX-17.jpg',
          resposta: 'L77-G1-RES-17.jpg'
        },
        {
          ex: '18',
          enunciado: 'L77-G1-EX-18.jpg',
          resposta: 'L77-G1-RES-18.jpg'
        },
        {
          ex: '19',
          enunciado: 'L77-G1-EX-19.jpg',
          resposta: 'L77-G1-RES-19.jpg'
        },
        {
          ex: '20',
          enunciado: 'L77-G1-EX-20.jpg',
          resposta: 'L77-G1-RES-20.jpg'
        },
        {
          ex: '21',
          enunciado: 'L77-G1-EX-21.jpg',
          resposta: 'L77-G1-RES-21.jpg'
        },
        {
          ex: '22',
          enunciado: 'L77-G1-EX-22.jpg',
          resposta: 'L77-G1-RES-22.jpg'
        },
        {
          ex: '23',
          enunciado: 'L77-G1-EX-23.jpg',
          resposta: 'L77-G1-RES-23.jpg'
        },
        {
          ex: '24',
          enunciado: 'L77-G1-EX-24.jpg',
          resposta: 'L77-G1-RES-24.jpg'
        },
        {
          ex: '25',
          enunciado: 'L77-G1-EX-25.jpg',
          resposta: 'L77-G1-RES-25.jpg'
        },
        {
          ex: '26',
          enunciado: 'L77-G1-EX-26.jpg',
          resposta: 'L77-G1-RES-26.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L77-G2-EX-1.jpg',
          resposta: 'L77-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L77-G2-EX-2.jpg',
          resposta: 'L77-G2-RES-2.jpg'
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
          enunciado: 'L78-G1-EX-1.jpg',
          resposta: 'L78-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L78-G1-EX-2.jpg',
          resposta: 'L78-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L78-G1-EX-3.jpg',
          resposta: 'L78-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L78-G1-EX-4.jpg',
          resposta: 'L78-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L78-G1-EX-5.jpg',
          resposta: 'L78-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L78-G1-EX-6.jpg',
          resposta: 'L78-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L78-G2-EX-1.jpg',
          resposta: 'L78-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L78-G2-EX-2.jpg',
          resposta: 'L78-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L78-G2-EX-3.jpg',
          resposta: 'L78-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L78-G2-EX-4.jpg',
          resposta: 'L78-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L78-G2-EX-5.jpg',
          resposta: 'L78-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L78-G2-EX-6.jpg',
          resposta: 'L78-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L78-G2-EX-7.jpg',
          resposta: 'L78-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L78-G2-EX-8.jpg',
          resposta: 'L78-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L78-G2-EX-9.jpg',
          resposta: 'L78-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L78-G2-EX-10.jpg',
          resposta: 'L78-G2-RES-10.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L78-G3-EX-1.jpg',
          resposta: 'L78-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L78-G3-EX-2.jpg',
          resposta: 'L78-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L78-G3-EX-3.jpg',
          resposta: 'L78-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L78-G3-EX-4.jpg',
          resposta: 'L78-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L78-G3-EX-5.jpg',
          resposta: 'L78-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L78-G3-EX-6.jpg',
          resposta: 'L78-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L78-G3-EX-7.jpg',
          resposta: 'L78-G3-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L78-G3-EX-8.jpg',
          resposta: 'L78-G3-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L78-G3-EX-9.jpg',
          resposta: 'L78-G3-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L78-G3-EX-10.jpg',
          resposta: 'L78-G3-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L78-G3-EX-11.jpg',
          resposta: 'L78-G3-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L78-G3-EX-12.jpg',
          resposta: 'L78-G3-RES-12.jpg'
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
          enunciado: 'L79-G1-EX-1.jpg',
          resposta: 'L79-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L79-G1-EX-2.jpg',
          resposta: 'L79-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L79-G1-EX-3.jpg',
          resposta: 'L79-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L79-G1-EX-4.jpg',
          resposta: 'L79-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L79-G1-EX-5.jpg',
          resposta: 'L79-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L79-G1-EX-6.jpg',
          resposta: 'L79-G1-RES-6.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L79-G2-EX-1.jpg',
          resposta: 'L79-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L79-G2-EX-2.jpg',
          resposta: 'L79-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L79-G2-EX-3.jpg',
          resposta: 'L79-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L79-G2-EX-4.jpg',
          resposta: 'L79-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L79-G2-EX-5.jpg',
          resposta: 'L79-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L79-G2-EX-6.jpg',
          resposta: 'L79-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L79-G2-EX-7.jpg',
          resposta: 'L79-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L79-G2-EX-8.jpg',
          resposta: 'L79-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L79-G2-EX-9.jpg',
          resposta: 'L79-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L79-G2-EX-10.jpg',
          resposta: 'L79-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L79-G2-EX-11.jpg',
          resposta: 'L79-G2-RES-11.jpg'
        },
        {
          ex: '12',
          enunciado: 'L79-G2-EX-12.jpg',
          resposta: 'L79-G2-RES-12.jpg'
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
          enunciado: 'L80-G1-EX-1.jpg',
          resposta: 'L80-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L80-G1-EX-2.jpg',
          resposta: 'L80-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L80-G1-EX-3.jpg',
          resposta: 'L80-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L80-G1-EX-4.jpg',
          resposta: 'L80-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L80-G1-EX-5.jpg',
          resposta: 'L80-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L80-G1-EX-6.jpg',
          resposta: 'L80-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L80-G1-EX-7.jpg',
          resposta: 'L80-G1-RES-7.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L80-G2-EX-1.jpg',
          resposta: 'L80-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L80-G2-EX-2.jpg',
          resposta: 'L80-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L80-G2-EX-3.jpg',
          resposta: 'L80-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L80-G2-EX-4.jpg',
          resposta: 'L80-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L80-G2-EX-5.jpg',
          resposta: 'L80-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L80-G2-EX-6.jpg',
          resposta: 'L80-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L80-G2-EX-7.jpg',
          resposta: 'L80-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L80-G2-EX-8.jpg',
          resposta: 'L80-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L80-G2-EX-9.jpg',
          resposta: 'L80-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L80-G2-EX-10.jpg',
          resposta: 'L80-G2-RES-10.jpg'
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
          enunciado: 'L81-G1-EX-1.jpg',
          resposta: 'L81-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L81-G1-EX-2.jpg',
          resposta: 'L81-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L81-G1-EX-3.jpg',
          resposta: 'L81-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L81-G1-EX-4.jpg',
          resposta: 'L81-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L81-G1-EX-5.jpg',
          resposta: 'L81-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L81-G1-EX-6.jpg',
          resposta: 'L81-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L81-G1-EX-7.jpg',
          resposta: 'L81-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L81-G1-EX-8.jpg',
          resposta: 'L81-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L81-G1-EX-9.jpg',
          resposta: 'L81-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L81-G1-EX-10.jpg',
          resposta: 'L81-G1-RES-10.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L81-G2-EX-1.jpg',
          resposta: 'L81-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L81-G2-EX-2.jpg',
          resposta: 'L81-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L81-G2-EX-3.jpg',
          resposta: 'L81-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L81-G2-EX-4.jpg',
          resposta: 'L81-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L81-G2-EX-5.jpg',
          resposta: 'L81-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L81-G2-EX-6.jpg',
          resposta: 'L81-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L81-G2-EX-7.jpg',
          resposta: 'L81-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L81-G2-EX-8.jpg',
          resposta: 'L81-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L81-G2-EX-9.jpg',
          resposta: 'L81-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L81-G2-EX-10.jpg',
          resposta: 'L81-G2-RES-10.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L81-G3-EX-1.jpg',
          resposta: 'L81-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L81-G3-EX-2.jpg',
          resposta: 'L81-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L81-G3-EX-3.jpg',
          resposta: 'L81-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L81-G3-EX-4.jpg',
          resposta: 'L81-G3-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L81-G3-EX-5.jpg',
          resposta: 'L81-G3-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L81-G3-EX-6.jpg',
          resposta: 'L81-G3-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L81-G3-EX-7.jpg',
          resposta: 'L81-G3-RES-7.jpg'
        }
      ]
    },
    grupo4: {
      id: '4',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L81-G4-EX-1.jpg',
          resposta: 'L81-G4-RES-1.jpg'
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
          enunciado: 'L82-G1-EX-1.jpg',
          resposta: 'L82-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L82-G1-EX-2.jpg',
          resposta: 'L82-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L82-G1-EX-3.jpg',
          resposta: 'L82-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L82-G1-EX-4.jpg',
          resposta: 'L82-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L82-G1-EX-5.jpg',
          resposta: 'L82-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L82-G1-EX-6.jpg',
          resposta: 'L82-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L82-G1-EX-7.jpg',
          resposta: 'L82-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L82-G1-EX-8.jpg',
          resposta: 'L82-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L82-G1-EX-9.jpg',
          resposta: 'L82-G1-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L82-G1-EX-10.jpg',
          resposta: 'L82-G1-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L82-G1-EX-11.jpg',
          resposta: 'L82-G1-RES-11.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L82-G2-EX-1.jpg',
          resposta: 'L82-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L82-G2-EX-2.jpg',
          resposta: 'L82-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L82-G2-EX-3.jpg',
          resposta: 'L82-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L82-G2-EX-4.jpg',
          resposta: 'L82-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L82-G2-EX-5.jpg',
          resposta: 'L82-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L82-G2-EX-6.jpg',
          resposta: 'L82-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L82-G2-EX-7.jpg',
          resposta: 'L82-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L82-G2-EX-8.jpg',
          resposta: 'L82-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L82-G2-EX-9.jpg',
          resposta: 'L82-G2-RES-9.jpg'
        },
        {
          ex: '10',
          enunciado: 'L82-G2-EX-10.jpg',
          resposta: 'L82-G2-RES-10.jpg'
        },
        {
          ex: '11',
          enunciado: 'L82-G2-EX-11.jpg',
          resposta: 'L82-G2-RES-11.jpg'
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
          enunciado: 'L83-G1-EX-1.jpg',
          resposta: 'L83-G1-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L83-G1-EX-2.jpg',
          resposta: 'L83-G1-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L83-G1-EX-3.jpg',
          resposta: 'L83-G1-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L83-G1-EX-4.jpg',
          resposta: 'L83-G1-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L83-G1-EX-5.jpg',
          resposta: 'L83-G1-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L83-G1-EX-6.jpg',
          resposta: 'L83-G1-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L83-G1-EX-7.jpg',
          resposta: 'L83-G1-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L83-G1-EX-8.jpg',
          resposta: 'L83-G1-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L83-G1-EX-9.jpg',
          resposta: 'L83-G1-RES-9.jpg'
        }
      ]
    },
    grupo2: {
      id: '2',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L83-G2-EX-1.jpg',
          resposta: 'L83-G2-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L83-G2-EX-2.jpg',
          resposta: 'L83-G2-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L83-G2-EX-3.jpg',
          resposta: 'L83-G2-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L83-G2-EX-4.jpg',
          resposta: 'L83-G2-RES-4.jpg'
        },
        {
          ex: '5',
          enunciado: 'L83-G2-EX-5.jpg',
          resposta: 'L83-G2-RES-5.jpg'
        },
        {
          ex: '6',
          enunciado: 'L83-G2-EX-6.jpg',
          resposta: 'L83-G2-RES-6.jpg'
        },
        {
          ex: '7',
          enunciado: 'L83-G2-EX-7.jpg',
          resposta: 'L83-G2-RES-7.jpg'
        },
        {
          ex: '8',
          enunciado: 'L83-G2-EX-8.jpg',
          resposta: 'L83-G2-RES-8.jpg'
        },
        {
          ex: '9',
          enunciado: 'L83-G2-EX-9.jpg',
          resposta: 'L83-G2-RES-9.jpg'
        }
      ]
    },
    grupo3: {
      id: '3',
      exercicios: [
        {
          ex: '1',
          enunciado: 'L83-G3-EX-1.jpg',
          resposta: 'L83-G3-RES-1.jpg'
        },
        {
          ex: '2',
          enunciado: 'L83-G3-EX-2.jpg',
          resposta: 'L83-G3-RES-2.jpg'
        },
        {
          ex: '3',
          enunciado: 'L83-G3-EX-3.jpg',
          resposta: 'L83-G3-RES-3.jpg'
        },
        {
          ex: '4',
          enunciado: 'L83-G3-EX-4.jpg',
          resposta: 'L83-G3-RES-4.jpg'
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
  }
}
