export default function ExerciseCreate() {

    

    return (
        <div className="animate__animated animate__fadeIn create-container">
            <form>
                    {/* page-title */}
                    <h3 className="create-title">Create Exercise</h3>

                    <div className="row">
                        <div className="col-description">
                            <label htmlFor="exercise-title">Exercise title:</label>
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
                            <label htmlFor="lastname">Image:</label>
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
                        <button type="submit">Submit</button>
                    </div>
                </form>
        </div>
    )
}