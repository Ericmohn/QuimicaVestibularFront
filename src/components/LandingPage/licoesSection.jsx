// src/components/LessonsSection.js
import styled from 'styled-components'

const SectionWrapper = styled.section`
  padding: 40px 20px;
  background: #e9ecef;
  text-align: center;
`

const LicoesSection = () => {
  return (
    <SectionWrapper>
      <h2>Vídeo Aulas e Apostilas</h2>
      <p>
        Nossas vídeo aulas e apostilas são detalhadamente elaboradas para
        explicar cada tema da lição de forma clara e concisa. Com conteúdo
        organizado por tópicos, você pode acompanhar as explicações e revisar
        quando quiser, garantindo que nenhuma dúvida fique para trás.
      </p>
    </SectionWrapper>
  )
}

export default LicoesSection
