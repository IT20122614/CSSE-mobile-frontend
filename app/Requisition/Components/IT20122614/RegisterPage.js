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
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function RegisterPage({ navigation }) {
  const [siteManagerName, setsiteManagerName] = useState("");
  const [address, setaddress] = useState("");
  const [datep, setDatep] = useState(new Date());
  const [quantity, setQuantity] = useState(0);
  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();
  // const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    // for iOS, add a button that closes the picker

    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView style={styles.mainSheet}>
      <Text style={styles.headerMain}>Add Purchase Requisition</Text>
      <ScrollView>
        <View style={styles.secondSheetStyle}>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={styles.TextLabel}>Site Manager Name</Text>
            </View>
            <View style={[styles.box2]}>
              <TextInput
                style={styles.inputField}
                onChangeText={setsiteManagerName}
                value={siteManagerName}
                placeholder="Site Manager Name"
                keyboardType="text"
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={styles.TextLabel}>Select Supplier</Text>
            </View>
            <View style={[styles.box2]}>
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
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={styles.TextLabel}>Select Item</Text>
            </View>
            <View style={[styles.box2]}>
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
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={styles.TextLabel}>Delivery Address</Text>
            </View>
            <View style={[styles.box2]}>
              <TextInput
                style={styles.inputField}
                onChangeText={setaddress}
                value={address}
                placeholder="Delevery Address"
                keyboardType="text"
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={styles.TextLabel}>Delivery Date</Text>
            </View>
            <View>
              {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}

              {/* <Text>selected: {date.toLocaleString()}</Text> */}
            </View>

            <View style={[styles.box2]}>
              <View>
                <TextInput
                  style={styles.inputField}
                  value={date}
                  placeholder="      dd/mm/yyyy"
                  keyboardType="text"
                  editable={false}
                />

                <View>
                  <MaterialIcons
                    name="date-range"
                    size={24}
                    color="black"
                    style={styles.datePickerIcon}
                    onPress={showDatepicker}
                  />
                </View>
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={styles.TextLabel}>Quantity</Text>
            </View>
            <View style={[styles.box2]}>
              <TextInput
                style={styles.inputField}
                onChangeText={setQuantity}
                value={quantity}
                placeholder="Quantity"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={styles.TextLabel}>Unit Type</Text>
            </View>
            <View style={[styles.box2]}>
              <TextInput
                style={styles.inputField}
                onChangeText={setType}
                value={type}
                placeholder="Unit Type"
                keyboardType="text"
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.box1]}>
              <Text style={styles.TextLabel}>Notes</Text>
            </View>
            <View style={[styles.box2]}>
              <TextInput
                style={styles.inputField}
                onChangeText={setNotes}
                value={notes}
                placeholder="Notes"
                keyboardType="text"
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.box3]}></View>
            <View style={[styles.boxbtn]}>
              <TouchableOpacity
                style={styles.buttonReset}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.buttonText2}>Reset</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.boxbtn]}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("pending-req")}
              >
                <Text style={styles.buttonText}>Add Order</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  secondSheetStyle: {
    backgroundColor: "#f2f0f0",
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 14,
  },
  buttonText2: {
    fontSize: 14,
    color: "white",
  },
  inputField: {
    height: 55,
    marginLeft: 6,
    marginRight: 20,
    backgroundColor: "lightgray",
    borderRadius: 20,
    fontSize: 14,
    paddingLeft: 15,
  },
  TextLabel: {
    marginLeft: 5,
    marginTop: 20,
    height: 35,
  },
  button: {
    backgroundColor: "#fac02d",
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
  buttonReset: {
    backgroundColor: "red",
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 5,
    padding: 8,
    marginLeft: 5,
  },
  box1: {
    width: 150,
    backgroundColor: "#d4d2d2",
    borderRadius: 20,
    height: 55,
  },
  box2: {
    borderRadius: 10,
    width: 200,
  },
  box3: {
    borderRadius: 10,
    width: 60,
  },
  datePickerIcon: {
    marginTop: -40,
    marginLeft: 20,
    paddingRight: 20,
  },
  boxbtn: {
    borderRadius: 10,
    width: 140,
  },
});
