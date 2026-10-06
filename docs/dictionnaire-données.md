# Dictionnaire de données — DevFlash

## 1. Objectif

Ce document présente le dictionnaire de données de la base de données de **DevFlash**.

Il décrit les tables, les attributs, leurs types, leurs contraintes et leur rôle dans le système.

Le modèle est organisé en deux grands ensembles :

- **Données métier** : stacks, catégories et flashcards.
- **Données utilisateurs** : rôles, utilisateurs, favoris et suivi des notions comprises.

---

## 2. Données métier

### 2.1 Table `Stack`

La table `Stack` contient les stacks ou langages de programmation disponibles dans DevFlash.

| Attribut     | Type          | Contraintes      | Description                                                                                        |
|--------------|---------------|------------------|----------------------------------------------------------------------------------------------------|
| `stack_name` | `VARCHAR(50)` | PK               | Nom unique de la stack ou du langage de programmation.                                             |
| `slug`       | `VARCHAR(50)` | NOT NULL, UNIQUE | Identifiant textuel unique utilisé notamment pour les URLs ou l'identification dans l'application. |
| `created_at` | `DATETIME`    | NOT NULL         | Date et heure de création de la stack.                                                             |

**Clé primaire :**

```text
stack_name
```

**Contrainte d'unicité :**

```text
slug
```

---

### 2.2 Table `Category`

La table `Category` contient les catégories de notions associées aux différentes stacks.

| Attribut        | Type          | Contraintes  | Description                                                  |
|-----------------|---------------|--------------|--------------------------------------------------------------|
| `category_name` | `VARCHAR(20)` | PK           | Nom unique de la catégorie.                                  |
| `description`   | `TEXT`        | NOT NULL     | Description de la catégorie et des notions qu'elle regroupe. |
| `created_at`    | `DATETIME`    | NOT NULL     | Date et heure de création de la catégorie.                   |
| `stack_name`    | `VARCHAR(50)` | NOT NULL, FK | Stack à laquelle appartient la catégorie.                    |

**Clé primaire :**

```text
category_name
```

**Clé étrangère :**

```text
stack_name → Stack.stack_name
```

---

### 2.3 Table `Flashcard`

La table `Flashcard` contient les cartes pédagogiques utilisées pour les sessions de révision.

| Attribut        | Type           | Contraintes  | Description                                               |
|-----------------|----------------|--------------|-----------------------------------------------------------|
| `ref_flashcard` | `VARCHAR(20)`  | PK           | Référence unique de la flashcard.                         |
| `title`         | `VARCHAR(100)` | NOT NULL     | Titre ou nom de la notion présentée par la flashcard.     |
| `definition`    | `TEXT`         | NOT NULL     | Définition ou explication de la notion.                   |
| `doc_url`       | `VARCHAR(255)` | NOT NULL     | URL permettant d'accéder à la documentation de référence. |
| `created_at`    | `DATETIME`     | NOT NULL     | Date et heure de création de la flashcard.                |
| `category_name` | `VARCHAR(20)`  | NOT NULL, FK | Catégorie à laquelle appartient la flashcard.             |

**Clé primaire :**

```text
ref_flashcard
```

**Clé étrangère :**

```text
category_name → Category.category_name
```

---

# 3. Données utilisateurs

## 3.1 Table `Role`

La table `Role` définit les différents rôles pouvant être attribués aux utilisateurs de DevFlash.

| Attribut     | Type          | Contraintes | Description                        |
|--------------|---------------|-------------|------------------------------------|
| `role_name`  | `VARCHAR(50)` | PK          | Nom unique du rôle.                |
| `created_at` | `DATETIME`    | NOT NULL    | Date et heure de création du rôle. |

**Clé primaire :**

```text
role_name
```

---

## 3.2 Table `User_`

La table `User_` contient les informations nécessaires à l'identification et à la gestion des utilisateurs.

| Attribut     | Type           | Contraintes  | Description                                       |
|--------------|----------------|--------------|---------------------------------------------------|
| `email`      | `VARCHAR(320)` | PK           | Adresse e-mail unique de l'utilisateur.           |
| `username`   | `VARCHAR(50)`  | NOT NULL     | Nom d'utilisateur affiché dans l'application.     |
| `password`   | `VARCHAR(255)` | NOT NULL     | Mot de passe de l'utilisateur sous forme de hash. |
| `created_at` | `DATETIME`     | NOT NULL     | Date et heure de création du compte.              |
| `role_name`  | `VARCHAR(50)`  | NOT NULL, FK | Rôle attribué à l'utilisateur.                    |

**Clé primaire :**

```text
email
```

**Clé étrangère :**

```text
role_name → Role.role_name
```

> **Point de vigilance :** le mot de passe ne doit jamais être enregistré en clair dans la base de données. La valeur stockée dans `password` doit correspondre à un hash généré avec une fonction de hachage adaptée aux mots de passe.

