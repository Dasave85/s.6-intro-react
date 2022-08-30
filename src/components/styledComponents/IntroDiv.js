import styled from 'styled-components';

export const IntroDiv = styled.div`
    height: 640px;
    width:960px;
    background: #5353f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family:'Courier New', Courier, monospace;

    > h1{
        font-size: 35px;        
    }

    > p{
        margin: 30px 100px 15px 100px;
        font-style: italic;
    }

    > button{
        font-family:'Courier New', Courier, monospace;
        font-weight: bold;
        border-radius: 25px;
        margin: 10px;
        padding: 10px 30px;
        background: white;

        &:hover{
            background: rgb(0, 204, 255);
            padding: 15px 35px;
        }

    }


`