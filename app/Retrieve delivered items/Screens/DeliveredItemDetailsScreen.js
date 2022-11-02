import React, { useState } from "react";
import { Linking, ScrollView, Text, TextInput, View } from "react-native";
import { Alert, Modal, Pressable } from "react-native";
import Screen from "../Components/common/Screen";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import { Avatar, CheckBox } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DatePicker from "react-native-date-picker";
import AppFormImagePicker from "../Components/common/AppFormImagePicker";
import AppForm from "../Components/common/AppForm";
import * as Yup from "yup";
import AppButton from "../Components/common/AppButton";
import Fontisto from "react-native-vector-icons/Fontisto";
import AppFormField from "../Components/common/AppFormField";
import AppDatePicker from "../Components/common/datePicker";
import routes from "../Navigation/routes";
import SubmitButton from "../Components/common/SubmitBUtton";
import { saveTestReport } from "../api/deliveredItems";
import { sendMessage } from "../api/message";

 
export default function DeliveredItemDetailsScreen({ route, navigation }) {
  const item = route.params.item;
  const [paymetnStatus, setPaymetnStatus] = useState("none");
  const [acceptStatus, setAcceptStatus] = useState("checkbox-blank-outline");
  const [modalVisible, setModalVisible] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [mode, setMode] = useState("date");
  const [date, setDate] = useState("");

  const validationSchema = Yup.object().shape({
    images: Yup.array()
      .min(1, "Please select at least one image")
      .label("Images"),
  });
  const messageValidationSchema = Yup.object().shape({
    description: Yup.string().min(10).required(),
  });
  const getDate = (date) => {
    setDate(date);
    setShowDate(false);
  };
  const handleSubmit = async (values) => {
    const data = {
      date: date,
      image:values.images[0]
    }

    await saveTestReport(data).then(({ data }) => {
    navigation.navigate(routes.PAYMENT, { item });
      
    }).catch((error) => {
      console.log(error)
    })
  };
  const sendMessages = async (message) => {
console.log(message)
    const data = {
      message: message.description,
      sender: 1,
      receiver: 2,
      orderReference: item.details.referenceNumber,
    };

    await sendMessage(data).then(({data}) => {
      navigation.navigate(routes.DELIVERED_ITEMS);
    }).catch(error=>console.log(error))
  }
  return (
    <Screen>
      <ScrollView verticle>
        <View style={styles.details}>
          {/* order data */}
          <View style={styles.data}>
            <View style={styles.detailsContainer}>
              <View>
                <Text style={styles.text}>Reference Number</Text>
                <Text style={styles.text}>Item</Text>
                <Text style={styles.text}>Quantity </Text>
                <Text style={styles.text}>Brand </Text>
                <Text style={styles.text}>Unit Price</Text>
                <Text style={styles.text}>Total Amount </Text>
                <Text style={styles.text}>Delivered Date </Text>
                <Text style={styles.text}>Advice Note </Text>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.text}>
                  : {item.details.referenceNumber}
                </Text>
                <Text style={styles.text}>: {item.details.item} </Text>
                <Text style={styles.text}>: {item.details.quantity} </Text>
                <Text style={styles.text}>: {item.details.brand} </Text>
                <Text style={styles.text}>
                  : Rs.{item.details.unitPrice}.00
                </Text>
                <Text style={styles.text}>
                  : Rs.{item.details.totalAmount}.00{" "}
                </Text>
                <Text style={styles.text}>: {item.details.deliveredDate} </Text>
                <View style={styles.pdf}>
                  <Text style={styles.text}>:</Text>
                  <MaterialCommunityIcons
                    name="download"
                    size={35}
                    color={colors.secondary}
                    style={styles.icon}
                  />
                  <Text
                    style={styles.text}
                    onPress={() => {
                      Linking.openURL(
                        "https://res.cloudinary.com/dxhudoopp/image/upload/v1654277751/xghvluz1z27vkmjxd0fy.pdf"
                      );
                    }}
                  >
                    cement_it.pdf{" "}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* supplier data */}
          <View style={styles.avatar}>
            <Avatar
              size={64}
              rounded
              source={{
                uri: "https://cdn.dribbble.com/users/2364329/screenshots/10481283/media/f013d5235bfcf1753d56cad154f11a67.jpg?compress=1&resize=400x300&vertical=top",
              }}
              containerStyle={{ backgroundColor: "#6733b9", marginBottom: 5 }}
            />
            <Text>SUPPLIER</Text>
            <Text style={styles.text}>{route.params.supplier.name}</Text>
          </View>
        </View>
        {/* image upload */}
        <View style={styles.imageUpload}>
          <View>
            <View style={styles.date}>
              <Text style={styles.text}>Tested Date</Text>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: colors.black,
                  width: 170,
                  height: 25,
                  marginLeft: 50,
                  textAlign: "center",
                  fontSize: 18,
                }}
              >
                {date}
              </Text>
              <MaterialCommunityIcons
                name="calendar-month"
                size={30}
                color={colors.secondary}
                onPress={() => {
                  setShowDate(true);
                }}
              />
              {showDate && <AppDatePicker mode={"date"} getDate={getDate} />}
            </View>
            <View>
              <AppForm
                initialValues={{ images: [] }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
              >
                <Text style={styles.text}>Images of </Text>
                <Text style={styles.text}>Test Report</Text>
                <View style={styles.image}>
                  <Text style={styles.uploadText}>Upload Image</Text>
                  <AppFormImagePicker name={"images"} />
                </View>
                <View style={{ marginTop: -10 }}>
                  <View style={styles.acceptence}>
                    <MaterialCommunityIcons
                      name={acceptStatus}
                      style={
                        acceptStatus === "checkbox-blank-outline"
                          ? { color: colors.primary }
                          : acceptStatus === "checkbox-marked-circle"
                          ? { color: "green" }
                          : acceptStatus === "close-circle"
                          ? { color: "red" }
                          : null
                      }
                      size={35}
                    />
                    <Text
                      style={[styles.text, { fontSize: 18, marginLeft: 5 }]}
                    >
                      Acceptance status of the lot
                    </Text>
                  </View>
                  <View style={styles.buttons}>
                    <AppButton
                      title={"Accept"}
                      onPress={() => {
                        setPaymetnStatus("flex");
                        setAcceptStatus("checkbox-marked-circle");
                      }}
                      style={styles.button}
                    />
                    <AppButton
                      title={"Reject"}
                      onPress={() => {
                        setPaymetnStatus("none");
                        setAcceptStatus("close-circle");
                        setModalVisible(true);
                      }}
                      style={styles.button}
                    />
                  </View>
                  <View style={styles.payView}>
                    <SubmitButton
                      title={"Payment"}
                      style={[styles.paybutton, { display: paymetnStatus }]}
                      fontSize={20}
                    />
                  </View>
                </View>
              </AppForm>
            </View>
          </View>
          <View></View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={modstyles.centeredView}>
            <View style={modstyles.modalView}>
              <View style={modstyles.header}>
                <MaterialCommunityIcons
                  name="message-text"
                  size={25}
                  color={colors.primary}
                  style={[styles.icon]}
                />
                <Text style={{ color: colors.primary }}>
                  Send Message to the Supplier
                </Text>

                <MaterialCommunityIcons
                  name="close-circle"
                  size={25}
                  color={colors.primary}
                  style={[styles.icon, { marginLeft: 50 }]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                />
              </View>
              <View>
                <View style={styles.modelContent}>
                  <View>
                    <Text style={styles.text}>Supplier</Text>
                    <Text style={styles.text}>Reference Number </Text>
                    <Text style={styles.text}>Date </Text>
                    <Text style={styles.text}>Rejected Reson </Text>
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <Text style={styles.text}>
                      : {route.params.supplier.name}
                    </Text>
                    <Text style={styles.text}>: 99999082765 </Text>
                    <Text style={styles.text}>: 02/05/2022 </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    marginTop: -30,
                    marginBottom: 20,
                    alignSelf: "center",
                    marginLeft: 110,
                  }}
                >
                  <AppForm
                    initialValues={{ description: "" }}
                    onSubmit={(values) => sendMessages(values)}
                    validationSchema={messageValidationSchema}
                  >
                    <AppFormField
                      maxLength={255}
                      multiline
                      name="description"
                      numberOfLines={5}
                      placeholder="Description"
                      width={220}
                      height={100}
                    />
                    <View style={{ marginTop: 20 }}>
                      <SubmitButton
                        title={"Send "}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                        style={{ width: 120, height: 45 }}
                        fontSize={20}
                        icon={
                          <MaterialCommunityIcons
                            name="send"
                            size={25}
                            color={colors.black}
                            style={styles.icon}
                          />
                        }
                      />
                    </View>
                  </AppForm>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  details: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    margin: 10,
    marginBottom: 10,
  },
  data: {
    display: "flex",
    flex: 2.5,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  modelContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding:20
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 7,
  },
  avatar: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  date: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    alignItems:"center"
  },
  pdf: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  imageUpload: {
    display: "flex",
    flex: 2,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderRadius: 10,
    margin: 10,
    marginTop: -10,
    padding: 15,
  },
  image: {
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: colors.black,
    borderRadius: 10,
    padding: 20,
    width: 210,

    marginLeft: 125,
    marginTop: -50,
  },
  uploadText: {
    fontSize: 25,
    fontWeight: "500",
    color: colors.mediumGray,
    alignSelf: "center",
    marginBottom: 10,
  },
  button: {
    color: colors.mediumGray,
    width: 100,
    height: 35,
  },
  paybutton: {
    width: 200,
    height: 35,
  },
  payView: {
    display: "flex",
    alignItems: "center",
    marginTop: 30,
  },
  buttons: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: -15,
  },
  acceptence: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    margin: 15,
    marginTop: 15,
    marginLeft: -10,
  },
});
const modstyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    //padding: 35,
    width: 350,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    backgroundColor: colors.black,
    height: 60,
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft:8,
    paddingRight:8
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor:colors.primary,
    width:150
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
