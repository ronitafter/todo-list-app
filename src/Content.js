import React from 'react';
import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';


function Content() {
	const [items, setItems] = useState([
		{
			id: 1,
			checked:false,
			item: 'sushi'
	},
		{
			id: 2,
			checked:false,
			item: 'coffee'
	},
	{
			id: 3,
			checked:false,
			item: 'chocolate'
	},
]);

const handleCheck = (id) =>{
	const listItems = items.map((item)=> item.id === id ? 
	{...item, checked: ! item.checked } : item);
	setItems(listItems)
	//const listItems = 
	//  id: number;
   //  checked: boolean;
   //  item: string;
	
}

return (
  <main>
  <ul>{items.map((item)=>(
	<li key={item.id} className='item'>
	<input 
	type="checkbox" 
	onChange={()=> handleCheck(item.id)}
	checked={item.checked}

	/> 
	<label>{item.item}</label>
	<FaTrashAlt
	 role="button" 
	 tabIndex="0"/>
	</li>
  ))}</ul>
  </main>
  )
 }
 export default Content


	// const [name, seteName] = useState('K');
	// const [count, setCount] = useState(0);

// 	const nameChangeHandle = () =>{
//    const names = ['A', 'B', 'C', 'D', 'E'];
//    const int = Math.floor(Math.random() * 5);
//    // return names[int];
// 	seteName(names[int])
//   }

//   const handleClick = () => {
// 	setCount(count + 1)
// 	setCount(count + 1)
// 	console.log(count)

//   }

//    const handleClick2 = () => {
// 	console.log(count)
//   }

//     const handleClick3 = (e) => {
// 		// console.log(e.target);
// 		console.log(e.target.innerText);

//   }

	// <p onDoubleClick={handleClick}>
	// 	hello {name}!
	// </p>
	// <button onClick={nameChangeHandle}>Change Name</button>
	// <button onClick={()=>handleClick2('A')}>Click It</button>
	// <button onClick={(e)=>handleClick3(e)}>Click It</button>
	// <button onClick={handleClick}>Count</button>
	// <button onClick={handleClick2}>Count2</button>