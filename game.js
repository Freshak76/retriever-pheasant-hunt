const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const translations = {
  cs: {
    pageTitle: "Retriever: Hon na ba\u017eanty",
    canvasLabel: "Loveck\u00e9 pole",
    heroEyebrow: "Loveck\u00fd v\u00fdcvik retr\u00edvra",
    heroTitle: "Po\u0161li psa pro spr\u00e1vn\u00e9ho ba\u017eanta a udr\u017e jeho hlavu u pr\u00e1ce.",
    heroLede: "Na poli le\u017e\u00ed v\u00edc st\u0159elen\u00fdch kus\u016f. Tv\u016fj pes m\u016f\u017ee podlehnout pachu a vyrazit jinam, ne\u017e kam jsi ho poslal. Zastav ho, p\u0159esm\u011bruj a mezi hony ho cvi\u010d, aby ti d\u016fv\u011b\u0159oval a poslouchal.",
    levelLabel: "\u00darove\u0148 psa",
    trustLabel: "D\u016fv\u011bra",
    obedienceLabel: "Poslu\u0161nost",
    activeHuntKicker: "Aktivn\u00ed hon",
    newHuntButton: "Nov\u00fd hon",
    dogStatusLabel: "Stav psa",
    currentTargetLabel: "Aktu\u00e1ln\u00ed c\u00edl",
    scoreLabel: "Z\u00edskan\u00e9 body",
    commandsKicker: "Povely",
    guidingTitle: "Nav\u00e1d\u011bn\u00ed psa",
    stopButton: "P\u00ed\u0161\u0165alka: St\u016fj",
    stopShortButton: "St\u016fj",
    recallButton: "P\u0159ivol\u00e1n\u00ed",
    recallShortButton: "Zp\u011bt",
    sendFarthestButton: "Po\u0161li na nejvzd\u00e1len\u011bj\u0161\u00ed kus",
    newShortButton: "Dal\u0161\u00ed",
    commandsHint: "N\u00edzk\u00e1 poslu\u0161nost a vysok\u00e9 poku\u0161en\u00ed znamenaj\u00ed, \u017ee si pes m\u016f\u017ee vybrat jin\u00fd kus podle pachu.",
    keysHint: "Kl\u00e1vesy: `1-7` po\u0161lou na kus, `S` zastav\u00ed, `R` p\u0159ivol\u00e1, `N` spust\u00ed dal\u0161\u00ed hon.",
    dogKicker: "Pes",
    statsTitle: "Statistiky a postup",
    trainingPointsLabel: "Tr\u00e9ninkov\u00e9 body",
    bondLabel: "Souhra",
    noseLabel: "Nos",
    steadyLabel: "Klid",
    trainingKicker: "V\u00fdcvik",
    trainingTitle: "Pr\u016fb\u011b\u017en\u00e9 tr\u00e9nov\u00e1n\u00ed",
    trainingObedienceTitle: "P\u00ed\u0161\u0165alka a stopka",
    trainingObedienceText: "Zlep\u0161\u00ed poslu\u0161nost a reakci na zastaven\u00ed.",
    trainingTrustTitle: "Slep\u00fd aport na d\u00e1lku",
    trainingTrustText: "Zvy\u0161uje d\u016fv\u011bru v tvoje veden\u00ed.",
    trainingSteadyTitle: "Steadiness na st\u0159elbu",
    trainingSteadyText: "Sni\u017euje un\u00e1hlen\u00e9 vyb\u00edh\u00e1n\u00ed za jin\u00fdm kusem.",
    trainingNoseTitle: "Rozli\u0161ov\u00e1n\u00ed pach\u016f",
    trainingNoseText: "Pes l\u00edp dr\u017e\u00ed spr\u00e1vnou linii i mezi v\u00edc kusy.",
    logKicker: "Z\u00e1pisn\u00edk",
    logTitle: "Posledn\u00ed ud\u00e1losti",
    roundLabel: "Kolo",
    noTarget: "\u017d\u00e1dn\u00fd",
    targetLabel: "Kus",
    birdSend: "Poslat na kus",
    birdActive: "Aktivn\u00ed",
    birdRetrieved: "Donesen",
    statusHeel: "\u010cek\u00e1 u nohy",
    statusRunningCorrect: "B\u011b\u017e\u00ed na kus {id}",
    statusRunningWrong: "Odchylka: m\u00ed\u0159\u00ed na kus {id}",
    statusStopped: "Zastaven na m\u00edst\u011b, \u010dek\u00e1 na nov\u00fd sign\u00e1l",
    statusReturningBird: "Nese kus {id} zp\u011bt",
    statusReturning: "Vrac\u00ed se k tob\u011b",
    selfLabel: "Ty",
    logLevelUpStrong: "Level {level}",
    logLevelUpText: "Pes dos\u00e1hl vy\u0161\u0161\u00ed \u00farovn\u011b a je jist\u011bj\u0161\u00ed v pr\u00e1ci.",
    logHuntStrong: "Hon",
    logHuntText: "Na poli le\u017e\u00ed nov\u00e9 kusy. Vyber spr\u00e1vn\u00e9ho ba\u017eanta a dr\u017e psa na linii.",
    logRedirectStrong: "P\u0159esm\u011brov\u00e1n\u00ed",
    logRedirectText: "Po zastaven\u00ed jde znovu na kus {id}.",
    logDogErrorStrong: "Chyba psa",
    logDogErrorText: "Pes se nechal st\u00e1hnout pachem a m\u00edsto kusu {targetId} m\u00ed\u0159\u00ed ke kusu {actualId}.",
    logSendStrong: "Vysl\u00e1n\u00ed",
    logSendText: "Pes vyr\u00e1\u017e\u00ed p\u0159esn\u011b na ozna\u010den\u00fd kus {id}.",
    logCommandStrong: "Povel",
    logCommandText: "P\u00ed\u0161\u0165alka nem\u011bla efekt, pes zrovna neb\u011b\u017eel na kus.",
    logStopStrong: "Stopka",
    logStopSuccessText: "Pes okam\u017eit\u011b zalehl na m\u00edst\u011b a \u010dek\u00e1 na nov\u00fd povel.",
    logStopFailText: "P\u00ed\u0161\u0165alku sly\u0161el, ale p\u0159etla\u010dil ji pach zv\u011b\u0159e. Mus\u00ed\u0161 ho dostat znovu pod kontrolu.",
    logRecallStrong: "P\u0159ivol\u00e1n\u00ed",
    logRecallNoopText: "Pes u\u017e je u nohy.",
    logRecallText: "Pes se st\u00e1\u010d\u00ed zp\u011bt k tob\u011b.",
    logRetrieveStrong: "Aport",
    logRetrieveText: "Pes zvedl spr\u00e1vn\u00fd kus {id} a vrac\u00ed se s n\u00edm.",
    logWrongRetrieveStrong: "\u0160patn\u00fd aport",
    logWrongRetrieveText: "Pes donesl \u0161patn\u00fd kus {id}. Spr\u00e1vn\u00e9 naveden\u00ed bude pot\u0159eba v\u00edc pilovat.",
    logDeliveredStrong: "Doneseno",
    logDeliveredText: "Kus {id} je u nohy. M\u016f\u017ee\u0161 poslat psa pro dal\u0161\u00ed aport.",
    logProgressStrong: "Postup",
    logProgressText: "Cel\u00fd hon je \u010dist\u011b sesb\u00edran\u00fd. N\u00e1sleduje t\u011b\u017e\u0161\u00ed kolo.",
    logNoTrainingStrong: "Tr\u00e9nink",
    logNoTrainingText: "Na dal\u0161\u00ed lekci pot\u0159ebuje\u0161 z\u00edskat nov\u00e9 tr\u00e9ninkov\u00e9 body z honu nebo levelupu.",
    logTrainingStrong: "Tr\u00e9nink",
    logTrainingObedienceText: "Lekce stopky zlep\u0161ila reakci na p\u00edsknut\u00ed i dr\u017een\u00ed linie.",
    logTrainingTrustText: "Slep\u00fd aport prohloubil d\u016fv\u011bru v tvoje naveden\u00ed.",
    logTrainingSteadyText: "Pes je klidn\u011bj\u0161\u00ed a m\u00e9n\u011b p\u0159epaluje prvn\u00ed pach.",
    logTrainingNoseText: "Rozli\u0161ov\u00e1n\u00ed pach\u016f pomohlo dr\u017eet spr\u00e1vn\u00fd aport i mezi v\u00edce kusy.",
    logSkipStrong: "Nov\u00fd hon",
    logSkipText: "P\u0159eskakuje\u0161 do dal\u0161\u00edho kola a dost\u00e1v\u00e1\u0161 jeden bod na v\u00fdcvik.",
  },
  en: {
    pageTitle: "Retriever: Pheasant Hunt",
    canvasLabel: "Hunting field",
    heroEyebrow: "Retriever hunting training",
    heroTitle: "Send your dog for the right pheasant and keep its head on the job.",
    heroLede: "Several shot birds lie out in the field. Your dog may give in to scent and head somewhere else than where you sent it. Stop the dog, redirect it, and train between hunts so it trusts you more and listens better.",
    levelLabel: "Dog level",
    trustLabel: "Trust",
    obedienceLabel: "Obedience",
    activeHuntKicker: "Active hunt",
    newHuntButton: "New hunt",
    dogStatusLabel: "Dog status",
    currentTargetLabel: "Current target",
    scoreLabel: "Score",
    commandsKicker: "Commands",
    guidingTitle: "Guiding the dog",
    stopButton: "Whistle: Stop",
    stopShortButton: "Stop",
    recallButton: "Recall",
    recallShortButton: "Back",
    sendFarthestButton: "Send to farthest bird",
    newShortButton: "Next",
    commandsHint: "Low obedience and high temptation mean the dog may choose a different bird based on scent.",
    keysHint: "Keys: `1-7` send to a bird, `S` stops, `R` recalls, `N` starts the next hunt.",
    dogKicker: "Dog",
    statsTitle: "Stats and progress",
    trainingPointsLabel: "Training points",
    bondLabel: "Bond",
    noseLabel: "Nose",
    steadyLabel: "Steadiness",
    trainingKicker: "Training",
    trainingTitle: "Ongoing training",
    trainingObedienceTitle: "Whistle and stop",
    trainingObedienceText: "Improves obedience and stop response.",
    trainingTrustTitle: "Long blind retrieve",
    trainingTrustText: "Builds trust in your handling.",
    trainingSteadyTitle: "Steadiness to shot",
    trainingSteadyText: "Reduces impulsive runs toward the wrong bird.",
    trainingNoseTitle: "Scent discrimination",
    trainingNoseText: "Helps the dog hold the correct line among multiple birds.",
    logKicker: "Logbook",
    logTitle: "Recent events",
    roundLabel: "Round",
    noTarget: "None",
    targetLabel: "Bird",
    birdSend: "Send to bird",
    birdActive: "Active",
    birdRetrieved: "Retrieved",
    statusHeel: "Waiting at heel",
    statusRunningCorrect: "Running to bird {id}",
    statusRunningWrong: "Off line: heading to bird {id}",
    statusStopped: "Stopped in place, waiting for a new cue",
    statusReturningBird: "Carrying bird {id} back",
    statusReturning: "Returning to you",
    selfLabel: "You",
    logLevelUpStrong: "Level {level}",
    logLevelUpText: "The dog reached a higher level and works with more confidence.",
    logHuntStrong: "Hunt",
    logHuntText: "New birds are down in the field. Pick the right pheasant and keep the dog on line.",
    logRedirectStrong: "Redirect",
    logRedirectText: "After stopping, the dog heads again for bird {id}.",
    logDogErrorStrong: "Dog mistake",
    logDogErrorText: "The dog got pulled by scent and is heading for bird {actualId} instead of bird {targetId}.",
    logSendStrong: "Send",
    logSendText: "The dog is driving straight to marked bird {id}.",
    logCommandStrong: "Command",
    logCommandText: "The whistle had no effect because the dog was not running to a bird.",
    logStopStrong: "Stop",
    logStopSuccessText: "The dog dropped immediately and waits for a new command.",
    logStopFailText: "The dog heard the whistle, but the scent overpowered it. You need to regain control.",
    logRecallStrong: "Recall",
    logRecallNoopText: "The dog is already at heel.",
    logRecallText: "The dog turns back toward you.",
    logRetrieveStrong: "Retrieve",
    logRetrieveText: "The dog picked the correct bird {id} and is bringing it back.",
    logWrongRetrieveStrong: "Wrong retrieve",
    logWrongRetrieveText: "The dog brought back the wrong bird {id}. You need cleaner handling.",
    logDeliveredStrong: "Delivered",
    logDeliveredText: "Bird {id} is at heel. You can send the dog for the next retrieve.",
    logProgressStrong: "Progress",
    logProgressText: "The whole hunt is picked clean. A tougher round follows.",
    logNoTrainingStrong: "Training",
    logNoTrainingText: "You need to earn more training points from hunts or leveling up before the next lesson.",
    logTrainingStrong: "Training",
    logTrainingObedienceText: "The stop lesson improved whistle response and line discipline.",
    logTrainingTrustText: "The blind retrieve deepened the dog's trust in your handling.",
    logTrainingSteadyText: "The dog is calmer and less likely to overcommit to the first scent.",
    logTrainingNoseText: "Scent discrimination helped the dog hold the right retrieve among multiple birds.",
    logSkipStrong: "New hunt",
    logSkipText: "You skip into the next round and gain one training point.",
  },
};

