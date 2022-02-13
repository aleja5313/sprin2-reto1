import React from "react";
import styled from "styled-components";


const StyleHeader = styled.img`
width: 100%;
margin: 0;
`

const Header = () => {
    return(
        <div>
            <StyleHeader src='img/bg-header-desktop.svg' alt="head"></StyleHeader>
        </div>
    )
}

export default Header