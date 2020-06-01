import {useState, useEffect} from 'react'

function FlashCardCollection({data}){
    return(
        <div>
            <h1>{data.data.title}</h1>
            {data.data.flashcards.map((card, i) => {
                return <div key={i}>
                    <p>{card.cardFront}</p>
                    <p>{card.cardBack}</p>
                </div>
            })
            }
        </div>
    )
}

export async function getServerSideProps(ctx){
    console.log(ctx)
    const res = await fetch(`http://127.0.0.1:4000/flashcards/${ctx.query.collection_id}/`)
    const data = await res.json()

    return {props: {data}}    
}



export default FlashCardCollection