const ui = {
  roundTitle: document.getElementById("roundTitle"),
  dogLevel: document.getElementById("dogLevel"),
  trustValue: document.getElementById("trustValue"),
  obedienceValue: document.getElementById("obedienceValue"),
  bondValue: document.getElementById("bondValue"),
  noseValue: document.getElementById("noseValue"),
  steadyValue: document.getElementById("steadyValue"),
  xpValue: document.getElementById("xpValue"),
  trainingPointsValue: document.getElementById("trainingPointsValue"),
  dogStatus: document.getElementById("dogStatus"),
  activeTargetLabel: document.getElementById("activeTargetLabel"),
  scoreValue: document.getElementById("scoreValue"),
  eventLog: document.getElementById("eventLog"),
  birdButtons: document.getElementById("birdButtons"),
  mobileBirdButtons: document.getElementById("mobileBirdButtons"),
  newRoundBtn: document.getElementById("newRoundBtn"),
  mobileNewRoundBtn: document.getElementById("mobileNewRoundBtn"),
  stopBtn: document.getElementById("stopBtn"),
  mobileStopBtn: document.getElementById("mobileStopBtn"),
  recallBtn: document.getElementById("recallBtn"),
  mobileRecallBtn: document.getElementById("mobileRecallBtn"),
  sendFarthestBtn: document.getElementById("sendFarthestBtn"),
  langCsBtn: document.getElementById("langCsBtn"),
  langEnBtn: document.getElementById("langEnBtn"),
};

