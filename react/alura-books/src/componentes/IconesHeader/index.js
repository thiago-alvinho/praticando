import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    display: flex;
    align-items: center;
`
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`
const icones = [sacola, perfil];

function IconesHeader() {
    return (
        <Icones>
            {/* Adicionamos o 'index' aqui nos parâmetros */}
            { icones.map( (icone, index) => (
                // E passamos o 'index' como a prop 'key' no elemento pai <Icone>
                <Icone key={index}>
                    <img src={icone} alt='icone'></img>
                </Icone>
            ))}
        </Icones>
    );
}

export default IconesHeader;