import { Form, Formik, type FormikProps } from 'formik';
import Layout from '@/components/Layout';
import { Button, VStack } from '@chakra-ui/react';
import SelectInput, { SelectInputOptionProps } from '@/components/inputs/SelectInput';
import CheckboxGroupInput, {
  CheckboxGroupInputOptionProps,
} from '@/components/inputs/CheckboxGroupInput';

const GAME_EDITION_OPTIONS: SelectInputOptionProps[] = [
  { label: 'PIU Phoenix', value: 'piu-phoenix' },
  { label: 'PIU XX', value: 'piu-xx' },
];

const STEP_TYPES_OPTIONS: CheckboxGroupInputOptionProps[] = [
  { label: 'Single', value: 'single' },
  { label: 'Double', value: 'double' },
  { label: 'Single Performance', value: 'single-performance' },
  { label: 'Double Performance', value: 'double-performance' },
  { label: 'CO-OP', value: 'cooperative' },
];

const SONG_TYPES_OPTIONS: CheckboxGroupInputOptionProps[] = [
  { label: 'Arcade', value: 'arcade' },
  { label: 'Full Song', value: 'full-song' },
  { label: 'Remix', value: 'remix' },
  { label: 'Shortcut', value: 'shortcut' },
];

type FormValues = {
  gameEdition: string;
  stepTypes: string[];
  songTypes: string[];
};

const FormPage = () => {
  const handelSubmit = async (values: FormValues) => {
    console.log(values);
  };

  const renderForm = ({ isSubmitting }: FormikProps<FormValues>) => {
    return (
      <Form>
        <VStack alignItems='stretch' spacing={4}>
          <SelectInput label='Game Edition' name='gameEdition' options={GAME_EDITION_OPTIONS} />

          <CheckboxGroupInput label='Step Types' name='stepTypes' options={STEP_TYPES_OPTIONS} />

          <CheckboxGroupInput label='Song Types' name='songTypes' options={SONG_TYPES_OPTIONS} />

          <Button colorScheme='blue' isLoading={isSubmitting} type='submit'>
            Search
          </Button>
        </VStack>
      </Form>
    );
  };

  const getInitialValues = (): FormValues => ({
    gameEdition: 'piu-phoenix',
    stepTypes: ['single'],
    songTypes: ['arcade'],
  });

  return (
    <Layout>
      <Formik component={renderForm} initialValues={getInitialValues()} onSubmit={handelSubmit} />
    </Layout>
  );
};

export default FormPage;
