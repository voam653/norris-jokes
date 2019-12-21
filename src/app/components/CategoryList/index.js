import React, { Component } from 'react';

class CategoryList extends Component {
    render() {
        return (
            <ul>
                <li>
                    <div>
                        <button type="button" data-toggle="modal" data-target="#jokeModal">
                            Animals
                        </button>
                    </div>
                </li>
            </ul>
        )
    }
}

export default CategoryList;