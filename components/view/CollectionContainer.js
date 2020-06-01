import {useState, useEffect} from 'react'

export default function CollectionContainer(props){
    return(
        <div>
            {props.collections.map(collection => {
                return<div key={collection._id}>
                    <a href={`/view/${collection._id}`}>{collection.title}</a>
                </div>
            })}
        </div>
    )
}