import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from "../../controllers/apiController";

export default function TestApi() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = () => {
            api.get("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
                console.log(response.data);
                setData(response.data);
            });
        };

        getData();
    }, []);

    return (
        <View style={styles.container}>
            {!!data && (
                <>
                    <Text style={styles.text}>{data.name}</Text>

                    <View style={styles.list}>
                        <Text style={styles.subtitle}>Poderes</Text>
                        <View>
                            {data?.abilities.map((ability) => {
                               return  <Text key={ability.ability.name}>{ability.ability.name}</Text>
                            })}
                        </View>
                    </View>
                </>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 32,
        fontWeight: "bold",
    },
    list: {

    },
    subtitle: {

    }
})