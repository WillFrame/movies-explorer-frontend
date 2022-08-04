import React, { useState } from "react";

function FilterCheckbox({ setSearch, search }) {
    const [checked, setChecked] = useState(true);

    function checkboxChange() {
        setChecked(!checked);
        setSearch({ ...search, short: checked });
    }

    return (
        <section className="filter-checkbox">
            <label className="filter-checkbox__tumbler-container">
                <input className="filter-checkbox__tumbler" type="checkbox" onChange={checkboxChange} />
                <p className="filter-checkbox__tumbler-name">Короткометражки</p>
            </label>
        </section>
    )
}

export default FilterCheckbox;