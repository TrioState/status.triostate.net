import l10n from '../../../language'

const statuses = {
  operational: {
    name: "Operational",
    locName: l10n.components.operational,
    backgroundColour: "rgba(104, 255, 55, 0.2)",
  },
  performanceIssues: {
    name: "Performance Issues",
    locName: l10n.components.performanceIssues,
    backgroundColour: "rgba(78, 140, 255, 0.2)",
  },
  partialOutage: {
    name: "Partial Outage",
    locName: l10n.components.partialOutage,
    backgroundColour: "rgba(255, 59, 20, 0.2)",
  },
  majorOutage: {
    name: "Major Outage",
    locName: l10n.components.majorOutage,
    backgroundColour: "rgba(213, 0, 0, 0.2)",
  },
  maintenance: {
    name: "Maintenance",
    locName: l10n.components.maintenance,
    backgroundColour: "rgba(128, 128, 128, 0.2)",
  },
  processing: {
    name: "Processing",
    locName: l10n.components.processing,
    backgroundColour: "rgba(174, 50, 255, 0.2)",
  },
  unknown: {
    name: "Unknown",
    locName: l10n.components.unknown,
    backgroundColour: "rgba(128, 128, 128, 0.2)",
  },

};

export default statuses;