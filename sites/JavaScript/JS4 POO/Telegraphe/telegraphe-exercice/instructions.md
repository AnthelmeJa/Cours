# Télégraphe

## Fourni
let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
let codeMorse = [
  ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..",
  ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.",
  "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
  "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.",
  "-----"
];
****IMPORTANT :****
Les lettres/chiffres des deux tableaux ont le même index.

## Algorithme

1. Demander un texte à l'utilisateur (en minuscules)

2. Convertir le texte en code morse 
- Pour chaque lettre du texte

  - Rechercher dans l'alphabet l'index de la lettre
  - Récupérer le code morse de la lettre correspondant
  - L'ajouter dans le tableau résultat

- Fin Pour

3. Afficher dans la console le tableau avec le code morse du texte
