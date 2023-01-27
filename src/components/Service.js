import React from 'react'
import styled from 'styled-components'
import serviceData from '../more/ourServices.json'

function Service() {
  return (
    
serviceData.map((service)=>{return(
    <ServiceContainer>
        <img></img>
        <p>{service.nome}</p>
    </ServiceContainer>
    )
})
  )
}

const ServiceContainer = styled.div`

height: 80%;
width: 30%;
border: 2px solid #DC241F;
border-radius: 8px;
text-align: center;
margin: 1rem;

`

export default Service

