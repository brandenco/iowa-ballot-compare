// Federal and statewide races on Iowa's November 3, 2026 general election ballot.
//
// Candidate names, parties and hometowns come from the Iowa Secretary of State's
// official candidate list (last updated 8/19/2026). Positions are summarized from
// news coverage and candidate statements; every position cites a source by key.
// A candidate with no entry for an issue means we found no stated position in the
// coverage we reviewed, not that they have none.
//
// Candidates are listed in the order the Secretary of State's list uses.

window.ELECTION = {
  date: "2026-11-03",
  updated: "2026-10-03",

  issues: {
    costs: "Cost of living & taxes",
    health: "Health care & Medicaid",
    abortion: "Abortion & reproductive care",
    farm: "Farms, trade & tariffs",
    energy: "Fuel & energy",
    water: "Water quality & cancer",
    education: "Education",
    immigration: "Immigration",
    ethics: "Ethics & government reform",
    foreign: "War & foreign policy",
    land: "Land, pipelines & eminent domain",
    elections: "Voting & elections",
    law: "Law enforcement & lawsuits",
    money: "Managing public money",
    other: "Other priorities",
  },

  sources: {
    sos: { label: "Iowa Secretary of State — 2026 general election candidate list", url: "https://sos.iowa.gov/sites/default/files/2026-08/2026%20General%20-%20Candidate%20List%20Database%20-%20All%20Elections_1.pdf" },
    isl_gov: { label: "Iowa Starting Line — What to know about Rob Sand, Zach Lahn", url: "https://iowastartingline.com/news/elections/iowa-governor-rob-sand-zach-lahn/" },
    gaz_sand: { label: "The Gazette — Sand pitches accountability at Iowa City town hall", url: "https://www.thegazette.com/news/elections/sand-pitches-political-accountability-divided-government-at-iowa-city-town-hall/article_b770224e-9722-4a0d-973c-06ba5bcac5c8.html" },
    kwqc_gov: { label: "KWQC — Sand, Lahn offer differing visions", url: "https://www.kwqc.com/2026/09/16/sand-lahn-offer-differing-visions-kwqc-interviews/" },
    cbs2_lahn: { label: "CBS2 Iowa — Lahn vows ag, eminent domain protections", url: "https://cbs2iowa.com/news/local/beyond-the-podium-gop-governor-candidate-zach-lahn-vows-ag-eminent-domain-protections" },
    wiki_gov: { label: "Wikipedia — 2026 Iowa gubernatorial election", url: "https://en.wikipedia.org/wiki/2026_Iowa_gubernatorial_election" },
    kwqc_mates: { label: "KWQC — Lahn, Sand pick running mates", url: "https://www.kwqc.com/2026/06/12/lahn-sand-pick-running-mates-race-be-iowa-governor/" },

    isl_sen: { label: "Iowa Starting Line — 3 key issues in Iowa's U.S. Senate race", url: "https://iowastartingline.com/news/elections/iowa-us-senate-hinson-turek-2026/" },
    ipr_sen_iran: { label: "Iowa Public Radio — Hinson calls for 'immediate' end to Iran war", url: "https://www.iowapublicradio.org/political-news/2026-09-25/hinson-turek-iran-war-iowa-senate-race" },
    ipr_sen_fair: { label: "Iowa Public Radio — Senate candidates at the State Fair", url: "https://www.iowapublicradio.org/political-news/2026-08-18/iowa-u-s-senate-candidates-state-fair-soapbox" },
    gaz_turek: { label: "The Gazette — Turek pitches anti-corruption, cost agenda", url: "https://www.thegazette.com/news/elections/josh-turek-pitches-anti-corruption-cost-agenda-at-iowa-state-fair/article_cff511de-3bb4-4bad-bdfb-745d6d8236a1.html" },
    congress_lac: { label: "Congress.gov — Life at Conception Act (H.R. 722) cosponsors", url: "https://www.congress.gov/bill/119th-congress/house-bill/722/cosponsors" },
    nfts_pm1: { label: "Iowa Capital Dispatch — Advocates on proposed income tax amendment", url: "https://www.newsfromthestates.com/article/iowa-advocates-call-attention-proposed-income-tax-constitutional-amendment" },
    ipr_laehn: { label: "Iowa Public Radio — Thomas Laehn enters U.S. Senate race", url: "https://www.iowapublicradio.org/political-news/2025-10-11/libertarian-candidate-thomas-laehn-u-s-senate-race-2026" },

    ipr_ia1_cancer: { label: "Iowa Public Radio — Miller-Meeks, Bohannan on cancer rates", url: "https://www.iowapublicradio.org/political-news/2026-09-01/iowa-cancer-2026-election-1st-congressional-district" },
    nfts_mm_tax: { label: "Iowa Capital Dispatch — Miller-Meeks on 2025 tax cuts", url: "https://www.newsfromthestates.com/article/us-rep-miller-meeks-says-2025-gop-tax-cuts-help-iowa-manufacturing-workers" },
    bohannan_site: { label: "Christina Bohannan campaign — Priorities", url: "https://bohannanforcongress.com/priorities/" },
    ipr_bridgford: { label: "Iowa Public Radio — Michael Bridgford enters 1st District race", url: "https://www.iowapublicradio.org/political-news/2026-04-16/independent-candidate-michael-bridgford-1st-congressional-district" },
    bp_ia1: { label: "Ballotpedia News — Miller-Meeks and Bohannan meet for third time", url: "https://news.ballotpedia.org/2026/07/23/rep-miller-meeks-and-bohannan-to-meet-for-third-consecutive-election-in-iowas-1st-district-on-november-3-2026/" },

    ipr_ia2_debate: { label: "Iowa Public Radio — 2nd District candidates' first debate", url: "https://www.iowapublicradio.org/political-news/2026-10-02/2nd-district-candidates-trade-personal-attacks-at-first-debate" },
    kcrg_ia2: { label: "KCRG — Candidates cite corruption as key issue in 2nd District", url: "https://www.kcrg.com/2026/09/15/candidates-cite-corruption-key-issue-iowas-2nd-congressional-district-race/" },
    nfts_mitchell: { label: "Iowa Capital Dispatch — Mitchell supports constitutional fix for campaign cash", url: "https://www.newsfromthestates.com/article/republican-joe-mitchell-supports-constitutional-fix-campaign-cash" },
    ipr_bushaw: { label: "Iowa Public Radio — Dave Bushaw enters 2nd District race", url: "https://www.iowapublicradio.org/political-news/2025-11-12/independent-dave-bushaw-2nd-congressional-district-race-2026-midterms" },
    icd_stewart: { label: "Iowa Capital Dispatch — Libertarian wants to repeal income tax", url: "https://iowacapitaldispatch.com/2026/08/15/libertarian-wants-to-repeal-income-tax-welfare-programs-immigration-policy/" },

    aol_ia3: { label: "Des Moines Register via AOL — Nunn, Trone Garriott on immigration, tariffs", url: "https://www.aol.com/news/hear-congress-candidates-nunn-trone-104231120.html" },
    csq_ia3: { label: "The Center Square — Tariffs, farms, taxes top Iowa candidate divide", url: "https://www.thecentersquare.com/national/article_6960d889-60de-494f-a1ff-19f7c5550aa7.html" },
    bp_ia3: { label: "Ballotpedia News — Iowa's 3rd District race", url: "https://news.ballotpedia.org/2026/07/23/nunn-trone-garriott-and-battaglia-are-running-in-iowas-3rd-district-decided-by-fewer-than-four-points-in-each-of-the-last-two-elections/" },

    ipr_ia4: { label: "Iowa Public Radio — 4th District debate", url: "https://www.iowapublicradio.org/political-news/2026-10-01/iowa-4th-congressional-district-debate-2026-election" },

    gaz_ag: { label: "The Gazette — Bird, Willems present competing visions", url: "https://www.thegazette.com/news/elections/bird-willems-present-competing-visions-for-iowa-attorney-general-s-office/article_f8c703e5-7dd2-564f-88ed-623c041759cb.html" },
    kcrg_willems: { label: "KCRG — Willems calls for accountability of polluters", url: "https://www.kcrg.com/2026/09/09/ag-candidate-nate-willems-calls-greater-accountability-iowa-polluters/" },

    nfts_peterman: { label: "Iowa Capital Dispatch — Peterman calls for election changes", url: "https://www.newsfromthestates.com/article/secretary-state-candidate-ryan-peterman-calls-election-changes" },
    wqad_pate: { label: "WQAD — Paul Pate seeking reelection", url: "https://www.wqad.com/article/news/politics/iowa-politics/paul-pate-reelection-plans-iowa-secretary-of-state-2026/524-4845fada-57c2-44aa-b5f4-f35f1cfb38b1" },
    icd_pate_list: { label: "Iowa Capital Dispatch — Pate says 'potential noncitizen' list unlikely", url: "https://iowacapitaldispatch.com/2026/08/17/secretary-of-state-paul-pate-says-2026-potential-noncitizen-list-unlikely/" },

    ipr_cournoyer: { label: "Iowa Public Radio — Cournoyer launches campaign for auditor", url: "https://www.iowapublicradio.org/political-news/2025-05-06/lieutenant-governor-chris-cournoyer-launches-2026-campaign-state-auditor" },
    ipr_wettach: { label: "Iowa Public Radio — Wettach runs for state auditor", url: "https://www.iowapublicradio.org/political-news/2026-01-26/democrat-taylor-wettach-state-auditor-2026-election" },

    aol_treas: { label: "Des Moines Register via AOL — Treasurer candidates on IPERS", url: "https://www.aol.com/articles/hear-iowa-state-treasurer-candidates-111227000.html" },
    ipr_norwood: { label: "Iowa Public Radio — John Norwood enters treasurer race", url: "https://www.iowapublicradio.org/political-news/2026-02-03/democrat-candidate-john-norwood-state-treasurer-2026-election" },

    ipr_ag: { label: "Iowa Public Radio — Meet Mike Naig and Chris Jones", url: "https://www.iowapublicradio.org/political-news/2026-09-30/iowa-secretary-of-agriculture-candidates-mike-naig-chris-jones-midterms" },

    bp_pm1: { label: "Ballotpedia News — Income tax two-thirds amendment", url: "https://news.ballotpedia.org/2026/05/05/iowa-voters-will-decide-a-constitutional-amendment-that-would-require-two-thirds-approval-from-the-general-assembly-to-increase-income-taxes/" },
    jc_ballot: { label: "Johnson County Auditor — November 3, 2026 General Election", url: "https://johnsoncountyiowa.gov/november-3-2026-general-election" },
  },

  races: [
    // ───────────────────────────── Federal ─────────────────────────────
    {
      id: "us-senate",
      group: "Federal",
      title: "U.S. Senate",
      everyone: true,
      about: "One of Iowa's two senators in Washington, serving a six-year term. This seat is open: Sen. Joni Ernst is not running again.",
      candidates: [
        { id: "hinson", name: "Ashley Hinson", party: "Republican", city: "Marion", site: "https://ashleyhinson.com",
          bio: "U.S. representative since 2021, now serving the 2nd District. Former Iowa House member and former KCRG-TV news anchor." },
        { id: "turek", name: "Josh Turek", party: "Democratic", city: "Council Bluffs", site: "https://turek4iowa.com",
          bio: "State representative since 2023. Four-time Paralympian and two-time gold medalist in wheelchair basketball; previously worked assessing mobility equipment. Defeated state Sen. Zach Wahls in the June primary." },
        { id: "laehn", name: "Thomas Laehn", party: "Libertarian", city: "Jefferson",
          bio: "Greene County Attorney. In 2018 became the first Libertarian elected to a partisan office in Iowa." },
      ],
      positions: {
        health: {
          hinson: { t: "Voted for the 2025 Republican budget law, which reduced federal Medicaid spending. Points to the law's $50 billion rural health fund and says it brings $209 million to Iowa health facilities. Says she's focused on drug prices and pharmacy benefit managers.", s: ["isl_sen", "ipr_sen_fair", "gaz_turek"] },
          turek: { t: "\"Healthcare is a human right.\" Wants to restore Medicaid funding and keep the ACA premium tax credits that 118,000 Iowans use. Says the 2025 law puts coverage for 110,000 Iowans at risk.", s: ["isl_sen", "gaz_turek"] },
        },
        farm: {
          hinson: { t: "Supports President Trump's tariffs, saying they \"level the playing field\" for Iowa producers. Publicly opposed the administration's beef-import plan. Backed higher crop reference prices and farm-transfer tax provisions.", s: ["isl_sen", "ipr_sen_iran", "gaz_turek"] },
          turek: { t: "Says tariffs are a direct cause of falling commodity prices and, along with the Iran war, of rising farm foreclosures. Wants a new five-year farm bill instead of more extensions.", s: ["isl_sen", "gaz_turek"] },
        },
        energy: {
          hinson: { t: "Proposes suspending the federal gas tax, pausing diesel exports, expanding E15, and a diesel rebate for farmers.", s: ["ipr_sen_iran"] },
          turek: { t: "Proposes temporarily suspending the gas tax, suspending diesel exports, and releasing oil from the Strategic Petroleum Reserve.", s: ["ipr_sen_iran"] },
          laehn: { t: "Would end the federal tax credits that support carbon-capture pipelines, and opposes eminent domain for private companies like Summit Carbon Solutions.", s: ["ipr_sen_fair", "ipr_laehn"] },
        },
        costs: {
          hinson: { t: "Cites her votes for \"no tax on tips, no tax on overtime\" in the 2025 law. Supports Public Measure 1, which would require a two-thirds legislative vote to raise income taxes.", s: ["ipr_sen_fair", "nfts_pm1"] },
          turek: { t: "Campaigning on \"cost, corruption, kitchen-table issues.\" Voted against the income-tax amendment (Public Measure 1) in the Iowa House; his campaign says he has worked with Republicans to cut taxes.", s: ["gaz_turek", "nfts_pm1"] },
        },
        abortion: {
          hinson: { t: "Cosponsored the Life at Conception Act in 2024 and 2025, a national bill that lists no exceptions. Has said she supports exceptions for rape, incest and the life of the mother. Voted for Iowa's 2018 \"heartbeat\" bill as a state legislator. Promotes over-the-counter birth control.", s: ["congress_lac", "isl_sen"] },
          turek: { t: "Wants federal law to restore the abortion rights that existed under Roe v. Wade. Sponsored a bill to repeal Iowa's current law, which bans most abortions after about six weeks.", s: ["isl_sen"] },
          laehn: { t: "Says abortion law should be decided entirely by the states.", s: ["ipr_laehn"] },
        },
        foreign: {
          hinson: { t: "Has called for an \"immediate and successful\" end to the war with Iran and said Congress should be in session providing relief.", s: ["ipr_sen_iran"] },
          turek: { t: "Says Iowa has \"been hurt by more than any other state\" by the Iran war, pointing to three Iowans killed and higher fuel prices.", s: ["ipr_sen_iran"] },
          laehn: { t: "Says presidents of both parties \"enter wars without declarations of war from Congress\"; wants to curb executive power.", s: ["ipr_laehn"] },
        },
        ethics: {
          turek: { t: "Would ban members of Congress and their families from owning or trading stocks, push ethics rules for the Supreme Court, refuse corporate PAC money, and work to overturn Citizens United.", s: ["ipr_sen_fair", "gaz_turek"] },
          laehn: { t: "\"I am running against the two-party system itself.\" Wants campaign finance and tax law reform.", s: ["ipr_laehn", "ipr_sen_fair"] },
        },
        other: {
          laehn: { t: "Says the first bill he would introduce would decriminalize marijuana possession and use.", s: ["ipr_laehn"] },
        },
      },
    },

    {
      id: "us-house-1",
      group: "Federal",
      title: "U.S. House, District 1",
      district: "Southeast Iowa, including Davenport, Iowa City, Burlington and Ottumwa",
      about: "Iowa's member of the U.S. House for the 1st District, serving a two-year term. This is a rematch: Miller-Meeks won in 2024 by about 800 votes.",
      candidates: [
        { id: "millermeeks", name: "Mariannette Miller-Meeks", party: "Republican", city: "Ottumwa", incumbent: true, site: "https://drmillermeeks.com",
          bio: "U.S. representative since 2021. Physician and military veteran; former state senator." },
        { id: "bohannan", name: "Christina Bohannan", party: "Democratic", city: "Iowa City", site: "https://bohannanforcongress.com",
          bio: "University of Iowa law professor; former state representative (2021–2023). Third straight run against Miller-Meeks." },
        { id: "bridgford", name: "Michael Bridgford", party: "No Party", city: "Bettendorf",
          bio: "Independent financial advisor and small business owner raised on a family farm near the Quad Cities. Endorsed by the Forward Party." },
      ],
      positions: {
        health: {
          millermeeks: { t: "Wrote the law, signed in February, that has Medicare cover multi-cancer early-detection blood tests starting in 2028. Promotes her Lower Health Care Premiums for All Americans Act and the rural health fund. Says the 2025 law's funding helps rural hospitals and that she is cracking down on Medicaid waste and fraud.", s: ["ipr_ia1_cancer", "nfts_mm_tax"] },
          bohannan: { t: "Would reverse the 2025 Medicaid cuts, let people enroll in Medicare at any age, add dental, vision and hearing to Medicare, and cap prescription drugs at $35 a month. Opposes insurance discrimination for preexisting conditions.", s: ["bohannan_site", "ipr_ia1_cancer"] },
          bridgford: { t: "Blames both parties for rural clinic closures and high costs; calls for a bipartisan fix.", s: ["ipr_bridgford"] },
        },
        costs: {
          millermeeks: { t: "Backed the 2025 tax law, saying it helps manufacturing workers: \"It was for you, who make this country great.\"", s: ["nfts_mm_tax"] },
          bohannan: { t: "Would end tariffs she says cost families $2,400+ a year, bar hedge funds from buying family homes and land, build affordable housing, and regulate utility monopolies.", s: ["bohannan_site"] },
        },
        farm: {
          millermeeks: { t: "Supported the administration's tariffs, according to campaign coverage.", s: ["bp_ia1"] },
          bohannan: { t: "Would vote to repeal the tariffs, break up seed and fertilizer monopolies, and pass a new farm bill aimed at family farms.", s: ["bohannan_site", "bp_ia1"] },
        },
        water: {
          millermeeks: { t: "\"The causes of cancer are not as simple as people are trying to make it out to be,\" naming obesity, tobacco, genetics and water quality. Working to create a biochar institute at Iowa State.", s: ["ipr_ia1_cancer"] },
          bohannan: { t: "Supports incentives for cover crops to cut chemical runoff, local funding for radon testing, and action on PFAS contamination.", s: ["ipr_ia1_cancer", "bohannan_site"] },
        },
        ethics: {
          bohannan: { t: "Ban stock trading by members of Congress and justices; amend the Constitution to reverse Citizens United; term limits and age caps; a lifetime ban on members becoming lobbyists; open primaries to independents.", s: ["bohannan_site"] },
          bridgford: { t: "Running mainly on congressional term limits and a ban on stock trading by members, calling them \"popular, nonpartisan issues.\" \"Washington is stuck.\"", s: ["ipr_bridgford"] },
        },
        abortion: {
          bohannan: { t: "Would write Roe v. Wade into federal law; opposes Iowa's six-week ban.", s: ["bohannan_site"] },
        },
        education: {
          bohannan: { t: "Opposes voucher plans she says drain public schools; wants more career and technical education and school lunch for every child.", s: ["bohannan_site"] },
        },
        immigration: {
          bridgford: { t: "\"The answer is in the middle\" between enforcement and compassion.", s: ["ipr_bridgford"] },
        },
        foreign: {
          bridgford: { t: "\"Congress needs to have a voice\" on military action; wants diplomacy first.", s: ["ipr_bridgford"] },
        },
      },
    },

    {
      id: "us-house-2",
      group: "Federal",
      title: "U.S. House, District 2",
      district: "Northeast and north-central Iowa, including Cedar Rapids, Waterloo, Dubuque and Mason City",
      about: "Iowa's member of the U.S. House for the 2nd District, serving a two-year term. Open seat: Rep. Ashley Hinson is running for Senate.",
      candidates: [
        { id: "mitchell", name: "Joe Mitchell", party: "Republican", city: "Clear Lake", site: "https://joemitchell.com",
          bio: "Homebuilder and real estate developer. Former state representative and HUD regional administrator in the first Trump administration; founded the conservative youth group Run Gen Z. Endorsed by President Trump." },
        { id: "james", name: "Lindsay James", party: "Democratic", city: "Dubuque", site: "https://lindsayforiowa.com",
          bio: "State representative in her fourth term. Ordained Presbyterian minister and chaplain." },
        { id: "stewart", name: "Rick Stewart", party: "Libertarian", city: "Cedar Rapids", site: "https://rickstewart.com",
          bio: "Previously the Libertarian nominee for governor (2022), U.S. Senate (2020) and secretary of agriculture (2018)." },
        { id: "bushaw", name: "Dave Bushaw", party: "No Party", city: "Hawkeye", site: "https://davebushaw.com",
          bio: "31-year-old squash farmer, musician and labor organizer from Fayette County. Former rural organizer for Bernie Sanders' 2020 campaign. Endorsed by the Forward Party." },
      ],
      positions: {
        ethics: {
          mitchell: { t: "Refuses corporate PAC money. Supports term limits, a ban on insider trading by members, and ending the \"lawmaker-to-lobbyist pipeline\"; says he'd work with Democrats to overturn Citizens United.", s: ["nfts_mitchell", "kcrg_ia2"] },
          james: { t: "Names fighting corruption as a key issue; calls Mitchell a former lobbyist focused on enriching himself.", s: ["kcrg_ia2", "ipr_ia2_debate"] },
          bushaw: { t: "Undecided about which party he would caucus with; wants to \"buck the party lines once in a while.\"", s: ["ipr_bushaw"] },
        },
        health: {
          james: { t: "Opposed the 2025 law's health care cuts. Would lower the Medicare eligibility age to 55.", s: ["ipr_ia2_debate", "kcrg_ia2"] },
          bushaw: { t: "Supports universal health care as a human right.", s: ["ipr_bushaw"] },
        },
        immigration: {
          mitchell: { t: "Supports Congress's \"record funding\" for Homeland Security and ICE and restricting legal immigration: \"We should always put Iowans and Americans first.\"", s: ["ipr_ia2_debate", "kcrg_ia2"] },
          james: { t: "\"A mom who believes in keeping our borders secure\"; supports a \"meaningful pathway for those who want to be here legally.\"", s: ["ipr_ia2_debate", "kcrg_ia2"] },
          stewart: { t: "Would let vetted immigrants bid for lifetime green cards in an auction, with citizens deciding refugee and humanitarian cases.", s: ["icd_stewart"] },
          bushaw: { t: "Supports secure borders but opposes aggressive federal raids in communities, citing the 2008 Postville raid.", s: ["ipr_bushaw"] },
        },
        farm: {
          mitchell: { t: "Defends the administration's trade policy, connecting it to a proposed $15 billion steel plant in southeast Iowa.", s: ["ipr_ia2_debate"] },
          james: { t: "Blames Washington policies, including tariffs she wants reversed, for higher costs.", s: ["ipr_ia2_debate"] },
          bushaw: { t: "Opposes corporate control of farmland; says family farmers take better care of the land.", s: ["ipr_bushaw"] },
        },
        foreign: {
          mitchell: { t: "Supports giving Congress input on military decisions but didn't back an immediate-withdrawal resolution: \"We're in this war right now. We're going to get out.\"", s: ["ipr_ia2_debate"] },
          james: { t: "Calls the Iran war an example of administration policies that hurt Iowans.", s: ["ipr_ia2_debate"] },
          stewart: { t: "Would eliminate all nuclear weapons.", s: ["icd_stewart"] },
        },
        water: {
          mitchell: { t: "Agrees Iowa's cancer rates are concerning; supports incentives for farmers to cut nutrient runoff.", s: ["ipr_ia2_debate"] },
          james: { t: "Agrees Iowa's cancer rates are concerning; supports incentives for farmers to cut nutrient runoff.", s: ["ipr_ia2_debate"] },
        },
        costs: {
          james: { t: "Focused on affordability: more affordable housing and child care in rural areas.", s: ["kcrg_ia2"] },
          stewart: { t: "Would end the income tax and replace assistance programs with a universal basic income, funded in part by a universal carbon tax.", s: ["icd_stewart"] },
          bushaw: { t: "Pro-labor: would end right-to-work laws. \"We've seen nothing but attacks on labor from both sides.\"", s: ["ipr_bushaw"] },
        },
      },
    },

    {
      id: "us-house-3",
      group: "Federal",
      title: "U.S. House, District 3",
      district: "Central and southwest Iowa, including Des Moines and Council Bluffs",
      about: "Iowa's member of the U.S. House for the 3rd District, serving a two-year term. The last two elections here were decided by under four points.",
      note: "Libertarian Marco Battaglia was removed from the ballot by the State Objection Panel and later ended his campaign.",
      candidates: [
        { id: "nunn", name: "Zach Nunn", party: "Republican", city: "Des Moines", incumbent: true, site: "https://zachnunn.com",
          bio: "U.S. representative since 2023. Air Force Reserve colonel, former National Security Council staffer, and former state senator and representative." },
        { id: "tronegarriott", name: "Sarah Trone Garriott", short: "Trone Garriott", party: "Democratic", city: "Des Moines", site: "https://sarahforiowa.com",
          bio: "State senator; Lutheran pastor and food bank network executive." },
      ],
      positions: {
        health: {
          nunn: { t: "Says the ACA is \"one of the most destructive health care plans out there,\" but voted to extend the enhanced ACA tax credits. Voted for the 2025 budget law that reduced Medicaid funding. Says he delivered $209 million in health funding and passed legislation to lower premiums.", s: ["csq_ia3", "aol_ia3"] },
          tronegarriott: { t: "Would extend ACA premium tax credits and reverse Medicaid cuts to keep rural hospitals open; wants lower premiums and drug prices.", s: ["aol_ia3", "csq_ia3"] },
        },
        farm: {
          nunn: { t: "Supports tariffs as a tool against unfair trade practices, but says the goal should be zero tariffs; wants Congress to use its trade authority to give farmers stable policy.", s: ["csq_ia3", "aol_ia3"] },
          tronegarriott: { t: "Makes ending the tariffs central to her campaign: \"Tariffs are a tax paid by Iowans.\"", s: ["aol_ia3", "csq_ia3"] },
        },
        abortion: {
          nunn: { t: "Pro-life, supports exceptions for rape, incest and the life of the mother. Opposes a federal ban; says the states should decide.", s: ["csq_ia3"] },
          tronegarriott: { t: "Opposes six-week bans; says doctors and patients, not politicians, should make life-and-death decisions.", s: ["csq_ia3"] },
        },
        immigration: {
          nunn: { t: "\"We've made real progress securing the border. Crossings are down significantly, and fentanyl seizures are up.\"", s: ["aol_ia3"] },
          tronegarriott: { t: "\"Illegal border crossings are down under Donald Trump, and that's a good thing. We need a secure border.\"", s: ["aol_ia3"] },
        },
        costs: {
          nunn: { t: "Top priority is affordability through tax relief and housing.", s: ["aol_ia3"] },
          tronegarriott: { t: "Top priority is affordability: lower health care, grocery and housing costs.", s: ["aol_ia3"] },
        },
      },
    },

    {
      id: "us-house-4",
      group: "Federal",
      title: "U.S. House, District 4",
      district: "Western and north-central Iowa, including Sioux City, Ames and Fort Dodge",
      about: "Iowa's member of the U.S. House for the 4th District, serving a two-year term. Open seat: Rep. Randy Feenstra ran for governor.",
      candidates: [
        { id: "mcgowan", name: "Chris McGowan", party: "Republican", city: "Sioux City", site: "https://chrismcgowan.com",
          bio: "Sioux City lawyer and Iowa National Guard veteran; former president of the Siouxland Chamber of Commerce. Endorsed by President Trump." },
        { id: "dawson", name: "Dave Dawson", party: "Democratic", city: "Lawton",
          bio: "Longtime Woodbury County prosecutor and former state representative." },
      ],
      positions: {
        farm: {
          mcgowan: { t: "Defends the goal of fairer trade; would block tariffs from being applied retroactively to deals already negotiated.", s: ["ipr_ia4"] },
          dawson: { t: "\"If I were in Congress, I would be voting tomorrow to end these tariffs.\"", s: ["ipr_ia4"] },
        },
        energy: {
          mcgowan: { t: "Maximize domestic energy production; says canceling Keystone XL is part of why fuel costs are high. Supports year-round E15.", s: ["ipr_ia4"] },
          dawson: { t: "Restore wind and solar tax credits; supports year-round E15.", s: ["ipr_ia4"] },
        },
        health: {
          mcgowan: { t: "Calls for a bipartisan overhaul of the health care system involving providers and insurers.", s: ["ipr_ia4"] },
          dawson: { t: "\"We should have healthcare as a right in this country for everyone.\" Supports ACA tax credits and a public option.", s: ["ipr_ia4"] },
        },
        foreign: {
          mcgowan: { t: "Says the U.S. must be \"prudent\": go to war only for an imminent, grave threat after diplomacy is exhausted. Five of his six children serve in the military.", s: ["ipr_ia4"] },
          dawson: { t: "Calls the Iran war unconstitutional without congressional authorization; links it to fuel costs.", s: ["ipr_ia4"] },
        },
        immigration: {
          mcgowan: { t: "Praises the administration's border enforcement; supports more legal work visas for employers.", s: ["ipr_ia4"] },
          dawson: { t: "Says the administration revoked immigrants' legal status without due process; supports more legal work visas for employers.", s: ["ipr_ia4"] },
        },
        costs: {
          mcgowan: { t: "Supports a balanced budget amendment. On data centers: \"they must pay their entire way,\" with local input.", s: ["ipr_ia4"] },
          dawson: { t: "Supports a balanced budget amendment and local input on data centers.", s: ["ipr_ia4"] },
        },
        other: {
          mcgowan: { t: "On AI: \"I do think there's a need for some guardrails\"; opposes leaving it all to the private sector.", s: ["ipr_ia4"] },
          dawson: { t: "On AI: warns against letting the industry regulate itself; wants protections for children from AI-generated sexual images.", s: ["ipr_ia4"] },
        },
      },
    },

    // ──────────────────────────── Statewide ────────────────────────────
    {
      id: "governor",
      group: "Statewide",
      title: "Governor & Lieutenant Governor",
      everyone: true,
      about: "Iowa's chief executive, serving a four-year term. Signs or vetoes bills, writes the budget, runs state agencies and appoints judges. Open seat: Gov. Kim Reynolds is not running again. Governor and lieutenant governor are elected together on one vote.",
      candidates: [
        { id: "lahn", name: "Zach Lahn", party: "Republican", city: "Belle Plaine", site: "https://lahnhq.com",
          running: "Derek Wulf, state representative from Hudson",
          bio: "Businessman, first run for office. Former Americans for Prosperity state director in Montana; co-founded a private school in Wichita, Kansas. Won the GOP primary narrowly over Trump-endorsed Rep. Randy Feenstra." },
        { id: "sand", name: "Rob Sand", party: "Democratic", city: "Des Moines", site: "https://robsand.com",
          running: "Dave Muhlbauer, Crawford County supervisor and farmer",
          bio: "State auditor since 2019 and the only Democrat currently holding statewide office. Former assistant attorney general who prosecuted financial crimes." },
      ],
      positions: {
        costs: {
          lahn: { t: "Lower property taxes for Iowans by taxing out-of-state owners, Wall Street investors and data centers at higher rates. Ban hedge funds from buying single-family homes. Has said Iowa could fund services with two of its three main taxes (property, sales, income). Points to Iowa ranking as the most affordable state.", s: ["isl_gov", "cbs2_lahn", "kwqc_gov"] },
          sand: { t: "Raise the minimum wage from $7.25 to $12 with automatic cost-of-living increases. Cap drug prices, allow imports from Canada and limit utility fees. Cut red tape for businesses with 10 or fewer employees.", s: ["isl_gov", "kwqc_gov"] },
        },
        health: {
          lahn: { t: "Keep privately managed Medicaid: \"We have a system that is set up and it is largely working.\" Prevent insurer vertical integration; use AI to catch fraud but require a human to review claim denials.", s: ["kwqc_gov", "isl_gov"] },
          sand: { t: "End privatized Medicaid on day one and move it to state or nonprofit management, citing an audit finding more improper denials. Regulate pharmacy benefit managers, expand telehealth and raise state cancer research to $20 million.", s: ["kwqc_gov", "gaz_sand", "isl_gov"] },
        },
        abortion: {
          lahn: { t: "\"Unapologetically pro-life at conception.\" Takes a position more restrictive than Iowa's current law, which bans most abortions after about six weeks.", s: ["isl_gov"] },
          sand: { t: "\"A supporter of a woman's right to choose.\" Opposes the six-week ban and would veto any new restrictions on abortion, IVF, surrogacy or contraception.", s: ["gaz_sand", "isl_gov"] },
        },
        education: {
          lahn: { t: "Supports Iowa's education savings accounts (vouchers). Would give public schools waivers from testing and graduation rules, let students advance at their own pace, and add apprenticeship tracks. Has pledged to \"reclaim the curriculum\" and revoke licenses of teachers \"pushing a political agenda.\"", s: ["isl_gov", "kwqc_gov"] },
          sand: { t: "Universal all-day pre-K. Keep the voucher program but add income limits and annual audits of participating private schools. Says teacher morale needs to improve.", s: ["isl_gov", "kwqc_gov"] },
        },
        water: {
          lahn: { t: "Refundable tax credits for deep-banding fertilizer and help paying for buffer strips. Independent state safety testing of farm chemicals; redirect university research toward cancer.", s: ["isl_gov"] },
          sand: { t: "Tax credits for farmers with approved nutrient plans, restore water-monitoring funding, make manure-management records public. Opposes legal immunity for pesticide makers.", s: ["isl_gov"] },
        },
        land: {
          lahn: { t: "Ban eminent domain for private gain, including carbon pipelines, though he has said a pipeline could be built by \"widening the corridor.\" Require disclosure of who owns farmland, restrict foreign and out-of-state ownership, and file antitrust suits against farm-input monopolies.", s: ["cbs2_lahn", "isl_gov"] },
          sand: { t: "Ban hedge funds and LLCs from large-scale farmland purchases and raise taxes on out-of-state landowners.", s: ["isl_gov"] },
        },
        immigration: {
          lahn: { t: "Bar state benefits for undocumented immigrants and stop state agencies and universities from hiring H-1B visa workers: \"Iowa people will do these jobs.\"", s: ["isl_gov"] },
          sand: { t: "Questions deporting workers who follow the rules and have no criminal record, pointing to dairy and meatpacking jobs.", s: ["isl_gov"] },
        },
        ethics: {
          sand: { t: "Term and age limits for elected officials, a stock-trading ban, required public town halls and open primaries.", s: ["gaz_sand"] },
        },
      },
    },

    {
      id: "attorney-general",
      group: "Statewide",
      title: "Attorney General",
      everyone: true,
      about: "Iowa's top lawyer, serving a four-year term. Represents the state in court, handles consumer protection, and prosecutes some criminal cases.",
      candidates: [
        { id: "bird", name: "Brenna Bird", party: "Republican", city: "Dexter", incumbent: true, site: "https://birdforiowa.com",
          bio: "Attorney general since 2023 and former county prosecutor." },
        { id: "willems", name: "Nate Willems", party: "Democratic", city: "Mount Vernon", site: "https://natewillems.com",
          bio: "Labor attorney who represents unions and workers; former two-term state representative." },
      ],
      positions: {
        law: {
          bird: { t: "Emphasizes working with law enforcement and crime victims; created a cold case unit. Co-leads multistate suits defending the president's birthright citizenship order and joined many challenges to Biden-era rules.", s: ["gaz_ag"] },
          willems: { t: "Says suits against Washington should target \"a real harm\" to Iowans: \"I'm not running for Attorney General because I'm interested in suing the government every 10 minutes.\" Says the office should support county attorneys rather than take over their cases.", s: ["gaz_ag"] },
        },
        costs: {
          willems: { t: "Would rebuild the Consumer Protection Division and create a wage-theft unit; estimates $900 million a year is taken from Iowa workers through unpaid overtime, stolen tips and misclassification.", s: ["gaz_ag"] },
        },
        water: {
          bird: { t: "Her campaign says the state already collected the maximum fine in the 2024 POET ethanol plant case and it was never referred to her office. Says she will hold companies accountable \"according to the law, not politics.\"", s: ["kcrg_willems"] },
          willems: { t: "Would seek \"real penalties\" against polluters rather than settlements, publish an annual report on pollution cases, notify nearby residents of settlements, and refuse donations from companies under investigation.", s: ["kcrg_willems"] },
        },
        immigration: {
          bird: { t: "Sued, then dropped the suit against, the Winneshiek County sheriff for not honoring ICE detainers without a warrant; says sanctuary policies are illegal under Iowa law.", s: ["gaz_ag"] },
          willems: { t: "Calls the suit against the sheriff \"bullying\" of local law enforcement.", s: ["gaz_ag"] },
        },
      },
    },

    {
      id: "secretary-of-state",
      group: "Statewide",
      title: "Secretary of State",
      everyone: true,
      about: "Runs Iowa's elections and voter registration, and registers businesses. Four-year term.",
      candidates: [
        { id: "pate", name: "Paul D. Pate", party: "Republican", city: "Cedar Rapids", incumbent: true, site: "https://pateforiowa.com",
          bio: "Secretary of state since 2015 (also served 1995–99), seeking a fifth term. Former Cedar Rapids mayor and state senator." },
        { id: "peterman", name: "Ryan Peterman", party: "Democratic", city: "Davenport", site: "https://petermanforiowa.com",
          bio: "Navy veteran and former legislative aide to U.S. Sen. Jeanne Shaheen." },
      ],
      positions: {
        elections: {
          pate: { t: "Supports Iowa's voter ID requirements to make it \"easier to vote and harder to cheat\"; says the only acceptable amount of fraud is zero. Points to post-election audits, paper ballots, and registration for 17-year-olds. Says a 2024-style list of potential noncitizen voters is unlikely this year now that Iowa can check the federal SAVE database.", s: ["wqad_pate", "icd_pate_list"] },
          peterman: { t: "Would push to lengthen early voting beyond the current 20 days and restore signed attestation as a way to confirm a voter's identity, saying there's \"no evidence of fraud\" from it.", s: ["nfts_peterman"] },
        },
        other: {
          pate: { t: "In May, gave the U.S. Department of Justice Iowa's voter registration data, including driver's license and partial Social Security numbers, after legal review: \"We do not take the obligation to turn this information over lightly.\"", s: ["nfts_peterman"] },
          peterman: { t: "Criticizes sharing voter data with the Justice Department and has requested records about it.", s: ["nfts_peterman"] },
        },
      },
    },

    {
      id: "auditor",
      group: "Statewide",
      title: "Auditor of State",
      everyone: true,
      about: "Audits how state and local governments spend public money. Four-year term. Open seat: Auditor Rob Sand is running for governor.",
      candidates: [
        { id: "cournoyer", name: "Chris Cournoyer", party: "Republican", city: "LeClaire",
          bio: "Lieutenant governor since 2024; former state senator." },
        { id: "wettach", name: "Taylor Wettach", party: "Democratic", city: "Muscatine", site: "https://wettachforiowa.com",
          bio: "Attorney and seventh-generation Iowan; left the law firm Simpson Thacher after it agreed to do free work for the Trump administration." },
      ],
      positions: {
        money: {
          cournoyer: { t: "Wants the office to be \"a true watchdog for the taxpayer — not a political weapon.\" Would use AI in auditing, help local governments find savings, and work with the state's DOGE task force.", s: ["ipr_cournoyer"] },
          wettach: { t: "\"Follow the money, exposing the waste, fraud and abuse.\" Opposes recent Republican efforts to limit the auditor's access to records.", s: ["ipr_wettach"] },
        },
      },
    },

    {
      id: "treasurer",
      group: "Statewide",
      title: "Treasurer of State",
      everyone: true,
      about: "Manages and invests the state's money, runs unclaimed property and college savings programs, and sits on the IPERS pension board. Four-year term.",
      candidates: [
        { id: "smith", name: "Roby Smith", party: "Republican", city: "Davenport", incumbent: true, site: "https://robysmith.com",
          bio: "Treasurer since 2023; former state senator and banker." },
        { id: "norwood", name: "John Norwood", party: "Democratic", city: "West Des Moines",
          bio: "Small-business advisor (Goldman Sachs 10,000 Small Businesses program) and former Polk County soil and water commissioner." },
      ],
      positions: {
        money: {
          smith: { t: "\"Preserving principal, maintaining liquidity and earning a fair return without taking unnecessary risks.\" Has modernized the Great Iowa Treasure Hunt unclaimed property program.", s: ["aol_treas"] },
          norwood: { t: "Wants CFO-style oversight of state finances and to protect Iowa's AAA bond rating. Opposes private school vouchers and \"large corporate giveaways.\"", s: ["aol_treas", "ipr_norwood"] },
        },
        other: {
          smith: { t: "On IPERS: keep the public pension \"strong for current and future retirees\" under an independent professional board, not a single official.", s: ["aol_treas"] },
          norwood: { t: "On IPERS: \"fiercely protect\" the pension; work with the board to hire a CEO focused on long-term member security; expand retirement savings for small business workers.", s: ["aol_treas", "ipr_norwood"] },
        },
      },
    },

    {
      id: "agriculture",
      group: "Statewide",
      title: "Secretary of Agriculture",
      everyone: true,
      about: "Leads the Iowa Department of Agriculture and Land Stewardship, including conservation and water-quality programs. Four-year term.",
      candidates: [
        { id: "naig", name: "Mike Naig", party: "Republican", city: "Des Moines", incumbent: true, site: "https://mikenaig.com",
          bio: "Secretary of agriculture since 2018; earlier deputy secretary and a government affairs manager at Monsanto." },
        { id: "jones", name: "Chris Jones", party: "Democratic", city: "Iowa City", site: "https://chrisjonesforiowa.com",
          bio: "Retired University of Iowa water scientist; ran labs at Des Moines Water Works. Author of The Swine Republic." },
      ],
      positions: {
        water: {
          naig: { t: "Voluntary, \"farm to faucet\" approach: cover crops, wetlands and saturated buffers. \"There's never been more awareness, more funding, more resources available.\"", s: ["ipr_ag"] },
          jones: { t: "Says water treatment is \"putting Band-Aids on an underlying problem\"; wants to cut pollution at its source.", s: ["ipr_ag"] },
        },
        farm: {
          naig: { t: "Opposes new farm regulations: \"it's the smaller farms and mid-sized farms that can't bear that burden.\" Highlights a grazing program that converted 16,000+ acres to pasture.", s: ["ipr_ag"] },
          jones: { t: "Proposes \"common sense regulations,\" including banning fall tillage and taxing anhydrous ammonia to shift fertilizer to spring. Supports more grazing and pasture.", s: ["ipr_ag"] },
        },
        energy: {
          naig: { t: "Pushes for year-round E15 sales.", s: ["ipr_ag"] },
          jones: { t: "Calls ethanol an environmental and economic \"dead end\"; wants planning for alternatives.", s: ["ipr_ag"] },
        },
      },
    },
  ],

  measures: [
    {
      id: "pm1",
      title: "Public Measure 1: Two-thirds vote to raise income taxes",
      text: "A constitutional amendment. Any bill that raises the individual or corporate income tax rate, or creates a new income-based state tax, would need a two-thirds vote in both the Iowa House and Senate instead of a simple majority. Local-option taxes are excluded.",
      yes: "Raising income taxes would require two-thirds of lawmakers in each chamber.",
      no: "Income tax changes keep needing a simple majority, as today.",
      threshold: "Passes with a simple majority of votes cast.",
      history: "Passed the legislature twice, as required: in 2023–24 (House 61–35, Senate 31–13) and 2025–26 (Senate 32–15, House 57–21). Republicans voted for it; Democrats voted against.",
      forArgs: "Rep. Dan Gehlbach (R-Urbandale): \"If politicians want to raise our taxes, there should be wide consensus.\"",
      againstArgs: "Anne Discher, Common Good Iowa: it would \"lock in\" current tax policy and push future needs onto sales or fuel taxes, which hit lower- and middle-income families harder.",
      s: ["bp_pm1", "nfts_pm1"],
    },
  ],

  judges: {
    text: "The ballot also asks whether to keep certain judges for another term (\"retention\"). Statewide, voters decide on three Iowa Court of Appeals judges. District judges on the ballot vary by county, so check your sample ballot.",
    appeals: ["John M. Sandy", "Julie A. Schumacher", "Sharon Soorholtz Greer"],
    s: ["jc_ballot"],
  },
};
