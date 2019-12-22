import React, { Component } from 'react';
import { getJoke } from '../../actions/joke';
import { connect } from 'react-redux';

const AMOUNT_PREVIOUS = -1;
const AMOUNT_NEXT = 1;

class JokeModal extends Component {

    constructor(props) {
        super(props);
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

    getAnotherJoke(categories) {
        this.props.getJoke(this.getFirstCategory(categories));
    }

    getJokePreviousCategory(categories) {
        this.props.getJoke(
            this.getCategoryByIndex(this.getFirstCategory(categories), AMOUNT_PREVIOUS)
        );
    }

    getJokeNextCategory(categories) {
        this.props.getJoke(
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loading Joke..." />
        );
    }

    jokeTemplate(joke) {
        return (
            <>
                <div className="modal-header">
                    <div className="content">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                            { this.getFirstCategory(joke.categories) }
                        </h5>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => this.getAnotherJoke(joke.categories)}>
                            Load another joke
                        </button>
                    </div>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <figure>
                        <img src="https://www.reactiongifs.com/wp-content/uploads/2013/06/deal.gif" alt="Chuck Norris" />
                        <figcaption> { joke.value } </figcaption>
                    </figure>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => this.getJokePreviousCategory(joke.categories)}>
                        Previous Category
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.getJokeNextCategory(joke.categories)}>
                        Next Category
                    </button>
                </div>
            </>
        );
    }

    render() {
        const { joke } = this.props;
        return (
            <div className="modal fade" id="jokeModal" tabIndex="-1" role="dialog" aria-labelledby="jokeModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        { joke ? this.jokeTemplate(joke) : this.loadingTemplate() }
                    </div>
                </div>
            </div>
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