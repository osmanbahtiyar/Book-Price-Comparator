import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    return (
        <CardGroup>
            <Card style={{ width: '50px' }}>
                <Card.Img variant='top' src={book.book_image} />
                <Card.Body>
                    <Card.Title>{book.book_name}</Card.Title>
                    <Card.Text as='p'>{book.book_author}</Card.Text>
                    <Card.Text as='p'>{book.book_publisher}</Card.Text>
                    <Card.Text as='p'>{book.book_price} TL</Card.Text>
                    <Link to={book.page}>
                        <Button href={book.book_page}>
                            {book.book_website}
                        </Button>{' '}
                    </Link>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default Book;
