import { View, Text, TextInput, StyleSheet} from 'react-native';


type CampoNomeProps = {
    value: string;
    onChange: (text: string) => void;
};


export default function CampoNome({ value, onChange }: CampoNomeProps) {
    return (
        <View>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={value}
                onChangeText={onChange}
            />
        </View>
        )
};

const styles = StyleSheet.create({
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
  }
});