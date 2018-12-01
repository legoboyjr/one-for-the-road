import React from 'react'
import PropTypes from 'prop-types'

const Note = props => {
    const { text, coords, id, remove } = props;
    return (
        <div className="flex w-100 p-1">
            <div className="flex flex-column flex-grow-1">
                <p>{text}</p>
                <small>@ {coords.latitude.toFixed(2)}&deg;,{coords.longitude.toFixed(2)}&deg;</small>
            </div>
            <button className="w4 input-reset" onClick={() => remove(id)}>&times;</button>
        </div>
    );
}

Note.propTypes = {
    text: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    coords: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
    }).isRequired,
}

export default function NoteView(props) {
    const { remove, notes } = props;
    return (
        <section className="flex flex-column justify-content-start align-items-center flex-grow-1">
            {notes ?
              notes.map(note => <Note key={note.id} remove={remove} {...note}/>) :
             "No Notes"}
        </section>
    );
}

NoteView.propTypes = {
    notes: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired 
}