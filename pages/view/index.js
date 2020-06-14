import {useState, useEffect} from 'react'
import CollectionContainer from '../../components/view/CollectionContainer'
function View({data}){

    
  
    return(
        <>
        <main>

        <CollectionContainer collections={data.data} />



        </main>
       

        </>
    )
}

export async function getServerSideProps(ctx){

  const res = await fetch(`http://127.0.0.1:4000/flashcards`)
  const data = await res.json()

  return {props: {data}}

}

export default View