# Étiquettes numériques des vins

Pages préparées le 16 octobre 2026. Elles ne sont pas publiées par cette modification. La validation des données par le vigneron et la vérification de l’hébergement restent nécessaires avant utilisation sur des bouteilles commercialisées.

## Organisation

La liste est dans `etiquettes/index.html`, accessible depuis les footers de l’accueil et des mentions légales. Aucun lien n’a été ajouté au menu principal. Chaque QR code mène à une page HTML autonome, sans JavaScript, image, police distante, cookie, stockage navigateur ou lien commercial. La feuille de style est locale et distincte du site vitrine. Une politique CSP bloque notamment les scripts, connexions et cadres tiers.

| Adresse encodée dans le QR code | Fichier |
| --- | --- |
| https://florentdeslandes.com/etiquettes/chminsinueux2024 | `etiquettes/chminsinueux2024/index.html` |
| https://florentdeslandes.com/etiquettes/fuzion2024 | `etiquettes/fuzion2024/index.html` |
| https://florentdeslandes.com/etiquettes/chminsinueux2025 | `etiquettes/chminsinueux2025/index.html` |
| https://florentdeslandes.com/etiquettes/fuzion2025 | `etiquettes/fuzion2025/index.html` |
| https://florentdeslandes.com/etiquettes/trempette2026 | `etiquettes/trempette2026/index.html` |
| https://florentdeslandes.com/etiquettes/symbioseavenir2026 | `etiquettes/symbioseavenir2026/index.html` |

Les serveurs statiques usuels résolvent ces répertoires vers `index.html`, éventuellement après une redirection ajoutant `/`. Vérifier les six adresses exactes sur l’hébergement réel, en HTTPS, sans renvoi vers l’accueil ou la liste, sans connexion, contrôle d’âge ou consentement bloquant. Aucun hébergeur ni configuration de production n’est défini dans ce dépôt.

## Règles prises en compte

L’article 119, paragraphes 4 et 5, du règlement (UE) 1308/2013 autorise la dématérialisation des ingrédients et de la déclaration nutritionnelle, avec interdiction de collecte/suivi des données d’utilisateur et de présentation conjointe d’informations commerciales. Les obligations nouvelles concernent les vins produits à compter du 8 décembre 2023 ; le millésime seul ne définit pas la date de production réglementaire.

L’avis de la Commission C/2023/1190, notamment ses questions 30 à 38, précise l’accès direct aux informations d’un produit identifié et l’environnement neutre. Il considère le lien vers le site de la cave comme commercial. Par précaution, les fiches n’offrent donc aucun retour au site ni à la liste. Le nom du vin et le millésime identifient la bouteille ; les caractéristiques objectives sont placées après les informations obligatoires. Les slogans, descriptions attractives, photos et arguments de dégustation fournis ne sont pas affichés sur ces fiches. La liste du site vitrine conserve sa navigation habituelle : aucun QR code ne doit pointer sur elle.

La déclaration nutritionnelle doit présenter, pour 100 ml et dans l’ordre réglementaire : énergie en kJ et kcal, matières grasses, acides gras saturés, glucides, sucres, protéines, sel. Les sept lignes sont présentes, mais la valeur des acides gras saturés manque encore.

La bouteille doit conserver la valeur énergétique et les allergènes même si les autres informations sont accessibles par QR code. Les autres mentions physiques applicables (notamment titre alcoométrique, volume, lot, provenance, embouteilleur et message grossesse) restent à contrôler sur le conditionnement. Accompagner le QR code d’une indication explicite telle que « Ingrédients / Nutrition » et vérifier son emplacement parmi les mentions obligatoires.

## Données à confirmer par le vigneron

L’utilisateur a demandé de conserver les données telles que transmises en attendant la réponse du vigneron. Aucune valeur manquante n’a été inventée.

