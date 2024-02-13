import { useField } from 'formik';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

export type RadioGroupInputOptionProps = {
  label: React.ReactNode;
  value: string;
};

type RadioGroupInputProps = {
  label: React.ReactNode;
  name: string;
  onChange?: (value: string) => void;
  options: RadioGroupInputOptionProps[];
};

const RadioGroupInput: React.FC<RadioGroupInputProps> = ({
  label,
  name,
  onChange,
  options,
}) => {
  const [field, meta, helpers] = useField<string>(name);

  const handleChange = (value: string | number) => {
    const valueStr = String(value);
    helpers.setValue(valueStr);
    onChange?.(valueStr);
  };

  const handleFocus = () => helpers.setTouched(true);

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <RadioGroup colorScheme='blue' onChange={handleChange} value={field.value}>
        <HStack spacing={4} wrap='wrap'>
          {options.map(option => (
            <Radio key={`${name}-${option.value}`} onFocus={handleFocus} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>

      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default RadioGroupInput;
