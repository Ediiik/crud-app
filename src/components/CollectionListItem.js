import React from 'react';
import PropTypes from 'prop-types';

/**
 * An item of the collection list
 * @param collection
 * @param index
 * @param onSelect
 * @param isSelected
 */
const CollectionListItem = ({ collection, index, onSelect, isSelected }) => (
  <a href="#detail" className={`list-group-item${isSelected ? ' active' : ''}`} onClick={() => onSelect(index)}>
    <strong>{collection.post.title}</strong><br />
    <small>{collection.album.title}</small><br />
    <em>- {collection.user.name}</em>
  </a>
);

CollectionListItem.propTypes = {
  collection: PropTypes.object,
  index: PropTypes.number,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool
};

export default CollectionListItem;
