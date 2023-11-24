import { useContext } from "react";
import { AssembleContext } from "../../Context/AssembleContext";
import { Image, Text, View, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";

export const CardAssemble = () => {
  const { listaHerois } = useContext(AssembleContext);

  return (
    <FlatList
      data={listaHerois}
      // contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", rowGap:10, padding:5 }}
      contentContainerStyle={{paddingTop:20, paddingLeft: 15}}
      numColumns={3}
      renderItem={({ item }) => (
        <View key={item.id} style={styles.card}>
          <Image
            source={{ uri: item.gif }}
            style={{ width: "80%", height: 120, resizeMode: "cover" }}
          />
          <View>
            <Text style={[styles.textCard, { marginTop: 8 }]}>{item.nome}</Text>
          </View>
        </View>
      )}
    />
  );
};
