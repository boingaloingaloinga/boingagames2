/* ==========================================================================
   BOINGA GAMES — app.js
   Game catalog, favorites, search/sort, themes, and the secret cheat console.
   ========================================================================== */

/* ---- Game catalog -------------------------------------------------------
   Each entry: { i, alt, src, href, ext } for a normal game link, or
   { i, alt, src, special, base } for the three Pokémon games that ask
   "normal or randomizer?" before navigating.
   ------------------------------------------------------------------------ */
const GAMES = [
{i:0,alt:"Bob The Robber 2",src:"images/bob-the-robber-2.png",href:"games/bob-the-robber-2/",ext:false},
{i:1,alt:"vex 7",src:"images/vex7.jpeg",href:"games/vex7/",ext:false},
{i:2,alt:"vex 6",src:"images/vex6.jpeg",href:"games/vex6/",ext:false},
{i:3,alt:"Retro Bowl",src:"images/retro-bowl.jpg",href:"games/retro-bowl/",ext:false},
{i:4,alt:"Drive Mad",src:"images/drive-mad.jpg",href:"games/drive-mad/",ext:false},
{i:5,alt:"Slope",src:"images/slope.jpg",href:"games/slope/",ext:false},
{i:6,alt:"Moto x3m",src:"images/moto-x3m.jpg",href:"games/motox3m/",ext:false},
{i:7,alt:"Moto x3m 2",src:"images/motox3m2.jpg",href:"games/motox3m2/",ext:false},
{i:8,alt:"2048",src:"images/2048.jpg",href:"games/2048/",ext:false},
{i:9,alt:"Paperio 2",src:"images/paperio2.png",href:"games/paperio2/",ext:false},
{i:10,alt:"Stickman Hook",src:"images/stickmanhook.jpg",href:"games/stickmanhook/",ext:false},
{i:11,alt:"OvO",src:"images/ovo.png",href:"games/OvO/",ext:false},
{i:12,alt:"OvO 2",src:"images/ovo2.avif",href:"games/ovo2/",ext:false},
{i:13,alt:"Cookie Clicker",src:"images/PerfectCookie.webp",href:"games/cookieclicker/",ext:false},
{i:14,alt:"Subway Surfers",src:"images/subwaysurfers.jpg",href:"games/subwaysurfers/",ext:false},
{i:15,alt:"Geometry Dash",src:"images/gdash.png",href:"games/gdash/",ext:false},
{i:16,alt:"Flappy Bird",src:"images/flappybird.png",href:"games/flappybird/",ext:false},
{i:17,alt:"Snake",src:"images/snake.png",href:"games/snake/",ext:false},
{i:18,alt:"Minecraft Classic",src:"images/mc.png",href:"games/mc/",ext:false},
{i:19,alt:"World's Hardest Game",src:"images/worldshardestgame.png",href:"games/worldshardestgame/",ext:false},
{i:20,alt:"World's Hardest Game 2",src:"images/worldshardestgame2.jfif",href:"games/worldshardestgame2/",ext:false},
{i:21,alt:"The Impossible Quiz",src:"images/impossible.png",href:"games/theimpossiblequiz/",ext:false},
{i:22,alt:"Tunnel Rush",src:"images/tunnelrush.jpg",href:"games/tunnelrush/",ext:false},
{i:23,alt:"Sort The Court",src:"images/sortthecourt.webp",href:"games/sortthecourt/",ext:false},
{i:24,alt:"BitLife",src:"images/bitlife.webp",href:"games/bitlife/",ext:false},
{i:25,alt:"Duck Life",src:"images/ducklife.png",href:"games/ducklife/",ext:false},
{i:26,alt:"Duck Life 2",src:"images/ducklife2.png",href:"games/ducklife2/",ext:false},
{i:27,alt:"Duck Life 3",src:"images/ducklife3.png",href:"games/ducklife3/",ext:false},
{i:28,alt:"Duck Life 4",src:"images/ducklife4.png",href:"games/ducklife4/",ext:false},
{i:29,alt:"Hacker Typer",src:"images/hackertype.png",href:"games/hackertype/",ext:false},
{i:30,alt:"Death Run 3d",src:"images/deathrun3d.png",href:"games/deathrun3d/",ext:false},
{i:31,alt:"Dinosaur Game",src:"images/dino.png",href:"games/dino/",ext:false},
{i:32,alt:"Basket Random",src:"images/basketrandom.png",href:"games/basketrandom/",ext:false},
{i:33,alt:"Soccer Random",src:"images/soccerrandom.png",href:"games/soccerrandom/",ext:false},
{i:34,alt:"Volley Random",src:"images/volley.png",href:"games/volley-random/",ext:false},
{i:35,alt:"Boxing Random",src:"images/boxingrandom.jpg",href:"games/boxingrandom/",ext:false},
{i:36,alt:"Fireboy and Watergirl",src:"images/fireboy.webp",href:"games/fireboy/",ext:false},
{i:37,alt:"Draw The Hill",src:"images/drawthehill.png",href:"games/drawthehill/",ext:false},
{i:38,alt:"Bottle Flip",src:"images/bottleflip.png",href:"games/bottleflip/",ext:false},
{i:39,alt:"Uno",src:"images/uno.png",href:"games/uno/",ext:false},
{i:40,alt:"Sandboxels",src:"images/sandboxels.png",href:"games/sandboxels/",ext:false},
{i:41,alt:"Bloxorz",src:"images/bloxorz.png",href:"games/bloxorz/",ext:false},
{i:42,alt:"Minesweeper",src:"images/minesweeper.webp",href:"games/minesweeper/",ext:false},
{i:43,alt:"Papa's Pizzeria",src:"images/papas.jfif",href:"games/papaspizzeria/",ext:false},
{i:44,alt:"Papa's Freezeria",src:"images/freeze.jfif",href:"games/papasfreezeria/",ext:false},
{i:45,alt:"Papa's Pancakeria",src:"images/pancake.jfif",href:"games/papaspancakeria/",ext:false},
{i:46,alt:"Papa's Tacomia",src:"images/tacomia.jpg",href:"games/papastacomia/",ext:false},
{i:47,alt:"Papa's Sushiria",src:"images/sushiria.webp",href:"games/papassushiria/",ext:false},
{i:48,alt:"Papa's Bakeria",src:"images/bakeria.jfif",href:"games/papasbakeria/",ext:false},
{i:49,alt:"Papa's Wingeria",src:"images/wingeria.jfif",href:"games/papaswingeria/",ext:false},
{i:50,alt:"Papa's Pastaria",src:"images/pastaria.jfif",href:"games/papaspastaria/",ext:false},
{i:51,alt:"Papa's Hotdogeria",src:"images/papashotdogeria.webp",href:"games/papashotdogeria/",ext:false},
{i:52,alt:"Papa's Donuteria",src:"images/papasdonuteria.avif",href:"games/papasdonuteria/",ext:false},
{i:53,alt:"Papa's Scooperia",src:"images/papasscooperia.jpg",href:"games/papasscooperia/",ext:false},
{i:54,alt:"Papa's Cheeseria",src:"images/papascheeseria.jpeg",href:"games/papascheeseria/",ext:false},
{i:55,alt:"Papa's Cupcakeria",src:"images/papascupcakeria.avif",href:"games/papascupcakeria/",ext:false},
{i:56,alt:"Super Mario Bros.",src:"images/mario.ico",href:"games/smb/",ext:false},
{i:57,alt:"Super Mario Bros 2",src:"images/smb2.webp",href:"games/smb2/",ext:false},
{i:58,alt:"Super Mario Bros 3",src:"images/smb3.png",href:"games/smb3/",ext:false},
{i:59,alt:"Super Mario All Stars",src:"images/allstars.png",href:"games/allstars/",ext:false},
{i:60,alt:"Super Mario World",src:"images/smw.png",href:"games/smw/",ext:false},
{i:61,alt:"Super Mario Land",src:"images/sml.png",href:"games/sml/",ext:false},
{i:62,alt:"Super Mario Land 2",src:"images/sml2.webp",href:"games/sml2/",ext:false},
{i:63,alt:"Super Mario 64",src:"images/sm64.jpg",href:"games/sm64/",ext:false},
{i:64,alt:"Super Mario 63",src:"images/sm63.webp",href:"games/sm63/",ext:false},
{i:65,alt:"New Super Mario Bros.",src:"images/newmario.jpeg",href:"games/newmario/",ext:false},
{i:66,alt:"Dr.Mario",src:"images/drmario.png",href:"games/drmario/",ext:false},
{i:67,alt:"Super Mario Kart",src:"images/smk.webp",href:"games/smk/",ext:false},
{i:68,alt:"Mario Kart 64",src:"images/mk64.webp",href:"games/mk64/",ext:false},
{i:69,alt:"Mario Kart Super Circuit",src:"images/mksc.webp",href:"games/mksc/",ext:false},
{i:70,alt:"Mario Kart DS",src:"images/mkds.jpg",href:"games/mkds/",ext:false},
{i:71,alt:"Mario Paint",src:"images/mariopaint.jpg",href:"games/mariopaint/",ext:false},
{i:72,alt:"Unfair Mario",src:"images/unfair.jpg",href:"games/unfair/",ext:false},
{i:73,alt:"Wario Land",src:"images/wario1.png",href:"games/wario1/",ext:false},
{i:74,alt:"Wario Land 2",src:"images/wario2.jpg",href:"games/wario2/",ext:false},
{i:75,alt:"Wario Land 3",src:"images/wario3.jpg",href:"games/wario3/",ext:false},
{i:76,alt:"Wario Land 4",src:"images/wario4.png",href:"games/wario4/",ext:false},
{i:77,alt:"Wario Ware - Touched!",src:"images/wariods.png",href:"games/wariods/",ext:false},
{i:78,alt:"Donkey Kong",src:"images/dkong.jpg",href:"games/dkong/",ext:false},
{i:79,alt:"Donkey Kong Country",src:"images/dkc.jpg",href:"games/dkc/",ext:false},
{i:80,alt:"Donkey Kong Country 2",src:"images/dkc2.png",href:"games/dkc2/",ext:false},
{i:81,alt:"Donkey Kong Country 3",src:"images/dkc3.png",href:"games/dkc3/",ext:false},
{i:82,alt:"Donkey Kong Country 3",src:"images/diddykongds.jpg",href:"games/diddykongds/",ext:false},
{i:83,alt:"The Legend Of Zelda",src:"images/zelda.png",href:"games/zelda/",ext:false},
{i:84,alt:"The Legend Of Zelda: A Link To The Past",src:"images/past.jpg",href:"games/past/",ext:false},
{i:85,alt:"The Legend Of Zelda: Ocarina Of Time",src:"images/oot.png",href:"games/oot/",ext:false},
{i:86,alt:"The Legend Of Zelda: Majora's Mask",src:"images/mm.png",href:"games/mm/",ext:false},
{i:87,alt:"Kirby Super Star",src:"images/kirby.jpg",href:"games/kirby/",ext:false},
{i:88,alt:"Kirby Nightmare In Dreamland",src:"images/nightmare.jpg",href:"games/nightmare/",ext:false},
{i:89,alt:"Kirby: Squeak Squad",src:"images/squeak.webp",href:"games/squeak/",ext:false},
{i:90,alt:"Punch Out!!!",src:"images/punch.png",href:"games/punch/",ext:false},
{i:91,alt:"Banjo Kazooie",src:"images/banjo.jpg",href:"games/banjo/",ext:false},
{i:92,alt:"Super Smash Bros.",src:"images/smash.jpg",href:"games/smash/",ext:false},
{i:93,alt:"Metroid",src:"images/metroid.jpg",href:"games/metroid/",ext:false},
{i:94,alt:"Mega Man",src:"images/megaman.webp",href:"games/megaman/",ext:false},
{i:95,alt:"Mega Man 2",src:"images/megaman2.jpg",href:"games/megaman2/",ext:false},
{i:96,alt:"Mega Man 3",src:"images/megaman3.jpg",href:"games/megaman3/",ext:false},
{i:97,alt:"Mega Man 4",src:"images/megaman4.webp",href:"games/megaman4/",ext:false},
{i:98,alt:"Mega Man 5",src:"images/megaman5.jpg",href:"games/megaman5/",ext:false},
{i:99,alt:"Mega Man 6",src:"images/megaman6.jpg",href:"games/megaman6/",ext:false},
{i:100,alt:"Mega Man X",src:"images/megax.webp",href:"games/megax/",ext:false},
{i:101,alt:"Mega Man X2",src:"images/megax2.jpg",href:"games/megax2/",ext:false},
{i:102,alt:"Mega Man X3",src:"images/megax3.jpg",href:"games/megax3/",ext:false},
{i:103,alt:"Mega Man X4",src:"images/megax4.jpg",href:"games/megax4/",ext:false},
{i:104,alt:"Mega Man X5",src:"images/megax5.jpg",href:"games/megax5/",ext:false},
{i:105,alt:"Street Fighter II",src:"images/street.png",href:"games/street/",ext:false},
{i:106,alt:"F-Zero",src:"images/fzero.png",href:"games/fzero/",ext:false},
{i:107,alt:"Star Fox",src:"images/fox.jpg",href:"games/fox/",ext:false},
{i:108,alt:"Earthbound",src:"images/earthbound.jpg",href:"games/earthbound/",ext:false},
{i:109,alt:"Animal Crossing Wild World",src:"images/wildworld.png",href:"games/wildworld/",ext:false},
{i:110,alt:"Doom",src:"images/doom.ico",href:"games/doom/",ext:false},
{i:111,alt:"Pac-Man",src:"images/pacman.png",href:"games/pacman/",ext:false},
{i:112,alt:"Dig-Dug",src:"images/digdug.jpg",href:"games/digdug/",ext:false},
{i:113,alt:"Galaga",src:"images/galaga.png",href:"games/galaga/",ext:false},
{i:114,alt:"Space Invaders",src:"images/spaceinvaders.png",href:"games/spaceinvaders/",ext:false},
{i:115,alt:"Sonic 1",src:"images/sonic1.jfif",href:"games/sonic1/",ext:false},
{i:116,alt:"Sonic CD",src:"images/soniccd.png",href:"games/soniccd/",ext:false},
{i:117,alt:"Sonic 2",src:"images/sonic2.png",href:"games/sonic2/",ext:false},
{i:118,alt:"Sonic 3",src:"images/sonic3.jfif",href:"games/sonic3/",ext:false},
{i:119,alt:"Sonic Mania",src:"images/sonicmania.jpg",href:"games/sonicmania/",ext:false},
{i:120,alt:"Sonic Spinball",src:"images/spinball.png",href:"games/spinball/",ext:false},
{i:121,alt:"Sonic Chaos",src:"images/chaos.jpg",href:"games/chaos/",ext:false},
{i:122,alt:"Sonic Triple Trouble",src:"images/triple.jpg",href:"games/triple/",ext:false},
{i:123,alt:"Sonic Pocket",src:"images/pocket.webp",href:"games/pocket/",ext:false},
{i:124,alt:"Sonic Advance",src:"images/sonicadvance.webp",href:"games/sonicadvance/",ext:false},
{i:125,alt:"Sonic Advance 2",src:"images/sonicadvance2.webp",href:"games/sonicadvance2/",ext:false},
{i:126,alt:"Sonic Advance 3",src:"images/advance3.jpg",href:"games/sonicadvance3/",ext:false},
{i:127,alt:"Sonic Rush",src:"images/rush.jpeg",href:"games/sonicrush/",ext:false},
{i:128,alt:"Sonic Battle",src:"images/battle.webp",href:"games/battle/",ext:false},
{i:129,alt:"Sonic Robo Blast 2",src:"images/srb2.jpg",href:"games/srb2/",ext:false},
{i:130,alt:"Pokemon: Fire Red",src:"images/firered.jfif",special:"firered",base:"games/firered/"},
{i:131,alt:"Pokemon: Leaf Green",src:"images/leafgreen.jpg",href:"games/leafgreen/",ext:false},
{i:132,alt:"Pokemon: Yellow",src:"images/yellow.jpg",href:"games/yellow/",ext:false},
{i:133,alt:"Pokemon: Gold",src:"images/gold.jpg",special:"gold",base:"games/gold/"},
{i:134,alt:"Pokemon: Silver",src:"images/silver.jpg",href:"games/silver/",ext:false},
{i:135,alt:"Pokemon: Crystal",src:"images/crystal.png",href:"games/crystal/",ext:false},
{i:136,alt:"Pokemon: Sapphire",src:"images/sapphire.png",special:"sapphire",base:"games/sapphire/"},
{i:137,alt:"Pokemon: Ruby",src:"images/ruby.jpg",href:"games/ruby/",ext:false},
{i:138,alt:"Pokemon: Emerald",src:"images/emerald.jpg",href:"games/emerald/",ext:false},
{i:139,alt:"Pokemon: Diamond",src:"images/diamond.jpg",href:"games/diamond/",ext:false},
{i:140,alt:"Pokemon: Pearl",src:"images/pearl.jpg",href:"games/pearl/",ext:false},
{i:141,alt:"Pokemon: Platinum",src:"images/platinum.jpg",href:"games/platinum/",ext:false},
{i:142,alt:"Pokemon: Black",src:"images/black.jpg",href:"games/black/",ext:false},
{i:143,alt:"Pokemon: White",src:"images/white.jpg",href:"games/white/",ext:false},
{i:144,alt:"Pokemon: Black 2",src:"images/black2.jpg",href:"games/black2/",ext:false},
{i:145,alt:"Pokemon: White 2",src:"images/white2.jpg",href:"games/white/",ext:false},
{i:146,alt:"Crash Bandicoot",src:"images/crash.png",href:"games/crash/",ext:false},
{i:147,alt:"Crash Bandicoot 2: Warped",src:"images/crash2.jpg",href:"games/crash2/",ext:false},
{i:148,alt:"Crash Team Racing",src:"images/ctr.png",href:"games/ctr/",ext:false},
{i:149,alt:"Spider-Man",src:"images/spider.jpg",href:"games/spider/",ext:false},
{i:150,alt:"Pepsi Man",src:"images/pepsiman.jpeg",href:"games/pepsi/",ext:false},
{i:151,alt:"Backyard Hockey",src:"images/hockey.jpg",href:"games/hockey/",ext:false},
{i:152,alt:"Backyard Baseball",src:"images/bbaseball.jpg",href:"games/bbaseball/",ext:false},
{i:153,alt:"Backyard Football",src:"images/bfootball.jpg",href:"games/bfootball/",ext:false},
{i:154,alt:"Backyard Basketball",src:"images/bbasketball.jpg",href:"games/bbasketball/",ext:false},
{i:155,alt:"Backyard Skateboarding",src:"images/bskate.jpg",href:"games/bskate/",ext:false},
{i:156,alt:"Tiny Fishing",src:"images/tinyfishing.jpg",href:"games/tinyfishing/",ext:false},
{i:157,alt:"Henry Stickmin: Breaking the Bank",src:"images/breakingthebank.jpg",href:"games/breakingthebank/",ext:false},
{i:158,alt:"Henry Stickmin: Escaping The Prison",src:"images/escapingtheprison.ico",href:"games/escapingtheprison/",ext:false},
{i:159,alt:"Henry Stickmin: Infiltrating The Airship",src:"images/infiltratingtheairship.ico",href:"games/infiltratingtheairship/",ext:false},
{i:160,alt:"Henry Stickmin: Fleeing The Complex",src:"images/fleeingthecomplex.webp",href:"games/fleeingthecomplex/",ext:false},
{i:161,alt:"Riddle School 3",src:"images/rs3.webp",href:"games/riddleschool3/",ext:false},
{i:162,alt:"Jack Smith",src:"images/jacksmith.jpg",href:"games/jacksmith/",ext:false},
{i:163,alt:"1v1.lol",src:"images/1v1.jpg",href:"games/1v1lol/",ext:false},
{i:164,alt:"Crossy Road",src:"images/crossyroad.avif",href:"games/crossyroad/",ext:false},
{i:165,alt:"Baldi's Basics",src:"images/baldisbasics.webp",href:"games/baldisbasics/",ext:false},
{i:166,alt:"Twitch Tetris",src:"images/tetris.jpg",href:"games/tetris/",ext:false},
{i:167,alt:"Jetpack Joyride",src:"images/jetpack.jpeg",href:"games/jetpack-joyride/",ext:false},
{i:168,alt:"Stack",src:"images/stack.jpeg",href:"games/stack/",ext:false},
{i:169,alt:"Doodle Jump",src:"images/doodle.webp",href:"games/doodle-jump/",ext:false},
{i:170,alt:"Alien Hominid",src:"images/alien.png",href:"games/alienhominid/",ext:false},
{i:171,alt:"Mr.Fancy Pants Adventures",src:"images/fancy.png",href:"games/fancypantsadventures/",ext:false},
{i:172,alt:"There Is No Game",src:"images/nogame.jpeg",href:"games/there-is-no-game/",ext:false},
{i:173,alt:"Idle Breakout",src:"images/idle.webp",href:"games/idle-breakout/",ext:false},
{i:174,alt:"Fruit Ninja",src:"images/fruit-ninja.avif",href:"games/fruitninja/",ext:false},
{i:175,alt:"Hole.io",src:"images/holeio.jpg",href:"games/holeio/",ext:false},
{i:176,alt:"Google Fued",src:"images/fued.png",href:"games/fued/",ext:false},
{i:177,alt:"Achivement Unlocked",src:"images/achivement.jpg",href:"games/achivement/",ext:false},
{i:178,alt:"N-Gon",src:"images/n-gon.jpg",href:"games/n-gon/",ext:false},
{i:179,alt:"Bloon's Tower Defense 5",src:"images/btd5.png",href:"games/btd5/",ext:false},
{i:180,alt:"Deal Or No Deal",src:"images/deal.jpg",href:"games/deal/",ext:false},
{i:181,alt:"Edge Surf",src:"images/surf.jpg",href:"games/surf/",ext:false},
{i:182,alt:"Run 2",src:"images/run2.jpg",href:"games/Run 2/",ext:false},
{i:183,alt:"Block Blast",src:"images/block.jpg",href:"games/block/",ext:false},
{i:184,alt:"Drift Hunters",src:"images/hunt.webp",href:"games/drift-hunters/",ext:false},
{i:185,alt:"House Of Hazards",src:"images/house.webp",href:"games/house/",ext:false},
{i:186,alt:"Superhot",src:"images/superhot.jpg",href:"games/superhot/",ext:false},
{i:187,alt:"Getting Over It",src:"images/getting.jpg",href:"games/gettingoverit/",ext:false},
{i:188,alt:"10 Minutes Till Dawn",src:"images/minutes.png",href:"games/minutes/",ext:false},
{i:189,alt:"Smash Karts",src:"images/smashkarts.jpg",href:"games/smashkarts/",ext:false},
{i:190,alt:"Super Bomberman 2",src:"images/bomberman.png",href:"games/bomberman/",ext:false},
{i:191,alt:"Tomb Of The Mask",src:"images/tomb.png",href:"games/tomb/",ext:false},
{i:192,alt:"Color Switch",src:"images/color.png",href:"games/color/",ext:false},
{i:193,alt:"Tag",src:"images/tag.webp",href:"games/tag/",ext:false},
{i:194,alt:"Cut The Rope",src:"images/cut.png",href:"games/cut/",ext:false},
{i:195,alt:"Elastic Man",src:"images/elasticman.webp",href:"games/elasticman/",ext:false},
{i:196,alt:"Stack Ball",src:"images/stack.png",href:"games/ball/",ext:false},
{i:197,alt:"A Dance of Fire and Ice",src:"images/fireice.png",href:"games/fireice/",ext:false},
{i:198,alt:"Cluster Rush",src:"images/cluster.png",href:"games/",ext:false},
{i:199,alt:"Cat Trap",src:"images/cat.png",href:"games/cat/",ext:false},
{i:200,alt:"You Are Jeff Bezos",src:"images/bezos.png",href:"games/bezos/",ext:false},
{i:201,alt:"60 Second Burger Rush",src:"images/burger.jpg",href:"games/burger/",ext:false},
{i:202,alt:"Portal: Flash Version",src:"images/portal.jpg",href:"games/portal/",ext:false},
{i:203,alt:"Core Ball",src:"images/core-ball.webp",href:"games/core-ball/",ext:false},
{i:204,alt:"Basketball Stars",src:"images/basketstars.jpg",href:"games/basketstars/",ext:false},
{i:205,alt:"Ducktales",src:"images/ducktales.jpg",href:"games/ducktales/",ext:false},
{i:206,alt:"Line Rider",src:"images/line.jpg",href:"games/line/",ext:false},
{i:207,alt:"Angry Birds",src:"images/angry.webp",href:"games/angry/",ext:false},
{i:208,alt:"Angry Birds Space",src:"images/angryspace.png",href:"games/angryspace/",ext:false},
{i:209,alt:"Murder",src:"images/murder.png",href:"games/murder/",ext:false},
{i:210,alt:"Stacktris",src:"images/stacktris.png",href:"games/stacktris/",ext:false},
{i:211,alt:"Run 3",src:"images/run3.jfif",href:"games/run3/",ext:false},
{i:212,alt:"Club Penguin Fishing",src:"images/penguin.jpg",href:"games/penguin/",ext:false},
{i:213,alt:"Club Penguin",src:"images/clubpenguin.jpg",href:"https://play.cplegacy.com/",ext:true},
{i:214,alt:"Ping Pong",src:"images/pingpong.png",href:"games/pingpong/",ext:false},
{i:215,alt:"Crazy Cattle 3D",src:"images/cattle.jpg",href:"https://crazycattle3d.github.io/",ext:true},
{i:216,alt:"Super Meat Boy",src:"images/meatboy.jpg",href:"games/meatboy/",ext:false},
{i:217,alt:"Super Meat Boy",src:"images/crossover.png",href:"games/crossover/",ext:false},
{i:218,alt:"Hextris",src:"images/hextris.webp",href:"games/hextris/",ext:false},
{i:225,alt:"Celeste",src:"images/celeste.png",href:"games/celeste/",ext:false},
{i:235,alt:"People Playground",src:"images/peopleplayground.png",href:"games/peopleplayground/",ext:false},
{i:236,alt:"ULTRAKILL",src:"images/ultrakill.png",href:"games/ultrakill/",ext:false},
{i:237,alt:"The Binding Of Issac",src:"images/tboi.png",href:"games/tboi/",ext:false},
{i:239,alt:"Peggle: Double Shot",src:"images/peggle.jpg",href:"games/peggle/",ext:false},
{i:240,alt:"Granny",src:"images/granny.png",href:"games/granny/",ext:false},
{i:241,alt:"Half-Life",src:"images/halflife.png",href:"games/halflife/",ext:false},
{i:242,alt:"Half-Life: Opposing Force",src:"images/halflifeop.png",href:"games/halflifeop/",ext:false},
{i:243,alt:"Idle Miner Tycoon",src:"images/minertycoon.jpg",href:"games/minertycoon/",ext:false},
{i:246,alt:"Hollow Knight: Silksong",src:"images/silksong.png",href:"games/silksong/",ext:false},
{i:247,alt:"Raft Wars",src:"images/raftwars.jpg",href:"games/raftwars/",ext:false},
{i:248,alt:"Raft Wars 2",src:"images/raftwars2.webp",href:"games/raftwars2/",ext:false},
{i:249,alt:"Aquapark.io",src:"images/aquapark.png",href:"games/aquapark/",ext:false},
{i:250,alt:"Kindergarten",src:"images/kindergarten.png",href:"games/kindergarten/",ext:false},
{i:251,alt:"Kindergarten 2",src:"images/kindergarten2.jpg",href:"games/kindergarten2/",ext:false},
{i:252,alt:"Kindergarten 3",src:"images/kindergarten3.png",href:"games/kindergarten3/",ext:false},
{i:253,alt:"Red Ball 4",src:"images/rb4.webp",href:"games/rb4/",ext:false},
{i:254,alt:"8-Ball Pool",src:"images/8ball.webp",href:"games/8ball/",ext:false},
{i:255,alt:"Interactive Buddy",src:"images/buddy.jpg",href:"games/buddy/",ext:false},
{i:256,alt:"Infinite Craft",src:"images/infinite.webp",href:"games/infinitecraft/",ext:false},
{i:257,alt:"IQ Ball",src:"images/iqball.jpg",href:"games/iqball/",ext:false},
{i:258,alt:"Bronze Age",src:"images/bronzeage.jpg",href:"games/bronzeage/",ext:false},
{i:259,alt:"Suika Game",src:"images/suika.webp",href:"games/suika/",ext:false},
{i:260,alt:"Crazy Cars",src:"images/crazycars.png",href:"games/crazycars/",ext:false},
{i:261,alt:"Just Press The Button",src:"images/button.jpg",href:"games/button/",ext:false},
{i:262,alt:"Slice It All!",src:"images/slice.png",href:"games/slice/",ext:false},
{i:263,alt:"Just One Boss",src:"images/boss.jpg",href:"games/boss/",ext:false},
{i:264,alt:"Snow Rider 3D",src:"images/snow.png",href:"games/snow/",ext:false},
{i:265,alt:"Bouncy Motors",src:"images/bouncymotors.png",href:"games/bouncymotors/",ext:false},
{i:266,alt:"Tony Hawk's Pro Skater",src:"images/tonyhawk.jpg",href:"games/tonyhawk/",ext:false},
{i:267,alt:"Space Is Key",src:"images/spaceiskey.png",href:"games/spaceiskey/",ext:false},
{i:268,alt:"Factory Balls",src:"images/factoryballs.webp",href:"games/factoryballs/",ext:false},
{i:269,alt:"Factory Balls 2",src:"images/factoryballs2.jpg",href:"games/factoryballs2/",ext:false},
{i:270,alt:"Factory Balls 3",src:"images/factoryballs3.jpg",href:"games/factoryballs3/",ext:false},
{i:271,alt:"Factory Balls 4",src:"images/factoryballs4.jpg",href:"games/factoryballs4/",ext:false},
{i:273,alt:"Madalin Stunt Cars 2",src:"images/madalin.webp",href:"games/madalin/",ext:false},
{i:274,alt:"Basket FRVR",src:"images/basketfrvr.avif",href:"games/basketfrvr/",ext:false},
{i:275,alt:"CircloO",src:"images/circlo.png",href:"games/circlo/",ext:false},
{i:276,alt:"Bouncemasters",src:"images/bouncemasters.png",href:"games/bouncemasters/",ext:false},
{i:277,alt:"Solar Smash",src:"images/solarsmash.png",href:"games/solarsmash/",ext:false},
{i:278,alt:"Build a Big Army",src:"images/buildabigarmy.jpg",href:"games/buildabigarmy/",ext:false},
{i:281,alt:"OG Getting Over It",src:"images/oggettingoverit.png",href:"games/oggettingoverit/",ext:false},
{i:282,alt:"One Bit Adventure",src:"images/onebitadventure.png",href:"games/onebitadventure/",ext:false},
{i:283,alt:"Blocky Demolition Derby",src:"images/blockydemolitionderby.png",href:"games/blockydemolitionderby/",ext:false},
{i:284,alt:"The Final Earth 2",src:"images/finalearth2.png",href:"games/finalearth2/",ext:false},
{i:285,alt:"Fallout",src:"images/fallout.png",href:"games/fallout/",ext:false},
{i:286,alt:"Gunspin",src:"images/gunspin.png",href:"games/gunspin/",ext:false},
{i:287,alt:"Flip Master",src:"images/flipmaster.png",href:"games/flipmaster/",ext:false},
{i:288,alt:"Highway Racer",src:"images/highwayracer.png",href:"games/highwayracer/",ext:false},
{i:289,alt:"Cubefield",src:"images/cubefield.png",href:"games/cubefield/",ext:false},
{i:290,alt:"Big Tower Tiny Square",src:"images/bigtowertinysquare.jpg",href:"games/bigtowertinysquare/",ext:false},
{i:291,alt:"Big Tower Tiny Square 2",src:"images/bigtowertinysquare2.png",href:"games/bigtowertinysquare2/",ext:false},
{i:292,alt:"Big ICE Tower Tiny Square",src:"images/bigicetowertinysquare.png",href:"games/bigicetowertinysquare/",ext:false},
{i:293,alt:"Big NEON Tower Tiny Square",src:"images/bigneontowertinysquare.png",href:"games/bigneontowertinysquare/",ext:false},
{i:294,alt:"Metal Gear Solid",src:"images/metalgearsolid.png",href:"games/metalgearsolid/",ext:false},
{i:296,alt:"Find The Alien",src:"images/findthealien.png",href:"games/findthealien/",ext:false},
{i:297,alt:"Wall Kickers NES",src:"images/wallkickersnes.png",href:"games/wallkickersnes/",ext:false},
{i:298,alt:"Resident Evil",src:"images/residentevil.png",href:"games/residentevil/",ext:false},
{i:299,alt:"Silent Hill",src:"images/silenthill.png",href:"games/silenthill/",ext:false},
{i:300,alt:"12 Mini Battles",src:"images/minibattles.png",href:"games/minibattles/",ext:false},
{i:301,alt:"Boom Slingers ReBoom",src:"images/boomslingersreboom.png",href:"games/boomslingersreboom/",ext:false},
{i:306,alt:"Idle Lumber Inc.",src:"images/idlelumberinc.png",href:"games/idlelumberinc/",ext:false},
{i:307,alt:"Pac-Man World",src:"images/pacmanworld.png",href:"games/pacmanworld/",ext:false},
{i:308,alt:"Escape Road",src:"images/escaperoad.png",href:"games/escaperoad/",ext:false},
{i:310,alt:"Postal",src:"images/postal.png",href:"games/postal/",ext:false},
{i:311,alt:"Celeste Full",src:"images/celestenew.png",href:"games/celestenew/",ext:false},
{i:315,alt:"Rolly Vortex",src:"images/rollyvortex.png",href:"games/rollyvortex/",ext:false},
{i:316,alt:"Slope 2",src:"images/slope2.png",href:"games/slope2/",ext:false},
{i:318,alt:"Temple Run 2",src:"images/templerun2.png",href:"games/templerun2/",ext:false},
{i:319,alt:"Giant Wanted",src:"images/giantwanted.png",href:"games/giantwanted/",ext:false},
{i:320,alt:"Ragdoll Archers",src:"images/ragdollarchers.png",href:"games/ragdollarchers/",ext:false},
{i:321,alt:"Ragdoll Hit",src:"images/ragdollhit.png",href:"games/ragdollhit/",ext:false},
{i:322,alt:"This Is The Only Level",src:"images/thisistheonlylevel.png",href:"games/thisistheonlylevel/",ext:false},
{i:328,alt:"Cave Story",src:"images/cavestory.png",href:"games/cavestory/",ext:false},
{i:329,alt:"Dadish",src:"images/dadish.png",href:"games/dadish/",ext:false},
{i:330,alt:"Dadish 2",src:"images/dadish2.png",href:"games/dadish2/",ext:false},
{i:331,alt:"Dadish 3",src:"images/dadish3.png",href:"games/dadish3/",ext:false},
{i:332,alt:"Dadish 3D",src:"images/dadish3d.png",href:"games/dadish3d/",ext:false},
{i:333,alt:"Tomb Raider",src:"images/tombraider.jpg",href:"games/tombraider/",ext:false},
{i:334,alt:"Terraria",src:"images/terraria.png",href:"games/terraria/",ext:false},
{i:335,alt:"Final Fantasy VII",src:"images/ff7.jpg",href:"games/ff7/",ext:false},
{i:336,alt:"Castlevania: Symphony of The Night",src:"images/castlevania.png",href:"games/castlevania/",ext:false},
{i:337,alt:"Please Don't Touch Anything",src:"images/touch.png",href:"games/touch/",ext:false},
{i:338,alt:"Chrono Trigger",src:"images/chrono.png",href:"games/chrono/",ext:false},
{i:339,alt:"A Difficult Game About Climbing",src:"images/climbing.png",href:"games/climbing/",ext:false},
{i:340,alt:"Learn To Fly",src:"images/learntofly.png",href:"games/learntofly/",ext:false},
{i:341,alt:"Iron Lung",src:"images/ironlung.png",href:"games/ironlung/",ext:false},
{i:342,alt:"Untitled Goose Game",src:"images/goose.png",href:"games/goose/",ext:false},
{i:343,alt:"Clover Pit",src:"images/cloverpit.png",href:"games/cloverpit/",ext:false},
{i:344,alt:"99 Balls",src:"images/99balls.png",href:"games/99balls/",ext:false},
{i:345,alt:"Poly Track",src:"images/polytrack.png",href:"games/polytrack/",ext:false},
{i:347,alt:"Super Monkey Ball 1&2",src:"images/monkey.png",href:"games/monkey/",ext:false},
{i:348,alt:"Your Only Move Is HUSTLE",src:"images/hustle.png",href:"games/hustle/",ext:false},
{i:349,alt:"Bust-a-Loop",src:"images/bustaloop.png",href:"games/bustaloop/",ext:false},
{i:350,alt:"Glover",src:"images/glover.jpg",href:"games/glover/",ext:false}
];
/* ---- Special confirm-dialog links (normal vs randomizer) --------------- */
const CONFIRM_PROMPTS = {
  firered: "OK for Normal, Cancel for Randomizer.",
  gold: "Press OK for Normal, Cancel for Randomized.",
  sapphire: "Press OK for Normal, Cancel for Randomized."
};

