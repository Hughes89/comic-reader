/*
 * @CreateTime: Oct 6, 2018 11:57 PM
 * @Author: Mike Hughes
 * @Contact: mik3h89@gmail.com
 * @Last Modified By: Mike Hughes
 * @Last Modified Time: Oct 7, 2018 12:03 AM
 * @Description: Controller for comic routes
 */

// =============================================================================
// Requires
// =============================================================================

const path = require('path');
const fs = require('fs');


// =============================================================================
// DUMMY DATA // TODO Remove
// =============================================================================
let dummyDatabase = {
    1: 'The Flash 047 (2018) (2 covers) (digital) (Minutemen-Thoth)'
};

// =============================================================================
// Functions
// =============================================================================

const getAllPages = (req, res) => {
    let comicId = req.params.id;
    let comicPath = path.join(__dirname, '/../', `${dummyDatabase[comicId]}`);
    let comicPages = fs.readdirSync(comicPath).map(file => file);
    res.json(comicPages); 
}

const getPage = (req, res) => {
    let id = req.params.id;
    let filename = req.params.filename;
    let pagePath = path.join(__dirname, '/../', `${dummyDatabase[id]}/${filename}`)
    res.sendFile(pagePath);
}


// =============================================================================
// Export
// =============================================================================

module.exports = {
    getAllPages,
    getPage
}


// module.exports = {
//     /**
//      * @param  {} req
//      * @param  {} res
//      */
//     getAllPages: (req, res) => {
//         let comicId = req.params.id;
//         let comicPath = path.join(__dirname, '/../', `${dummyDatabase[comicId]}`);
//         let comicPages = fs.readdirSync(comicPath).map(file => file);
//         res.json(comicPages);
//     },
    
//     getPage: (req, res) => {
//         let id = req.params.id;
//         let filename = req.params.filename;
//         let pagePath = path.join(__dirname, '/../', `${dummyDatabase[id]}/${filename}`)
//         res.sendFile(pagePath);
//     }

// };