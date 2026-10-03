"""Build data/legislature.js from data/sos-candidates.json.

Usage: python3 scripts/build_legislature.py
"""
import json
import re

d = json.load(open("data/sos-candidates.json"))
leg = {"senate": {}, "house": {}}
for office, cands in d.items():
    m = re.match(r"State (Senator|Representative) District (\d+)", office)
    if m:
        leg["senate" if m.group(1) == "Senator" else "house"][int(m.group(2))] = cands
out = ("// Generated from data/sos-candidates.json (Iowa SOS list, 8/19/2026). Do not edit by hand.\n"
       "window.LEGISLATURE = " + json.dumps(leg, indent=1) + ";\n")
open("data/legislature.js", "w").write(out)
