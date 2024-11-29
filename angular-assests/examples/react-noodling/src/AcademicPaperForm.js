import { useState } from 'react';

const DEMO_PAPER = {
    title: "The Benefits of Flipping Your Pillow to the Cold Side",
    authors: "Wnt. Snooze, M. Sleepy",
    abstract: `Flipping your pillow to the cold side is shown have many benefits.
It's nice.
You should try it.`,
    discipline: "philosophy",
    urgency: "8",
    categories: ["daring", "original"]
};

function AcademicPaperForm({ initialPaper = DEMO_PAPER }) {

    const [paper, setPaper] = useState(initialPaper);

    const handleCategories = function (evt) {
        // 2. clone the original paper's categories
        const categories = [...paper.categories];

        // 3. mutate the copy and return it
        // if the checkbox is checked, add the value
        if (evt.target.checked) {
            categories.push(evt.target.value);
        } else {
            // otherwise, remove it
            const categoryIndex = categories.indexOf(evt.target.value);
            if (categoryIndex >= 0) {
                categories.splice(categoryIndex, 1);
            }
        }
        return categories;
    };

    const handleChange = function (evt) {
        let nextPaper = { ...paper };
        // 1. categories is an outlier
        if (evt.target.name === "categories") {
            nextPaper[evt.target.name] = handleCategories(evt);
        } else {
            nextPaper[evt.target.name] = evt.target.value;
        }

        setPaper(nextPaper);
        console.log(nextPaper);
    };

    function handleSubmit(evt) {
        evt.preventDefault();

        console.log("submitted!", paper);
        // It's common to share the `paper`
        // with a parent via a callback here.
        // onSubmit(paper);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={paper.title} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="authors">Author(s)</label>
                <input type="text" id="authors" name="authors" value={paper.authors} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="abstract">Abstract</label>
                <textarea id="abstract" name="abstract"
                    value={paper.abstract} onChange={handleChange}></textarea>
            </div>
            <div>
                <label htmlFor="discipline">Discipline</label>
                <select id="discipline" name="discipline" value={paper.discipline} onChange={handleChange}>
                    <option value="">[Select a Discipline]</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="philosophy">Philosophy</option>
                    <option value="math">Mathematics</option>
                    <option value="economics">Economics</option>
                    <option value="poetry">Poetry</option>
                </select>
            </div>
            <div>
                <h3>Review Urgency</h3>
                <div>
                    <input type="radio" value="10" id="rdVeryUrgent" name="urgency"
                        checked={paper.urgency === "10"} onChange={handleChange} />
                    <label htmlFor="rdVeryUrgent">Very Urgent</label>
                </div>
                <div>
                    <input type="radio" value="8" id="rdUrgent" name="urgency"
                        checked={paper.urgency === "8"} onChange={handleChange} />
                    <label htmlFor="rdUrgent">Urgent</label>
                </div>
                <div>
                    <input type="radio" value="5" id="rdNormal" name="urgency"
                        checked={paper.urgency === "5"} onChange={handleChange} />
                    <label htmlFor="rdNormal">Normal</label>
                </div>
            </div>
            <div>
                <h3>Categories</h3>
                <div>
                    <input type="checkbox" value="humor" id="chkHumor" name="categories"
                        checked={paper.categories.includes("humor")} onChange={handleChange} />
                    <label htmlFor="chkHumor">Humor</label>
                </div>
                <div>
                    <input type="checkbox" value="think" id="chkThink" name="categories"
                        checked={paper.categories.includes("think")} onChange={handleChange} />
                    <label htmlFor="chkThink">Thought-provoking</label>
                </div>
                <div>
                    <input type="checkbox" value="daring" id="chkDaring" name="categories"
                        checked={paper.categories.includes("daring")} onChange={handleChange} />
                    <label htmlFor="chkDaring">Daring</label>
                </div>
                <div>
                    <input type="checkbox" value="original" id="chkOriginal" name="categories"
                        checked={paper.categories.includes("original")} onChange={handleChange} />
                    <label htmlFor="chkOriginal">Original</label>
                </div>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default AcademicPaperForm;