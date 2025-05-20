# Le constructeur

- Reprenez la `class User` et la modifier pour qu'on ait un constructeur qui assigne `name` et `firstName`
- Ajoutez `profession `au constructeur mais rendez-le optionnel.
- Vous devrez rechercher comment rendre un argument optionnel.
- Modifiez la méthode `fullName` en conséquence.
- Console loguer le résultat.

**Rendre un argument optionnel :**  
On assigne simplement un défaut dans le constructeur : 
```javascript
constructor(name, firstName, profession = null) {
    // ...
    this.#profession = profession;
}
```

> On peut par exemple utiliser cette technique quand un utilisateur crée un compte sur un site internet.  
> On lui assigne un avatar par défaut et par la suite il est libre de le modifier ou non sur sa page de profil.
