import React, { useEffect } from 'react';
import './home-1-49.css';

// PUBLIC_INTERFACE
export default function Home149() {
  /**
   * This component was generated from Figma screen 1:49 (home-1-49.html).
   * All images are referenced from public assets under /assets/figmaimages/.
   * Styling is preserved pixel-for-pixel via the imported CSS file.
   */

  // Convert any simple DOMContentLoaded scaffolding to React useEffect
  useEffect(() => {
    // No interactive logic was specified in the original JS.
    // Placeholder for future behaviors (e.g., filter button click handlers, favorite toggles).
  }, []);

  return (
    <div className="home149-responsive" aria-label="Home screen responsive wrapper">
      <div className="home149-canvas">
        <div className="screen screen--home" role="main" aria-label="Home screen">
          {/* Foodgo Title */}
          <h1 className="text text--title" aria-label="Brand">Foodgo</h1>

          {/* Subtitle */}
          <p className="text text--subtitle">Order your favourite food!</p>

          {/* Mask group (avatar) */}
          <div className="mask-group" aria-hidden="true">
            <img className="mask-group__rect" src="/assets/figmaimages/figma_image_1_53.png" alt="Rectangle 57" role="img" />
            <img className="mask-group__image" src="/assets/figmaimages/figma_image_1_54.png" alt="image 8" role="img" />
          </div>

          {/* Search and filter group */}
          <section className="search-filter" aria-label="Search and filters">
            <div className="search-filter__search">
              <div className="search-filter__search-bg" aria-hidden="true"></div>
              <button className="search-filter__filter-button" type="button" aria-label="Open filters">
                <div className="search-filter__filter-bg" aria-hidden="true"></div>
                <div className="icon icon--settings" aria-hidden="true">
                  <div className="icon__bar icon__bar--1"></div>
                  <div className="icon__bar icon__bar--2"></div>
                  <div className="icon__bar icon__bar--3"></div>
                </div>
              </button>
              <div className="search-filter__input">
                <img className="icon--search" src="/assets/figmaimages/figma_image_1_61_405_994.png" alt="Search icon" role="img" />
                <span className="search-filter__placeholder">Search</span>
              </div>
            </div>
          </section>

          {/* Categories frame */}
          <section className="categories" aria-label="Categories">
            {/* Group 7: All */}
            <button className="category category--all" type="button" aria-label="Category: All">
              <img className="category__bg category__bg--all" src="/assets/figmaimages/figma_image_1_66.png" alt="Rectangle 68" />
              <span className="category__label category__label--all">All</span>
            </button>
            {/* Group 6: Combos */}
            <button className="category category--combos" type="button" aria-label="Category: Combos">
              <img className="category__bg category__bg--combos" src="/assets/figmaimages/figma_image_1_69.png" alt="Rectangle 69" />
              <span className="category__label">Combos</span>
            </button>
            {/* Group 5: Sliders */}
            <button className="category category--sliders" type="button" aria-label="Category: Sliders">
              <div className="category__bg category__bg--sliders" aria-hidden="true"></div>
              <span className="category__label">Sliders</span>
            </button>
            {/* Group 4: Classic */}
            <button className="category category--classic" type="button" aria-label="Category: Classic">
              <img className="category__bg category__bg--classic" src="/assets/figmaimages/figma_image_1_75.png" alt="Rectangle 71" />
              <span className="category__label">Classic</span>
            </button>
          </section>

          {/* Cards Grid Group 14 */}
          <section className="cards" aria-label="Popular items">
            {/* Group 10 Card */}
            <article className="card" aria-label="Cheeseburger Wendy's Burger">
              <div className="card__bg"></div>
              <button className="card__fav" aria-label="Add to favorites" type="button">
                <img src="/assets/figmaimages/figma_image_1_80_405_612.png" alt="heart icon" role="img" />
              </button>
              <h2 className="card__title">Cheeseburger Wendy&apos;s Burger</h2>
              <img className="card__shadow" src="/assets/figmaimages/figma_image_1_82.png" alt="Ellipse 1 shadow" />
              <img className="card__image" src="/assets/figmaimages/figma_image_1_83.png" alt="Cheeseburger image" />
              <div className="card__rating" aria-label="Rating 4.9 out of 5">
                <img className="card__star" src="/assets/figmaimages/figma_image_1_85_406_3368.png" alt="star icon" role="img" />
                <span className="card__rating-text">4.9</span>
              </div>
            </article>

            {/* Group 11 Card */}
            <article className="card card--b" aria-label="Hamburger Veggie Burger">
              <div className="card__bg"></div>
              <button className="card__fav" aria-label="Add to favorites" type="button">
                {/* decorative */}
              </button>
              <h2 className="card__title">Hamburger <br />Veggie Burger</h2>
              <div className="card__ellipse" aria-hidden="true"></div>
              <img className="card__image" src="/assets/figmaimages/figma_image_1_92.png" alt="Veggie Burger image" />
              <div className="card__rating" aria-label="Rating 4.8 out of 5">
                <span className="card__rating-text">4.8</span>
              </div>
            </article>

            {/* Group 12 Card */}
            <article className="card card--c" aria-label="Hamburger Chicken Burger">
              <div className="card__bg"></div>
              <button className="card__fav" aria-label="Add to favorites" type="button"></button>
              <h2 className="card__title">Hamburger <br />Chicken Burger</h2>
              <img className="card__shadow" src="/assets/figmaimages/figma_image_1_100.png" alt="Ellipse 1 shadow" />
              <img className="card__image" src="/assets/figmaimages/figma_image_1_101.png" alt="Chicken Burger image" />
              <div className="card__rating" aria-label="Rating 4.6 out of 5">
                <span className="card__rating-text">4.6</span>
              </div>
            </article>

            {/* Group 13 Card */}
            <article className="card card--d" aria-label="Hamburger Fried Chicken Burger">
              <div className="card__bg"></div>
              <button className="card__fav" aria-label="Add to favorites" type="button"></button>
              <h2 className="card__title">Hamburger <br />Fried Chicken Burger</h2>
              <img className="card__shadow" src="/assets/figmaimages/figma_image_1_109.png" alt="Ellipse 1 shadow" />
              <img className="card__image" src="/assets/figmaimages/figma_image_1_110.png" alt="Fried Chicken Burger image" />
              <div className="card__rating" aria-label="Rating 4.5 out of 5">
                <span className="card__rating-text">4.5</span>
              </div>
              <img className="card__ellipse-2" src="/assets/figmaimages/figma_image_1_114.png" alt="Ellipse 2" />
            </article>
          </section>

          {/* Bottom nav Group 16 */}
          <nav className="bottom-nav" aria-label="Bottom navigation">
            <div className="bottom-nav__shape">
              <img className="bottom-nav__bg" src="/assets/figmaimages/figma_image_1_117.png" alt="" role="img" />
              <img className="bottom-nav__circle" src="/assets/figmaimages/figma_image_1_118.png" alt="" role="img" />
            </div>
            <button className="bottom-nav__item bottom-nav__item--home" aria-label="Home" type="button"></button>
            <button className="bottom-nav__item bottom-nav__item--user" aria-label="Profile" type="button">
              <img className="bottom-nav__user-vec1" src="/assets/figmaimages/figma_image_1_124_405_1279.png" alt="" />
              <img className="bottom-nav__user-vec2" src="/assets/figmaimages/figma_image_1_124_405_1280.png" alt="" />
            </button>
            <button className="bottom-nav__item bottom-nav__item--comment" aria-label="Comments" type="button">
              <img className="bottom-nav__comment" src="/assets/figmaimages/figma_image_1_125_405_300.png" alt="" />
            </button>
            <span className="bottom-nav__dot" aria-hidden="true"></span>
            <div className="fab">
              <img className="fab__bg" src="/assets/figmaimages/figma_image_1_128.png" alt="Ellipse 7" role="img" />
              <span className="fab__plus" aria-hidden="true"></span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
