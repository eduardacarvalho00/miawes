import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#000000',
      800: '#131419',
      700: '#828282',
      600: '#CFCFCF',
      500: '#BDBDBD',
      300: '#E0E0E0',
      200: '#F2F2F2', 
      100: '#F8F9FB',
      50: '#FFFFFF', 
    },
    purple: {
      900: '#2B076E',
      800: '#491F98',
      300: '#9E81AD',
    },
  },
  fonts: {
    heading: 'Mulish',
    body: 'Mulish',
  },
  styles: {
    global: {
      'html::-webkit-scrollbar': {
        bg: 'blackAlpha.300',
        w: '2',
      },
      'html::-webkit-scrollbar-thumb': {
        background: 'blue.500',
        borderRadius: '5px',
      },
      body: {
        bg: 'gray.800',
        color: 'gray.50',
      },
      '*': {
        scrollBehavior: 'smooth',
      },
    },
  },
});
