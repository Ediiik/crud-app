import React from 'react';
import axios from 'axios';
import Notyf from 'notyf';

import CollectionList from './../components/CollectionList';
import CollectionDetail from './../components/CollectionDetail';
import CollectionEdit from './../components/CollectionEdit';

import 'notyf/dist/notyf.min.css';

class Collection extends React.Component {
  constructor(props) {
    super(props);

    this.api = 'https://jsonplaceholder.typicode.com';

    this.state = {
      collections: [],
      selected: null,
      loading: true,
      editing: false,
    };
  }

  componentWillMount() {
    this.notyf = new Notyf();
  }

  componentDidMount() {
    this.fetchData()
      .then(this.generateCollections.bind(this))
      .catch(() => this.notyf.alert('There was a problem fetching the data.'));
  }

  fetchData() {
    return Promise.all([
      axios.get(`${this.api}/users`),
      axios.get(`${this.api}/posts`),
      axios.get(`${this.api}/albums`)
    ]);
  }

  generateCollections([{ data: users }, { data: posts }, { data: albums }]) {
    const collections = [];

    while (collections.length < 30) {
      const user = users[Math.floor(Math.random() * users.length)];
      const filteredPosts = posts.filter(post => post.userId === user.id);
      const filteredAlbums = albums.filter(album => album.userId === user.id);

      collections.push({
          user,
          post: filteredPosts.splice(Math.floor(Math.random() * filteredPosts.length), 1)[0],
          album: filteredAlbums.splice(Math.floor(Math.random() * filteredAlbums.length), 1)[0],
      });
    }

    this.setState({ collections, loading: false });
  }

  handleSubmit(payload) {
    this.setState((prevState) => {
      const state = JSON.parse(JSON.stringify(prevState));
      state.collections[prevState.selected].post.title = payload.title;
      this.notyf.confirm('The post was updated.');
      return { ...state, editing: false };
    });
  }

  handleDelete() {
    if (! window.confirm('Are you sure?')) {
      return;
    }
    this.setState((prevState) => {
      const state = JSON.parse(JSON.stringify(prevState));
      state.collections.splice(prevState.selected, 1);
      this.notyf.confirm('The post was deleted.');
      return { ...state, editing: false, selected: null };
    });
  }

  handleEdit() {
    this.setState({ editing: true });
  }

  handleEditCancel() {
    this.setState({ editing: false });
  }

  handleClose() {
    this.setState({ selected: null, editing: false });
  }

  handleSelect(index) {
    this.setState({ selected: index, editing: false });
  }

  render() {
    let selectedCollection = null;

    if (this.state.selected !== null && this.state.editing) {
      selectedCollection = <CollectionEdit collection={this.state.collections[this.state.selected]} onSubmit={this.handleSubmit.bind(this)} onEditCancel={this.handleEditCancel.bind(this)} />;
    } else if (this.state.selected !== null) {
      selectedCollection = <CollectionDetail collection={this.state.collections[this.state.selected]} onEdit={this.handleEdit.bind(this)} onClose={this.handleClose.bind(this)} onDelete={this.handleDelete.bind(this)} />;
    }

    return (
      <div>
        {selectedCollection}
        <CollectionList collections={this.state.collections} onSelect={this.handleSelect.bind(this)} selected={this.state.selected} loading={this.state.loading} />
      </div>
    )
  }
}

export default Collection;
