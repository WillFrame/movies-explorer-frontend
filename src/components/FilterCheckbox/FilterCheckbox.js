import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

function FilterCheckbox({ setSearch, search }) {
    const [checked, setChecked] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/movies') {
            setSearch({ ...search, short: checked });
            setChecked(JSON.parse(localStorage.getItem('search')).short);
        }
    }, [])

    function checkboxChange() {
        setSearch({ ...search, short: !checked });
        setChecked(!checked);
    }

    return (
        <section className="filter-checkbox">
            <label className="filter-checkbox__tumbler-container">
                <input className="filter-checkbox__tumbler" type="checkbox" onChange={checkboxChange} checked={checked} />
                <p className="filter-checkbox__tumbler-name">Короткометражки</p>
            </label>
        </section>
    )
}

export default FilterCheckbox;