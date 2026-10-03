# Iowa Ballot Compare

A nonpartisan guide to Iowa's November 3, 2026 general election. It lists every race on the ballot and shows candidates' positions side by side, with a source linked for every claim.

It's a static site with no build step. Open `index.html` in a browser, or serve the folder from any static host.

## Files

- `index.html`, `styles.css`, `app.js`: the page.
- `data/races.js`: federal and statewide races, candidate bios, issue positions, sources, the ballot measure, and judicial retention.
- `data/sos-candidates.json`: every candidate from the Iowa Secretary of State's official list (office, party, name, city).
- `data/legislature.js`: generated from the JSON. Don't edit it by hand.
- `scripts/`: rebuilds the candidate data from the SOS PDF.

## Updating

**Positions.** Edit `data/races.js`. Each position is `{ t: "summary", s: ["sourceKey"] }`, and every source key must exist in `sources`. A candidate with no entry for an issue shows "No stated position found."

**Candidate list.** If the Secretary of State publishes a new list:

```sh
pdftotext -layout list.pdf list.txt
python3 scripts/parse_sos_list.py list.txt > data/sos-candidates.json
python3 scripts/build_legislature.py
```

Then update the PDF link in `index.html` and in `sources.sos` in `data/races.js`.

## Editorial rules

- Use the candidate's own words in quotes. Anything else is attributed to a source.
- Report votes and records as facts with a source. Leave out opponents' characterizations.
- List candidates in the Secretary of State's order. Don't color-code by party.