---

## 3.3 Table `Favoriser`

La table `Favoriser` représente la relation entre les utilisateurs et les flashcards qu'ils ajoutent à leurs favoris.

| Attribut        | Type           | Contraintes | Description                                                            |
|-----------------|----------------|-------------|------------------------------------------------------------------------|
| `ref_flashcard` | `VARCHAR(20)`  | PK, FK      | Référence de la flashcard ajoutée aux favoris.                         |
| `email`         | `VARCHAR(320)` | PK, FK      | Adresse e-mail de l'utilisateur ayant ajouté la flashcard aux favoris. |

**Clé primaire composée :**

```text
(ref_flashcard, email)
```

**Clés étrangères :**

```text
ref_flashcard → Flashcard.ref_flashcard
email → User_.email
```

La clé primaire composée empêche un même utilisateur d'ajouter plusieurs fois la même flashcard à ses favoris.

---

## 3.4 Table `Comprendre`

La table `Comprendre` représente la relation entre les utilisateurs et les flashcards qu'ils déclarent avoir comprises.

| Attribut        | Type           | Contraintes | Description                                                            |
|-----------------|----------------|-------------|------------------------------------------------------------------------|
| `ref_flashcard` | `VARCHAR(20)`  | PK, FK      | Référence de la flashcard comprise.                                    |
| `email`         | `VARCHAR(320)` | PK, FK      | Adresse e-mail de l'utilisateur ayant indiqué comprendre la flashcard. |

**Clé primaire composée :**

```text
(ref_flashcard, email)
```

**Clés étrangères :**

```text
ref_flashcard → Flashcard.ref_flashcard
email → User_.email
```

La clé primaire composée empêche un même utilisateur d'enregistrer plusieurs fois la même relation de compréhension.

---

# 4. Relations entre les tables

## 4.1 Stack — Category

Une `Stack` peut posséder plusieurs `Category`.

Une `Category` appartient obligatoirement à une seule `Stack`.

```text
Stack (1,N) ─────── (1,1) Category
```

**Clé étrangère :**

```text
Category.stack_name → Stack.stack_name
```

---

## 4.2 Category — Flashcard

Une `Category` peut contenir plusieurs `Flashcard`.

Une `Flashcard` appartient obligatoirement à une seule `Category`.

```text
Category (1,N) ─────── (1,1) Flashcard
```

**Clé étrangère :**

```text
Flashcard.category_name → Category.category_name
```

---

## 4.3 Role — User_

Un `Role` peut être attribué à plusieurs utilisateurs.

Un `User_` possède obligatoirement un seul rôle.

```text
Role (1,N) ─────── (1,1) User_
```

**Clé étrangère :**

```text
User_.role_name → Role.role_name
```

---

## 4.4 User_ — Flashcard : Favoriser

Un utilisateur peut favoriser plusieurs flashcards.

Une flashcard peut être favorisée par plusieurs utilisateurs.

Il s'agit donc d'une relation **N,N**, matérialisée par la table associative `Favoriser`.

```text
User_ (0,N) ─────── Favoriser ─────── (0,N) Flashcard
```

---

## 4.5 User_ — Flashcard : Comprendre

Un utilisateur peut indiquer qu'il comprend plusieurs flashcards.

Une flashcard peut être comprise par plusieurs utilisateurs.

Il s'agit donc également d'une relation **N,N**, matérialisée par la table associative `Comprendre`.

```text
User_ (0,N) ─────── Comprendre ─────── (0,N) Flashcard
```

---

# 5. Vue globale du modèle

```text
                         ┌──────────────┐
                         │    Stack     │
                         │──────────────│
                         │ PK stack_name│
                         │    slug      │
                         │    created_at│
                         └──────┬───────┘
                                │
                               1,N
                                │
                                ▼
                         ┌──────────────┐
                         │   Category   │
                         │──────────────│
                         │PK category_  │
                         │   name       │
                         │ description  │
                         │ stack_name FK│
                         │ created_at   │
                         └──────┬───────┘
                                │
                               1,N
                                │
                                ▼
                         ┌──────────────┐
                         │  Flashcard   │
                         │──────────────│
                         │PK ref_       │
                         │   flashcard  │
                         │ title        │
                         │ definition   │
                         │ doc_url      │
                         │ category FK  │
                         │ created_at   │
                         └──────┬───────┘
                                │
                     ┌──────────┴──────────┐
                     │                     │
                     │                     │
                  Favoriser             Comprendre
                     │                     │
                     │                     │
                     ▼                     ▼
               ┌────────────┐       ┌────────────┐
               │ Favoriser  │       │ Comprendre │
               │────────────│       │────────────│
               │flashcard FK│       │flashcard FK│
               │email FK    │       │email FK    │
               └──────┬─────┘       └──────┬─────┘
                      │                    │
                      └─────────┬──────────┘
                                │
                                ▼
                         ┌──────────────┐
                         │    User_     │
                         │──────────────│
                         │ PK email     │
                         │ username     │
                         │ password     │
                         │ created_at   │
                         │ role_name FK │
                         └──────┬───────┘
                                │
                               N,1
                                │
                                ▼
                         ┌──────────────┐
                         │     Role     │
                         │──────────────│
                         │ PK role_name │
                         │ created_at   │
                         └──────────────┘
```

