import {Container} from './styles';

export function Transactions(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titutlo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td >Desenvolvimento de site </td>
                        <td className="deposity">R$12000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2121</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de site </td>
                        <td className="withdraw">R$12000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2121</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    )
}