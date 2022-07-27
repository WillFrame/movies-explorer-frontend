import React from "react";
import Card from "./Card";

function Films({ cardsLength }) {
    return (
        <section className="films">
            <div className="films__container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            { cardsLength > 12 
                ? <button className="films__more-button button-styles">Ещё</button>
                : <></>
            }
        </section>
    )
};

export default Films;