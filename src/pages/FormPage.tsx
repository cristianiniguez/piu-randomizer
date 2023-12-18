import { Form, Formik, type FormikProps } from 'formik';
import Layout from '@/components/Layout';
import { Button, VStack } from '@chakra-ui/react';
import SelectInput, { SelectInputOptionProps } from '@/components/inputs/SelectInput';

const GAME_EDITION_OPTIONS: SelectInputOptionProps[] = [
  { label: 'PIU Phoenix', value: 'piu-phoenix' },
  { label: 'PIU XX', value: 'piu-xx' },
];

type FormValues = {
  gameEdition: string;
  stepTypes: string[];
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
  });

  return (
    <Layout>
      <Formik component={renderForm} initialValues={getInitialValues()} onSubmit={handelSubmit} />
    </Layout>
  );
};

export default FormPage;
