const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  const SAMPLE_ACTIVITY = parseFloat(sampleActivity);
  if (SAMPLE_ACTIVITY <= 0             ||
    SAMPLE_ACTIVITY >= MODERN_ACTIVITY ||
    SAMPLE_ACTIVITY >= 9000            ||
    isNaN(SAMPLE_ACTIVITY)) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const HALF_LIFE = Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY);
  return Math.ceil(HALF_LIFE / k);
};
