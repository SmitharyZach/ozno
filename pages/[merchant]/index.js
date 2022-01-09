import { SimpleGrid, Card, Container, Paper } from "@mantine/core";
import { useRouter } from "next/router";
import styled from "styled-components";

const CoolTitle = styled.h1`
  font-family: Roboto;
  font-weight: 600;
  font-size: 2rem;
  color: red;
  text-decoration: none;
  cursor: pointer;
`;

function Merchant({ posts }) {
  const router = useRouter();
  const merchant = router.query.merchant;
  return (
    <>
      <CoolTitle>{merchant}</CoolTitle>
      <SimpleGrid cols={4}>
        {posts.map((post) => {
          return (
            <Card shadow="lg" padding="lg" style={{ marginTop: 10 }}>
              <h2>{post.name}</h2>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(res);
  return {
    props: {
      posts: data,
    },
  };
}

export default Merchant;
