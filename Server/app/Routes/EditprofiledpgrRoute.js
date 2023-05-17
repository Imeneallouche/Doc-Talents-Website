const EditprofiledpgrROUTER = express.Router();
const EditprofiledpgrController = require("../Controllers/EditprofiledpgrController");

EditprofiledpgrROUTER.get("/EditDPGR", EditprofiledpgrController);

module.exports = EditprofiledpgrROUTER;