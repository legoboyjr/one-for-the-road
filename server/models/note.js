const uuid = require('uuid');

const notes = {};
const ids = [];

class Note {
  constructor(data){
    this.text = data.text; 
    this.coords = data.coords;
    this.id = uuid.v4();
  }

  save(){
    notes[this.id] = this;
    ids.push(this.id);
    return this;
  }
  static _asArray() {
    return ids.map(id => notes[id]);
  }
  static findById(id) {
    return notes[id] || {};
  }

  static find(query) {
    if(!query) return ids.map(id => notes[id]);
    if(query.id) return [this.findById(query.id)];
    if(query.coords) return this._asArray()
      .filter(note => 
        (note.coords.latitude === query.coords.latitude) &&
                (note.coords.longitue === query.coords.longitude));
    return [];
  }

  static findOne(query) {
    if(!query) return {};
    if(query.id) return this.findById(query.id);
    if(query.coords) return this._asArray()
      .find(note => 
        (note.coords.latitude === query.coords.latitude) &&
                (note.coords.longitude === query.coords.longitude));
    return {};
  }
  static findByIdAndUpdate(id, updates, options) {
    const old = notes[id]; 
    // should address if the note isn't found
    notes[id] = Object.assign({}, old, updates);
    return options.new ? notes[id] : old;

  }

  static findByIdAndRemove(id) {
    const note = notes[id];
    delete notes[id];
    const idx = ids.findIndex(e => e === id);
    ids.splice(idx, 1);
    return note;
  }

}


module.exports = Note;
