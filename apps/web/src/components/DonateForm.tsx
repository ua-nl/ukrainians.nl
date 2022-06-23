import { InputAdornment, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { UASysColors } from 'ui/lib';
import { Button, TextInput } from 'ui/ux';

const DonateFormContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(4),
}));

const EuroAdornment = styled('div')(() => ({
  color: UASysColors.blue100,
  fontSize: '20px',
  fontWeight: 700,
  paddingRight: '8px',
}));

export const DonateForm = () => {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <DonateFormContainer>
        <ToggleButtonGroup
          exclusive
          value={alignment}
          onChange={handleAlignment}
        >
          <ToggleButton value="5">5 €</ToggleButton>
          <ToggleButton value="10">10 €</ToggleButton>
          <ToggleButton value="20">20 €</ToggleButton>
        </ToggleButtonGroup>

        <TextInput
          placeholder="Other amount"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EuroAdornment>€</EuroAdornment>
              </InputAdornment>
            ),
          }}
        />
      </DonateFormContainer>
      <Button type="primary">Donate Now</Button>
    </>
  );
};
