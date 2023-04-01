import styled from "styled-components"

export default function Card({image, title, text}) {
    return (
        <CardDiv>
          <img src={image}></img>
          <h2>{title}</h2>
          <p>{text}</p>
        </CardDiv>
    );
}

const CardDiv = styled.div`
    border: solid #9400d3 2px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;

    img{
        width: 100%;
        border-radius: 10px;
    }

    h2{
        text-align: center;
        margin: 0.5em 0;
        color: #9400d3;
    }

    p{
        font-size: 20px;
        text-align: justify;
        width: auto;
    }

    @media screen and (min-width:600px){
        img{
            width: 300px;
        }
    }
`;