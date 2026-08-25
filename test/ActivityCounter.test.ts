import { expect } from "chai";

import {
  countActivity,
  countForMarket,
  countType,
  hasActivity,
  activitySummary,
  marketsWithActivity,
} from "../utils/activity-counter";

describe("activity counter", function () {
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
  ];

  it("counts all activity", function () {
    expect(
      countActivity(activities),
    ).to.equal(5);
  });

  it("counts activity for one market", function () {
    expect(
      countForMarket(
        activities,
        1n,
      ),
    ).to.equal(3);
  });

  it("counts activity by type", function () {
    expect(
      countType(
        activities,
        "BET",
      ),
    ).to.equal(2);
  });

  it("detects activity", function () {
    expect(
      hasActivity(
        activities,
        1n,
      ),
    ).to.equal(true);
  });

  it("returns false for unknown market", function () {
    expect(
      hasActivity(
        activities,
        99n,
      ),
    ).to.equal(false);
  });

  it("creates a summary", function () {
    const result =
      activitySummary(
        activities,
      );

    expect(result)
      .to.contain(
        "total=5",
      );

    expect(result)
      .to.contain(
        "bets=2",
      );
  });

  it("finds active market ids", function () {
    const ids =
      marketsWithActivity(
        activities,
      );

    expect(ids)
      .to.have.length(2);

    expect(ids)
      .to.include(1n);

    expect(ids)
      .to.include(2n);
  });
});
