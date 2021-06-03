import React from 'react'
import PropTypes from 'prop-types'


//the props value and text defined in Product.js
const Rating = ({value,text, color}) => {
    return (
        <div className='rating'>
            {/* various star icons based on rating (full, half, or empty star). Span for each start in rating. */}

            {/* star 1 */}
            <span>
            <i
            // double curly brackets for inline styles
            //set color to color prop
            style={{color:color}} 
            className=
            {value >=1 ? 'fas fa-star' : 
                value >=0.5 ? 'fas fa-star-half-alt' : 'far fa-star' }>
            </i>
            </span>
            {/* end star 1 */}

            <span>
            <i 
            style={{color:color}} 
            className=
            {value >=2 ? 'fas fa-star' : 
                value >=1.5 ? 'fas fa-star-half-alt' : 'far fa-star' }>
            </i>
            </span>

            <span>
            <i 
            style={{color:color}} 
            className=
            {value >=3 ? 'fas fa-star' : 
                value >=2.5 ? 'fas fa-star-half-alt' : 'far fa-star' }>
            </i>
            </span>

            <span>
            <i 
            style={{color:color}} 
            className=
            {value >=4 ? 'fas fa-star' : 
                value >=3.5 ? 'fas fa-star-half-alt' : 'far fa-star' }>
            </i>
            </span>

            <span>
            <i 
            style={{color:color}} 
            className=
            {value >=5 ? 'fas fa-star' : 
                value >=4.5 ? 'fas fa-star-half-alt' : 'far fa-star' }>
            </i>
            </span>

            {/* if text exits show it */}
            <span>{text && text}</span>
            
        </div>
    )
}

Rating.defaultProps = {
    color:'#f8e825'
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Rating;
