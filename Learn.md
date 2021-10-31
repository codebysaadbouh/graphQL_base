## Learning by doing GraphQL


>   Contrairement à l'architecture RESTFUL traditionnelle, où un point de terminaison renvoie un ensemble de données désignées par l'API, que vous le souhaitiez ou non, GraphQL vous permet de sélectionner les données exactes que vous souhaitez parmi celles fournies par l'API. 

###  Explication des termes 

-   **Schemas & Types** : Le schéma définit la structure des données qui peuvent être interrogées tandis que le type définit le format des données comme le type de données que nous connaissons déjà. 

-   **Resolver** : Une fonction sur un serveur GraphQL qui est responsable de la récupération des données pour un seul champ ou pour le schéma entier.

-   **Query & Mutation** : Ce sont des types GraphQL spéciaux. Query représente la demande GET dans l'API REST tandis que Mutation représente les demandes POST, PUT, DELETE dans l'API REST.

-   **Context** : Le contexte est un objet global dans GraphQL. Les données disponibles dans le contexte sont partagées entre tous les Resolvers. 


> Il existe un certain nombre de bibliothèques qui implémentent GraphQL, dans cet article, j'utiliserai Apollo GraphQL.


### Les resolvers 

> #### Structures : 
```
 register(root, args, context, info) {

}
```

-    **root*** : C'est le résultat du résolveur parent. Nous verrons l'application plus tard.

-   **args** : Les arguments ou les données fournis par la requête graphQL. Cela peut être vu comme la charge utile de la requête dans l'API REST.

-   **context** : Un objet disponible pour tous les résolveurs. Toutes les données qui doivent être globalement accessibles à tous les résolveurs sont placées dans le contexte. Par exemple, nous pouvons passer les modèles Sequelize au contexte.

-   **info** : Un objet qui contient des informations spécifiques à la requête correcte. Ceci n'est utile que dans les cas avancés.



```
Source : https://dev.to/nedsoft/build-api-with-graphql-node-js-and-sequelize-5e8e
```