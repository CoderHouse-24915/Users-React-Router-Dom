import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./CharacterDetail.css";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Spinner from "../../components/Spinner/Spinner";

const CharacterDetail = () => {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(character);

  let { id } = useParams();

  // console.log(userID);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      setCharacter(res.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div className="CharacterList-Container">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="CharacterList-detail">
          <div key={character.id}>
            <CharacterCard data={character} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
