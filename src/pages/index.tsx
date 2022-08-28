import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { allPosts, allThoughts, Post, Thought } from 'contentlayer/generated'
import NextLink from 'next/link'
import { Container, Link, List, ListItem, styled } from '@matejlauko/ui'
import Top from '../components/top'
import Projects from '../components/projects'
import Posts from '../components/posts'
import Footer from '../components/footer'
import Header from '../components/header'
import { Seo } from '../components/seo'

type Props = {
  posts: Post[]
  thoughts: Thought[]
}

const Home: NextPage<Props> = ({ posts, thoughts }) => {
  return (
    <>
      <Seo />

      <Header />

      <UIMain>
        <Container>
          <Top />

          <UISection>
            <Projects />
          </UISection>

          <UISection>
            <Posts posts={posts} />
          </UISection>
        </Container>
      </UIMain>

      <Footer />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  // const posts = allPosts.map((post) => pick(post, ['title', 'date', 'slug']));
  // const thoughts = allThoughts.map((thought) => pick(thought, ['title', 'date', 'slug']));

  return { props: { posts: allPosts, thoughts: allThoughts } }
}

const UIMain = styled('main', {
  my: 'clamp($space$4, 2vh, $space$12)',
  // mb: 'clamp($space$16, 10vh, $space$28)',
})

const UISection = styled('section', {
  my: 'clamp($space$16, 10vh, $space$28)',
})
