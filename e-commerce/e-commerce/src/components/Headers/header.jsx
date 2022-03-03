import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function header()  {
  return (
    <header className="content-wrapper">
      <a href="https://community.algolia.com/instantsearch.js/" className="is-logo">
          <img src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png" width={40} />
      </a>
      <a href="./" className="logo">amazing</a>
      <div className="input-group">
        <div className="ais-search-box">
            <input type="text"
                className="form-control search "
                id="input-search"
                placeholder="Search a product"
                
            />
        </div>
        <span className="input-group-btn">
          <button className="btn btn-default">
          <FontAwesomeIcon icon={faSearch} />
          </button>
        </span>
      </div>
    </header>
  );
  };
export default header