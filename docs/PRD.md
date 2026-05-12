<!-- Le bon réflexe pour un PRD lean est de le voir comme un document de cadre produit : 
il ne décrit pas toute la technique ni tous les détails UX, mais répond à une question simple :
"Pourquoi ce produit existe, pour qui, ce qu’il fait exactement en V1, et comment on saura si ça fonctionne ? -->

# PRD Lean – Application de Flashcards pour Développeurs Débutants

## 1. Présentation du produit

### Nom du projet

**DevFlash**

### Vision produit

Créer une application minimaliste de flashcards permettant aux développeurs débutants de réviser rapidement les notions fondamentales de langages de programmation afin de mieux mémoriser les méthodes les plus utilisées.

L’application vise à favoriser une mémorisation active, rapide et sans friction, à travers des sessions courtes de révision.

---

# 2. Le problème

Les développeurs débutants rencontrent souvent une difficulté récurrente : retenir durablement les méthodes et notions de langages de programmation (Array, String, etc.), leur syntaxe et leur usage.

Même lorsque les concepts sont compris pendant l’apprentissage, les utilisateurs oublient fréquemment les notions et reviennent constamment à la documentation (notamment MDN) ou aux moteurs de recherche.

Les outils existants de flashcards sont généralement :

- trop généralistes ;
- trop complexes ;
- orientés mémorisation avancée (spaced repetition) ;
- peu adaptés à un besoin rapide et ciblé pour développeurs débutants.

### Problème formulé

> Les développeurs débutants ont besoin d’un moyen simple et rapide de réviser les notions fondamentales de langages de programmation afin de faciliter leur assimilation et gagner en autonomie lorsqu’ils codent.

---

# 3. Cible utilisateur (Persona)

## Persona principal

### Thomas, 26 ans – Développeur JavaScript débutant

**Profil**
- Étudiant en reconversion ou autodidacte
- Apprend JavaScript depuis quelques mois
- Réalise ses premiers projets frontend
- Consulte régulièrement MDN, Stack Overflow et YouTube

**Objectifs**
- Retenir les méthodes JavaScript importantes
- Être plus autonome en développement
- Réduire le temps passé à rechercher des notions déjà vues

**Frustrations**
- Oublie rapidement certaines méthodes
- Confond les usages (`map()`, `filter()`, `reduce()`)
- Revient souvent sur la documentation

**Comportement**
- Révise par petites sessions courtes
- Préfère les outils simples et immédiats
- N’a pas envie de configurer un outil complexe

### JTBD associé

> Quand j’apprends un langage de programmation, je veux réviser rapidement les notions importantes afin de mieux retenir les méthodes et gagner en autonomie lorsque je développe.

---

# 4. Proposition de valeur unique

## Proposition de valeur

> Une application ultra simple de flashcards pour développeurs débutants, permettant de réviser rapidement les méthodes essentielles via des sessions courtes et ciblées.

### Différenciation

Contrairement aux applications de flashcards généralistes :

**DevCards :**
- cible des notions niveau débutant / intermédiaire ;
- propose des parcours très courts (5–20 cartes) ;
- génère des cartes aléatoires ;
- relie chaque notion à la documentation MDN ;
- reste volontairement minimaliste.

---

# 5. Fonctionnalité principale – V1

## Une seule fonctionnalité cœur

### Parcours de flashcards

L’utilisateur peut :

1. choisir une catégorie de notions ;
2. choisir un nombre de cartes (5, 10, 15, 20) ;
3. lancer un parcours ;
4. consulter les flashcards une à une ;
5. retourner une carte pour voir la réponse ;
6. accéder à la documentation MDN ;
7. terminer une session et revenir à l’accueil.

---

## Parcours utilisateur simplifié

### Écran d’accueil

L’utilisateur sélectionne :

- une catégorie :
  - Javascript - méthodes Array
  - Javascript - méthodes String
  - ...
  - *(autres catégories futures)*

- un nombre de flashcards :
  - 5
  - 10
  - 15
  - 20

Le bouton **“Commencer le parcours”** devient actif uniquement lorsque les deux sélections sont renseignées.

---

### Écran flashcard

**Recto**
- définition de la méthode

**Interaction**
- clic sur la carte → affichage du verso

**Verso**
- nom de la méthode
- lien MDN associé

**Navigation**
- bouton **Carte suivante**

---

### Fin de parcours

Message :

> Bien joué, vous avez parcouru l’ensemble des X flashcards.

Puis :

- bouton **Retour à l’accueil**

---

# 6. Métriques de succès (V1)

L’objectif n’est pas encore la rétention long terme, mais de valider l’usage du produit.

## Métrique 1 — Taux de complétion

**Définition :**
Pourcentage d’utilisateurs terminant un parcours commencé.

**Succès attendu :**
> ≥ 70 %

Pourquoi :
Si les utilisateurs terminent les sessions, cela indique que le format est suffisamment simple et engageant.

---

## Métrique 2 — Nombre moyen de cartes parcourues

**Définition :**
Nombre moyen de flashcards vues par session.

**Succès attendu :**
> ≥ 80 % du parcours sélectionné

Pourquoi :
Mesure l’intérêt réel avant abandon.

---

## Métrique 3 — Clics vers MDN

**Définition :**
Nombre de clics sur les liens de documentation.

**Succès attendu :**
> indicateur qualitatif d’approfondissement

Pourquoi :
Valide l’hypothèse qu’un lien direct vers la documentation apporte de la valeur.

---

# 7. Hors périmètre (Non Goals)

Cette V1 est volontairement limitée.

### Non inclus dans la V1

#### Comptes utilisateur
- inscription
- connexion
- profils

#### Sauvegarde de progression
- historique
- statistiques
- streaks

#### Personnalisation
- favoris
- cartes personnalisées
- catégories utilisateur

#### Gamification
- badges
- score
- classement

#### Algorithmes avancés
- répétition espacée
- recommandations intelligentes

#### Contenu avancé
- quiz complexes
- exercices de code

### Raison

L’objectif est de valider le besoin principal avant d’ajouter de la complexité.

---

# 8. Hypothèses et risques

## Hypothèse 1

> Les développeurs débutants ont besoin d’un outil de micro-révision de langages de programmation.

### Risque

Le besoin peut être déjà couvert par MDN, Google ou la pratique quotidienne.

---

## Hypothèse 2

> Le format flashcard améliore la mémorisation des méthodes JavaScript.

### Risque

Les utilisateurs pourraient préférer des exercices pratiques (ex : Codewars) plutôt que des cartes.

---

## Hypothèse 3

> Une expérience volontairement minimaliste augmente l’usage.

### Risque

L’application pourrait être perçue comme trop simple ou peu engageante.

---

# 9. Critère de validation du MVP

La V1 sera considérée comme validée si :

- les utilisateurs terminent majoritairement leurs parcours ;
- les sessions sont utilisées régulièrement ;
- les retours utilisateurs confirment une aide réelle à la mémorisation.

---

# 10. Stack technique envisagée

### Frontend
- React

### Backend
- Node.js + Express

### Base de données
- PostgreSQL
