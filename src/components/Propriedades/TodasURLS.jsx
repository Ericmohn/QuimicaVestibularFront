import { TodasMaterias } from '.'

export const TodasUrls = []
TodasMaterias.forEach((materia) => {
  materia.licoes.forEach((licao) => {
    TodasUrls.push(licao.url)
  })
})
console.log(TodasUrls)
