/**
 * HospitalRunFHIRAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Response
 */
class Response extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.status = this.constructor.getValue(obj.status);
        this.location = this.constructor.getValue(obj.location);
        this.etag = this.constructor.getValue(obj.etag);
        this.lastModified = this.constructor.getValue(obj.lastModified);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'status', realName: 'status' },
            { name: 'location', realName: 'location' },
            { name: 'etag', realName: 'etag' },
            { name: 'lastModified', realName: 'lastModified' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Response;
