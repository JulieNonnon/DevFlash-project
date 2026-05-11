# DevFlash-project

_Projet Chef-d'Oeuvre formation CDA : application de flashcard pour développeur débutant / intermédiaire sur des notions précises de développement._

**Phase 1 du Projet Chef-d'œuvre :** tu vas concevoir un Micro-SaaS de niche, en autonomie. Pas une grosse plateforme tout-en-un, **une seule fonctionnalité forte**, bien pensée et bien exécutée pour une cible précise. Tu produis le dossier de conception complet (PRD, spécifications BDD, diagramme de cas d'utilisation, diagramme de déploiement UML, MERISE, maquettes Figma, prototype interactif, pitch oral) qui servira de base à la Phase 2 où tu construiras et déploieras vraiment l'application. Tout est versionné dans le dossier `docs/` de ton dépôt Git.

---

## Contexte du projet

Ton entreprise, récemment lancée dans le secteur des technologies, cherche à se positionner sur un marché de niche. Tu vas concevoir une application Micro-SaaS qui résout un problème concret pour une cible bien identifiée.

⚠️ Attention : c'est un Micro-SaaS, pas une grosse plateforme tout-en-un. On vise une seule fonctionnalité forte, bien pensée et bien exécutée.

Tu travailles seul·e, comme si tu étais en mission pour une jeune boîte tech. À la fin de cette Phase 1, ton dossier de conception doit être assez complet pour que n'importe quel·le développeur·se puisse prendre le projet en main et le construire en Phase 2.

Idées de niche
Choisis une seule idée. Voici quelques pistes pour t'inspirer :

| Idée | Public cible | Problème résolu |

| --- | --- | --- |

| Galerie photo privée pour photographes | Photographes indépendants | Livrer des photos aux clients de façon professionnelle |

| Carnet de bord pour tatoueurs | Studios de tatouage | Envoyer les consignes de soin post-tatouage aux clients |

| Suivi de chantier simplifié | Artisans | Noter l'avancement d'un chantier sans papier |

| Mini-agenda pour coachs sportifs | Coachs indépendants | Gérer les réservations de séances |

| Journal de bord pour agriculteurs | Petites exploitations | Enregistrer les activités et observations du quotidien |

Tu peux proposer ta propre idée, à condition de respecter la règle : 1 niche + 1 problème + 1 fonctionnalité principale.

Cadre de travail (transverse aux 4 étapes)
Tu travailles avec un vrai outillage de gestion de projet, comme dans la vraie vie. Pas de doc Word, pas de fichier JOURNAL.md à côté. Tout passe par GitHub.

#### Dépôt Git

Tu initialises ton repo dès le jour 1. Le dépôt est unique pour les deux phases du Projet Chef-d'œuvre (docs/ en Phase 1, apps/, db/, tests/, compose.yml… en Phase 2).

.gitignore adapté à ta stack (Node, Python, PHP, Go… selon ton choix). Toujours exclure .env, node_modules/, vendor/, fichiers d'IDE, etc.
Aucun secret committé : pas de mot de passe, pas de clé d'API, pas de .env. Tu fourniras un .env.example quand ce sera nécessaire (Phase 2).
Convention de commits : Conventional Commits (feat:, fix:, docs:, chore:, refactor:, test:…). Ça structure ton historique et tu pourras générer un changelog automatique plus tard.
#### GitHub Projects (v2)

Tu actives GitHub Projects sur ton dépôt. C'est là que se passe toute ta gestion de projet. Pas de Notion, pas de Trello à côté. Le projet est public ou accessible au formateur.

Tu configures au minimum :

Une vue Board (kanban) avec 4 colonnes : Backlog, À faire, En cours, Terminé
Un champ custom Estimation (en heures ou en story points)
Un champ custom Étape (A, B, C, D)
#### Epics, User Stories, Tâches

Tu structures ton travail en trois niveaux, avec des labels GitHub :

1. Epic (issue parente, label epic)

Une Epic par grand chantier. Pour la Phase 1, au minimum 4 Epics, une par étape :

[Epic] Discovery & PRD
[Epic] Spécifications & architecture
[Epic] Modèle de données & maquettage
[Epic] Pitch & dossier de conception
L'Epic contient une checklist markdown qui référence toutes les User Stories et tâches liées :

## User Stories et tâches de cette Epic
- [ ] #12 Rédiger le PRD lean
- [ ] #13 Définir le persona principal
- [ ] #14 Documenter 3 sources JTBD
- [ ] #15 Lister les hypothèses et risques
## User Stories et tâches de cette Epic
- [ ] #12 Rédiger le PRD lean
- [ ] #13 Définir le persona principal
- [ ] #14 Documenter 3 sources JTBD
- [ ] #15 Lister les hypothèses et risques
2. User Story (issue, label user-story)

