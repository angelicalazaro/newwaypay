# NewWayPay — AngularJS Legacy

Application bancaire de paiement fractionné 3x/4x, construite avec AngularJS 1.8.3.

Cette branche représente l'état **avant migration** vers Angular 21. Elle sert de point de comparaison pour illustrer la stratégie de migration, les patterns AngularJS utilisés, et les gains obtenus après modernisation.

## Stack technique

| Technologie | Version |
|-------------|---------|
| AngularJS | 1.8.3 |
| angular-route | 1.8.3 |
| angular-animate | 1.8.3 |
| Node.js | ≥ 18 |

## Lancement

```bash
npm install
npm start
```

L'application s'ouvre sur `http://localhost:8080`.

**Identifiants de démonstration :**
- Email : `angelica@newwaypay.fr`
- Mot de passe : `demo1234`

## Architecture

```
├── index.html
├── app/
│   ├── app.module.js
│   ├── app.config.js
│   ├── core/
│   │   ├── nav.controller.js
│   │   └── services/
│   │       ├── auth.service.js
│   │       ├── payment.service.js
│   │       └── notification.service.js
│   ├── features/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── payment-tunnel/
│   │   └── transactions/
│   └── shared/
│       ├── directives/
│       └── filters/
└── styles/
    └── main.css
```

## Fonctionnalités

- Authentification (session storage)
- Dashboard avec solde et transactions récentes
- Tunnel de paiement fractionné 3x/4x avec stepper
- Liste des transactions avec filtres et recherche
- Calcul dynamique des échéances

## Patterns AngularJS utilisés

- Controllers (`$scope`)
- Services/Factories (injection de dépendances via `$injector`)
- Directives personnalisées
- Filters personnalisés
- Routing avec `ngRoute` et `resolve` pour les guards
- Data binding bidirectionnel (`ng-model`)

## Migration → Angular 21

Voir la branche `main` pour la version Angular 21 avec :
- Standalone components
- Signals & `computed()`
- `inject()` function
- Reactive Forms
- `HttpClient` avec interceptors fonctionnels
- Lazy loading
- Tests Jest + Playwright
