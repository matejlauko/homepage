import { Center, Heading, styled, Text, linkVariants, linkStyles } from '@matejlauko/ui'
import * as React from 'react'
import { Post } from '../../.contentlayer/generated'

type Props = {
  article: Post
}

const Article: React.FC<Props> = ({ article }) => {
  return (
    <UIArticle>
      <Center text={true}>
        <Heading as="h1" css={{ mb: '$1', fontSize: '2em' }}>
          {article.title}
        </Heading>

        <Text as="time" color="muted2" size="sm">
          {article.date}
        </Text>
      </Center>

      <UIBody dangerouslySetInnerHTML={{ __html: article.body.html }} />
    </UIArticle>
  )
}

export default Article

const UIArticle = styled('article', {})

const UIBody = styled('div', {
  my: '$8',

  '@md': {
    my: '$12',
  },

  maxWidth: '65ch',
  mx: 'auto',

  '& > :first-child, & > * > :first-child, & > * > * > :first-child': {
    mt: 0,
  },

  '& h2': {
    fontSize: '1.6666667em',
    marginTop: '1.8666667em',
    marginBottom: '1.0666667em',
    lineHeight: '1.3333333',
  },

  '& h3': {
    fontSize: '1.3333333em',
    marginTop: '1.6666667em',
    marginBottom: '0.6666667em',
    lineHeight: 1.5,
  },

  '& p': {
    marginTop: '1.3333333em',
    marginBottom: '1.3333333em',
    lineHeight: 1.7777778,
  },

  '& a': {
    ...linkStyles,
    ...linkVariants.tone.accent,
  },
})
