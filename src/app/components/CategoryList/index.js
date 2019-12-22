import React, { Component } from 'react';
import { getCategories } from '../../actions/categories';
import { getJoke } from '../../actions/joke';
import { connect } from 'react-redux';

class CategoryList extends Component {
    constructor(props){
        super(props);
        this.getJoke = this.getJoke.bind(this);
    }

    componentDidMount() {
        this.props.getCategories();
    }

    getJoke(category) {
        this.props.getJoke(category);
    }

    render() {
        const { categories } = this.props;
        return (
            <ul>
                {
                    categories.map((category, index) => (
                        <li key={index}>
                            <div>
                                <button
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#jokeModal"
                                    onClick={ () => this.getJoke(category) }>
                                    { category }
                                </button>
                            </div>
                        </li>
                    ))
                }

            </ul>
        )
    }
}

const mapStateToProps = ({ categories, joke }) => {
    return { categories, joke };
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(getCategories()),
        getJoke: (category) => dispatch(getJoke(category))
    };
}

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);
export default CategoryListContainer;