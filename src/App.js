import { Box, Container } from '@chakra-ui/layout';
import NavigationBar from 'containers/NavigationBar/NavigationBar';
import Routes from 'routes';

function App() {
  return (
    <Box backgroundColor="gray.100" minHeight="100vh">
      <NavigationBar />
      <Container maxWidth="container.xl" marginY="8">
        <Routes />
      </Container>
    </Box>
  );
}

export default App;
