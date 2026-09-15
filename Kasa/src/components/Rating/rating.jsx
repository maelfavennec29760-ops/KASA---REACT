import RatingStar from '../../assets/stars.png';
import RatingStarNull from '../../assets/stars-null.png';
import './rating.scss'

function Rating({ rating }){
    const ratingStars = [1, 2, 3, 4, 5];
    const ratingNumber = parseInt(rating, 10);
    return (
        <div className='rating'>
            {ratingStars.map((star) => (
                <img
                    src={ 
                        star <= ratingNumber
                        ? RatingStar
                        : RatingStarNull
                        }
                    className='rating-star'
                    key={star}
                    alt="rating star"
                />
            ))}
        </div>
    );
}

export default Rating;