/* ---- Secret codes --------------------------------------------------------
   A handful of codes redirect immediately; anything else is looked up in
   codes.txt (format: "code: message" per line) as a fallback.
   ------------------------------------------------------------------------ */
const SECRET_CODES = {
  "chaotix": "games/knuckles/",
  "og": "/boingagames/original.html",
  "super secret": "/boingagames/time.html",
  "deer": "games/deer/",
  "april": "/boingagames/april.html",
  "april2": "/boingagames/april2.html",
  "boinga": "/boingagames/boinga.html",
  "parappa": "games/parappa/",
  "the room in between": "/boingagames/man.html",
  "dvd": "/boingagames/dvd.html",
  "clock": "/boingagames/clock.html",
  "blast": "https://www.youtube.com/@blastonianSOF",
  "place": "/boingagames/boingaplace.html"
};
const RELOAD_CODE = "gaster"; // typing this instantly reloads the page, unlisted on purpose

/* ---- Favorites ------------------------------------------------------------ */
const Favorites = (() => {
  const KEY = "favoriteGames";
  const MAX = 10;

  const get = () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  };
  const save = (list) => localStorage.setItem(KEY, JSON.stringify(list));

  function toggle(id) {
    let list = get();
    if (list.includes(id)) {
      list = list.filter(x => x !== id);
    } else {
      if (list.length >= MAX) {
        alert(`You can only favorite up to ${MAX} games. Remove one first.`);
        return get();
      }
      list.push(id);
    }
    save(list);
    return list;
  }

  return { get, toggle, MAX };
})();

