# About The Author module from goodreads

>  The module will display author info of the book that is displayed. Specifically, this module will
    display the author's name, number of followers, and a biography. Also, the top 5 books of that
    author will display along with a pop-up window with detailed book information that displays
    if the user hovers over a particular book title.

## Related Projects

  - https://github.com/rpt12-fec-ateam/HeathersService
  - https://github.com/rpt12-fec-ateam/AnaitsService
  - https://github.com/rpt12-fec-ateam/AndrewsService
  - https://github.com/rpt12-fec-ateam/AarushisService

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Pleaes run the following "package.json" scripts to start the application;<br>
1. `npm run build` to start Webpack.<br>
2. `npm run start` to start the Node server.<br>
3. `sequelize db:seed:all` to add fake data to the database.<br>
4. `sequelize db:seed:undo` to remove all fake data from the database.<br>

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API Endpoints

**URL:** /items<br>
**Description:** This example retrieves current item name of the specific item page.<br>
**API Response:**<br>
```
{
  "id":1,
  "itemName":"Rustic Frozen Salad",
  "createdAt":"2019-03-28T04:04:32.000Z",
  "updatedAt":"2019-03-28T04:04:32.000Z"
}

```

**URL:** /images<br>
**Description:** This example retrives a three images of current item on the item page, and has itemId for one to many relationship<br>
**API Response:**<br>
```
{
  "id":1,
  "url":"["https://s3.amazonaws.com/dailyharvest.images/images/image-1ncreased-1Shk_PkNkNw.jpg",
          "https://s3.amazonaws.com/dailyharvest.images/images/image-alexischloe-tDcOX3rOC_M.jpg",
          "https://s3.amazonaws.com/dailyharvest.images/images/image-christine_siracusa-bypcCMcIoVE.jpg"]",
  "createdAt":"2019-03-28T04:04:32.000Z",
  "updatedAt":"2019-03-28T04:04:32.000Z",
  "itemId":62
}

```

**URL:** /beneftis<br>
**Description:** This example retrieves the three fake benefitsType<br>
**API Response:**<br>
```
{
  "id":1,
  "benefitType":"["Workout Recovery","Stress Relief","Digestive Support"]",
  "createdAt":"2019-04-02T01:30:47.000Z",
  "updatedAt":"2019-04-02T01:30:47.000Z"
}

```
**URL:** /item-benefits<br>
**Description:** This example retrieves the relation between item, and benefitsType by ID<br>
**API Response:**<br>
```
{
  "id":1,
  "benefitsId":"92",
  "itemId":56,
  "createdAt":"2019-04-02T01:30:47.000Z",
  "updatedAt":"2019-04-02T01:30:47.000Z"
}

```
