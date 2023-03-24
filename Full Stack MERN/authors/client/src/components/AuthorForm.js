import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthorForm = ({ author, formSubmit, formErrors }) => {
    const [name, setName] = useState(author.name);
    console.log("======", name);

    const handleSubmit = (e) => {
        e.preventDefault();

        formSubmit({
            name,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-2">
            <div className="form-floating d-flex align-items-center gap-3">
                <input
                    className="form-control"
                    id="floatingTitle"
                    placeholder="2"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Name</label>
                {formErrors.name && (
                    <p className="text-danger">{formErrors.name.message}</p>
                )}
                <Link to="/" className="btn btn-primary">
                    Cancel
                </Link>
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default AuthorForm;
