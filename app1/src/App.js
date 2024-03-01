import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from "./robo";
import PageTitle from "./title";
import SearchBox from "./SearchBox"
import Scroll from './Scroll.js'


class App extends Component {
    constructor () {
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    searchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render () {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return (
            <div className="tc">
                <PageTitle title='ROBOFRIENDS'/>
                <SearchBox searchChange={this.searchChange}/>
                <Scroll>
                    <CardList robots={filterRobots} />
                </Scroll>
            </div>
        );
    }
}
export default App;