- Acides gras saturés : absents des six fiches fournies. La ligne indique « Non renseigné » et un avertissement visible signale l’information à compléter. Cela ne constitue pas une déclaration nutritionnelle complète utilisable en l’état.
- SO₂ : conserver 20, 24, 20, 15 et 0 mg/L respectivement pour Ch’min 2024, Fuzion 2024, Ch’min 2025, Fuzion 2025 et Trempette 2026 ; Symbiose Avenir reste à « 20 mg ». Confirmer s’il s’agit de SO₂ total mesuré ou de doses ajoutées, et préciser l’unité de Symbiose. Ne pas interpréter « 0 mg/L » comme « sans sulfites » : une absence d’ajout ne garantit pas l’absence de sulfites issus de la fermentation.
- La mention « Contient des SULFITES » a été ajoutée aux cinq vins avec une teneur déclarée supérieure à 10 mg/L ou la donnée ambiguë « 20 mg ». Pour Symbiose, c’est une précaution provisoire à valider ; ce n’est pas une conversion de son unité. Trempette n’a pas de mention d’absence d’allergène. Vérifier tous les allergènes à partir des analyses et des produits employés.
- Ingrédients : « raisins » est conservé. Si des sulfites ont été ajoutés, cette liste peut être incomplète : confirmer la substance utilisée et la déclarer avec sa catégorie fonctionnelle, par exemple « conservateur : … », selon le produit réellement employé. La mention d’allergène seule ne remplace pas l’identification d’un additif. Vérifier également les autres additifs et les auxiliaires allergènes éventuels. Ne pas déduire un additif précis de la seule teneur en SO₂.
- Toutes les énergies, teneurs en glucides/sucres et valeurs d’alcool ont été conservées. Faire confirmer les résultats et calculs, notamment les valeurs identiques à 11 % et 11,5 % vol., sans les recalculer arbitrairement.
- Trempette : la catégorie réglementaire (vin tranquille, pétillant ou mousseux) ne peut pas être déduite de « peut-être pétillant ». La fiche utilise provisoirement « Vin rosé · Vin de France » ; confirmer la catégorie et les indications supplémentaires applicables.
- Vérifier que chaque URL correspond bien à un produit et à des lots de composition identique. Si plusieurs lots diffèrent, prévoir des fiches/QR codes distincts ; ne pas remplacer les données d’un ancien lot par celles du nouveau.

Après réception des précisions : compléter les tableaux et ingrédients, valider les allergènes et retirer les avertissements seulement lorsque les points correspondants sont résolus. Prévoir les langues des pays de commercialisation si ces vins sont exportés.

## Hébergement et pérennité

L’absence de traceur dans le HTML ne garantit pas à elle seule l’absence de collecte. Faire vérifier par l’hébergeur les journaux contenant IP et identifiants, les statistiques, le CDN, les outils de sécurité et toute injection de script/cookie sur `/etiquettes/*`. Configurer ces pages pour respecter l’interdiction de collecte et de suivi ; un bandeau de consentement n’y substitue pas une autorisation.

Maintenir les URL lisibles et les données disponibles pendant la commercialisation et la durée de consommation prévisible des bouteilles, y compris après une refonte ou un changement d’hébergeur. Scanner les QR codes réellement imprimés sur téléphone avant tirage et contrôler périodiquement les liens.

## Textes transmis conservés hors des fiches réglementaires

Ces textes sont conservés ici pour un éventuel usage éditorial distinct. Ils ne sont pas publiés sur les destinations des QR codes.

### Ch’min Sinueux 2024 et 2025

« Le Chemin n’est pas toujours accessible, parfois accidenté, mais à plusieurs toujours plus sympas ! »

« Jeune vigne pour un vin blanc toute en fraicheur »

### Fuzion 2024 et 2025

« L’assemblage des cépages et des élevages, faire un ensemble et fusionner les genres ! »

2024 : « Vin rouge équilibré aux arômes de fraises »

2025 : « Vin rouge équilibré aux arômes de cerise »

### Trempette 2026

« Rosé Piscine, vraisemblablement, peut-être pétillant, mais naturellement ! »

« Arômes de cassis et framboises fraiches »

### Symbiose Avenir 2026

« Vin blanc frais aux notes grillées et de miel, issus de belles rencontres, de passions naissantes. Pour un projet en construction d'un renouveau de la vigne dans une contrée oubliée, pour une symbiose avenir. »

## Vérifications effectuées

Les neuf pages HTML (accueil, mentions, liste et six fiches) ont été contrôlées pour leurs liens, ressources et ancres locales. Les six fiches ont été vérifiées pour l’absence de scripts et de navigation, les sept lignes nutritionnelles, les données chiffrées transmises et les mentions de sulfites. Les six adresses exactes des QR codes ont été testées sur un serveur HTTP statique local : redirection 301 vers le répertoire avec `/`, puis réponse 200 pour chaque fiche et sa feuille de style. La liste répond également en 200. Aucun contrôle du domaine public, de l’hébergeur ou du rendu dans un navigateur n’a été réalisé.

## Sources officielles

- [Règlement (UE) 1308/2013, notamment article 119](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32013R1308) — consulter la version consolidée en vigueur.
- [Avis de la Commission C/2023/1190](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:52023XC01190) — ingrédients, nutrition et étiquetage électronique.
- [DGCCRF — Étiquetage des vins : savoir lire les étiquettes](https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/etiquetage-des-vins-savoir-lire-les-etiquettes) — présentation pratique et seuil des sulfites.
- [Règlement (UE) 1169/2011](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32011R1169) — articles 18, 21, 30 et 32, annexes II et XV.
- [Règlement (UE) 2026/471](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32026R0471) — évolutions récentes du cadre vinicole ; ne supprime pas l’interdiction de commercialisation ou de suivi sur les étiquettes dématérialisées.
