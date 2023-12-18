import { useField } from 'formik';
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Stack,
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
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <CheckboxGroup colorScheme='blue' onChange={handleChange} value={field.value}>
        <Stack spacing={4}>
          {options.map(option => (
            <Checkbox key={`${name}-${option.value}`} onFocus={handleFocus} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>

      {meta.touched && meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
};

export default CheckboxGroupInput;
