import styled from 'styled-components'

export const CaseVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* Proporção 16:9 (9 / 16 = 0.5625) */
  height: 0;
  overflow: hidden;
  margin: 10px 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
