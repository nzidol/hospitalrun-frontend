/**
 * HospitalRunFHIRAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Resource
 */
class Resource extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.meta = this.constructor.getValue(obj.meta);
        this.implicitRules = this.constructor.getValue(obj.implicitRules);
        this.language = this.constructor.getValue(obj.language);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'meta', realName: 'meta', type: 'Meta' },
            { name: 'implicitRules', realName: 'implicitRules' },
            { name: 'language', realName: 'language' },
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
        return {
        };
    }
}

module.exports = Resource;