/**
 * HospitalRunFHIRAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Identifier
 */
class Identifier extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.use = this.constructor.getValue(obj.use);
        this.type = this.constructor.getValue(obj.type);
        this.system = this.constructor.getValue(obj.system);
        this.value = this.constructor.getValue(obj.value);
        this.period = this.constructor.getValue(obj.period);
        this.assigner = this.constructor.getValue(obj.assigner);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'use', realName: 'use' },
            { name: 'type', realName: 'type', type: 'CodeableConcept' },
            { name: 'system', realName: 'system' },
            { name: 'value', realName: 'value' },
            { name: 'period', realName: 'period', type: 'Period' },
            { name: 'assigner', realName: 'assigner', type: 'Reference' },
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

module.exports = Identifier;
