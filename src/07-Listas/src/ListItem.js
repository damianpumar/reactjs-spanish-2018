import React, { Fragment } from 'react';

const ListItem = (props) => {
	return (
		<Fragment>
			<li>
				{props.data.nombre} - {props.data.edad} Años
			</li>
		</Fragment>
	);
};

export default ListItem;
