import React from "react";
import { Header } from "../components";
import { SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Heading,
  Center,
  Image,
  Text,
  Box,
  Divider,
  Stack,
  Flex,
  Avatar,
  HStack,
  VStack,
  Button,
  Icon,
} from "native-base";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Beranda = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title={"Beranda"} />
      <Center></Center>
      <Box my={4} mx={4}>
        <Box alignItems="center">
          <Divider />
          <Box
            mt={4}
            mb={4}
            pl={3}
            w="80"
            rounded="15"
            bg={"#FFFF"}
            borderColor="#0878CA"
            borderWidth="2"
          >
            <TouchableOpacity
              p={3}
              onPress={() => navigation.navigate("Profil")}
            >
              <Stack p="4" space={3}>
                <HStack space={2}>
                  <HStack space={2} alignItems="center">
                    <Icon
                      as={Ionicons}
                      name="person-circle-outline"
                      size={50}
                      color="black"
                    />

                    <Text fontSize={"md"}>E-Resik</Text>
                  </HStack>
                </HStack>
              </Stack>
            </TouchableOpacity>
          </Box>
          <Divider />
        </Box>
        <Box>
          <HStack space={3} justifyContent="center">
            <VStack py="4" px="10">
              <Stack direction="column">
                <Box my={5}>
                  <Button
                    size="20"
                    bg="#0878CA"
                    rounded="sm"
                    _text={{
                      color: "warmGray.50",
                      fontWeight: "medium",
                    }}
                    shadow={"3"}
                  >
                    <TouchableOpacity
                      p={3}
                      onPress={() => navigation.navigate("Catatan")}
                    >
                      <Foundation
                        name="clipboard-notes"
                        size={60}
                        color="#FFFF"
                      />
                    </TouchableOpacity>
                  </Button>

                  <Text textAlign={"center"}>Catatan</Text>
                </Box>

                <Box my={3}>
                  <Button
                    bg="#0878CA"
                    size="20"
                    rounded="sm"
                    _text={{
                      color: "warmGray.50",
                      fontWeight: "medium",
                    }}
                    shadow={"3"}
                  >
                    <TouchableOpacity
                      p={3}
                      onPress={() => navigation.navigate("Pendapatan")}
                    >
                      <FontAwesome5
                        name="money-check-alt"
                        size={40}
                        color="#FFFF"
                      />
                    </TouchableOpacity>
                  </Button>
                  <Text textAlign={"center"}>Pendapatan</Text>
                </Box>
                <Box my={3}>
                  <Button
                    size="20"
                    bg="#0878CA"
                    rounded="sm"
                    _text={{
                      color: "warmGray.50",
                      fontWeight: "medium",
                    }}
                    shadow={"3"}
                  >
                    <TouchableOpacity
                      p={3}
                      onPress={() => navigation.navigate("Riwayat")}
                    >
                      <Fontisto name="history" size={40} color="#FFFF" />
                    </TouchableOpacity>
                  </Button>
                  <Text textAlign={"center"}>Riwayat</Text>
                </Box>
              </Stack>
            </VStack>
            <VStack py="4" px="10">
              <Stack direction="column">
                <Box my={5}>
                  <Button
                    size="20"
                    bg="#0878CA"
                    rounded="sm"
                    _text={{
                      color: "warmGray.50",
                      fontWeight: "medium",
                    }}
                    shadow={"3"}
                  >
                    <TouchableOpacity
                      p={3}
                      onPress={() => navigation.navigate("Layanan")}
                    >
                      <MaterialIcons
                        name="local-laundry-service"
                        size={60}
                        color="#FFFF"
                      />
                    </TouchableOpacity>
                  </Button>
                  <Text textAlign={"center"}>Layanan</Text>
                </Box>
                <Box my={3}>
                  <Button
                    bg="#0878CA"
                    size="20"
                    rounded="sm"
                    _text={{
                      color: "warmGray.50",
                      fontWeight: "medium",
                    }}
                    shadow={"3"}
                  >
                    <TouchableOpacity
                      p={3}
                      onPress={() => navigation.navigate("ListPelanggan")}
                    >
                      <MaterialIcons
                        name="people-alt"
                        size={55}
                        color="#FFFF"
                      />
                    </TouchableOpacity>
                  </Button>
                  <Text textAlign={"center"}>Pelanggan</Text>
                </Box>
                <Box my={3}>
                  <Button
                    size="20"
                    bg="#0878CA"
                    rounded="sm"
                    _text={{
                      color: "warmGray.50",
                      fontWeight: "medium",
                    }}
                    shadow={"3"}
                  >
                    <TouchableOpacity
                      p={3}
                      onPress={() => navigation.navigate("Cuaca")}
                    >
                      <Fontisto name="cloudy" size={55} color="#FFFF" />
                    </TouchableOpacity>
                  </Button>
                  <Text textAlign={"center"}>Cuaca</Text>
                </Box>
              </Stack>
            </VStack>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Beranda;
