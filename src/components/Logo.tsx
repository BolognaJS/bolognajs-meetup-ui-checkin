import * as React from 'react';
import styled from 'styled-components';

import logo from 'src/logo.svg'

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`
const LogoImg = styled.img`
    width: 40px; 
    height: 40px;
`
const LogoText = styled.div`
    margin-left: 10px; 
    display: flex; 
    align-items: center;
`

const Logo = () => (
    <LogoContainer>
        <LogoImg src={logo} />
        <LogoText>BolognaJS</LogoText>
    </LogoContainer>
)

export default Logo