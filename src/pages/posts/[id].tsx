import Head from 'next/head'
import { allPosts, Post } from 'contentlayer/generated'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Article from '../../components/article'
import { Container, styled } from '@matejlauko/ui'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Seo } from '../../components/seo'

type Props = {
  post: Post
}

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Seo title={post.title} />

      <Header />

      <UIMain>
        <Container>
          <Article article={post} />
        </Container>
      </UIMain>

      <Footer />
    </>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPosts.map((p) => ({ params: { id: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Partial<Props>> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.id)

  return { props: { post } }
}

const UIMain = styled('main', {
  mt: '$16',
  mb: 'clamp($space$16, 10vh, $space$28)',
})
