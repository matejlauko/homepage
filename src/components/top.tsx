import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  Heading,
  HStack,
  Link,
  LinkedInIcon,
  LinkIconButton,
  Paragraph,
  Tooltip,
  TwitterIcon,
} from '@matejlauko/ui'
import NextImage from 'next/image'
import * as React from 'react'
import aroundFavicon from '../assets/around-favicon.png'
import { styled } from '../ui'

const Top = () => {
  return (
    <>
      <Paragraph size="xl3" css={{ lineHeight: '$xl', maxWidth: '60ch', fontWeight: '$light' }}>
        Engineering, Product, UX
      </Paragraph>
      {/* <Heading
        as="h2"
        size="xl"
        weight="normal"
        css={{ lineHeight: '$lg', mb: '$6', maxWidth: '50ch' }}
      >
        I&apos;m a UI/UX engineer, on a mission to bring web products with beautiful
        and&nbsp;intuitive user interfaces to&nbsp;people.
      </Heading>

      <Paragraph size="lg" css={{ lineHeight: '$xl', maxWidth: '60ch' }}>
        Currently working on&nbsp;
        <Link
          href="https://around.co"
          tone="neutral"
          css={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'bottom' }}
        >
          <NextImage src={aroundFavicon} width={24} height={24} alt="Around.co logo" />
          &nbsp;Around
        </Link>
        &apos;s frontend and&nbsp;design-system,
        <br />
        building tools that make crafting the best product experiences smoother
        <br />
        and writing about making web apps, sites and good UX.
      </Paragraph> */}

      <HStack css={{ mt: '$20' }}>
        <Tooltip content="Twitter: @matejlauko">
          <SocialLink
            as="a"
            href="https://twitter.com/matejlauko"
            size="lg"
            variant="tertiary"
            aria-label="Matej on Twitter"
          >
            <TwitterIcon />
          </SocialLink>
        </Tooltip>

        <Tooltip content="GitHub: matejlauko">
          <SocialLink
            as="a"
            href="https://github.com/matejlauko"
            size="lg"
            variant="tertiary"
            aria-label="Matej on GitHub"
          >
            <GitHubLogoIcon />
          </SocialLink>
        </Tooltip>

        <Tooltip content="Linkedin: matej-lauko">
          <SocialLink
            as="a"
            href="https://www.linkedin.com/in/matej-lauko/"
            size="lg"
            variant="tertiary"
            aria-label="Matej on LinkedIn"
          >
            <LinkedInIcon />
          </SocialLink>
        </Tooltip>

        <Tooltip content="Email: matej@lauko.io">
          <SocialLink
            as="a"
            href="mailto:matej@lauko.io"
            size="lg"
            variant="tertiary"
            aria-label="Write email"
          >
            <EnvelopeClosedIcon />
          </SocialLink>
        </Tooltip>
      </HStack>
    </>
  )
}

export default Top

const SocialLink = React.forwardRef<
  React.ElementRef<typeof LinkIconButton>,
  React.ComponentProps<typeof LinkIconButton> & { href: HTMLAnchorElement['href'] }
>(function SocialLink(props, forwardedRef) {
  return (
    <LinkIconButton
      as="a"
      size="lg"
      variant="tertiary"
      target="_blank"
      {...props}
      ref={forwardedRef}
    />
  )
})

const UIInlineImage = styled('span', {
  display: 'inline-flex',
  verticalAlign: 'middle',
  ml: '$1',
})