Format obligatoire : En tant que [rôle], je veux [action], afin de [bénéfice].

Une User Story = une issue rattachée à son Epic via la checklist parente.

Exemple :

En tant que photographe indépendant, je veux pouvoir partager une galerie privée à un client, afin de livrer mes photos de manière professionnelle sans passer par WeTransfer.
3. Tâche (issue, label task)

Une tâche technique pure (par exemple « configurer Tailwind », « produire le MCD », « rédiger le README »). Plus petite qu'une User Story, sans format imposé.

#### Milestones = jalons par étape

Tu crées un Milestone par étape du brief (A, B, C, D), avec une date d'échéance estimée. Tu rattaches toutes les Issues à leur Milestone correspondant. Quand un Milestone est à 100 %, l'étape est terminée.

#### Estimation et suivi

Sur chaque issue, tu renseignes le champ Estimation au moment de la créer
Tu mets à jour le statut au fil de l'eau (pas en bloc en fin de semaine)
Si tu te rends compte qu'une estimation était fausse, tu la corriges et tu commit la décision dans le ticket
Quand le formateur passe en revue, il doit voir d'un coup d'œil sur ton GitHub Project où tu en es
#### Labels recommandés

Schéma de labels qui tient sur les deux phases du Projet Chef-d'œuvre. Tu crées tous les labels dès le début, tu n'utilises que ceux qui ont du sens à un moment donné.

Type (toujours obligatoire, 1 seul) : epic, user-story, task, bug

Scope (1 ou 2 max, indique le domaine touché) : docs, design, architecture, frontend, backend, database, devops, infra, tests, security

Phase (1 seul) : phase-1, phase-2

Priorité (1 seul) : priority/high, priority/medium, priority/low

Statut transverse (optionnel, ajouté quand pertinent) : blocked, needs-review, wip

Exemple d'une issue en Phase 2 : user-story + backend + database + phase-2 + priority/high.

Exemple d'une issue en Phase 1 : task + architecture + phase-1 + priority/medium.

## Modalités pédagogiques

Comment ça se déroule
Le travail est découpé en quatre étapes successives. À chaque étape, tu produis un livrable que tu commit dans docs/ de ton dépôt Git.

#### Étape A : Discovery & PRD

Tu identifies un vrai problème rencontré par une niche professionnelle. Tu le formules au format Jobs To Be Done :

Quand [situation], je veux [motivation], pour que [résultat].
Tu confrontes ton hypothèse à la réalité avec une recherche documentée : au moins 3 sources concrètes où tu retrouves le problème exprimé par la cible. Sources possibles :

Posts ou threads sur Reddit, forums spécialisés, groupes Facebook ou LinkedIn de la niche
Avis clients d'outils concurrents (App Store, Google Play, Capterra, Trustpilot)
Vidéos YouTube ou podcasts où des pros de la niche parlent de leurs galères
Articles de blog, témoignages écrits
Tu peux aussi interroger directement 1 ou 2 personnes de ton réseau (proches, contacts pros, freelances que tu connais) si tu en as la possibilité. Ce n'est pas obligatoire, mais ça vaut de l'or.

Tu rassembles tout ça dans docs/recherche-jtbd.md : pour chaque source, le lien, un extrait pertinent, et ce que ça prouve sur ton problème. Si tu cherches 30 minutes et que tu ne trouves rien, c'est un signal : ton problème n'existe peut-être pas ou tu cherches au mauvais endroit. Change de niche ou de problème.

Ensuite, tu rédiges un PRD lean (Product Requirements Document) : 2 à 5 pages max, pas un roman. À l'intérieur :

Le problème
La cible (persona précise)
La proposition de valeur unique
Une seule fonctionnalité principale pour la V1
1 à 3 métriques de succès
Le hors-périmètre explicite (ce que tu ne fais pas)
Hypothèses et risques
#### Étape B : Spécifications & architecture

Tu traduis le besoin en comportements observables avec des user stories au format Gherkin (Given / When / Then). Au moins 5 scénarios déclaratifs (qui décrivent le comportement métier, pas les clics).

Tu produis un diagramme de cas d'utilisation UML qui couvre toutes les interactions acteurs/système. Outil libre, mais export PNG ou JPEG dans docs/diagrams/.

Tu représentes ton architecture avec un diagramme de déploiement UML. C'est LE diagramme UML utilisé pour montrer les briques d'une application web (front, back, BDD, services tiers) et comment elles communiquent. En Phase 1, tu fais une version simplifiée (nœuds logiques, sans encore détailler le VPS ni les conteneurs Docker, ça viendra en Phase 2).

