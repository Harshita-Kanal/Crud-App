import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onViewDetail}>
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
    </TouchableOpacity>
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
    height: 300,
    margin: 20,
    fontFamily: "sansita-bold",
  },

  image: {
    width: "100%",
    height: "60%",
  },

  btn: {
    marginRight: 20,
  },

  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: "sansita-bold",
  },

  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: "sansita-bold",
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    justifyContent: "center",
    height: "25%",
    marginRight: 20,
  },

  details: {
    alignItems: "center",
    height: "15%",
  },

  imageContainer: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
  },
});

export default ProductItem;
