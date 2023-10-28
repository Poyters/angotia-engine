# Angotia Engine

## What is Angotia?
Angotia is MMORPG browser game crafted from scratch by Rafał Kostecki.

## What is Angotia Engine?
Angotia Engine is a REST API service that provides most of the game functionalities like:
- User managment
- Characters managment
- Movement & collistions system
- And much more...

## Technology
### Database
**PostgreSQL** - The choice of SQL database was brilliant. The game stores a lot of data that is consistent and predictable. In this case, PostgreSQL benefit from the *ACID* model and *distributed transactions*.

### Backend 
**Nestjs** - Provides OOP architecture and built it solutions for common cases like Authentication, data injection, pipelines and so on.
**TypeORM** - Set up tools to work with SQL database. Without it, I would need to write them by hand.
**TypeScript** - I need to keep the data and types consistent.

### Authentication
**Keycloak** - I chose it because of the many customisation options and the ability to self-host so as not to be tied to one service provider.

### Others
**Angotia SDK** - It is a Software Development Kit created from scratch that provides common functions between Angotia microservices, such as contract, interfaces, tools and so on. I create it to do not copy same utils and data between microservices, and to have a singile source of truth in terms of contract, interfaces.
**Grafana&Prometheus** - I chose it because it's free and open source solution for monitoring and the ability to self-host so as not to be tied to one service provider.

