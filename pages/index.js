import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: {
      hello: "world",
    },
  };
}
