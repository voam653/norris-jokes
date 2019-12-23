import React, { Component } from 'react';
import { getCategories } from '../../actions/categories';
import { connect } from 'react-redux';
import { List } from './styles';
import CategoryItem from '../CategoryItem';

class CategoryList extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories } = this.props;
        return (
            <List>
                {
                    categories.map((category, index) => (
                        <CategoryItem key={index} category={category} />
                    ))
                }
            </List>
        )
    }
}

const mapStateToProps = ({ categories }) => {
    return { categories };
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(getCategories())
    };
}

const CategoryListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryList);
export default CategoryListContainer;