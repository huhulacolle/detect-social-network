# Comment contribuer

## Prérequis

- [Docker](https://www.docker.com/products/docker-desktop)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Extension Remote - Containers pour Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Étapes pour contribuer

1. **Forker le projet** : Cliquez sur le bouton 'Fork' en haut à droite de la page du projet pour créer une copie du projet sur votre compte GitHub.

2. **Cloner le projet** : Clonez le fork sur votre machine locale. Utilisez la commande `git clone` suivie de l'URL de votre fork.

3. **Ouvrir le projet dans un conteneur de développement** : Ouvrez le projet dans Visual Studio Code. Une notification devrait apparaître en bas à droite vous proposant d'ouvrir le projet dans un conteneur. Cliquez sur 'Ouvrir dans un conteneur'. Si la notification n'apparaît pas, vous pouvez ouvrir la palette de commandes (Ctrl+Shift+P) et sélectionner 'Remote-Containers: Open Folder in Container...'.

4. **Installer les dépendances** : Une fois que le conteneur est lancé, ouvrez un terminal dans Visual Studio Code (Terminal > Nouveau terminal) et exécutez `npm install` pour installer les dépendances du projet.

5. **Créer une nouvelle branche** : Créez une nouvelle branche pour votre contribution avec la commande `git checkout -b nom-de-votre-branche`.

6. **Faire vos modifications** : Apportez les modifications nécessaires au code.

7. **Soumettre une Pull Request** : Une fois que vous avez terminé vos modifications, poussez votre branche sur GitHub (`git push origin nom-de-votre-branche`) et soumettez une Pull Request sur le dépôt original.

Merci pour votre contribution !