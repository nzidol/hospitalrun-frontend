/**
 * HospitalRunFHIRAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BackboneElement = require('./BackboneElement');

/**
 * Creates an instance of Stage
 */
class Stage extends BackboneElement {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.summary = this.constructor.getValue(obj.summary);
        this.asessment = this.constructor.getValue(obj.asessment);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'summary', realName: 'summary', type: 'CodeableConcept' },
            { name: 'asessment', realName: 'asessment', array: true, type: 'Reference' },
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

module.exports = Stage;
