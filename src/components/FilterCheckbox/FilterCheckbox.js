import React from "react";

function FilterCheckbox() {
    return (
        <section className="filter-checkbox">
            <label className="filter-checkbox__tumbler-container">
                <input className="filter-checkbox__tumbler" type="checkbox" />
                <p className="filter-checkbox__tumbler-name">Короткометражки</p>
            </label>
        </section>
    )
}

export default FilterCheckbox;