/* ---- Rendering ------------------------------------------------------------ */
const gamesEl = document.getElementById("games");
const shelfEl = document.getElementById("favorites-shelf");
const shelfCountEl = document.getElementById("favorites-count");
const resultCountEl = document.getElementById("result-count");

function gameHref(game) {
  return game.special ? "#" : game.href;
}

function makeStar(id, favorited) {
  const star = document.createElement("span");
  star.className = "star" + (favorited ? " favorited" : "");
  star.dataset.id = id;
  star.textContent = favorited ? "\u2605" : "\u2606";
  star.title = favorited ? "Remove from favorites" : "Add to favorites";
  star.setAttribute("role", "button");
  star.setAttribute("aria-label", star.title);
  return star;
}

function makeTile(game) {
  const favs = Favorites.get();
  const isFav = favs.includes(game.i);

  const a = document.createElement("a");
  a.className = "tile";
  a.dataset.id = game.i;
  a.dataset.alt = game.alt.toLowerCase();
  a.href = gameHref(game);
  if (game.ext) a.target = "_blank", a.rel = "noopener";
  if (game.special) a.dataset.special = game.special, a.dataset.base = game.base;

  a.appendChild(makeStar(game.i, isFav));

  const thumb = document.createElement("div");
  thumb.className = "thumb";
  const img = document.createElement("img");
  img.src = game.src;
  img.alt = game.alt;
  img.loading = "lazy";
  img.width = 96; img.height = 96;
  thumb.appendChild(img);
  a.appendChild(thumb);

  const label = document.createElement("span");
  label.className = "label";
  label.textContent = game.alt;
  a.appendChild(label);

  return a;
}

