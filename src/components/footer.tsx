import { Center, Container, styled, Text } from '@lauko/ui';
import * as React from 'react';

const Footer = () => {
  return (
    <UIFooter>
      <Container>
        <Center text={true}>
          <Text color="muted2" size="sm">
            crafted in Prague, 2022
          </Text>
        </Center>
      </Container>
    </UIFooter>
  );
};

export default Footer;

const UIFooter = styled('footer', {
  position: 'sticky',
  top: '100vh',
  py: '$4',
});
