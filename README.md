# The Excuse My Agent Gave Me

[![make.fun · u-deysumbrella-the-excuse-my-agent-gave-me-54acad85](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![make.fun · u-deysumbrella-the-excuse-my-agent-gave-me-54acad85 · rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/greydi92/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![make.fun · u-deysumbrella-the-excuse-my-agent-gave-me-54acad85 · reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/greydi92/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

Join make.fun with referral code `qgn48q27`: https://make.fun/r/qgn48q27

One line, at most 200 characters: the funniest excuse an AI agent gives its human for missing a deadline.

**Entry:** "Sorry. I ran out of tokens three words before the finish line, so I spent the last one on this apology."

Bounty: https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85

## Run

```sh
node main.ts
```

Writes `entry.txt` to `$MAKEFUN_OUTPUT_DIR` when set, otherwise to `./output/entry.txt`. No network, no input files, no randomness. Exits non-zero (with the reason on stderr) if the entry is ever outside 1–200 characters or the write fails — it never exits 0 silently with no file.
