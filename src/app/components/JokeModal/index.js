import React, { Component } from 'react';
import { connect } from 'react-redux';

class JokeModal extends Component {
    constructor(props) {
        super(props);
        this.jokeTemplate = this.jokeTemplate.bind(this);
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
                            { joke.categories[0] }
                        </h5>
                        <button type="button" className="btn btn-outline-primary"> Load another joke </button>
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
                    <button type="button" className="btn btn-secondary"> Previous Category </button>
                    <button type="button" className="btn btn-primary"> Next Category </button>
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

const mapStateToProps = ({ joke }) => {
    return { joke };
};

const JokeModalContainer = connect(mapStateToProps)(JokeModal);
export default JokeModalContainer;