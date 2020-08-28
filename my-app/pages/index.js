import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home({characters}) {
  return (
    <Layout title="Rick and Morty">
        <h1 className="transform skew-y-6 tracking-wider text-5xl mb-8 text-center">Rick and Morty</h1>
        <ul>
          {characters.map((character, index) => (
            <li key={index}>
              <Link href={`/${index + 1}`}>
                <a className="border p-4 border-gray my-2 flex items-center text-lg bg-gray-200 rounded-md">
                  <img 
                    className="w-20 h-20 mr-3"
                    src={character.image} 
                    alt={character.name}
                  />
                  <span>{index + 1}.</span>
                  {character.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character/');
    const {results} = await res.json();
    const characters = results.map((result) => {
      return {
          ...result,
      };
    })
    return {
      props: { characters }
    }
  } catch (error) {
    console.error(err)
  }
}