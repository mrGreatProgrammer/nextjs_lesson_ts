import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import { getPostsByLimit, getRunningMutationThunk, useGetPostsByLimitQuery} from '../store/service/posts';
import { wrapper } from '../store/store';
import styles from '../styles/Home.module.css'

export default function Home() {
  const {isLoading, isError, data} = useGetPostsByLimitQuery(1)
  console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>somon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        {/* SideBar */}
        
        {/* Feed */}
        
        {/* Widgets */}


      </main>

    </div>
  )
}


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const name = context.params?.name;
    if (typeof name === "string") {
      store.dispatch(getPostsByLimit.initiate(name));
    }

    // await Promise.all(getRunningMutationThunk());

    return {
      props: {},
    };
  }
);

// export async function getServerSideProps() {
//   // Get external data from the file system, API, DB, etc.
//   const res = await fetch('http://localhost:3001/api/hello')
//   const data = await res.json();

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: {data}
//   }
// }


