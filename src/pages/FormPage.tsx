import { Field, Form, Formik, type FormikProps } from 'formik';
import Layout from '@/components/Layout';
import { Button, FormControl, FormLabel, Select, VStack } from '@chakra-ui/react';

type FormValues = {
  gameEdition: string;
};

const FormPage = () => {
  const renderForm = ({ isSubmitting }: FormikProps<FormValues>) => {
    return (
      <Form>
        <VStack alignItems='stretch' spacing={4}>
          <FormControl>
            <FormLabel htmlFor='gameEdition'>Game Edition</FormLabel>
            <Field as={Select} id='gameEdition' name='gameEdition'>
              <option value='piu-phoenix'>PIU Phoenix</option>
            </Field>
          </FormControl>

          <Button colorScheme='blue' isLoading={isSubmitting} type='submit'>
            Search
          </Button>
        </VStack>
      </Form>
    );
  };

  const getInitialValues = (): FormValues => ({
    gameEdition: 'piu-phoenix',
  });

  return (
    <Layout>
      <Formik component={renderForm} initialValues={getInitialValues()} onSubmit={console.log} />
    </Layout>
  );
};

export default FormPage;
