import { Modal } from "react-native";
import { Container, CenteredView, ModalText, ModalButtonView, ModalButton, ModalButtonText } from './styles';

type ModalProps = {
    isVisible: boolean;
    onCancel: () => void;
    onDelete: () => void;
}

export function DeleteModal({isVisible, onCancel, onDelete}: ModalProps) {
    return(
        <Modal 
        animationType="fade"
        visible={isVisible}
        transparent>
            <CenteredView>
            <Container>
                <ModalText>Deseja realmente excluir o registro da refeição?</ModalText>
                <ModalButtonView>
                    <ModalButton onPress={onCancel} ButtonType="OUTLINED">
                        <ModalButtonText ButtonType="OUTLINED">
                            Cancelar
                        </ModalButtonText>
                    </ModalButton>
                    <ModalButton onPress={onDelete} ButtonType="DEFAULT">
                        <ModalButtonText ButtonType="DEFAULT">
                            Sim, deletar
                        </ModalButtonText>
                    </ModalButton>
                </ModalButtonView>
            </Container>
            </CenteredView>
        </Modal>
    )
}