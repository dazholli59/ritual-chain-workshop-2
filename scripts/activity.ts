import {
  activitySummary,
  countForMarket,
  marketsWithActivity,
} from "../utils/activity-counter";

const activities = [
  {
    marketId: 1n,
    type: "CREATE" as const,
  },
  {
    marketId: 1n,
    type: "BET" as const,
  },
  {
    marketId: 1n,
    type: "BET" as const,
  },
  {
    marketId: 2n,
    type: "CREATE" as const,
  },
  {
    marketId: 2n,
    type: "RESOLVE" as const,
  },
  {
    marketId: 3n,
    type: "CREATE" as const,
  },
];

console.log(
  "Activity summary",
);

console.log(
  "================",
);

console.log(
  activitySummary(
    activities,
  ),
);

console.log("");

for (
  const marketId of marketsWithActivity(
    activities,
  )
) {
  console.log(
    `Market ${marketId}:`,
    countForMarket(
      activities,
      marketId,
    ),
    "activities",
  );
}
console.log("");

console.log(
  "Quick check:",
);

console.log(
  activities.length === 0
    ? "No activity found"
    : "Activity data found",
);