const state = {
  language: localStorage.getItem("retriever-language") || "cs",
  score: 0,
  round: 1,
  elapsed: 0,
  dog: {
    x: 120,
    y: 520,
    speed: 102,
    level: 1,
    xp: 0,
    trainingPoints: 3,
    trust: 50,
    obedience: 45,
    bond: 40,
    nose: 55,
    steadiness: 35,
    status: "heel",
    whistleLock: 0,
    carryingBirdId: null,
    targetBirdId: null,
    chosenBirdId: null,
  },
  birds: [],
  log: [],
};

const den = { x: 120, y: 520 };

function t(key, vars = {}) {
  const table = translations[state.language] || translations.cs;
  const fallback = translations.cs[key] || key;
  const value = table[key] || fallback;
  return value.replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? ""));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.title = t("pageTitle");
  canvas.setAttribute("aria-label", t("canvasLabel"));
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });
  ui.langCsBtn.classList.toggle("is-active", state.language === "cs");
  ui.langEnBtn.classList.toggle("is-active", state.language === "en");
  renderBirdButtons();
  renderLog();
  updateUI();
}

function setLanguage(language) {
  if (!translations[language]) {
    return;
  }
  state.language = language;
  localStorage.setItem("retriever-language", language);
  applyLanguage();
}

