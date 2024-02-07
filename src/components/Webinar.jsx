import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  SimpleGrid,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import url from "../data/liveworkshop.mp4";
import { AiFillCalendar } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";

const Webinar = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleClick = () => {
    if (name !== "" && email !== "" && number !== "") {
      const userData = {
        name,
        email,
        number,
      };
      toast({
        title: "Registration Successful.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setName("");
      setEmail("");
      setNumber("");
      console.log(userData);
    } else {
      toast({
        title: "All Fields Required",
        description: `Please Fill Required Details`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    // onClose();
  };

  return (
    <>
      <Box>
        <video autoPlay loop playsInline muted width={"auto"} height={"70%"}>
          <source src={url} type="video/mp4" />
        </video>
      </Box>
      <Grid
        width={"36%"}
        marginLeft={"10%"}
        position={"absolute"}
        bottom={{ base: "5%", sm: "8%", md: "8%", lg: "6%" }}
        gap={{ base: 2, sm: 3, md: 4, lg: 10 }}
      >
        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please fill the details !!</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} margin={4}>
              <SimpleGrid gap={6}>
                <FormControl id="name" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl id="number" isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    value={number}
                    type="number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </FormControl>
              </SimpleGrid>
            </ModalBody>

            <ModalFooter>
              <Button
                loadingText="Submitting"
                colorScheme="blue"
                mr={3}
                onClick={handleClick}
                bg={"rgb(5,8,69)"}
                size={"md"}
                _hover={{
                  border:"1px solid silver",
                  color:"rgb(5,8,69)",
                  background:"silver"
                }}
              >
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box alignContent={"start"}>
          <Text
            fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "22px" }}
            fontWeight={"600"}
          >
            Join our free, exclusive webinar by Stocktutor's 20-year experienced
            mentors. Learn creative ways to grow your money and gain a deep
            understanding of the stock market
          </Text>
        </Box>
        <Flex fontSize={18} fontWeight={600} gap={16}>
          <Flex alignItems={"center"} gap={2}>
            <AiFillCalendar />
            <Text>13 Feb 2024</Text>
          </Flex>

          <Flex alignItems={"center"} gap={2}>
            <FaRegClock />
            <Text>2 PM</Text>
          </Flex>
        </Flex>
        <Flex>
          <Button
            size={{ base: "xs", sm: "sm", md: "sm", lg: "lg" }}
            bg={"rgb(5,8,69)"}
            color={"white"}
            onClick={onOpen}
            _hover={{
              border:"1px solid silver",
              color:"rgb(5,8,69)",
              background:"silver"
            }}
          >
            Register Now
          </Button>
        </Flex>
      </Grid>
    </>
  );
};

export default Webinar;
