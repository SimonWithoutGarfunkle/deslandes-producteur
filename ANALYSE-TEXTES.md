# Analyse rédactionnelle et répétitions

Analyse du 10 octobre 2026, après les retours sur les visuels. Périmètre : accueil, fiches dépliables, navigation, légendes, boutons, métadonnées et mentions légales. Les ajustements sont intégrés dans `index.html`.

## Conclusion

Le principal problème était la répétition des mêmes explications entre sections : origine des raisins, vinification en Mayenne, chronologie 2023/2025 et engagements. Le lecteur retrouvait parfois le même message sans information supplémentaire. Ce constat rédactionnel ne permet pas de conclure à une pénalité Google.

Les rappels utiles sont conservés : identité et localisation dès l’arrivée, bandeau des engagements, origine et caractéristiques dans chaque fiche de vin, coordonnées en fin de parcours. Les rubriques ont désormais des fonctions plus distinctes.

## Principes retenus

- **Lecture humaine :** privilégier des titres explicites, des paragraphes courts et une idée par paragraphe. Les recherches de Nielsen Norman Group montrent l’intérêt de textes faciles à parcourir et concis. Cela justifie de supprimer une explication redondante, pas tous les rappels. [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/).
- **Google :** écrire naturellement et éviter de multiplier artificiellement les mêmes termes, même sous des variantes. La longueur seule n’est pas un objectif de classement. Les occurrences ci-dessous servent à constater les changements, pas à atteindre une « densité SEO ». [Google — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
- **Répétition et spam :** la politique de Google vise notamment les répétitions artificielles destinées à manipuler le classement. Un libellé récurrent ou une origine rappelée dans plusieurs fiches ne suffit pas à caractériser cette pratique. Les accordéons conçus pour faciliter la consultation sont également admis. [Google — Spam policies](https://developers.google.com/search/docs/essentials/spam-policies#keyword-stuffing).
- **Utilité :** chaque section doit répondre à une question du visiteur. La réécriture conserve les informations concrètes plutôt que d’allonger les textes pour les moteurs. [Google — Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Relecture par zone

| Zone | Constat | Décision appliquée |
| --- | --- | --- |
| Titre de page et description | Métier, lieu et prestations clairement identifiés. Leur reprise dans le contenu est utile. | Conservés. |
| En-tête et introduction | « Producteur de vin en Mayenne » apparaissait dans la signature, le surtitre et la première phrase. | Signature et surtitre conservés ; introduction recentrée sur Florent, son activité et son implantation. |
| Bandeau | Synthèse courte des engagements et label avec logo. | Conservé comme point de référence pour le bio, la vinification naturelle et Nature & Progrès. |
| Introduction des vins | Répétait presque intégralement le bandeau. | Présentation de la gamme et de ce que contiennent les fiches ; mention explicite de l’agriculture biologique conservée. |
| Fiches des cinq cuvées | Longue formule d’origine répétée cinq fois ; certains profils répétaient le type et la méthode affichés ailleurs sur la carte. | Origines raccourcies en « Anjou · Raisins bio · Vignes de … ans ». Profils du blanc et du rosé recentrés sur les arômes. Types, cépages et méthodes conservés dans leurs emplacements respectifs. |
| Vinifications | Plusieurs procédés communs, mais des différences de macération et d’élevage importantes. | Détails conservés pour que chaque fiche reste compréhensible et comparable indépendamment des autres. |
| Note sous les vins | Formulation longue et référence au document ayant servi à construire la page. | Note raccourcie. Distinction entre les cinq cuvées présentées et la parcelle mayennaise maintenue. |
| Mon histoire | Les premières vendanges et l’ensemble du projet étaient racontés plusieurs fois, puis repris dans la frise. | Introduction personnelle, formation dans le volet dépliable et chronologie dans la frise. Suppression du deuxième récit complet de la plantation et des vins 100 % mayennais. |
| Photo de plantation | Un hectare et localisation constituent des repères lisibles au défilement. | Légende conservée. |
| Les vignes | Répétait le démarrage en 2023, les raisins d’Anjou et le bandeau des engagements. | Section consacrée à la plantation de 2025, aux vins 100 % mayennais et à la parcelle. Le second paragraphe explique la carte avec ses altitudes de 91 à 115 m, déjà indiquées sur le document fourni. |
| Dégustations | Introduction, descriptif de l’initiation et liste reprenaient les mêmes étapes. | Introduction consacrée aux formats ; listes consacrées aux apprentissages. Boutons plus explicites, menant toujours au contact. |
| Conseils | Titre très général et répétition des termes « accompagnement », « conseils » et « qualité ». | Titre « Conseils viticoles & œnologie ». Descriptifs raccourcis pour distinguer administratif, agronomie et vinification. |
| Contact | Nouvelle reprise des conditions déjà mentionnées sous les dégustations. | Texte consacré aux informations à transmettre pour préparer une demande, avec une indication pour les projets viticoles. |
| Footer, navigation et textes alternatifs | Noms, lieux et actions répétés pour orienter le lecteur ou décrire chaque image. | Conservés : leur fonction justifie ces rappels. Blague du tracteur maintenue. |
| Mentions légales | Les coordonnées, la confidentialité et le message sanitaire sont repris dans un contexte distinct. | Conservés. Il s’agit d’une relecture rédactionnelle, pas d’une validation juridique. |

## Mesures avant / après

Comptage du texte du `<main>` de l’accueil, détails dépliables inclus. Attributs, métadonnées, navigation et footer exclus. Les nombres et les libellés sont inclus dans le total des mots ; il ne représente donc pas uniquement les paragraphes de présentation.

| Indicateur | Avant | Après |
| --- | ---: | ---: |
| Mots | 1 135 | 975 |
| « Mayenne », y compris dans Saint-Jean-sur-Mayenne | 18 | 11 |
| « Anjou » | 12 | 9 |
| « Nature & Progrès » | 2 | 1 |
| « 100 % naturelle » | 3 | 1 |
| « 2023 », millésimes inclus | 5 | 3 |
| « 2025 », millésimes inclus | 7 | 6 |

Le texte principal est réduit d’environ **14 %**. L’objectif n’est pas de descendre sous un nombre d’occurrences : les rappels restants ont une fonction identifiable. Les informations sur les raisins bio, les vendanges en Anjou, le label, les procédés, les prix et les prestations sont conservées.

## Point SEO distinct de la rédaction

Les deux pages contiennent actuellement `noindex, nofollow` et `robots.txt` contient `Disallow: /`. Cette configuration de présentation n’a pas été modifiée. Elle devra être réexaminée au lancement public si l’objectif est d’être trouvé sur Google. `Disallow` bloque l’exploration ; `noindex` demande de ne pas indexer la page lorsqu’un moteur peut lire cette instruction. Le blocage dans robots.txt peut empêcher sa lecture. [Google — Block Search indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

Cette intervention améliore la cohérence et la lisibilité ; elle ne permet pas de promettre une position Google. Aucun résultat de Search Console ni donnée de trafic n’a été utilisé.
