import { Feather } from '@expo/vector-icons'; 
import { Container,BottonText } from "./style";


export function Botton(){
    return(
        <Container>
            <BottonText>
                Continuar
            </BottonText>
                <Feather name='arrow-right-circle' size={45} color="black" />
        </Container>
    );
}