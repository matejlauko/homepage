import { Container, Heading, HStack, styled } from '@matejlauko/ui'
import NextImage from 'next/image'
import NextLink from 'next/link'
import * as React from 'react'
import profilePic from '../assets/profile-pic.jpg'

const Header = () => {
  return (
    <header>
      <Container>
        <UIHeader>
          <NextLink href="/" passHref={true} legacyBehavior>
            <HStack as="a">
              <UIProfile>
                <NextImage
                  src={profilePic}
                  width={36}
                  height={36}
                  alt="Matej Lauko profile photo"
                />
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
