// src/components/InfoSection.js
import styled from 'styled-components'

const InfoWrapper = styled.section`
  padding: 40px 20px;
  background: #f8f9fa;
  text-align: center;
`

const InfoSection = () => {
  return (
    <InfoWrapper>
      <h2>About Our Services</h2>
      <p>
        We offer a variety of services to help you achieve your goals. Whether
        its personal or business, weve got you covered!
      </p>
    </InfoWrapper>
  )
}

export default InfoSection
