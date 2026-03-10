import Logo from '../Logo/index'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const AppHeader = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <AppHeader>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
      </AppHeader>
    );
}

export default Header;