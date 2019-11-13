import React from 'react';
const dep=['Marketing & PR','Customer Success & Sales','IT, Product, Design & UX','Finance & Administration','HR & more'
]
 function Nav() {
return(<div className='body'> 


<img className="image1" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/>
        <div className="p0">
            <p className="p1">About us</p>
            <p className="p2">Career</p>
            <p className="p3">Departements
            <ul className='drop-down-item'>
                  { dep.map((el,i) => ( <li key={i} className='drop-down'>
                      {el}
                  </li>

                  ))}
                  
               
            </ul>
            </p>
        </div>
</div>

)
}
export default Nav;