import React, { Component } from 'react';
import Score from './Score';
import GameItems from "./GameItem";

class MainPart extends Component{
	state = {
		score: 0,
		bestScore: 0,
		clickedChars:{"bb-8": false
		, "boba-fett": false
		, "c-3po": false
		, "chewbacca": false
		, "darth-vader": false
		, "darth_maul": false
		, "princess_amidala": false
		, "r2-d2": false
		, "royal_guard": false
		, "stormtrooper": false
		, "the_emperor": false
		, "yoda": false}
	};

	constructor(props){
		super(props);
		this.guessChar = this.guessChar.bind(this);
	}

	guessChar = event =>{
		let char = event.target.getAttribute("char"),score;
		var updatedState = this.state.clickedChars;
		if(this.state.clickedChars[char]){
			score = 0;
			for(let name in updatedState){
				updatedState[name]=false;
			}

		}else{
			score = this.state.score+1;
			score > this.state.bestScore && this.setState({bestScore:  score})
			updatedState[char]=true;
		}

		this.setState({
			clickedChars : updatedState, score: score
		});
	};

	render(){
		return (
			<main className="container center-align">
			<h2 id="1" key="asda" className="hide-on-small-only">Hello %username%</h2>
			<div className="row">
			<div className="col s12 m9">
			<GameItems onClick={this.guessChar}></GameItems>
			</div>
			<div className="col m3 ">
			<Score score={this.state.score} bScore={this.state.bestScore}></Score>
			</div>
			
			</div>
			</main>
			);
	}	
}

export default MainPart;