import { Feather } from '@expo/vector-icons'; 
import {TaskPosisionOneBase, Algo, BaseTarefas, CaixaTask, TarefasAbertas, TarefasNumber, BaseEmoji} from './style'

export function Base() {
    return (
    
        
            <BaseTarefas>
                <CaixaTask>
                    <TarefasAbertas>Tarefas em abertas:</TarefasAbertas>
                    <TarefasNumber>0</TarefasNumber>
                    <BaseEmoji>
                    <Feather name='edit-3' size={27} color="black" />                    
                    </BaseEmoji>
                </CaixaTask>

                <CaixaTask>
                    <TarefasAbertas>Tarefas finalizadas:</TarefasAbertas>
                    <TarefasNumber>0</TarefasNumber>
                    <BaseEmoji>
                    <Feather name='check' size={27} color="black" />                    
                    </BaseEmoji>
                </CaixaTask>

                <CaixaTask>
                    <TarefasAbertas>Tarefas totais:</TarefasAbertas>
                    <TarefasNumber>0</TarefasNumber>
                    <BaseEmoji>
                    <Feather name='globe' size={27} color="black" />                    
                    </BaseEmoji>
                </CaixaTask>
            </BaseTarefas>

    

    )
}