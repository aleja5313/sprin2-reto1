import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Job = (props) => {


    const StyleTitle = styled.h3`
color:hsl(180, 29%, 50%);`

    const StyleJob = styled.h2`
color:#bebebe;
`

    const StyleDiv = styled.div`
display: inline-block;
padding:  30px;
`

    const StyleFilt = styled.p`

font-size: large;
background-color: hsl(180, 52%, 96%);
font-weight: 700;
padding: 10px;

`

const StyleDivF = styled.div`
float:right;
color: hsl(180, 29%, 50%);
padding: 100px 80px;
`

const StyleImg =styled.img`
width: 180px;
`


    return (
        <Card style={{ margin: ' 0 px 10px 20px 50px '}}>
            <Card.Body>
                <StyleDiv>
                    <StyleImg src={props.img} alt="job" />
                </StyleDiv>
                <StyleDiv>
                    <StyleTitle>{props.empresa}</StyleTitle>
                    <h2>{props.cargo}</h2>
                    <StyleJob>{props.publicacion} • {props.tiempo} • {props.ubicacion}</StyleJob>
                    
                </StyleDiv>
                <StyleDivF>
                        <StyleFilt>{props.filtros}</StyleFilt>
                    </StyleDivF>
            </Card.Body>
        </Card>
    )

}
export default Job