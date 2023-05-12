module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomCompliment = compliments[getRandomIndex(compliments)];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['A faithful friend is a strong defense.', 'An inch of time is an inch of gold.', 'Competence like yours is underrated.',
                            'Courtesy begins in the home.', 'Keep your face to the sunshine and you will never see shadows.','Your mind is your greatest asset.']
    
        // Choose random fortune
        let randomFortune = fortunes[getRandomIndex(fortunes)];
        
        res.status(200).send(randomFortune);
    },

    submitHandler: (req, res) => { 
        let {sentiment} = req.body ; console.log(sentiment)
        !sentiment ? res.status(400).send('Sorry, try again with a single valid WORD.')
            //    : data.push(req.body) 
               :res.status(200).send(sentiment); 
    },

    getSections: (req, res) => {
        res.status(200).send(sentiment)
    },

    deleteSection: (req, res) => {
        const { id } = req.params.id;
        let {allSections} = req.body
        let sectionIndex = allSections.findIndex(elem => 
            elem.id === id);
        console.log('Section Id:', id);
        console.log('Section Index:', sectionIndex );

        allSections.splice(sectionIndex,1);
        res.status(200).send(allSections);
    },

}

/**
 *  getRandomIndex() is used to automatically calculate and return a random number
 * @param {string} arr - array pass to the function getRandomIndex 
 * @returns {int} - A random number within the length of the arrray received by getRandomIndex()
 */
function getRandomIndex(arr){
    return Math.floor(Math.random()*arr.length);
}