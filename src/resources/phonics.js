const phonics = [
  // Group 1
  {
    'text': 's',
    'gestureImage': 'resources/images/gestures/s.png',
    'gestureText': 'Weave your hand in an s shape, like a snake, and say ssssss.',
    'sound': 'resources/sounds/group1/s.mp3',
    'examples': ['snake', 'nest', 'grass']
  },
  {
    'text': 'a',
    'gestureImage': 'resources/images/gestures/a.png',
    'gestureText': 'Wiggle fingers above elbow as if ants crawling on you, saying a, a, a.',
    'sound': 'resources/sounds/group1/a.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 't',
    'gestureImage': 'resources/images/gestures/t.png',
    'gestureText': 'Turn head from side to side as if watching tennis and say t, t, t, t.',
    'sound': 'resources/sounds/group1/t.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'i',
    'gestureImage': 'resources/images/gestures/i.png',
    'gestureText': 'Pretend to be a mouse by wriggling fingers at end of noise and squeak i, i, i, i.',
    'sound': 'resources/sounds/group1/i.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'p',
    'gestureImage': 'resources/images/gestures/p.png',
    'gestureText': 'Pretend to puff out candles and say p, p, p.',
    'sound': 'resources/sounds/group1/p.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'n',
    'gestureImage': 'resources/images/gestures/n.png',
    'gestureText': 'Hold arms out at side, as if a plane, and say nnnnnnnnnn.',
    'sound': 'resources/sounds/group1/n.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  // Group 2
  {
    'text': 'c k',
    'gestureImage': 'resources/images/gestures/ck.png',
    'gestureText': 'Raise hands and snap fingers as if playing castanets and say ck, ck, ck.',
    'sound': 'resources/sounds/group2/ck.mp3',
    'examples': ['snake', 'nest', 'grass']
  },
  {
    'text': 'e',
    'gestureImage': 'resources/images/gestures/e.png',
    'gestureText': 'Pretend to tap an egg on the side of a pan and crack it into the pan, saying eh, eh, eh.',
    'sound': 'resources/sounds/group2/e.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'h',
    'gestureImage': 'resources/images/gestures/h.png',
    'gestureText': 'Hold hand in front of mouth panting h, h, h as if you are out of breath.',
    'sound': 'resources/sounds/group2/h.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'r',
    'gestureImage': 'resources/images/gestures/r.png',
    'gestureText': 'Pretend to be a puppy holding a rag, shaking head from side to side and say rrrrrrrrrrr.',
    'sound': 'resources/sounds/group2/r.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'm',
    'gestureImage': 'resources/images/gestures/m.png',
    'gestureText': 'Rub tummy as if seeing tasty food and say mmmmmm.',
    'sound': 'resources/sounds/group2/m.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'd',
    'gestureImage': 'resources/images/gestures/d.png',
    'gestureText': 'Beat hands up and down as if playing a drum and say d, d, d, d.',
    'sound': 'resources/sounds/group2/d.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  // Group 3
  {
    'text': 'g',
    'gestureImage': 'resources/images/gestures/g.png',
    'gestureText': 'Spiral hand down, as if water going down the drain, and say g, g, g.',
    'sound': 'resources/sounds/group3/g.mp3',
    'examples': ['snake', 'nest', 'grass']
  },
  {
    'text': 'o',
    'gestureImage': 'resources/images/gestures/o.png',
    'gestureText': 'Pretend to turn light switch on and off and say o, o, o, o.',
    'sound': 'resources/sounds/group3/o.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'u',
    'gestureImage': 'resources/images/gestures/u.png',
    'gestureText': 'Pretend to be putting up an umbrella and say u, u, u, u.',
    'sound': 'resources/sounds/group3/u.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'l',
    'gestureImage': 'resources/images/gestures/l.png',
    'gestureText': 'Pretend to lick a lollipop and say l, l, l, l.',
    'sound': 'resources/sounds/group3/l.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'f',
    'gestureImage': 'resources/images/gestures/f.png',
    'gestureText': 'Let hands gently come together as if toy fish deflating, and say ffffff.',
    'sound': 'resources/sounds/group3/f.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'b',
    'gestureImage': 'resources/images/gestures/b.png',
    'gestureText': 'Pretend to hit a ball with a bat and say b, b, b, b.',
    'sound': 'resources/sounds/group3/b.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  // Group 4
  {
    'text': 'ai',
    'gestureImage': 'resources/images/gestures/ai.png',
    'gestureText': 'Cup hand over ear and say ai, ai, ai.',
    'sound': 'resources/sounds/group4/ai.mp3',
    'examples': ['snake', 'nest', 'grass']
  },
  {
    'text': 'j',
    'gestureImage': 'resources/images/gestures/j.png',
    'gestureText': 'Pretend to wobble on a plate and say j, j, j.',
    'sound': 'resources/sounds/group4/j.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'oa',
    'gestureImage': 'resources/images/gestures/oa.png',
    'gestureText': 'Bring hand over mouth as if something terrible has happened and say oh!',
    'sound': 'resources/sounds/group4/oa.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'ie',
    'gestureImage': 'resources/images/gestures/ie.png',
    'gestureText': 'Stand to attention and salute, saying ie, ie.',
    'sound': 'resources/sounds/group4/ie.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'ee',
    'gestureImage': 'resources/images/gestures/ee.png',
    'gestureText': 'Put hands on head as if ears on a donkey. Move them up as you say the ee in eeyore, eeyore.',
    'sound': 'resources/sounds/group4/ee.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'or',
    'gestureImage': 'resources/images/gestures/or.png',
    'gestureText': 'Put hands on head as if ears on a donkey. Move them up down as you say the or in eeyore, eeyore.!',
    'sound': 'resources/sounds/group4/or.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  // Group 5
  {
    'text': 'z',
    'gestureImage': 'resources/images/gestures/z.png',
    'gestureText': 'Put arms out at sides and pretend to be a bee, saying zzzzzzzzzz.',
    'sound': 'resources/sounds/group5/z.mp3',
    'examples': ['snake', 'nest', 'grass']
  },
  {
    'text': 'w',
    'gestureImage': 'resources/images/gestures/w.png',
    'gestureText': 'Blow on to open hand, as if you are the wind, and say wh, wh, wh.',
    'sound': 'resources/sounds/group5/w.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'ng',
    'gestureImage': 'resources/images/gestures/ng.png',
    'gestureText': 'Imagine you are a weightlifter and pretend to lift a heavy weight above your head saying ng...',
    'sound': 'resources/sounds/group5/ng.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'v',
    'gestureImage': 'resources/images/gestures/v.png',
    'gestureText': 'Pretend to be holding the steering wheel of a van and say vvvvvvvv.',
    'sound': 'resources/sounds/group5/v.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'oo',
    'gestureImage': 'resources/images/gestures/oo.png',
    'gestureText': 'Move head back and forth as if it is the cuckoo in a cuckoo clock, saying u oo, u oo (short and long oo).',
    'sound': 'resources/sounds/group5/book.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'oo',
    'gestureImage': 'resources/images/gestures/oo2.png',
    'gestureText': 'Move head back and forth as if it is the cuckoo in a cuckoo clock, saying u oo, u oo (short and long oo).',
    'sound': 'resources/sounds/group5/moon.mp3',
    'examples': ['ant', 'ankle', 'cat'],
    'secondary': true
  },
  // Group 6
  {
    'text': 'y',
    'gestureImage': 'resources/images/gestures/y.png',
    'gestureText': 'Pretend to be eating a yoghurt and say y, y, y.',
    'sound': 'resources/sounds/group6/y.mp3',
    'examples': ['snake', 'nest', 'grass']
  },
  {
    'text': 'x',
    'gestureImage': 'resources/images/gestures/x.png',
    'gestureText': 'Pretend to take an x-ray with an x-ray camera, saying ks, ks, ks.',
    'sound': 'resources/sounds/group6/x.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'ch',
    'gestureImage': 'resources/images/gestures/ch.png',
    'gestureText': 'Move arms at sides as if you are a train, saying ch, ch, ch.',
    'sound': 'resources/sounds/group6/ch.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'sh',
    'gestureImage': 'resources/images/gestures/sh.png',
    'gestureText': 'Place index finger over lips and say sh sh sh.',
    'sound': 'resources/sounds/group6/sh.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'th',
    'gestureImage': 'resources/images/gestures/th.png',
    'gestureText': 'Pretend to be naughty clowns and stick out tongue a little for th,',
    'sound': 'resources/sounds/group6/this.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'th',
    'gestureImage': 'resources/images/gestures/th2.png',
    'gestureText': 'Pretend to be naughty clowns and stick out tongue a lot for th (this and thumb).',
    'sound': 'resources/sounds/group6/three.mp3',
    'examples': ['ant', 'ankle', 'cat'],
    'secondary': true
  },
  // Group 7
  {
    'text': 'qu',
    'gestureImage': 'resources/images/gestures/qu.png',
    'gestureText': 'Make a duck´s beak with your hands and say qu, qu, qu.',
    'sound': 'resources/sounds/group7/qu.mp3',
    'examples': ['snake', 'nest', 'grass']
  },
  {
    'text': 'ou',
    'gestureImage': 'resources/images/gestures/ou.png',
    'gestureText': 'Pretend your finger is a needle and prick thumb saying ou, ou, ou.',
    'sound': 'resources/sounds/group7/ou.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'oi',
    'gestureImage': 'resources/images/gestures/oi.png',
    'gestureText': 'Cup hands around mouth and shout to another boat saying oi!, ship ahoy!',
    'sound': 'resources/sounds/group7/oi.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'ue',
    'gestureImage': 'resources/images/gestures/ue.png',
    'gestureText': 'Point to people around you and say you, you, you.',
    'sound': 'resources/sounds/group7/ue.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'er',
    'gestureImage': 'resources/images/gestures/er.png',
    'gestureText': 'Roll hands over each other like a mixer and say erererer.',
    'sound': 'resources/sounds/group7/er.mp3',
    'examples': ['ant', 'ankle', 'cat']
  },
  {
    'text': 'ar',
    'gestureImage': 'resources/images/gestures/ar.png',
    'gestureText': 'Open mouth wide and say ah, as if at the doctors (UK English).',
    'sound': 'resources/sounds/group7/ar.mp3',
    'examples': ['ant', 'ankle', 'cat']
  }
];

export default phonics;
