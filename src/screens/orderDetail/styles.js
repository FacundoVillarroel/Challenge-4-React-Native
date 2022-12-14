import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.background
  },
  detailsContainer:{
    padding:10,
  },
  text:{
    color:COLORS.primaryText,
    fontSize:16,
    fontFamily:"Anek-Regular",
    paddingVertical:5
  },
  productsContainer:{
    padding:10
  },
  products:{
    color:COLORS.primaryText,
    fontSize:25,
    fontFamily:"Anek-SemiBold",
    alignSelf:"center",
  },
  productContainer:{
    backgroundColor:COLORS.primary,
    margin:10,
    padding:10,
    borderRadius:10
  },
  productTitle:{
    color:COLORS.secondaryText,
    fontSize:20,
    fontFamily:"Anek-Bold",
    alignSelf:"center"
  },
  productDescription:{
    color:COLORS.primaryText,
    fontSize:16,
    fontFamily:"Anek-Regular",
    paddingVertical:10
  },
  productQuantity:{
    color:COLORS.secondaryText,
    fontSize:16,
    fontFamily:"Anek-Bold",
    alignSelf:"center"
  }
})