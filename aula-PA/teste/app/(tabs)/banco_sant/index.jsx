import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

export default function App() {
  const [saldo, setSaldo] = useState(7680000); 
  const [valor, setValor] = useState('');
  const [modalV, setModalV] = useState(false);
  const [modalM, setModalM] = useState('');
  const [Tipotransicao, setTipotransicao] = useState(''); 
  const [valorComTaxa, setValorComTaxa] = useState(0);

  const handleTransicao = () => {
    if (Tipotransicao === 'deposito') {
      setSaldo(saldo + valorComTaxa); 
      setModalM(`Depósito de R$ ${valorComTaxa.toFixed(2)} realizado com sucesso!`);
    } else if (transactionType === 'saque') {
      setSaldo(saldo - valorComTaxa); 
      setModalM(`Saque de R$ ${valorComTaxa.toFixed(2)} realizado com sucesso!`);
    }
    setValor('');
    setModalV(false);
  };

  const Deposito = () => {
    if (!isNaN(parseFloat(valor))) {
      const valorDeposito = parseFloat(valor);
      const valorComDesconto = valorDeposito * 0.97; 
      setValorComTaxa(valorComDesconto);
      setTipotransicao('deposito');
      setModalM(`Será cobrada uma taxa de 3%. Você receberá R$ ${valorComDesconto.toFixed(2)} no saldo. Deseja continuar?`);
      setModalV(true);
    }
  };

  const Saque = () => {
    if (!isNaN(parseFloat(valor)) && saldo >= parseFloat(valor)) {
      const valorSaque = parseFloat(valor);
      const valorComAcrescimo = valorSaque * 1.10; // 10% de taxa
      setValorComTaxa(valorComAcrescimo);
      setTransactionType('saque');
      setModalM(`Será cobrada uma taxa de 10%. O valor total do saque será R$ ${valorComAcrescimo.toFixed(2)}. Deseja continuar?`);
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.background}>
      <Image
        source={{ uri: 'https://cdn.shopify.com/s/files/1/0573/3207/2630/files/CDG8115GenericVisaCardsFA_EF_255x@2x.progressive.jpg?v=1702440009' }}
        style={styles.logo}
        resizeMode="contain"
      />
      
      <Text style={styles.saldoText}>Saldo: R$ {saldo.toFixed(2)}</Text>
   
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={Deposito}>
          <Text style={styles.buttonText}>Depósito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saqueButton]} onPress={Saque}>
          <Text style={styles.buttonText}>Saque</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalV}
        onRequestClose={() => setModalV(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalM}</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleTransicao}
              >
                <Text style={styles.confirmButtonText}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalV(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0d0d0d', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  saldoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  saqueButton: {
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    color: '#0d0d0d',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  confirmButton: {
    backgroundColor: '#0d0d0d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
  },
}); 