Sur le diagramme :

Les nœuds du système : Frontend, Backend (API), Database, Reverse-proxy, services tiers (paiement, mail, stockage… si pertinent pour ton produit)
Les artefacts déployés sur chaque nœud (l'application front, l'API, le moteur BDD, etc.)
Les liens annotés avec le protocole de communication (HTTP/JSON, SQL, SMTP, etc.)
Export PNG dans docs/diagrams/deployment.png.

À quoi ça sert : donner en un coup d'œil la vue d'ensemble du système pour que n'importe quel·le dev sache ce qu'il va construire en Phase 2. C'est aussi la trace que tu as réfléchi à ton archi avant de coder, pas après. Ce diagramme sera enrichi en Phase 2 avec les détails physiques (VPS, conteneurs, volumes, HTTPS).

Dans docs/ARCHITECTURE.md tu complètes en texte :

Ton patron de conception (multicouche classique, MVC, clean architecture, hexagonale…) et pourquoi tu l'as choisi
Le rôle de chaque couche côté back : présentation (controllers, routes), métier (services), accès données (repositories, ORM), données (BDD)
Tes choix de sécurité concrets : où tu valides les entrées, comment tu gères l'authentification, comment tu stockes les secrets, comment tu cloisonnes les permissions (= application des bonnes pratiques ANSSI)
Tes choix de sobriété concrets : pagination par défaut, cache, payloads limités, pas de polling inutile (= application des principes d'éco-conception)
Ta stack : langage, framework, ORM, SGBD, avec justification
Front et back explicitement découplés (SPA web ou app mobile + API). C'est la seule contrainte non négociable.

#### Étape C : Modèle de données & maquettage

Tu modélises la BDD en MERISE complet :

MCD (modèle conceptuel) couvrant toutes les fonctionnalités prévues, pas seulement la principale
MLD (modèle logique relationnel)
MPD (modèle physique : DDL pour ton SGBD)
Outil libre mais export PNG/JPEG dans docs/diagrams/. Règles de nommage homogènes.

Tu produis un diagramme de séquence détaillé pour la fonctionnalité principale : acteur → front → API → BDD → retour.

Côté design :

Benchmark visuel (3 à 5 références)
Moodboard
Charte graphique : couleurs, typographies, design tokens
Wireframes des écrans principaux
Maquettes haute fidélité sur Figma respectant RGAA 4.1 (contrastes, navigation clavier, alternatives textuelles)
Prototype interactif cliquable simulant le parcours utilisateur principal
#### Étape D : Pitch & dossier de conception

Tu compiles tout dans docs/ et tu prépares un pitch oral de 10 minutes : problème → cible → solution → démo prototype → architecture → roadmap.

Tu présentes à des pairs et tu recueilles leurs retours par écrit.


Durée : 7 jours ouvrés.

Activité individuelle, en pédagogie active.

Tu avances en autonomie sur chaque étape.

Gestion de projet

Tout passe par GitHub Projects sur ton dépôt (vue Board, Epics, User Stories, tâches, Milestones par étape, estimations à jour).

Convention de commits : Conventional Commits (feat:, fix:, docs:, chore:, refactor:, test:…) sur tout le git log.

Outils
Pour les diagrammes (cas d'utilisation, déploiement, séquence, MERISE) : prends un outil propre qui t'exporte du PNG ou JPEG :

draw.io, Lucidchart, dbdiagram.io (parfait pour MERISE), Figma
Pour la maquette : Figma

## Modalités d'évaluation

Évaluation par **tests croisés entre pairs** (binôme ou trinôme), complétée par une évaluation formateur sur la cohérence d'ensemble.

### Protocole de revue par les pairs

**Revue de la gestion de projet**

- Le GitHub Project est-il actif avec Epics, User Stories et tâches bien structurées ?
- Les User Stories suivent-elles le format « En tant que… je veux… afin de… » ?
- Les Milestones (étapes A, B, C, D) sont-ils correctement renseignés avec dates d'échéance ?
- Le `git log` respecte-t-il les Conventional Commits ?

**Revue du PRD**

- Le problème JTBD est-il clair ?
- La cible est-elle précise (vraie niche, pas grand public) ?
- La fonctionnalité principale est-elle unique et délimitée ?

**Revue des spécifications & architecture**

- Cloner le dépôt et lire `docs/SPECS.md` : les scénarios Gherkin sont-ils déclaratifs ?
- Le diagramme de cas d'utilisation couvre-t-il toutes les user stories ?
- Le diagramme de déploiement UML (`deployment.png`) est-il clair et lisible ?
- Les choix de sécurité concrets (validation, auth, secrets, permissions) et de sobriété (pagination, cache, payloads) sont-ils explicités dans `ARCHITECTURE.md` ?
- La stack et le patron de conception sont-ils argumentés ?

**Revue du modèle de données et de la maquette**

- Le MCD couvre-t-il toutes les fonctionnalités, pas seulement la principale ?
- MLD et MPD sont-ils cohérents avec le SGBD retenu ?
- Règles de nommage homogènes ?
- Diagramme de séquence complet pour la fonctionnalité principale ?
- Maquettes respectant la charte et le RGAA ?
- Prototype Figma navigable ?

**Pitch oral**

- Clair, structuré, tient en 10 min ± 1 min
- Démo du prototype convaincante


## Livrables

Un **dépôt Git public unique** pour le Projet Chef-d'œuvre. À l'issue de la Phase 1, voilà ce qu'on attend dedans :

```
projet-chef-oeuvre-microsaas/
├── README.md
└── docs/
    ├── PRD.md                  Product Requirements Document (lean, 2-5 pages)
    ├── SPECS.md                user stories + scénarios Gherkin
    ├── ARCHITECTURE.md         stack + patron + couches + choix de sécurité et de sobriété (texte)
    ├── DESIGN.md               charte + design tokens + lien Figma (texte)
    ├── recherche-jtbd.md       sources documentées (Reddit, avis clients, vidéos, articles…)
    ├── benchmark.md
    ├── moodboard.md
    ├── PITCH.pdf               support du pitch oral
    └── diagrams/               tous les schémas en PNG ou JPEG
        ├── use-cases.png       diagramme de cas d'utilisation
        ├── deployment.png      diagramme de déploiement UML
        ├── sequence.png        diagramme de séquence de la fonctionnalité principale
        ├── mcd.png             modèle conceptuel de données (MERISE)
        ├── mld.png             modèle logique de données (MERISE)
        └── mpd.png             modèle physique de données (MERISE)
```

À rendre **en plus** :

- Lien vers le **GitHub Project** du dépôt (Epics, User Stories, Milestones, estimations à jour)
- Lien Figma public vers les maquettes haute fidélité et le prototype interactif
- Captation vidéo du pitch oral (10 min + Q&A) ou créneau de présentation live

Le `git log` doit refléter les **Conventional Commits** sur l'ensemble de la Phase 1.

⚠️ **Attention** : tout le code applicatif (front, back, BDD, infra, tests) viendra **en Phase 2** dans le **même dépôt** (`apps/`, `db/`, `tests/`, `compose.yml`…). Le dossier `docs/` reste en place et sera enrichi (CI/CD, déploiement, sécurité, sauvegarde).
Critères de performance
**Gestion de projet** : GitHub Project actif sur le dépôt, avec Epics, User Stories au format « En tant que… je veux… afin de… », tâches, Milestones par étape avec dates d'échéance, estimations renseignées et tenues à jour.

**Versioning** : Conventional Commits respectés sur tout le `git log`, `.gitignore` correct, aucun secret committé.

**PRD lean** : ≤ 5 pages, problème JTBD étayé par au moins 3 sources documentées (posts forums, avis clients, vidéos, articles, témoignages…), fonctionnalité principale unique et délimitée, hors-périmètre explicite.

**Spécifications BDD** : au moins 5 scénarios Gherkin **déclaratifs** (Given / When / Then) couvrant la fonctionnalité principale.

**Diagramme de cas d'utilisation UML** : couvre toutes les user stories, exporté en PNG ou JPEG.

**Architecture** : un diagramme de déploiement UML livré en PNG (nœuds, artefacts, protocoles de communication), patron de conception et couches du back décrits en texte dans `ARCHITECTURE.md`, choix de sécurité concrets (validation, auth, secrets) et choix de sobriété concrets (pagination, cache, payloads) explicités.

**MERISE complet** : MCD + MLD + MPD couvrant l'ensemble des fonctionnalités prévues. Règles de nommage homogènes, contraintes définies (clés, intégrité référentielle, cardinalités).

**Diagramme de séquence** : couvre le parcours complet de la fonctionnalité principale (acteur → front → API → BDD → retour), exporté en PNG ou JPEG.

**Charte graphique** : couleurs, typographies et design tokens documentés.

**Maquettes haute fidélité** Figma respectant RGAA 4.1 : contrastes vérifiés, navigation clavier documentée, alternatives textuelles présentes.

**Prototype interactif** : navigable de bout en bout sur le parcours utilisateur principal.

**Pitch oral** : 10 minutes ± 1 minute, supports clairs, partie en anglais (section ou Q&A 5 min).

**Stack** : front et back **explicitement découplés** (SPA web ou app mobile + API).