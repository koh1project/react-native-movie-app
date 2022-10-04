import { Box, HStack, StatusBar, Text } from 'native-base';

export const Header = () => (
  <>
    <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
    <Box safeAreaTop backgroundColor="#2c3e50">
      <HStack bg="#2c3e50" py={3} alignItems="center" justifyContent="center">
        <Text color="#ffffff" fontSize={20} fontWeight="bold">
          Movies App
        </Text>
      </HStack>
    </Box>
  </>
);
