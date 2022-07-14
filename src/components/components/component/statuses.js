import l10n from '../../../language'

const statuses = {
  operational: {
    name: "Operational",
    locName: l10n.components.operational,
    backgroundColour: "rgba(104, 255, 55, 0.1)",
  },
  performanceIssues: {
    name: "Performance Issues",
    locName: l10n.components.performanceIssues,
    backgroundColour: "rgba(78, 140, 255, 0.1)",
  },
  partialOutage: {
    name: "Partial Outage",
    locName: l10n.components.partialOutage,
    backgroundColour: "rgba(255, 128, 28, 0.1)",
  },
  majorOutage: {
    name: "Major Outage",
    locName: l10n.components.majorOutage,
    backgroundColour: "rgba(213, 0, 0, 0.1)",
  },
  maintenance: {
    name: "Maintenance",
    locName: l10n.components.maintenance,
    backgroundColour: "rgba(198, 198, 198, 0.1)",
  },
  unknown: {
    name: "Unknown",
    locName: l10n.components.unknown,
    backgroundColour: "rgba(198, 198, 198, 0.1)",
  },
};

export default statuses;
