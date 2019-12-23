import React, { Component } from 'react';
import { getJoke } from '../../actions/joke';
import { connect } from 'react-redux';
import { Item, Button } from './styles';

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
            <Item>
                <Button
                    type="button"
                    data-toggle="modal"
                    data-target="#jokeModal"
                    onClick={ () => this.getJoke(category) }>
                    { category }
                </Button>
            </Item>
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