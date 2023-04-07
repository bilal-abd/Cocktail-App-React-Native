import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CocktailsList() {
  const [cocktails, setCocktails] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then(response => response.json())
      .then(data => {
        setCocktails(data.drinks);
      });
  }, []);

  const handleCocktailPress = (cocktail) => {
    navigation.navigate('CocktailDetail', { cocktail });
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={cocktails}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCocktailPress(item)}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.strDrink}</Text>
              <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />
            </View>
          </TouchableOpacity>
        )}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 300,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
  },
});
