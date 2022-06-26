import { InputLabel, styled, TextField, TextFieldProps } from '@mui/material';

const TextFieldContainer = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(5),
  width: '100%',
}));

export const TextInput = (props: TextFieldProps) => {
  return (
    <TextFieldContainer>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <TextField name={props.id} fullWidth {...props} />
    </TextFieldContainer>
  );
};
