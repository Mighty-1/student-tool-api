// utils/detectInstituteType.js
// Returns { typeName, confidence } or null
const KEYWORDS = [
  { keyword: /univ(ersity)?/i, typeName: 'University' },
  { keyword: /poly(technic)?/i, typeName: 'Polytechnic' },
  { keyword: /college of education/i, typeName: 'College of Education' },
  { keyword: /college/i, typeName: 'College of Education' }, // caution: broad
  { keyword: /monotechnic/i, typeName: 'Monotechnic' },
  { keyword: /technical/i, typeName: 'Polytechnic' },
  { keyword: /school of/i, typeName: 'College of Education' }
];

function detectInstituteTypeByName(name) {
  if (!name || typeof name !== 'string') return null;
  const n = name.toLowerCase();

  // keyword exact matches (high confidence)
  for (const k of KEYWORDS) {
    if (k.keyword.test(n)) {
      return { typeName: k.typeName, confidence: 'high' };
    }
  }

  // fallback: heuristic checks (moderate confidence)
  if (n.includes('tech') || n.includes('poly')) {
    return { typeName: 'Polytechnic', confidence: 'medium' };
  }
  if (n.includes('unilag') || n.includes('unilag') || n.includes('university')) {
    return { typeName: 'University', confidence: 'medium' };
  }

  return null; // unknown
}

module.exports = { detectInstituteTypeByName };
