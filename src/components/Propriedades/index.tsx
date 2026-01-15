export interface Materia {
  nomeMateria: string
  id: string
  fundo1: string
  fundo2: string
  licoes: Licao[]
}

interface Licao {
  nomeLicao: string
  linkLicao: string
  id: string
  url: string
  apostila: string
}

export const TodasMaterias: Materia[] = [
  {
    nomeMateria: 'Quimica Geral',
    fundo1: '#DDC3F2',
    fundo2: '#fbf3ff',
    id: '1',
    licoes: [
      {
        linkLicao: './L1',
        id: 'L1',
        nomeLicao: 'L1 - Átomo, Elemento e Símbolo',
        url: 'https://www.youtube.com/embed/wbYp8UOzmXc?si=ZdcYg1tBF-uiGkU',
        apostila:
          'https://drive.google.com/file/d/1DAZxf1i8bXdSqsoePFXI3dgFv1m1GwY9/preview'
      },
      {
        linkLicao: './L2',
        id: 'L2',
        nomeLicao: 'L2 - Substância Simples e Composta',
        url: 'https://www.youtube.com/embed/WpFIaFp8ulA',
        apostila:
          'https://drive.google.com/file/d/1vldarCN1egdZ_8jPJAAplYY8DaVwTXS2/preview'
      },
      {
        linkLicao: './L3',
        id: 'L3',
        nomeLicao: 'L3 - Unidade de massa atômica',
        url: 'https://www.youtube.com/embed/fD3IU9-gx8s',
        apostila:
          'https://drive.google.com/file/d/1aEUfwaOHocEhEAuhvnLoEjHFcYUEROwC/preview'
      },
      {
        linkLicao: './L4',
        id: 'L4',
        nomeLicao: 'L4 - Massa atômica do elemento',
        url: 'https://www.youtube.com/embed/MG-69BhYk30',
        apostila:
          'https://drive.google.com/file/d/1tXfapiyArWVGPmXO9Cy4ApHv2GOaINxZ/preview'
      },
      {
        linkLicao: './L5',
        id: 'L5',
        nomeLicao: 'L5 - Mol',
        url: 'https://www.youtube.com/embed/-OE69XU6SLc',
        apostila:
          'https://drive.google.com/file/d/1ODIai_Zu0y2K-4b24eK3nFeMr5srifQr/preview'
      },
      {
        linkLicao: './L6',
        id: 'L6',
        nomeLicao: 'L6 - Notação Científica',
        url: 'https://www.youtube.com/embed/F9TWi6F8EF0',
        apostila:
          'https://drive.google.com/file/d/1we8AlDj7GXi-yDytj7_VB3oXLLaNLTcf/preview'
      },
      {
        linkLicao: './L7',
        id: 'L7',
        nomeLicao: 'L7 - Constante de Avogadro - (1)',
        url: 'https://www.youtube.com/embed/EiWhgxduw0U',
        apostila:
          'https://drive.google.com/file/d/1qigDPgSOAhkKc49KdrAaN57x_eFga281/preview'
      },
      {
        linkLicao: './L8',
        id: 'L8',
        nomeLicao: 'L8 - Constante de Avogadro - (2)',
        url: 'https://www.youtube.com/embed/fS23y50S9jI',
        apostila:
          'https://drive.google.com/file/d/12wlx7GEDzh7rshBXiNWkRZ98njhnk5KA/preview'
      },
      {
        linkLicao: './L9',
        id: 'L9',
        nomeLicao: 'L9 - Revisão',
        url: 'https://www.youtube.com/embed/abcy0eCzLLc',
        apostila:
          'https://drive.google.com/file/d/1G7iP2bNmJ9-lTZnDf7_odUWfeNFF8M0h/preview'
      },
      {
        linkLicao: './L10',
        id: 'L10',
        nomeLicao: 'L10 - Fórmula Mínima a partir da fórmula molecular',
        url: 'https://www.youtube.com/embed/_JOZNcNq5vU',
        apostila:
          'https://drive.google.com/file/d/1hkkjcprfXXtyk-cuU3-zWmfcFl4OxWKY/preview'
      },
      {
        linkLicao: './L11',
        id: 'L11',
        nomeLicao: 'L11 - Fórmula Molecular Bruta',
        url: 'https://www.youtube.com/embed/GNRO4wVn6Ak',
        apostila:
          'https://drive.google.com/file/d/12ixTU9S8h0LWdLAk8tiBMRGVHUZAhHYq/preview'
      },
      {
        linkLicao: './L12',
        id: 'L12',
        nomeLicao: 'L12 - Fórmulas: Percentual, Mínima e Bruta',
        url: 'https://www.youtube.com/embed/EyE018PkQ_M',
        apostila:
          'https://drive.google.com/file/d/1-PZ-IlJwgzN-0Ow47PG3_fyhmvQJ3TMQ/preview'
      },
      {
        linkLicao: './L13',
        id: 'L13',
        nomeLicao: 'L13 - Revisão Geral',
        url: 'https://www.youtube.com/embed/9RDGGsbFUQ4',
        apostila:
          'https://drive.google.com/file/d/1fUOFiC1xHTBfcAYTBSZoL5aTA23qISxh/preview'
      }
    ]
  },
  {
    nomeMateria: 'Leis Ponderais',
    fundo1: '#86d0fb',
    fundo2: '#ceedff',
    id: '2',

    licoes: [
      {
        linkLicao: './L14',
        id: 'L14',
        nomeLicao: 'L14 - Lei de Lavoisier: Conservação das Massas',
        url: 'https://www.youtube.com/embed/A3f-mcfx-xI',
        apostila:
          'https://drive.google.com/file/d/11VNaadt6icNDy4AjOBua02uoYHPaw7p5/preview'
      },
      {
        linkLicao: './L15',
        id: 'L15',
        nomeLicao: 'L15 - Lei de Proust: Proporções Definidas',
        url: 'https://www.youtube.com/embed/3NndpXXLcjA',
        apostila:
          'https://drive.google.com/file/d/1EasZUzerEx_L9wRRlQtJVS3VxoZvpGBh/preview'
      },
      {
        linkLicao: './L16',
        id: 'L16',
        nomeLicao: 'L16 - Lei de Dalton: Proporções Múltiplas',
        url: 'https://www.youtube.com/embed/fKCuGrnjNo8',
        apostila:
          'https://drive.google.com/file/d/1BpY_5sNL5j_oGnJ5bkdHDtoHG3kLK0Zw/preview'
      },
      {
        linkLicao: './L17',
        id: 'L17',
        nomeLicao: 'L17 - Balanceamento de Equações',
        url: 'https://www.youtube.com/embed/pOwSo801i8E',
        apostila:
          'https://drive.google.com/file/d/1T08ajACvbXp29zBqYH-dA104hs8O-XXQ/preview'
      }
    ]
  },
  {
    nomeMateria: 'Gases',
    fundo1: '#f694f1',
    fundo2: '#f4d5fb',
    id: '3',
    licoes: [
      {
        linkLicao: './L18',
        id: 'L18',
        nomeLicao: 'L18 - Gás Perfeito - Variações de Estado',
        url: 'https://www.youtube.com/embed/a9iWV5vXyRk',
        apostila:
          'https://drive.google.com/file/d/10E1LGGyeumP47yEBZR4ujlLU5AilUcNc/preview'
      },

      {
        linkLicao: './L201',
        id: 'L201',
        nomeLicao: 'L18B - (L201) - Energia Cinética dos Gases',
        url: 'https://www.youtube.com/embed/TIMOS3QNSpI?si=iGCcckaR2aHX2hPv',
        apostila:
          'https://drive.google.com/file/d/1rcxR2BWUi16B_5C-chByZvi4mUrZ9BuR/preview'
      },
      {
        linkLicao: './L19',
        id: 'L19',
        nomeLicao: 'L19 - Leis dos Gases',
        url: 'https://www.youtube.com/embed/7_eg5CAt77Y',
        apostila:
          'https://drive.google.com/file/d/1moF3VPJ51OjrX2tdqRqmKucADeUCxl4m/preview'
      },
      {
        linkLicao: './L20',
        id: 'L20',
        nomeLicao: 'L20 - Equação Geral dos Gases',
        url: 'https://www.youtube.com/embed/uPdq7Xc2DOk',
        apostila:
          'https://drive.google.com/file/d/1_C0cKAiNH5Fv09uV6z3-NwOndH3h5XLd/preview'
      },
      {
        linkLicao: './L21',
        id: 'L21',
        nomeLicao: 'L21 - Equação de Clapeyron 1',
        url: 'https://www.youtube.com/embed/QruREm9EMbA',
        apostila:
          'https://drive.google.com/file/d/1s9w2c20LHKBfN6n8tQ_V2Qh6GbG9SMG7/preview'
      },
      {
        linkLicao: './L22',
        id: 'L22',
        nomeLicao: 'L22 - Equação de Clapeyron 2',
        url: 'https://www.youtube.com/embed/22uy_oOGo0U',
        apostila:
          'https://drive.google.com/file/d/1gSyru32QG-yvA9tPsHWx5Kv2X_8Pb9Og/preview'
      },
      {
        linkLicao: './L23',
        id: 'L23',
        nomeLicao: 'L23 - Equação de van der Waals',
        url: 'https://www.youtube.com/embed/G1J_lCgqzQA',
        apostila:
          'https://drive.google.com/file/d/1xP38YE31RIjiWxSbfszeeyB_UK_xL7rZ/preview'
      },
      {
        linkLicao: './L24',
        id: 'L24',
        nomeLicao: 'L24 - Densidade dos Gases',
        url: 'https://www.youtube.com/embed/2ZsvEO72xqE',
        apostila:
          'https://drive.google.com/file/d/1rVNcwSumK_Tn_HbhEmGzEufergWLuSxP/preview'
      },
      {
        linkLicao: './L25',
        id: 'L25',
        nomeLicao: 'L25 - Mistura de Gases - Lei de Dalton',
        url: 'https://www.youtube.com/embed/aotK2ki1rDI',
        apostila:
          'https://drive.google.com/file/d/1NRkXcMEHUfCTF7qFI-6-q8YJkyn_9T7A/preview'
      },
      {
        linkLicao: './L26',
        id: 'L26',
        nomeLicao: 'L26 - Lei de Amagat - Fração Molar',
        url: 'https://www.youtube.com/embed/hom38Z4DF08',
        apostila:
          'https://drive.google.com/file/d/1lrXQ-p3_RBdizbCQvDLfkfr1WbYNgrtX/preview'
      },
      {
        linkLicao: './L27',
        id: 'L27',
        nomeLicao: 'L27 - Difusão e Efusão de Gases',
        url: 'https://www.youtube.com/embed/2lb5b8nWLsA',
        apostila:
          'https://drive.google.com/file/d/1TGDGMcQtEz-1fLtAxS9HmtTuCl9RCUZK/preview'
      },
      {
        linkLicao: './L202',
        id: 'L202',
        nomeLicao: 'L202 - (27 B) - Livre Percurso Médio',
        url: 'https://www.youtube.com/embed/7zF7-Jwaomg?si=cpKONbkGDtrLoAQE',
        apostila:
          'https://drive.google.com/file/d/1IBA9_qNRdbTQJ53klK2tmu7QYcichASq/preview'
      },
      {
        linkLicao: './L28',
        id: 'L28',
        nomeLicao: 'L28 - Lei Volumétrica de Gay-Lussac',
        url: 'https://www.youtube.com/embed/obtECA3v470?si=M1faJCnzxCnd6fAs',
        apostila:
          'https://drive.google.com/file/d/1Qm7iJgUfNbo9cWYI6bdgL8XqnbjOKRzX/preview'
      },
      {
        linkLicao: './L29',
        id: 'L29',
        nomeLicao: 'L29 - Calor Específico',
        url: 'https://www.youtube.com/embed/sbW7PbQOymk',
        apostila:
          'https://drive.google.com/file/d/1q4_DrN8pCOnFOCy1Uocfgfj0ogjyQoqW/preview'
      },
      {
        linkLicao: './L30',
        id: 'L30',
        nomeLicao: 'L30 - Trabalho (W)',
        url: 'https://www.youtube.com/embed/nUgsxhWqGF4',
        apostila:
          'https://drive.google.com/file/d/1V-9R1h2_laF4a0PuZSq9T9_bgz0-D8g4/preview'
      },
      {
        linkLicao: './L31',
        id: 'L31',
        nomeLicao: 'L31 - Processo Adiabático',
        url: 'https://www.youtube.com/embed/xQbExjN70p8',
        apostila:
          'https://drive.google.com/file/d/1jtOF-xkHtcPoPbsKKQAFd-6CVCIFMiTr/preview'
      }
    ]
  },
  {
    nomeMateria: 'Cálculo Estequiométrico',
    fundo1: '#b079f3',
    fundo2: '#c2a3e7',
    id: '4',
    licoes: [
      {
        linkLicao: './L32',
        id: 'L32',
        nomeLicao: 'L32 - N° de moléculas e N° de mols',
        url: 'https://www.youtube.com/embed/yMXRrrlcPhU',
        apostila:
          'https://drive.google.com/file/d/1rRDRyt9XexjySLLA2QB6ReuZ8-G4lBD4/preview'
      },
      {
        linkLicao: './L33',
        id: 'L33',
        nomeLicao: 'L33 - N° de mols e massa',
        url: 'https://www.youtube.com/embed/2xTyBJbs7-s',
        apostila:
          'https://drive.google.com/file/d/1OpHguZz2gFw90o-SHMeneZtZN89DVMTF/preview'
      },
      {
        linkLicao: './L34',
        id: 'L34',
        nomeLicao: 'L34 - N° de mols, massa, volume, n° de moléculas',
        url: 'https://www.youtube.com/embed/19o5SKynvwA',
        apostila:
          'https://drive.google.com/file/d/1fsKNb2IBzS5-rFmP0y-KolL1Ub014kYN/preview'
      },
      {
        linkLicao: './L35',
        id: 'L35',
        nomeLicao: 'L35 - Cálculo da Pureza',
        url: 'https://www.youtube.com/embed/9h9EDpG4PRQ',
        apostila:
          'https://drive.google.com/file/d/1Q2-mtM7NukEWcsGa27vxaYY54EVeKMrK/preview'
      },
      {
        linkLicao: './L36',
        id: 'L36',
        nomeLicao: 'L36 - Rendimento de uma reação',
        url: 'https://www.youtube.com/embed/fot-j070p_c',
        apostila:
          'https://drive.google.com/file/d/1BahHuwxpDQP2ei9OHtFQzzRuyqP6Wnrk/preview'
      },
      {
        linkLicao: './L203',
        id: 'L203',
        nomeLicao: 'L203 - (36 B) - Reações Sucessivas',
        url: 'https://www.youtube.com/embed/mngnIoeTJlA?si=sfOfPLgdJxOympLf',
        apostila:
          'https://drive.google.com/file/d/1hoKdsEi3xgOFvQVUqbqBpLoLrs-mDCEE/preview'
      },
      {
        linkLicao: './L37',
        id: 'L37',
        nomeLicao: 'L37 - Lei Volumétrica de Gay-Lussac',
        url: 'https://www.youtube.com/embed/w99-7750me8',
        apostila:
          'https://drive.google.com/file/d/1eOVrfdUzC4tUeXp23kCQ0D8heLRt0Sxh/preview'
      },
      {
        linkLicao: './L38',
        id: 'L38',
        nomeLicao: 'L38 - Reagente em Excesso',
        url: 'https://www.youtube.com/embed/WKZ2xRlE8ew',
        apostila:
          'https://drive.google.com/file/d/1y3zcasUGwFmAqma31ljSrftPR6AldZOY/preview'
      },
      {
        linkLicao: './L39',
        id: 'L39',
        nomeLicao: 'L39 - Sal Anidro e Sal Hidratado',
        url: 'https://www.youtube.com/embed/iqvBiE6iqYw',
        apostila:
          'https://drive.google.com/file/d/1LWJhJZ0ygTC9L67jb61LboGVeW9FE8Kg/preview'
      },
      {
        linkLicao: './L40',
        id: 'L40',
        nomeLicao: 'L40 - Mistura de Substâncias',
        url: 'https://www.youtube.com/embed/kPGopsoS2xk',
        apostila:
          'https://drive.google.com/file/d/1hJlQMxm7WzN9UaHBuz45-iegkR7OAKpf/preview'
      }
    ]
  },
  {
    nomeMateria: 'Cristalografia',
    fundo1: '#e99403',
    fundo2: '#ffcb9e',
    id: '5',
    licoes: [
      {
        linkLicao: './L41',
        id: 'L41',
        nomeLicao: 'L41 - Sistemas Cristalinos',
        url: 'https://www.youtube.com/embed/bZucepJzv6M',
        apostila:
          'https://drive.google.com/file/d/1uxoRY4rAwUOxyY0awMw3xVaVUJhtgYuu/preview'
      },
      {
        linkLicao: './L42',
        id: 'L42',
        nomeLicao: 'L42 - N° de Coordenação',
        url: 'https://www.youtube.com/embed/EJIkjpay2v0',
        apostila:
          'https://drive.google.com/file/d/18mCJv9Kh8b_PFv5Pl3FwU-VKBKCOg9SN/preview'
      }
    ]
  },
  {
    nomeMateria: 'Termoquímica',
    fundo1: '#fa4a47',
    fundo2: '#ffb0b0',
    id: '6',
    licoes: [
      {
        linkLicao: './L43',
        id: 'L43',
        nomeLicao: 'L43 - Entalpia (H)',
        url: 'https://www.youtube.com/embed/aVRvVGkg7Og',
        apostila:
          'https://drive.google.com/file/d/1UkQsP3XjyB7gV0MPI-uyBGH5WURsXlJU/preview'
      },
      {
        linkLicao: './L204',
        id: 'L204',
        nomeLicao: 'L204 (43 B) - Poder Calorífico dos Alimentos',
        url: 'https://www.youtube.com/embed/MosLjWg0Jjo',
        apostila:
          'https://drive.google.com/file/d/1hmTm2BPp3BqD4BWRGDoKJHHVrCrhWklz/preview'
      },
      {
        linkLicao: './L44',
        id: 'L44',
        nomeLicao: 'L44 - Informar o calor de uma reação',
        url: 'https://www.youtube.com/embed/jt1T-uVHCyk',
        apostila:
          'https://drive.google.com/file/d/1W1tZM_IDAfP1AtOpLg1poU0uM7cMqikR/preview'
      },
      {
        linkLicao: './L45',
        id: 'L45',
        nomeLicao: 'L45 - Reações mais frequentes',
        url: 'https://www.youtube.com/embed/7B-JHb1VO1o',
        apostila:
          'https://drive.google.com/file/d/16NBqR2qGx2fWsKsHSIGz8gPj7WUjxdLz/preview'
      },
      {
        linkLicao: './L46',
        id: 'L46',
        nomeLicao: 'L46 - Lei de Hess',
        url: 'https://www.youtube.com/embed/yrnZMqnaiUo',
        apostila:
          'https://drive.google.com/file/d/13xIDT7jxCaZsN9agnpQnD8E5nz2pnDzq/preview'
      },
      {
        linkLicao: './L47',
        id: 'L47',
        nomeLicao: 'L47 - Energia Reticular',
        url: 'https://www.youtube.com/embed/1JUEG5YsMVc',
        apostila:
          'https://drive.google.com/file/d/1J5uqmyGTBsmAZnNwQZ2tVyLrIwxtZpkV/preview'
      },
      {
        linkLicao: './L48',
        id: 'L48',
        nomeLicao: 'L48 - Energia de Ligação',
        url: 'https://www.youtube.com/embed/64kubKm2mZo',
        apostila:
          'https://drive.google.com/file/d/112Qf1AClE0f_EeYk778e5xIlVWPyPLsX/preview'
      },
      {
        linkLicao: './L49',
        id: 'L49',
        nomeLicao: 'L49 - Lei de Kirchoff',
        url: 'https://www.youtube.com/embed/TmzoEHo4ADI',
        apostila:
          'https://drive.google.com/file/d/1ksALdaCme4OfBM_aG_wch1-Em7w_swSE/preview'
      },
      {
        linkLicao: './L50',
        id: 'L50',
        nomeLicao: 'L50 - Energia Interna e Trabalho',
        url: 'https://www.youtube.com/embed/gvxmia7u1Ww',
        apostila:
          'https://drive.google.com/file/d/1u2oVJZGOq2Bn_Y_aVPEg3R6-KpxILQYp/preview'
      },
      {
        linkLicao: './L51',
        id: 'L51',
        nomeLicao: 'L51 - Entropia (S)',
        url: 'https://www.youtube.com/embed/9Kkzgd4aZqc',
        apostila:
          'https://drive.google.com/file/d/150k9cFR-1d16lgoe9PUjq5nr2e4IKkHB/preview'
      },
      {
        linkLicao: './L52',
        id: 'L52',
        nomeLicao: 'L52 - Entropia do Universo',
        url: 'https://www.youtube.com/embed/7P1Lg-CP7n4',
        apostila:
          'https://drive.google.com/file/d/1c_mnnJSyiXFp2YhYtjSGB4YZdGtoBXdf/preview'
      },
      {
        linkLicao: './L53',
        id: 'L53',
        nomeLicao: 'L53 - Entropia x Temperatura',
        url: 'https://www.youtube.com/embed/1gkEG_hZu8s',
        apostila:
          'https://drive.google.com/file/d/1vMHwCXVFT1UorCp3a68hSuoXv2EWCZYw/preview'
      },
      {
        linkLicao: './L54',
        id: 'L54',
        nomeLicao: 'L54 - Resumo de Entropia',
        url: 'https://www.youtube.com/embed/Y-nmgDn0mz4',
        apostila:
          'https://drive.google.com/file/d/1e5wcCITDgL69WuNVpMCgZ8H1_KFleFZw/preview'
      },
      {
        linkLicao: './L55',
        id: 'L55',
        nomeLicao: 'L55 - Microestados',
        url: 'https://www.youtube.com/embed/Cuc46EHlBEM',
        apostila:
          'https://drive.google.com/file/d/1TrphO0EFrM9CHyiymeMrvHDlF8RQSAwI/preview'
      },
      {
        linkLicao: './L56',
        id: 'L56',
        nomeLicao: 'L56 - Energia Livre de Gibbs',
        url: 'https://www.youtube.com/embed/sW-o5vFZKvM',
        apostila:
          'https://drive.google.com/file/d/1x9kGa-Vmf9oEnM5j8nZ3xxAGqdoL_JUt/preview'
      }
    ]
  },
  {
    nomeMateria: 'Soluções',
    fundo1: '#18c738',
    fundo2: '#baffc0',
    id: '7',
    licoes: [
      {
        linkLicao: './L57',
        id: 'L57',
        nomeLicao: 'L57 - Coeficiente de Solubilidade',
        url: 'https://www.youtube.com/embed/q2qZCYylrbA',
        apostila:
          'https://drive.google.com/file/d/1mNCWNuFzKuB9Bb3-c4X7eoK6XcNguEDX/preview'
      },
      {
        linkLicao: './L58',
        id: 'L58',
        nomeLicao: 'L58 - Variação da solubilidade com a temperatura',
        url: 'https://www.youtube.com/embed/q2qZCYylrbA',
        apostila:
          'https://drive.google.com/file/d/13tQk76uqACTfayxflEM_IV7VBuNw3EDV/preview'
      },
      {
        linkLicao: './L59',
        id: 'L59',
        nomeLicao: 'L59 - Solubilidade dos Gases',
        url: 'https://www.youtube.com/embed/CZ5AqGfVYq8',
        apostila:
          'https://drive.google.com/file/d/1oxnvThYKZdTQnPdmyEtGLpfSBSglZiDA/preview'
      },
      {
        linkLicao: './L60',
        id: 'L60',
        nomeLicao: 'L60 - Concentração Comum',
        url: 'https://www.youtube.com/embed/xnUa14Fgz_0',
        apostila:
          'https://drive.google.com/file/d/1Djcnc8BRLEpw1bItQ5HxpRqcoZQZJClR/preview'
      },
      {
        linkLicao: './L61',
        id: 'L61',
        nomeLicao: 'L61 - Título em Volume',
        url: 'https://www.youtube.com/embed/mlMJegU88f8',
        apostila:
          'https://drive.google.com/file/d/1TXdTeJ9zC4v2CzkF1CdVo98ZvlQpsC62/preview'
      },
      {
        linkLicao: './L62',
        id: 'L62',
        nomeLicao: 'L62 - Grau INPM e Grau Gay-Lussac',
        url: 'https://www.youtube.com/embed/ephb8vm1O5o',
        apostila:
          'https://drive.google.com/file/d/1PXRcM9Ti-FSjD7YwAmpzrxOAlu6Hyq5Y/preview'
      },
      {
        linkLicao: './L63',
        id: 'L63',
        nomeLicao: 'L63 - Molaridade',
        url: 'https://www.youtube.com/embed/Dzt8d4yNqmo',
        apostila:
          'https://drive.google.com/file/d/1wAnr6z6UXwP_tYYFbqI8JXP4-1TK2dXP/preview'
      },
      {
        linkLicao: './L64',
        id: 'L64',
        nomeLicao: 'L64 - Molaridade dos íons',
        url: 'https://www.youtube.com/embed/hzAQYcFZ5u0',
        apostila:
          'https://drive.google.com/file/d/1dW2yyIgu7xUGdPctp27h-_yGIS8neNNo/preview'
      },
      {
        linkLicao: './L65',
        id: 'L65',
        nomeLicao: 'L65 - Revisão',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1STPiDFpaPDWDhcpFLxA_T3p-0PsBt1qK/preview'
      },
      {
        linkLicao: './L66',
        id: 'L66',
        nomeLicao: 'L66 - Mudança de Unidades',
        url: 'https://www.youtube.com/embed/rH_XwILIw1E',
        apostila:
          'https://drive.google.com/file/d/1wbBRcbw-fu425dBczBPDGHL7i6SxVbNR/preview'
      },
      {
        linkLicao: './L67',
        id: 'L67',
        nomeLicao: 'L67 - Molalidade e Fração Molar',
        url: 'https://www.youtube.com/embed/1oQD34XpopI',
        apostila:
          'https://drive.google.com/file/d/1iJz299wCGF1HDmwic4yb-BlkdFeKav9a/preview'
      },
      {
        linkLicao: './L68',
        id: 'L68',
        nomeLicao: 'L68 - Diluição de Soluções',
        url: 'https://www.youtube.com/embed/rjXLxNHZGxA',
        apostila:
          'https://drive.google.com/file/d/1B20RvFmBvXIs1imsCF-herv_OwniZMge/preview'
      },
      {
        linkLicao: './L69',
        id: 'L69',
        nomeLicao: 'L69 - Mistura de soluções',
        url: 'https://www.youtube.com/embed/MWF4t1B2xMQ',
        apostila:
          'https://drive.google.com/file/d/1DifVS3TAbrnQcPfldlUMVDWR9v6Kgbi_/preview'
      },
      {
        linkLicao: './L70',
        id: 'L70',
        nomeLicao: 'L70 - Volumetria 1',
        url: 'https://www.youtube.com/embed/4R2k4qaiyDA',
        apostila:
          'https://drive.google.com/file/d/1NGFGA4a5aRWsRxPkY4AMzFhWsBLG-3Og/preview'
      },
      {
        linkLicao: './L71',
        id: 'L71',
        nomeLicao: 'L71 - Volumetria 2',
        url: 'https://www.youtube.com/embed/VNc1OKfmqSA',
        apostila:
          'https://drive.google.com/file/d/1jND8GCmvl2z1RgSMTppmvCUO3NO2qFAa/preview'
      },
      {
        linkLicao: './L205',
        id: 'L205',
        nomeLicao:
          'L205 - (71-B) Complemento - Volumetria 2 (Cálculo de Pureza)',
        url: 'https://www.youtube.com/embed/VNc1OKfmqSA',
        apostila:
          'https://drive.google.com/file/d/1ITY90WtlKVHdlkW_bkgTagH56XEZ3HiE/preview'
      },
      {
        linkLicao: './L72',
        id: 'L72',
        nomeLicao: 'L72 - Mistura aleatória de dois reagentes',
        url: 'https://www.youtube.com/embed/2TOliHrBtqE',
        apostila:
          'https://drive.google.com/file/d/1Ikru3VVrxRoSEsg1yumV9ABPNQVsi88t/preview'
      },
      {
        linkLicao: './L73',
        id: 'L73',
        nomeLicao: 'L73 - Pressão de Vapor',
        url: 'https://www.youtube.com/embed/Cr7Wm2lUIiA',
        apostila:
          'https://drive.google.com/file/d/1MYuDIF6kvBuQefBv2c600CZ6tVDWah-N/preview'
      },
      {
        linkLicao: './L74',
        id: 'L74',
        nomeLicao: 'L74 - Ponto de ebulição',
        url: 'https://www.youtube.com/embed/u5A-oMidYnE',
        apostila:
          'https://drive.google.com/file/d/1e9U6yJsEBh1CjSFDMwbhqU47upQofGd4/preview'
      },
      {
        linkLicao: './L75',
        id: 'L75',
        nomeLicao: 'L75 - Diagrama de Fases',
        url: 'https://www.youtube.com/embed/u-YDNpIJFB8',
        apostila:
          'https://drive.google.com/file/d/1BBd360ZceYOGdcR0ESEDi4TrM3W5p2jK/preview'
      },
      {
        linkLicao: './L76',
        id: 'L76',
        nomeLicao: 'L76 - Solução ideal: Lei de Raoult',
        url: 'https://www.youtube.com/embed/8LHbSZKiv7E',
        apostila:
          'https://drive.google.com/file/d/1yVfsZfOnHwekOIkcQHSFLv3oIO9AT-ok/preview'
      },
      {
        linkLicao: './L77',
        id: 'L77',
        nomeLicao: 'L77 - Revisão',
        url: 'https://www.youtube.com/embed/zwoMtyi_6eU',
        apostila:
          'https://drive.google.com/file/d/1mLvJGT_O_cgaQIxpb5l6B0f1anYeDl4z/preview'
      }
    ]
  },
  {
    nomeMateria: 'Cinética Química',
    fundo1: '#f38a44',
    fundo2: '#f9d1b1',
    id: '8',
    licoes: [
      {
        linkLicao: './L78',
        id: 'L78',
        nomeLicao: 'L78 - Velocidade Média da Reação',
        url: 'https://www.youtube.com/embed/Ly8ykKd1SSY',
        apostila:
          'https://drive.google.com/file/d/1zh2TNG01-YQvFxlfLXrDNahq5ceD6z1E/preview'
      },
      {
        linkLicao: './L79',
        id: 'L79',
        nomeLicao: 'L79 - Contato - Energia de Ativação',
        url: 'https://www.youtube.com/embed/pUoTIMYZUWA',
        apostila:
          'https://drive.google.com/file/d/1A7P16FoG4_C0pBDGKOS8O9m1aAfRcej3/preview'
      },
      {
        linkLicao: './L80',
        id: 'L80',
        nomeLicao: 'L80 - Superfície de contato e temperatura',
        url: 'https://www.youtube.com/embed/fhg5lS4hCk0',
        apostila:
          'https://drive.google.com/file/d/1WML_pj9eKhTUsGysuHVxwY5y9eFzX3Ug/preview'
      },
      {
        linkLicao: './L81',
        id: 'L81',
        nomeLicao: 'L81 - Lei de Guldberg-Waage',
        url: 'https://www.youtube.com/embed/e-qMLqGNZrQ',
        apostila:
          'https://drive.google.com/file/d/148QffOE3iQmjQRV-BYGd2WPpuBwH2lMv/preview'
      },
      {
        linkLicao: './L82',
        id: 'L82',
        nomeLicao: 'L82 - Casalisador - Enzimas',
        url: 'https://www.youtube.com/embed/lNmwWfZBKSo',
        apostila:
          'https://drive.google.com/file/d/1MPHHJNV0pZki9lxsZBAlmUp2g_hy9PSG/preview'
      },
      {
        linkLicao: './L83',
        id: 'L83',
        nomeLicao: 'L83 - Determinação experimental da Lei da Velocidade',
        url: 'https://www.youtube.com/embed/_uddYQfSVJ0',
        apostila:
          'https://drive.google.com/file/d/1ngNS8E4uL92nbvz82jrznJ9O4RrSx0vc/preview'
      },
      {
        linkLicao: './L84',
        id: 'L84',
        nomeLicao: 'L84 - Equações Integradas Meia Vida',
        url: 'https://www.youtube.com/embed/tqCZBtggoz8',
        apostila:
          'https://drive.google.com/file/d/1KtQBVHcnFw68ssBLGbgv62Eh2A3Fptcx/preview'
      },
      {
        linkLicao: './L85',
        id: 'L85',
        nomeLicao: 'L85 - Determinação da constante de velocidade',
        url: 'https://www.youtube.com/embed/v6GH27WEGDQ',
        apostila:
          'https://drive.google.com/file/d/1R-Rt2r91JFTGmpoVuxvFaqfxL2uVWMZM/preview'
      },
      {
        linkLicao: './L86',
        id: 'L86',
        nomeLicao: 'L86 - Estudo das reações de primeira ordem',
        url: 'https://www.youtube.com/embed/FEApfX3hgxM',
        apostila:
          'https://drive.google.com/file/d/1z9WgdEJkktWH3XuD0puZ2KmU7veCCXe0/preview'
      },
      {
        linkLicao: './L87',
        id: 'L87',
        nomeLicao: 'L87 - Equação de Arrhenius',
        url: 'https://www.youtube.com/embed/_EKBYiaXsSk',
        apostila:
          'https://drive.google.com/file/d/148f5hic25F-sQCAQRzQ52TlBhx8baeQH/preview'
      }
    ]
  },
  {
    nomeMateria: 'Coloides',
    fundo1: '#c1f870',
    fundo2: '#ebffcf',
    id: '9',
    licoes: [
      {
        linkLicao: './L88',
        id: 'L88',
        nomeLicao: 'L88 - Definição - Identificação Efeito Tyndall',
        url: 'https://www.youtube.com/embed/2CodHqunR-g',
        apostila:
          'https://drive.google.com/file/d/1k6x0xL9HEiFOLYDLO2Mv3SOHBV-ceAgr/preview'
      },
      {
        linkLicao: './L89',
        id: 'L89',
        nomeLicao: 'L89 - Propriedades Estabilização Eletroforese',
        url: 'https://www.youtube.com/embed/bGGKFyiqjwI',
        apostila:
          'https://drive.google.com/file/d/1hYwkjNsDAKJXm4uq7qwUDVny4lrN2Ssr/preview'
      }
    ]
  },
  {
    nomeMateria: 'Equilíbrio Molecular',
    fundo1: '#04a99c',
    fundo2: '#97dbd6',
    id: '10',
    licoes: [
      {
        linkLicao: './L90',
        id: 'L90',
        nomeLicao: 'L90 - Constante de Equilíbrio - Avanço de uma reação',
        url: 'https://www.youtube.com/embed/yy-90FpTEzU',
        apostila:
          'https://drive.google.com/file/d/1ARrF63gkS82OQTmInxS8WAKSMptrVyYt/preview'
      },
      {
        linkLicao: './L91',
        id: 'L91',
        nomeLicao: 'L91 - Quociente Reacional',
        url: 'https://www.youtube.com/embed/dxXclkhQMWE',
        apostila:
          'https://drive.google.com/file/d/1-c-Dn5Tlk0GtfVnQLJccNqNXx40WHIMT/preview'
      },
      {
        linkLicao: './L92',
        id: 'L92',
        nomeLicao: 'L92 - Constante de Equilíbrio e Pressão Parcial',
        url: 'https://www.youtube.com/embed/MNQlInF0tg8',
        apostila:
          'https://drive.google.com/file/d/100Ygz2bb__s0xiFMhyatj5Uj9D8TBAD7/preview'
      },
      {
        linkLicao: './L93',
        id: 'L93',
        nomeLicao: 'L93 - Obtenção da Constante',
        url: 'https://www.youtube.com/embed/scH5Wcc2jg4',
        apostila:
          'https://drive.google.com/file/d/1dTjzi6iBp7DyOPiDPNF5hfhwTxydAgAw/preview'
      },
      {
        linkLicao: './L94',
        id: 'L94',
        nomeLicao: 'L94 - Energia Livre de Gibbs',
        url: 'https://www.youtube.com/embed/D0DSpQMDHGM',
        apostila:
          'https://drive.google.com/file/d/1cZgRL0cynze9TK40-HYs5MmvrCSkYrfc/preview'
      },
      {
        linkLicao: './L95',
        id: 'L95',
        nomeLicao: 'L95 - Princípio de Le Chatelier',
        url: 'https://www.youtube.com/embed/sZNZbfIZwn4',
        apostila:
          'https://drive.google.com/file/d/1C164a1FVjceA-ocuXqXSOYAn2bPmzX4z/preview'
      },
      {
        linkLicao: './L96',
        id: 'L96',
        nomeLicao: 'L96 - Catalisador: Variação com Temperatura',
        url: 'https://www.youtube.com/embed/tGj-8fVp_6g',
        apostila:
          'https://drive.google.com/file/d/1SR5KHOJQikNS0QTFiiZUvo7jvf6YiX5C/preview'
      },
      {
        linkLicao: './L97',
        id: 'L97',
        nomeLicao: 'L97 - Gráficos',
        url: 'https://www.youtube.com/embed/IsaJf-eFI2Q',
        apostila:
          'https://drive.google.com/file/d/1JdMrMEhVjKgZmhDdlArKx0thf9NlCuR8/preview'
      },
      {
        linkLicao: './L98',
        id: 'L98',
        nomeLicao: 'L98 - Revisão',
        url: 'https://www.youtube.com/embed/IsaJf-eFI2Q',
        apostila:
          'https://drive.google.com/file/d/1Rb0hUwavcyx5-4zvFFC2GRdMxTCQ7MEy/preview'
      }
    ]
  },
  {
    nomeMateria: 'Equilíbrio Iônico',
    fundo1: '#0772e3',
    fundo2: '#a7d2ff',
    id: '11',
    licoes: [
      {
        linkLicao: './L99',
        id: 'L99',
        nomeLicao: 'L99 - Definição: Constante de Equilíbrio',
        url: 'https://www.youtube.com/embed/zdiPWCw_U5Y',
        apostila:
          'https://drive.google.com/file/d/15iW-zhM__raaly3-q7fwcLd0HmAVg32t/preview'
      },
      {
        linkLicao: './L100',
        id: 'L100',
        nomeLicao: 'L100 - Lei da Diluição de Ostwald',
        url: 'https://www.youtube.com/embed/Au1p5DS4f5s',
        apostila:
          'https://drive.google.com/file/d/1NxyDOpFJV9Wt20de2UhxiZdGfDHwCwjd/preview'
      },
      {
        linkLicao: './L101',
        id: 'L101',
        nomeLicao: 'L101 - Medindo a força de um ácido',
        url: 'https://www.youtube.com/embed/QHz6VeHOACw',
        apostila:
          'https://drive.google.com/file/d/1FCqhDJcutMz-eK3XtILhotVjko8r1Mmx/preview'
      },
      {
        linkLicao: './L102',
        id: 'L102',
        nomeLicao: 'L102 - Autoionização da Água',
        url: 'https://www.youtube.com/embed/QHz6VeHOACw',
        apostila:
          'https://drive.google.com/file/d/1ehHZCyRDZ-SabhRwlyIUhQrf7uOJ6hHA/preview'
      },
      {
        linkLicao: './L103',
        id: 'L103',
        nomeLicao: 'L103 - Variação do Kw com a temperatura',
        url: 'https://www.youtube.com/embed/TN47xIcZs4k',
        apostila:
          'https://drive.google.com/file/d/1KsGR7aI_aU-GRNH865CUK3a0osKP_gvC/preview'
      },
      {
        linkLicao: './L104',
        id: 'L104',
        nomeLicao: 'L104 - Cálculo do pH dado o grau de ionização',
        url: 'ttps://www.youtube.com/embed/U-ArebbxjaY',
        apostila:
          'https://drive.google.com/file/d/1Nt88mZ9IYXnW4_x9QdP475GZ2L_en_Zl/preview'
      },
      {
        linkLicao: './L105',
        id: 'L105',
        nomeLicao: 'L105 - Cálculo do pH (Dibases e Diácidos)',
        url: 'https://www.youtube.com/embed/5eEFsYwsLlU',
        apostila:
          'https://drive.google.com/file/d/16O8LeRdU3XCbxYZbOb-WPbYTLUihejUL/preview'
      },
      {
        linkLicao: './L106',
        id: 'L106',
        nomeLicao: 'L106 - Diluição de um ácido forte',
        url: 'https://www.youtube.com/embed/OByHnLftpHQ',
        apostila:
          'https://drive.google.com/file/d/1E7WnHJooWAxOgMVW55XPgJ2L71bgZewB/preview'
      },
      {
        linkLicao: './L107',
        id: 'L107',
        nomeLicao: 'L107 - Hidrólise de sais',
        url: 'https://www.youtube.com/embed/5Y_NE53QGBM',
        apostila:
          'https://drive.google.com/file/d/1Gcsxr3vcd_dLsprqo01ADcBOJC4a6O2u/preview'
      },
      {
        linkLicao: './L108',
        id: 'L108',
        nomeLicao: 'L108 - Constante de Hidrólise',
        url: 'https://www.youtube.com/embed/_UXQEtBcD14',
        apostila:
          'https://drive.google.com/file/d/17JsBQXBzpRTNrpXdi4A6h7K-jqHzKeKT/preview'
      },
      {
        linkLicao: './L109',
        id: 'L109',
        nomeLicao: 'L109 - Cálculo do pH de um sal<',
        url: 'https://www.youtube.com/embed/EiDG4B-AvxA',
        apostila:
          'https://drive.google.com/file/d/1MDAQ2RybNQ3McOdIS9pS66Rf1ma6k9zY/preview'
      },
      {
        linkLicao: './L110',
        id: 'L110',
        nomeLicao: 'L110 - Solução Tampão',
        url: 'https://www.youtube.com/embed/pUHgXWhs-i0',
        apostila:
          'https://drive.google.com/file/d/1pGNWOaSq16hHi-UVx5OBJ0movvwUYHe_/preview'
      },
      {
        linkLicao: './L111',
        id: 'L111',
        nomeLicao: 'L111 - Adição de ácido ou base a um tampão',
        url: 'https://www.youtube.com/embed/bsvAxPDteaQ',
        apostila:
          'https://drive.google.com/file/d/1xVdQl64fRBAUlMC7Gdq9JlXzAfQM7u9d/preview'
      },
      {
        linkLicao: './L112',
        id: 'L112',
        nomeLicao: 'L112 - Titulação',
        url: 'https://www.youtube.com/embed/ywnDWOpygc4',
        apostila:
          'https://drive.google.com/file/d/1zfj-0S6fkAHXFkDqMXMR8_ceKYNspC_n/preview'
      },
      {
        linkLicao: './L113',
        id: 'L113',
        nomeLicao: 'L113 - Curvas de Titulação',
        url: 'https://www.youtube.com/embed/8CYX_LU-8TI',
        apostila:
          'https://drive.google.com/file/d/1wAVKRakwOlR1NR-GDDFlahzM5ThWhjde/preview'
      },
      {
        linkLicao: './L114',
        id: 'L114',
        nomeLicao: 'L114 - Diagrama Alfa',
        url: 'https://www.youtube.com/embed/vaD_hTmrloQ',
        apostila:
          'https://drive.google.com/file/d/1VX8jrcSehFofRcRin4mRyVlS0KUdWSl1/preview'
      },
      {
        linkLicao: './L115',
        id: 'L115',
        nomeLicao: 'L115 - Produto de Solubilidade',
        url: 'https://www.youtube.com/embed/3b07T4OclaY',
        apostila:
          'https://drive.google.com/file/d/1_M5myDsqjCzzqnkNTd167PXgzRc89CY6/preview'
      },
      {
        linkLicao: './L116',
        id: 'L116',
        nomeLicao: 'L116 - Efeito do Íon Comum',
        url: 'https://www.youtube.com/embed/KDmZzbs_6nQ',
        apostila:
          'https://drive.google.com/file/d/1RARmeCkFGeoQOA6SAQ4eo9sOos5keGGu/preview'
      },
      {
        linkLicao: './L117',
        id: 'L117',
        nomeLicao: 'L117 - Significado de Kps',
        url: 'https://www.youtube.com/embed/sSTEeEk4t3Y',
        apostila:
          'https://drive.google.com/file/d/10EJhgjBekJFBef6ZMZPbxBSRxMAeuKzu/preview'
      },
      {
        linkLicao: './L117B',
        id: 'L117B',
        nomeLicao: 'L117B - Reações com Ácido Sulfídrico',
        url: 'https://www.youtube.com/embed/iojE_NVDbKI',
        apostila:
          'https://drive.google.com/file/d/1MIkhJS0imvKMX4mQFYl3hQjEah9LgAE5/preview'
      }
    ]
  },
  {
    nomeMateria: 'Eletroquímica',
    fundo1: '#e3d107',
    fundo2: '#f5efab',
    id: '12',
    licoes: [
      {
        linkLicao: './L118',
        id: 'L118',
        nomeLicao: 'L118 - Número de Oxidação (Nox)',
        url: 'https://www.youtube.com/embed/zCCIKvryTy8',
        apostila:
          'https://drive.google.com/file/d/1jIGO5feuRUrmxQUrhb0CBLIwsOVZBHg1/preview'
      },
      {
        linkLicao: './L119',
        id: 'L119',
        nomeLicao: 'L119 - Oxidação e Redução: Definição',
        url: 'https://www.youtube.com/embed/gPZGhK_0I1A',
        apostila:
          'https://drive.google.com/file/d/1q3LlA37Y_gWCgTEl8savlAzMP3DAlYHO/preview'
      },
      {
        linkLicao: './L120',
        id: 'L120',
        nomeLicao:
          'L120 - Balanceamento de equações: Método da Variação do Nox',
        url: 'https://www.youtube.com/embed/JSZkuNdCMdk',
        apostila:
          'https://drive.google.com/file/d/1K8h0E6K0xdrRmdGIFpmzEYDX9IvaWg5Z/preview'
      },
      {
        linkLicao: './L121',
        id: 'L121',
        nomeLicao:
          'L121 - Balanceamento de equações: Dois elementos sofrendo oxidação ou redução',
        url: 'https://www.youtube.com/embed/bqNBkMJMAGE',
        apostila:
          'https://drive.google.com/file/d/1fKm3-IhCh8yr87A3LfKX00BzZUPOoRXz/preview'
      },
      {
        linkLicao: './L122',
        id: 'L122',
        nomeLicao: 'L122 - Balanceamento de equações: Método do íon-elétron',
        url: 'https://www.youtube.com/embed/9pJhMiLRFAU',
        apostila:
          'https://drive.google.com/file/d/1paYnfcpDcE_E5wWXKMgrNqffadQJPlLx/preview'
      },
      {
        linkLicao: './L123',
        id: 'L123',
        nomeLicao: 'L123 - Potencial de Oxidação',
        url: 'https://www.youtube.com/embed/aImKuLC1y0M',
        apostila:
          '.https://drive.google.com/file/d/1t8j3xTIsLJVN7FSGBKVTFo7-Jzomoq87/preview'
      },
      {
        linkLicao: './L124',
        id: 'L124',
        nomeLicao: 'L124 - Montando equações de REDOX',
        url: 'https://www.youtube.com/embed/awO9gbo7UpY',
        apostila:
          'https://drive.google.com/file/d/1zGWuzUwlsb3h1EBBZ0C7BpXDnysKXvMq/preview'
      },
      {
        linkLicao: './L125',
        id: 'L125',
        nomeLicao:
          'L125 - Potencial do eletrodo a partir da Variação de Energia Livre',
        url: 'https://www.youtube.com/embed/JJA-BdghXws',
        apostila:
          'https://drive.google.com/file/d/1eJmi46tpDLGcUGMfBxeMR9sjOl_ktJgZ/preview'
      },
      {
        linkLicao: './L126',
        id: 'L126',
        nomeLicao: 'L126 - Aplicações das reações de REDOX',
        url: 'https://www.youtube.com/embed/KM6lASag4g4',
        apostila:
          'https://drive.google.com/file/d/1yQlmCYAba7O1ug-VCFb3qK2-tpnGHaTv/preview'
      },
      {
        linkLicao: './L127',
        id: 'L127',
        nomeLicao: 'L127 - Pilha de Daniell',
        url: 'https://www.youtube.com/embed/omrLATeFCLg',
        apostila:
          'https://drive.google.com/file/d/1WEpPTqrbgt40VcCs-_Qs30cJUONtBHkf/preview'
      },
      {
        linkLicao: './L128',
        id: 'L128',
        nomeLicao: 'L128 - Eletrodo e seu potencial',
        url: 'https://www.youtube.com/embed/8sSzY_3Gsco',
        apostila:
          'https://drive.google.com/file/d/1bQeknujwfeJwSA_bOKnb9wbrxgGj0uff/preview'
      },
      {
        linkLicao: './L129',
        id: 'L129',
        nomeLicao: 'L129 - Equação de Nernst',
        url: 'https://www.youtube.com/embed/VGdhBq6FImM',
        apostila:
          'https://drive.google.com/file/d/1UdJFyFubytwoY5fJo6YEJTb5tFqi8h_W/preview'
      },
      {
        linkLicao: './L130',
        id: 'L130',
        nomeLicao: 'L130 - Constante de Equilíbrio pelo Potencial de Eletrodo',
        url: 'https://www.youtube.com/embed/H1w3jTL5kyE',
        apostila:
          'https://drive.google.com/file/d/1xZI9UYWpu3wML8ardjfkyiCeZWxBv2YD/preview'
      },
      {
        linkLicao: './L131',
        id: 'L131',
        nomeLicao: 'L131 - Kps a partir da solubilidade',
        url: 'https://www.youtube.com/embed/K_oeTYvm1Hw',
        apostila:
          'https://drive.google.com/file/d/1PfwVPCI5I0RqXpGiDp2Ae9EPe2mEEkga/preview'
      },
      {
        linkLicao: './L132',
        id: 'L132',
        nomeLicao: 'L132 - Determinação do pH',
        url: 'https://www.youtube.com/embed/0CwwMpS4JkA',
        apostila:
          'https://drive.google.com/file/d/16VvO95Zc_jYxpiE6h7GuWeeNGW7Q83oh/preview'
      },
      {
        linkLicao: './L133',
        id: 'L133',
        nomeLicao: 'L133 - Pilhas Comerciais',
        url: 'https://www.youtube.com/embed/TJ_GFNgOzuA',
        apostila:
          'https://drive.google.com/file/d/14pMV28RDRwind6_u8cyGQYIIXNWrRsca/preview'
      },
      {
        linkLicao: './L134',
        id: 'L134',
        nomeLicao: 'L134 - Eletrólise',
        url: 'https://www.youtube.com/embed/9wEpyJZR_oE',
        apostila:
          'https://drive.google.com/file/d/1-5rJTxsDD_9TvxUjjWVNop95Ap4P1NqX/preview'
      },
      {
        linkLicao: './L135',
        id: 'L135',
        nomeLicao: 'L135 - Eletrólise em solução aquosa',
        url: 'https://www.youtube.com/embed/mtZt0rb_XqU',
        apostila:
          'https://drive.google.com/file/d/1jEru4n2cNEw7Q-J3Ud8yojd9oOqOPlhc/preview'
      },
      {
        linkLicao: './L136',
        id: 'L136',
        nomeLicao: 'L136 - Aplicação da Eletrólise',
        url: 'https://www.youtube.com/embed/7ra7qzHJrJc',
        apostila:
          'https://drive.google.com/file/d/10_MKVBnHDFXfAJYrXnndQE5-3JWWIjhq/preview'
      },
      {
        linkLicao: './L137',
        id: 'L137',
        nomeLicao: 'L137 - Condutometria',
        url: 'https://www.youtube.com/embed/F7xgxKgGiOg',
        apostila:
          'https://drive.google.com/file/d/1I7dTZJFH6LLUOD7JbJ_nUTehXDfCuamE/preview'
      },
      {
        linkLicao: './L138',
        id: 'L138',
        nomeLicao: 'L138 - Determinação do Potencial no Ponto de Equivalência',
        url: 'https://www.youtube.com/embed/nhw3HESed8M',
        apostila:
          'https://drive.google.com/file/d/1T4v-q2JFQqu7CrrKEyH5kFplcju0A6Gl/preview'
      }
    ]
  },
  {
    nomeMateria: 'Propriedades Coligativas',
    fundo1: '#ff8c57',
    fundo2: '#ffe3d6',
    id: '13',
    licoes: [
      {
        linkLicao: './L139',
        id: 'L139',
        nomeLicao: 'L139 - Definição: Considerações Gerais',
        url: 'https://www.youtube.com/embed/mOuEXHa023o',
        apostila:
          'https://drive.google.com/file/d/1dBh_6W7A2N9v_oGqPODorR5q6cymnFmF/preview'
      },
      {
        linkLicao: './L140',
        id: 'L140',
        nomeLicao: 'L140 - Tonometria e Osmometria',
        url: 'https://www.youtube.com/embed/SJXxjDdq4ss',
        apostila:
          'https://drive.google.com/file/d/1-9jIXPdhs2ZJHfhMvBFH4gMNAKCX5Krp/preview'
      },
      {
        linkLicao: './L141',
        id: 'L141',
        nomeLicao: 'L141 - Cálculos - 1',
        url: 'https://www.youtube.com/embed/vJV2OlW5bak',
        apostila:
          'https://drive.google.com/file/d/1UW5xvHKmlyd7X-h8vDQXkhHwQ9N_E9VO/preview'
      },
      {
        linkLicao: './L142',
        id: 'L142',
        nomeLicao: 'L142 - Cálculos - 2',
        url: 'https://www.youtube.com/embed/jN0b5l_1zmY',
        apostila:
          'https://drive.google.com/file/d/1SsnZYvfXTnZtlmArxGO6NsmR3hVSJKfw/preview'
      },
      {
        linkLicao: './L143',
        id: 'L143',
        nomeLicao: "L143 - N° de partículas em solução: Fator de van't Hoff",
        url: 'https://www.youtube.com/embed/dB6JwcN5YmM',
        apostila:
          'https://drive.google.com/file/d/1L-KHqvUVvXQ5rXUQq07ITDCPir4l6v6e/preview'
      },
      {
        linkLicao: './L144',
        id: 'L144',
        nomeLicao:
          "L144 - Desmontração do fator de van't Hoff - Solução de ácido benzoico em benzeno - Diagrama de fase da solução",
        url: 'https://www.youtube.com/embed/U0WpJ3VxXC4',
        apostila:
          'https://drive.google.com/file/d/1wDrgXG2fduWCN01Wuia81AX1QxROkq9i/preview'
      }
    ]
  },
  {
    nomeMateria: 'Radioatividade',
    fundo1: '#8ce005',
    fundo2: '#e5ffbc',
    id: '14',
    licoes: [
      {
        linkLicao: './L145',
        id: 'L145',
        nomeLicao: 'L145 - Definição: Leis da Radioatividade',
        url: 'https://www.youtube.com/embed/ioXVC76z_Vs',
        apostila:
          'https://drive.google.com/file/d/1P7Kmn1wGhEM4CSdtSo_KZ-bldZ7aY-hj/preview'
      },
      {
        linkLicao: './L146',
        id: 'L146',
        nomeLicao: 'L146 - Séries Radioativas',
        url: 'https://www.youtube.com/embed/adCk4e_NN7k',
        apostila:
          'https://drive.google.com/file/d/1IV6uppU0Bg_RqMo2fc3Qtf6sVLut0QdP/preview'
      },
      {
        linkLicao: './L147',
        id: 'L147',
        nomeLicao: 'L147 - Reação de Transmutação',
        url: 'https://www.youtube.com/embed/AuLr5haHZKo',
        apostila:
          'https://drive.google.com/file/d/1lV8p2BNejFpDmcUtPQpUe9QP3nOv15hx/preview'
      },
      {
        linkLicao: './L148',
        id: 'L148',
        nomeLicao: 'L148 - Efeito do empacotamento',
        url: 'https://www.youtube.com/embed/YdRHuaoCkcE',
        apostila:
          'https://drive.google.com/file/d/1sMF4Hni0ljP_2alNhoEcHV0f77ChHHDf/preview'
      },
      {
        linkLicao: './L149',
        id: 'L149',
        nomeLicao: 'L149 - Constante Radioativa - Vida Média - Meia Vida',
        url: 'https://www.youtube.com/embed/m-YU8bhHawY',
        apostila:
          'https://drive.google.com/file/d/1672sZWP5nhduW4QsD6WRc4rhzr4g-7Im/preview'
      },
      {
        linkLicao: './L150',
        id: 'L150',
        nomeLicao: 'L150 - Datação de fósseis pelo C-14',
        url: 'https://www.youtube.com/embed/6cODMb_fNTg',
        apostila:
          'https://drive.google.com/file/d/1ONrTMAlQuNH7c6JzCozbGc1lfVvXPWHB/preview'
      },
      {
        linkLicao: './L151',
        id: 'L151',
        nomeLicao:
          'L151 - Descoberta do Nêutron - Bomba Atômica - Reator Nuclear',
        url: 'https://www.youtube.com/embed/uFeKi9O5Ik4',
        apostila:
          'https://drive.google.com/file/d/1nPFsQ08-h7xKE99PikjE5oXINZTU82fN/preview'
      },
      {
        linkLicao: './L152',
        id: 'L152',
        nomeLicao:
          'L152 - Desintegração Simples - Reações Paralelas - Reações Consecutivas',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1p03svBByF-2wC2nQePDhaAAuMiLIRa53/preview'
      }
    ]
  },
  {
    nomeMateria: 'Funções Inorgânicas',
    fundo1: '#d9ff2f',
    fundo2: '#f5ffc7',
    id: '15',
    licoes: [
      {
        linkLicao: './L153',
        id: 'L153',
        nomeLicao: 'L153 - Óxidos: Definição',
        url: 'https://www.youtube.com/embed/FkSHAIBORAQ',
        apostila:
          'https://drive.google.com/file/d/10dBf_KaE0h6V2RzsWlGbpF9FePqB0CRH/preview'
      },
      {
        linkLicao: './L154',
        id: 'L154',
        nomeLicao: 'L154 - Óxidos: Nomenclatura',
        url: 'https://www.youtube.com/embed/5Jb4MqwoPrQ',
        apostila:
          'https://drive.google.com/file/d/1KICS8T6TjQXR2Aeo0hWnNaBXfp8rl-sf/preview'
      },
      {
        linkLicao: './L155',
        id: 'L155',
        nomeLicao: 'L155 - Base de Arrhenius',
        url: 'https://www.youtube.com/embed/1cpkR_l0Ds4',
        apostila:
          'https://drive.google.com/file/d/1CGR24SBvDmFpTv8igRv16IeMf7MKwHhA/preview'
      },
      {
        linkLicao: './L156',
        id: 'L156',
        nomeLicao: 'L156 - Ácido de Arrhenius',
        url: 'https://www.youtube.com/embed/EoWwzBv7NZw',
        apostila:
          'https://drive.google.com/file/d/1-SR4YxFqvsGfpYb4JmGYehqAhbgzAFqy/preview'
      },
      {
        linkLicao: './L157',
        id: 'L157',
        nomeLicao:
          'L157 -  Ácido de Arrhenius - Nomenclatura: orto, piro, meta, tio',
        url: 'https://www.youtube.com/embed/sNJbiBpFkx4',
        apostila:
          'https://drive.google.com/file/d/17ORhCktMrDkMAfplaNoVD-AkQd-JKINw/preview'
      },
      {
        linkLicao: './L158',
        id: 'L158',
        nomeLicao: 'L158 - Ácido de Arrhenius - Fórmulas estruturais dos ácido',
        url: 'https://www.youtube.com/embed/JCjloZuPYSQ',
        apostila:
          'https://drive.google.com/file/d/1kCQ0fN1nZ22etpx6B8vHSK9nGuNWCBk8/preview'
      },
      {
        linkLicao: './L159',
        id: 'L159',
        nomeLicao: 'L159 - Classificação dos ácidos e bases',
        url: 'https://www.youtube.com/embed/NZ-ZbDKKYuU',
        apostila:
          'https://drive.google.com/file/d/1DEg6Vi5PT-l1nNO64WBihTpbNOzK7BzV/preview'
      },
      {
        linkLicao: './L160',
        id: 'L160',
        nomeLicao: 'L160 - Comparando Ácidos e Bases de Arrhenius',
        url: 'https://www.youtube.com/embed/Yr2DYQethcs',
        apostila:
          'https://drive.google.com/file/d/1QrIavtEBEpoyfnPdvt6fGxSgN3Ovkjvb/preview'
      },
      {
        linkLicao: './L161',
        id: 'L161',
        nomeLicao: 'L161 - Sal: Definição',
        url: 'https://www.youtube.com/embed/u-pyUKbreCg',
        apostila:
          'https://drive.google.com/file/d/1bWxK0shEzkRENWpk3ON6Ccmt8e9vHzL6/preview'
      },
      {
        linkLicao: './L162',
        id: 'L162',
        nomeLicao: 'L162 - Condutividade Elétrica das soluções',
        url: 'https://www.youtube.com/embed/B36KY9JZ_-A',
        apostila:
          'https://drive.google.com/file/d/1SiVe6dZkqzLOs5lXg4R0Y4nNMK8lXXZa/preview'
      }
    ]
  },
  {
    nomeMateria: 'Funções Inorgânicas: Reações',
    fundo1: '#d9ff2f',
    fundo2: '#f5ffd7',
    id: '16',
    licoes: [
      {
        linkLicao: './L163',
        id: 'L163',
        nomeLicao: 'L163 - Reação de Neutralização Completa',
        url: 'https://www.youtube.com/embed/J994tXOBJdU',
        apostila:
          'https://drive.google.com/file/d/1nMyb8IH9x50RoyiMkVXDWh1hr2UB21eI/preview'
      },
      {
        linkLicao: './L164',
        id: 'L164',
        nomeLicao:
          'L164 - Neutralização Parcial - Nomenclatura do Hidrogenossal - Hidroxissais',
        url: 'https://www.youtube.com/embed/8N7eI7rdRyU',
        apostila:
          'https://drive.google.com/file/d/1kjeY0ZoHFSqQ380J2X8Zi6xfOutHlffM/preview'
      },
      {
        linkLicao: './L165',
        id: 'L165',
        nomeLicao: 'L165 - Reação entre Compostos Iônicos',
        url: 'https://www.youtube.com/embed/BscoVHKnOLU',
        apostila:
          'https://drive.google.com/file/d/11MxFxgd42sOkDh-CNbNyl341OSAt9Iph/preview'
      },
      {
        linkLicao: './L166',
        id: 'L166',
        nomeLicao: 'L166 - Reação entre íons formando Compostos Moleculares',
        url: 'https://www.youtube.com/embed/xXFHQL5mTWY',
        apostila:
          'https://drive.google.com/file/d/1-9a_OkzBLm3oxgoweiZbp1G8cTYnoP5A/preview'
      },
      {
        linkLicao: './L167',
        id: 'L167',
        nomeLicao: 'L167 - Reação de um ácido com um metal',
        url: 'https://www.youtube.com/embed/giA_420krmw',
        apostila:
          'https://drive.google.com/file/d/1moCk0tTpi0TQvgW9kzwxM2ozgXWolYhO/preview'
      },
      {
        linkLicao: './L168',
        id: 'L168',
        nomeLicao:
          'L168 - Reações de Deslocamento ou Simples Troca - Reações Importantes',
        url: 'https://www.youtube.com/embed/XXPTjyGnJ6U',
        apostila:
          'https://drive.google.com/file/d/1aWj_zcjzweTi4PVAKfJrTLzOLy4A-W_u/preview'
      },
      {
        linkLicao: './L169',
        id: 'L169',
        nomeLicao:
          'L169 - Reações de Síntese ou Adição - Análise ou Decomposição - Combustão - Reação com amônia',
        url: 'https://www.youtube.com/embed/oGQa8opJv0I  ',
        apostila:
          'https://drive.google.com/file/d/1eU7TpUWMmL2jC-Auok3mJw5kuuf-qB7D/preview'
      }
    ]
  },
  {
    nomeMateria: 'Reações dos Óxidos',
    fundo1: '#d9ff2f',
    fundo2: '#f5ffe7',
    id: '17',
    licoes: [
      {
        linkLicao: './L170',
        id: 'L170',
        nomeLicao: 'L170 - Óxidos Ácidos ou Anidridos de Ácidos',
        url: 'https://www.youtube.com/embed/rKKb8TfT7wk',
        apostila: ''
      },
      {
        linkLicao: './L171',
        id: 'L171',
        nomeLicao: 'L171 - Óxidos Básicos',
        url: 'https://www.youtube.com/embed/YePi_L4S01A',
        apostila:
          'https://drive.google.com/file/d/1Rk03c6m4OsSAGokiaheyeyDcwVLR9l6A/preview'
      },
      {
        linkLicao: './L172',
        id: 'L172',
        nomeLicao: 'L172 - Comparação: Óxidos Ácidos e Óxidos Básicos',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1VkfzLZFkIcol6PjvXQhIMUAOxuLeG8jX/preview'
      },
      {
        linkLicao: './L173',
        id: 'L173',
        nomeLicao: 'L173 - Peróxidos e Superóxidos',
        url: 'https://www.youtube.com/embed/f_YsYqLGIfE',
        apostila:
          'https://drive.google.com/file/d/1SqckdBoYx-S7O-kwvuCqq-04WaAK381j/preview'
      },
      {
        linkLicao: './L174',
        id: 'L174',
        nomeLicao: 'L174 - Óxidos Neutros ou Indiferentes',
        url: 'https://www.youtube.com/embed/JaummsPpuJ0',
        apostila:
          'https://drive.google.com/file/d/1sNf5l3cmR4KGXciyz2qovUaRF2XQdSNm/preview'
      },
      {
        linkLicao: './L175',
        id: 'L175',
        nomeLicao: 'L175 - Óxidos Anfóteros',
        url: 'https://www.youtube.com/embed/iTL5PyqRKHk',
        apostila:
          'https://drive.google.com/file/d/1VM8Kp0JNYpncjpmMoe2o7JoDC3F_E-lb/preview'
      },
      {
        linkLicao: './L176',
        id: 'L176',
        nomeLicao: 'L176 - Óxidos Duplos, Mistos ou Salinos',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1qsjoeVoSN9iXruQGbYP88GvrcJdhg7jU/preview'
      },
      {
        linkLicao: './L177',
        id: 'L177',
        nomeLicao: 'L177 - Informações Complementares',
        url: 'https://www.youtube.com/embed/a2pBmB3EajE',
        apostila:
          'https://drive.google.com/file/d/14NBeOblDA1yyLF4omJg145HonpHHgcXH/preview'
      },
      {
        linkLicao: './L178',
        id: 'L178',
        nomeLicao: 'L178 - Revisão',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1Rb0hUwavcyx5-4zvFFC2GRdMxTCQ7MEy/preview'
      }
    ]
  },
  {
    nomeMateria: 'Estrutura Atômica',
    fundo1: '#8550e7',
    fundo2: '#e1d1ff',
    id: '18',
    licoes: [
      {
        linkLicao: './L179',
        id: 'L179',
        nomeLicao: 'L179 - Átomo: Partículas e Número Atômico',
        url: 'https://www.youtube.com/embed/gmNNXK8js_w',
        apostila:
          'https://drive.google.com/file/d/1DoD8ME_E6Oba4d2Vl4aZoguRA6QJqnpT/preview'
      },
      {
        linkLicao: './L180',
        id: 'L180',
        nomeLicao: 'L180 - Carga e Tamanho dos Átomos',
        url: 'https://www.youtube.com/embed/OLGL3ML4ado',
        apostila:
          'https://drive.google.com/file/d/149qjIB_leHOQoAImZrraEnXrRFUKftnK/preview'
      },
      {
        linkLicao: './L181',
        id: 'L181',
        nomeLicao: 'L181 - Elemento Químico: Isótopos, Isóbaros e Isótons',
        url: 'https://www.youtube.com/embed/uhC-O7X-fmw',
        apostila:
          'https://drive.google.com/file/d/17xGvmMAoOkfoNrCp-U-HkvKpAh_wcPNK/preview'
      },
      {
        linkLicao: './L182',
        id: 'L182',
        nomeLicao:
          'L182 - Princípio da Incerteza de Heisenberg - Orbital - Spin - Princípio da Exclusão de Pauli',
        url: 'https://www.youtube.com/embed/nafHsjnWc1k',
        apostila:
          'https://drive.google.com/file/d/1DinBLD2mWj3LsJ0acEa-LWWSh8yBD43o/preview'
      },
      {
        linkLicao: './L183',
        id: 'L183',
        nomeLicao: 'L183 - Energia dos Elétrons: Nível e Subnível',
        url: 'https://www.youtube.com/embed/4LuCjGe_ZW4',
        apostila:
          'https://drive.google.com/file/d/1n-6NXOCVMtQNFVM9Qz8spFUj69Sd2ZK8/preview'
      },
      {
        linkLicao: './L184',
        id: 'L184',
        nomeLicao:
          'L184 - Distribuição dos Elétrons nos subníveis de energia - Regra de Hund',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1s2-emo9EUdTpBa7oQU8G6QYq4J7_HfXS/preview'
      },
      {
        linkLicao: './L185',
        id: 'L185',
        nomeLicao:
          'L185 - Distribuição dos Elétrons em ordem de energia - Ordem de Camadas',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1_APVKMthdQvGznUzYuf5riZ1GEEnZxTQ/preview'
      },
      {
        linkLicao: './L186',
        id: 'L186',
        nomeLicao: 'L186 - Distribuição Eletronica simplificada ',
        url: '',
        apostila:
          'https://drive.google.com/file/d/11OpQKtbkgrVXizD4bnpIqd6L0nqxGDDn/preview'
      },
      {
        linkLicao: './L187',
        id: 'L187',
        nomeLicao: "L187 - Orbitais 's' e 'p' ",
        url: '',
        apostila:
          'https://drive.google.com/file/d/14NlhIRRmtqh4fMUgT9mGerDMWnot-doC/preview'
      },
      {
        linkLicao: './L188',
        id: 'L188',
        nomeLicao: 'L188 - Números Quânticos',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1E__s-YdmhQAeP4qaAFPQBvso-fFSCeMk/preview'
      },
      {
        linkLicao: './L189',
        id: 'L189',
        nomeLicao: 'L189 - Descarga elétrica em Gases: Lei de Dalton',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1gPVDmAVgVnd4nzHAzZK_EiPj-XFgGxie/preview'
      },
      {
        linkLicao: './L190',
        id: 'L190',
        nomeLicao:
          'L190 - Experiência de Thomson (1897) - Ampoola de Goldstein (1886) - Experiência de Milikan (1906) - Experiência de Rutherford',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1jOH4xPUr2yD5R-aBR4JZV8mbW-ww4R-L/preview'
      },
      {
        linkLicao: './L191',
        id: 'L191',
        nomeLicao: 'L191 - Modelo Atômico de Bohr - parte 1',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1zeJk7Pes7wmaocmhzNOGty1yUCixkjJm/preview'
      },
      {
        linkLicao: './L192',
        id: 'L192',
        nomeLicao: 'L192 - Modelo Atômico de Bohr - parte 2',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1e90NYqGEqelZAPnFChIUlpmpiUA80Ple/preview'
      },
      {
        linkLicao: './L193',
        id: 'L193',
        nomeLicao: 'L193 - Modelo Atômico de Bohr - parte 3',
        url: '',
        apostila:
          'https://drive.google.com/file/d/173S3dPtRBzRlv1X3araYhZUObTECYd-0/preview'
      }
    ]
  },
  {
    nomeMateria: 'Isomeria R-S',
    fundo1: '#c6abdf',
    fundo2: '#ece2f5',
    id: '19',
    licoes: [
      {
        linkLicao: './L194',
        id: 'L194',
        nomeLicao: 'L194 - Configuração Absoluta',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1hIuMLHVZtZiNi6KU8PW9-eLDeGmfo3O7/preview'
      },
      {
        linkLicao: './L195',
        id: 'L195',
        nomeLicao: 'L195 - Configuração de Fischer',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1saAx3PhDWD72UxN5bcdtg6hIIVs839ew/preview'
      },
      {
        linkLicao: './L196',
        id: 'L196',
        nomeLicao: 'L196 - Reforçando alguns conceitos',
        url: '',
        apostila:
          'https://drive.google.com/file/d/1Ss6sFPqm47szyUKdqGq559HP6v_eOIM5/preview'
      }
    ]
  },
  {
    nomeMateria: 'REVISÂO ITA/IME',
    fundo1: '#03e045',
    fundo2: '#ccfbda',
    id: '20',
    licoes: [
      {
        linkLicao: './L501',
        id: 'L501',
        nomeLicao: 'L501 - REVISÃO - 1 ',
        url: 'https://www.youtube.com/embed/x1ipG7y8Xfw?si=--LDCS7lLv6yWyj8',
        apostila: ''
      },
      {
        linkLicao: './L502',
        id: 'L502',
        nomeLicao: 'L502 - REVISÃO - 2 ',
        url: 'https://www.youtube.com/embed/MRVugMaiyCE',
        apostila: ''
      },
      {
        linkLicao: './L503',
        id: 'L503',
        nomeLicao: 'L503 - REVISÃO - 3 ',
        url: 'https://www.youtube.com/embed/_YsThPicyAc',
        apostila: ''
      },
      {
        linkLicao: './L504',
        id: 'L504',
        nomeLicao: 'L504 - REVISÃO - 4 ',
        url: 'https://www.youtube.com/embed/AueY7kWm9yg',
        apostila: ''
      },
      {
        linkLicao: './L505',
        id: 'L505',
        nomeLicao: 'L505 - REVISÃO - 5 ',
        url: 'https://www.youtube.com/embed/pvzOX6IFeRQ',
        apostila: ''
      },
      {
        linkLicao: './L506',
        id: 'L506',
        nomeLicao: 'L506 - REVISÃO - 6 ',
        url: 'https://www.youtube.com/embed/pvGI3G4jnN8',
        apostila: ''
      },
      {
        linkLicao: './L507',
        id: 'L507',
        nomeLicao: 'L507 - REVISÃO - 7 ',
        url: 'https://www.youtube.com/embed/2bcI-hEYy0U',
        apostila: ''
      },
      {
        linkLicao: './L508',
        id: 'L508',
        nomeLicao: 'L508 - REVISÃO - 8 ',
        url: 'https://www.youtube.com/embed/81Txmtj6J5g',
        apostila: ''
      },
      {
        linkLicao: './L509',
        id: 'L509',
        nomeLicao: 'L509 - REVISÃO - 9 ',
        url: 'https://www.youtube.com/embed/Ju2tymOA95k',
        apostila: ''
      },
      {
        linkLicao: './L510',
        id: 'L510',
        nomeLicao: 'L510 - REVISÃO - 10 ',
        url: 'https://www.youtube.com/embed/O7ZVDnXM_3A',
        apostila: ''
      },
      {
        linkLicao: './L511',
        id: 'L511',
        nomeLicao: 'L511 - REVISÃO - 11 ',
        url: 'https://www.youtube.com/embed/Mtb2RNu-mqA',
        apostila: ''
      },
      {
        linkLicao: './L512',
        id: 'L512',
        nomeLicao: 'L512 - REVISÃO - 12 ',
        url: 'https://www.youtube.com/embed/aiyMZ8dABFA',
        apostila: ''
      },
      {
        linkLicao: './L513',
        id: 'L513',
        nomeLicao: 'L513 - REVISÃO - 13 ',
        url: 'https://www.youtube.com/embed/D-Lsb4Isg9g',
        apostila: ''
      },
      {
        linkLicao: './L514',
        id: 'L514',
        nomeLicao: 'L514 - REVISÃO - 14 ',
        url: 'https://www.youtube.com/embed/ZrYDzjLVY1A',
        apostila: ''
      },
      {
        linkLicao: './L515',
        id: 'L515',
        nomeLicao: 'L515 - REVISÃO - 15 ',
        url: 'https://www.youtube.com/embed/fa1HWC0kj6s',
        apostila: ''
      },
      {
        linkLicao: './L516',
        id: 'L516',
        nomeLicao: 'L516 - REVISÃO - 16 ',
        url: 'https://www.youtube.com/embed/wDqKRVmAZuA',
        apostila: ''
      },
      {
        linkLicao: './L517',
        id: 'L517',
        nomeLicao: 'L517 - REVISÃO - 17 ',
        url: 'https://www.youtube.com/embed/LWBcU6Exlg8w',
        apostila: ''
      },
      {
        linkLicao: './L518',
        id: 'L518',
        nomeLicao: 'L518 - REVISÃO - 18 ',
        url: 'https://www.youtube.com/embed/93Pu1yG5GqU',
        apostila: ''
      },
      {
        linkLicao: './L519',
        id: 'L519',
        nomeLicao: 'L519 - REVISÃO - 19 ',
        url: 'https://www.youtube.com/embed/4y_NhwPXnXI',
        apostila: ''
      },
      {
        linkLicao: './L520',
        id: 'L520',
        nomeLicao: 'L520 - REVISÃO - 20 ',
        url: 'https://www.youtube.com/embed/I4y6LNX2Rnw',
        apostila: ''
      },
      {
        linkLicao: './L521',
        id: 'L521',
        nomeLicao: 'L521 - REVISÃO - 21 ',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L522',
        id: 'L522',
        nomeLicao: 'L522 - REVISÃO - 22 ',
        url: '',
        apostila: ''
      }
    ]
  },
  {
    nomeMateria: 'Vestibulares',
    fundo1: '#d5e003',
    fundo2: '#fcffc7',
    id: '21',
    licoes: [
      {
        linkLicao: './L601',
        id: 'L601',
        nomeLicao: 'L601 - EsPCEx (2022-2023)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L602',
        id: 'L602',
        nomeLicao: 'L602 - Fuvest - 1° Fase (2022-2023)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L603',
        id: 'L603',
        nomeLicao: 'L603 - Fuvest - 2° Fase (2022-2023)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L604',
        id: 'L604',
        nomeLicao: 'L604 - IME - 1° Fase (2022-2023)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L605',
        id: 'L605',
        nomeLicao: 'L605 - IME - 2° Fase (2022-2023)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L606',
        id: 'L606',
        nomeLicao: 'L606 - ITA - 1° Fase (2022-2023)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L607',
        id: 'L607',
        nomeLicao: 'L607 - ITA - 2° Fase (2022-2023)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L608',
        id: 'L608',
        nomeLicao: 'L608 - IME - 1° Fase (2023-2024)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L609',
        id: 'L609',
        nomeLicao: 'L609 - IME - 2° Fase (2023-2024)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L610',
        id: 'L610',
        nomeLicao: 'L610 - ITA - 1° Fase (2023-2024)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L611',
        id: 'L611',
        nomeLicao: 'L611 - ITA - 2° Fase (2023-2024)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L612',
        id: 'L612',
        nomeLicao: 'L612 - FUVEST - 1° Fase (2023-2024)',
        url: '',
        apostila: ''
      },
      {
        linkLicao: './L613',
        id: 'L613',
        nomeLicao: 'L613 - FUVEST - 2° Fase (2023-2024)',
        url: '',
        apostila: ''
      }
    ]
  }
]
