import React, { Component } from 'react';
import { getJoke } from '../../actions/joke';
import { connect } from 'react-redux';
import {
    LoadingImg,
    ModalContainer,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Content,
    CloseButton,
    CloseIcon,
    Figure,
    ChuckNorrisImg,
    Joke
} from './styles';

const AMOUNT_PREVIOUS = -1;
const AMOUNT_NEXT = 1;

class JokeModal extends Component {

    constructor(props) {
        super(props);

        this.getJoke = this.getJoke.bind(this);
        this.jokeTemplate = this.jokeTemplate.bind(this);
        this.getAnotherJoke = this.getAnotherJoke.bind(this);
        this.loadingTemplate = this.loadingTemplate.bind(this);
        this.getFirstCategory = this.getFirstCategory.bind(this);
        this.getCategoryByIndex = this.getCategoryByIndex.bind(this);
        this.getJokeNextCategory = this.getJokeNextCategory.bind(this);
        this.getJokePreviousCategory = this.getJokePreviousCategory.bind(this);
    }

    getFirstCategory(categories) {
        return categories[0];
    }

    getJoke(category) {
        this.props.getJoke(category);
    }

    getAnotherJoke(categories) {
        this.getJoke(this.getFirstCategory(categories));
    }

    getJokePreviousCategory(categories) {
        this.getJoke(
            this.getCategoryByIndex(this.getFirstCategory(categories), AMOUNT_PREVIOUS)
        );
    }

    getJokeNextCategory(categories) {
        this.getJoke(
            this.getCategoryByIndex(this.getFirstCategory(categories), AMOUNT_NEXT)
        );
    }

    getCategoryByIndex(category, changeValue) {
        const { categories } = this.props;
        const index = categories.indexOf(category) + changeValue;

        if (index < 0) {
            return categories.get(categories.size - 1);
        } else if (index >= categories.size) {
            return categories.get(0);
        }

        return categories.get(index);
    }

    loadingTemplate() {
        return (
            <LoadingImg src="loading.gif" alt="Loading Joke..." />
        );
    }

    jokeTemplate(joke) {
        return (
            <>
                <ModalHeader className="modal-header">
                    <Content className="content">
                        <h5 className="modal-title">
                            { this.getFirstCategory(joke.categories) }
                        </h5>

                        <button
                            id="loadAnotherJoke"
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => this.getAnotherJoke(joke.categories)}>
                            Load another joke
                        </button>
                    </Content>

                    <CloseButton type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <CloseIcon aria-hidden="true">&times;</CloseIcon>
                    </CloseButton>
                </ModalHeader>

                <ModalBody className="modal-body">
                    <Figure>
                        <ChuckNorrisImg src="deal.gif" alt="Chuck Norris" />
                        <Joke> { joke.value } </Joke>
                    </Figure>
                </ModalBody>

                <ModalFooter className="modal-footer">
                    <button
                        id="previousJokeCategory"
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => this.getJokePreviousCategory(joke.categories)}>
                        Previous Category
                    </button>

                    <button
                        id="nextJokeCategory"
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.getJokeNextCategory(joke.categories)}>
                        Next Category
                    </button>
                </ModalFooter>
            </>
        );
    }

    render() {
        const { joke } = this.props;
        return (
            <ModalContainer
                className="modal fade"
                id="jokeModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="jokeModal"
                aria-hidden="true">

                <Modal className="modal-dialog modal-dialog-centered" role="document">
                    <ModalContent className="modal-content">
                        { joke ? this.jokeTemplate(joke) : this.loadingTemplate() }
                    </ModalContent>
                </Modal>

            </ModalContainer>
        )
    }
}

const mapStateToProps = ({ joke, categories }) => {
    return { joke, categories };
};

const mapDispatchToProps = dispatch => {
    return {
        getJoke: (category) => dispatch(getJoke(category))
    };
}

const JokeModalContainer = connect(mapStateToProps, mapDispatchToProps)(JokeModal);
export default JokeModalContainer;