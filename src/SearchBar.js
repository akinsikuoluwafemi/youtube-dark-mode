import React, { useState } from 'react';

const SearchBar = () => {
    
    const [value, setValue] = useState('')
    
    const onInputChange = (e) => {
        setValue(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(value)

        // todo: call callback

    }

    return (
        <form className="w-100" onSubmit={onFormSubmit}>
            <div className="form-group border rounded py-2 px-3">
                <label>Video Search</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Search for a video"
                    value={value}
                    onChange={onInputChange}
                />
            </div>
        </form>
    )
}
export default SearchBar;