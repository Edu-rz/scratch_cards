import { ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";

interface CardProps {
  title: string;
  description?: string;
  emoji?: string;
  favorite: boolean;
}

export default function HomeScreen() {
  const navigation = useNavigation();

  const [data, setData] = useState([
    {
      id: 1,
      title: "Plan for a day",
      description:
        "A mysterious secret is here, from an unforgettable adventure to a crude and terrible experience.",
      emoji: "",
      favorite: false,
      color: "#EB7A53",
    },
    {
      id: 2,
      title: "Mistery gift",
      description:
      "A mysterious secret is here, from an unforgettable adventure to a crude and terrible experience.",
      emoji: "🎁",
      favorite: true,
      color: "#F7D44C",
    },
    {
      id: 3,
      title: "Money or scratch",
      description:
      "A mysterious secret is here, from an unforgettable adventure to a crude and terrible experience.",
      emoji: "🤑💵💰",
      favorite: false,
      color: "#A8D672",
    },
  ]);

  function updateFavoriteStatus(id : number, favorite : boolean) {
    // Create a new array with the updated favorite status
    const updatedData = data.map(item => 
      item.id === id ? { ...item, favorite: favorite } : item
    );
    
    // Update the state with the new array
    setData(updatedData);
  }
  

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.options}></View>

        <Text style={styles.titleContainer}>
          <Text style={styles.title}>My</Text>
          <Text style={styles.title}>Cards</Text>
        </Text>

        <View style={styles.optionsContainer}>
          <Text>
            <Text style={styles.option}>
              <Text style={styles.optionTitle}>All</Text>
              <Text style={styles.optionQuantity}>10</Text>
            </Text>
          </Text>
          <Text>
            <Text style={styles.option}>
              <Text style={styles.optionTitle}>Favorites</Text>
              <Text style={styles.optionQuantity}>3</Text>
            </Text>
          </Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardRow}>
            {data
              .filter((_, index) => index % 2 === 0)
              .map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  emoji={item.emoji}
                  favorite={item.favorite}
                  color={item.color}
                  favoriteHandler={updateFavoriteStatus}
                  />
                ))}
          </View>
          <View style={styles.cardRow}>
            {data
              .filter((_, index) => index % 2 === 1)
              .map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  emoji={item.emoji}
                  favorite={item.favorite}
                  color={item.color}
                  favoriteHandler={updateFavoriteStatus}
                />
              ))}
          </View>
        </View>
      </ScrollView>
      <Text style={styles.createBtnContainer}>
        <View style={styles.createBtn}>
          <Text style={styles.createBtnText}>+</Text>
        </View>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  createBtnText: {
    fontSize: 20,
    fontFamily: "Numans",
    color: "white",
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: 999,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  createBtn: {
    backgroundColor: "black",
    position: "relative",
    left: "-50%",
    width: 70,
    height: 70,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  createBtnContainer: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    display: "flex",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginTop: 60,
    backgroundColor: "black",
    gap: 10,
  },
  cardRow: {
    display: "flex",
    flex: 1,
    backgroundColor: "black",
    gap: 10,
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "black",
    paddingTop: 40,
    gap: 10,
  },
  option: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "white",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  optionTitle: {
    color: "white",
    fontSize: 24,
    marginHorizontal: 10,
    fontFamily: "Numans",
  },
  optionQuantity: {
    width: 24,
    height: 24,
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#262626",
    borderRadius: 999,
    color: "white",
    fontFamily: "Numans",
  },
  options: {
    height: 60,
    backgroundColor: "black",
  },
  titleContainer: {
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  title: {
    fontSize: 56,
    color: "white",
    fontFamily: "Numans",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});