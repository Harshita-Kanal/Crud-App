import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>Rs. {props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          title="To Cart"
          color={Colors.primary}
          onPress={props.onAddToCart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 130,
    margin: 20,
    fontFamily: "sansita-bold",
  },

  btn: {
    marginRight: 20,
    marginVertical: 100,
  },

  title: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: "sansita-bold",
  },

  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: "sansita-bold",
    marginBottom: 10,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    justifyContent: "center",
    marginRight: 20,
  },

  details: {
    alignItems: "center",
  },
});

export default ProductItem;