function renderGrid() {
  gamesEl.innerHTML = "";
  const frag = document.createDocumentFragment();
  GAMES.forEach(game => frag.appendChild(makeTile(game)));
  gamesEl.appendChild(frag);
}

function renderShelf() {
  const favs = Favorites.get();
  shelfEl.innerHTML = "";
  shelfCountEl.textContent = `${favs.length}/${Favorites.MAX}`;

  if (favs.length === 0) {
    const msg = document.createElement("p");
    msg.className = "favorites-empty";
    msg.textContent = "Star a game below to pin it here \u2014 up to 10.";
    shelfEl.appendChild(msg);
    return;
  }

  favs.forEach(id => {
    const game = GAMES.find(g => g.i === id);
    if (game) shelfEl.appendChild(makeTile(game));
  });
}

function syncStars() {
  const favs = Favorites.get();
  document.querySelectorAll(".star").forEach(star => {
    const id = Number(star.dataset.id);
    const isFav = favs.includes(id);
    star.classList.toggle("favorited", isFav);
    star.textContent = isFav ? "\u2605" : "\u2606";
    star.title = isFav ? "Remove from favorites" : "Add to favorites";
  });
}

/* Handle every click once, at the document level: stars, special links,
   and normal navigation all pass through here. */
document.addEventListener("click", (e) => {
  const star = e.target.closest(".star");
  if (star) {
    e.preventDefault();
    e.stopPropagation();
    Favorites.toggle(Number(star.dataset.id));
    syncStars();
    renderShelf();
    return;
  }

  const special = e.target.closest("[data-special]");
  if (special) {
    e.preventDefault();
    const kind = special.dataset.special;
    const base = special.dataset.base;
    const wantsNormal = confirm(CONFIRM_PROMPTS[kind] || "OK for Normal, Cancel for Randomizer.");
    window.location.href = wantsNormal ? base : base + "random/";
  }
});

