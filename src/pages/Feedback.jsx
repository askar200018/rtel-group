import {
  Box,
  Button,
  Container,
  Divider,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HeaderHeight } from '../variables/variables';

const Feedback = () => {
  const { register, handleSubmit } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    console.log(data);
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <div
      style={{
        paddingTop: `${HeaderHeight}px`,
        paddingBottom: '32px',
      }}>
      <Box
        sx={{
          paddingY: '32px',
        }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '16px' }}>
          Форма обратной связи
        </Typography>
        <Container maxWidth="xl">
          <Divider variant="middle" />
        </Container>
      </Box>
      <Container maxWidth="sm">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <TextField {...register('fullName')} fullWidth label="Full name" id="fullName" />
          </div>
          <div className="mb-4">
            <TextField
              {...register('from_name')}
              fullWidth
              label="Email"
              id="from_name"
              type="email"
            />
          </div>
          <div className="mb-4">
            <TextField {...register('company')} fullWidth label="Company" id="company" />
          </div>
          <div className="mb-4">
            <TextField {...register('message')} fullWidth label="Title" id="message" />
          </div>
          <div className="mb-4">
            <Typography>Описание</Typography>
            <TextareaAutosize
              {...register('descripton')}
              className="p-2 w-full border border-gray-300 rounded-lg"
              aria-label="minimum height"
              minRows={3}
              placeholder="Описание"
              style={{ width: '100%' }}
            />
          </div>
          <div className="flex justify-end">
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                backgroundColor: '#1f2937',
                '&:hover': {
                  backgroundColor: '#1f2937',
                  opacity: 0.9,
                },
              }}>
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Feedback;
