import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './CharacterDetail.css';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const CharacterDetail = () => {
	const [character, setCharacter] = useState([]);

	console.log(character);

	let id = useParams();

	let userID = id.id;

	console.log(userID);

	useEffect(() => {
		axios(`https://breakingbadapi.com/api/characters/${userID}`).then((res) =>
			setCharacter(res.data)
		);
	}, [userID]);

	return (
		<div className='CharacterList-detail'>
			{character.map((char) => {
				return (
					<div key={char.char_id}>
						<CharacterCard data={char} />
					</div>
				);
			})}
		</div>
	);
};

export default CharacterDetail;
