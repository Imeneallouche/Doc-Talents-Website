const EditprofileDoctorantROUTE = express.Router();
const EditprofileDoctorantController = require("../Controllers/EditprofileDoctorantController")

EditprofileDoctorantROUTE.get("/EditDoc/:username", EditprofileDoctorantController);

module.exports = EditprofileDoctorantROUTE;