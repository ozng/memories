import React from 'react'
import { styles } from './style';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../store/actions/posts'

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch()

    return (
        <Card style={styles.card}>
            <CardMedia style={styles.media} image={post.selectedFile} title={post.title} />
            <div style={styles.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div style={styles.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHoriz fontSize='default' />
                </Button>
            </div>
            <div style={styles.details}>
                <Typography variant='body2' color="textSecondary">{post.tags.map(tag => `#${tag}`)}</Typography>
            </div>
            <Typography style={styles.title} variant='h5' gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography component="p" color="textSecondary" variant='body2' >{post.message}</Typography>
            </CardContent>
            <CardActions style={styles.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAlt fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <Delete fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;