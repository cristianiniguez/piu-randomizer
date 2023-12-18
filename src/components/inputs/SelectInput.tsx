import { useField } from 'formik';
import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';

export type SelectInputOptionProps = {
  label: React.ReactNode;
  value: string;
};

type SelectInputProps = {
  label: React.ReactNode;
  name: string;
  onChange?: (value: string) => void;
  options: SelectInputOptionProps[];
};

const SelectInput: React.FC<SelectInputProps> = ({ label, name, onChange, options }) => {
  const [field, meta, helpers] = useField({ name });

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    const value = e.target.value;
    helpers.setValue(value);
    onChange?.(value);
  };

  const handleFocus: React.FocusEventHandler<HTMLSelectElement> = () => helpers.setTouched(true);

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <Select
        id={name}
        name={field.name}
        onChange={handleChange}
        onFocus={handleFocus}
        value={field.value}
      >
        {options.map(option => (
          <option key={`${name}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default SelectInput;
