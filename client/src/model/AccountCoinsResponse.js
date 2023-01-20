/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BlockIdentifier from './BlockIdentifier';
import Coin from './Coin';

/**
 * The AccountCoinsResponse model module.
 * @module model/AccountCoinsResponse
 * @version 1.4.13
 */
class AccountCoinsResponse {
    /**
     * Constructs a new <code>AccountCoinsResponse</code>.
     * AccountCoinsResponse is returned on the /account/coins endpoint and includes all unspent Coins owned by an AccountIdentifier.
     * @alias module:model/AccountCoinsResponse
     * @param blockIdentifier {module:model/BlockIdentifier} 
     * @param coins {Array.<module:model/Coin>} If a blockchain is UTXO-based, all unspent Coins owned by an account_identifier should be returned alongside the balance. It is highly recommended to populate this field so that users of the Rosetta API implementation don't need to maintain their own indexer to track their UTXOs.
     */
    constructor(blockIdentifier, coins) { 
        
        AccountCoinsResponse.initialize(this, blockIdentifier, coins);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockIdentifier, coins) { 
        obj['block_identifier'] = blockIdentifier;
        obj['coins'] = coins;
    }

    /**
     * Constructs a <code>AccountCoinsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountCoinsResponse} obj Optional instance to populate.
     * @return {module:model/AccountCoinsResponse} The populated <code>AccountCoinsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountCoinsResponse();

            if (data.hasOwnProperty('block_identifier')) {
                obj['block_identifier'] = BlockIdentifier.constructFromObject(data['block_identifier']);
            }
            if (data.hasOwnProperty('coins')) {
                obj['coins'] = ApiClient.convertToType(data['coins'], [Coin]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountCoinsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountCoinsResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AccountCoinsResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `block_identifier`
        if (data['block_identifier']) { // data not null
          BlockIdentifier.validateJSON(data['block_identifier']);
        }
        if (data['coins']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['coins'])) {
                throw new Error("Expected the field `coins` to be an array in the JSON data but got " + data['coins']);
            }
            // validate the optional field `coins` (array)
            for (const item of data['coins']) {
                Coin.validateJsonObject(item);
            };
        }

        return true;
    }


}

AccountCoinsResponse.RequiredProperties = ["block_identifier", "coins"];

/**
 * @member {module:model/BlockIdentifier} block_identifier
 */
AccountCoinsResponse.prototype['block_identifier'] = undefined;

/**
 * If a blockchain is UTXO-based, all unspent Coins owned by an account_identifier should be returned alongside the balance. It is highly recommended to populate this field so that users of the Rosetta API implementation don't need to maintain their own indexer to track their UTXOs.
 * @member {Array.<module:model/Coin>} coins
 */
AccountCoinsResponse.prototype['coins'] = undefined;

/**
 * Account-based blockchains that utilize a nonce or sequence number should include that number in the metadata. This number could be unique to the identifier or global across the account address.
 * @member {Object} metadata
 */
AccountCoinsResponse.prototype['metadata'] = undefined;






export default AccountCoinsResponse;

