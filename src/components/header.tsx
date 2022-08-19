import { Container, Heading, HStack, styled } from '@lauko/ui'
import NextImage from 'next/image'
import NextLink from 'next/link'
import * as React from 'react'

type Props = {}

const Header: React.FC<Props> = ({}) => {
  return (
    <header>
      <Container>
        <UIHeader>
          <NextLink href="/" passHref={true}>
            <HStack as="a">
              <UIProfile>
                <NextImage src="/profile-pic.jpg" width="36px" height="36px" />
              </UIProfile>

              <Heading as="h1" size="md" css={{ '@md': { fontSize: '$6' } }}>
                Matej Lauko
              </Heading>
            </HStack>
          </NextLink>
        </UIHeader>
      </Container>
    </header>
  )
}

export default Header

const UIHeader = styled('div', {
  height: 100,
  display: 'flex',
  alignItems: 'center',
})

const UIProfile = styled('div', {
  borderRadius: '$round',
  size: '$control_md',
  overflow: 'hidden',
})
