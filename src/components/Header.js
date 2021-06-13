import React from 'react'
import { List } from './common'

import menuLinksData from './data/menu_links.json'

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
          <List
            data={menuLinksData}
            iteratee={({ className, href, text }) => (
              <List.Item key={`${href}_${text}`}>
                <a className={`icon ${className}`} href={href}>
                  <span>{text}</span>
                </a>
              </List.Item>
            )}
          />
        </div>
      </nav>
    </header>
  )
}
