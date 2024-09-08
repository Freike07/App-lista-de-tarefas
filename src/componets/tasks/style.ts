import styled from "styled-components/native";

//-----------Base----------------//
export const Algo = styled.View`

`;


export const BaseTarefas = styled.View`
width:392px;
height:130px;
flex-direction: row;
gap:16px;
justify-content:center;
`;


export const CaixaTask = styled.TouchableOpacity`
width: 110px;
height: 115px;
border-radius: 12px;
background-color: #ECE653;

`;

export const TarefasAbertas = styled.Text`
text-align: left;
color: black;
font-size: 18px;
margin-top:2px;
`;

export const TarefasNumber = styled.Text`
text-align: left;
color: black;
font-size: 16px;

`;

export const BaseEmoji = styled.View`
align-items:center;
justify-content:center;
`;
//--------So coloca o emogi-----------//

//--------TaskPosisionOne------------//

export const TaskPosisionOneBase = styled.View`
width: 428px;
height: 526px;
background-color: #ECECEC;
border-radius: 12px;
`;