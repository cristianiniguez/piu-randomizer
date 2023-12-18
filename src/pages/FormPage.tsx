import { Form, Formik, type FormikProps } from 'formik';
import * as Yup from 'yup';
import Layout from '@/components/Layout';
import { Button, VStack } from '@chakra-ui/react';
import SelectInput, { SelectInputOptionProps } from '@/components/inputs/SelectInput';
import CheckboxGroupInput, {
  CheckboxGroupInputOptionProps,
} from '@/components/inputs/CheckboxGroupInput';
import IntegerInput from '@/components/inputs/IntegerInput';

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

const MIN_LEVEL = 1;
const MAX_LEVEL = 27;

type FormValues = {
  gameEdition: string;
  stepTypes: string[];
  songTypes: string[];
  minLevel: number;
  maxLevel: number;
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

          <IntegerInput label='Min Level' min={MIN_LEVEL} max={MAX_LEVEL} name='minLevel' />

          <IntegerInput label='Max Level' min={MIN_LEVEL} max={MAX_LEVEL} name='maxLevel' />

          <Button colorScheme='blue' isLoading={isSubmitting} type='submit'>
            Search
          </Button>
        </VStack>
      </Form>
    );
  };

  const getValidationSchema = () => {
    const minLevelError = `Use a level equal or greater than ${MIN_LEVEL}`;
    const maxLevelError = `Use a level equal or less than ${MAX_LEVEL}`;

    return Yup.object({
      gameEdition: Yup.string().required('Select one'),
      stepTypes: Yup.array(Yup.string()).min(1, 'Select one'),
      songTypes: Yup.array(Yup.string()).min(1, 'Select one'),
      minLevel: Yup.number().min(MIN_LEVEL, minLevelError).required(minLevelError),
      maxLevel: Yup.number().max(MAX_LEVEL, maxLevelError).required(maxLevelError),
    });
  };

  const getInitialValues = (): FormValues => ({
    gameEdition: 'piu-phoenix',
    stepTypes: ['single'],
    songTypes: ['arcade'],
    minLevel: MIN_LEVEL,
    maxLevel: MAX_LEVEL,
  });

  return (
    <Layout>
      <Formik
        component={renderForm}
        initialValues={getInitialValues()}
        onSubmit={handelSubmit}
        validationSchema={getValidationSchema()}
      />
    </Layout>
  );
};

export default FormPage;
