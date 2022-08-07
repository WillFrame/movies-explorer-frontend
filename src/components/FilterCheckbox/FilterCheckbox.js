import React, { useEffect, useState } from "react";

function FilterCheckbox({ setSearch, search, searched }) {
    const [checked, setChecked] = useState(searched.short);
    console.log(searched.short);
 
    function checkboxChange() {
        console.log(checked);
        setChecked(!checked);
        // setSearch({ ...search, short: checked });
    }

    useEffect(() => {
        setSearch({ ...search, short: checked });
    }, [checked]);

    // console.log(search.short, checked);

    return (
        <section className="filter-checkbox">
            <label className="filter-checkbox__tumbler-container">
                <input className="filter-checkbox__tumbler" type="checkbox" checked={checked} onChange={checkboxChange} />
                <p className="filter-checkbox__tumbler-name">Короткометражки</p>
            </label>
        </section>
    )
}

export default FilterCheckbox;