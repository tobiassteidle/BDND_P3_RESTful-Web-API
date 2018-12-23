# RESTful WebAPI for Private Blockchain

In this project I created classes to manage my private blockchain, to be able to persist my blochchain I used LevelDB.  
Additionally a RESTful WebAPI was added to interact with the blockchain via webservice.

## Project dependencies
[LevelDB](http://leveldb.org/) - Key-/Value Store  
[crypto-js](https://www.npmjs.com/package/crypto-js) - JavaScript library of crypto standards.  
[boom](https://github.com/hapijs/boom) - HTTP-friendly error objects  
[hapi](https://hapijs.com/) - Framework for building applications and services

## Setup project 

To setup the project for review do the following:
1. Download the project.
2. Run command __npm install__ to install the project dependencies.
3. Run command __node app.js__ in the root directory.

The service was started correctly if you see the following output on the console:
```
Server running at: http://localhost:8000
```

## Endpoint documentation

#### GET Block Endpoint
##### Description
Resolves Block as JSON for the requested block height.
   
##### Request / Response
**HTTP-GET:** ```http://localhost:8000/block/{index}```  
**Parameters:** 
- {index} Block height

**Sample Request:** 
```http://localhost:8000/block/0```
  
**Sample Response:**
```
{  
   "hash":"1e39dc7adb3dbfb55b229f1a8a0aad21fac15608abcba53c2ba4fa05af80964b",
   "height":0,
   "body":"First block in the chain - Genesis block",
   "time":"1545583517",
   "previousBlockHash":""
} 
```

----

#### POST Block Endpoint
##### Description
Append block to blockchain.

**HTTP-POST:** ```http://localhost:8000/block```  
**Request Body (example):**
``` 
{
      "body": "Testing block with test string data"
}
```

**Sample Response:**
```
{  
   "hash":"1e39dc7adb3dbfb55b229f1a8a0aad21fac15608abcba53c2ba4fa05af80964b",
   "height":0,
   "body":"First block in the chain - Genesis block",
   "time":"1545583517",
   "previousBlockHash":""
} 
```
