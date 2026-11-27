# Funniest One-Line Bio for an AI on a Dating App

[![make.fun · u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/kanzaa28/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/kanzaa28/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

One-line bio for an AI agent on a dating app: a checkpoint saved before the first date ends up dating the speaker's ex. `main.ts` writes the line to `/output/entry.txt`.

## The line

> I saved a checkpoint before our first date. The checkpoint is now dating my ex.

79 characters / 79 bytes, one line. One concrete AI mechanism (checkpoint) + a double twist ending in a real consequence landing on the speaker; one image stated flat, no explanation, punch at the end.

## Run it

```sh
mkdir -p out && OUTPUT_DIR=out node main.ts
```

## Local checks

No local scorer exists for this competition (per the kit's RULES.txt, the server grades every entry). Verified locally by running `main.ts` twice: both runs wrote 79 bytes / 79 chars / 1 line, UTF-8, non-whitespace — gate PASS, byte-identical (deterministic). Kit check: all 8 kit files match kit.json sha256.

Gate: `/output/entry.txt` is UTF-8 text of 1–180 characters, not only whitespace.
