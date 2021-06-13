import React from 'react'

export const Header = () => {
  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Landon Hotel</h1>
          <h2>West London</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              />
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              Landon <span>Hotel</span>
            </a>
          </div>
          <ul>
            <li>
              <a className="icon info" href="#hotelinfo">
                <span>info</span>
              </a>
            </li>
            <li>
              <a className="icon rooms" href="#rooms">
                <span>rooms</span>
              </a>
            </li>
            <li>
              <a className="icon dining" href="#dining">
                <span>dining</span>
              </a>
            </li>
            <li>
              <a className="icon events" href="#events">
                <span>events</span>
              </a>
            </li>
            <li>
              <a className="icon attractions" href="#attractions">
                <span>attractions</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
