import PropTypes from 'prop-types';

function Card({ note, onDelete }) {
    return (
        <div className="card">
            <button className="delete" onClick={() => onDelete(note.id)}>X</button>
            <div className="text">{note.content}</div>
        </div>
    )
}

Card.propTypes = {
    note: PropTypes.object,
    onDelete: PropTypes.func
}

export default Card