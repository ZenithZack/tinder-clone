import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card"
import './TinderCards.css'
import axios from '../axios.js'

function TinderCards() {
    const [people, setPeople] = useState([]);
    // when tinder cards load, it runs/loads tinder cards only once --> that's why the empty array
    // if you add anything inside the array (lets say a variable), it will load whenever the value of that variable changes 
    // useEffect is a hook
    // notice the pattern of an async function inside the useEffect hook
    useEffect(() => {
        async function fetchData() {
            // we use just "/tinder/cards" because baseURL was defined in axios
            const req = await axios.get("/tinder/cards");

            setPeople(req.data);
        }

        fetchData();
    }, []);

    console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)} 
                    >
                    
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

            
        </div>
    )
}

export default TinderCards


// We will create a node.js application. We will create an express server and
// that will connect to MongoDB and grab all the data from the Database