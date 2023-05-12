const EditprofileEncadrantROUTE = express.Router();
const EditprofileEncController = require("../Controllers/EditprofileEncController")

EditprofileEncadrantROUTE.get("/EditEnc/:usernamee", EditprofileEncController);

module.exports = EditprofileEncadrantROUTE;