/* ---- Search + sort --------------------------------------------------------- */
const searchInput = document.getElementById("gameSearch");
const sortBtn = document.getElementById("sortBtn");
let sortedAZ = false;

function applySearch() {
  const q = searchInput.value.trim().toLowerCase();
  let visible = 0;
  gamesEl.querySelectorAll(".tile").forEach(tile => {
    const match = tile.dataset.alt.includes(q);
    tile.classList.toggle("hidden", !match);
    if (match) visible++;
  });
  resultCountEl.textContent = q
    ? `${visible} of ${GAMES.length} games match \u201c${searchInput.value.trim()}\u201d`
    : `${GAMES.length} games`;
}

function applySort() {
  const tiles = Array.from(gamesEl.querySelectorAll(".tile"));
  tiles.sort((a, b) => sortedAZ
    ? a.dataset.alt.localeCompare(b.dataset.alt)
    : Number(a.dataset.id) - Number(b.dataset.id));
  tiles.forEach(t => gamesEl.appendChild(t));
}

searchInput.addEventListener("input", applySearch);
sortBtn.addEventListener("click", () => {
  sortedAZ = !sortedAZ;
  sortBtn.textContent = sortedAZ ? "Sort: A\u2013Z" : "Sort: Default";
  sortBtn.setAttribute("aria-pressed", String(sortedAZ));
  applySort();
});

