import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, Platform} from 'react-native';
import CampoNome from './CampoNome';
import CampoIdade from './CampoIdade';
import CampoSexo from './CampoSexo';
import CampoLimite from './CampoLimite';
import CampoEstudante from './CampoEstudante';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [limite, setLimite] = useState(2500);
  const [estudante, setEstudante] = useState(false);
  const [erro, setErro] = useState('');
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);

  // Validação automática
  useEffect(() => {
    validarCampos();
  }, [nome, idade, sexo, limite, estudante]);

  function validarCampos() {
    if (!nome.trim()) {
      setErro('Informe o nome.');
      setBotaoDesabilitado(true);
      return;
    }
    const idadeNum = parseInt(idade);
    if (!idade || isNaN(idadeNum) || idadeNum < 18) {
      setErro('Idade inválida (mínimo 18).');
      setBotaoDesabilitado(true);
      return;
    }
    if (!sexo) {
      setErro('Selecione o sexo.');
      setBotaoDesabilitado(true);
      return;
    }
    setErro('');
    setBotaoDesabilitado(false);
  }

  function abrirConta() {
    const mensagem =
        `Nome: ${nome}\n` +
        `Idade: ${idade}\n` +
        `Sexo: ${sexo}\n` +
        `Limite: R$ ${limite.toFixed(2)}\n` +
        `Estudante: ${estudante ? 'Sim' : 'Não'}`;

    if (Platform.OS === 'web') {
        alert('Conta criada com sucesso!\n\n' + mensagem);
    } else {
        Alert.alert('Conta criada com sucesso!', mensagem);
    }
  }

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Abrir Conta Bancária</Text>

    <CampoNome value={nome} onChange={setNome} />

    <CampoIdade value={idade} onChange={setIdade} />

    <CampoSexo value={sexo} onChange={setSexo}/>

    <CampoLimite value={limite} onChange={setLimite}/> 

    <CampoEstudante  value={estudante} onChange={setEstudante} />
    
    {erro ? <Text style={styles.erro}>{erro}</Text> : null}

    <Button
    title="Abrir Conta"
    onPress={abrirConta}
    disabled={botaoDesabilitado}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
