<!-- sources documentées (Reddit, avis clients, vidéos, articles…) -->
# Recherche JTBD – Application de flashcards pour développeurs débutants

## 1. Contexte du projet

### Problématique identifiée

Les développeurs débutants rencontrent souvent des difficultés à mémoriser les méthodes, leur syntaxe et leurs usages (ex : en Javascript, méthodes de tableau ou de string).

Même lorsque les notions sont comprises lors de l’apprentissage, elles sont fréquemment oubliées après quelques jours, ce qui pousse les apprenants à retourner régulièrement sur la documentation ou Google.

L’objectif du projet est donc d’évaluer si un format de révision rapide, simple et ciblé via des flashcards pourrait répondre à ce problème.

### Hypothèse produit

Une application minimaliste de flashcards de langage de développement, centrée sur les notions fondamentales et la répétition active, pourrait aider les développeurs débutants à mieux retenir les méthodes importantes et à gagner en autonomie.

---

# 2. Job To Be Done (JTBD)

## JTBD principal

> Quand j’apprends un langage de programmation, je veux réviser rapidement des notions clés afin de mieux mémoriser les méthodes et être plus autonome lorsque je code.

## Jobs secondaires

### Job fonctionnel

> Quand je révise un langage de programmation, je veux retrouver rapidement les notions essentielles afin de limiter les allers-retours constants vers la documentation.

### Job émotionnel

> Quand j’apprends un langage de programmation, je veux me sentir plus confiant dans mes connaissances afin de réduire la frustration liée à l’oubli des notions.

### Job social

> Quand je développe un projet, je veux retrouver plus facilement les méthodes utiles afin d’être plus fluide et crédible dans ma pratique.

---

# 3. Recherche documentée

L’objectif de cette recherche est de confronter l’hypothèse produit à des retours utilisateurs réels.

---

## Source 1 — Difficulté à retenir les méthodes (exemple avec JavaScript)

**Type de source :** discussion Reddit (`r/learnjavascript`)

**Lien :**  
[Discussion Reddit – “I learn JavaScript but then I forget it”](https://www.reddit.com/r/learnjavascript/comments/1ssekvu/i_learn_javascript_but_then_i_forget_it/?utm_source=chatgpt.com)

**Extrait pertinent :**

> “I still find myself googling basic syntax for array methods or string manipulation almost every day.”

**Ce que cela prouve :**

Cette discussion montre qu’un problème récurrent chez les développeurs débutants — **et parfois même intermédiaires** — concerne l’oubli des méthodes JavaScript, notamment les méthodes de tableau et de manipulation de string. Même après apprentissage, les utilisateurs continuent à rechercher fréquemment les mêmes notions. Cela valide l’existence d’un besoin de renforcement mémoriel ciblé.

---

## Source 2 — Dépendance à la documentation MDN (exemple avec JavaScript)

**Type de source :** discussion Reddit (`r/learnjavascript`)

**Lien :**  
[Discussion Reddit – apprentissage JavaScript et oubli des notions](https://www.reddit.com/r/learnjavascript/comments/1ssekvu/i_learn_javascript_but_then_i_forget_it/?utm_source=chatgpt.com)

**Extrait pertinent :**

> “You will eventually become very quick at opening the documentation (MDN is my docu of choice for JS).”

**Ce que cela prouve :**

Les apprenants JavaScript développent souvent une forte dépendance à la documentation, en particulier MDN, pour retrouver des informations sur des méthodes qu’ils connaissent mais ne retiennent pas complètement. Cela suggère qu’un outil de révision rapide avec un lien direct vers MDN (comme prévu dans le MVP) répond à un comportement réel observé chez la cible.

---

## Source 3 — Intérêt des flashcards pour les concepts de programmation

**Type de source :** discussion Reddit (`r/learnprogramming`)

**Lien :**  
[Discussion Reddit – Learning programming with flashcards](https://www.reddit.com/r/learnprogramming/comments/1p8d0oj/learning_programming_with_flashcards_how_do_you/?utm_source=chatgpt.com)

**Extrait pertinent :**

> “Flashcards are suited to straightforward questions with simple, concise answers.”

**Ce que cela prouve :**

La discussion souligne une limite importante mais intéressante : les flashcards ne sont pas adaptées à des concepts complexes ou à la compréhension globale d’une architecture logicielle, mais fonctionnent bien pour des connaissances courtes et finies (syntaxe, APIs, méthodes, concepts isolés). Cela renforce la pertinence du positionnement du MVP, centré sur des notions de développement ciblées (méthodes Array, String, etc.) plutôt que sur des concepts avancés.

---

## Source 4 — Difficulté spécifique à retenir les comportements des méthodes (exemple avec JavaScript)

**Type de source :** question Stack Overflow

**Lien :**  
[Stack Overflow – remembering JavaScript array methods behavior](https://stackoverflow.com/questions/54836118/how-to-remember-if-a-method-mutates-the-original-array/54836218?utm_source=chatgpt.com)

**Extrait pertinent :**

> “I always forget if methods like push() or reverse() mutate the original array.”

**Ce que cela prouve :**

Même des notions fondamentales comme le comportement des méthodes de tableau (mutation ou non du tableau initial) sont fréquemment oubliées. Cette source renforce l’idée qu’un outil de micro-révision ciblée peut aider à ancrer durablement des connaissances techniques précises.

---

## Source 5 — Usage des flashcards pour l’apprentissage technique

**Type de source :** plateforme de flashcards orientée programmation

**Lien :**  
[Nemorize – Programming Flashcards](https://nemorize.com/topics/programming-flashcards?utm_source=chatgpt.com)

**Extrait pertinent :**

> “Programming requires remembering syntax, APIs, design patterns, and best practices.”

**Ce que cela prouve :**

L’existence d’outils spécialisés dans les flashcards de programmation suggère déjà un besoin marché autour de la mémorisation active appliquée au développement logiciel. Cependant, ces solutions restent souvent généralistes ou riches en fonctionnalités, laissant de la place à une approche plus simple et focalisée sur les développeurs débutants JavaScript.

---

# 4. Synthèse des enseignements

Les recherches documentées font apparaître plusieurs difficultés récurrentes chez les développeurs débutants :

- oubli fréquent des méthodes de langages de développement ;
- difficulté à retenir la syntaxe dans le temps ;
- consultation répétée de la documentation MDN ;
- besoin de répétition active pour renforcer la mémorisation ;
- pertinence des flashcards pour des connaissances simples et ciblées.

En parallèle, les limites observées montrent qu’une application de flashcards ne doit pas chercher à enseigner des concepts complexes ou des architectures complètes, mais plutôt renforcer des connaissances courtes et actionnables.

---

# 5. Opportunité produit identifiée

Une application de flashcards de notions de développement simple et ciblée pourrait répondre à un besoin réel observé chez les développeurs débutants.

Le MVP proposé répond à plusieurs besoins identifiés :

- réviser rapidement ;
- mémoriser des méthodes et notions clés ;
- limiter les retours constants à la documentation ;
- apprendre via de courtes sessions ;
- accéder directement à MDN pour approfondir.

Le choix d’un produit volontairement minimaliste (sans authentification (pour l'instant - MVP), favoris ou gamification dans un premier temps) semble cohérent avec le besoin principal identifié : **réviser vite et efficacement**.

---

# 6. JTBD final retenu

> Quand j’apprends un langage de programmation, je veux réviser rapidement les notions importantes afin de mieux retenir les méthodes et gagner en autonomie lorsque je développe.