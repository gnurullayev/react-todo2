import React from 'react';
import { useState } from 'react';

function EditForm({editTodo}) {
    const [value,setValue] = useState("")

    const editPost = (e) => {
        e.preventDefault()
        editTodo(value)
    }

    return (
        <div className='edit-modal'>
            <div className="edit-modal-content p-3">
                <form onSubmit= {editPost}>
                    <input
                    className='form-control mb-3' 
                    type="text" 
                    placeholder="Ma'lumot kiriting"
                    onChange={(e) => setValue(e.target.value)}
                    required
                    />

                    <button className='btn btn-primary w-100'>Add post</button>
                </form>
            </div>
        </div>
    );
}

export default EditForm;