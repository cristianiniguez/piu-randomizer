import { useField } from 'formik';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  useNumberInput,
} from '@chakra-ui/react';

type IntegerInputProps = {
  label: React.ReactNode;
  min: number;
  max: number;
  name: string;
};

const IntegerInput: React.FC<IntegerInputProps> = ({ label, min, max, name }) => {
  const [field, meta, helpers] = useField<number>({ name });

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    id: field.name,
    step: 1,
    min,
    max,
    name: field.name,
    onChange(_, valueAsNumber) {
      helpers.setValue(valueAsNumber);
    },
    onFocus: () => helpers.setTouched(true),
    value: field.value,
  });

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <HStack>
        <Button colorScheme='blue' {...getDecrementButtonProps()}>
          -
        </Button>
        <Input {...getInputProps()} />
        <Button colorScheme='blue' {...getIncrementButtonProps()}>
          +
        </Button>
      </HStack>

      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default IntegerInput;
