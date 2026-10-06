# Règles de gestion:

## Stack :

- RG1: une stack (existe si elle) peut posséder 0 catégorie (elle vient d'être créée)
- RG2: une stack (existe si elle) peut posséder plusieurs catégories

## Category :

- RG3: une catégorie (existe si elle)  est possédée par 1 et 1 seule stack (choix métier)
- RG4: une catégorie (existe si elle) peut contenir 0 flashcard (elle vient d'être créée)
- RG5: une catégorie (existe si elle) peut contenir plusieurs flashcards

## Flashcard :

- RG5: une flashcard (existe si elle) est contenue par 1 et 1 seule catégorie (choix métier)
- RG6: une flashcard (existe si elle) peut être comprise par 0 utilisateur
- RG7: une flashcard (existe si elle) peut être comprise par plusieurs utilisateurs
- RG8: une flashcard (existe si elle) peut être mise en favoris par 0 utilisateur
- RG9: une flashcard (existe si elle) peut être mise en favoris par plusieurs utilisateurs

## User :

- RG10: un utilisateur (existe s'il) peut comprendre 0 flashcard
- RG11: un utilisateur (existe s'il) peut comprendre plusieurs flashcards
- RG12: un utilisateur (existe s'il) peut mettre en favoris 0 flashcard
- RG13: un utilisateur (existe s'il) peut mettre en favoris plusieurs flashcards
- RG14: un utilisateur (existe s'il) est représenté par 1 et 1 seul rôle (choix métier)

## Role

- RG15: un rôle (existe s'il) représente 0 utilisateur (rôle vient d'être créé et n'est pas encore assigné)
- RG16: un rôle (existe s'il) représente plusieurs utilisateurs