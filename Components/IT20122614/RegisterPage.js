import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function RegisterPage({ navigation }) {
  const [siteManagerName, setsiteManagerName] = useState("");
  const [address, setaddress] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView style={styles.mainSheet}>
      <Text style={styles.headerMain}>Add Purchase Requisition</Text>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.TextLabel}>Site Manager Name</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={setsiteManagerName}
              value={siteManagerName}
              placeholder="Site Manager Name"
              keyboardType="text"
            />
          </View>
          <View>
            <Text style={styles.TextLabel}>Select Supplier</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={styles.inputField}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View>
            <Text style={styles.TextLabel}>Select Item</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={styles.inputField}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View>
            <Text style={styles.TextLabel}>Delivery Address</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={setaddress}
              value={address}
              placeholder="Delevery Address"
              keyboardType="text"
            />
          </View>
          <View>
            <Text style={styles.TextLabel}>Delivery Date</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={setDate}
              value={date}
              placeholder="Delivery Date"
              keyboardType="date"
            />
          </View>
          <View>
            <Text style={styles.TextLabel}>Quantity</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={setQuantity}
              value={quantity}
              placeholder="Quantity"
              keyboardType="numeric"
            />
          </View>
          <View>
            <Text style={styles.TextLabel}>Unit Type</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={setType}
              value={type}
              placeholder="Unit Type"
              keyboardType="text"
            />
          </View>
          <View>
            <Text style={styles.TextLabel}>Notes</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={setNotes}
              value={notes}
              placeholder="Notes"
              keyboardType="text"
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("pending-req")}
          >
            <Text style={styles.buttonText}>Add Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerMain: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  mainSheet: {
    backgroundColor: "white",
    marginBottom: 60,
  },
  inputField: {
    height: 35,
    marginLeft: 26,
    marginRight: 20,
    backgroundColor: "lightgray",
    padding: 5,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 15,
  },
  TextLabel: {
    marginLeft: 25,
    marginTop: 20,
  },
  button: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 28,
    marginRight: 28,
    marginTop: 60,
    marginBottom: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 15,
  },
});