/* ---- Themes ---------------------------------------------------------------- */
const THEMES = {
  default: { bg: "linear-gradient(to right, #1e1e2f, #3a3b5b)", color: "#ffcc00", swatch: "#3a3b5b" },
  blossom: { bg: "linear-gradient(to right, #ffafcc, #ffcad4)", color: "#880e4f", swatch: "#ffafcc" },
  iridium: { bg: "linear-gradient(to right, #333, #666)", color: "#ddd", swatch: "#666" },
  sunset: { bg: "linear-gradient(to right, #ff7e5f, #feb47b)", color: "#4b2e05", swatch: "#ff7e5f" },
  forest: { bg: "linear-gradient(to right, #228B22, #014421)", color: "#90EE90", swatch: "#228B22" },
  ocean: { bg: "linear-gradient(to right, #064273, #76b6c4)", color: "#eaf7fb", swatch: "#064273" },
  volcano: { bg: "linear-gradient(to right, #823661, #4E2728)", color: "#1da2d8", swatch: "#823661" },
  flame: { bg: "linear-gradient(to right, #e9d022, #e60b09)", color: "#e60b09", swatch: "#e60b09" },
  cotton: { bg: "linear-gradient(to right, #E9B7CE, #D3F3F1)", color: "#5b4a63", swatch: "#E9B7CE" },
  aurora: { bg: "linear-gradient(to right, #2E1A47, #16A085)", color: "#c9f7e9", swatch: "#16A085" },
  meadow: { bg: "linear-gradient(to right, #56AB2F, #A8E063)", color: "#1f3a0a", swatch: "#56AB2F" },
  yinyang: { bg: "linear-gradient(to right, #E6DADA, #274046)", color: "#E6DADA", swatch: "#274046" },
  desert: { bg: "linear-gradient(to right, #FCEABB, #E1B850)", color: "#6b4e00", swatch: "#E1B850" },
  mist: { bg: "linear-gradient(to right, #757F9A, #D7DDE8)", color: "#2c3140", swatch: "#757F9A" },
  space: { image: "space.gif", color: "#e6e6ff", swatch: "#10102a" },
  george: { image: "georgebg.jpg", color: "#ffcc00", swatch: "#8a5a2b" },
  xp: { image: "xp.png", color: "#ffcc00", swatch: "#1a5fb4" }
};

