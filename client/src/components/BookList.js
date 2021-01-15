import React from 'react'
import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data)
    return (
        <>
            <ul className="book-list">
                {data.books.map(book => (
                    <>
                        <BookDetails book={book} />
                    </>
                ))}
            </ul>
            
        </>
    )
}

export default BookList
