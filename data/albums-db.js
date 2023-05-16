// data/todo-db.js

const albums = [
    {id: "0", name: 'Random Access Memories', artist: 'Daft Punk', released: 2013},
    {id: "1", name: 'Meteora', artist: 'Linking Park', released: 2003},
    {id: "2", name: 'Thriller', artist: 'Michael Jackson', released: 1982}
  ];

  module.exports = {
    getAll: function() {
      return albums;
    },
    getOne: function(album) {
      return albums[album];
    }
  };