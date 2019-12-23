import React, { Component } from 'react';
import { Container } from './styles';
import JokeModal from '../../components/JokeModal';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';

class Home extends Component {
    render() {
        return (
            <Container>
                <Header />
                <CategoryList />
                <JokeModal />
            </Container>
        )
    }
}

export default Home;