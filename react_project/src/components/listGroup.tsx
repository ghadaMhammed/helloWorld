import { MouseEvent } from "react"
function listFunction(){
  var items=[
    'riyadh',
    'tokyo',
    'newyork',
    'paris',
    'london'
  ]
    return <ul className="list-group">
    {items.map((i)=>
    <li className="list-group-item" onClick={handel}>{i}</li>)
    }
  </ul>
}

function handel(e:MouseEvent){
console.log(e)
}

export default listFunction





