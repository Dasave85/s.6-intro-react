import styled from 'styled-components';

export const Param = styled.p`
background: ${(promps) => promps.num === promps.counter ? 'rgba(255, 140, 156, 0.75)' : 'rgba(255, 255, 255, 0.5)'};
text-align: center;
font-size: 15px;
font-weight:bold;
margin: 15px 40px;
padding: 15px;
border: 3px solid #000;
border-radius: 25px;
`
