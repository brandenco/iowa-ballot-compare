"""Parse the Iowa SOS general-election candidate list (pdftotext -layout output)
into JSON. Keeps only office, party, ballot name, and city.

Usage: pdftotext -layout list.pdf list.txt && python3 parse_sos_list.py list.txt > data/sos-candidates.json
"""
import json
import re
import sys

PARTIES = r"(Republican|Democratic|Libertarian|No Party|Green|Iowa Party)"
SKIP = re.compile(r"Filing period|Ballot vacancies|Candidate List|November 3, 2026 General|For the Office Of|Last Updated|For change requests|^\s*\d+/\d+/\d+ \d+:\d+")
ROW = re.compile(rf"^(?P<office>\S.*?)?\s{{2,}}{PARTIES}\s+(?P<rest>.*)$|^(?P<office2>\S.*?)\s+{PARTIES}\s+(?P<rest2>.*)$")

def parse(path):
    races, office = {}, None
    for line in open(path, encoding="utf-8"):
        if SKIP.search(line) or not line.strip():
            continue
        m = re.match(rf"^(?P<office>\S.*?)?\s+(?P<party>{PARTIES[1:-1]})\s+(?P<rest>.*)$", line.rstrip())
        if not m:
            continue
        if m.group("office") and m.group("office").strip():
            office = re.sub(r"\s+", " ", m.group("office").strip())
        party, rest = m.group("party"), m.group("rest").strip()
        if rest.startswith("--"):
            continue  # no candidate for this party
        cols = re.split(r"\s{2,}", rest)
        name = cols[0].strip()
        city = ""
        addr = " ".join(cols[1:3])
        cm = re.search(r"(?:,\s*|\s)([A-Za-z.' /]+?),\s*IA\b", addr)
        if cm:
            city = cm.group(1).strip()
            city = re.sub(r"^.*\b(?:St|Street|Ave|Avenue|Rd|Road|Dr|Drive|Ct|Terrace|Ln|Blvd|Circle|Cir)\.?\s+", "", city)
        races.setdefault(office, []).append({"name": name, "party": party, "city": city})
    return races

if __name__ == "__main__":
    print(json.dumps(parse(sys.argv[1]), indent=1))
