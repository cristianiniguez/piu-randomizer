import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from './components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import { Button } from './components/ui/button';

const appFormSchema = z.object({
  gameEdition: z.string(),
});

type AppFormFieldValues = z.infer<typeof appFormSchema>;

const AppForm = () => {
  const form = useForm<AppFormFieldValues>({
    resolver: zodResolver(appFormSchema),
    defaultValues: {
      gameEdition: 'piu-xx',
    },
  });

  function onSubmit(values: AppFormFieldValues) {
    console.log(values);
  }

  return (
    <Card className='p-4'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='gameEdition'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game Edition</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a Game Edition' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='piu-xx'>Pump It Up XX</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Search</Button>
        </form>
      </Form>
    </Card>
  );
};

export default AppForm;
