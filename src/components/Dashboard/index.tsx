import {Container} from './styles'

import {Sumary} from '../Sumary';
import { Transactions } from '../Transactions';

export function Dashboard(){
    return(
        <Container>
            <Sumary/>
            <Transactions/>
        </Container>
    )
}