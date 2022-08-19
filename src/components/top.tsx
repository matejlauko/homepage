import {
  Center,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  Heading,
  HStack,
  IconButton,
  LinkedInIcon,
  Paragraph,
  Tooltip,
  TwitterIcon,
} from '@lauko/ui'
import * as React from 'react'

const Top: React.FC = () => {
  return (
    <>
      <Heading
        as="h2"
        size="lg"
        weight="normal"
        css={{ lineHeight: '$lg', mb: '$2', maxWidth: '50ch' }}
      >
        Obsessed with bringing more web products with beautiful and&nbsp;intuitive user interfaces
        to&nbsp;people.
      </Heading>

      <Paragraph size="lg" css={{ maxWidth: '60ch' }}>
        Working on&nbsp;Around frontend and&nbsp;design-system by day.
        <br />
        Building tools that make it smooth to&nbsp;craft &nbsp;best product experiences
        by&nbsp;night.
      </Paragraph>

      <HStack css={{ mt: '$10' }}>
        <Tooltip content="@matejlauko">
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

        <Tooltip content="github.com/matejlauko">
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

        <Tooltip content="linkedin.com/in/matej-lauko">
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

        <Tooltip content="matej@lauko.io">
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
  React.ElementRef<typeof IconButton>,
  React.ComponentProps<typeof IconButton> & { href: HTMLAnchorElement['href'] }
>(function SocialLink(props, forwardedRef) {
  return <IconButton as="a" size="lg" variant="tertiary" {...props} ref={forwardedRef} />
})
