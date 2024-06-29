import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { styles } from './styles';

interface InstructionsModalProps {
  visible: boolean;
  onClose: () => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Instruções do Jogo</Text>
          <Text style={styles.modalText}>
            1. Cada jogador recebe um deck de 7 Pokémon.
          </Text>
          <Text style={styles.modalText}>
            2. A cada rodada, escolha um atributo do seu Pokémon.
          </Text>
          <Text style={styles.modalText}>
            3. Compare o atributo escolhido com o Pokémon do oponente.
          </Text>
          <Text style={styles.modalText}>
            4. Quem tiver o maior valor vence a rodada.
          </Text>
          <Text style={styles.modalText}>
            5. O jogo continua até que todos os Pokémon sejam usados.
          </Text>
          <Text style={styles.modalText}>
            6. Quem vencer mais rodadas ganha o jogo.
          </Text>
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default InstructionsModal;