import {useState, useEffect} from 'react'

export default function FlashCard(props){

    const [cardFront, setCardFront] = useState('');
    const [cardBack, setCardBack] = useState('');

    const [cards, setCards] = useState([])

    

    const addCard=(front,back) =>{
        const newCard = {
            cardFront: front,
            cardBack: back
        }

        setCards([...cards, newCard])
    }

    const saveCollection = async (collectionData={}) => {
        // submit array of flashcards and collection name
        // batch upload to mongo database with one foreign key to parent and all cards as children
        const response = await fetch(`http://127.0.0.1:4000/flashcards/new`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(collectionData)
         
        })

         return response.json()
    }

    return(
        <>
        <div>
            <h1>
                {props.title}
            </h1>
            <label htmlFor="front">Front of Card
                <input id="front" value={cardFront} onChange={(e) => setCardFront(e.target.value)} />
            </label>
            <label htmlFor="back">Back of Card
                <textarea id="back" value={cardBack} onChange={(e) => setCardBack(e.target.value)} />
            </label>
            <button onClick={()=> addCard(cardFront,cardBack)}>Add Card</button>
        </div>
        <div>
            {cards.map((card,i) => {
                return <div  className="card" key={i}>
                    <p className="card-front">{card.cardFront}</p>
                    <p className="card-back">{card.cardBack}</p>
                    </div>
            })}
        </div>
        <button onClick={()=>saveCollection(
            {title:props.title,
                flashcards: [
                    ...cards
                ]
            
            }).then(data => {
                console.log(data)
            })
            .catch(err => {
                alert(err)
            })
            
            }>Click to Save</button>
      
        </>
    )
}