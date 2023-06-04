import { Container, styled } from '@matejlauko/ui'
import { allPosts, allThoughts, Post, Thought } from 'contentlayer/generated'
import type { GetStaticProps, NextPage } from 'next'
import Footer from '../components/footer'
import Header from '../components/header'
import Posts from '../components/posts'
import Projects from '../components/projects'
import { Seo } from '../components/seo'
import Top from '../components/top'

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

          {/* <UISection>
            <Projects />
          </UISection> */}

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
  return { props: { posts: allPosts, thoughts: allThoughts } }
}

const UIMain = styled('main', {
  my: '$8',
})

const UISection = styled('section', {
  my: 'clamp($space$16, 10vh, $space$28)',
})