function renderLog() {
  ui.eventLog.innerHTML = state.log
    .map((entry) => `<div class="event-entry">${entry.strong ? `<strong>${t(entry.strong, entry.vars)}</strong> ` : ""}${t(entry.text, entry.vars)}</div>`)
    .join("");
}

function addLog(text, strong = "", vars = {}) {
  state.log.unshift({ text, strong, vars });
  state.log = state.log.slice(0, 9);
  renderLog();
}

function gainXp(amount) {
  state.dog.xp += amount;
  while (state.dog.xp >= state.dog.level * 100) {
    state.dog.xp -= state.dog.level * 100;
    state.dog.level += 1;
    state.dog.trainingPoints += 2;
    state.dog.speed += 6;
    state.dog.trust = clamp(state.dog.trust + 4, 0, 100);
    state.dog.obedience = clamp(state.dog.obedience + 3, 0, 100);
    addLog("logLevelUpText", "logLevelUpStrong", { level: state.dog.level });
  }
}

function createBird(index, count) {
  const bandHeight = 360;
  const lane = bandHeight / Math.max(count, 3);
  return {
    id: index + 1,
    x: 430 + Math.random() * 420,
    y: 100 + lane * index + Math.random() * (lane * 0.78),
    retrieved: false,
  };
}

function setupRound() {
  const count = clamp(3 + Math.floor(state.round / 2), 3, 7);
  state.birds = Array.from({ length: count }, (_, index) => createBird(index, count));
  state.dog.x = den.x;
  state.dog.y = den.y;
  state.dog.status = "heel";
  state.dog.targetBirdId = null;
  state.dog.chosenBirdId = null;
  state.dog.carryingBirdId = null;
  state.dog.whistleLock = 0;
  addLog("logHuntText", "logHuntStrong");
  renderBirdButtons();
  updateUI();
}

