import {useState, useEffect} from 'react'
import FlashCard from '../components/create/flashcard'
import Layout from '../components/global/layout'
export default function Create(){

    const [title, setTitle] = useState('')
    const [creatingCards, setCreatingCards] = useState(false)


    const createCollection = (e) =>{
        e.preventDefault();

        setCreatingCards(true)

    }


    return(
      <Layout>
        <div className="container">
            <main>
                <h1 className="title">Create</h1>
                {creatingCards === false &&
                    <div>
                    <form action="/api/new" onSubmit={createCollection}>
                        <label htmlFor="title">
                            <input id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </label>

                        <button type="submit">Create New Cards</button>
                    </form>
                </div>}
                {creatingCards !== false &&
                <div>
                    

                        <FlashCard title={title} />

                </div>}
            </main>
           

        </div>
        </Layout>
    )
}