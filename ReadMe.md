# Gestion des Thèmes avec JavaScript

Ce projet est une implémentation simple de la gestion des thèmes de couleur pour une page web, en utilisant JavaScript et le stockage local (localStorage).

## Fonctionnalités

- Permet de changer le thème de la page à l'aide de boutons.
- Sauvegarde le choix de l'utilisateur dans le localStorage pour maintenir le thème sélectionné même après actualisation ou redémarrage du navigateur.
- Thèmes disponibles :
  - Blanc
  - Noir
  - Rouge
  - Vert
  - Bleu
  - Jaune
  - Orange
  - Violet
  - Rose

## Structure du Projet

### Variables

Les principales variables sont définies pour :

- Les éléments HTML (`header`, `h1`, `h2`, `p`).
- Les boutons représentant chaque couleur (par exemple, `.white`, `.black`, etc.).
- La récupération du thème actuel depuis le localStorage.

### Fonctions

Chaque fonction (`colorWhite`, `colorBlack`, etc.) :

- Applique le style correspondant au thème sélectionné.
- Met à jour le localStorage avec le thème choisi pour une persistance entre les sessions.

### Gestion des Événements

Chaque bouton de couleur est associé à un événement `click` qui déclenche la fonction correspondante, modifiant ainsi le thème.

### Exemple : Fonction `colorWhite`

Voici un exemple de fonction pour le thème blanc :

```javascript
function colorWhite() {
  header.style.backgroundColor = "#0a3981";
  header.style.color = "white";
  document.body.style.backgroundColor = "white";
  p.style.color = "black";
  h2.style.color = "black";
  choix.style.color = "black";
  localStorage.setItem("theme", "white");
}
```

## Comment Utiliser ce Code

1. **Intégration dans une page web** :

   - Ajoutez ce script JavaScript à votre fichier HTML via une balise `<script>` ou en tant que fichier externe.

2. **Structure HTML attendue** :
   Assurez-vous que les éléments suivants existent dans votre HTML :

   - Un élément `<header>`, `<h1>`, `<h2>`, `<p>`, etc.
   - Des boutons avec des classes correspondant aux couleurs : `.white`, `.black`, `.red`, etc.

   Exemple de boutons pour changer de thème :

   ```html
   <button class="white">Blanc</button>
   <button class="black">Noir</button>
   <button class="red">Rouge</button>
   <!-- Ajoutez les autres boutons selon vos besoins -->
   ```

3. **Testez les Thèmes** :
   - Cliquez sur les boutons pour changer de thème.
   - Rechargez la page pour vérifier que le thème sélectionné est bien sauvegardé.

## Améliorations Possibles

- Ajouter des transitions pour rendre les changements de thème plus fluides.
- Inclure une option pour réinitialiser le thème par défaut.
- Ajouter un aperçu en direct des thèmes au survol des boutons.
- Créer une version accessible pour les utilisateurs avec des déficiences visuelles.

## Technologies Utilisées

- **HTML** pour la structure.
- **CSS** pour les styles (non inclus dans ce fichier).
- **JavaScript** pour la logique et la gestion des thèmes.

---