function getBirdById(id) {
  return state.birds.find((bird) => bird.id === id);
}

function getAvailableBirds() {
  return state.birds.filter((bird) => !bird.retrieved);
}

function commandDogToBird(id) {
  const bird = getBirdById(id);
  if (!bird || bird.retrieved) {
    return;
  }

  state.dog.targetBirdId = id;
  state.dog.status = "running";

  if (state.dog.whistleLock > 0) {
    state.dog.chosenBirdId = id;
    state.dog.whistleLock = 0;
    addLog("logRedirectText", "logRedirectStrong", { id });
    updateUI();
    return;
  }

  const deviationRisk = clamp(
    60
      - state.dog.obedience * 0.3
      - state.dog.trust * 0.16
      - state.dog.steadiness * 0.18
      - state.dog.nose * 0.14
      + state.round * 3,
    6,
    72,
  );

  const alternatives = getAvailableBirds().filter((candidate) => candidate.id !== id);
  const nearestAlternative = alternatives
    .map((candidate) => ({
      bird: candidate,
      temptation:
        145 - distance(state.dog, candidate) * 0.17 + Math.abs(candidate.y - bird.y) * 0.05 + Math.random() * 18,
    }))
    .sort((a, b) => b.temptation - a.temptation)[0]?.bird;

  if (nearestAlternative && Math.random() * 100 < deviationRisk) {
    state.dog.chosenBirdId = nearestAlternative.id;
    const trustLoss = clamp(3 - Math.floor(state.dog.trust / 35), 1, 3);
    state.dog.trust = clamp(state.dog.trust - trustLoss, 0, 100);
    addLog("logDogErrorText", "logDogErrorStrong", { targetId: id, actualId: nearestAlternative.id });
  } else {
    state.dog.chosenBirdId = id;
    addLog("logSendText", "logSendStrong", { id });
  }

  updateUI();
}

