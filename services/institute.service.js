const Institute = require("../models/Institute.model");
const State = require("../models/State.model");
const InstituteType = require("../models/InstituteType.model");
const { detectInstituteTypeByinstName } = require("../utils/detectInstituteType");

exports.getInstitutesByStateAndType = (stateId, typeId) => {
  return Institute.find({ state: stateId, type: typeId });
};

async function resolveStateId(stateOrId) {
  if (!stateOrId) return null;
  // if looks like ObjectId -> try findById
  const byId = await State.findById(stateOrId).lean().exec().catch(() => null);
  if (byId) return byId._id;

  // fallback: find by instName (case-insensitive)
  const byinstName = await State.findOne({ instName: new RegExp(`^${escapeRegex(String(stateOrId))}$`, "i") }).lean().exec();
  return byinstName ? byinstName._id : null;
}

async function resolveTypeId(typeOrId) {
  if (!typeOrId) return null;
  const byId = await InstituteType.findById(typeOrId).lean().exec().catch(() => null);
  if (byId) return byId._id;

  // find by instName-ish
  const byinstName = await InstituteType.findOne({ instName: new RegExp(`^${escapeRegex(String(typeOrId))}$`, "i") }).lean().exec();
  return byinstName ? byinstName._id : null;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Create an institute.
 * data may contain:
 *  - instName (required)
 *  - state (can be stateId or state name)
 *  - type (can be typeId or type name)
 */
exports.createInstitute = async (data) => {
  const { instName } = data;
  if (!instName) throw new Error("Institute instName is required");

  // Try to resolve state and type
  let stateId = data.state ? await resolveStateId(data.state) : null;
  let typeId = data.type ? await resolveTypeId(data.type) : null;

  // If type not provided or unresolved, try detecting from instName
  if (!typeId) {
    const detected = detectInstituteTypeByinstName(instName);
    if (detected) {
      // look up InstituteType doc for the detected instName
      const tdoc = await InstituteType.findOne({ instName: new RegExp(`^${escapeRegex(detected.typeinstName)}$`, "i") }).lean().exec();
      if (tdoc) typeId = tdoc._id;
    }
  }

  // If state is still missing, leave it null but allow admin to set later,
  // OR you can throw an error to force admin to supply it.
  // Here we require stateId for accurate filtering, so throw if missing:
  if (!stateId) {
    throw new Error("State not found. Provide valid stateId or state instName.");
  }

  // If type still missing, require admin input to avoid bad assignments
  if (!typeId) {
    throw new Error("Institute type could not be determined. Provide a valid typeId or type instName.");
  }

  // create institute

  const institute = await Institute.create({
    instName,
    state: stateId,
    type: typeId,
    ...data.extra // optional other fields
  });

  return institute;
};



exports.updateInstitute = (id, data) => {
  return Institute.findByIdAndUpdate(id, data, { new: true });
}

exports.deleteInstitute = (id) => {
  return Institute.findByIdAndDelete(id);
};

exports.getAllInstitutes = () => {
  return Institute.find().lean().exec();
}