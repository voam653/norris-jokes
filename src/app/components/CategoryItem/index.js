import React, { Component } from 'react';
import { getJoke } from '../../actions/joke';
import { connect } from 'react-redux';

class CategoryItem extends Component {
    constructor(props){
        super(props);
        this.getJoke = this.getJoke.bind(this);
    }

    getJoke(category) {
        this.props.getJoke(category);
    }

    render() {
        const { category } = this.props;
        return (
            <li>
                <button
                    type="button"
                    data-toggle="modal"
                    data-target="#jokeModal"
                    onClick={ () => this.getJoke(category) }>
                    { category }
                </button>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getJoke: (category) => dispatch(getJoke(category))
    };
}

const CategoryItemContainer = connect(null, mapDispatchToProps)(CategoryItem);
export default CategoryItemContainer;