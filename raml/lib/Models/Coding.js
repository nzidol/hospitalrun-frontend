/**
 * HospitalRunFHIRAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Coding
 */
class Coding extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.system = this.constructor.getValue(obj.system);
        this.version = this.constructor.getValue(obj.version);
        this.code = this.constructor.getValue(obj.code);
        this.display = this.constructor.getValue(obj.display);
        this.userSelected = this.constructor.getValue(obj.userSelected);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'system', realName: 'system' },
            { name: 'version', realName: 'version' },
            { name: 'code', realName: 'code' },
            { name: 'display', realName: 'display' },
            { name: 'userSelected', realName: 'userSelected' },
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

module.exports = Coding;
