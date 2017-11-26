import React from 'react';
import PropTypes from 'prop-types';

import CollectionListItem from './CollectionListItem';

/**
 * A list holding all collections
 * @param collections
 * @param onSelect
 * @param selected
 * @param loading
 */
const CollectionList = ({ collections, onSelect, selected, loading }) => (
  <div className="list-group">
    {loading ? <div className="text-center">Loading...</div> : collections.map((collection, index) => (
      <CollectionListItem key={index} isSelected={selected === index} index={index} onSelect={onSelect} collection={collection} />
    ))}
  </div>
);

CollectionList.propTypes = {
  collections: PropTypes.array,
  onSelect: PropTypes.func,
  selected: PropTypes.number,
  loading: PropTypes.bool
};

export default CollectionList;
