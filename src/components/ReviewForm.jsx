import { useState } from 'react';

function ReviewForm() {
    const [formInputs, setFormInputs] = useState({
        fullnames: '',
        ratings: '',
        review: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'ratings' && (value < 1 || value > 4)) {
            console.error('Rating must be between 1 and 4');
            return;
        }

        setFormInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleClick = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullnames: formInputs.fullnames,
                ratings: formInputs.ratings,
                review: formInputs.review
            })
        });

        setFormInputs({
            fullnames: '',
            ratings: '',
            review: ''
        });
    };

    return (
        <div className="review-form">
            <form>
                <label>Full names
                    <input name='fullnames' onChange={handleChange} value={formInputs.fullnames} type="text" />
                </label>
                <label>ratings</label>
                <div className='radio'>
                    {[1, 2, 3, 4].map((rating) => (
                        <label key={rating} className='radio1'>
                            <input
                                type="radio"
                                name="ratings"
                                value={rating}
                                checked={parseInt(formInputs.ratings) === rating}
                                onChange={handleChange}
                            />
                            {rating}
                        </label>
                    ))}
                </div>
                <label className="rf-txt">review
                    <textarea name='review' onChange={handleChange} value={formInputs.review} type="text" />
                </label>
                <button onClick={handleClick} className="rf-btn">Add</button>
            </form>
        </div>
    );
}

export default ReviewForm;

