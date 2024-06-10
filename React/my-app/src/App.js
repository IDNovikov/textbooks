import React from 'react';
import { nanoid } from 'nanoid'
import styled from 'styled-components'
import { useState } from 'react';
import Products from './Products'

const Container = styled.div`
	width: 200px;
	border: 2px solid brown;
	padding: 10px;
	text-align: center;
`;

const Text1 = styled.p`
	color: orangered;
	font-weight: bold;
`;

const Text2 = styled.p`
	font-style: italic;
	color: brown;
`;

const Text3 = styled.p`
	background-color: orange;
	font-weight: bold;
	color: white;
`;

function App() {
	return (
		<Container>
			<Text1>text</Text1>
			<Text2>text</Text2>
			<Text3>text</Text3>
		</Container>
	);
}
export default App