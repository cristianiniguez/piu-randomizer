import { Box, Grid } from '@chakra-ui/react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid bg='blue.900' color='gray.50' placeItems='stretch' minH='100vh' p={4}>
      <Box borderColor='gray.600' borderWidth={2} borderRadius='lg' p={4}>
        {children}
      </Box>
    </Grid>
  );
};

export default Layout;
