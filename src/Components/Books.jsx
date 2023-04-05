import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookCard from './BookCard';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    if (navigation.state === "loading") {
      return <LoadingSpinner />;
    }
    
    const {books} = useLoaderData();


    return (
        <div className='my-container'>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                {
                    books.map(book => <BookCard
                        key={book.isb13}
                        book={book}
                    />)
                }
            </div>
        </div>
    );
};

export default Books;