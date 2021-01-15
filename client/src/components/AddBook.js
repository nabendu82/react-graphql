import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { getAuthorsQuery, addBookMutation } from '../queries/queries';

const AddBook = () => {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [addBook] = useMutation(addBookMutation);
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    if (loading) return <p>Loading Query...</p>;
    if (error) return <p>Error in Query...</p>;

    const submitForm = e => {
        e.preventDefault()
        console.log(name, genre, authorId)
        addBook({
            variables: {
                name,
                genre,
                authorId
            }
        })
        setName('')
        setGenre('')
        setAuthorId('')
    }

    return (
        <form id="add-book" onSubmit={submitForm}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre} onChange={e => setGenre(e.target.value)}/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select value={authorId} onChange={e => setAuthorId(e.target.value)}>
                    <option>Select author</option>
                    {data.authors.map(author => <option key={ author.id } value={author.id}>{ author.name }</option> 
                    )}
                </select>
            </div>
            <button>+</button>

        </form>
    )
}

export default AddBook
