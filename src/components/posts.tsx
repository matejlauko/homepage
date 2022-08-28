import {
  Center,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Paragraph,
  styled,
  Text,
  TextIcon,
  VStack,
} from '@matejlauko/ui'
import NextLink from 'next/link'
import * as React from 'react'
import { Post } from '../../.contentlayer/generated'

type Props = {
  posts: Post[]
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Center css={{ mb: '$12' }}>
        <HStack>
          <TextIcon color="accent" size="lg" />

          <Heading as="h2" caps={true} css={{ lineHeight: 1 }}>
            Posts
          </Heading>
        </HStack>
      </Center>

      <VStack gap="xl">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </VStack>
    </>
  )
}

export default Posts

type PostProps = {
  post: Post
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <UIPost as={LinkBox}>
      <NextLink href={`/posts/${post.slug}`} passHref={true}>
        <LinkOverlay>
          <Heading as="h3" color="text">
            {post.title}
          </Heading>
        </LinkOverlay>
      </NextLink>

      <Paragraph color="muted" readable={true} css={{ my: 0 }} size="sm">
        {post.perex}
      </Paragraph>

      <Text as="time" color="muted2" size="sm">
        {post.date}
      </Text>
    </UIPost>
  )
}

const UIPost = styled('article', {
  display: 'grid',
  rowGap: '$1_5',
  columnGap: '$6',
  gridAutoFlow: 'row',

  '@md': {
    gridTemplateColumns: '1fr max-content',
    gridTemplateRows: 'auto auto',
    gridAutoFlow: 'column',
  },
})
