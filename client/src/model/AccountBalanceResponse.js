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
import Amount from './Amount';
import BlockIdentifier from './BlockIdentifier';

/**
 * The AccountBalanceResponse model module.
 * @module model/AccountBalanceResponse
 * @version 1.4.13
 */
class AccountBalanceResponse {
    /**
     * Constructs a new <code>AccountBalanceResponse</code>.
     * An AccountBalanceResponse is returned on the /account/balance endpoint. If an account has a balance for each AccountIdentifier describing it (ex: an ERC-20 token balance on a few smart contracts), an account balance request must be made with each AccountIdentifier. The &#x60;coins&#x60; field was removed and replaced by by &#x60;/account/coins&#x60; in &#x60;v1.4.7&#x60;.
     * @alias module:model/AccountBalanceResponse
     * @param blockIdentifier {module:model/BlockIdentifier} 
     * @param balances {Array.<module:model/Amount>} A single account may have a balance in multiple currencies.
     */
    constructor(blockIdentifier, balances) { 
        
        AccountBalanceResponse.initialize(this, blockIdentifier, balances);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockIdentifier, balances) { 
        obj['block_identifier'] = blockIdentifier;
        obj['balances'] = balances;
    }

    /**
     * Constructs a <code>AccountBalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountBalanceResponse} obj Optional instance to populate.
     * @return {module:model/AccountBalanceResponse} The populated <code>AccountBalanceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountBalanceResponse();

            if (data.hasOwnProperty('block_identifier')) {
                obj['block_identifier'] = BlockIdentifier.constructFromObject(data['block_identifier']);
            }
            if (data.hasOwnProperty('balances')) {
                obj['balances'] = ApiClient.convertToType(data['balances'], [Amount]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountBalanceResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountBalanceResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AccountBalanceResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `block_identifier`
        if (data['block_identifier']) { // data not null
          BlockIdentifier.validateJSON(data['block_identifier']);
        }
        if (data['balances']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['balances'])) {
                throw new Error("Expected the field `balances` to be an array in the JSON data but got " + data['balances']);
            }
            // validate the optional field `balances` (array)
            for (const item of data['balances']) {
                Amount.validateJsonObject(item);
            };
        }

        return true;
    }


}

AccountBalanceResponse.RequiredProperties = ["block_identifier", "balances"];

/**
 * @member {module:model/BlockIdentifier} block_identifier
 */
AccountBalanceResponse.prototype['block_identifier'] = undefined;

/**
 * A single account may have a balance in multiple currencies.
 * @member {Array.<module:model/Amount>} balances
 */
AccountBalanceResponse.prototype['balances'] = undefined;

/**
 * Account-based blockchains that utilize a nonce or sequence number should include that number in the metadata. This number could be unique to the identifier or global across the account address.
 * @member {Object} metadata
 */
AccountBalanceResponse.prototype['metadata'] = undefined;






export default AccountBalanceResponse;

