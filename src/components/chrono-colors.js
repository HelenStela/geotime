const chronoColors = {
    "Cenozoic": ["#F3EA55", "#404040"],
    "Quaternary": ["#fff79f", "#404040"],
    "Holocene": ["#fcf3e6", "#404040"],
    "Pleistocene": ["#fff0c1", "#404040"],
    "Upper Pleistocene": ["#fff2dc", "#404040"],
    "Middle Pleistocene": ["#fff2d2", "#404040"],
    "Calabrian": ["#ffeec8", "#404040"],
    "Gelasian": ["#fdeeb8", "#404040"],
    "Neogene": ["#fddd43", "#404040"],
    "Pliocene": ["#fff7b2", "#404040"],
    "Piacenzian": ["#fffacd", "#404040"],
    "Zanclean": ["#fffac5", "#404040"],
    "Miocene": ["#fef035", "#404040"],
    "Messinian": ["#fff88f", "#404040"],
    "Tortonian": ["#fff58a", "#404040"],
    "Serravallian": ["#fff480", "#404040"],
    "Langhian": ["#fdf37c", "#404040"],
    "Burdigalian": ["#fef26a", "#404040"],
    "Aquitanian": ["#fef25c", "#404040"],
    "Paleogene": ["#f7aa74", "#404040"],
    "Oligocene": ["#fbc595", "#404040"],
    "Chattian": ["#fee4bc", "#404040"],
    "Rupelian": ["#fedaae", "#404040"],
    "Eocene": ["#fbbd8a", "#404040"],
    "Priabonian": ["#fcd0b3", "#404040"],
    "Bartonian": ["#fac7a5", "#404040"],
    "Lutetian": ["#fabf9a", "#404040"],
    "Ypresian": ["#f8b38f", "#404040"],
    "Paleocene": ["#f8b480", "#404040"],
    "Thanetian": ["#fac7a5", "#404040"],
    "Selandian": ["#fabf9a", "#404040"],
    "Danian": ["#fabf9a", "#404040"],
    "Mesozoic": ["#4dc7e9", "#404040"],
    "Cretaceous": ["#8ac772", "#404040"],
    "Upper Cretaceous": ["#b1d373", "#404040"],
    "Maastrichtian": ["#f4f2a8", "#404040"],
    "Campanian": ["#e9ed9e", "#404040"],
    "Santonian": ["#dee595", "#404040"],
    "Coniacian": ["#d2e388", "#404040"],
    "Turonian": ["#c7dd83", "#404040"],
    "Cenomanian": ["#bcd87c", "#404040"],
    "Lower Cretaceous": ["#96cb7e", "#404040"],
    "Albian": ["#cfe5b1", "#404040"],
    "Aptian": ["#c4dea6", "#404040"],
    "Barremian": ["#b9db9f", "#404040"],
    "Hauterivian": ["#abd596", "#404040"],
    "Valanginian": ["#a0cf8e", "#404040"],
    "Berriasian": ["#95cc86", "#404040"],
    "Jurassic": ["#1fbae7", "#ffffff"],
    "Upper Jurassic": ["#ade1fa", "#404040"],
    "Tithonian": ["#d5f0fc", "#404040"],
    "Kimmeridgian": ["#c8eafb", "#404040"],
    "Oxfordian": ["#bae5f9", "#404040"],
    "Middle Jurassic": ["#74cfe9", "#404040"],
    "Callovian": ["#bbe4f0", "#404040"],
    "Bathonian": ["#b0e0ef", "#404040"],
    "Bajocian": ["#a1dbec", "#404040"],
    "Aalenian": ["#93d7ed", "#404040"],
    "Lower Jurassic": ["#1eb6e9", "#ffffff"],
    "Toarcian": ["#92cfef", "#ffffff"],
    "Pliensbachian": ["#75c8ed", "#ffffff"],
    "Sinemurian": ["#50c1eb", "#ffffff"],
    "Hettangian": ["#28b9eb", "#ffffff"],
    "Triassic": ["#8f559e", "#ffffff"],
    "Upper Triassic": ["#ba9fc8", "#ffffff"],
    "Rhaetian": ["#dfc4dc", "#404040"],
    "Norian": ["#d3b7d5", "#404040"],
    "Carnian": ["#c5abd1", "#404040"],
    "Middle Triassic": ["#b283b8", "#ffffff"],
    "Ladinian": ["#c698c4", "#ffffff"],
    "Anisian": ["#bc8dbf", "#ffffff"],
    "Lower Triassic": ["#9f60a4", "#ffffff"],
    "Olenekian": ["#b473ae", "#ffffff"],
    "Induan": ["#a96baa", "#ffffff"],
    "Paleozoic": ["#9ec2a7", "#ffffff"],
    "Permian": ["#e5664e", "#ffffff"],
    "Lopingian": ["#f7b5a5", "#404040"],
    "Changhsingian": ["#fac9bd", "#404040"],
    "Wuchiapingian": ["#f8bfb0", "#404040"],
    "Guadalupian": ["#f28d79", "#ffffff"],
    "Capitanian": ["#f6ab9b", "#ffffff"],
    "Wordian": ["#f59f8d", "#ffffff"],
    "Roadian": ["#f49783", "#ffffff"],
    "Cisuralian": ["#e77966", "#ffffff"],
    "Kungurian": ["#de9b8e", "#ffffff"],
    "Artinskian": ["#e09283", "#ffffff"],
    "Sakmarian": ["#de8879", "#ffffff"],
    "Asselian": ["#de806f", "#ffffff"],
    "Carboniferous": ["#6aaeb0", "#ffffff"],
    "Pennsylvanian": ["#9ac3c5", "#404040"],
    "Upper Pennsylvanian": ["#bed0ca", "#404040"],
    "Gzhelian": ["#ccd4d1", "#404040"],
    "Kasimovian": ["#bed0d2", "#404040"],
    "Middle Pennsylvanian": ["#a7c9c8", "#404040"],
    "Moscovian": ["#ccd4d1", "#404040"],
    "Lower Pennsylvanian": ["#a7c9c8", "#404040"],
    "Bashkirian": ["#ccd4d1", "#404040"],
    "Mississippian": ["#729e87", "#ffffff"],
    "Upper Mississippian": ["#bed0ca", "#404040"],
    "Serpukhovian": ["#ccd4d1", "#404040"],
    "Middle Mississippian": ["#a7c9c8", "#404040"],
    "Visean": ["#ccd4d1", "#404040"],
    "Lower Mississippian": ["#a7c9c8", "#404040"],
    "Tournaisian": ["#ccd4d1", "#404040"],
    "Devonian": ["#ce9c60", "#ffffff"],
    "Upper Devonian": ["#f1e0b3", "#404040"],
    "Famennian": ["#f2ecd1", "#404040"],
    "Frasnian": ["#f1eac0", "#404040"],
    "Middle Devonian": ["#f1ca8a", "#404040"],
    "Givetian": ["#f2dea2", "#404040"],
    "Eifelian": ["#f1d395", "#404040"],
    "Lower Devonian": ["#e4b372", "#404040"],
    "Emsian": ["#e6d095", "#404040"],
    "Pragian": ["#e6c588", "#404040"],
    "Lochkovian": ["#e5bb7e", "#404040"],
    "Silurian": ["#b5dcca", "#404040"],
    "Pridoli": ["#e5f2e8", "#404040"],
    "Ludlow": ["#bee4dc", "#404040"],
    "Ludfordian": ["#d7ede8", "#404040"],
    "Gorstian": ["#c9e9e6", "#404040"],
    "Wenlock": ["#b2dfd2", "#404040"],
    "Homerian": ["#d7ede8", "#404040"],
    "Sheinwoodian": ["#c9e9e6", "#404040"],
    "Llandovery": ["#99d4c8", "#404040"],
    "Telychian": ["#bee4dc", "#404040"],
    "Aeronian": ["#b2dfd2", "#404040"],
    "Rhuddanian": ["#a7d8ca", "#404040"],
    "Ordovician": ["#19a78d", "#ffffff"],
    "Upper Ordovician": ["#81caae", "#404040"],
    "Hirnantian": ["#a7d9c0", "#404040"],
    "Katian": ["#99d3c0", "#404040"],
    "Sandbian": ["#8fceae", "#404040"],
    "Middle Ordovician": ["#34ba9e", "#ffffff"],
    "Darriwilian": ["#99d3c0", "#ffffff"],
    "Dapingian": ["#8fceae", "#ffffff"],
    "Lower Ordovician": ["#1aac8e", "#ffffff"],
    "Floian": ["#1fb7a5", "#ffffff"],
    "Tremadocian": ["#1eb49d", "#ffffff"],
    "Cambrian": ["#8daa79", "#ffffff"],
    "Furongian": ["#b7dbb0", "#404040"],
    "Stage 10": ["#e6efd5", "#404040"],
    "Jiangshanian": ["#d9ebcb", "#404040"],
    "Paibian": ["#cee5c0", "#404040"],
    "Series 3": ["#accda3", "#404040"],
    "Guzhangian": ["#cdddbe", "#404040"],
    "Drumian": ["#c2d6b5", "#404040"],
    "Stage 5": ["#b8d2ac", "#404040"],
    "Series 2": ["#a0c197", "#404040"],
    "Stage 4": ["#b7caa7", "#404040"],
    "Stage 3": ["#adc59e", "#404040"],
    "Terreneuvian": ["#96b48c", "#404040"],
    "Stage 2": ["#adbd9b", "#404040"],
    "Fortunian": ["#a2b995", "#404040"],
    "Precambrian": ["#ef6883", "#ffffff"],
    "Proterozoic": ["#ee5b7a", "#ffffff"],
    "Neoproterozoic": ["#fbba6a", "#ffffff"],
    "Ediacaran": ["#fed68c", "#404040"],
    "Cryogenian": ["#fccd81", "#404040"],
    "Tonian": ["#fdc476", "#404040"],
    "Mesoproterozoic": ["#fbbb83", "#404040"],
    "Stenian": ["#fedaae", "#404040"],
    "Ectasian": ["#fbcfa0", "#404040"],
    "Calymmian": ["#fbc595", "#404040"],
    "Paleoproterozoic": ["#ef6883", "#ffffff"],
    "Statherian": ["#f290ac", "#ffffff"],
    "Orosirian": ["#f187a1", "#ffffff"],
    "Rhyacian": ["#f17c97", "#ffffff"],
    "Siderian": ["#ef728d", "#ffffff"],
    "Archean": ["#ea168c", "#ffffff"],
    "Neoarchean": ["#f5aec6", "#ffffff"],
    "Mesoarchean": ["#f086af", "#ffffff"],
    "Paleoarchean": ["#ee6aa6", "#ffffff"],
    "Eoarchean": ["#d71b8d", "#ffffff"],
    "Hadean": ["#b3248b", "#ffffff"],
    "Phanerozoic": ["#9AD9DDFF", "#ffffff"]
}

export default chronoColors;