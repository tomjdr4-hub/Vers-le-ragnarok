// Données des trois ætts et des 24 runes du Futhark Ancien

export const AETTS = {
  freyja: {
    key: "freyja",
    name: "Ætt de Freyja",
    symbol: "ᚠ",
    runes: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  heimdallr: {
    key: "heimdallr",
    name: "Ætt de Heimdallr",
    symbol: "ᚺ",
    runes: [9, 10, 11, 12, 13, 14, 15, 16]
  },
  tyr: {
    key: "tyr",
    name: "Ætt de Týr",
    symbol: "ᛏ",
    runes: [17, 18, 19, 20, 21, 22, 23, 24]
  }
};

export const RUNES = [
  {
    number: 1,
    name: "Fehu",
    symbol: "ᚠ",
    aett: "freyja",
    hasInverse: true,
    upright: {
      keywords: "Fortune, succès et bien-être mérités",
      divinity: "Auðhumla, Freyr et Freyja",
      flavor: "Le don de la vie",
      aettEffect: "Vous sentez un brusque regain d'optimisme, tout semble se dérouler de la bonne manière.",
      runeEffect: "Vous gagnez un bonus de +1 aux tests de caractéristique et un 20 naturel est toujours considéré comme un succès."
    },
    inverted: {
      keywords: "Mal, jalousie, envie",
      divinity: "Ymir",
      flavor: "L'instinct de survie",
      aettEffect: "Tout semble se dérouler de la bonne manière pour tout le monde, sauf pour vous. Vous êtes jaloux de leurs réussites et anticipez vos propres échecs.",
      runeEffect: "Vous subissez un malus de −1 aux tests de caractéristique et un 1 naturel est toujours considéré comme un échec."
    }
  },
  {
    number: 2,
    name: "Ūruz",
    symbol: "ᚢ",
    aett: "freyja",
    hasInverse: true,
    upright: {
      keywords: "Force, courage, initiative",
      divinity: "Ymir",
      flavor: "L'instinct de survie",
      aettEffect: "Rien dans les Neuf mondes ne peut vous arrêter, vous vivrez pour voir un nouveau jour se lever.",
      runeEffect: "Vous appliquez votre bonus de maîtrise à vos jets d'initiative."
    },
    inverted: {
      keywords: "Férocité, agression, addiction",
      divinity: "Ymir",
      flavor: "L'instinct de survie",
      aettEffect: "La force n'est qu'apparente lorsqu'on la compare à la faiblesse, vous pressentez l'oppression et les abus de pouvoir.",
      runeEffect: "Vous êtes avantagé lors des tests de Charisme (Intimidation) et des jets d'attaque contre des créatures dont la valeur de Force est inférieure à la vôtre. Vous êtes également désavantagé contre les créatures dont la valeur de Force est supérieure à la vôtre."
    }
  },
  {
    number: 3,
    name: "Thurisaz",
    symbol: "ᚦ",
    aett: "freyja",
    hasInverse: true,
    upright: {
      keywords: "Résistance, protection, bonnes décisions",
      divinity: "Thor",
      flavor: "La rencontre",
      aettEffect: "Quand éclate le plus violent des orages, il faut s'abriter derrière des murs solides et concevoir de meilleures stratégies.",
      runeEffect: "Chaque fois que vous subissez des dégâts d'une source unique, vous les réduisez de 1. Si le total des dégâts est réduit à 0 ou moins, vous n'en subissez aucun."
    },
    inverted: {
      keywords: "Fragilité, confusion, évènement imprévu",
      divinity: "Thor",
      flavor: "La rencontre",
      aettEffect: "Vous vous sentez abattu, incertain, sans défense, à la merci des évènements, toutes vos certitudes s'effondrent comme un mur sans fondations.",
      runeEffect: "Chaque fois que vous subissez des dégâts d'une source unique, vous les augmentez de 1."
    }
  },
  {
    number: 4,
    name: "Ansuz",
    symbol: "ᚨ",
    aett: "freyja",
    hasInverse: true,
    upright: {
      keywords: "Guérison, sagesse, inspiration",
      divinity: "Odhinn",
      flavor: "L'appel",
      aettEffect: "Vous pressentez que de nouvelles idées surgiront au cours de la journée, que des solutions seront trouvées et que chaque nœud sera dénoué.",
      runeEffect: "Vous gagnez immédiatement de l'inspiration."
    },
    inverted: {
      keywords: "Tromperie, trahison, égoïsme",
      divinity: "Odhinn",
      flavor: "L'appel",
      aettEffect: "Vous ne pouvez faire confiance à personne, la trahison et la tromperie vous attendent à chaque tournant.",
      runeEffect: "Vous ne pouvez pas bénéficier de l'action aider ni être avantagé grâce à d'autres créatures."
    }
  },
  {
    number: 5,
    name: "Raido",
    symbol: "ᚱ",
    aett: "freyja",
    hasInverse: true,
    upright: {
      keywords: "Voyage, recherche, nouveaux défis",
      divinity: "les Valkyrjur",
      flavor: "Le voyage du héros",
      aettEffect: "Aujourd'hui, le monde s'étend devant vous, prêt à être exploré, allez simplement où vos pas vous mènent.",
      runeEffect: "Vous ignorez les terrains difficiles."
    },
    inverted: {
      keywords: "Ralentissement, renonciation, échec",
      divinity: "les Valkyrjur",
      flavor: "Le voyage du héros",
      aettEffect: "Vous pressentez que la route sera ardue, pleine d'obstacles, de dangers et d'incertitudes. Cela en vaut-il vraiment la peine ? Vous songez à abandonner devant le premier véritable problème.",
      runeEffect: "Vous ne pouvez pas faire l'action se précipiter ni bénéficier de bonus à votre vitesse de déplacement de base."
    }
  },
  {
    number: 6,
    name: "Kenaz",
    symbol: "ᚲ",
    aett: "freyja",
    hasInverse: true,
    upright: {
      keywords: "Renaissance, compréhension, révélation",
      divinity: "Surtr",
      flavor: "Le feu de la transformation",
      aettEffect: "Tout se passera bien aujourd'hui, tous les problèmes deviendront une opportunité et toutes les épreuves, une chance de s'améliorer.",
      runeEffect: "Chaque fois que vous ratez un jet de sauvegarde, un jet d'attaque ou un test de caractéristique, vous serez avantagé lors du prochain jet du même type."
    },
    inverted: {
      keywords: "Ignorance, superficialité, arrogance",
      divinity: "Surtr",
      flavor: "Le feu de la transformation",
      aettEffect: "Aujourd'hui, vous vous sentez bien trop sûr de vous. À cause de cela, vous serez confronté à de nombreux problèmes normalement évitables.",
      runeEffect: "Chaque fois que vous réussissez un jet de sauvegarde, un jet d'attaque ou un test de caractéristique, vous serez désavantagé lors du prochain jet du même type."
    }
  },
  {
    number: 7,
    name: "Gebo",
    symbol: "ᚷ",
    aett: "freyja",
    hasInverse: false,
    upright: {
      keywords: "Amitié, fraternité, partage, échange, gratitude",
      divinity: "Freyr",
      flavor: "L'échange équitable",
      aettEffect: "Ce présage vous rappelle que la nature est une seule et même entité, comme une toile de relations et de liens englobant aussi les humains.",
      runeEffect: "Vous êtes avantagé lors des tests de Charisme, mais quand un allié près de vous subit des dégâts, vous subissez vous-même un quart de ces dégâts (qui ne peuvent être réduits d'aucune manière)."
    },
    inverted: null
  },
  {
    number: 8,
    name: "Wunjo",
    symbol: "ᚹ",
    aett: "freyja",
    hasInverse: true,
    upright: {
      keywords: "Gloire, espoir, harmonie",
      divinity: "Freyr et Freyja",
      flavor: "L'émanation divine",
      aettEffect: "Le soleil est plus radieux aujourd'hui. Il remplit de joie le cœur des hommes, qui se motivent les uns les autres pour en faire davantage.",
      runeEffect: "Quand vous faites un jet de sauvegarde, vous pouvez utiliser le bonus d'un allié adjacent s'il est supérieur au vôtre."
    },
    inverted: {
      keywords: "Dépression, solitude, pessimisme",
      divinity: "Freyr et Freyja",
      flavor: "L'émanation divine",
      aettEffect: "Des nuages gris assombrissent le ciel. Ils cachent le soleil et font naître l'effroi dans le cœur des hommes. Les gens se sentent seuls et tristes.",
      runeEffect: "Quand vous faites un jet de sauvegarde, vous devez utiliser le bonus d'un allié adjacent s'il est inférieur au vôtre."
    }
  },
  {
    number: 9,
    name: "Hagalaz",
    symbol: "ᚺ",
    aett: "heimdallr",
    hasInverse: false,
    upright: {
      keywords: "Purification, épreuve, libération, reconstruction",
      divinity: "Urðr",
      flavor: "S'écarter du plan",
      aettEffect: "Vous pressentez que le chemin devant vous mène à la fin de tout ce que vous êtes, pour le meilleur ou pour le pire. La mort n'est pourtant pas la fin, mais une simple étape avant la renaissance.",
      runeEffect: "Vous êtes désavantagé lors du premier jet de sauvegarde contre la mort que vous faites chaque fois que vos points de vie sont réduits à 0. Cependant, chaque fois que vous réussissez un jet de sauvegarde contre la mort, vous pouvez lancer l'un de vos dés de vie et récupérez un nombre de points de vie égal au résultat obtenu plus votre modificateur de Sagesse. Une fois ce pouvoir utilisé, vous devez terminer un repos court avant de pouvoir le réutiliser."
    },
    inverted: null
  },
  {
    number: 10,
    name: "Nauthiz",
    symbol: "ᚾ",
    aett: "heimdallr",
    hasInverse: false,
    upright: {
      keywords: "Résistance, vertu, détermination, force intérieure",
      divinity: "Heimdallr",
      flavor: "Affronter la douleur",
      aettEffect: "Vous pressentez une grande adversité sur votre route, mais au plus profond de votre âme, vous êtes prêt à affronter tous les défis que le destin vous réserve.",
      runeEffect: "Chaque fois qu'un allié dans votre champ de vision et à 9 m ou moins de vous voit ses points de vie réduits à 0, vous gagnez un nombre de points de vie temporaires égal à la moitié de votre niveau de personnage et vous êtes avantagé lors du prochain jet de sauvegarde que vous faites avant la fin de votre prochain tour. Une fois ce pouvoir utilisé, vous devez terminer un repos court avant de pouvoir le réutiliser."
    },
    inverted: null
  },
  {
    number: 11,
    name: "Isaz",
    symbol: "ᛁ",
    aett: "heimdallr",
    hasInverse: false,
    upright: {
      keywords: "Moment de réflexion, concentration sur les objectifs, séparation, limitation",
      divinity: "Búri",
      flavor: "L'esprit sans entraves",
      aettEffect: "Vous réalisez brusquement que nous sommes seuls au monde. Vous devez prendre un moment pour bien réfléchir au sens de votre vie.",
      runeEffect: "Quand vous tombez à 0 point de vie, vous pouvez faire un jet de sauvegarde de Sagesse au lieu du jet de sauvegarde contre la mort habituel, avec un DD normal (10 le plus souvent)."
    },
    inverted: null
  },
  {
    number: 12,
    name: "Jera",
    symbol: "ᛃ",
    aett: "heimdallr",
    hasInverse: false,
    upright: {
      keywords: "Nature cyclique du temps, patience, contrôle, récolte, processus",
      divinity: "Sif",
      flavor: "La voie du cosmos",
      aettEffect: "Vous vous représentez la nature cyclique du monde et comprenez que chaque fleur qui dépérit permet la naissance d'une vie nouvelle.",
      runeEffect: "Quand vous tombez à 0 point de vie, vous êtes désavantagé lors de votre premier jet de sauvegarde contre la mort, mais chaque allié à 9 m ou moins de vous récupère immédiatement 1d6 points de vie (2d6 au niveau 6, 3d6 au niveau 10, 4d6 au niveau 17 et 5d6 au niveau 20). Une fois ce pouvoir utilisé, vous devez terminer un repos court avant de pouvoir le réutiliser."
    },
    inverted: null
  },
  {
    number: 13,
    name: "Eihwaz",
    symbol: "ᛇ",
    aett: "heimdallr",
    hasInverse: false,
    upright: {
      keywords: "Capacité défensive, fiabilité, intelligence, capacité préventive",
      divinity: "Hel et Ullr",
      flavor: "Le voyage spirituel",
      aettEffect: "Le temps et l'espace sont peu de chose pour ceux capables de voyager avec leur esprit plutôt qu'avec leur corps.",
      runeEffect: "Quand vous subissez des dégâts, vous pouvez décider de les ignorer un bref instant. Vous pouvez utiliser votre réaction pour retarder ces dégâts afin de ne les subir qu'à la fin de votre prochain tour. À la fin de votre prochain tour, vous subirez ces dégâts et réduirez de moitié votre vitesse de déplacement pendant un round. Une fois ce pouvoir utilisé, vous devez terminer un repos court avant de pouvoir le réutiliser."
    },
    inverted: null
  },
  {
    number: 14,
    name: "Perth",
    symbol: "ᛈ",
    aett: "heimdallr",
    hasInverse: true,
    upright: {
      keywords: "Joie, destinée, chance",
      divinity: "Vé",
      flavor: "Le jeu du destin",
      aettEffect: "Une profonde méditation vous a permis de véritablement comprendre le sens de la vie et les plus intimes secrets du monde. Cet éveil vous procure un véritable et profond sentiment de joie.",
      runeEffect: "Quand vous obtenez un 1 naturel sur l'un de vos jets d'attaque, jets de sauvegarde ou tests de caractéristique, vous pouvez le changer et considérer que vous avez obtenu un 10."
    },
    inverted: {
      keywords: "Tristesse, illusion, découragement",
      divinity: "Vé",
      flavor: "Le jeu du destin",
      aettEffect: "Votre méditation n'a pas donné les résultats attendus. Peut-être avez-vous mal interprété les signes, ou votre esprit n'était pas prêt. Vous vous sentez à présent abattu et triste.",
      runeEffect: "Quand vous obtenez un 20 naturel sur l'un de vos jets d'attaque, jets de sauvegarde ou tests de caractéristique, vous devez le changer et considérer que vous avez obtenu un 10. Si vous avez changé un jet d'attaque, l'attaque n'est pas une réussite garantie, mais vous infligez toujours des dégâts critiques."
    }
  },
  {
    number: 15,
    name: "Algiz",
    symbol: "ᛉ",
    aett: "heimdallr",
    hasInverse: true,
    upright: {
      keywords: "Connexion divine, éveil, succès",
      divinity: "Baldr",
      flavor: "L'espace sacré",
      aettEffect: "Votre esprit et votre âme s'ouvrent pour atteindre un état de conscience supérieur et entrent en contact avec les entités qui contrôlent le sort de l'humanité. Elles sont contentes de vous et récompensent votre foi.",
      runeEffect: "Quand vous subissez un coup critique, vous bénéficiez d'une résistance contre cette attaque en particulier. Une fois ce pouvoir utilisé, vous devez terminer un repos court avant de pouvoir le réutiliser."
    },
    inverted: {
      keywords: "Perte de faveur, vulnérabilité, danger",
      divinity: "Baldr",
      flavor: "L'espace sacré",
      aettEffect: "Vous tentez de toutes vos forces d'élever votre esprit vers les plans supérieurs des dieux. Malheureusement, ceux-ci n'apprécient pas votre intrusion et vous savez qu'ils vous châtieront pour cette transgression.",
      runeEffect: "Quand une créature vous attaque et qu'elle est avantagée, cette attaque vous inflige 1d6 dégâts supplémentaires."
    }
  },
  {
    number: 16,
    name: "Sowilo",
    symbol: "ᛊ",
    aett: "heimdallr",
    hasInverse: false,
    upright: {
      keywords: "Pouvoir, précipitation, énergie, colère, feu purificateur",
      divinity: "Sól",
      flavor: "Le pouvoir",
      aettEffect: "Votre périple était ardu, avec plein de croisements, mais vous devez à présent faire le choix ultime, celui qui fera pencher votre âme vers le bien ou le mal. Vous tremblez, mais vous savez quel sera le bon choix.",
      runeEffect: "Quand vous subissez des dégâts infligés par une créature, vous pouvez utiliser votre réaction pour lancer un certain nombre de vos dés de vie. Vous réduisez les dégâts d'un montant égal au résultat obtenu plus votre modificateur de Sagesse et infligez à l'agresseur ce même montant en dégâts radiants ou nécrotiques. Vous pouvez utiliser jusqu'à la moitié de vos dés de vie restants de cette façon (1 au minimum). Une fois ce pouvoir utilisé, vous devez terminer un repos court avant de pouvoir le réutiliser."
    },
    inverted: null
  },
  {
    number: 17,
    name: "Teiwaz",
    symbol: "ᛏ",
    aett: "tyr",
    hasInverse: true,
    upright: {
      keywords: "Bonne direction, victoire, vertu",
      divinity: "Týr",
      flavor: "L'ordre universel",
      aettEffect: "Aujourd'hui, vous savez que vous allez avancer comme un père qui protège ses enfants, comme un guerrier qui défend sa patrie, comme un homme vertueux qui affronte le mal.",
      runeEffect: "Quand vous obtenez un coup critique, vous pouvez utiliser votre réaction pour faire une unique attaque d'arme ou pour lancer un tour de magie nécessitant un jet d'attaque."
    },
    inverted: {
      keywords: "Sanction, malhonnêteté, défaite",
      divinity: "Týr",
      flavor: "L'ordre universel",
      aettEffect: "La bravoure peut très vite devenir de l'arrogance, la volonté de protéger ce que vous aimez de la suffisance, et la force des atermoiements.",
      runeEffect: "Quand vous subissez un coup critique, vous devez réussir un jet de sauvegarde de Charisme (DD égal à la moitié des dégâts que vous venez de subir) ou vous êtes neutralisé jusqu'à la fin de votre prochain tour."
    }
  },
  {
    number: 18,
    name: "Berkana",
    symbol: "ᛒ",
    aett: "tyr",
    hasInverse: true,
    upright: {
      keywords: "Fertilité, désir, amour",
      divinity: "Frigg",
      flavor: "Le lien des mondes",
      aettEffect: "Aujourd'hui, partout où vous regardez, vous voyez se répandre une nouvelle vie pleine de fertilité, subtile, mais irrépressible, comme un nouvel éveil des sens.",
      runeEffect: "Vous pouvez utiliser votre action pour soigner chaque créature dans un rayon de 3 m autour de vous (vous y compris) d'un nombre de points de vie égal à 1d6 + votre modificateur de Charisme, jusqu'à un maximum égal à la moitié de votre maximum de points de vie. Une fois ce pouvoir utilisé, vous devez terminer un repos court avant de pouvoir le réutiliser."
    },
    inverted: {
      keywords: "Immaturité, anxiété, abandon",
      divinity: "Frigg",
      flavor: "Le lien des mondes",
      aettEffect: "Vous constatez à quel point vous êtes incompétent et vous vous sentez comme un fruit vert face à la vie forte et florissante qui vous entoure.",
      runeEffect: "Vous pouvez utiliser votre action bonus pour dépenser un dé de vie comme si vous veniez de terminer un repos court. Cependant, vous devez réduire de moitié le résultat de tous les dés de vie que vous lancez."
    }
  },
  {
    number: 19,
    name: "Ehwaz",
    symbol: "ᛖ",
    aett: "tyr",
    hasInverse: true,
    upright: {
      keywords: "Amélioration, coopération, union",
      divinity: "Sleipnir",
      flavor: "L'harmonie des opposés",
      aettEffect: "Vous voyez les liens et relations invisibles entre chaque chose, chaque créature, ainsi que les forces de la nature elles-mêmes. Le monde est plus grand que la somme de ses parties... tout comme vous.",
      runeEffect: "Lors d'un repos court, vous et jusqu'à six de vos alliés peuvent se prendre la main et méditer ensemble pendant une heure. Pour chaque dé de vie dépensé à la fin du repos court, l'un de vos alliés récupère un nombre supplémentaire de points de vie égal à votre modificateur de Sagesse (1 au minimum). En même temps, vous récupérez un nombre supplémentaire de points de vie égal au nombre de participants formant le cercle de méditation."
    },
    inverted: {
      keywords: "Précipitation, inhibition, désaccord",
      divinity: "Sleipnir",
      flavor: "L'harmonie des opposés",
      aettEffect: "Même si vous tentez autant que possible de voir les choses différemment, vous devez accepter le fait que toute chose dans la nature s'oppose à une multitude d'autres choses. La nature est en perpétuel conflit. L'harmonie est une illusion.",
      runeEffect: "Chaque fois que vous déterminez l'initiative, vous pouvez dépenser un certain nombre de dés de vie. Pour chaque dé de vie dépensé, vous gagnez un bonus au jet d'initiative égal à votre modificateur de Sagesse (1 au minimum)."
    }
  },
  {
    number: 20,
    name: "Mannaz",
    symbol: "ᛗ",
    aett: "tyr",
    hasInverse: true,
    upright: {
      keywords: "Ouverture d'esprit, conscience, fraternité",
      divinity: "Heimdallr",
      flavor: "L'homme cosmique",
      aettEffect: "Dans un moment de totale lucidité, vous comprenez votre place dans le monde et savez à quel point celui-ci est en adéquation avec vous-même. Vous êtes le centre, mais vous êtes aussi tout ce qui gravite autour.",
      runeEffect: "Quand vous faites un jet de sauvegarde contre un effet invisible, vous pouvez utiliser votre réaction pour être avantagé lors du jet. Une fois ce pouvoir utilisé, vous devez terminer un repos court avant de pouvoir le réutiliser."
    },
    inverted: {
      keywords: "Préjudice, rigidité, fanatisme",
      divinity: "Heimdallr",
      flavor: "L'homme cosmique",
      aettEffect: "Qui êtes-vous ? Quel est le sens de VOTRE vie ? Vous ne pouvez qu'observer ceux qui découvrent, ravis, la place glorieuse qu'ils occupent dans le grand ordre des choses, et vous avez l'impression d'être un mauvais vers dans le grand poème du cosmos.",
      runeEffect: "Chaque fois que vous infligez des dégâts, vous infligez 1 dégât supplémentaire du même type si le nombre de points de vie actuels de la cible est supérieur au vôtre (2 dégâts supplémentaires au niveau 11 et 3 au niveau 20). Vous ne pouvez pas terminer votre tour volontairement à 6 m ou moins d'une créature dont les points de vie actuels sont supérieurs aux vôtres."
    }
  },
  {
    number: 21,
    name: "Laguz",
    symbol: "ᛚ",
    aett: "tyr",
    hasInverse: true,
    upright: {
      keywords: "Intuition, rêve, fantasme",
      divinity: "Mimir",
      flavor: "Le puits du savoir",
      aettEffect: "Vous voyez la réalité sous-jacente du monde matériel. Tout est signe ou symbole, rien n'est ce qu'il paraît, et vous pouvez aujourd'hui entrapercevoir cette vérité cachée.",
      runeEffect: "Vous pouvez lancer le sort augure en tant que rituel sans composant matériel. À partir du niveau 11, vous pouvez lancer à la place le sort divination en tant que rituel sans composant matériel."
    },
    inverted: {
      keywords: "Manque de créativité, confusion, peur",
      divinity: "Mimir",
      flavor: "Le puits du savoir",
      aettEffect: "Vous avez tenté de projeter votre conscience au-delà du monde matériel pour comprendre sa véritable essence, mais vous n'avez rien appris. Tout semble morne, superficiel, sans aucune signification cachée. Ceci vous effraie et vous décourage.",
      runeEffect: "Au début de chaque combat, vous êtes considéré comme terrorisé par toutes les créatures hostiles que vous percevez. Cet état dure jusqu'au début de votre deuxième tour de combat."
    }
  },
  {
    number: 22,
    name: "Ingwaz",
    symbol: "ᛜ",
    aett: "tyr",
    hasInverse: false,
    upright: {
      keywords: "Sexualité, fertilité, agriculture, chaleur humaine, abondance",
      divinity: "Freyr",
      flavor: "L'avenir de la lignée",
      aettEffect: "Vous sentez une puissante force vitale vous traverser, une vive énergie primordiale, telle une chaleur qui accélère votre rythme cardiaque comme si vous étiez une source d'espoir prête à donner la vie.",
      runeEffect: "Par une action bonus, vous pouvez dépenser et lancer l'un de vos dés de vie pour soigner un nombre de points de vie égal au résultat obtenu plus votre modificateur de Charisme (1 au minimum) que vous divisez parmi n'importe quel nombre de créatures à 3 m ou moins de vous. Vous gagnez un nombre de points de vie temporaires égal à la moitié du montant soigné."
    },
    inverted: null
  },
  {
    number: 23,
    name: "Othila",
    symbol: "ᛟ",
    aett: "tyr",
    hasInverse: true,
    upright: {
      keywords: "Propriété, famille, héritage",
      divinity: "Njörðr",
      flavor: "L'honneur des ancêtres",
      aettEffect: "Vous voyez clairement, mais brièvement le présent, l'avenir et tout ce qu'il y a entre les deux. Vous voyez ce qu'il adviendra de ce que vous êtes en train de bâtir actuellement, ce que vos efforts produiront et votre contribution au monde.",
      runeEffect: "Quand vous faites un jet d'attaque ou un test de caractéristique avec un avantage, vous pouvez relancer le dé ayant obtenu le moins bon résultat. Vous devez garder le nouveau résultat, même s'il est moins bon. Une fois ce pouvoir utilisé, vous devez terminer un repos court avant de pouvoir le réutiliser. Vous ne pouvez utiliser ce pouvoir qu'une seule fois par tour."
    },
    inverted: {
      keywords: "Esclavage, racisme, avidité",
      divinity: "Njörðr",
      flavor: "L'honneur des ancêtres",
      aettEffect: "Une vision de l'avenir trompeuse et pervertie vous remplit de doutes et de suspicions. Vous ne savez pas à qui vous pouvez accorder votre confiance, vous voyez vos soi-disant amis tenter de vous maltraiter et de vous dominer.",
      runeEffect: "Quand vous faites un jet d'attaque ou un test de caractéristique avec un avantage, vous ajoutez votre modificateur de Charisme au résultat final (1 au minimum), mais vous soustrayez votre modificateur de Charisme si vous êtes désavantagé lors du jet ou du test (1 au minimum)."
    }
  },
  {
    number: 24,
    name: "Dagaz",
    symbol: "ᛞ",
    aett: "tyr",
    hasInverse: false,
    upright: {
      keywords: "Nouveau départ, espoir, croissance, sécurité, illumination",
      divinity: "Dagr",
      flavor: "La nouvelle ère",
      aettEffect: "Votre voyage à travers les mondes et la réalité vous mène au sommet du monde, là où tout paraît simple, petit, et parfaitement agencé dans le grand ordre des choses. Vous êtes prêt à reprendre votre voyage vers l'illumination.",
      runeEffect: "Quand cette rune est tirée, vous récupérez tous vos points de vie et gagnez un nombre de points de vie temporaires égal à la moitié de votre maximum. Chaque fois que vous finissez un repos court, vous gagnez un nombre de points de vie temporaires égal à la moitié de votre modificateur de Charisme (1 au minimum)."
    },
    inverted: null
  }
];
