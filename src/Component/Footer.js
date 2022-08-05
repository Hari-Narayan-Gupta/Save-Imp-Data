import React from 'react'

export default function Footer(props) {
  
    const year = new Date().getFullYear();

  return (
    <>
         <footer>
            <p>Copyright © {year}</p>
         </footer>
    </>
  )
}
