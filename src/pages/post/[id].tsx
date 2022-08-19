import Head from 'next/head';
import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Article from '../../components/article';
import { Container, styled } from '@lauko/ui';
import Header from '../../components/header';
import Footer from '../../components/footer';

type Props = {
  post: Post;
};

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | Matej Lauko</title>
      </Head>

      <Header />

      <UIMain>
        <Container>
          <Article article={post} />
        </Container>
      </UIMain>

      <Footer />
    </>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPosts.map((p) => ({ params: { id: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Partial<Props>> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.id);

  return { props: { post } };
};

const UIMain = styled('main', {
  mt: 'clamp($space$4, 3vh, $space$16)',
  mb: 'clamp($space$16, 10vh, $space$28)',
});
