const BlockClass = require('./Block.js');
const Boom = require('boom');
/**
 * Controller Definition to make routes work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController.
     * @param {*} server
     */
    constructor(server) {
        this.server = server;
        this.getBlockByIndex();
        this.postNewBlock();
    }

    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/block/:index"
     */
    getBlockByIndex() {
        this.server.route({
            method: 'GET',
            path: '/block/{index}',
            handler: (request, h) => {
                throw Boom.badRequest("Unknown block index");


                return 'Get Block, ' + encodeURIComponent(request.params.index) + '!';
            }
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/block"
     */
    postNewBlock() {
        this.server.route({
            method: 'POST',
            path: '/block',
            handler: (request, h) => {
                let payload = request.payload;

                // check of payload is available
                if(payload === null) {
                    throw Boom.badRequest('Payload must not be empty. No block created.');
                }

                try {
                    // get body from payload JSON
                    let body = JSON.parse(payload).body;

                    // if body undefined or null throw exception
                    if(body === undefined || body === null) {
                        throw Boom.badRequest('Unexpected Body or undefined.');
                    }

                    // create block
                    let block = new BlockClass.Block(JSON.parse(payload).body);

                    // return JSON for new block
                    return JSON.stringify(block);

                } catch (e) {
                    // throw "bad request" exception
                    if(e instanceof Boom) {
                        throw e;
                    }
                    throw Boom.badRequest('Unexpected Payload or invalid JSON.');
                }
            }
        });
    }
}

/**
 * Exporting the BlockController class
 * @param {*} server
 */
module.exports = (server) => { return new BlockController(server);}