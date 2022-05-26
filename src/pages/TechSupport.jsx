import {
  Box,
  Button,
  Container,
  Divider,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { HeaderHeight } from '../variables/variables';

const TechSupport = () => {
  const { register, handleSubmit } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    console.log(data);
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
          Техническая поддержка
        </Typography>
        <Container maxWidth="xl">
          <Divider variant="middle" />
        </Container>
      </Box>
      <Container maxWidth="sm">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <TextField {...register('firstName')} fullWidth label="Имя" id="firstName" />
          </div>
          <div className="mb-4">
            <TextField {...register('lastName')} fullWidth label="Фамилия" id="lastName" />
          </div>
          <div className="mb-4">
            <TextField
              {...register('email')}
              fullWidth
              label="Адрес электронной почты "
              id="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <TextField {...register('company')} fullWidth label="Компания" id="company" />
          </div>
          <div className="mb-4">
            <TextField {...register('position')} fullWidth label="Должность" id="position" />
          </div>
          <div className="mb-4">
            <TextField {...register('region')} fullWidth label="Область (РК)" id="region" />
          </div>
          <div className="mb-4">
            <TextField {...register('phoneNumber')} fullWidth label="Телефон" id="phoneNumber" />
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
              Отправить
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default TechSupport;
