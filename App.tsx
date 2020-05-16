import 'react-native-gesture-handler'; // There should be nothing above it
import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Screens from './app/screens/Index';
import getEnVars from './config';

const { API_URI } = getEnVars();
// configure API URI and Cache
const uri = API_URI;
const cache = new InMemoryCache();
// configure GraphQL client
const client = new ApolloClient({
    uri,
    cache
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Screens />
        </ApolloProvider>
    );
};

export default App;

// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!!</Text>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
