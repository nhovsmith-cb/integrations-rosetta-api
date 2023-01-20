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
import AccountIdentifier from './AccountIdentifier';
import Operation from './Operation';

/**
 * The ConstructionParseResponse model module.
 * @module model/ConstructionParseResponse
 * @version 1.4.13
 */
class ConstructionParseResponse {
    /**
     * Constructs a new <code>ConstructionParseResponse</code>.
     * ConstructionParseResponse contains an array of operations that occur in a transaction blob. This should match the array of operations provided to &#x60;/construction/preprocess&#x60; and &#x60;/construction/payloads&#x60;.
     * @alias module:model/ConstructionParseResponse
     * @param operations {Array.<module:model/Operation>} 
     */
    constructor(operations) { 
        
        ConstructionParseResponse.initialize(this, operations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operations) { 
        obj['operations'] = operations;
    }

    /**
     * Constructs a <code>ConstructionParseResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionParseResponse} obj Optional instance to populate.
     * @return {module:model/ConstructionParseResponse} The populated <code>ConstructionParseResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConstructionParseResponse();

            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [Operation]);
            }
            if (data.hasOwnProperty('signers')) {
                obj['signers'] = ApiClient.convertToType(data['signers'], ['String']);
            }
            if (data.hasOwnProperty('account_identifier_signers')) {
                obj['account_identifier_signers'] = ApiClient.convertToType(data['account_identifier_signers'], [AccountIdentifier]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConstructionParseResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionParseResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ConstructionParseResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['operations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['operations'])) {
                throw new Error("Expected the field `operations` to be an array in the JSON data but got " + data['operations']);
            }
            // validate the optional field `operations` (array)
            for (const item of data['operations']) {
                Operation.validateJsonObject(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['signers'])) {
            throw new Error("Expected the field `signers` to be an array in the JSON data but got " + data['signers']);
        }
        if (data['account_identifier_signers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['account_identifier_signers'])) {
                throw new Error("Expected the field `account_identifier_signers` to be an array in the JSON data but got " + data['account_identifier_signers']);
            }
            // validate the optional field `account_identifier_signers` (array)
            for (const item of data['account_identifier_signers']) {
                AccountIdentifier.validateJsonObject(item);
            };
        }

        return true;
    }


}

ConstructionParseResponse.RequiredProperties = ["operations"];

/**
 * @member {Array.<module:model/Operation>} operations
 */
ConstructionParseResponse.prototype['operations'] = undefined;

/**
 * [DEPRECATED by `account_identifier_signers` in `v1.4.4`] All signers (addresses) of a particular transaction. If the transaction is unsigned, it should be empty.
 * @member {Array.<String>} signers
 */
ConstructionParseResponse.prototype['signers'] = undefined;

/**
 * @member {Array.<module:model/AccountIdentifier>} account_identifier_signers
 */
ConstructionParseResponse.prototype['account_identifier_signers'] = undefined;

/**
 * @member {Object} metadata
 */
ConstructionParseResponse.prototype['metadata'] = undefined;






export default ConstructionParseResponse;

