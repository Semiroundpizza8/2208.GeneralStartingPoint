import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const cardStyles = {
    maxWidth: '150px'
}

const MovieCard = ({ movie }) => {
    return (
        <Card style={cardStyles}>
            <CardContent>
                <Typography variant="h5">{movie.name}</Typography>
                <Typography variant="subheader" color="text.secondary">RUNTIME: {movie.runtime}</Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;