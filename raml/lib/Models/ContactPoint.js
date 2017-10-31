/**
 * HospitalRunFHIRAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const Element = require('./Element');

/**
 * Creates an instance of ContactPoint
 */
class ContactPoint extends Element {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.system = this.constructor.getValue(obj.system);
        this.value = this.constructor.getValue(obj.value);
        this.use = this.constructor.getValue(obj.use);
        this.rank = this.constructor.getValue(obj.rank);
        this.period = this.constructor.getValue(obj.period);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'system', realName: 'system' },
            { name: 'value', realName: 'value' },
            { name: 'use', realName: 'use' },
            { name: 'rank', realName: 'rank' },
            { name: 'period', realName: 'period', type: 'Period' },
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

module.exports = ContactPoint;
