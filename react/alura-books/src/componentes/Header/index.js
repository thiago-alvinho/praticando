import Logo from '../Logo/index'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AppHeader = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <AppHeader>
            <Link to='/'>
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
      </AppHeader>
    );
}

export default Header;