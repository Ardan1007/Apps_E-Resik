import React, { useState } from "react";
import {
  Button,
  Modal,
  Icon,
  Input,
  Heading,
  VStack,
  Box,
  Center,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { registerUser } from "../src/actions/AuthAction";
import { useNavigation } from "@react-navigation/native";

const ModalSignUp = (props) => {
  const navigation = useNavigation();

  const { showModal, setShowModal } = props;
  const handleClickToggleFirstPw = () => setShowFirstPw(!showFirstPw);
  const handlEmailChange = (text) => setEmail(text);
  const handlPWChange = (text) => setPassword(text);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");
  const [kodepos, setKodepos] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showFirstPw, setShowFirstPw] = useState(false);

  const onRegister = async () => {
    if (nama && email && password && alamat && kodepos) {
      const data = {
        nama: nama,
        email: email,
        password: password,
        alamat: alamat,
        kodepos: kodepos,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        navigation.replace("Beranda");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
    }
  };

  return (
    <Modal size="xl" isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px" rounded={"2xl"}>
        <Box mx={2}>
          <Modal.CloseButton />
          <Modal.Header>Buat Akun</Modal.Header>
          <Modal.Body>
            <Center>
              <Heading
                size="lg"
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
                fontWeight="semibold"
              >
                Selamat Datang
              </Heading>
            </Center>
            <VStack space={3} mt="5">
              <Input
                value={email}
                onChangeText={(email) => setEmail(email)}
                InputLeftElement={
                  <Icon as={Ionicons} name="mail-outline" size="sm" ml="2" />
                }
                variant="outline"
                mx="3"
                py={3}
                borderColor={"#0878CA"}
                borderRadius={"lg"}
                placeholder="E-Mail"
              />
              <Input
                value={nama}
                onChangeText={(nama) => setNama(nama)}
                InputLeftElement={
                  <Icon as={Ionicons} name="body-outline" size="sm" ml="2" />
                }
                variant="outline"
                mx="3"
                py={3}
                borderColor={"#0878CA"}
                borderRadius={"lg"}
                placeholder="Nama"
              />
              <Input
                value={alamat}
                onChangeText={(alamat) => setAlamat(alamat)}
                InputLeftElement={
                  <Icon as={Ionicons} name="home-outline" size="sm" ml="2" />
                }
                variant="outline"
                mx="3"
                py={3}
                borderColor={"#0878CA"}
                borderRadius={"lg"}
                placeholder="Alamat"
              />
              <Input
                value={kodepos}
                onChangeText={(kodepos) => setKodepos(kodepos)}
                InputLeftElement={
                  <Icon as={Ionicons} name="flag-outline" size="sm" ml="2" />
                }
                variant="outline"
                mx="3"
                py={3}
                borderColor={"#0878CA"}
                borderRadius={"lg"}
                placeholder="Kode Pos"
              />
              <Input
                value={password}
                onChangeText={(password) => setPassword(password)}
                InputLeftElement={
                  <Icon as={Ionicons} name="key-outline" size="sm" ml="2" />
                }
                variant="outline"
                mx="3"
                py={3}
                borderColor={"#0878CA"}
                borderRadius={"lg"}
                type={showFirstPw ? "text" : "password"}
                InputRightElement={
                  <Button
                    size="xs"
                    rounded="none"
                    w="1/5"
                    h="full"
                    bg={"#0878CA"}
                    onPress={handleClickToggleFirstPw}
                  >
                    {showFirstPw ? "Hide" : "Show"}
                  </Button>
                }
                placeholder="Password"
              />
              <Button
                p={2}
                mx={20}
                mt="2"
                bg={"#0878CA"}
                colorScheme="primary"
                rounded={15}
                onPress={() => {
                  onRegister();
                }}
              >
                Daftar
              </Button>
            </VStack>
          </Modal.Body>
        </Box>
      </Modal.Content>
    </Modal>
  );
};

export default ModalSignUp;
