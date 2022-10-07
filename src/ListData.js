import React from 'react';

function listData(props) {
	const myData = props.data
	const deleteItem = props.changeName
	return (
		<div>
			 <div>
				<ul>
          {myData.map((item, index) =>
          <li key={index}>
           {item.name}
            {item.age}
          </li>
					)};
					</ul>
        </div>
			 <button onClick={deleteItem}>Change Message</button>
		</div>
	)
}

export default listData;
