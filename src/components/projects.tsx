import {
  Center,
  Heading,
  HStack,
  styled,
  MixIcon,
  Panel,
  Box,
  Paragraph,
  VStack,
  Badge,
  Text,
  BadgeProps,
} from '@lauko/ui'
import * as React from 'react'
import NextImage from 'next/image'

type Props = {}

const Projects: React.FC<Props> = ({}) => {
  return (
    <>
      <Center css={{ mb: '$12' }}>
        <HStack>
          <MixIcon color="accent" size="lg" />

          <Heading as="h2" caps={true} css={{ lineHeight: 1 }}>
            Projects
          </Heading>
        </HStack>
      </Center>

      <UIWrap>
        <Project
          title="duotone"
          description="Theme editor for design system components"
          logo="/duotone-logo.svg"
          tags={[
            { label: 'dev tool', color: 'blue' },
            { label: 'oss', color: 'crimson' },
          ]}
        />
        <Project
          title="Ideabase"
          description="Personal space for all your ideas"
          logo="/ideabase-logo.svg"
          tags={[{ label: 'tool for thought', color: 'yellow' }]}
        />
        <Project
          title="React UI kits repo"
          description="List of UI component libraries.<br/>Compare and pick the best."
          tags={[
            { label: 'list', color: 'green' },
            { label: 'oss', color: 'crimson' },
          ]}
        />
      </UIWrap>
    </>
  )
}

export default Projects

const UIWrap = styled('div', {
  'display': 'grid',
  'gap': '$6',

  '@md': {
    gridTemplateColumns: '1fr 1fr',
  },
})

type ProjectProps = {
  title: string
  description: string
  logo?: string
  tags: Array<{ label: string; color: BadgeProps['color'] }>
}

const Project: React.FC<ProjectProps> = ({ title, description, logo, tags }) => {
  return (
    <UIProject>
      <UILogo empty={!logo}>{logo && <NextImage src={logo} width="64px" height="64px" />}</UILogo>

      <UITexts>
        <Heading as="h3" size="md">
          {title}
        </Heading>

        <Text
          size="sm"
          css={{ lineHeight: '$sm' }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </UITexts>

      <VStack css={{ flexShrink: 0, alignItems: 'flex-end' }} gap="xs">
        {tags.map(({ label, color }) => (
          <Badge color={color} key={label}>
            {label}
          </Badge>
        ))}
      </VStack>
    </UIProject>
  )
}

const UIProject = styled('div', {
  display: 'flex',
  p: '$2',
  bg: '$uibg2',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$line',
})

const UITexts = styled('div', {
  flex: 1,
  display: 'grid',
  gap: '$1',
  pt: '$1',
  pl: '$4',
  pr: '$2',
})

const UILogo = styled('div', {
  'flexShrink': 0,
  'overflow': 'hidden',
  'borderRadius': '$lg',
  'size': '64px',

  '& > *': {
    display: 'block !important',
  },

  'variants': {
    empty: {
      true: {
        bg: '$uibg6',
      },
    },
  },
})
