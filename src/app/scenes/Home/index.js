import React, { Component } from 'react';
import { Container } from './style';
import JokeModal from '../../components/JokeModal';
import Header from '../../components/Header';

class Home extends Component {
    render() {
        return (
            <Container>
                <Header />
                <ul>
                    <li>
                        <div>
                            <button type="button" data-toggle="modal" data-target="#jokeModal">
                                Animals
                            </button>
                        </div>
                    </li>
                </ul>
                <JokeModal />
            </Container>
        )
    }
}

export default Home;