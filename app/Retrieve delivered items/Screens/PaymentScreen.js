import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  Modal,
  View,
} from "react-native";
import AppForm from "../Components/common/AppForm";
import Screen from "../Components/common/Screen";
import * as Yup from "yup";
import AppFormField from "../Components/common/AppFormField";
import colors from "../config/colors";
import AppButton from "../Components/common/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SubmitButton from "../Components/common/SubmitBUtton";
import { useRef } from "react";
import { useState } from "react";
import routes from "../Navigation/routes";
import LottieView from "lottie-react-native";
import { getAllCards, saveCard, savePayment } from "../api/payment";
import { useEffect } from "react";

export default function PaymentScreen({ route, navigation }) {
  const scrollView = useRef();

  const item = route.params.item;
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.number().required().label("Card Number"),
    cardHolderName: Yup.string().required().min(5).label("Card Holder name"),
    expiryDate: Yup.string().required().min(5).label("Expire Date"),
    cvc: Yup.number().required().label("CVC"),
  });
  const [cardNumber, SetCardNumber] = useState("");
  const [cardHolderName, SetCardHolderName] = useState("");
  const [expireDate, SetExpireDate] = useState("");
  const [cvc, SetCvc] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [editable, setEditable] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [cards, SetCards] = useState([]);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const getAllCard = async () => {
    await getAllCards(1)
      .then(({ data }) => {
        if (data !== "No Cards") {
          SetCards(data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCard();
  }, []);

  const master =
    "https://banner2.cleanpng.com/20190605/yyw/kisspng-logo-mastercard-pentagram-flat-design-5cf7d97196c268.3758549215597469296175.jpg";
  const visa =
    "https://static.vecteezy.com/system/resources/previews/000/064/484/original/visa-vector-logo.jpg";
  const handleSubmit = async (values) => {
    const card = {
      userId: 1,
      cardNumber: values.cardNumber,
      cardHolderName: values.cardHolderName,
      expiryDate: values.expiryDate,
      cvc: values.cvc,
    };

    const order = {
      userId: 1,
      referenceNumber: item.details.referenceNumber,
      totalAmount: item.details.totalAmount,
      cardId: selectedCard,
    };

    if (isEnabled) {
      await saveCard(card)
        .then(async ({data}) => {
          const rOrder = order;
          rOrder.cardId=data
          paymentFunc(rOrder);
        })
        .catch((error) => console.log(error));
    } else {
      if (selectedCard === "") {
        const rOrder = order;
        rOrder.cardId = null;
        paymentFunc(rOrder);
      } else {
        paymentFunc(order);
      }
    }
  };
  const paymentFunc = async (order) => {
    await savePayment(order)
      .then(() => {
        setModalVisible(true);
      })
      .catch((error) => console.log(error));
  }
  return (
    <ScrollView>
      <Screen>
        <View>
          <View style={styles.toptext}>
            <Image style={styles.cardimage} source={{ uri: master }} />
            <Image style={styles.cardimage} source={{ uri: visa }} />
            <Text>Saved Payment Methods</Text>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            ref={scrollView}
            onContentSizeChange={() => scrollView.current.scrollToEnd()}
          >
            <View style={styles.container}>
              {cards.length !== 0 ? (
                cards.map((card, index) => (
                  <View
                    key={index}
                    style={[
                      styles.card,
                      !editable && selectedCard === card.id
                        ? { backgroundColor: "lightblue" }
                        : null,
                    ]}
                  >
                    <View style={styles.cardnumber}>
                      <Image
                        style={styles.cardimage}
                        source={{ uri: master }}
                      />
                      <Text>{card.cardNumber}</Text>
                    </View>
                    <AppButton
                      title={
                        (!editable && selectedCard === card.id && "remove") ||
                        "Select"
                      }
                      style={{ width: 100, height: 30 }}
                      onPress={() => {
                        setSelectedCard(card.id);
                        setEditable(!editable);
                      }}
                    />
                  </View>
                ))
              ) : (
                <Text style={{ marginLeft: 50, color: "red" }}>
                  No saved cards available.
                </Text>
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.form}>
          <AppForm
            initialValues={{
              cardNumber: cardNumber,
              cardHolderName: cardHolderName,
              expiryDate: expireDate,
              cvc: cvc,
            }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            validationSchema={validationSchema}
          >
            <View style={styles.fields}>
              <AppFormField
                keyboardType="numeric"
                maxLength={12}
                name="cardNumber"
                placeholder="Card Number"
                editable={editable}
              />
              <AppFormField
                maxLength={255}
                name="cardHolderName"
                placeholder="Card Holder name"
                editable={editable}
              />
              <AppFormField
                maxLength={255}
                name="expiryDate"
                placeholder="MM/YY"
                editable={editable}
              />
              <AppFormField
                keyboardType="numeric"
                maxLength={3}
                name="cvc"
                placeholder="CVC"
                editable={editable}
              />
              <View style={styles.toggle}>
                <Text>Save card details</Text>
                <View style={styles.switch}>
                  <Switch
                    trackColor={{ false: "#767577", true: colors.primary }}
                    thumbColor={isEnabled ? colors.white : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    disabled={!editable}
                  />
                </View>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <View>
                <Text style={styles.text}>Reference Number </Text>
                <Text style={styles.text}>Total Amount </Text>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.text}>
                  : {item.details.referenceNumber}
                </Text>
                <Text style={styles.text}>
                  : Rs.{item.details.totalAmount}.00
                </Text>
              </View>
            </View>
            <View style={styles.bottom}>
              <View style={styles.paytext}>
                <MaterialCommunityIcons
                  name="shield-check-outline"
                  size={30}
                  color={colors.black}
                />
                <Text>Your payment information is safe with us.</Text>
              </View>
              {(editable && (
                <SubmitButton
                  title={"confirm and Pay"}
                  style={styles.paybutton}
                />
              )) || (
                <AppButton
                  title={"confirm and Pay"}
                  style={styles.paybutton}
                  onPress={() => {
                    handleSubmit({});
                  }}
                />
              )}
            </View>
          </AppForm>
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
              <View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    marginTop: -30,
                    marginBottom: 20,
                    marginRight: 10,
                  }}
                ></View>
                <View style={[styles.payView, { padding: 30 }]}>
                  <View style={{ alignSelf: "center" }}>
                    <LottieView
                      autoPlay
                      loop={false}
                      source={require("../assets/animations/done.json")}
                      style={{ width: 150 }}
                    />
                  </View>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 25,
                      marginBottom: 20,
                    }}
                  >
                    Payment Successful
                  </Text>
                  <AppButton
                    title={"OK "}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      navigation.navigate(routes.DELIVERED_ITEMS);
                    }}
                    style={{ width: 100, height: 35, alignSelf: "center" }}
                    fontSize={17}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </Screen>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  card: {
    width: 200,
    height: 100,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
    padding: 10,
    paddingTop: 20,
  },
  cardimage: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  cardnumber: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  form: { marginTop: 10 },
  fields: {
    alignSelf: "center",
    width: 400,
    padding: 50,
    paddingTop: 20,
    paddingBottom: 0,
    backgroundColor: colors.lightGray,
  },
  paybutton: {
    width: 200,
    height: 35,
  },
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: -10,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 17,
    fontWeight: "500",
  },
  paytext: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: colors.lightGray,
    width: 400,
    padding: 10,
    paddingLeft: 50,
  },
  toptext: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: colors.lightGray,
    width: 400,
    padding: 10,
  },
  bottom: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
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
    paddingLeft: 8,
    paddingRight: 8,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.primary,
    width: 150,
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
