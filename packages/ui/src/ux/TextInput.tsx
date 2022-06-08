import { Box, InputLabel, TextField, TextFieldProps } from '@mui/material';

type FormFieldProps = TextFieldProps;

export const TextInput = (props: FormFieldProps) => {
  return (
    <Box component="div">
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <TextField {...props} name={props.id} fullWidth />
    </Box>
  );
};
