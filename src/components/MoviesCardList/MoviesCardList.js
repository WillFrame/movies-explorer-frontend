import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ elements }) {
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__container">
                {elements.map((item) => 
                    <MoviesCard
                        title={item.title}
                        duration={item.duration}
                        image={item.image}
                    />
                )}
            </div>

            { elements.length > 12 
                ? <button className="movies-card-list__more-button">Ещё</button>
                : <div className="movies-card-list__margin-bottom"></div>
            }
        </section>
    )
}

export default MoviesCardList;