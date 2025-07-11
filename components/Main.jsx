import { useEffect, useState } from 'react';
import { CharacterCard } from './CharacterCard';
import { getPersonajes } from '../rickyMorty'
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView } from 'react-native';


export function Main() {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPersonajes();
            setPersonajes(data);
        };

        fetchData();
    }, []);


    if (personajes.length === 0) {
        return (<ActivityIndicator size={54}></ActivityIndicator>)
    }

    return (
        <>
            <SafeAreaView style={{flex:1}}>
                <FlatList data={personajes}
                    renderItem={({ item }) => (<CharacterCard key={item.id} character={item} />)}
                    keyExtractor={(item) => item.id.toString()} />
            </SafeAreaView>
        </>
    );
}