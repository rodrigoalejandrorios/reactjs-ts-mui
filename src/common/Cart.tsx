import React from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { HorizontalCardComponent } from '../components/HorizontalCard';

interface CartComponentProps {
  open: boolean;
  handleStateViewDrawer: () => void;
}

export const CartComponent: React.FC<CartComponentProps> = ({
  open,
  handleStateViewDrawer,
}) => {
  return (
    <Drawer anchor={'right'} open={open}>
      <Box sx={{ width: '25em', p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Cart</Typography>
          <IconButton color="primary" onClick={() => handleStateViewDrawer()}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 1.5 }} />
        <HorizontalCardComponent
          image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          name="Rick"
          info="Tierra"
        />
        <HorizontalCardComponent
          image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          name="Rick"
          info="Tierra"
        />
      </Box>
    </Drawer>
  );
};
