import React from 'react';
import Cards from '../cards/Cards';
import AddCard from '../addCard/AddCard';

class Notes extends React.Component {
    constructor() {
        super();
        this.state = { notes: [] };
        this.url = 'https://react-http.herokuapp.com';
        this.loadingNotes = this.loadingNotes.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.loadingNotes();
    }

    loadingNotes() {
        console.log('load')
        fetch(`${this.url}/notes`)
            .then(response => response.json())
            .then(data => this.setState({ notes: data }))
            .catch(err => console.log(err))
    }

    onAdd(text) {
        const data = { id: 0, content: text };

        fetch(`${this.url}/notes`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => this.loadingNotes())
            .catch(err => console.log(err))
    }

    onDelete(id) {
        fetch(`${this.url}/notes/${id}`, {
            method: 'DELETE',
        })
            .then(response => this.loadingNotes())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <div className="title">
                    <h1>Notes</h1>   
                    <button className="btn" type="button" onClick={this.loadingNotes}><span className="loading"></span></button>
                </div>
                <Cards notes={this.state.notes} onDelete={this.onDelete} />
                <AddCard onAdd={this.onAdd}/>    
            </>
        )
    }
}

export default Notes