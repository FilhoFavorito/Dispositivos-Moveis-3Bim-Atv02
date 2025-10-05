import { View, Text, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';

type CampoSexoPrps = {
    value: string;
    onChange: (text: string) => void;

}

export default function CampoSexo({value, onChange}:CampoSexoPrps) {

    return(

        <View>
            <Text style={styles.label}>Sexo:</Text>

            <View style={styles.pickerBox}>
                <Picker
                selectedValue={value}
                onValueChange={onChange}
                >
                <Picker.Item label="Selecione..." value="" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Outro" value="Outro" />
                </Picker>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    label: {
    fontSize: 16,
    marginBottom: 5,
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
  }
});
