import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { articles: state.articles}
}

const ConnectedList = ({ articles }) => (
    <ul className="collection">
        {articles.map(el => (
            <li className="collection-item" key={el.id}>{el.title}</li>
        ))}
    </ul>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List
