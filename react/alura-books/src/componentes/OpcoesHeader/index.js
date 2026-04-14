import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const opcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {

    return (
        <Opcoes>
            { opcoes.map ( (opcao) => ( 
                <Link key={opcao} to={`/${opcao.toLowerCase()}`}>
                    <Opcao>
                        <p>{opcao}</p>
                    </Opcao>
                </Link>
            ))}
        </Opcoes>
    );

}

export default OpcoesHeader;