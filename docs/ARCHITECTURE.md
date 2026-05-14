<!-- stack + patron + couches + choix de sécurité et de sobriété (texte) -->

# ARCHITECTURE.md

# DevFlash – Architecture Technique

## 1. Objectif du document

Ce document présente les choix architecturaux du projet **DevFlash** et les raisons ayant motivé ces décisions.

L’objectif est de garantir une architecture :

- simple ;
- maintenable ;
- évolutive ;
- cohérente avec un MVP lean.

Le projet suit volontairement une approche progressive : commencer simple afin de valider le besoin produit avant d’ajouter de la complexité.

---

# 2. Présentation générale du système

**DevFlash** est une application web de flashcards à destination des développeurs débutants.

L’objectif principal est de permettre à un utilisateur de réviser rapidement des notions de programmation (dans un premier temps JavaScript) via des sessions courtes de flashcards.

L’application repose sur une architecture **client / serveur en 3 couches** :

```text
Frontend React
        ↓ HTTP/JSON
Backend API Express
        ↓ SQL
PostgreSQL
```

Cette architecture a été retenue pour sa simplicité de mise en œuvre, sa maintenabilité et sa capacité à évoluer.

---

# 3. Architecture choisie

## Architecture 3 tiers (Three-Tier Architecture)

Le projet adopte une architecture classique en trois couches :

### 1. Couche présentation (Frontend)

Responsable de :

- l’interface utilisateur ;
- l’affichage des flashcards ;
- la navigation dans le parcours ;
- les interactions utilisateur.

Technologie choisie :

### React

#### Justification

React a été retenu pour plusieurs raisons :

- architecture basée composants ;
- gestion simple de l’état local ;
- forte adoption dans l’écosystème frontend ;
- facilité d’évolution du projet.

L’interface étant relativement interactive (flip de carte, parcours dynamique), React est particulièrement adapté.

---

### 2. Couche logique métier (Backend API)

Responsable de :

- exposer les endpoints API ;
- récupérer les données ;
- générer des parcours aléatoires ;
- centraliser la logique métier.

Technologie choisie :

### Node.js + Express

#### Justification

Express a été retenu car :

- léger et minimaliste ;
- rapide à mettre en place pour un MVP ;
- cohérent avec un environnement JavaScript fullstack ;
- faible complexité.

Le backend suit une architecture REST simple.

Exemple d’endpoints :

```http
GET /stacks
GET /categories
GET /flashcards?categoryId=1&limit=10
```

---

### 3. Couche données (Database)

Responsable de :

- stocker les stacks ;
- stocker les catégories ;
- stocker les flashcards.

Technologie choisie :

### PostgreSQL

#### Justification

PostgreSQL a été retenu pour :

- sa robustesse ;
- son excellent support relationnel ;
- sa compatibilité avec SQL standard ;
- sa capacité d’évolution future.

Même si le besoin actuel est simple, PostgreSQL permet d’accompagner l’évolution du projet (utilisateurs, favoris, statistiques, progression).

---

# 4. Diagramme de déploiement

Le système est composé de quatre nœuds principaux :

```text
Utilisateur
    ↓ HTTPS
Frontend React
    ↓ HTTP/JSON
API Express
    ↓ SQL
PostgreSQL
```

### Protocoles de communication

| Communication | Protocole |
|---|---:|
| Utilisateur → Frontend | HTTPS |
| Frontend → API | HTTP/JSON |
| API → PostgreSQL | SQL / TCP-IP |

---

# 5. Organisation des données

Le modèle de données repose sur trois entités principales :

### Stack

Représente une stack / un langage de programmation.

Exemples :
- JavaScript
- Python
- PHP

---

### Category

Représente une catégorie de notions.

Exemples :
- Array methods
- String methods
- Hooks React

Une catégorie appartient à une stack / langage de programmation.

---

### Flashcard

Représente une notion technique.

Exemples :
- `map()`
- `filter()`
- `slice()`

Une flashcard appartient à une catégorie.

### Relations

```text
Stack (1,N) Category
Category (1,N) Flashcard
```

---

# 6. Flux principal de données

Lorsqu’un utilisateur démarre un parcours :

1. l’utilisateur sélectionne :
   - une stack ;
   - une catégorie ;
   - un nombre de cartes ;

2. React appelle l’API Express ;

3. le backend récupère des flashcards aléatoires ;

4. PostgreSQL retourne les résultats ;

5. l’API renvoie les données au format JSON ;

6. React affiche les flashcards.

Exemple de requête SQL :

```sql
SELECT *
FROM flashcards
WHERE category_id = ?
ORDER BY RANDOM()
LIMIT 10;
```

---

# 7. Principes architecturaux retenus

## Simplicité (KISS)

Le projet privilégie des solutions simples et compréhensibles.

Aucune architecture complexe (microservices, event-driven, CQRS, etc.) n’est utilisée dans la V1.

---

## Séparation des responsabilités

Chaque couche possède une responsabilité claire :

| Couche | Responsabilité |
|---|---|
| Frontend | Interface utilisateur |
| Backend | Logique métier |
| Database | Persistance |

---

## Évolutivité

L’architecture doit permettre l’ajout futur de fonctionnalités sans refonte majeure :

- authentification utilisateur ;
- favoris ;
- progression ;
- statistiques ;
- nouveaux langages ;
- catégories enrichies.

---

## API First

Le frontend communique exclusivement via API REST.

Cela permet :

- une séparation claire frontend/backend ;
- une future application mobile ;
- une meilleure maintenabilité.

---

# 8. Hors périmètre technique (V1)

Afin de conserver un MVP lean, plusieurs éléments sont volontairement exclus :

## Infrastructure avancée

Non inclus :

- Docker
- Kubernetes
- reverse proxy
- load balancing
- CDN

---

## Sécurité avancée

Non inclus :

- authentification
- rôles utilisateurs
- JWT
- OAuth

---

## Performance avancée

Non inclus :

- cache Redis
- optimisation SQL poussée
- pagination complexe

---

## Observabilité

Non inclus :

- monitoring
- logs centralisés
- métriques techniques

---

# 9. Risques techniques identifiés

## Croissance du volume de données

Le `ORDER BY RANDOM()` peut devenir coûteux sur de très grands volumes.

### Mitigation

Le volume de données attendu pour la V1 reste faible.

---

## Évolution multi-stacks

Certaines catégories peuvent exister dans plusieurs stacks / langages.

### Mitigation

Le modèle relationnel actuel permet déjà l’extension.

---

# 10. Évolutions futures possibles

### Fonctionnalités produit

- comptes utilisateur ;
- favoris ;
- historique de progression ;
- spaced repetition ;
- challenges.

### Architecture

- Dockerisation ;
- CI/CD ;
- tests automatisés ;
- monitoring ;
- cache applicatif.

---

# 11. Stack technique retenue (peut être ammenée à être changée)

| Couche | Technologie |
|---|---|
| Frontend | React |
| Backend | Node.js + Express |
| Base de données | PostgreSQL |
| API | REST / JSON |
| Versioning | Git + GitHub |
| Documentation | Markdown |