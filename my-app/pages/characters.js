import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/Link'

export default function characters({character}) {
    console.log(character)
    return <div></div>
}

export async function getServerSideProps() {

    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/1`);
      const character = await res.json();
      return {
        props: { character }
      }
    } catch (error) {
      console.error(err)
    }
}