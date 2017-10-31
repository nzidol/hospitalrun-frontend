/**
 * HospitalRunFHIRAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const Element = require('./Element');

/**
 * Creates an instance of Address
 */
class Address extends Element {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.use = this.constructor.getValue(obj.use);
        this.type = this.constructor.getValue(obj.type);
        this.text = this.constructor.getValue(obj.text);
        this.line = this.constructor.getValue(obj.line);
        this.city = this.constructor.getValue(obj.city);
        this.district = this.constructor.getValue(obj.district);
        this.state = this.constructor.getValue(obj.state);
        this.postalCode = this.constructor.getValue(obj.postalCode);
        this.country = this.constructor.getValue(obj.country);
        this.period = this.constructor.getValue(obj.period);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'use', realName: 'use' },
            { name: 'type', realName: 'type' },
            { name: 'text', realName: 'text' },
            { name: 'line', realName: 'line', array: true },
            { name: 'city', realName: 'city' },
            { name: 'district', realName: 'district' },
            { name: 'state', realName: 'state' },
            { name: 'postalCode', realName: 'postalCode' },
            { name: 'country', realName: 'country' },
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

module.exports = Address;
