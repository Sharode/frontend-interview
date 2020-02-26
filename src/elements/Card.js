import styled from 'styled-components'




export const CardWrapper = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
a {
    text-decoration: none
    cursor: pointer;
}

`

export const InnerCard = styled.div`
    
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color: grey;
  padding: 5px 10px;
  margin-bottom: 15px;
  a {
    text-decoration: none;
    cursor: pointer;
    color: grey;
    margin-right: 10px;
    &:hover {
      color: black;
    }
  }
`

export const Author = styled.h2`
    font-size:1.5rem;
    font-weight:500;
`

export const Span = styled.span`
    font-size:1rem;
    display:flex;
    
    
`