import styled from 'styled-components';


export const EscenaDiv = styled.div`
    height: 640px;
    width: 960px;
    background-image: url(${(promps) => (!promps.counter) ? null : promps.img[promps.counter - 1].img});

`