import { styled } from '@mui/system';
import { UASysColors, UASysStyleParts } from 'ui/lib';
import { H3, H4, TextInput } from 'ui/ux';

const FormContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 14),
  backgroundColor: UASysColors.black10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 420,
  borderRadius: UASysStyleParts.boxRadius.borderRadius,
}));

const BlueHeader = styled('div')({
  color: UASysColors.blue100,
});

export const VacancyForm = () => {
  return (
    <FormContainer>
      <BlueHeader>
        <H3>Did not find vacancy for you?</H3>
      </BlueHeader>

      <H4 mb={10}>Leave information about yourself</H4>
      <TextInput label="Name" placeholder="Enter your name" />
      <TextInput label="Email" placeholder="Enter your email" />
      <TextInput label="City" placeholder="Enter your city" />
      <TextInput label="Your occupation" placeholder="Enter your occupation" />
    </FormContainer>
  );
};
