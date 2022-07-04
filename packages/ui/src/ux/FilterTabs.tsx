import { Box, styled, Tab, Tabs } from '@mui/material';
import { ReactNode, SyntheticEvent } from 'react';

type TabPanelProps = {
  index: number;
  value: number;
  children?: ReactNode;
};

type FilterTabsProps = {
  value: number;
  handleChange: (event: SyntheticEvent, newValue: number) => void;
  tabs: string[];
  children?: ReactNode;
};

const StyledTabs = styled(Tabs)(({ theme }) => ({
  paddingBottom: theme.spacing(6),

  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.text.primary,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: theme.palette.text.primary,
  padding: theme.spacing(0, 2),
  minWidth: 'auto',

  '&.Mui-selected': {
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.text.primary,
  },
}));

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export const FilterTabs = ({
  value,
  handleChange,
  tabs,
  children,
}: FilterTabsProps) => {
  return (
    <>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {tabs.map((tab, index) => (
          <StyledTab
            disableRipple
            key={index}
            label={tab}
            {...a11yProps(index)}
          />
        ))}
      </StyledTabs>
      {children}
    </>
  );
};
