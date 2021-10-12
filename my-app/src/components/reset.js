import React from 'react';

class Reset extends React.Component {
    handleSubmit(e) {
        localStorage.clear();
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)} class="formpage">
            <button class="submit-button" type="submit">Reset Scores</button>
        </form>
    }
}

export default Reset;