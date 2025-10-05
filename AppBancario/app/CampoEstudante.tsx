import { View, Text, StyleSheet, Switch} from 'react-native';

type CampoEstudanteProps = {
    value: boolean;
    onChange: (bool: boolean) => void;

}
export default function CampoEstudante({value, onChange}: CampoEstudanteProps){
    return(
        <View style={styles.switchContainer}>
        <Text style={styles.label}>Estudante?</Text>
        <Switch
            value={value}
            onValueChange={onChange}
        />
        </View>
    )
};

const styles =  StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
});

