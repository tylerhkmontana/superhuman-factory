import { useState, useEffect } from "react"

export default function TrainingPR() {
    const [currPr, setCurrPr] = useState(JSON.parse(localStorage.getItem('currPr'))) 

    function updateCurrPr(e) {
        e.preventDefault()

        const [squat, bench, deadlift, overheadPress] = e.target
        let pr = {
            squat: parseInt(squat.value),
            bench: parseInt(bench.value),
            deadlift: parseInt(deadlift.value),
            overheadPress: parseInt(overheadPress.value)
        }

        localStorage.setItem('currPr', JSON.stringify(pr))
        setCurrPr(pr)
    }

    function resetCurrPr() {
        localStorage.removeItem('currPr')
        setCurrPr(null)
    }
    return (
        <div>
            <div>
                {
                    currPr ? <div>
                        <div className="flex gap-4">
                            <div>
                                <h3 className="text-xl font-bold">Your PR</h3>
                                <p>Squat: {currPr.squat} lbs</p>
                                <p>Bench: {currPr.bench} lbs</p>
                                <p>Deadlift: {currPr.deadlift} lbs</p>
                                <p>Over Head Press: {currPr.overheadPress} lbs</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Training PR (90% PR)</h3>
                                <p>Squat: {currPr.squat * .9} lbs</p>
                                <p>Bench: {currPr.bench * .9} lbs</p>
                                <p>Deadlift: {currPr.deadlift * .9} lbs</p>
                                <p>Over Head Press: {currPr.overheadPress * .9} lbs</p>
                            </div>
                        </div>
                        <br/>
                            <button onClick={resetCurrPr}>Reset</button>
                        </div> :
                        <form className="flex flex-col gap-2" onSubmit={updateCurrPr}>
                            <h2 className="font-bold">Please update your PR (lbs)</h2>
                            <div className="flex justify-between gap-4">
                                <label>Squat (lb):</label>
                                <input type="number" defaultValue={0} name="squat"/>
                            </div>
                            <div className="flex justify-between gap-4">
                                <label>Bench (lb):</label>
                                <input type="number" defaultValue={0} name="bench"/>
                            </div>
                            <div className="flex justify-between gap-4">
                                <label>Deadlift (lb):</label>
                                <input type="number" defaultValue={0} name="deadlift"/>
                            </div>
                            <div className="flex justify-between gap-4">
                                <label>Over Head Press (lb):</label>
                                <input type="number" defaultValue={0} name="overheadPress"/>
                            </div>
                            <button>Update</button>
                        </form>
                }
            </div>
        </div>
    )
}