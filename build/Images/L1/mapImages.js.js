import { readdirSync, statSync } from 'fs'
import { join } from 'path'

// Diretório onde estão as imagens
const directoryPath =
  'C:/Users/Victor Hugo/Documents/GitHub/Preuniversidade/licoes/1/images'

// Função para listar todas as imagens na pasta
function listImages(directory) {
  const imageFiles = []
  const files = readdirSync(directory)

  files.forEach((file) => {
    const filePath = join(directory, file)
    const fileStat = statSync(filePath)

    if (fileStat.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file)) {
      imageFiles.push(filePath)
    }
  })

  return imageFiles
}

const imagePaths = listImages(directoryPath)

// Crie um objeto JS com as informações das imagens
const imagesObject = imagePaths.map((imagePath, index) => ({
  id: index + 1,
  path: imagePath
  // Outros campos que você desejar adicionar às informações da imagem
}))

console.log(imagesObject)
