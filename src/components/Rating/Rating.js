//style
import './Rating.scss'
//assets
import star from '../../img/star.svg';
import star_empty from '../../img/star-empty.svg';

function Rating(props) {
    return (
        <div className="rating-wrapper">
            {
                props.rating === 1 ?
                    <span>
                        <img src={star} alt="rating" id="star" />
                        <img src={star_empty} alt="rating" id="star" />
                        <img src={star_empty} alt="rating" id="star" />
                        <img src={star_empty} alt="rating" id="star" />
                        <img src={star_empty} alt="rating" id="star" />
                    </span> :
                    props.rating === 2 ?
                        <span>
                            <img src={star} alt="rating" id="star" />
                            <img src={star} alt="rating" id="star" />
                            <img src={star_empty} alt="rating" id="star" />
                            <img src={star_empty} alt="rating" id="star" />
                            <img src={star_empty} alt="rating" id="star" />
                        </span> :
                        props.rating === 3 ?
                            <span>
                                <img src={star} alt="rating" id="star" />
                                <img src={star} alt="rating" id="star" />
                                <img src={star} alt="rating" id="star" />
                                <img src={star_empty} alt="rating" id="star" />
                                <img src={star_empty} alt="rating" id="star" />
                            </span> :
                            props.rating === 4 ?
                                <span>
                                    <img src={star} alt="rating" id="star" />
                                    <img src={star} alt="rating" id="star" />
                                    <img src={star} alt="rating" id="star" />
                                    <img src={star} alt="rating" id="star" />
                                    <img src={star_empty} alt="rating" id="star" />
                                </span> :
                                props.rating === 5 ?
                                    <span>
                                        <img src={star} alt="rating" id="star" />
                                        <img src={star} alt="rating" id="star" />
                                        <img src={star} alt="rating" id="star" />
                                        <img src={star} alt="rating" id="star" />
                                        <img src={star} alt="rating" id="star" />
                                    </span> :
                                    <span>
                                        <img src={star_empty} alt="rating" id="star" />
                                        <img src={star_empty} alt="rating" id="star" />
                                        <img src={star_empty} alt="rating" id="star" />
                                        <img src={star_empty} alt="rating" id="star" />
                                        <img src={star_empty} alt="rating" id="star" />
                                    </span>
            }
        </div>
    )
}

export default Rating;