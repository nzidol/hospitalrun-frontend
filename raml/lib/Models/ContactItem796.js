/**
 * HospitalRunFHIRAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BackboneElement = require('./BackboneElement');

/**
 * Creates an instance of ContactItem796
 */
class ContactItem796 extends BackboneElement {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.relationship = this.constructor.getValue(obj.relationship);
        this.name = this.constructor.getValue(obj.name);
        this.telecom = this.constructor.getValue(obj.telecom);
        this.address = this.constructor.getValue(obj.address);
        this.gender = this.constructor.getValue(obj.gender);
        this.organization = this.constructor.getValue(obj.organization);
        this.period = this.constructor.getValue(obj.period);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'relationship',
                realName: 'relationship',
                array: true,
                type: 'CodeableConcept',
            },
            { name: 'name', realName: 'name', type: 'HumanName' },
            { name: 'telecom', realName: 'telecom', array: true, type: 'ContactPoint' },
            { name: 'address', realName: 'address', type: 'Address' },
            { name: 'gender', realName: 'gender' },
            { name: 'organization', realName: 'organization', type: 'Reference' },
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

module.exports = ContactItem796;