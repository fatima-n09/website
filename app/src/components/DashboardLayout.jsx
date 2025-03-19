import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query"
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";
import { fetchExample } from "../api/query/exampleQuery";

const DashboardLayout = ({ title, children }) => {

  const { isOpen, onClose, onOpen } = useDisclosure();
  
  const exampleQuery = useQuery({
    queryKey: ["example"],
    queryFn: fetchExample,
  })

  if(exampleQuery.isLoading) return <div>Loading...</div>

  

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)"
          mt="6"
          maxW="70rem"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
