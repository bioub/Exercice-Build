# Exercice Build

## Principe

Ecrire un script de build avec async/await

## Avant de commencer

* Installer les dépendances : `npm install`
* Pour démarrer le serveur de dev : `npm run serve:dev`
* Pour builder : `npm run build`
* Pour démarrer le serveur de prod (fichiers buildés) : `npm run serve:prod`


## Etapes

### 1 - Mettre à jour les dépendances avec npm

Utiliser `npm audit` pour connaître les dépendances directes ou indirectes dont une version contient une faille de sécurité connue.

Utiliser `npm outdated` pour connaître les dépendances ayant besoin d'être mises à jour parmi nos dépendances directes : `del`, `fs-extra`, `http-server`, `md5` `uglify-es`.

Mettre à jour vers la version `WANTED` en utilisant `npm update`.

Supprimer la bibliothèque `del` avec la commande `npm rm`, pour afficher l'aide `npm rm --help`. Supprimer ensuite l'`import` de `del` dans le fichier `build.js`

Supprimer la bibliothèque `fs-extra` avec la commande `npm rm`, remplacer ensuite l'`import` de `fs-extra` par `import fs from 'node:fs/promises';`

Remplacer `uglify-es` par `terser` (attention à l'installer dans les `devDependencies`. Remplacer l'`import` de `uglify-es` par `import { minify } from 'terser';`

Migrer les dépendances restantes via `npm install`.

### 1 (alternative) - Mettre à jour les dépendances avec Yarn

Migrer le `package-lock.json` en `yarn.lock` avec `yarn import`

Utiliser `yarn audit` pour connaître les dépendances directes ou indirectes dont une version contient une faille de sécurité connue.

Utiliser `yarn outdated` pour connaître les dépendances ayant besoin d'être mises à jour parmi nos dépendances directes : `del`, `fs-extra`, `http-server`, `md5` `uglify-es`.

Mettre à jour vers la version `WANTED` en utilisant `yarn upgrade` ou  `yarn upgrade-interactive`.

Supprimer la bibliothèque `del` avec la commande `yarn remove`, pour afficher l'aide `npm rm --help`. Supprimer ensuite l'`import` de `del` dans le fichier `build.js`

Supprimer la bibliothèque `fs-extra` avec la commande `yarn remove`, remplacer ensuite l'`import` de `fs-extra` par `import fs from 'node:fs/promises';`

Remplacer `uglify-es` par `terser` (attention à l'installer dans les `devDependencies`. Remplacer l'`import` de `uglify-es` par `import { minify } from 'terser';`

Migrer les dépendances restantes via `yarn add [package]`.

### Bonus : TypeScript

Installer et configurer TypeScript
Renommer le fichier build.ts et faire l'exercice en TypeScript

### 2 - Supprimer le dossier dist (s'il existe)

Vous pouvez utiliser la méthode `rm` de `node:fs/promises` avec les options `force` et `recursive` (pas besoin de tester qu'il existe, `rm` ne génèrant pas d'erreur lorsque le dossier/fichier n'existe pas)

### 3 - Créer le dossier dist

Vous pouvez utiliser la méthode `mkdir` de `node:fs/promises`

### 4 - Builder le JS

Copier le contenu des fichiers `src/js/horloge.js` et `src/js/index.js` dans un fichier `dist/app.js`, dans cet ordre.

### 5 - Builder le HTML

Copier le fichier `src/index.html` dans `dist/index.html` en remplaçant les balises script de dev par celle de prod (`app.js`).

Indication : readFile retourne un type `Buffer`, pour le convertir en `string` : `buffer.toString()`

### 6 (Optionnel) - Minifier le JS

Utiliser la bibliothèque `terser` pour réduire le poids du fichier js de prod : [https://www.npmjs.com/package/terser#api-reference](https://www.npmjs.com/package/terser#api-reference)

### 7 (Optionnel) - Renommer le fichier JS

Utiliser le module md5 pour signer le fichier `app.js` et remplacer son nom par le checksum md5 (pour invalider le cache), exemple : `app.5da8aa7126701c9840f99f8e9fa54976.js`

### 8 (Optionnel) - Ajouter des options

Installer et utiliser `yargs` ou `minimist` pour qu'on puisse lancer la commande avec les options suivantes :

* `--minify` pour minifier le JS ou non
* `--hash` pour ajouter le checksum dans le nom du fichier ou non

Exemple : `node build --minify --hash`