function stopDog() {
  if (state.dog.status !== "running") {
    addLog("logCommandText", "logCommandStrong");
    return;
  }

  const successChance = clamp(35 + state.dog.obedience * 0.55 + state.dog.steadiness * 0.25, 40, 96);
  if (Math.random() * 100 <= successChance) {
    state.dog.status = "stopped";
    state.dog.whistleLock = 4.5;
    state.dog.trust = clamp(state.dog.trust + 1, 0, 100);
    gainXp(12);
    addLog("logStopSuccessText", "logStopStrong");
  } else {
    state.dog.trust = clamp(state.dog.trust - 2, 0, 100);
    addLog("logStopFailText", "logStopStrong");
  }
  updateUI();
}

function recallDog() {
  if (state.dog.status === "heel") {
    addLog("logRecallNoopText", "logRecallStrong");
    return;
  }
  state.dog.status = "returning";
  state.dog.targetBirdId = null;
  state.dog.chosenBirdId = null;
  state.dog.carryingBirdId = null;
  state.dog.whistleLock = 0;
  state.dog.trust = clamp(state.dog.trust + 1, 0, 100);
  addLog("logRecallText", "logRecallStrong");
  updateUI();
}

function completeRetrieve(bird) {
  bird.retrieved = true;
  state.dog.carryingBirdId = bird.id;
  state.dog.status = "returning";
  state.score += 25 + state.round * 4;

  const intended = state.dog.targetBirdId === bird.id;
  if (intended) {
    gainXp(26);
    state.dog.trust = clamp(state.dog.trust + 2, 0, 100);
    state.dog.obedience = clamp(state.dog.obedience + 1, 0, 100);
    addLog("logRetrieveText", "logRetrieveStrong", { id: bird.id });
  } else {
    gainXp(10);
    state.dog.trust = clamp(state.dog.trust - 4, 0, 100);
    state.dog.obedience = clamp(state.dog.obedience - 2, 0, 100);
    addLog("logWrongRetrieveText", "logWrongRetrieveStrong", { id: bird.id });
  }
  renderBirdButtons();
  updateUI();
}

function updateDog(dt) {
  const dog = state.dog;
  if (dog.whistleLock > 0) {
    dog.whistleLock = Math.max(0, dog.whistleLock - dt);
  }

  if (dog.status === "heel") {
    return;
  }

  let destination = null;

  if (dog.status === "running" || dog.status === "stopped") {
    const chosenBird = getBirdById(dog.chosenBirdId);
    if (!chosenBird || chosenBird.retrieved) {
      dog.status = "heel";
      dog.chosenBirdId = null;
      dog.targetBirdId = null;
      return;
    }
    destination = chosenBird;
    if (dog.status === "stopped") {
      return;
    }
  }

  if (dog.status === "returning") {
    destination = den;
  }

  if (!destination) {
    return;
  }

  const speed = dog.speed + dog.level * 5;
  const dx = destination.x - dog.x;
  const dy = destination.y - dog.y;
  const dist = Math.hypot(dx, dy);
  const step = speed * dt;

  if (dist <= step) {
    dog.x = destination.x;
    dog.y = destination.y;

    if (dog.status === "running") {
      completeRetrieve(destination);
    } else if (dog.status === "returning") {
      const deliveredBird = dog.carryingBirdId;
      if (deliveredBird) {
        gainXp(14);
        state.dog.bond = clamp(state.dog.bond + 1, 0, 100);
        addLog("logDeliveredText", "logDeliveredStrong", { id: deliveredBird });
      }
      dog.status = "heel";
      dog.carryingBirdId = null;
      dog.targetBirdId = null;
      dog.chosenBirdId = null;
      if (getAvailableBirds().length === 0) {
        state.round += 1;
        state.dog.trainingPoints += 1;
        addLog("logProgressText", "logProgressStrong");
        setupRound();
      }
    }
  } else {
    dog.x += (dx / dist) * step;
    dog.y += (dy / dist) * step;
  }
}

