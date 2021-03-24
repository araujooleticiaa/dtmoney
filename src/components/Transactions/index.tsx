import {useEffect} from 'react'
import {Container} from './styles';
import {api} from '../../services/api';

export function Transactions(){

    useEffect(() => {
        api.get("transactions")
        .then(response => console.log(response.data))
    },[])

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