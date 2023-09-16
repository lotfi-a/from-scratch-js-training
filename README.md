# ⚙️ Les commandes

1. 👀 **Watch CSS Changes** with `npm run css:watch`
    - Cette commande utilise Sass pour surveiller et compiler automatiquement le fichier `index.scss` de `./lib/styles` vers `./dist/styles/index.css` lors des modifications.


2. 🛠️ **Build with Webpack** with `npm run webp:build`
    - Cette commande lance webpack pour construire l'application en utilisant la configuration especificée dans `webpack.config.js`.


3. 👀🛠️ **Watch and Build with Webpack** with `npm run webp:watch`
    - Cette commande est similaire à `npm run webp:build`, mais elle active en plus le mode "watch" de webpack, ce qui signifie que webpack surveillera les changements dans les fichiers source et recompilera automatiquement l'application lorsque nécessaire.