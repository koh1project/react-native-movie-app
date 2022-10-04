import { HStack, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

/**
 * @param {{
 *  label: string;
 *  optionItems: Function
 * }} props
 */
export const PaginationButton = ({ label, handleChange }) => {
  return (
    <TouchableOpacity onPress={() => handleChange()}>
      <HStack borderWidth={1} borderColor="#a9a9a9" borderRadius={12} p={2}>
        <Text fontSize={15} bold>
          {label}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};