function applyTheme(theme) {
  const t = THEMES[theme];
  document.body.style.backgroundAttachment = "";
  document.body.style.backgroundSize = "";
  if (!t) {
    if (theme === "custom") {
      const saved = localStorage.getItem("customBackground");
      if (saved) {
        document.body.style.background = `url('${saved}') no-repeat center center fixed`;
        document.body.style.backgroundSize = "cover";
      }
    }
    return;
  }
  if (t.image) {
    document.body.style.background = `url("${t.image}")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  } else {
    document.body.style.background = t.bg;
  }
  document.body.style.color = t.color;
}

function buildThemeSwatches() {
  const grid = document.getElementById("swatch-grid");
  Object.entries(THEMES).forEach(([key, t]) => {
    const btn = document.createElement("button");
    btn.className = "swatch";
    btn.style.background = t.image ? "#333" : t.swatch;
    btn.title = key[0].toUpperCase() + key.slice(1);
    btn.dataset.theme = key;
    btn.addEventListener("click", () => {
      localStorage.setItem("selectedTheme", key);
      applyTheme(key);
      document.querySelectorAll(".swatch").forEach(s => s.setAttribute("aria-pressed", String(s === btn)));
    });
    grid.appendChild(btn);
  });
}

const themeToggle = document.getElementById("toggle-themes-btn");
const themePop = document.getElementById("theme-pop");
themeToggle.addEventListener("click", () => themePop.classList.toggle("open"));
document.addEventListener("click", (e) => {
  if (!themePop.contains(e.target) && e.target !== themeToggle) themePop.classList.remove("open");
});

document.getElementById("background-upload").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const dataUrl = ev.target.result;
    document.body.style.background = `url('${dataUrl}') no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
    localStorage.setItem("customBackground", dataUrl);
    localStorage.setItem("selectedTheme", "custom");
  };
  reader.readAsDataURL(file);
});

