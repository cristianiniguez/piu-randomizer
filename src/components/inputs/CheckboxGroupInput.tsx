import { useField } from 'formik';
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
} from '@chakra-ui/react';

export type CheckboxGroupInputOptionProps = {
  label: React.ReactNode;
  value: string;
};

type CheckboxGroupInputProps = {
  label: React.ReactNode;
  name: string;
  onChange?: (value: string[]) => void;
  options: CheckboxGroupInputOptionProps[];
};

const CheckboxGroupInput: React.FC<CheckboxGroupInputProps> = ({
  label,
  name,
  onChange,
  options,
}) => {
  const [field, meta, helpers] = useField({ name });

  const handleChange = (value: (string | number)[]) => {
    const valueStr = value.map(String);
    helpers.setValue(valueStr);
    onChange?.(valueStr);
  };

  const handleFocus = () => helpers.setTouched(true);

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <CheckboxGroup colorScheme='blue' onChange={handleChange} value={field.value}>
        <HStack spacing={4} wrap='wrap'>
          {options.map(option => (
            <Checkbox key={`${name}-${option.value}`} onFocus={handleFocus} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </HStack>
      </CheckboxGroup>

      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default CheckboxGroupInput;
