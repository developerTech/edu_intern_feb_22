import React, {Component} from 'react';
import './quickComponent.css'

class QuickSearch extends Component {
    render(){
        return(
            <>
                <div id="quickSearch">
                    <span id="quickHeading">Quick Search</span>
                    <span id="quickSubHeading">Discover Restaurants By Meal</span>
                    <div id="main">
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src="image/lunch.png" alt=""/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    <a href="../listing/listing.html">BreakFast</a>
                                </div>
                                <div class="componentSubHeading">
                                    Best Place For BreakFast
                                </div>
                            </div>
                        </div>
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src="image/nightlife.png" alt=""/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    <a href="../listing/listing.html">NightLife</a>
                                    
                                </div>
                                <div class="componentSubHeading">
                                    Best Place For NightLife
                                </div>
                            </div>
                        </div>
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src="image/sacks.png" alt=""/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    <a href="../listing/listing.html">Lunch</a>
                                    
                                </div>
                                <div class="componentSubHeading">
                                    Best Place For NightLife
                                </div>
                            </div>
                        </div>
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src="image/dinner.png" alt=""/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    <a href="../listing/listing.html">Dinner</a>
                                    
                                </div>
                                <div class="componentSubHeading">
                                    Best Place For Dinner
                                </div>
                            </div>
                        </div>
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src="image/drinks.png" alt=""/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    <a href="../listing/listing.html">Drinks</a>
                                    
                                </div>
                                <div class="componentSubHeading">
                                    Best Place For Drinks
                                </div>
                            </div>
                            
                        </div>
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src="image/nightlife.png" alt=""/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    <a href="../listing/listing.html">NightLife</a>
                                    
                                </div>
                                <div class="componentSubHeading">
                                    Best Place For NightLife
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default QuickSearch;