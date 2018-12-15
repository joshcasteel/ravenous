import React from 'react';
import './BusinessList.css';
import Business from '../../App.js';


class BusinessList extends React.Component {
    render() {
        return(
        <div class="BusinessList">
            { this.props.businesses.map(x => <Business business={x} />)};
            
        </div>
        )
    }
}
export default BusinessList;