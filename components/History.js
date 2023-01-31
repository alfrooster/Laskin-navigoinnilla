import { Text, View, FlatList } from 'react-native';

export default function History({ route }) {
    const calcs = route.params;

    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>History</Text>
            <FlatList
                data={calcs}
                renderItem={({item}) => <Text>{item.key}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}