import { Footer } from '../footer';
import {Box} from '../styles/box';
import { Nav } from './navbar';

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout = ({children}: LayoutProps) => (
   <Box
      css={{
         maxW: '100%',
         background: '$background',
      }}
   >
      <Nav/>
      {children}
      <Footer/>
   </Box>
);
