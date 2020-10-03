import React from "react";
import CardItem from "./CardItem";
import "./Cards.css"
function Cards() {
	return (
		<div className="cards">
			<h1>Check out This Epic Destination! </h1>
			<div className="cards__container">
				<div className="cards_wrapper">
					<div className="cards__item">
            <CardItem 
              src="../../assets/images/img-9.jpg"
              text="Exploire teh Hidden places deep inside Amazon Jungle"
              label="Adventure"
              path="/services"
            />
          </div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