/* ---- Cheat console (secret code entry) ------------------------------------- */
const consoleEl = document.getElementById("cheat-console");
const codeInput = document.getElementById("codeInput");
const codeMessage = document.getElementById("codeMessage");

function openConsole() {
  consoleEl.classList.add("open");
  codeInput.value = "";
  codeMessage.textContent = "";
  codeMessage.className = "cheat-message";
  setTimeout(() => codeInput.focus(), 250);
}
function closeConsole() {
  consoleEl.classList.remove("open");
}

document.getElementById("george-entrance").addEventListener("click", openConsole);
document.getElementById("cheat-close").addEventListener("click", closeConsole);

codeInput.addEventListener("input", () => {
  if (codeInput.value.trim().toLowerCase() === RELOAD_CODE) window.location.reload();
});

document.getElementById("submitCode").addEventListener("click", async () => {
  const raw = codeInput.value.trim();
  const key = raw.toLowerCase();

  if (SECRET_CODES[key]) {
    window.location.href = SECRET_CODES[key];
    return;
  }

  try {
    const res = await fetch("codes.txt");
    if (!res.ok) throw new Error("network");
    const text = await res.text();
    const match = text.split("\n")
      .map(line => line.split(":"))
      .find(parts => parts[0] && parts[0].trim() === raw);

    if (match) {
      codeMessage.textContent = match.slice(1).join(":").trim();
      codeMessage.className = "cheat-message";
    } else {
      codeMessage.textContent = "That code doesn't do anything... yet?";
      codeMessage.className = "cheat-message error";
    }
  } catch {
    codeMessage.textContent = "That code doesn't do anything... yet?";
    codeMessage.className = "cheat-message error";
  }
});
codeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("submitCode").click();
});

/* ---- Rating gag -------------------------------------------------------------
   The joke: it stalls forever and never actually shows a rating. Kept intact. */
document.getElementById("submitRating").addEventListener("click", () => {
  document.getElementById("ratingResult").textContent =
    "Thank you for rating.. You gave us.. Uh.. Hold On.. I need to find the ratings.. " +
    "Give me a second.. almost got them wait no that's not it.. Hold on.. I think this is " +
    "wait no.. Maybe is it this one? Nope nope, not ratings.. Give me time to think about this.";
});

/* ---- Init --------------------------------------------------------------------- */
(function init() {
  renderGrid();
  renderShelf();
  applySearch();
  buildThemeSwatches();

  const saved = localStorage.getItem("selectedTheme");
  if (saved) {
    applyTheme(saved);
    const btn = document.querySelector(`.swatch[data-theme="${saved}"]`);
    if (btn) btn.setAttribute("aria-pressed", "true");
  }
})();
