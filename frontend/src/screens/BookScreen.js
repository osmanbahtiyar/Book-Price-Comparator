import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Book from '../components/Book';

const BookScreen = ({ match }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await axios.get(`/book/${match.params.search_param}`);
            let newBooks = [];
            if (data.data[0] !== undefined) {
                newBooks.push(data.data[0]);
            }
            if (data.data[1] !== undefined) {
                newBooks.push(data.data[1]);
            }
            if (data.data[2] !== undefined) {
                newBooks.push(data.data[2]);
            }

            setBooks(newBooks);
        };
        fetchBooks();
        // eslint-disable-next-line
    }, []);

    if (books[0] === undefined) {
        return <div></div>;
    }
    return (
        <div>
            <Link to='/'>
                <Button
                    variant='info'
                    style={{ margin: '1.5rem', width: '8rem' }}
                >
                    Go Back
                </Button>{' '}
            </Link>
            <h1 style={{ alignContent: 'center' }}>{books[0].book_name}</h1>
            <Row>
                {books.map((book) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Book book={book} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default BookScreen;