function updateUI() {
  ui.roundTitle.textContent = `${t("roundLabel")} ${state.round}`;
  ui.dogLevel.textContent = String(state.dog.level);
  ui.trustValue.textContent = String(Math.round(state.dog.trust));
  ui.obedienceValue.textContent = String(Math.round(state.dog.obedience));
  ui.bondValue.textContent = String(Math.round(state.dog.bond));
  ui.noseValue.textContent = String(Math.round(state.dog.nose));
  ui.steadyValue.textContent = String(Math.round(state.dog.steadiness));
  ui.xpValue.textContent = `${state.dog.xp}/${state.dog.level * 100}`;
  ui.trainingPointsValue.textContent = String(state.dog.trainingPoints);
  ui.scoreValue.textContent = String(state.score);

  ui.activeTargetLabel.textContent = state.dog.targetBirdId
    ? `${t("targetLabel")} ${state.dog.targetBirdId}`
    : t("noTarget");

  const statuses = {
    heel: t("statusHeel"),
    running: state.dog.chosenBirdId === state.dog.targetBirdId
      ? t("statusRunningCorrect", { id: state.dog.targetBirdId })
      : t("statusRunningWrong", { id: state.dog.chosenBirdId }),
    stopped: t("statusStopped"),
    returning: state.dog.carryingBirdId
      ? t("statusReturningBird", { id: state.dog.carryingBirdId })
      : t("statusReturning"),
  };
  ui.dogStatus.textContent = statuses[state.dog.status];
}

function renderBirdButtons() {
  const renderTo = (container) => {
    container.innerHTML = "";
    state.birds.forEach((bird) => {
      const button = document.createElement("button");
      button.className = `bird-button${bird.retrieved ? " completed" : ""}`;
      button.disabled = bird.retrieved;
      button.type = "button";
      button.innerHTML = `<span>${t("birdSend")} ${bird.id}</span><strong>${bird.retrieved ? t("birdRetrieved") : t("birdActive")}</strong>`;
      button.addEventListener("click", () => commandDogToBird(bird.id));
      container.appendChild(button);
    });
  };
  renderTo(ui.birdButtons);
  renderTo(ui.mobileBirdButtons);
}

function applyTraining(type) {
  if (state.dog.trainingPoints <= 0) {
    addLog("logNoTrainingText", "logNoTrainingStrong");
    return;
  }

  state.dog.trainingPoints -= 1;
  gainXp(18);

  if (type === "obedience") {
    state.dog.obedience = clamp(state.dog.obedience + 7, 0, 100);
    state.dog.steadiness = clamp(state.dog.steadiness + 3, 0, 100);
    addLog("logTrainingObedienceText", "logTrainingStrong");
  } else if (type === "trust") {
    state.dog.trust = clamp(state.dog.trust + 8, 0, 100);
    state.dog.bond = clamp(state.dog.bond + 5, 0, 100);
    addLog("logTrainingTrustText", "logTrainingStrong");
  } else if (type === "steady") {
    state.dog.steadiness = clamp(state.dog.steadiness + 8, 0, 100);
    state.dog.obedience = clamp(state.dog.obedience + 2, 0, 100);
    addLog("logTrainingSteadyText", "logTrainingStrong");
  } else if (type === "nose") {
    state.dog.nose = clamp(state.dog.nose + 7, 0, 100);
    state.dog.trust = clamp(state.dog.trust + 2, 0, 100);
    addLog("logTrainingNoseText", "logTrainingStrong");
  }

  updateUI();
}

