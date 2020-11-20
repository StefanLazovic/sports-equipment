import React from 'react'



const Pagination = ({ meta, callPaginationProducts }) => {

  // explanation: https://www.oreilly.com/library/view/react-up/9781491931813/ch04.html
  const fixEntities = (item) => {
    if (item.toString().includes('&laquo;')) {
      return item.replace('&laquo;', '\u00AB')
    } else if (item.toString().includes('&raquo;')) {
      return item.replace('&raquo;', '\u00bb')
    } else {
      return item
    }
  }
  

  return (
    <div className="row justify-content-center">
      <nav>
        <ul className="pagination">
          {
            !meta.links
            ? null
            : meta.links.map(link => (
              <li className={`page-item ${link.active === true ? 'active' : ''}`} key={link.label}>
                <button 
                onClick={() => callPaginationProducts(link.url)} 
                className="page-link" 
                disabled={link.active}
                >
                  {fixEntities(link.label)}
                </button>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )

}



export default Pagination