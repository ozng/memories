import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
// Memories Image
import memories from './images/memories.png'
//Components
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
//Styles
import { styles } from './styles'
// Redux
import { useDispatch } from 'react-redux'
import { getPosts } from './store/actions/posts'

const App = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar style={styles.appBar} position="static" color="inherit">
                <Typography style={styles.heading} variant="h2" align="center" >Memories</Typography>
                <img style={styles.image} src={memories} alt="memories" height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App