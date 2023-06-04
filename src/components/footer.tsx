import { Center, Container, styled, Text } from '@matejlauko/ui'
import * as React from 'react'

const Footer = () => {
  return (
    <UIFooter>
      <Container>
        <Center text={true}>
          <Text color="muted2" size="sm">
            2023
          </Text>
        </Center>
      </Container>
    </UIFooter>
  )
}

export default Footer

const UIFooter = styled('footer', {
  position: 'sticky',
  top: '100vh',
  py: '$4',
})
