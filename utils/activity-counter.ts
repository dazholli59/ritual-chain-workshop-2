export type Activity = {
  marketId: bigint;
  type:
    | "CREATE"
    | "BET"
    | "RESOLVE";
};

export function countActivity(
  activities: Activity[],
): number {
  return activities.length;
}

export function countForMarket(
  activities: Activity[],
  marketId: bigint,
): number {
  return activities.filter(
    (item) =>
      item.marketId === marketId,
  ).length;
}

export function countType(
  activities: Activity[],
  type: Activity["type"],
): number {
  return activities.filter(
    (item) =>
      item.type === type,
  ).length;
}

export function hasActivity(
  activities: Activity[],
  marketId: bigint,
): boolean {
  return (
    countForMarket(
      activities,
      marketId,
    ) > 0
  );
}

export function activitySummary(
  activities: Activity[],
): string {
  return [
    `total=${countActivity(
      activities,
    )}`,
    `creates=${countType(
      activities,
      "CREATE",
    )}`,
    `bets=${countType(
      activities,
      "BET",
    )}`,
    `resolves=${countType(
      activities,
      "RESOLVE",
    )}`,
  ].join(" ");
}

export function marketsWithActivity(
  activities: Activity[],
): bigint[] {
  const ids = new Set<string>();

  for (
    const activity of activities
  ) {
    ids.add(
      activity.marketId.toString(),
    );
  }

  return Array.from(ids)
    .map(
      (id) => BigInt(id),
    );
}