---

# 6. Synthèse des clés

| Table        | Clé primaire           | Clé(s) étrangère(s)      |
|--------------|------------------------|--------------------------|
| `Stack`      | `stack_name`           | —                        |
| `Category`   | `category_name`        | `stack_name`             |
| `Flashcard`  | `ref_flashcard`        | `category_name`          |
| `Role`       | `role_name`            | —                        |
| `User_`      | `email`                | `role_name`              |
| `Favoriser`  | `ref_flashcard, email` | `ref_flashcard`, `email` |
| `Comprendre` | `ref_flashcard, email` | `ref_flashcard`, `email` |

---

# 7. Contraintes d'intégrité importantes

Les principales contraintes assurées par le modèle sont les suivantes :

- Une stack possède un nom unique.
- Une stack possède un `slug` unique.
- Une catégorie est obligatoirement rattachée à une stack.
- Une flashcard est obligatoirement rattachée à une catégorie.
- Un utilisateur possède obligatoirement un rôle.
- Un rôle est identifié de manière unique.
- Une adresse e-mail identifie un utilisateur de manière unique.
- Une association `Favoriser` est unique pour un couple utilisateur/flashcard.
- Une association `Comprendre` est unique pour un couple utilisateur/flashcard.
- Les champs déclarés `NOT NULL` doivent obligatoirement être renseignés.
- Les clés étrangères garantissent l'existence des éléments référencés.

---

# 8. Points de vigilance techniques

### 8.1 Stockage des mots de passe

Le champ :

```text
User_.password
```

ne doit pas contenir le mot de passe en clair.

L'application devra stocker un **hash sécurisé** du mot de passe.

---

### 8.2 Utilisation de `email` comme clé primaire

L'adresse e-mail est actuellement utilisée comme clé primaire de `User_`.

Ce choix est possible et permet d'identifier directement un utilisateur par son adresse e-mail.

Cependant, une évolution future pourrait consister à introduire un identifiant technique indépendant, par exemple :

```text
user_id
```

Cela permettrait notamment de dissocier l'identité technique de l'adresse e-mail.

Pour le MVP, le choix actuel peut toutefois être conservé si cette simplification correspond à vos besoins.

---

### 8.3 Utilisation de noms comme clés primaires

Les tables `Stack`, `Category` et `Role` utilisent respectivement :

```text
stack_name
category_name
role_name
```

comme clés primaires.

Ce choix simplifie le modèle et reste compréhensible pour un projet pédagogique ou un MVP.

Une évolution future pourrait néanmoins introduire des identifiants techniques (`stack_id`, `category_id`, `role_id`) si les noms deviennent susceptibles d'être modifiés.

---

### 8.4 Suppression des données référencées

Les clés étrangères de votre script ne définissent actuellement aucune règle explicite de suppression (`ON DELETE`).

Le comportement à adopter lors de la suppression d'une stack, d'une catégorie, d'une flashcard ou d'un utilisateur devra donc être défini selon les besoins fonctionnels de DevFlash.

Cette décision pourra être ajoutée aux **règles de gestion** du projet.

---

# 9. Périmètre fonctionnel couvert

Le modèle actuel permet de représenter :

1. Les stacks ou langages disponibles.
2. Les catégories de notions.
3. Les flashcards pédagogiques.
4. Les utilisateurs.
5. Les rôles des utilisateurs.
6. Les flashcards ajoutées aux favoris.
7. Les flashcards qu'un utilisateur déclare comprendre.

Le modèle ne représente pas encore directement :

- les sessions de révision ;
- l'historique des réponses ;
- le score d'une session ;
- la progression détaillée d'un utilisateur ;
- les statistiques ;
- les dates de révision d'une flashcard.

Ces éléments peuvent être ajoutés ultérieurement si les besoins du produit évoluent.

---

## 10. Conclusion

Le dictionnaire de données décrit la structure actuelle de la base de données de DevFlash et sert de référence commune pour la conception, le développement et l'évolution du projet.

Le modèle repose sur une séparation claire entre :

```text
DONNÉES MÉTIER
Stack
 └── Category
      └── Flashcard

DONNÉES UTILISATEURS
Role
 └── User_

User_ ↔ Flashcard
       ├── Favoriser
       └── Comprendre
```

Cette organisation permet de conserver un modèle relativement simple tout en préparant l'évolution de DevFlash vers des fonctionnalités de personnalisation et de suivi utilisateur.