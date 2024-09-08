import { TextoI,Container, ContaineTwo, ContainerTree, LogoIMG, ImagenStyle, ImageLeft } from "./style";
import { Botton } from "../botton";

export function TextoInicial() {
    return (
   
    <Container>
        <ContainerTree>
            <LogoIMG source={require('../imagens/ListNOW.png')}/>
        </ContainerTree>
        <ImagenStyle source={require('../imagens/imagenLogo.png')}/>
        <TextoI>Organize sua vida com facilidade e eficiência, tudo na palma da sua mão.</TextoI>
        <ContaineTwo>
            <ImageLeft source={require('../imagens/Left 2.png')}/>
        </ContaineTwo>
        <Botton></Botton>
    

    </Container>
    );
}