import { View, Text, TextInput, StyleSheet} from 'react-native';

type CampoIdadeProps = {
    value: string;
    onChange: (text: string) => void;
};


export default function CampoIdade({ value, onChange }: CampoIdadeProps) {
    return (
        <View>
            <Text style={styles.label}>Idade:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua idade"
                keyboardType="numeric"
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


