# Example Koa API

A small example Koajs api for resizing images

## Getting Started

### Docker

`docker-compose up`

### Local

`npm install`

`npm run start`

or 

`npm run dev`

# App Structure

```
▾  api/
  ▸  middleware/ - App wide middleware (error handling, logging, etc)
  ▾  modules/  - Pluggable api modules, can contain own config, middleware, etc should be able to be freestanding service
    ▾  images/ - Example module
      ▸  controllers/
      ▸  static/
        config.js - module level config
        index.js
        router.js - module router
    api.js - loads middleware/routes
    config.js - app wide config variables
    index.js - exports the api
    router.js - combines module routers
index.js
```


# Resize API docs

## GET /images/original
Returns list of original image files

Example Response
```json
{
  "count": 18,
    "files": [
      "1 - 4zL2hE3.jpg",
      "10 - jq49d2G.jpg",
      "11 - a3QtSZq.png",
      "12 - 1OnHTQJ.jpg",
      "13 - PCnd2nH.jpg",
      "14 - xaWVJ49.jpg",
      "15 - Vd5Xtcq.jpg",
      "16 - JnMZrYR.jpg",
      "17 - GJ8Itkd.jpg",
      "18 - IpiBT05.jpg",
      "2 - LNEsjiS.jpg",
      "3 - HnP0NkO.jpg",
      "4 - FKP0jSU.jpg",
      "5 - S5CUKLb.png",
      "6 - q1ivEZz.png",
      "7 - vWuK4DC.png",
      "8 - IRcq4LA.gif",
      "9 - d6oCCvP.gif"
    ]
}
```

## GET /images/original/:imageName
Returns image file

## GET /images/resized
Returns list of resized image files

Example Response:
```json
{
  "count": 11,
    "files": [
      "1 - 4zL2hE3-w1-h11.jpg",
    "1 - 4zL2hE3-w10-h14.jpg",
    "1 - 4zL2hE3-w10-h390.jpg",
    "1 - 4zL2hE3-w1000-h1000.jpg",
    "1 - 4zL2hE3-w20-h11.jpg",
    "1 - 4zL2hE3-w20-h21.jpg",
    "1 - 4zL2hE3-w200-h21.jpg",
    "1 - 4zL2hE3-w200-h2100.jpg",
    "1 - 4zL2hE3-w25-h11.jpg",
    "1 - 4zL2hE3-w50-h20.jpg",
    "1 - 4zL2hE3-w50-hnull.jpg"
    ]
}
```

## POST /images/resized
Creates a new resized image based on original

* `imageName`: Name of original image
* `resizeOptions`
  * `width`: Desired width (optional)
  * `height`: Desired height (optional)
  * `fit`: optional determines how to scale the image
    * `cover`: Crop to cover both provided dimensions (the default).
    * `contain`: Embed within both provided dimensions.
    * `fill`: Ignore the aspect ratio of the input and stretch to both provided dimensions.
    * `inside`: Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.
    * `outside`: Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified. Some of these values are based on the object-fit CSS property.

Example Request:
```json
{
  "imageName": "1 - 4zL2hE3.jpg",
    "resizeOptions": {
      "width": 100,
      "height": 100,
      "fit": "inside"
    }
}
```

Example Response: 
```json
{
    "resizedImage": "1 - 4zl2he3-w72-h100.jpg",
    "format": "jpeg",
    "width": 72,
    "height": 100,
    "channels": 3,
    "premultiplied": false,
    "size": 2324
}
```

## GET /images/resized/:resizedImageName

Returns image file
