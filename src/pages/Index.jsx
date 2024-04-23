import { Box, Button, Flex, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useToast, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { FaChartLine, FaExchangeAlt, FaSignOutAlt, FaUserCircle, FaWallet } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletId, setWalletId] = useState("");
  const [password, setPassword] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [selectedBlockchain, setSelectedBlockchain] = useState("");

  const handleLogin = (blockchain) => {
    setSelectedBlockchain(blockchain);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    toast({
      title: `Logged in to ${selectedBlockchain}`,
      description: "You have successfully logged into your wallet.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setIsModalOpen(false);
  };

  const handleExchange = () => {
    toast({
      title: "Exchange Complete",
      description: "Your currency has been successfully exchanged.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={5} bg="black">
      <Heading mb={4} color="white">
        CoinConnection by JT
      </Heading>
      <Tabs isFitted variant="enclosed" border="2px" borderColor="blue.500">
        <TabList mb="1em">
          <Tab>
            <FaWallet /> Wallet
          </Tab>
          <Tab>
            <FaChartLine /> Charts
          </Tab>
          <Tab>
            <FaUserCircle /> Profile
          </Tab>
          <Tab>
            <FaExchangeAlt /> Exchange
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Select placeholder="Select Blockchain" onChange={(e) => handleLogin(e.target.value)}>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Cardano">Cardano</option>
              <option value="Solana">Solana</option>
              <option value="Ripple">Ripple</option>
              <option value="Polkadot">Polkadot</option>
              <option value="Litecoin">Litecoin</option>
              <option value="Chainlink">Chainlink</option>
              <option value="Binance Coin">Binance Coin</option>
              <option value="Avalanche">Avalanche</option>
            </Select>
          </TabPanel>
          <TabPanel>
            <Box p={4} bg="black" borderRadius="md" border="2px" borderColor="blue.500">
              <Text fontSize="lg" color="white">
                Dynamic chart simulation showing cryptocurrency performance.
              </Text>
            </Box>
            <Box overflowY="auto" maxHeight="500px" mt={4} bg="black" border="2px" borderColor="blue.500">
              <Table variant="simple" color="white">
                <Thead>
                  <Tr>
                    <Th color="white">Cryptocurrency</Th>
                    <Th color="white">Market Cap</Th>
                    <Th color="white">Market Movement</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Array.from({ length: 50 }).map((_, index) => (
                    <Tr key={index} color="white">
                      <Td>Crypto {index + 1}</Td>
                      <Td>${(index + 1) * 10}B</Td>
                      <Td>{((index % 3) - 1) * 0.3}%</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </TabPanel>
          <TabPanel>
            <Flex direction="column" align="center">
              <Button
                leftIcon={<FaWallet />}
                colorScheme="blue"
                onClick={() =>
                  toast({
                    title: "Wallet Added",
                    description: "New wallet has been added to your profile.",
                    status: "info",
                    duration: 3000,
                    isClosable: true,
                  })
                }
              >
                Add Wallet
              </Button>
              <Button leftIcon={<FaSignOutAlt />} colorScheme="red" mt={4}>
                Log Out
              </Button>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex align="center" justify="space-between">
              <Select placeholder="From">
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="ADA">Cardano (ADA)</option>
              </Select>
              <FaExchangeAlt />
              <Select placeholder="To">
                <option value="USD">US Dollar (USD)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="ADA">Cardano (ADA)</option>
              </Select>
              <Button ml={4} onClick={handleExchange}>
                Exchange
              </Button>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login to your Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Wallet ID" value={walletId} onChange={(e) => setWalletId(e.target.value)} mb={4} />
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} mb={4} />
            <Input placeholder="Secret Passphrase" value={passphrase} onChange={(e) => setPassphrase(e.target.value)} mb={4} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
