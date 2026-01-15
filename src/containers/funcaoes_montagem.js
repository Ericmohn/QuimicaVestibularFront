function gerarEstruturaDeDados() {
  let estrutura = ''

  for (let i = 27; i <= 28; i++) {
    const linkLicao = `{
      linkLicao: "/L${i}",
      nomeLicao: "L${i} - Título da Lição ${i}"
    },`

    estrutura += linkLicao
  }

  return estrutura
}

// Chamando a função para gerar a estrutura de dados de L29 a L200
const dados = gerarEstruturaDeDados()
console.log(dados)