function drawField() {
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  const sky = ctx.createLinearGradient(0, 0, 0, 180);
  sky.addColorStop(0, "#d9e8f0");
  sky.addColorStop(1, "#f0ede2");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, 170);

  const field = ctx.createLinearGradient(0, 170, 0, h);
  field.addColorStop(0, "#9cb473");
  field.addColorStop(0.55, "#7e9658");
  field.addColorStop(1, "#6a7d48");
  ctx.fillStyle = field;
  ctx.fillRect(0, 170, w, h - 170);

  ctx.fillStyle = "rgba(92, 110, 57, 0.22)";
  for (let i = 0; i < 18; i += 1) {
    const x = i * 58 + ((i % 2) * 24);
    ctx.fillRect(x, 190 + (i % 4) * 10, 22, 280);
  }

  ctx.strokeStyle = "rgba(255,255,255,0.4)";
  ctx.lineWidth = 3;
  ctx.setLineDash([10, 12]);
  ctx.beginPath();
  ctx.moveTo(den.x + 15, den.y - 8);
  if (state.dog.targetBirdId) {
    const target = getBirdById(state.dog.targetBirdId);
    if (target && !target.retrieved) {
      ctx.lineTo(target.x, target.y);
    } else {
      ctx.lineTo(den.x + 120, den.y - 120);
    }
  } else {
    ctx.lineTo(den.x + 130, den.y - 90);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#3b2a1f";
  ctx.beginPath();
  ctx.arc(den.x, den.y, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#f8f3ea";
  ctx.font = "700 14px Segoe UI";
  ctx.fillText(t("selfLabel"), den.x - 10, den.y + 42);

  state.birds.forEach((bird) => {
    if (bird.retrieved) {
      return;
    }
    const isTarget = state.dog.targetBirdId === bird.id;
    const isChosen = state.dog.chosenBirdId === bird.id && state.dog.status === "running";
    ctx.fillStyle = isTarget ? "#c04622" : "#4c2f1e";
    ctx.beginPath();
    ctx.ellipse(bird.x, bird.y, 16, 10, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = isChosen ? "#f8e0af" : "#ffffff";
    ctx.font = "700 16px Segoe UI";
    ctx.fillText(String(bird.id), bird.x - 4, bird.y - 18);

    if (isTarget) {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(bird.x, bird.y, 23 + Math.sin(state.elapsed * 4) * 2, 0, Math.PI * 2);
      ctx.stroke();
    }
  });

  ctx.fillStyle = "#e0bf7b";
  ctx.beginPath();
  ctx.arc(state.dog.x, state.dog.y, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#5b3a20";
  ctx.beginPath();
  ctx.arc(state.dog.x + 10, state.dog.y - 8, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(state.dog.x - 8, state.dog.y - 12, 6, 0, Math.PI * 2);
  ctx.fill();

  if (state.dog.status === "stopped") {
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(state.dog.x, state.dog.y, 22, 0, Math.PI * 2);
    ctx.stroke();
  }

  if (state.dog.carryingBirdId) {
    ctx.fillStyle = "#4c2f1e";
    ctx.beginPath();
    ctx.ellipse(state.dog.x - 12, state.dog.y + 12, 10, 6, 0.3, 0, Math.PI * 2);
    ctx.fill();
  }
}

function tick(timestamp) {
  if (!state.lastTimestamp) {
    state.lastTimestamp = timestamp;
  }
  const dt = Math.min((timestamp - state.lastTimestamp) / 1000, 0.05);
  state.lastTimestamp = timestamp;
  state.elapsed += dt;
  updateDog(dt);
  drawField();
  requestAnimationFrame(tick);
}

ui.newRoundBtn.addEventListener("click", () => {
  state.round += 1;
  state.dog.trainingPoints += 1;
  addLog("logSkipText", "logSkipStrong");
  setupRound();
});

ui.stopBtn.addEventListener("click", stopDog);
ui.mobileStopBtn.addEventListener("click", stopDog);
ui.recallBtn.addEventListener("click", recallDog);
ui.mobileRecallBtn.addEventListener("click", recallDog);
ui.mobileNewRoundBtn.addEventListener("click", () => ui.newRoundBtn.click());
ui.sendFarthestBtn.addEventListener("click", () => {
  const farthest = getAvailableBirds()
    .slice()
    .sort((a, b) => distance(den, b) - distance(den, a))[0];
  if (farthest) {
    commandDogToBird(farthest.id);
  }
});

ui.langCsBtn.addEventListener("click", () => setLanguage("cs"));
ui.langEnBtn.addEventListener("click", () => setLanguage("en"));

document.querySelectorAll(".training-button").forEach((button) => {
  button.addEventListener("click", () => applyTraining(button.dataset.training));
});

document.addEventListener("keydown", (event) => {
  if (event.key >= "1" && event.key <= "7") {
    commandDogToBird(Number(event.key));
  } else if (event.key.toLowerCase() === "s") {
    stopDog();
  } else if (event.key.toLowerCase() === "r") {
    recallDog();
  } else if (event.key.toLowerCase() === "n") {
    ui.newRoundBtn.click();
  }
});

setupRound();
applyLanguage();
requestAnimationFrame(tick);
