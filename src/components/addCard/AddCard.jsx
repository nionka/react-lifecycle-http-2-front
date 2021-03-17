import { useState } from 'react';
import PropTypes from 'prop-types';

function AddCard( { onAdd }) {
    const [text, setText] = useState({ value: '' });

    const onAddText = (e) => {
        setText(prevText => ({ value: e.target.value }));
    }

    const handleClick = (e) => {
        if (text.value.trim() === '') return null

        onAdd(text.value);
        setText({ value: '' });
    }

    return (
        <div className="addCard">
            <h2>New Note</h2>
            <div className="textarea-box">
                <textarea className="textarea" value={text.value} onChange={onAddText}></textarea>
                <button type="button" className="add" onClick={handleClick}></button>
            </div>
        </div>
    )
}

AddCard.propTypes = {
    onAdd: PropTypes.func
}

export default AddCard