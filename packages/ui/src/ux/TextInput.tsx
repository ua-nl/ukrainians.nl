import { Box, InputLabel, TextField, TextFieldProps } from '@mui/material';

export const TextInput = (props: TextFieldProps) => {
  return (
    <Box>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <TextField {...props} name={props.id} fullWidth />
    </Box>
  );
};
