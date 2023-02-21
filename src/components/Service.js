


import React from 'react'
import styled from 'styled-components'
import serviceData from '../more/ourServices.json'

function Service() {
  return (
    
serviceData.map((service)=>{return(
    <ServiceContainer>
        <img src={service.image}></img>
        <h4>{service.nome}</h4>
        <div className='text-box'>
        <p>{service.descricao}</p>
        </div>
    </ServiceContainer>
    )
})
  )
}

const ServiceContainer = styled.div`
overflow: hidden;
height: 80%;
width: 30%;
border: 2px solid #DC241F;
border-radius: 8px;
text-align: center;
margin: 1rem;
img{
  width: 3rem;
  margin-top: 2rem;
}

.text-box{
  width: 80%;
  margin: 2rem;
}
`

export default Service

