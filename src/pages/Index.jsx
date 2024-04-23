import { Box, Button, Flex, Heading, Image, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useToast } from "@chakra-ui/react";
import { FaChartLine, FaExchangeAlt, FaSignOutAlt, FaUserCircle, FaWallet } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleLogin = (blockchain) => {
    toast({
      title: `Logged in to ${blockchain}`,
      description: "You have successfully logged into your wallet.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
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
    <Box p={5}>
      <Heading mb={4}>Crypto Dashboard</Heading>
      <Tabs isFitted variant="enclosed">
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
            <Image src="https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjBjaGFydHxlbnwwfHx8fDE3MTM4ODg2MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Crypto Chart" />
            <Text mt={2}>Live chart of the top 10 cryptocurrencies.</Text>
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
    </Box>
  );
};

export default Index;
