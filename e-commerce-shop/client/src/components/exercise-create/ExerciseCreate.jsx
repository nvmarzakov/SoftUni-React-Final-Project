import { useNavigate } from 'react-router-dom';
import * as exerciseService from '../../services/exerciseService';

export default function ExerciseCreate() {
    //to redirect -  useNavigate 
    const navigate = useNavigate(); 

    const createExerciseSubmitHandler = async (e) => {

        e.preventDefault();
        
        const exerciseData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await exerciseService.create(exerciseData);

            navigate('/exercises')
        } catch (err) {
            //Error notification
            console.log(err)
        }
        
    }

    return (
        <div className="animate__animated animate__fadeIn create-container">
            <form id="create" onSubmit={createExerciseSubmitHandler}>
                    {/* page-title */}
                    <h3 className="create-title">Create Exercise</h3>

                    <div className="row">
                        <div className="col-description">
                            <label className="col-description"htmlFor="exercise-title">Exercise title:</label>
                        </div>

                        <div className="col-input">
                            <div className="col-field">
                                <input type="text" id="title" name="title" placeholder="Enter exercise title..." />
                            </div>
                        </div>
                    </div>
                    {/* Category-Field */}
                    <div className="row">
                        <div className="col-description">
                            <label htmlFor="lastname">Category:</label>
                        </div>
                        <div className="col-input">
                            <div className="col-field">
                                <input type="text" id="category" name="category" placeholder="Enter exercise's category..." />
                            </div>
                        </div>
                    </div>

                    {/* Image-Field */}
                    <div className="row">
                        <div className="col-description">
                            <label htmlFor="image-url">Image:</label>
                        </div>
                        <div className="col-input">
                            <div className="col-field">
                                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload image URL..." />
                            </div>
                        </div>
                    </div>

                    {/* Summary-Field */}
                    <div className="row">
                        <div className="col-description">
                            <label htmlFor="summary">Summary:</label>
                        </div>

                        <div className="col-input">
                            <div className="col-field">
                                <textarea name="summary" id="summary" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="row button">
                        <button type="submit" value="Create Exercise">Submit</button>
                    </div>
                </form>
        </div>
    )
}