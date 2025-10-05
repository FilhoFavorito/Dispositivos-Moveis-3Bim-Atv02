import { View, Text, TextInput, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

type CampoLimiteProps = {
    value: number;
    onChange: (valor: number) => void;
};


export default function CampoLimite({value, onChange}: CampoLimiteProps) {
    return(
        <View>
            <Text style={styles.label}>Limite da Conta: R$ {value.toFixed(0)}</Text>
            <Slider
                minimumValue={500}
                maximumValue={10000}
                step={100}
                value={value}
                onValueChange={onChange}
                minimumTrackTintColor="#007AFF"
                thumbTintColor="#007AFF"
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    label: {
    fontSize: 16,
    marginBottom: 5,
  }
});
