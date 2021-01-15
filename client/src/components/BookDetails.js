import React from 'react'

const BookDetails = (props) => {
    console.log(props.book)
    function displayBookDetails(){
        if(props.book){
            return(
                <div>
                    <h2>{ props.book.name }</h2>
                    <p>Genre - { props.book.genre }</p>
                    <p>Author - { props.book.author.name }</p>
                    <p>Age - { props.book.author.age }</p>
                </div>
            );
        } else {
            return( <div>No book selected...</div> );
        }
    }

    return (
        <div id="book-details">
            {displayBookDetails()}
        </div>
    )
}

export default BookDetails
