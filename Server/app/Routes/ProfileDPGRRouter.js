const ProfileDPGRROUTER = express.Router();
const ProfiledpgrController = require("../Controllers/ProfiledpgrController");

ProfileDPGRROUTER.get("/PDPGR", ProfiledpgrController);

module.exports = ProfileDPGRROUTER;
