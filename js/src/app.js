// get random element from iterable
const getRandomItem = iterable => {
  return iterable.get([...iterable.keys()][Math.floor(Math.random() * iterable.size)]);
}

const MIDI_NUM_NAMES = [
  "C_1", "C#_1", "D_1", "D#_1", "E_1", "F_1", "F#_1", "G_1", "G#_1", "A_1", "A#_1", "B_1",
  "C0", "C#0", "D0", "D#0", "E0", "F0", "F#0", "G0", "G#0", "A0", "A#0", "B0",
  "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1",
  "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
  "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
  "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
  "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
  "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6",
  "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7",
  "C8", "C#8", "D8", "D#8", "E8", "F8", "F#8", "G8", "G#8", "A8", "A#8", "B8",
  "C9", "C#9", "D9", "D#9", "E9", "F9", "F#9", "G9"
];

const MINOR_SCALES = new Map([
  [0, [0, 3, 6, 7, 11]], // anchi-hoye
  [1, [0, 2, 3, 7, 8]], // tizita minor
  [2, [0, 1, 5, 7, 8]] // ambassel
]);

const MAJOR_SCALES = new Map([
  [0, [0, 2, 4, 7, 9]], // major pent
  [0, [0, 4, 5, 7, 11]] // bati major
]);

const TODAYS_SCALE = (() => {
  const even = new Date().getDate() % 2 === 0;
  // if even day get major scale, if odd get minor scale
  return even ? getRandomItem(MAJOR_SCALES) : getRandomItem(MINOR_SCALES);
})();

// Set master volume expressd in decibels
const setVolume = dB => {
  // Must be between -90dB and +6dB
  if (dB >= -90 && dB <= 6) {
    masterVolume.volume.value = dB;
  } else {
    console.warn('volume must be >= -90 dB & <= 6dB');
  }
}

const masterVolume = new Tone.Volume().toMaster();
setVolume(-21);

const synth = new Tone.PolySynth(8, Tone.Synth, {
  "oscillator": {
    "type": "sine1",
    "frequency": 440,
    "detune": 0,
    "phase": 0,
    "partialCount": 1,
    "volume": 0,
    "mute": false
  },
  "envelope": {
    "attack": 0.14169117647058824,
    "decay": 0.17388235294117646,
    "sustain": 0.25,
    "release": 0.30,
    "attackCurve": "sine",
    "decayCurve": "exponential",
    "releaseCurve": "ripple"
  },
  "portamento": 0,
  "volume": 0,
  "meta": {
    "synthType": "poly-synth",
    "presetName": "poly_bouncy_organ"
  }
}).connect(masterVolume);


const randomNoteFromScale = (root, intervals) => {
  // get root note index
  const rootIdx = MIDI_NUM_NAMES.indexOf(root);
  // check if correct
  if (rootIdx === -1) {
    console.error(`Invalid root note ${root}`);
    return;
  }
  // get random interval from array
  const randomInterval = intervals[Math.floor(Math.random() * intervals.length)];
  // random octave
  // const octave = (Math.random() >= 0.5) ? 12 : 0;
  // get corresponding note
  return randomNote = MIDI_NUM_NAMES[rootIdx + randomInterval];
};

window.addEventListener('click', e => {
  const note = randomNoteFromScale('C4', TODAYS_SCALE);
  console.log(`playing ${note} from scale ${TODAYS_SCALE}`);
  synth.triggerAttackRelease(note, '8n');
  // setTimeout(() => {
  //   synth.triggerAttackRelease(note, '8n');
  // }, 100);
});



document.querySelectorAll('.weather-icon').forEach(icon => {
  icon.addEventListener('click', e => {
    const weather = e.currentTarget.dataset.weather;
    console.log('weather selection:', weather);
    document.body.className = weather;
  });
});
